import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserAvatar = (e) => {
  return (
    <Avatar>
      <AvatarImage
        src={` ${e.profile == null ? "/assets/users/avatar.png" : e.profile} `}
        className={"size-8"}
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
