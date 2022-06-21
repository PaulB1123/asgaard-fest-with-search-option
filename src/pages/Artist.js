import Content from "../components/Content";
import { useParams } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { BsSpotify } from "react-icons/bs";
import { ImSoundcloud } from "react-icons/im";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import { Result } from "postcss";
const urlSlugMatch = require("url-slug-match");

export default function Artist({ bands, schedule }) {
  let { id } = useParams();
  let thisBand;
  let updatedBandList = [];
  let dataArray;

  let NewMidgard = [];
  let NewVanaheim = [];
  let NewJotunheim = [];

  let DisplayMidgard = [];
  let DisplayVanaheim = [];
  let DisplayJotunheim = [];

  // const [currentStage, setCurrentStage] = useState();

  let DisplayMidgardSliced = [];

  const { loading, error, data } = useFetch("https://the-javascript-bar-project.herokuapp.com/bands");

  if (loading) return <p>Loading...</p>;
  if (error) return <p> Error </p>;
  if (data) {
    data.map((data) => {
      thisBand = data;
      // console.log(data);
      thisBand.id = urlSlugMatch(data.name.trim());
      updatedBandList = [...updatedBandList, thisBand];
    });

    // MakeIDCapialLetter = id
    //   .toLowerCase()
    //   .replaceAll("-", " ")
    //   .split(" ")
    //   .map((word) => {
    //     return word.charAt(0).toUpperCase() + word.slice(1);
    //   })
    //   .join(" ");

    dataArray = Object.values(schedule);
    // console.log(dataArray);

    const stageMidgard = Object.values(dataArray[0]);
    const stageVanaheim = Object.values(dataArray[1]);
    const stageJotunheim = Object.values(dataArray[2]);
    // console.log("this is Midgard", stageMidgard);
    data &&
      schedule &&
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
      });

    // console.log(NewMidgard);
    data &&
      schedule &&
      stageVanaheim.map((dayVanaheim) => {
        dayVanaheim = Object.values(dayVanaheim);
        dayVanaheim.map((actVanaheim) => {
          actVanaheim.act !== "break" && (NewVanaheim = [...NewVanaheim, actVanaheim.act]);
        });
      });

    data &&
      schedule &&
      stageJotunheim.map((dayJotunheim) => {
        dayJotunheim = Object.values(dayJotunheim);
        dayJotunheim.map((actJotunheim) => {
          actJotunheim.act !== "break" && (NewJotunheim = [...NewJotunheim, actJotunheim.act]);
        });
      });

    data &&
      schedule &&
      NewMidgard.map((bandMidgard) => {
        const thisBand = data.find((elem) => elem.name === bandMidgard);
        DisplayMidgard = [...DisplayMidgard, thisBand];
      });

    data &&
      schedule &&
      NewVanaheim.map((bandVanaheim) => {
        const thisBandVanaheim = data.find((elem) => elem.name === bandVanaheim);
        DisplayVanaheim = [...DisplayVanaheim, thisBandVanaheim];
      });
    // console.log(DisplayVanaheim);

    data &&
      schedule &&
      NewJotunheim.map((bandJotunheim) => {
        const thisBandJotunheim = data.find((elem) => elem.name === bandJotunheim);
        DisplayJotunheim = [...DisplayJotunheim, thisBandJotunheim];
      });
    // console.log(DisplayJotunheim);

    thisBand = data.find((elem) => elem.id === id);
    // console.log(thisBand);
    // console.log(thisBand.logoCredits);
    // if (thisBand.logoCredits === "undefined") {
    //   console.log("there are not  photo credits");
    // } else {
    //   <div className="h-[4rem] lg:h-[7rem] border-[2px] border-b-[0px] border-t-[2px] border-concert-yellow ">{thisBand.logoCredits}</div>;
    // }
  }

  // thisBand = bands.find((elem) => elem.id === id);
  // if (DisplayVanaheim.find((elem) => elem.id === id)) {
  //   return (thisBand = elem);
  // }
  // if (DisplayJotunheim.find((elem) => elem.id === id)) {
  //   return (thisBand = elem);
  // }

  DisplayMidgardSliced = DisplayMidgard.slice(0, 8);
  // console.log(DisplayMidgardSliced);

  // if (Object.values(thisBand).includes("logoCredits")) {
  //   console.log("true");
  // }

  return (
    <Content>
      <div className="flex justify-center items-center pt-[4rem] ">
        <div className="w-[95%] sm:w-[90%]  lg:w-3/4 xl:w-[70%]  shadow-[0_4px_80px_35px_rgba(251,206,48,0.25)]">
          <h1 className="font-aciersolid  text-2xl lg:font-acier text-center py-4 hover:font-aciersolid md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-8xl border-[2px] border-b-[0px] border-concert-yellow bg-concert-pink text-black ">
            {data && thisBand.name}
          </h1>
          <div className="flex flex-col sm:flex-row sm:justify-between items-center p-[1.2rem] border-[2px] border-concert-yellow  ">
            <div className="flex justify-center items-center">
              <div className=" flex justify-center sm:w-[5rem] text-center items-center text-black font-aciersolid  font-bold border-[3px] border-black text-lg lg:w-[9rem] lg:p-[0rem] lg:m-[0rem] lg:text-center xl:w-[8rem] xl:p-[0rem] xl:m-[0rem] bg-concert-yellow hover:concert-yellowish hover:bg-concert-yellowish mr-2 2xl:text-3xl tracking-widest 2xl:w-[13rem] 2xl:p-[0rem] 2xl:m-[0rem] 2xl:text-center">
                {data && thisBand.genre}
              </div>
            </div>
            <div className="flex justify-center ">
              <div className="flex flex-row w-[11rem] items-center justify-between mt-[1rem] ">
                <BsInstagram size={32} className=" 2xl:mr-2 text-concert-pink size={40}" />
                <BsSpotify size={32} className="  2xl:mr-2  text-concert-pink" />
                <ImSoundcloud size={48} className="  2xl:mr-2 text-concert-pink" />
              </div>
            </div>
            <div className=" mt-[1rem] text-xl text-center font-acier text-concert-pink md:text-2xl xl:text-5xl p-2">Midgard</div>
          </div>
          <div>
            <div className="h-[17rem] lg:h-[30rem] border-[2px] border-b-[0px] border-t-[0px] border-concert-yellow ">
              <CheckingBands bgColor="concert-blue" band={data && thisBand} />
            </div>

            {data && thisBand.logoCredits && (
              <div className="flex justify-center content-center text-center h-auto border-[2px] border-b-[0px] border-t-[2px] border-concert-yellow px-8 py-6 italic text-[0.9rem] ">Image Taken {thisBand.logoCredits}</div>
            )}
          </div>
          <div className="border-[2px] border-b-[0px] border-concert-yellow flex items-center justify-center p-8">
            <div className="w-[90%] md:w-[80%] lg:w-[70%] hover:concert-yellowish hover:bg-concert-yellow  bg-concert-pink text-center h-20 flex items-center justify-center xl:text-4xl font-aciersolid text-black">SPOTIFY</div>
          </div>
          <div>
            <section>
              <p className="border-[2px] border-concert-yellow p-8 text-montserrat md:text-lg lg:text-xl lg:font-semibold xl:text-2xl xl:font-semibold xl:leading-loose">{data && thisBand.bio}</p>
            </section>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h3 className="text-7xl text-black mb-8 sm:text-7xl  font-acier bg-concert-pink flex justify-center py-6 px-6 lg:py-16  xl:text-[114px] xl:py-10 ">Midgard</h3>
          <ul className="w-full grid gap-4 grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-2 ">
            {data &&
              DisplayMidgardSliced.map((band, index) => (
                <div key={`band#${index}`} className="bg-gray-600 text-white ">
                  <CheckingBandsSuggestons bgColor="concert-pink" band={band} />
                </div>
              ))}
          </ul>
        </div>
      </div>
    </Content>
  );
}

