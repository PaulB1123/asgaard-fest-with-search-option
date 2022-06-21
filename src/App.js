import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lineup from "./pages/Lineup";
import Artist from "./pages/Artist";
import Schedule from "./pages/Schedule";
import Shop from "./pages/Shop";
import Purchases from "./pages/Purchases";
import Account from "./pages/Account";
import Whoups404 from "./pages/Whoups404";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { useState, useEffect } from "react";

const urlSlugMatch = require("url-slug-match");

function App() {
  const [bandsList, setProducts] = useState([]);
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [userCart, setUserCart] = useState([]);
  const [countdown, setCountdown] = useState(false);
  const [user, setUser] = useState();

  const tenMinutesInMs = 10 * 60 * 1000;
  // const tenSeconds = 15000;
  const nowInMilsec = new Date().getTime();

  const timeAfterTenMins = nowInMilsec + tenMinutesInMs;
  // const timeAfterTenSec = nowInMilsec + tenSeconds;

  useEffect(() => {
    async function getProducts() {
      const res = await fetch("https://the-javascript-bar-project.herokuapp.com/bands");
      const data = await res.json();
      setProducts(data);
    }
    getProducts();
  }, []);

  let updatedBandList = [];

  // console.log(bandsList);
  bandsList.map((band) => {
    // console.log(band.name);
    let thisBand = band;
    thisBand.id = urlSlugMatch(band.name.trim());
    updatedBandList = [...updatedBandList, thisBand];
  });

  // console.log(updatedBandList);

  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    async function getLineUp() {
      const res = await fetch("https://the-javascript-bar-project.herokuapp.com/schedule");
      const data = await res.json();
      setSchedule(data);
    }
    getLineUp();
  }, []);

  // console.log(schedule);

  return (
    <div className="App bg-black font-montserrat">
      <Header bgColor="bg-concert-pink" countdown={countdown} counterTime={timeAfterTenMins} />
      <Routes>
        <Route exact path="/" element={<Home userCart={userCart} setUserCart={setUserCart} countdown={countdown} setCountdown={setCountdown} />} />
        <Route path="lineup" element={<Lineup schedule={schedule} bands={bandsList} />} />
        <Route path="artist/:id" element={<Artist bands={bandsList} schedule={schedule} />} />
        <Route path="schedule" element={<Schedule schedule={schedule} bands={bandsList} />} />
        <Route path="shop" element={<Shop userCart={userCart} setUserCart={setUserCart} countdown={countdown} setCountdown={setCountdown} />} />
        <Route
          path="purchases"
          element={<Purchases userCart={userCart} setUserCart={setUserCart} userAuthenticated={userAuthenticated} setUserAuthenticated={setUserAuthenticated} countdown={countdown} setCountdown={setCountdown} user={user} setUser={setUser} />}
        />
        <Route
          path="account"
          element={<Account user={user} setUser={setUser} userCart={userCart} setUserCart={setUserCart} userAuthenticated={userAuthenticated} setUserAuthenticated={setUserAuthenticated} countdown={countdown} setCountdown={setCountdown} />}
        />
        <Route path="*" element={<Whoups404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
