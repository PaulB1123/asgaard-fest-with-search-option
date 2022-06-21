import Merch from "../img/merch.png";
import { Button3 } from "./Buttons";
import { Link } from "react-router-dom";

export default function Merchandise() {
  return (
    <article className="flex items-center justify-between w-full h-auto bg-concert-redish text-black 2xl:px-36">
      <div className=" w-2/4 p-4 sm:p-8 md:p-12">
        <img className="border-[2px] border-black object-scale-down w-96" src={Merch} alt="" />
      </div>
      <div className="w-2/4 p-2 md:p-14  ">
        <h1 className="text-xl flex flex-col font-acier text-black whitespace-pre sm:text-4xl lg:text-5xl ">Merchandise</h1>
        <p className="text-sm sm:text-base">Festival products can be purchased at the official webshop as well as at the festival.</p>
        <div className="text-sm pt-4">
          <Link to="/shop">
            <Button3 label="GET MERCH" buttonThreeBg="concert-yellow" />
          </Link>
        </div>
      </div>
    </article>
  );
}