function CheckingBands({ band, bgColor }) {
  // console.log(band);
  if (band) {
    if (band.logo.endsWith(".jpg") || band.logo.endsWith(".JPG") || band.logo.endsWith(".png") || band.logo.endsWith(".svg")) {
      return <ImgJPG band={band} bgColor={bgColor} />;
    }
    return <ImgSVG band={band} bgColor={bgColor} />;
  }
}

function ImgJPG({ band, bgColor }) {
  return (
    <div className="h-[17rem] lg:h-[30rem] ">
      {/* {console.log(`public/images/logos/${band.logo}`)} */}
      <img src={`/images/logos/${band.logo}`} className="object-cover w-full  h-[17rem] lg:h-[30rem]" alt={band.name}></img>
    </div>
  );
}

function ImgSVG({ band, bgColor }) {
  return (
    <div className="h-[17rem] lg:h-[30rem] ">
      <img src={band.logo} className="object-cover w-full  h-[17rem] lg:h-[30rem]" alt={band.name}></img>
    </div>
  );
}

// to display the data at the back of the page

export function CheckingBandsSuggestons({ band, bgColor }) {
  if (band) {
    if (band.logo.endsWith(".jpg") || band.logo.endsWith(".JPG") || band.logo.endsWith(".png") || band.logo.endsWith(".svg")) {
      return <ImgJPGSuggestons band={band} bgColor={bgColor} />;
    }
    return <ImgSVGSuggestons band={band} bgColor={bgColor} />;
  }
}

export function ImgJPGSuggestons({ band, bgColor }) {
  return (
    <Link to={`/artist/${urlSlugMatch(band.name.trim())}`} band={band}>
      <div className="grid gap-x-8">
        <div className="h-[11rem] lg:h-[18rem] ">
          <img src={`/images/logos/${band.logo}`} className="object-cover w-full  h-[12rem] lg:h-[18rem]" alt={band.name}></img>
        </div>

        <div className={`bg-${bgColor} font-aciersolid text-center text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl h-[4rem] flex justify-center items-center text-black lg:h-[6rem]`}>{band.name}</div>
      </div>
    </Link>
  );
}

export function ImgSVGSuggestons({ band, bgColor }) {
  return (
    <Link to={`/artist/${urlSlugMatch(band.name.trim())}`} band={band}>
      {" "}
      <div className="grid gap-x-8">
        <div className="h-[11rem] lg:h-[18rem] ">
          <img src={band.logo} className="object-cover w-full  h-[12rem] lg:h-[18rem]" alt={band.name}></img>
        </div>
        <div className={`bg-${bgColor} font-aciersolid  text-center text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl h-[4rem] flex justify-center items-center text-black lg:h-[6rem]`}>{band.name}</div>
      </div>
    </Link>
  );
}

// to display the data at the back of the page
