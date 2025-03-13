import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NotificationModal = (e) => {
  return (
    <div
      className={`text-white flex flex-col justify-center items-end w-full border-[#31343B] border-b px-2 py-3 font-inter`}
    >
      <div className="flex items-center w-full justify-between">
        <span className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={e.image} className={"size-7"} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h3 className="w-fitoverflow-hidden text-ellipsis text-[13px] whitespace-nowrap text-start font-[400]">
            {e.name}
          </h3>
        </span>
        <p className="text-[11px] font-medium w-fit items-left font-sora text-paragraph ">
          {e.date} - {e.time}
        </p>
      </div>

      <div className="w-[91%] px-1">
        <p className="text-[12px] font-[100] tracking-[0.6px] leading-5 text-left">
          {e.description}
        </p>
      </div>
    </div>
  );
};

export default NotificationModal;
