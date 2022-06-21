import { Link } from "react-router-dom";

export default function Stages({ bgColor, stagesBG, stageName }) {
  return (
    <div className="w-full items-center">
      <Link to={"/lineup"}>
        <img
          className="row-span-3 w-full "
          src={`${stagesBG}`} /*"../../images/party1.svg"*/
          alt=""
        ></img>
        <div
          className={`bg-${bgColor} flex flex-col w-full h-auto pb-2 text-center justify-center items-center`}
        >
          <h2 className="flex leading-none h-fit align-text-bottom text-black font-acier text-[3rem] pt-2">
            {`${stageName}`}
          </h2>
          <h4 className=" text-xs text-gray-800 leading-none font-montserrat font-bold">
            STAGE
          </h4>
        </div>
      </Link>
    </div>
  );
}
