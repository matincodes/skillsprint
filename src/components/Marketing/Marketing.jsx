import { business } from "../../data/programmData";
import React from "react";
import ProgrammCard from "../ProgrammCard";
const Marketing = () => {
  return (
     <>
           {business.map((items, index) => (
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

export default Marketing
