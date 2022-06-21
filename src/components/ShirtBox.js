import ShirtPhoto from "./../img/shirt.png";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

export default function ShirtBox() {
  return (
    <span className="flex flex-col border-[2px] border-black h-[30rem] w-auto">
      <img className="h-3/5 object-cover" src={ShirtPhoto} alt="" />
      <span className="flex flex-col h-2/5 w-full bg-concert-bg">
        <h4 className="p-2 font-bold">Hangover hoodie</h4>
        <p className="p-2 font-bold">399kr</p>
        <div className="flex float-right h-2/5 p-2 items-center justify-center space-x-2">
          <div className="flex items-center h-fit space-x-1 px-1 bg-concert-yellow border-black border-[3px] phone:space-x-2">
            <AiOutlineMinusCircle />
            <p>1</p>
            <AiOutlinePlusCircle />
          </div>
          <div className="text-[0.3rem] bg-black h-fit text-bold p-1 text-center text-white sm:text-xs">
            ADD TO CHART
          </div>
        </div>
      </span>
    </span>
  );
}
