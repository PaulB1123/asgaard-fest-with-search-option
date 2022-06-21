import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

export function Button1({ label }) {
  return (
    <div
      className={`text-black font-montserrat px-4 py-1 w-fit font-bold border-[3px] border-black text-sm phone:text-lg bg-concert-b-green hover:bg-concert-pink`}
    >
      {label}
    </div>
  );
}

export function Button2({ label, bgcolor }) {
  return (
    <div
      className={`text-black font-montserrat px-4 py-1 w-fit font-bold border-[3px] hover:bg-black hover:text-concert-yellow border-black text-sm phone:text-xl bg-${bgcolor}`}
    >
      {label}
    </div>
  );
}

Button2.defaultProps = {
  bgcolor: "concert-b-green",
  textSize: "xl",
};

export function Button3({ label, buttonThreeBg }) {
  return (
    <div
      className={`text-[0.6rem] text-black bg-${buttonThreeBg} whitespace-pre font-montserrat px-4 py-1 w-fit font-bold border-[3px] border-black text-sm sm:text-sm`}
    >
      {label}
    </div>
  );
}

Button3.defaultProps = {
  bgcolor: "concert-b-green",
  textSize: "xl",
};

export function SeeDetailButton({ label, bgcolor }) {
  return (
    <div
      className={`pr-2 whitespace-pre sm:text-black font-montserrat w-fit h-fit font-bold border-[2px] border-black text-xs bg-${bgcolor} `}
    >
      <ul className="flex items-center space-x-1">
        <li>
          <TiArrowSortedDown />
        </li>
        <li>{label}</li>
      </ul>
    </div>
  );
}

SeeDetailButton.defaultProps = {
  bgcolor: "concert-yellow",
};

export function SeeDetailButtonUp({ label, bgcolor }) {
  return (
    <div
      className={`pr-2 whitespace-pre sm:text-black font-montserrat w-fit font-bold border-[2px] border-black text-xs bg-${bgcolor}`}
    >
      <ul className="flex items-center space-x-1">
        <li>
          <TiArrowSortedUp />
        </li>
        <li>{label}</li>
      </ul>
    </div>
  );
}

SeeDetailButtonUp.defaultProps = {
  bgcolor: "concert-redish",
};

export function DetailButton({ label, bgcolor }) {
  return (
    <div
      className={`text-black font-montserrat px-7 w-fit font-bold border-[3px] border-black text-lg bg-${bgcolor}`}
    >
      <div className="flex items-center ">{label}</div>
    </div>
  );
}

DetailButton.defaultProps = {
  bgcolor: "concert-pink",
};
