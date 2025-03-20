import React, { useState } from "react";
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
import { Link } from "@tanstack/react-router";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/Sheets/AnnouncementSheet";
import NotificationModal from "../Notification/NotificationModal";
import { AnnouncementData } from "@/data/dashboard";
import UserAvatar from "../UserAvatar/UserAvatar";
import { ChevronLeft } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import NullState from "../Null/Null";


const AppSidebar = () => {
  const [activeLink, setActiveLink] = useState("/dashboard/");
  const { pathname } = useLocation();
  const userImage = JSON.parse(window.localStorage.getItem("user"))?.image;
  const { user } = useAuth();

  return (
    <div className="lg:w-51 relative">
      <Sidebar className={"w-50"}>
        <SidebarContent className={"relative"}>
          <SidebarGroup className={"lg:py-6 py-[60px] px-2 lg:space-y-[50px]"}>
            <SidebarGroupLabel className={"lg:flex hidden"}>
              <Link
                to="/dashboard/profile"
                className={`${pathname == "/dashboard/profile" ? "bg-black w-[230px] p-1 cursor-pointer rounded-[50px]" : ""} flex gap-2 items-center`}
              >
                {/* Avatar */}
                <UserAvatar profile={userImage} />
                {/* User Info */}
                <div className="flex flex-col font-sora">
                  <h1 className="text-[13px] text-white font-[300]">
                    {user?.name}
                  </h1>
                  <p className="text-paragraph text-[10px] font-[400]">
                    View Profile
                  </p>
                </div>
              </Link>
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu className="font-inter">
                {sideNavData.map((group) => (
                  <div key={group.id} className="space-y-3">
                    {group.category && (
                      <p className="mt-[15px] text-[13.9px] ml-1 mb-3 font-[400]">
                        {group.category}
                      </p>
                    )}
                    {group.links.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          className={
                            `${
                              item.url === pathname
                                ? "bg-black text-white" // Active background color
                                : "hover:bg-black hover:text-white text-paragraph"
                            } mb-1 py-[20px] px-3 cursor-pointer` // Default hover color
                          }
                          onClick={() => setActiveLink(item.url)}
                        >
                          {item.title == "Settings" ? (
                            <Link to={item.url} className="mt-[80px]">
                              <img src={item.icon} alt="" className="w-5" />
                              <span className="text-[13px] font-[400]">
                                {item.title}
                              </span>
                            </Link>
                          ) : item.url ? (
                            <Link to={item.url}>
                              <img src={item.icon} alt="" className="w-5" />
                              <span className="text-[13px] font-[400]">
                                {item.title}
                              </span>
                            </Link>
                          ) : (
                            <Sheet>
                              <SheetTrigger asChild>
                                <p className="py-2 gap-3 rounded-[6px] px-3 flex cursor-pointer text-paragraph ">
                                  <img src={item.icon} alt="" className="w-5" />
                                  <span className="text-[13px] font-[400]">
                                    {item.title}
                                  </span>
                                </p>
                              </SheetTrigger>
                              <SheetContent
                                side="left"
                                className={
                                  "text-white bg-black lg:w-[700px] px-2 w-full lg:px-1 absolute lg:left-[200px] "
                                }
                              >
                                <SheetHeader className={"space-y-[12px]"}>
                                  <SheetTitle
                                    className={"flex justify-between"}
                                  >
                                    <div className="flex items-center gap-2 py-1">
                                      <SheetClose asChild>
                                        <ChevronLeft className="flex lg:hidden" />
                                      </SheetClose>
                                      <p className="font-inter lg:text-[14px] text-[18px] py-1 font-[300] tracking-[1.2px]">
                                        Annoucements
                                      </p>
                                    </div>
                                    <div className="lg:flex hidden gap-5 items-center">
                                      <img
                                        src="/assets/Icons/slider.png"
                                        alt=""
                                        className="w-5 h-5"
                                      />
                                      <img
                                        src="/assets/Icons/menu.png"
                                        alt=""
                                        className="w-5 h-5"
                                      />
                                    </div>
                                  </SheetTitle>
                                  <SheetDescription
                                    className={
                                      "font-[400] text-[11px]  text-paragraph"
                                    }
                                  >
                                    Today
                                  </SheetDescription>
                                </SheetHeader>

                                <div className={AnnouncementData.length <= 0 ? `lg:h-[650px] h-[520px] flex items-center justify-center` : `relative top-[-20px] overflow-y-auto lg:h-[610px] h-[520px] no-scrollbar`}>
                                  {AnnouncementData.length <= 0 ? (
                                    <NullState
                                      mainText={"No New Announcements."}
                                      miniText={
                                        "Check back later!"
                                      }
                                      image={"/assets/null/announcement.png"}
                                    />
                                  ) : (
                                    AnnouncementData.map(
                                      (announcement, index) => (
                                        <NotificationModal
                                          key={index}
                                          image={announcement.image}
                                          name={announcement.name}
                                          description={announcement.description}
                                          date={announcement.date}
                                          time={announcement.time}
                                        />
                                      )
                                    )
                                  )}
                                </div>
                              </SheetContent>
                            </Sheet>
                          )}
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
            <img
              src="/assets/logo.png"
              alt=""
              className="w-[80px] object-cover"
            />
          </div>
          {/* Image */}
        </SidebarContent>
      </Sidebar>
    </div>
  );
};

export default AppSidebar;
