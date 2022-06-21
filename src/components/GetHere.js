import Tent from "../img/tent.png";
import { Button3 } from "./Buttons";
import { Link } from "react-router-dom";

export default function GetHere() {
  return (
    <article className="flex items-center justify-between w-full h-auto bg-concert-yellow text-black 2xl:px-36 ">
      <div className="w-2/4 p-8 md:p-14  ">
        <h1 className="flex flex-col font-acier text-black whitespace-pre phone: text-4xl sm:text-5xl md:text-6xl">
          GET HERE <br />
          STAY HERE
        </h1>
        <p className="text-sm sm:text-base">
          We offer five locations, depending on your social and life
          preferences, as well as two types of tents.
        </p>
        <div className="text-sm pt-4">
          <Link to="/shop">
            <Button3 label="SEE ALL CAMPS" buttonThreeBg="concert-redish" />
          </Link>
        </div>
      </div>
      <div className=" w-2/4 p-4 sm:p-8 md:p-12 ">
        <img
          className="border-[2px] border-black object-scale-down w-96"
          src={Tent}
          alt=""
        />
      </div>
    </article>
  );
}
