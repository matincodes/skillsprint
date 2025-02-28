import { createFileRoute } from "@tanstack/react-router";
import { Progress } from "@/components/ui/progress";
import { Link } from "@tanstack/react-router";
import { Radio } from "lucide-react";
import UpcomingSession from "@/components/Cards/UpcomingSession";
import { UpcomingSessionCard } from "@/data/dashboard";
import LeaderBoard from "@/components/Cards/Leaderboard";
import { LeaderBoardCard } from "@/data/dashboard";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardComponent,
});

const DashboardComponent = () => {
  return (
    <div className="grid h-full p-2 ">
      {/* TopSection */}
      <div className="flex">
        {/* Left */}
        <div className="lg:basis-[58%] space-y-7">
          <div>
            <p className="text-paragraph">Course</p>
            <h2 className="font-sora text-white text-[23px] font-[300]">
              Understanding UI/UX Basics
            </h2>
            <p className="text-paragraph text-[14px] leading-[25px] mt-2">
              Learn the essentials of UI/UX design, including usability,
              wireframing, and user-centered design principles. This course
              provides a foundation to create intuitive and visually appealing
              digital experiences. Perfect for beginners or anyone looking to
              explore the world of design.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Progress value={30} />
            <p className="text-paragraph text-[15px] ml-2 font-[300]">
              30% completed
            </p>
          </div>

          <div className="flex gap-5">
            <Link
              to="/"
              className="font-[400] duration-300 ease-in-out lg:text-[15px] text-[12px] lg:px-8 px-5 py-2 bg-main text-white rounded-[7px] flex gap-4 items-center"
            >
              Join Live Class <Radio className="w-5" />{" "}
            </Link>
            <Link
              to="/"
              className="font-[400] duration-300 ease-in-out lg:text-[15px] text-[12px] lg:px-8 px-5 py-2 hover:bg-main hover:text-white text-main rounded-[7px] flex gap-4 items-center"
            >
              View Last Recording
              <Radio className="w-5" />{" "}
            </Link>
          </div>
        </div>
        {/* Left */}

        {/* Right */}
        <div className="basis-[42%] lg:flex hidden items-center justify-center relative">
          <img
            src="/assets/dashboardImage.png"
            alt=""
            className="w-[1850px] absolute"
          />
        </div>
        {/* Right */}
      </div>
      {/* TopSection */}

      {/* BottomSection */}
      <div className="grid lg:grid-cols-2 mt-[70px] gap-6 py-5">
        {/* left */}
        <div className="p-2 space-y-4">
          <p className="text-paragraph">Upcoming Sessions</p>
          <div className="rounded-[6px] bg-[#121212a1] p-2">
            {UpcomingSessionCard.map((session) => (
              <UpcomingSession
                title={session.title}
                image={session.image}
                url={session.url}
                key={session.id}
              />
            ))}
          </div>
        </div>
        {/* left */}

        {/* Right */}
        <div className="p-2 space-y-3 ">
          <span className="flex justify-between">
            <p className="text-paragraph">Leadboard</p>
            <Link
              to=""
              className="bg-[#121212a1] text-paragraph text-[13px] px-2 py-1 rounded-[20px]"
            >
              View More
            </Link>
          </span>

          <div className="rounded-[6px] space-y-2">
            {LeaderBoardCard.map(user=>(
               <LeaderBoard fullName={user.fullName} image={user.image} point={user.point} level={user.level} type={user.type} />
            ))}

          </div>
        </div>
        {/* Right */}
      </div>
      {/* BottomSection */}
    </div>
  );
};

