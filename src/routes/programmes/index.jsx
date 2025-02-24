import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import spack from "../../assets/icons/spack.svg";
import ProgrammCard from "../../components/ProgrammCard";
import programmData from "../../data/programmData";
import "./programmes.css"
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
        <div className=" mt-28 w-80   ">
          <img src={spack} className=" -mb-5 ml-2" />
          <h1 className=" font-bold text-4xl text-center text-white font-mont tracking-[3px]">
            Explore Our Programmes
          </h1>
        </div>
        {/* explore card */}
      
        {/* Choose programme Category */}
        <div className="w-full flex flex-col items-center gap-7   mt-44">
          <h1 className="tracking-[3px] font-bold  text-2xl text-white w-80 text-center lg:w-full font-mont">
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
        {/* programm card */}
        <div className="  pb-64 w-full mt-14 grid grid-cols-1 gap-20 md:gap-10 md:grid-cols-2">
          {programmData.map((items, index) => (
            <ProgrammCard key={index} image={items.image} role={items.role} description={items.description} />
          ))}
        </div>
      </div>
    </div>
  );
}
