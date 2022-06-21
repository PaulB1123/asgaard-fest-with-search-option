import GetHere from "../components/GetHere";
import ThisIsUs from "../components/ThisIsUs";
import Merchandise from "../components/Merchandise";
import LogoComp from "../components/LogoComp";
import { Button2 } from "../components/Buttons";
import Content from "../components/Content";
import Stages from "../components/Stages";
import Passes from "../components/Passes";
import Sponsors from "../components/Sponsors";
import { Link } from "react-router-dom";
const urlSlugMatch = require("url-slug-match");

export default function Home({
  userCart,
  setUserCart,
  countdown,
  setCountdown,
}) {
  const homePageLineup =
    "Led Zeppelin * AC/DC | Terminalist * Tool * The Who | The Beatles * Pink Floyd * Queen * Metallica | The Rolling Stones * Guns N' Roses * Nirvana | Black Sabbath * Raised Fist* Refused * Steuber Group * Simonis Inc | Halvorson, Kertzmann and Predovic * Huels, Ratke and Fritsch * A Perfect Circle | Price, Grant and Bechtelar * Erdman - Casper * Nikolaus Inc";

  return (
    <>
      <header className=" mx-4 phone:mx-8 mb-14 relative">
        <img
          className="w-full object-cover max-h-[30rem]"
          src="./images/concert-main-img.png"
          alt=""
        />
        <div className="text-white absolute top-0 flex flex-col items-center justify-center h-full w-full text-center space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-acier ht-auto">
            20-27 Jul 2022
          </h1>
          <h3 className="text-md sm:text-3xl font-aciersolid lg:text-4xl lg:font-acier">
            #Music #Dance #Love
          </h3>
          <p className="hidden sm:block text-xs sm:text-base lg:text-xl font-semibold">
            Get ready for the world’s biggest music festival.
            <br></br> 126 bands on 3 stages in 7 days.{" "}
          </p>
        </div>
      </header>
      <Content>
        <HomeLineUp lineUp={homePageLineup} />
        <div>
          <div className="py-4 leading-none">
            <Stages
              bgColor="concert-pink"
              stagesBG="../../images/party1.png"
              stageName="Midgard"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-x-5">
            <Stages
              bgColor="concert-blue"
              stagesBG="../../images/party2.png"
              stageName="Vanaheim"
            />
            <Stages
              bgColor="concert-b-green"
              stagesBG="../../images/party3.png"
              stageName="Jotunheim"
            />
          </div>
        </div>
        <div>
          <Passes
            userCart={userCart}
            setUserCart={setUserCart}
            countdown={countdown}
            setCountdown={setCountdown}
          />
        </div>
        <div>
          <GetHere />
        </div>
        <div>
          <ThisIsUs />
        </div>
        <div>
          <Merchandise />
        </div>
        <div>
          <LogoComp />
        </div>
        <div>
          <Sponsors />
        </div>
      </Content>
    </>
  );
}

export function HomeLineUp({ lineUp }) {
  const lineupRows = lineUp.split("|");

  return (
    <article className=" font-aciersolid md:font-acier bg-concert-yellow text-black px-4 phone:px-8 pt-[5vw] pb-[4vw] w-full h-auto space-y-12">
      <ul className="grid">
        {lineupRows.map((row, index) => (
          <li
            key={`row${index}`}
            className={`text-${
              7 - index
            }rem justify-center whitespace-normal flex flex-wrap`}
          >
            <BandLink bandsString={row} />
          </li>
        ))}
      </ul>
      <div className="flex phone justify-center space-x-3">
        <Link to="/lineup">
          <Button2 label="ALL ARTISTS" bgcolor="concert-pink" />
        </Link>
        <Link to="/schedule">
          <Button2 label="DAILY SCHEDULE" bgcolor="concert-b-green" />
        </Link>
      </div>
    </article>
  );
}

export function BandLink({ bandsString }) {
  const bands = bandsString.split("*");

  return (
    <>
      {bands.map((band, index) => {
        return (
          <Link
            key={`artist${index}`}
            className="w-fit hover:bg-concert-pink md:hover:font-aciersolid"
            to={`artist/${urlSlugMatch(band.trim())}`}
          >{`${band.trim()}/`}</Link>
        );
      })}
    </>
  );
}
