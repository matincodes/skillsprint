import { createFileRoute } from "@tanstack/react-router";
import { Progress } from "@/components/ui/progress";
import { Link } from "@tanstack/react-router";
import { Radio } from "lucide-react";
import UpcomingSession from "@/components/Cards/UpcomingSession";
import { UpcomingSessionCard } from "@/data/dashboard";
import LeaderBoard from "@/components/Cards/LeaderBoard";
import { LeaderBoardCard } from "@/data/dashboard";
import { useEnrollments } from "@/hooks/useEnrollment";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardComponent,
});

const DashboardComponent = () => {
  const { currentEnrollment, enrollments, isLoading } = useEnrollments();
  console.log(currentEnrollment, enrollments);

  if (isLoading) {
    return <div>Loading enrollment data...</div>;
  }

  if (!currentEnrollment) {
    return (
      <div className="grid p-2">
        <p>No active enrollment found. Please enroll in a course.</p>
      </div>
    );
  }

  return (
    <div className="grid p-2">
      {/* TopSection */}
      <div className="flex">
        {/* Left */}
        <div className="lg:basis-[58%] space-y-7">
          <div>
            <p className="text-paragraph">Course</p>
            <h2 className="font-sora text-white text-[23px] font-[300]">
              {currentEnrollment.course.title}
            </h2>
            <p className="text-paragraph text-[14px] leading-[25px] mt-2">
              {currentEnrollment.course.description}
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Progress value={30} />
            <p className="text-paragraph text-[15px] ml-2 font-[300]">
              {`${currentEnrollment.progress}% completed`}
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
            {UpcomingSessionCard.map((session, index) => (
              <UpcomingSession
                title={session.title}
                image={session.image}
                url={session.url}
                key={index}
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
            {LeaderBoardCard.map((user, index) => (
              <LeaderBoard
                key={index}
                fullName={user.fullName}
                image={user.image}
                point={user.point}
                level={user.level}
                type={user.type}
              />
            ))}
          </div>
        </div>
        {/* Right */}
      </div>
      {/* BottomSection */}
    </div>
  );
};
