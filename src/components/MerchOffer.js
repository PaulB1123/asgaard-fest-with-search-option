import ShirtBox from "./ShirtBox";

export default function MerchOffer() {
  return (
    <article className="flex flex-col w-full h-auto bg-concert-redish text-black ">
      <div className="flex flex-col mb-8">
        <span className="font-acier p-8 text-6xl">MERCH</span>
        <div className="flex flex-col h-auto items-center p-4 gap-4 md:grid grid-rows-2 grid-cols-3">
          <span className="col-start-1 col-end-3 row-start-1 row-end-2 object-end">
            <ShirtBox />
          </span>
          <span className="col-start-3 col-end-4 row-start-1">
            <ShirtBox />
          </span>
          <span>
            <ShirtBox />
          </span>
          <span>
            <ShirtBox />
          </span>
          <span>
            <ShirtBox />
          </span>
          <span />
        </div>
      </div>
    </article>
  );
}
