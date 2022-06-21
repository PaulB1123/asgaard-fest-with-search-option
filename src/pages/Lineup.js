import Content from "../components/Content";

import { Link } from "react-router-dom";
import Search from "../components/Search";
// import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useState } from "react";

const urlSlugMatch = require("url-slug-match");

export default function Lineup({ bands }) {
  // const [bands, setBands] = useState([]);

  let [query, setQuery] = useState("");
  let [sortBy, setSortBy] = useState("name");
  let [orderBy, setOrderBy] = useState("asc");

  const { loading, error, data } = useFetch("https://the-javascript-bar-project.herokuapp.com/schedule");

  if (loading) return <p>Loading...</p>;
  if (error) return <p> Error </p>;

  let NewMidgard = [];
  let NewVanaheim = [];
  let NewJotunheim = [];

  let DisplayMidgard = [];
  let DisplayVanaheim = [];
  let DisplayJotunheim = [];

  if (data) {
    const dataArray = Object.values(data);
    // console.log(dataArray);

    const stageMidgard = Object.values(dataArray[0]);
    const stageVanaheim = Object.values(dataArray[1]);
    const stageJotunheim = Object.values(dataArray[2]);
    // console.log("this is Midgard", stageMidgard);

    stageMidgard.map((dayMidgard) => {
      dayMidgard = Object.values(dayMidgard);
      // console.log("this is Midgard days", dayMidgard);
      dayMidgard.map((actMidgard) => {
        // console.log(actMidgard.act);
        actMidgard.act !== "break" && (NewMidgard = [...NewMidgard, actMidgard.act]);
        // actMidgard = actMidgard.act;
      });
      // console.log(ActMidgard);
      // return ActMidgard;
      // console.log(NewMidgard);
    });

    stageVanaheim.map((dayVanaheim) => {
      dayVanaheim = Object.values(dayVanaheim);
      dayVanaheim.map((actVanaheim) => {
        actVanaheim.act !== "break" && (NewVanaheim = [...NewVanaheim, actVanaheim.act]);
      });
    });

    stageJotunheim.map((dayJotunheim) => {
      dayJotunheim = Object.values(dayJotunheim);
      dayJotunheim.map((actJotunheim) => {
        actJotunheim.act !== "break" && (NewJotunheim = [...NewJotunheim, actJotunheim.act]);
      });
    });

    data &&
      NewMidgard.map((bandMidgard) => {
        const thisBand = bands.find((elem) => elem.name === bandMidgard);
        DisplayMidgard = [...DisplayMidgard, thisBand];
      });
    console.log(DisplayMidgard);

    data &&
      NewVanaheim.map((bandVanaheim) => {
        const thisBandVanaheim = bands.find((elem) => elem.name === bandVanaheim);
        DisplayVanaheim = [...DisplayVanaheim, thisBandVanaheim];
      });
    // console.log(DisplayVanaheim);

    data &&
      NewJotunheim.map((bandJotunheim) => {
        const thisBandJotunheim = bands.find((elem) => elem.name === bandJotunheim);
        DisplayJotunheim = [...DisplayJotunheim, thisBandJotunheim];
      });
    // console.log(DisplayJotunheim);
  }

  const filleredDisplayband =
    data &&
    DisplayMidgard.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase()) || item.genre.toLowerCase().includes(query.toLowerCase());
    }).sort((a, b) => {
      let order = orderBy === "asc" ? 1 : -1;
      return a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 * order : 1 * order;
    });

  const filleredVanheimband =
    data &&
    DisplayVanaheim.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase()) || item.genre.toLowerCase().includes(query.toLowerCase());
    }).sort((a, b) => {
      let order = orderBy === "asc" ? 1 : -1;
      return a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 * order : 1 * order;
    });

  const filleredJotunheim =
    data &&
    DisplayJotunheim.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase()) || item.genre.toLowerCase().includes(query.toLowerCase());
    }).sort((a, b) => {
      let order = orderBy === "asc" ? 1 : -1;
      return a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 * order : 1 * order;
    });

  // console.log(NewMidgard);

  return (
    <div>
      <div className="py-6 px-6 sm:mx-6 lg:mx-8 ">
        <h1 className="text-7xl sm:text-7xl font-acier bg-concert-yellow flex justify-center py-6 px-6 lg:py-16 xl:text-[114px] xl:py-10 ">Line up</h1>
      </div>
      <Content>
        <section className="m-8 mt-2 xl:m-16">
          <article>
            <p className="text-center text-base font-noraml md:mx-16 lg:text-xl xl:text-2xl 2xl:text-3xl 2xl:mx-56">
              Since it was launched 3 years ago as a student project of four KEA students - Lucian, Christian, Paul and Drago, the festival has changed drastically and become the <b>largest festival in the world</b>.{" "}
            </p>
            <p className="text-center text-base font-noraml md:mx-16 lg:text-xl xl:text-2xl 2xl:text-3xl 2xl:mx-56">
              The line up we bring you this year is certainly the biggest gathering of the world's most popular rock stars on one place. In fact, in three places.
            </p>
          </article>
          <p className="flex justify-center text-base font-noraml m-4  md:mx-16 lg:text-xl 2xl:text-4xl 2xl:m-8">~</p>
          <article>
            <p className="text-center text-base font-noraml md:mx-16 lg:text-xl xl:text-2xl 2xl:text-3xl 2xl:mx-56">
              Three stages, equally big. The band schedule is such that you can choose one stage and explore diverse artists, otherwise you have enough time to simply switch to other stage The passage between the stages is free.
            </p>
            <p className="text-center text-base font-noraml pt-6 md:mx-16 lg:text-xl xl:text-2xl 2xl:text-3xl 2xl:mx-56">On weekends, there will be one big surprise guest on each stage, who is not listed in this year's line-up. See you!</p>
          </article>
        </section>

        <div className="bg-concert-l-green flex flex-row justify-center sm:justify-start  w-full sticky top-[6rem] z-10  border-b-[6px] border-black">
          <div className="sm:flex  sm:flex-row">
            <Search query={query} onQueryChange={(myQuery) => setQuery(myQuery)} onOrderByChange={(mySort) => setOrderBy(mySort)} sortBy={sortBy} onSortChance={(mySort) => setSortBy(mySort)} filleredDisplayband={filleredDisplayband} />
          </div>
        </div>

        <div>
          <h2 className="text-7xl text-black mb-8 sm:text-7xl  font-acier bg-concert-pink flex justify-center py-6 px-6   xl:text-[114px] xl:h-[10rem] mt-[5rem] ">Midgard Stage</h2>

          <ul className="w-full grid gap-4 grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4 ">
            {data &&
              filleredDisplayband.map((band, index) => (
                <div key={`band#${index}`} className="bg-gray-600 text-white ">
                  <CheckingBands bgColor="concert-pink" band={band} />
                </div>
              ))}
          </ul>
        </div>

        <div>
          <h2 className="text-7xl text-black mb-8 sm:text-7xl  font-acier bg-concert-b-green flex justify-center py-6 px-6   xl:text-[114px] xl:h-[10rem] mt-[5rem] ">Vanaheim Stage</h2>

          <ul className="w-full grid gap-4 grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4 ">
            {data &&
              filleredVanheimband.map((band, index) => (
                <div key={`band#${index}`} className="bg-gray-600 text-white ">
                  <CheckingBands bgColor="concert-b-green" band={band} />
                </div>
              ))}
          </ul>
        </div>

        <div>
          <h2 className="text-7xl text-black mb-8 sm:text-7xl  font-acier bg-concert-blue flex  justify-center py-6 px-6   xl:text-[114px] xl:h-[10rem]  mt-[5rem]">Jotunheim Stage</h2>

          <ul className="w-full grid gap-4 grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4 ">
            {data &&
              filleredJotunheim.map((band, index) => (
                <div key={`band#${index}`} className="bg-gray-600 text-white ">
                  <CheckingBands bgColor="concert-blue" band={band} />
                </div>
              ))}
          </ul>
        </div>
      </Content>
    </div>
  );
}

