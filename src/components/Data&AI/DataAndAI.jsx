import { data } from "../../data/programmData";
import React from "react";
import ProgrammCard from "../ProgrammCard";

const DataAndAI = () => {
  return (
     <>
         {data.map((items, index) => (
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

export default DataAndAI
