import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import spack from "../../assets/icons/spack.svg";
import "./programmes.css";
import Programmes from "../../components/Programmes/Programmes";
import { programmeData } from "@/data/programmeData";
import UpSkillCard from "@/components/Cards/UpSkillCard";
import { upskillCard } from "@/data/homeCardData";
import NavBar from "@/components/Navbar/NavBar";
import Footer from "@/components/Footer/Footer";

// Route Configuration
export const Route = createFileRoute("/programmes/")({
  component: RouteComponent,
});

// Categories & Filtering Logic
const categories = [
  { label: "All", filter: () => programmeData },
  { label: "Tech & Software Development", filter: () => programmeData.filter((item) => item.category === "Development") },
  { label: "Product & Graphic Design", filter: () => programmeData.filter((item) => item.category === "Design") },
  { label: "Cybersecurity & Cloud Computing", filter: () => programmeData.filter((item) => item.category === "Security & Cloud") },
  { label: "Data Analytics & Artificial Intelligence", filter: () => programmeData.filter((item) => item.category === "Data & AI") },
  { label: "Business & Marketing", filter: () => programmeData.filter((item) => item.category === "Business & Marketing") },
  { label: "Engineering & Hardware", filter: () => programmeData.filter((item) => item.category === "Engineering & Hardware") },
];

// Button Component for Reusability
const CategoryButton = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`text-sm px-5 py-2 text-white flex items-center justify-center rounded-2xl cursor-pointer font-inter ${
      isActive ? "bg-[#121212] font-bold" : "font-normal border border-[#808080]"
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
      <div className="bg-black flex justify-center">
        <div className="w-[90%] lg:w-[100%] flex flex-col items-center">
          {/* Header Section */}
          <div className="mt-36 w-80">
            <img src={spack} alt="Skill Sprint Logo" className="-mb-5 ml-2 lg:-ml-5" />
            <h1 className="lg:text-[45px] font-bold text-4xl text-center text-white font-mont tracking-[3px]">
              Explore Our Programmes
            </h1>
          </div>

          {/* Explore Card Section */}
          <div className="w-full md:flex md:flex-row justify-center gap-2 mt-20">
              {upskillCard.map((card) => (
                <UpSkillCard 
                  bg={card.bg} 
                  key={card.id} 
                  text={card.text} 
                  textSize="17px"
                  height="300px"
                  
                  />
              ))}
          </div>

          {/* Programme Category Selection */}
          <div className="w-full lg:w-[80%] flex flex-col items-center gap-7 mt-40">
            <h2 className="lg:text-3xl tracking-[3px] font-bold text-2xl text-white w-80 text-center lg:w-full font-mont">
              Choose a Programme Category
            </h2>
            <div className="custom-scroll">
              <div className="w-[1700px] lg:w-full flex justify-center gap-8 gap-x-16 lg:flex-wrap">
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
          <div className="w-full lg:w-[80%] mt-14 grid grid-cols-1 gap-20 md:gap-10 md:grid-cols-2 md:mb-56">
            <Programmes data={categories[activeCategory].filter()} />
          </div>
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
