import React from "react";
import ProgrammeCard from "../Cards/ProgrammeCard";
const Programmes = ({ data }) => {
  return (
    <>
      {data.map((items, index) => (
        <ProgrammeCard
          key={index}
          image={items.coverImage}
          title={items.title}
          description={items.description}
          price={items.price}
          duration={items.duration}
        />
      ))}
    </>
  );
};

export default Programmes;
