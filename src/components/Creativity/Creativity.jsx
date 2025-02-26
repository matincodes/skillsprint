import { design } from "../../data/programmData";
import React from "react";
import ProgrammCard from "../ProgrammCard";
const Creativity = () => {
  return (
     <>
         {design.map((items, index) => (
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

export default Creativity
