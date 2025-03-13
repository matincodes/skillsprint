import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import spack from "../../assets/icons/spack.svg";
import "./programmes.css";
import Programmes from "../../components/Programmes/Programmes";
import { programmeData } from "@/data/programmeData";
import { upskillCard } from "@/data/homeCardData";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ExploreCard from "@/components/Cards/ExploreCard";


// Route Configuration
export const Route = createFileRoute("/programmes/")({
  component: RouteComponent,
});

// Categories & Filtering Logic
const categories = [
  { label: "All", filter: () => programmeData },
  {
    label: "Tech & Software Development",
    filter: () =>
      programmeData.filter((item) => item.category === "Development"),
  },
  {
    label: "Product & Graphic Design",
    filter: () => programmeData.filter((item) => item.category === "Design"),
  },
  {
    label: "Cybersecurity & Cloud Computing",
    filter: () =>
      programmeData.filter((item) => item.category === "Security & Cloud"),
  },
  {
    label: "Data Analytics & Artificial Intelligence",
    filter: () => programmeData.filter((item) => item.category === "Data & AI"),
  },
  {
    label: "Business & Marketing",
    filter: () =>
      programmeData.filter((item) => item.category === "Business & Marketing"),
  },
  {
    label: "Engineering & Hardware",
    filter: () =>
      programmeData.filter(
        (item) => item.category === "Engineering & Hardware",
      ),
  },
];

// Button Component for Reusability
const CategoryButton = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`lg:text-lg text-sm px-5 py-2 text-white flex items-center justify-center rounded-3xl cursor-pointer font-inter ${
      isActive
        ? "bg-[#121212] font-bold"
        : "font-light border-[3px] border-[#121212]"
    }`}
  >
    {label}
  </button>
);

function RouteComponent() {
  const [activeCategory, setActiveCategory] = useState(0);


  return (
    <>
      {/* NavBar */}
      <NavBar />
      {/* NavBar */}

      {/* Main Content */}
      <div className="bg-black flex flex-col ">
        {/* Header Section */}
        <div className="mt-36 flex justify-center">
          <span className=" flex flex-col items-start">
            <img
              src={spack}
              alt="Skill Sprint Logo"
              className="-ml-7 lg:-mb-5 lg:-ml-5 lg:w-[60px]"
            />
            <h1 className="lg:text-6xl lg:leading-18 font-bold text-4xl text-center text-white font-mont tracking-[3px]">
              Explore Our <br /> Programmes
            </h1>
          </span>
        </div>

        {/* Explore Card Section */}
        <div className=" lg:gap-3 w-full grid grid-cols-3 h-72 lg:flex lg:flex-row justify-center gap-2 mt-20">
          {upskillCard.map((card) => (
            <ExploreCard bg={card.bg} key={card.id} text={card.text} />
          ))}
        </div>

        {/* Programme Category Selection */}
        <div className="w-full lg:gap-12  flex flex-col items-center gap-7 mt-40">
          <h2 className="lg:text-[45px] tracking-[1px] font-bold text-2xl text-white  text-center lg:w-full font-mont">
            Choose Programme <br className="lg:hidden" /> Category
          </h2>
          <div className="custom-scroll">
            <div className=" lg:w-full flex lg:gap-x-10 lg:gap-y-5 gap-x-5 lg:flex-wrap px-7   lg:justify-center">
              {categories.map((category, index) => (
                <CategoryButton
                  key={index}
                  label={category.label}
                  isActive={activeCategory === index}
                  onClick={() => setActiveCategory(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Programme Cards Display */}
        <div className="lg:mt-[120px] pb-55 w-full px-7 lg:px-40 mt-14 grid grid-cols-1 gap-20 md:gap-10 md:grid-cols-2 md:mb-56">
          <Programmes data={categories[activeCategory].filter()} />
        </div>
      </div>
      {/* Main Content */}

      {/* Footer */}
      <Footer />
      {/* Footer */}
    </>
  );
}

export default RouteComponent;
