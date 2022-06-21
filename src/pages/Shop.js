import Content from "../components/Content";
import MerchOffer from "../components/MerchOffer";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { SeeDetailButton, SeeDetailButtonUp, Button2 } from "../components/Buttons";
// import useFetch from "../hooks/useFetch";
import Passes from "../components/Passes";
import useCountdown from "../hooks/useCountdown";
import { useState } from "react";
import { motion } from "framer-motion";

// const targetDate = this;
const targetDate = new Date("2022, 07, 20");

export default function Shop({ userCart, setUserCart, countdown, setCountdown }) {
  const [field, setDay] = useState(0);

  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  // const { loading, error, data } = useFetch("https://the-javascript-bar-project.herokuapp.com/available-spots");

  function handleClick(value) {
    setDay(value);
    // if (value == 1) {
    //   console.log("this is working");
    //   const Passes = document.getElementById("1");
    //   console.log(Passes);
    //   // Passes.scrollIntoView();
    // }
    // if (value == 0) {
    //   console.log("this ");
    // }
    // if (value == 2) {
    //   console.log("this now ");
    // }
  }

  return (
    <Content>
      <div className="font-acier text-center pt-20 pb-10">
        <p className="text-4xl font-aciersolid">
          {days} Days {hours}h {minutes}' {seconds}"
        </p>
        <h1 className="text-6xl md:text-7xl">until impact</h1>
        <p className="text-2xl ">HUSTON WE GOT THE TICKETS</p>
      </div>
      <div className="w-full sticky top-[6rem] z-10 bg-black ">
        <div className="flex flex-row justify-between  ">
          <button
            className={`flex basis-1/3 m-[0.5rem] ml-0 p-[0.5rem] text-[0.75rem]  justify-center  md:p-[1.25rem] md:text-[2rem] font-acier text-semibold hover:font-aciersolid text-black w-auto ${
              field === 0 ? `bg-black text-concert-pink font-aciersolid border-[2px] border-concert-pink ` : `bg-concert-pink text-black `
            } `}
            value={0}
            onClick={(event) => handleClick(event.target.value)}
          >
            Festival Passes
          </button>
          <button
            className={`flex basis-1/3 m-[0.5rem] p-[0.5rem] text-[0.75rem]    justify-center md:p-[1.25rem] md:text-[2rem] font-acier text-semibold hover:font-aciersolid  text-black w-auto ${
              field === 1 ? `bg-black text-concert-yellow font-aciersolid border-[2px] border-concert-yellow ` : `bg-concert-yellow text-black `
            } `}
            value={1}
            onClick={(event) => handleClick(event.target.value)}
          >
            Camping Accomodaion
          </button>
          <button
            className={`flex basis-1/3 m-[0.5rem] mr-0 p-[0.5rem] text-[0.75rem]   justify-center md:p-[1.25rem] md:text-[2rem] font-acier text-semibold hover:font-aciersolid  text-black w-auto ${
              field === 2 ? `bg-black text-concert-redish font-aciersolid border-[2px] border-concert-redish ` : `bg-concert-redish text-black `
            } `}
            value={2}
            onClick={(event) => handleClick(event.target.value)}
          >
            Merch
          </button>
        </div>
      </div>

      <Passes userCart={userCart} setUserCart={setUserCart} countdown={countdown} setCountdown={setCountdown} id="0" />
      <CampContainer userCart={userCart} setUserCart={setUserCart} id="1" />
      <MerchOffer id="2" />
    </Content>
  );
}

