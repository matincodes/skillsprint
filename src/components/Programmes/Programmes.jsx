import React from "react";
import ProgrammeCard from "../Cards/ProgrammeCard";
const Programmes = ({ data, isAuthenticated }) => {
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
          isAuthenticated={isAuthenticated}
          startDate={items.startDate}
        />
      ))}
    </>
  );
};

export default Programmes;
