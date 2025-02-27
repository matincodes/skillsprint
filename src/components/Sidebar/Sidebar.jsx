import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import sideNavData from "@/data/sideNavData";
import { useLocation } from "@tanstack/react-router";

const AppSidebar = () => {
  const [activeLink, setActiveLink] = useState("/dashboard/");
  const {pathname} = useLocation()

  console.log(activeLink, location)

  return (
    <Sidebar>
      <SidebarContent className={'relative'}>
        <SidebarGroup>
          <SidebarGroupLabel className={`p-2 flex`}>
            {/* Avatar */}
            <Avatar>
              <AvatarImage src="/assets/avatar.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {/* User Info */}
            <div className="flex flex-col font-sora">
              <h1 className="text-[15px] text-white font-[400]">Sophia Williams</h1>
              <p className="text-paragraph text-[14px]">View Profile</p>
            </div>
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="font-inter">
              {sideNavData.map((group) => (
                <div key={group.id}>
                  {group.category && (
                    <p className="mt-[10px] text-[17px]">{group.category}</p>
                  )}
                  {group.links.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        className={`${
                          item.url === pathname
                            ? "bg-black text-white" // Active background color
                            : "hover:bg-black hover:text-white text-paragraph"} mb-1 py-6 px-3  cursor-pointer` // Default hover color
                        }
                        onClick={() => setActiveLink(item.url)}
                      >
                        <a href={item.url}>
                          <img src={item.icon} alt="" className="w-5" />
                          <span className="text-[14px] font-[500]">{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Image */}
              <div className="absolute bottom-3 w-full grid place-content-center">
               <img src="/assets/logo.png" alt="" className="w-[90px] object-cover" />
              </div>
        {/* Image */}

      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