export function CampContainer({ userCart, setUserCart }) {
  return (
    <div className={`w-full bg-concert-yellow text-black pb-[3vw]`}>
      <h1 className="text-3xl phone:text-5xl font-acier p-5">CAMPING ACCOMODATION</h1>
      <ul className="space-y-6 px-[5vw] max-w-[1200px]">
        <CampingLines
          userCart={userCart}
          setUserCart={setUserCart}
          accomodationArea="Svartheim"
          dropText="Svartheim, unlike the Finish Black metal album, is a clean and silence camping area. This means all the campers must clean up after themselves and no music after 22 p.m."
          img="./images/camp1.png"
        />
        <CampingLines
          userCart={userCart}
          setUserCart={setUserCart}
          accomodationArea="Nilfheim"
          dropText="Nilfheim is located in the forest, where some cold mornings you'll experiencing the beautiful morning frog of (insert country). The camping area is mostly designated for the more mature audience."
          img="./images/camp2.png"
        />
        <CampingLines
          userCart={userCart}
          setUserCart={setUserCart}
          accomodationArea="Helheim"
          dropText="Helheim this is a camping area for special needs people, which means there are charging stations for wheelchairs and special events for the campers there in order to secure a full festival experience."
          img="./images/camp3.png"
        />
        <CampingLines
          userCart={userCart}
          setUserCart={setUserCart}
          accomodationArea="Muspelheim"
          dropText="Muspelhiem is located close the stages and is one of the two camping sites where the parties and events never stops."
          img="./images/camp4.png"
        />
        <CampingLines
          userCart={userCart}
          setUserCart={setUserCart}
          accomodationArea="Alfheim"
          dropText="Alfheim is located next to the entrance to the stages and is one of the two camping sites where the parties and events never stops."
          img="./images/camp5.png"
        />
      </ul>
    </div>
  );
}

export function CampingLines({ userCart, setUserCart, dropText, accomodationArea, img }) {
  const [dropDown, setDropDown] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <li className="w-full h-fit">
      <div className="w-full h-36 md:h-32 bg-concert-bg border-[3px] border-black flex">
        <img src={img} className="hidden sm:block h-auto w-96 object-cover" alt=""></img>
        <div className="w-full flex flex-col justify-between p-2">
          <div className="flex flex-col md:flex-row">
            <div>
              <h4 className="text-2xl font-bold">{accomodationArea}</h4>
              <p>
                Spots available: <span className="font-bold">10</span>
              </p>
            </div>
            <p className="font-bold md:m-auto">
              From <span className="text-lg">299 kr</span>
            </p>
          </div>
          <div className="flex h-fit w-full justify-between items-end">
            <button
              onClick={() => {
                setShow(!show);
                setDropDown(false);
              }}
            >
              {show ? <SeeDetailButtonUp label="Details" /> : <SeeDetailButton label="Details" />}
            </button>
            <button
              onClick={() => {
                setDropDown(!dropDown);
                setShow(false);
              }}
            >
              <Button2 label="Book" bgcolor="concert-pink" />
            </button>
          </div>
        </div>
      </div>
      {show && (
        <div
          onClick={() => {
            setShow(!show);
          }}
          className="h-auto bg-yellow-50"
        >
          <p className="p-4 text-sm cursor-pointer sm:text-base font-semibold">{dropText}</p>
        </div>
      )}
      {dropDown && (
        <div className="w-full items-center flex flex-col md:flex-row bg-concert-yellowish px-[5vw] py-[4vw] gap-x-[5vw] gap-y-[7vw]">
          <CampingOption userCart={userCart} setUserCart={setUserCart} accomodationPrice={299} accomodationArea={accomodationArea} accomodationType="2 persons tent" cartItemId={`2pers-${accomodationArea}`} tentPhoto="./images/twoTent.png" />
          <CampingOption userCart={userCart} setUserCart={setUserCart} accomodationPrice={399} accomodationArea={accomodationArea} accomodationType="3 persons tent" cartItemId={`3pers-${accomodationArea}`} tentPhoto="./images/threeTent.png" />
        </div>
      )}
    </li>
  );
}

const oneCartItem = {
  id: "",
  type: "",
  ticketType: "",
  area: "",
  label: "",
  price: 0,
  quantity: 0,
};