export function CheckingBands({ band, bgColor }) {
  if (band) {
    if (band.logo.endsWith(".jpg") || band.logo.endsWith(".JPG") || band.logo.endsWith(".png") || band.logo.endsWith(".svg")) {
      return <ImgJPG band={band} bgColor={bgColor} />;
    }
    return <ImgSVG band={band} bgColor={bgColor} />;
  }
}

export function ImgJPG({ band, bgColor }) {
  return (
    <Link to={`/artist/${urlSlugMatch(band.name.trim())}`} band={band}>
      <div className="grid gap-x-8">
        <div className="h-[11rem] lg:h-[18rem] ">
          <img src={`./images/logos/${band.logo}`} className="object-cover w-full  h-[12rem] lg:h-[18rem]" alt={band.name}></img>
        </div>

        <div className={`bg-${bgColor} font-aciersolid text-center text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl h-[4rem] 2xl:h-[7.4rem] flex justify-center items-center text-black lg:h-[6rem]`}>{band.name}</div>
      </div>
    </Link>
  );
}

export function ImgSVG({ band, bgColor }) {
  return (
    <Link to={`/artist/${urlSlugMatch(band.name.trim())}`} band={band}>
      {" "}
      <div className="grid gap-x-8">
        <div className="h-[11rem] lg:h-[18rem] ">
          <img src={band.logo} className="object-cover w-full  h-[12rem] lg:h-[18rem]" alt={band.name}></img>
        </div>
        <div className={`bg-${bgColor} font-aciersolid  text-center text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl h-[4rem] 2xl:h-[7.4rem] flex justify-center items-center text-black lg:h-[6rem]`}>{band.name}</div>
      </div>
    </Link>
  );
}
