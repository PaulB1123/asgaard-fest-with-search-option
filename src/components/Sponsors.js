import Lidl from "./../img/lidl.svg";
import Bank from "./../img/bank.svg";
import Master from "./../img/master.svg";
import Cola from "./../img/cola.svg";
import Eon from "./../img/eon.svg";
import Glo from "./../img/glo.svg";

export default function Sponsors() {
  return (
    <article className="flex flex-col items-center w-full h-auto bg-black text-concert-yellow border-[3px] border-concert-yellow">
      <div className="flex flex-col mb-8 pt-8">
        <span className="text-4xl font-acier text-center sm:text-6xl">
          PARTNERS
        </span>
        <span className="flex h-fit w-fit space-x-4 px-4">
          <span>
            <img className="scale-100" src={Bank} alt="" />
          </span>
          <span>
            <img className="scale-100 fill-white" src={Lidl} alt="" />
          </span>
          <span>
            <img className="scale-75" src={Master} alt="" />
          </span>
          <span>
            <img className="scale-75" src={Cola} alt="" />
          </span>
          <span>
            <img className="scale-75" src={Eon} alt="" />
          </span>
          <span>
            <img className="scale-75" src={Glo} alt="" />
          </span>
        </span>
        <span className=" flex row w-3/5 place-self-center pt-2 pb-2">
          <span>
            <img className="scale-50" src={Master} alt="" />
          </span>
          <span>
            <img className="scale-50" src={Eon} alt="" />
          </span>
          <span>
            <img className="scale-50" src={Cola} alt="" />
          </span>
          <span>
            <img className="scale-50" src={Glo} alt="" />
          </span>
          <span>
            <img className="scale-50" src={Eon} alt="" />
          </span>
        </span>
        <span className=" flex row w-3/5 place-self-center space-x-4">
          <span>
            <img className="scale-75" src={Eon} alt="" />
          </span>
          <span>
            <img className="scale-75" src={Glo} alt="" />
          </span>
          <span className="w-auto h-8">
            <img className="scale-75" src={Bank} alt="" />
          </span>
          <span>
            <img className="scale-75" src={Eon} alt="" />
          </span>
          <span>
            <img className="scale-75" src={Lidl} alt="" />
          </span>
          <span>
            <img className="scale-75" src={Cola} alt="" />
          </span>
          <span>
            <img className="scale-75" src={Eon} alt="" />
          </span>
        </span>
      </div>
    </article>
  );
}
