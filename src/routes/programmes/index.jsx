import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import spack from "../../assets/icons/spack.svg";
import "./programmes.css";
import Development from "../../components/Development/Development";
import Creativity from "../../components/Creativity/Creativity";
import DataAndAI from "../../components/Data&AI/DataAndAI";
import Marketing from "../../components/Marketing/Marketing";
import MachineLearning from "../../components/MachineLearning/MachineLearning";
import Engineering from "../../components/Engineering/Engineering";
import AllProgrammes from "../../components/AllProgrammes/AllProgrammes";
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
    <div className=" bg-black flex justify-center">
      <div className="w-[90%] lg:w-[80%] flex flex-col items-center ">
        <div className=" mt-36 w-80   ">
          <img src={spack} className=" -mb-5 ml-2 lg:-ml-5"  />
          <h1 className=" lg:text-[45px] font-bold text-4xl text-center text-white font-mont tracking-[3px]">
            Explore Our Programmes
          </h1>
        </div>
        {/* explore card */}
        <div className="border-solid border-[1px] border-white w-full h-[300px] mt-20 text-white"> cards </div>

        {/* Choose programme Category */}
        <div className="w-full flex flex-col items-center gap-7   mt-44">
          <h1 className="lg:text-3xl tracking-[3px] font-bold  text-2xl text-white w-80 text-center lg:w-full font-mont">
            Choose programme Category
          </h1>
          <div className="custom-scroll">
            <div className="w-[1700px]  lg:w-full  flex justify-center gap-8  lg:flex-wrap">
              {buttonContent.map((items, index) => (
                <button
                  onClick={() => handleClick(index)}
                  key={index}
                  className={` ${activeButton === index ? `bg-[#121212] font-bold ` : `font-normal border-solid border-[1px] border-[#808080] `}  text-sm px-5 py-2  text-white flex items-center justify-center rounded-2xl cursor-pointer font-inter `}
                >
                  {items}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* programm card filter */}
        <div className="  pb-56 w-full mt-14 grid grid-cols-1 gap-20 md:gap-10 md:grid-cols-2">
          {activeButton === 0 && <AllProgrammes />}
          {activeButton === 1 && <Development />}
          {activeButton === 2 && <Creativity />}
          {activeButton === 3 && <MachineLearning />}
          {activeButton === 4 && <DataAndAI />}
          {activeButton === 5 && <Marketing />}
          {activeButton === 6 && <Engineering />}
        </div>
      </div>
    </div>
  );
}
