const NullState = (e) => {
  return (
    <div className="flex flex-col items-center justify-center font-inter text-white p-5 text-center gap-8 ">
      <img src={e.image} alt="" className="w-[160px]" />

      <span className="flex flex-col gap-1">
        <b className="font-[400]">{e.mainText}</b>
        <p className='font-[200] text-[13px] text-paragraph'>{e.miniText}</p>
      </span>
    </div>
  );
};

export default NullState;
