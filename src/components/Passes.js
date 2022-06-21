import { Button2 } from "./Buttons";
import PassesLines from "./PassesLines";
import { useState } from "react";

export default function Passes({
  userCart,
  setUserCart,
  countdown,
  setCountdown,
}) {
  const [toggleHidden, setToggleHidden] = useState(false);

  return (
    <article className="w-full h-auto bg-concert-pink text-black pb-[3vw]">
      <h1 className="font-acier p-5 text-6xl text-black">FESTIVAL PASSES</h1>
      <ul className="space-y-6 px-[5vw] max-w-[1200px]">
        <PassesLines
          passName="Regular pass"
          passPrice={799}
          bgPasses="concert-l-green"
          dropText="It allows entry to the event for ALL SEVEN days and ALL STAGES, but does not include additional drinks and food packages, as well as discounts on merchandise."
          userCart={userCart}
          setUserCart={setUserCart}
          cartItemId="ticket1"
          setCountdown={setCountdown}
          countdown={countdown}
          logo="./images/regularTicket.png"
        />

        <PassesLines
          passName="VIP pass"
          passPrice={1299}
          bgPasses="concert-yellow"
          dropText="It allows entry to the event for ALL SEVEN days and ALL STAGES, as well as DAILY 6-PACK OF BEERS and a DAILY PACKAGE WITH SANDWITCH AND CHIPS, but no discounts on merchendise."
          userCart={userCart}
          setUserCart={setUserCart}
          cartItemId="ticket2"
          setCountdown={setCountdown}
          countdown={countdown}
          logo="./images/vipTicket.png"
        />
        <PassesLines
          passName="Premium pass"
          passPrice={1599}
          bgPasses="concert-redish"
          dropText="It allows entry to the event for ALL SEVEN days and ALL STAGES, as well as DAILY 6-PACK OF BEERS and a DAILY PACKAGE WITH SANDWITCH AND CHIPS,T-SHIRT, BASSEBALL HAT and 40% DISCOUNT on merchendises."
          userCart={userCart}
          setUserCart={setUserCart}
          cartItemId="ticket3"
          setCountdown={setCountdown}
          countdown={countdown}
          logo="./images/premiumTicket.png"
        />
        {toggleHidden && (
          <>
            <PassesLines
              passName="Day pass"
              passPrice={130}
              bgPasses="concert-blue"
              dropText="It allows entry for a ONE DAY FOR ALL STAGES, but does not include additional drinks and food packages, as well as discounts on merchandise."
              userCart={userCart}
              setUserCart={setUserCart}
              cartItemId="ticket4"
              setCountdown={setCountdown}
              countdown={countdown}
              logo="./images/blueTicket.png"
            />
            <PassesLines
              passName="3 day pass"
              passPrice={400}
              bgPasses="concert-b-green"
              dropText="It allows entry for THREE DAY FOR ALL STAGES, but does not include additional drinks and food packages, as well as discounts on merchandise."
              userCart={userCart}
              setUserCart={setUserCart}
              cartItemId="ticket5"
              setCountdown={setCountdown}
              countdown={countdown}
              logo="./images/lGreenTicket.png"
            />
          </>
        )}
      </ul>
      <button
        className="p-5"
        onClick={() => {
          setToggleHidden(!toggleHidden);
        }}
      >
        <Button2
          label={toggleHidden ? "Hide options" : "See all options"}
          bgcolor="concert-yellow"
        />
      </button>
    </article>
  );
}
