import { createFileRoute } from "@tanstack/react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import Form from "@/components/Form/Form";
import { useRef, useState } from "react";

export const Route = createFileRoute("/dashboard/profile")({
  component: ProfileComponent,
});

const ProfileComponent = () => {
  const [profile, setProfile] = useState(
    JSON.parse(window.localStorage.getItem("user"))?.image ||
      "/assets/users/avatar.png",
  );
  const userprofile = useRef();


  return (
    <div className="bg-[#121212] lg:flex py-[90px] grid lg:divide-x-[1.3px] divide-black lg:p-[25px] rounded-[7px]">
      <div className="basis-[25%] flex flex-col items-center space-y-2 px-[20px] py-[10px]">
        <Avatar>
          <AvatarImage src={profile} className={"size-30 object-cover aspect-square"} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <Input
          id="avatar"
          type="file"
          name="changeUserImage"
          accept="image/*"
          className="hidden"
          ref={userprofile}
          // onChange={() => handleImageChange()}
        />
        <label
          htmlFor="avatar"
          className="font-sora text-main font-[700] cursor-pointer text-[14px]"
        >
          Change Avatar
        </label>
      </div>

      <div className="lg:basis-[70%] flex items-center justify-center flex-col px-[10px] lg:px-[30px] py-[30px] ">
        <div className="lg:w-[90%] w-full grid gap-6 items-center">
          <h2 className="font-sora text-[16px]">My Profile</h2>
          {/* form */}
          <Form />
          {/* form */}
        </div>
      </div>
    </div>
  );
};