function CampingOption({ userCart, setUserCart, cartItemId, accomodationPrice, accomodationArea, accomodationType, tentPhoto }) {
  const [itemAdded, setItemAdded] = useState(false);
  let [itemQuantity, setItemQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();
    // console.log("Submitted", itemQuantity);

    const accomodation = Object.create(oneCartItem);

    accomodation.id = cartItemId;
    accomodation.type = "accomodation";
    accomodation.area = accomodationArea;
    accomodation.label = `${accomodationType} - ${accomodationArea}`;
    accomodation.price = accomodationPrice;
    accomodation.quantity = itemQuantity;

    switch (accomodationArea) {
      case "Svartheim":
        accomodation.logo = "./images/svartheim.png";
        break;
      case "Nilfheim":
        accomodation.logo = "./images/nilfheim.png";
        break;
      case "Helheim":
        accomodation.logo = "./images/helheim.png";
        break;
      case "Muspelheim":
        accomodation.logo = "./images/muspelheim.png";
        break;
      case "Alfheim":
        accomodation.logo = "./images/alfheim.png";
        break;
      default:
        accomodation.logo = "No value found";
    }
    // console.log(countdown);

    addToCart(accomodation);
    setItemAdded(true);
    const interval = setInterval(() => {
      setItemAdded(false);
    }, 5000);
    interval();
    clearInterval(interval);
    setItemQuantity(1);
  }

  function addToCart(accomodation) {
    if (userCart.find((cartItem) => cartItem.id === accomodation.id)) {
      // console.log("Item already added");
      setUserCart((old) =>
        old.map((item) => {
          if (item.id === accomodation.id) {
            const copy = { ...item };
            copy.quantity = copy.quantity + accomodation.quantity;
            return copy;
          } else {
            return item;
          }
        })
      );
    } else {
      setUserCart((oldArray) => [...oldArray, accomodation]);
    }
  }

  return (
    <div className=" md:w-full font-semibold bg-yellow-200">
      <img src={tentPhoto} alt="" className="w-full h-40 md:h-[16vw] object-cover" />
      <div className="relative overflow-hidden pb-2">
        <p className="text-base pt-2 px-2">{accomodationType}</p>
        <p className="text-base px-2">
          <span className="text-xl font-bold">{accomodationPrice}</span> DKK
        </p>
        <form className="flex items-center justify-center space-x-2 pt-4" onSubmit={handleSubmit}>
          {itemAdded ? (
            <label className="flex items-center h-8 px-1 bg-concert-yellow border-black border-[2px] selectQuantity">
              <AiOutlineMinusCircle className="text-xl" />
              <input
                disabled
                type="number"
                min="1"
                max="5"
                required
                value={itemQuantity}
                onChange={(e) => setItemQuantity(e.target.value)}
                onBlur={(e) => e.target.value === "" && setItemQuantity(1)}
                className="bg-concert-yellow text-center p-0 font-bold w-10 border-none"
              />
              <AiOutlinePlusCircle className="text-xl" />
            </label>
          ) : (
            <label className="flex items-center h-8 px-1 bg-concert-yellow border-black border-[2px] selectQuantity">
              <AiOutlineMinusCircle className="text-xl cursor-pointer" onClick={() => itemQuantity > 1 && setItemQuantity(itemQuantity - 1)} />
              <input
                type="number"
                min="1"
                max="5"
                required
                value={itemQuantity}
                onChange={(e) => setItemQuantity(e.target.value)}
                onBlur={(e) => e.target.value === "" && setItemQuantity(1)}
                className="bg-concert-yellow text-center p-0 font-bold w-10 border-none"
              />
              <AiOutlinePlusCircle className="text-xl cursor-pointer" onClick={() => itemQuantity >= 1 && setItemQuantity(itemQuantity + 1)} />
            </label>
          )}
          {itemAdded ? (
            <button disabled className="bg-gray-600 h-8 font-bold p-1 flex items-center text-gray-300 text-xs">
              ADD TO CHART
            </button>
          ) : (
            <button className=" bg-black h-8 font-bold p-1 flex items-center text-white text-xs">ADD TO CHART</button>
          )}
        </form>
        {itemAdded && (
          <motion.div
            animate={{ x: [0, 1000, 0] }}
            initial={{ left: -1000 }}
            transition={{
              ease: "easeInOut",
              duration: 6,
              times: [0, 0.2, 1],
            }}
            className={`absolute left-0 top-0 w-full h-full flex items-center justify-center bg-concert-redish`}
          >
            <p className="text-xl">Item added to cart</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/*handleSubmit && (
  <motion.div
    animate={{ x: [0, 1000, 0] }}
    initial={{ left: -1000 }}
    transition={{
      ease: "easeInOut",
      duration: 6,
      times: [0, 0.2, 1],
    }}
    className="absolute left-0 top-0 w-full h-full flex items-center justify-center bg-black"
  >
    <p className="text-xl">Item added to cart</p>
  </motion.div>
)*/
