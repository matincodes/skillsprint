import { programmData } from "../../data/programmData";
import React from "react";
import ProgrammCard from "../ProgrammCard";
const AllProgrammes = () => {
  return (
     <>
              {programmData.map((items, index) => (
                <ProgrammCard
                  key={index}
                  image={items.image}
                  role={items.role}
                  description={items.description}
                />
              ))}
            </>
  )
}

export default AllProgrammes
