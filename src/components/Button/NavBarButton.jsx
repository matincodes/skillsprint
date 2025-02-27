import * as React from "react";

// import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Button from "./Button";

const NavBarButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex w-fit">
        <Button text="Login to portal" nav />
      </DropdownMenuTrigger>
      <DropdownMenuContent className={"w-[146px] space-y-4 py-3 lg:w-[155px] overflow-hidden"}>
        <DropdownMenuLabel className={"border"}>
          <Button text="As Instructor" nav />
        </DropdownMenuLabel>
        <DropdownMenuLabel>
          <Button text="As Student" nav />
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavBarButton;
