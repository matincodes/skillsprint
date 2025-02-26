import React from 'react'
const ExploreCard = (e) => {
  return (
    <>
      <div
        className={`flex items-center relative bg-center h-full bg-cover bg-no-repeat  w-full`}
        style={{ backgroundImage: `url(${e.bg})` }}
      >
        <div className="py-2.5 px-1.5 flex items-end absolute top-0 left-0 h-full w-full bg-[#1414146c]">
          <p className="lg:text-sm lg:w-[145px] font-inter font-bold text-[9px] text-white w-[95px] ">
            {e.text}
          </p>
        </div>
      </div>
    </>
  )
}

export default ExploreCard
