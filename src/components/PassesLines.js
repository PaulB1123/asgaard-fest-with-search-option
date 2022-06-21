import { SeeDetailButton, SeeDetailButtonUp } from "./Buttons";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import React, { useState } from "react";
import { motion } from "framer-motion";

const oneCartItem = {
  id: "",
  type: "",
  ticketType: "",
  area: "",
  label: "",
  price: 0,
  quantity: 0,
  logo: "",
  bgColor: "",
};

export default function PassesLines({
  passName,
  passPrice,
  bgPasses,
  dropText,
  userCart,
  setUserCart,
  cartItemId,
  countdown,
  setCountdown,
  logo,
}) {
  const [show, setShow] = useState(false);
  const [itemAdded, setItemAdded] = useState(false);
  let [itemQuantity, setItemQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();
    // console.log("Submitted", itemQuantity);

    const ticket = Object.create(oneCartItem);

    ticket.id = cartItemId;
    ticket.type = "ticket";
    ticket.ticketType = "regular";
    ticket.label = `${passName} - Ticket`;
    ticket.price = passPrice;
    ticket.quantity = itemQuantity;
    ticket.logo = logo;
    ticket.bgColor = bgPasses;
    // console.log(countdown);

    addToCart(ticket);

    setItemQuantity(1);
    /*useEffect(() => {
      const interval = setInterval(() => {
        setCountDown(countDownDate - new Date().getTime());
      }, 1000);
  
      return () => clearInterval(interval);
    }, [countDownDate]);*/
    !countdown && setCountdown(true);
    setItemAdded(true);

    const interval = setInterval(() => {
      setItemAdded(false);
    }, 5000);
    interval();
    clearInterval(interval);
  }

  function addToCart(ticket) {
    if (userCart.find((cartItem) => cartItem.id === ticket.id)) {
      // console.log("Item already added");
      setUserCart((old) =>
        old.map((item) => {
          if (item.id === ticket.id) {
            const copy = { ...item };
            copy.quantity = copy.quantity + ticket.quantity;
            return copy;
          } else {
            return item;
          }
        })
      );
    } else {
      setUserCart((oldArray) => [...oldArray, ticket]);
    }
  }

  return (
    <li className="w-full font-bold">
      <div className="w-full md:h-16 bg-concert-bg border-[3px] border-black flex">
        <div
          className={`h-full w-10 bg-${bgPasses} border-r-[2px] border-black hidden md:block`}
        ></div>
        <div className="relative px-3 py-2 md:py-0 justify-between w-full flex flex-col md:flex-row h-full gap-y-6 overflow-hidden">
          <div className=" flex text-xs items-center pb-1 space-x-10 sm:text-sm">
            <div className=" w-32 md:w-40">
              <h4 className="whitespace-pre text-base md:text-lg">{`${passName.toUpperCase()}`}</h4>
              <button
                onClick={() => {
                  setShow(!show);
                }}
                /* className="mt-1 mb-1" */
              >
                {show ? (
                  <SeeDetailButtonUp label="Details" />
                ) : (
                  <SeeDetailButton label="Details" />
                )}
              </button>
            </div>
            <p className="pr-2 text-xs">
              <span className="text-xl font-bold">{passPrice}</span> DKK
            </p>
          </div>
          <form
            className="flex h-full items-center space-x-2 ml-auto"
            onSubmit={handleSubmit}
          >
            {itemAdded ? (
              <label className="flex items-center h-8 px-1 bg-concert-yellow border-black border-[2px] selectQuantity">
                <AiOutlineMinusCircle className="text-xl" />
                <input
                  disabled
                  type="number"
                  min="1"
                  max="6"
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
                <AiOutlineMinusCircle
                  className="text-xl cursor-pointer"
                  onClick={() =>
                    itemQuantity > 1 && setItemQuantity(itemQuantity - 1)
                  }
                />
                <input
                  type="number"
                  min="1"
                  max="6"
                  required
                  value={itemQuantity}
                  onChange={(e) => setItemQuantity(e.target.value)}
                  onBlur={(e) => e.target.value === "" && setItemQuantity(1)}
                  className="bg-concert-yellow text-center p-0 font-bold w-10 border-none"
                />
                <AiOutlinePlusCircle
                  className="text-xl cursor-pointer"
                  onClick={() =>
                    itemQuantity >= 1 && setItemQuantity(itemQuantity + 1)
                  }
                />
              </label>
            )}

            {itemAdded ? (
              <button
                disabled
                className=" h-8 font-bold p-1 bg-gray-600 flex items-center text-gray-300 text-xs"
              >
                ADD TO CHART
              </button>
            ) : (
              <button className=" bg-black h-8 font-bold p-1 flex items-center text-white text-xs">
                ADD TO CHART
              </button>
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
              className={`absolute left-0 top-0 w-full h-full flex items-center justify-center bg-${bgPasses}`}
            >
              <p className="text-xl">Item added to cart</p>
            </motion.div>
          )}
        </div>
      </div>
      {show && (
        <div
          onClick={() => {
            setShow(!show);
          }}
          className="h-auto bg-yellow-50"
        >
          <p className="p-4 text-base cursor-pointer sm:font-semibold">
            {`${dropText}`}
          </p>
        </div>
      )}
    </li>
  );
}
