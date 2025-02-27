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

// Menu items.
const items = [
  {
    id: 1,
    category: "",
    links: [
      {
        title: "Home",
        url: "/dashboard/",
        icon: '/assets/Icons/home.png',
      },
      {
        title: "Announcements",
        url: "#",
        icon: '/assets/Icons/announcements.png',
      },
    ],
  },
  {
    id: 2,
    category: "Learning",
    links: [
      {
        title: "Classes",
        url: "",
        icon: '/assets/Icons/classes.png',
      },
      {
        title: "Curriculum",
        url: "#",
        icon: '/assets/Icons/curriculum.png',
      },
      {
        title: "Assignments",
        url: "",
        icon: '/assets/Icons/assignments.png',
      },
      {
        title: "Quizzes",
        url: "#",
        icon: '/assets/Icons/quizzes.png',
      },
    ],
  },
];

const AppSidebar = () => {
  const [activeLink, setActiveLink] = useState("/dashboard/");

  return (
    <Sidebar>
      <SidebarContent>
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
              {items.map((group) => (
                <div key={group.id}>
                  {group.category && (
                    <p className="mt-[20px] text-[20px]">{group.category}</p>
                  )}
                  {group.links.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        className={
                          activeLink === item.url
                            ? "bg-black py-6 px-3 text-white" // Active background color
                            : "hover:bg-gray-700 mb-1 py-6 px-3" // Default hover color
                        }
                        onClick={() => setActiveLink(item.url)}
                      >
                        <p href={item.url}>
                          <img src={item.icon} alt="" className="w-7" />
                          <span className="text-[16px] font-[500]">{item.title}</span>
                        </p>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
