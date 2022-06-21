import { Link } from "react-router-dom";
import { Button2 } from "../components/Buttons";

export default function Footer() {
  return (
    <footer className=" p-8 lg:w-full bg-black text-concert-yellow sm:p-8 sm:pt-16  md:pl-8  md:pr-8">
      <div className="flex flex-col items-center g-10 font-bold text-lg border-t-[3px] border-concert-yellow pt-8 md: grid-flow-col gap-4  lg:flex-row justify-between leading-8 xl: 2xl: ">
        <ul className="sm:m-1">
          <li className="">
            <Link to={"/"} className="text-base leading-extra-loose">
              <div className="flex flex-col mb-8">
                <span className="font-acier text-5xl font-extralight mb-0">Asgård</span>
                <span> FESTIVAL</span>
              </div>
            </Link>
          </li>
        </ul>

        <ul className="mt-2 mb-2 md:mt-0 md:mb-0">
            <li>Rules & Regulations</li>
            <li>Terms of use</li>
            <li>Privacy Policy</li>
        </ul>

        <ul className="mt-2 mb-2 md:mt-0 md:mb-0">
            <li>Summer Well Shop</li>
            <li>Delete personal data</li>
            <li>ANPC</li>
        </ul>

        <div className="mt-2 mb-2 md:mt-0 md:mb-0 flex flex-col">
          <h3 className="font-acier font-normal text-3xl">NEWSLETTER</h3>
          <input className="text-white bg-black border border-[3px] mb-2 w-[15rem] border-concert-redish placeholder:italic placeholder:pl-2 placeholder:text-gray-400" placeholder="Tell us about yourself"></input>
          <Button2 label="SUBSCRIBE" bgcolor="concert-pink" />
        </div>
      </div>

      <div className="mt-16 flex flex-col justify-center items-center lg:items-start">
        <p className=" font-bold text-[12px] lg:text-base ">Copyright © DRAGO Advertising SRL, Reg. Com. J40/7643/2003 </p>
      </div>
    </footer>
  );
}
