import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
import { useState } from "react";

export default function Search({ query, onQueryChange, sortBy, onSortByChange, orderBy, onOrderByChange, filleredDisplayband }) {
  let [toggleSort, setToggleSort] = useState(false);

  //   filleredDisplayband.map(
  //     (item, index) => console.log(item.genre)
  //     // <div key={`item#${index}`} className="bg-gray-600 text-white ">
  //     //   {item.genre}
  //     // </div>
  //   );

  return (
    <>
      <div className=" flex flex-row sm:flex-row sm:p-4 gap ">
        <div>
          <button
            onClick={() => {
              setToggleSort(!toggleSort);
            }}
            className={`flex flex-row justify-center items-center m-[0.25rem] text-black font-montserrat px-2 py-1 w-fit font-bold border-[3px] border-black text-sm phone:text-lg bg-concert-yellow mr-2`}
          >
            ALPHABETICAL <div> {toggleSort === false ? <RiArrowDownSLine size={32} /> : <RiArrowUpSLine size={32} />} </div>
          </button>
          <DropDownAZ toggle={toggleSort} sortBy={sortBy} onSortByChange={(mySort) => onSortByChange(mySort)} orderBy={orderBy} onOrderByChange={(myOrder) => onOrderByChange(myOrder)} />
        </div>

        {/* <div>
          <button
            onClick={() => {
              setToggleSortGenre(!toggleSortGenre);
            }}
            className={`flex flex-row justify-center items-center m-[0.25rem] text-black font-montserrat px-2 py-1 w-fit font-bold border-[3px] border-black text-sm phone:text-lg bg-concert-yellow mr-2`}
          >
            GENRE <div> {toggleSortGenre === false ? <RiArrowDownSLine size={32} /> : <RiArrowUpSLine size={32} />} </div>
          </button>
          <DropDownGenre toggle={toggleSortGenre} />
        </div> */}
      </div>
      <div className="flex justify-center sm:items-center">
        <div class="form-floating m-[0.25rem] w-[17.8rem] sm:w-auto xl:w-96">
          <input
            type="text"
            name="query"
            id="query"
            value={query}
            onChange={(event) => {
              onQueryChange(event.target.value);
            }}
            className="form-control block w-full text-base font-normal font-montserrat bg-concert-yellow bg-clip-padding border border-solid border-black border-[3px]  transition ease-in-out m-0 text-black  placeholder-black  text-font-semibold placeholder-blackfocus:bg-concert-yellow  focus:border-concert-pink focus:outline-none  "
            placeholder="SEARCH BY BAND NAME"
          ></input>
        </div>
      </div>
    </>
  );
}

const DropDownAZ = ({ toggle, onOrderByChange }) => {
  if (!toggle) {
    return null;
  }
  return (
    <div className="origin-top-right absolute left-[1.25rem] mt-[-0.4rem]  w-[12.55rem]">
      <div className="py-1 px-2  flex flex-col gap-2 bg-black pt-[0.4rem] pb-[0.4rem] " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div
          onClick={() => onOrderByChange("asc")}
          className="px-4 py-2 text-smflex justify-between cursor-pointer bg-concert-yellow  text-black font-montserrat font-bold hover:bg-black  hover:text-concert-yellow  border-[3px] border-concert-yellow "
        >
          A-Z
        </div>
        <div
          onClick={() => onOrderByChange("desc")}
          className="px-4 py-2 text-smflex justify-between cursor-pointer bg-concert-yellow  text-black font-montserrat font-bold hover:bg-black  hover:text-concert-yellow  border-[3px] border-concert-yellow"
        >
          Z-A
        </div>
      </div>
    </div>
  );
};

// const DropDownGenre = ({ toggle, onSortByChange, onOrderByChange, filleredDisplayband }) => {
//   if (!toggle) {
//     return null;
//   }
//   return (
//     <div className="origin-top-right absolute left-[14.55rem] mt-[-0.4rem]  w-[7.49rem]">
//       <div className="py-1 px-2  flex flex-col gap-2 bg-black pt-[0.4rem] pb-[0.4rem] " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//         <ul className="gap-[1rem]">
//           {filleredDisplayband.map((item, index) => (
//             <div key={`band#${index}`} className="px-4 py-2 text-smflex justify-between cursor-pointer bg-concert-yellow  text-black font-montserrat font-bold hover:bg-black  hover:text-concert-yellow  border-[3px] border-concert-yellow mb-[1rem] ">
//               {item.genre}
//             </div>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };
