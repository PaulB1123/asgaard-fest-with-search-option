import Content from "../components/Content";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
// import { _colorStringFilter } from "gsap/gsap-core";
import { Link } from "react-router-dom";
import Search from "../components/Search";
const urlSlugMatch = require("url-slug-match");

export default function Schedule({ bands }) {
  //
  let stageMidgard;
  let stageVanaheim;
  let stageJotunheim;
  //
  let FindMidgardAct = [];
  let FindVanaheimAct = [];
  let FindJotunheimAct = [];

  let DisplayMidgard = [];
  let DisplayVanaheim = [];
  let DisplayJotunheim = [];
  //
  let thisBand;
  let thisBandVanaheim;
  let thisBandJotunheim;
  //
  let updatedBandList = [];
  let updatedBandListVanaheim = [];
  let updatedBandListJotunheim = [];
  //
  let mergedMidgard;
  let mergedVanheim;
  let mergedJotunheim;

  let [query, setQuery] = useState("");
  let [sortBy, setSortBy] = useState("name");
  let [orderBy, setOrderBy] = useState("asc");

  let DaysOfTheWeek = ["Monday", "Tuesday", "Wednsaday", "Thursday", "Friday", "Saturday", "Sunday"];

  const [day, setDay] = useState(0);

  const { loading, error, data } = useFetch("https://the-javascript-bar-project.herokuapp.com/schedule");

  if (loading) return <p>Loading...</p>;
  if (error) return <p> Error </p>;
  if (data) {
    const dataArray = Object.values(data);
    stageMidgard = Object.values(dataArray[0]);
    stageVanaheim = Object.values(dataArray[1]);
    stageJotunheim = Object.values(dataArray[2]);

    data &&
      bands &&
      stageMidgard[day].map((act) => {
        act.act !== "break" && (FindMidgardAct = [...FindMidgardAct, act.act]);
      });
    // console.log(FindMidgardAct);

    data &&
      bands &&
      stageVanaheim[day].map((act) => {
        act.act !== "break" && (FindVanaheimAct = [...FindVanaheimAct, act.act]);
      });

    data &&
      bands &&
      stageJotunheim[day].map((act) => {
        act.act !== "break" && (FindJotunheimAct = [...FindJotunheimAct, act.act]);
      });

    // console.log(`${day}`, DisplayMidgard);
    // console.log(`${day}`, RealMidgardAct);

    data &&
      bands &&
      stageMidgard[day].map((band) => {
        if (band.act !== "break") return (thisBand = band);
        thisBand.name = thisBand.act;
        updatedBandList = [...updatedBandList, thisBand];
      });
    // data && bands && console.log(updatedBandList);
    // data && bands && console.log(stageMidgard);

    data &&
      bands &&
      stageVanaheim[day].map((band) => {
        if (band.act !== "break") return (thisBandVanaheim = band);
        thisBandVanaheim.name = thisBandVanaheim.act;
        updatedBandListVanaheim = [...updatedBandListVanaheim, thisBandVanaheim];
      });

    data &&
      bands &&
      stageJotunheim[day].map((band) => {
        if (band.act !== "break") return (thisBandJotunheim = band);
        thisBandJotunheim.name = thisBandJotunheim.act;
        updatedBandListJotunheim = [...updatedBandListJotunheim, thisBandJotunheim];
      });

    // console.log(updatedBandListVanaheim);

    // stageVanaheim.map((dayVanaheim) => {
    //   dayVanaheim = Object.values(dayVanaheim);
    // });

    // stageJotunheim.map((dayJotunheim) => {
    //   dayJotunheim = Object.values(dayJotunheim);
    // });
  }

  if (bands) {
    bands &&
      FindMidgardAct.map((actMidgard) => {
        // console.log(actMidgard);
        const thisBand = bands.find((elem) => elem.name === actMidgard);
        DisplayMidgard = [...DisplayMidgard, thisBand];
      });
    console.log(DisplayMidgard);
    console.log(updatedBandList);

    bands &&
      FindVanaheimAct.map((actVanaheim) => {
        // console.log(actMidgard);
        const thisBandVanaheim = bands.find((elem) => elem.name === actVanaheim);
        DisplayVanaheim = [...DisplayVanaheim, thisBandVanaheim];
      });

    bands &&
      FindJotunheimAct.map((actJotunheim) => {
        // console.log(actMidgard);
        const thisBandJotunheim = bands.find((elem) => elem.name === actJotunheim);
        DisplayJotunheim = [...DisplayJotunheim, thisBandJotunheim];
      });
  }

  function handleClick(value) {
    setDay(value);
  }

  // console.log(DisplayMidgard);
  // console.log(updatedBandList);

  if ((bands, data)) {
    mergedMidgard = DisplayMidgard.map((subject) => {
      let otherSubject = updatedBandList.find((element) => element.name === subject.name);
      return { ...subject, ...otherSubject };
    });

    console.log(mergedMidgard);

    mergedVanheim = DisplayVanaheim.map((subject) => {
      let otherSubjectVanaheim = updatedBandListVanaheim.find((element) => element.name === subject.name);
      return { ...subject, ...otherSubjectVanaheim };
    });

    mergedJotunheim = DisplayJotunheim.map((subject) => {
      let otherSubjectJotunheim = updatedBandListJotunheim.find((element) => element.name === subject.name);
      return { ...subject, ...otherSubjectJotunheim };
    });
  }

  const filleredDisplayband =
    data &&
    mergedMidgard
      .filter((item) => {
        return item.name.toLowerCase().includes(query.toLowerCase()) || item.genre.toLowerCase().includes(query.toLowerCase());
      })
      .sort((a, b) => {
        let order = orderBy === "asc" ? 1 : -1;
        return a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 * order : 1 * order;
      });

  const filleredVanheimband =
    data &&
    mergedVanheim
      .filter((item) => {
        return item.name.toLowerCase().includes(query.toLowerCase()) || item.genre.toLowerCase().includes(query.toLowerCase());
      })
      .sort((a, b) => {
        let order = orderBy === "asc" ? 1 : -1;
        return a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 * order : 1 * order;
      });

  const filleredJotunheim =
    data &&
    mergedJotunheim
      .filter((item) => {
        return item.name.toLowerCase().includes(query.toLowerCase()) || item.genre.toLowerCase().includes(query.toLowerCase());
      })
      .sort((a, b) => {
        let order = orderBy === "asc" ? 1 : -1;
        return a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 * order : 1 * order;
      });

  // console.log(filleredDisplayband.length);

  return (
    <div>
      <div className="py-6 px-6 sm:mx-6 lg:mx-8 ">
        <h1 className="text-5xl sm:text-7xl font-acier bg-concert-yellow flex justify-center py-6 px-6 lg:py-16  xl:text-[114px] xl:py-10 ">Daily Schedule</h1>
      </div>
      <Content>
        <>
          <div className="py-6 px-6 sm:mx-6 lg:mx-8 ">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-acier  hover:font-aciersolid bg-concert-redish  flex justify-center py-1  lg:py-1   xl:py-2 text-black">{DaysOfTheWeek[day]}</h1>
          </div>

          <div className="w-full sticky top-[6rem] z-0 bg-black">
            <div className=" flex flex-row justify-center flex-wrap">
              <button
                className={` px-[0.4rem] py-[0.2rem] text-[13px] md:px-[0.8rem] md:py-[0.4rem] md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:px-[3.2rem] font-montserrat font-bold text-black mb-3 mt-2 mr-1 hover:bg-black hover:text-concert-redish cursor-pointer border-[2px] border-concert-redish ${
                  day === 0 ? `bg-black text-concert-redish ` : `bg-concert-redish text-black `
                }`}
                value={0}
                onClick={(event) => handleClick(event.target.value)}
              >
                MONDAY
              </button>
              <button
                id="1"
                value={1}
                className={` px-[0.4rem] py-[0.2rem] text-[13px] md:px-[0.8rem] md:py-[0.4rem] md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:px-[3.2rem] font-montserrat font-bold text-black mb-3 mt-2 mr-1 hover:bg-black hover:text-concert-redish cursor-pointer border-[2px] border-concert-redish ${
                  day === 1 ? `bg-black text-concert-redish ` : `bg-concert-redish text-black `
                }`}
                onClick={(event) => handleClick(event.target.value)}
              >
                TUESDAY
              </button>
              <button
                className={` px-[0.4rem] py-[0.2rem] text-[13px] md:px-[0.8rem] md:py-[0.4rem] md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:px-[3.2rem] font-montserrat font-bold text-black mb-3 mt-2 mr-1 hover:bg-black hover:text-concert-redish cursor-pointer border-[2px] border-concert-redish ${
                  day === 2 ? `bg-black text-concert-redish ` : `bg-concert-redish text-black `
                }`}
                value={2}
                onClick={(event) => handleClick(event.target.value)}
              >
                WEDNESDAY
              </button>
              <button
                className={` px-[0.4rem] py-[0.2rem] text-[13px] md:px-[0.8rem] md:py-[0.4rem] md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:px-[3.2rem] font-montserrat font-bold text-black mb-3 mt-2 mr-1 hover:bg-black hover:text-concert-redish cursor-pointer border-[2px] border-concert-redish ${
                  day === 3 ? `bg-black text-concert-redish ` : `bg-concert-redish text-black `
                }`}
                value={3}
                onClick={(event) => handleClick(event.target.value)}
              >
                THURSDAY
              </button>
              <button
                className={` px-[0.4rem] py-[0.2rem] text-[13px] md:px-[0.8rem] md:py-[0.4rem] md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:px-[3.2rem] font-montserrat font-bold text-black mb-3 mt-2 mr-1 hover:bg-black hover:text-concert-redish cursor-pointer border-[2px] border-concert-redish ${
                  day === 4 ? `bg-black text-concert-redish ` : `bg-concert-redish text-black `
                }`}
                value={4}
                onClick={(event) => handleClick(event.target.value)}
              >
                FRIDAY
              </button>
              <button
                className={` px-[0.4rem] py-[0.2rem] text-[13px] md:px-[0.8rem] md:py-[0.4rem] md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:px-[3.2rem] font-montserrat font-bold text-black mb-3 mt-2 mr-1 hover:bg-black hover:text-concert-redish cursor-pointer border-[2px] border-concert-redish ${
                  day === 5 ? `bg-black text-concert-redish ` : `bg-concert-redish text-black `
                }`}
                value={5}
                onClick={(event) => handleClick(event.target.value)}
              >
                SATURDAY
              </button>
              <button
                className={` px-[0.4rem] py-[0.2rem] text-[13px] md:px-[0.8rem] md:py-[0.4rem] md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:px-[3.2rem] font-montserrat font-bold text-black mb-3 mt-2 mr-1 hover:bg-black hover:text-concert-redish cursor-pointer border-[2px] border-concert-redish ${
                  day === 6 ? `bg-black text-concert-redish ` : `bg-concert-redish text-black `
                }`}
                value={6}
                onClick={(event) => handleClick(event.target.value)}
              >
                SUNDAY
              </button>
            </div>
            <div className="bg-concert-l-green flex flex-row justify-center sm:justify-start  w-full sticky top-[6rem] z-10  border-b-[6px] border-black">
              <div className="sm:flex  sm:flex-row">
                <Search query={query} onQueryChange={(myQuery) => setQuery(myQuery)} onOrderByChange={(mySort) => setOrderBy(mySort)} sortBy={sortBy} onSortChance={(mySort) => setSortBy(mySort)} filleredDisplayband={filleredDisplayband} />
              </div>
            </div>
          </div>
          <div id="main">
            <div className=" text-5xl sm:text-7xl font-acier bg-concert-pink flex justify-center py-1 px-1 lg:py-1  xl:text-[114px] xl:py-1  text-black border-b-[3px] border-black">Midgard Stage</div>
            <div className="bg-concert-pink  h-[104rem] p-3 md:h-[51rem] lg:h-[57rem] xl:h-[69rem] ">
              {data &&
                day != null &&
                filleredDisplayband.map((act) => {
                  if (act.act !== "break")
                    return (
                      <div className="flex flex-col justify-between md:flex-row   bg-concert-yellowish p-0 border-[3px] border-b-[0px]  border-black ">
                        <div className="flex flex-col items-center md:flex-row md:">
                          <div className=" bg-concert-yellow   text-[15px] w-[100%] h-[2rem] md:w-[6rem] md:h-[100%] md:m-0 md:pl-1  xl:w-[8rem] xl:text-[18px] xl:pl-3 font-montserrat font-bold  text-black flex justify-center items-center border-x-[3px] border-b-[3px] md:border-b-[0px]  border-l-[0px] border-r-[0px] md:border-r-[3px]  border-black ">
                            <Link to={`/artist/${urlSlugMatch(act.name.trim())}`}>
                              {act.start}A.M - {act.end} P.M.
                            </Link>
                          </div>
                          <div className=" flex justify-center items-center mt-[0.5rem] md:text-[20px] lg:text-[23px] xl:text-[26px] 2xl:pl-[2rem] md:ml-2 text-center font-montserrat font-extrabold text-black ">
                            <Link to={`/artist/${urlSlugMatch(act.name.trim())}`}>{act.act}</Link>
                          </div>
                        </div>
                        <div className="flex flex-col justify-between md:flex-row ">
                          <div className="flex justify-center items-center ">
                            <div className="  bg-concert-yellow text-center w-[5rem]   mx-2 text-[12px] m-[0.5rem] lg:w-[6rem]  lg:text-[13px]  xl:w-[8rem] xl:text-[17px] xl:mr-6 font-montserrat font-black  text-black border-[3px]  border-black  hover:concert-yellowish hover:bg-concert-yellowish">
                              <Link to={`/artist/${urlSlugMatch(act.name.trim())}`}>{act.genre}</Link>
                            </div>
                          </div>
                          <div className="w-[100%] border-t-[3px]  border-black md:h-[8rem] lg:h-[9rem] xl:h-[11rem] ">
                            <CheckingBands bgColor="concert-b-green" band={act} />
                          </div>
                        </div>
                      </div>
                    );
                  // return (
                  //   <div className="h-[5rem] md:h-[6rem]">
                  //     <div className="flex flex-row justify-center items-center bg-concert-redish p-2  border-[3px] border-b-[0px]  border-black h-[5rem] md:h-[6rem]  ">
                  //       <div>
                  //         <div className="font-montserrat font-extrabold text-black ">BREAK</div>
                  //       </div>
                  //     </div>
                  //   </div>
                  // );
                })}
            </div>
            <div className="mt-[2rem]">
              <div className="text-5xl sm:text-7xl font-acier bg-concert-b-green flex justify-start py-1 px-1 lg:py-1  xl:text-[114px] xl:py-1 text-black border-b-[3px] border-black">Vanaheim Stage</div>
              <div className="bg-concert-b-green h-[104rem] p-3 md:h-[51rem] lg:h-[57rem] xl:h-[69rem] ">
                {data &&
                  day != null &&
                  filleredVanheimband.map((act) => {
                    if (act.act !== "break")
                      return (
                        <div className="flex flex-col justify-between md:flex-row   bg-concert-yellowish p-0 border-[3px] border-b-[0px]  border-black ">
                          <div className="flex flex-col items-center md:flex-row md:">
                            <div className=" bg-concert-yellow   text-[15px] w-[100%] h-[2rem] md:w-[6rem] md:h-[100%] md:m-0 md:pl-1  xl:w-[8rem] xl:text-[18px] xl:pl-3 font-montserrat font-bold  text-black flex justify-center items-center border-x-[3px] border-b-[3px] md:border-b-[0px]  border-l-[0px] border-r-[0px] md:border-r-[3px]  border-black ">
                              <Link to={`/artist/${urlSlugMatch(act.name.trim())}`}>
                                {act.start}A.M - {act.end} P.M.
                              </Link>
                            </div>
                            <div className=" flex justify-center items-center mt-[0.5rem] md:text-[20px] lg:text-[23px] xl:text-[26px] 2xl:pl-[2rem] md:ml-2 text-center font-montserrat font-extrabold text-black ">
                              <Link to={`/artist/${urlSlugMatch(act.name.trim())}`}>{act.act}</Link>
                            </div>
                          </div>
                          <div className="flex flex-col justify-between md:flex-row ">
                            <div className="flex justify-center items-center ">
                              <div className="  bg-concert-yellow text-center w-[5rem]   mx-2 text-[12px] m-[0.5rem] lg:w-[6rem]  lg:text-[13px]  xl:w-[8rem] xl:text-[17px] xl:mr-6 font-montserrat font-black  text-black border-[3px]  border-black  hover:concert-yellowish hover:bg-concert-yellowish">
                                <Link to={`/artist/${urlSlugMatch(act.name.trim())}`}>{act.genre}</Link>
                              </div>
                            </div>
                            <div className="w-[100%] border-t-[3px]  border-black md:h-[8rem] lg:h-[9rem] xl:h-[11rem] ">
                              <CheckingBands bgColor="concert-b-green" band={act} />
                            </div>
                          </div>
                        </div>
                      );
                  })}
              </div>
            </div>
            <div className="mt-[2rem]">
              <div className="text-5xl sm:text-7xl font-acier bg-concert-blue flex justify-start py-1 px-1 lg:py-1  xl:text-[114px] xl:py-1  text-black border-b-[3px] border-black">Jotunheim Stage</div>
              <div className="bg-concert-blue h-[104rem] p-3 md:h-[51rem] lg:h-[57rem] xl:h-[69rem]">
                {data &&
                  day != null &&
                  filleredJotunheim.map((act) => {
                    if (act.act !== "break")
                      return (
                        <div className="flex flex-col justify-between md:flex-row   bg-concert-yellowish p-0 border-[3px] border-b-[0px]  border-black ">
                          <div className="flex flex-col items-center md:flex-row md:">
                            <div className=" bg-concert-yellow   text-[15px] w-[100%] h-[2rem] md:w-[6rem] md:h-[100%] md:m-0 md:pl-1  xl:w-[8rem] xl:text-[18px] xl:pl-3 font-montserrat font-bold  text-black flex justify-center items-center border-x-[3px] border-b-[3px] md:border-b-[0px]  border-l-[0px] border-r-[0px] md:border-r-[3px]  border-black ">
                              <Link to={`/artist/${urlSlugMatch(act.name.trim())}`}>
                                {act.start}A.M - {act.end} P.M.
                              </Link>
                            </div>
                            <div className=" flex justify-center items-center mt-[0.5rem] md:text-[20px] lg:text-[23px] xl:text-[26px] 2xl:pl-[2rem] md:ml-2 text-center font-montserrat font-extrabold text-black ">
                              <Link to={`/artist/${urlSlugMatch(act.name.trim())}`}>{act.act}</Link>
                            </div>
                          </div>
                          <div className="flex flex-col justify-between md:flex-row ">
                            <div className="flex justify-center items-center ">
                              <div className="  bg-concert-yellow text-center w-[5rem]   mx-2 text-[12px] m-[0.5rem] lg:w-[6rem]  lg:text-[13px]  xl:w-[8rem] xl:text-[17px] xl:mr-6 font-montserrat font-black  text-black border-[3px]  border-black  hover:concert-yellowish hover:bg-concert-yellowish">
                                <Link to={`/artist/${urlSlugMatch(act.name.trim())}`}>{act.genre}</Link>
                              </div>
                            </div>
                            <div className="w-[100%] border-t-[3px]  border-black md:h-[8rem] lg:h-[9rem] xl:h-[11rem] ">
                              <CheckingBands bgColor="concert-b-green" band={act} />
                            </div>
                          </div>
                        </div>
                      );
                  })}
              </div>
            </div>
          </div>
        </>
      </Content>
    </div>
  );
}

function CheckingBands({ band, bgColor }) {
  if (band) {
    if (band.logo.endsWith(".jpg") || band.logo.endsWith(".JPG") || band.logo.endsWith(".png") || band.logo.endsWith(".svg")) {
      return <ImgJPG band={band} bgColor={bgColor} />;
    }
    return <ImgSVG band={band} bgColor={bgColor} />;
  }
}

function ImgJPG({ band, bgColor }) {
  return (
    <Link to={`/artist/${urlSlugMatch(band.name.trim())}`} band={band}>
      <img src={`./images/logos/${band.logo}`} className="object-cover w-[100%]  h-[10rem] md:h-[7.8rem] md:w-[12rem] lg:h-[8.9rem] lg:w-[15rem] lg:border-l-[3px] lg:border-black xl:h-[10.9rem] xl:w-[20rem]" alt={band.name}></img>
    </Link>
  );
}

function ImgSVG({ band, bgColor }) {
  return (
    <Link to={`/artist/${urlSlugMatch(band.name.trim())}`} band={band}>
      <img src={band.logo} className="object-cover w-[100%]  h-[10rem] md:h-[7.8rem] md:w-[12rem] lg:h-[8.9rem] lg:w-[15rem] lg:border-l-[3px] lg:border-black xl:h-[10.9rem] xl:w-[20rem]" alt={band.name}></img>
    </Link>
  );
}
