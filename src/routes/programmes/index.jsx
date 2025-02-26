import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
// import spack from "../../assets/icons/spack.svg";
import "./programmes.css";
import Development from "../../components/Development/Development";
import Creativity from "../../components/Creativity/Creativity";
import DataAndAI from "../../components/Data&AI/DataAndAI";
import Marketing from "../../components/Marketing/Marketing";
import MachineLearning from "../../components/MachineLearning/MachineLearning";
import Engineering from "../../components/Engineering/Engineering";
import AllProgrammes from "../../components/AllProgrammes/AllProgrammes";
import {cardChooseSkillSprint} from "../../data/cards"
import ExploreCard from "@/components/Card/ExploreCard";
export const Route = createFileRoute("/programmes/")({
  component: RouteComponent,
});

const buttonContent = [
  "All",
  "Tech & Software Development",
  "Product & Graphic Design",
  "Cybersecurity & Cloud computing",
  "Data Analytics & Artificial Intelligence",
  "Business & Marketing",
  "Engineering & Hardware",
];

function RouteComponent() {
  const [activeButton, setActiveButton] = useState(0);

  const handleClick = (index) => {
    setActiveButton(index);
  };
  return (
    <div className=" bg-black ">
      <div className=" p-[60px] w-full flex justify-center">
        <div className=" mt-[70px]   ">
          {/* <img src={spack} className=" -mb-5 -ml-2 lg:ml-13" /> */}
          <h1 className=" lg:text-[60px] font-bold text-3xl text-center text-white font-mont tracking-[3px]">
            Explore <br/> Our <br/>Programmes
          </h1>
        </div>
      </div>
      {/* explore card */}

      <div className=" mt-7 lg:mt-7 h-[302px] lg:flex grid grid-cols-3 gap-5">
        
        {
          cardChooseSkillSprint.map((items)=> <ExploreCard key={items.id} bg={items.bg} text={items.text}/>)
        }
      </div>

      {/* Choose programme Category */}
      <div className="w-full flex flex-col items-center gap-7   mt-32 ">
        <h1 className="lg:text-[40px] tracking-[3px] font-semibold  text-xl text-white w-80 text-center lg:w-full font-mont">
          Choose programme Category
        </h1>
        <div className=" lg:mt-7 custom-scroll">
          <div className="w-[1800px] lg:w-full  flex justify-center gap-8  lg:flex-wrap">
            {buttonContent.map((items, index) => (
              <button
                onClick={() => handleClick(index)}
                key={index}
                className={` ${activeButton === index ? `bg-[#121212] font-bold ` : `font-light border-solid border-[2.5px] border-[#121212] `} lg:text-base text-xs px-5 py-3  text-white flex items-center justify-center rounded-3xl cursor-pointer font-inter tracking-[1.5px] `}
              >
                {items}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* programm card filter */}
      <div className=" mt-15 pb-64 w-full lg:mt-36 grid grid-cols-1 gap-20 md:gap-10 md:grid-cols-2 px-9 lg:px-40">
        {activeButton === 0 && <AllProgrammes />}
        {activeButton === 1 && <Development />}
        {activeButton === 2 && <Creativity />}
        {activeButton === 3 && <MachineLearning />}
        {activeButton === 4 && <DataAndAI />}
        {activeButton === 5 && <Marketing />}
        {activeButton === 6 && <Engineering />}
      </div>
    </div>
  );
}
// items-center justify-center [&_li]:mx-8 [&_img]:max-w-none
