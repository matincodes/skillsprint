import React from "react";
import ProgrammeCard from "../Cards/ProgrammeCard";
const Programmes = ({ data }) => {
  return (
    <>
      {data.map((items, index) => (
        <ProgrammeCard
          key={index}
          image={items.image}
          role={items.role}
          description={items.description}
        />
      ))}
    </>
  );
};

export default Programmes;
