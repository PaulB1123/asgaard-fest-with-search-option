import { Button3 } from "./Buttons";
import { Link } from "react-router-dom";

export default function LogoComp() {
  return (
    <article className="flex flex-col items-center w-full h-auto bg-concert-l-green text-black ">
      <div className="flex flex-col mb-8 pt-16">
        <span className="font-acier text-6xl leading-[1.5rem]">Asgård</span>
        <span className="font-bold p-0">FESTIVAL</span>
      </div>
      <div className="flex space-x-2 pb-8">
        <div className="text-sm">
          <Link to="/home">
            <Button3 label="HOME" buttonThreeBg="concert-yellow" />
          </Link>
        </div>
        <div className="text-sm">
          <Link to="/home">
            <Button3 label="CONTACT" buttonThreeBg="concert-redish" />
          </Link>
        </div>
      </div>
    </article>
  );
}
