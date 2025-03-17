import React, { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import Button from "@/components/Button/Button";
import { skillCard, upskillCard } from "@/data/homeCardData";
import UpSkillCard from "@/components/Cards/UpSkillCard";
import FAQ from "@/components/Faq/Faq";
import HomePageSection from "@/components/Sections/HomePageSection";
import SectionHeader from "@/components/Sections/SectionHeader";
import SkillCard from "@/components/Cards/SkillCard";
import NavBar from "@/components/NavBar/NavBar";
import useEnrollmentStatus from "@/hooks/useEnrollmentStatus";
import { useAuth } from "@/context/AuthContext";
import useEnrollments from "@/hooks/useEnrollment";
import Footer from "@/components/footer/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { isAuthenticated, isLoading: authLoading, checkAuth } = useAuth();
  const {
    hasActiveEnrollment,
    isLoading,
    refetch: checkEnrollment,
  } = useEnrollmentStatus();

  const { refetchEnrollments } = useEnrollments();

  console.log(isAuthenticated, hasActiveEnrollment, isLoading);

  useEffect(() => {
    const initializeAuth = async () => {
      await checkAuth();
      if (isAuthenticated) {
        checkEnrollment();
        refetchEnrollments();
      }
    };
    initializeAuth();
  }, [isAuthenticated]);

  const renderButton = () => {
    if (authLoading) return <Button text="Loading..." disabled />;

    return isAuthenticated ? (
      hasActiveEnrollment ? (
        <Button text="Go to Dashboard" location="dashboard/" />
      ) : (
        <Button text="Enroll in a Course" location="/programmes" />
      )
    ) : (
      <Button text="Join the Free Program" location="/student/register" />
    );
  };

  return (
    <>
      {/* NavBar */}
      <NavBar />
      {/* NavBar */}

      {/* Main Content */}
      <div className="bg-black">
        {/* banner */}

        <div className="lg:p-[105px] py-[40px] px-[20px] bg-black flex flex-col justify-center items-center w-full text-white relative overflow-hidden">
          <div className="font-mont text-center space-y-[50px] flex flex-col items-center justify-center ">
            <section className="space-y-3 flex flex-col items-center justify-center relative ">
              <h2 className="font-[700] lg:text-[45px] text-[37px] tracking-[2px] lg:leading-[60px] relative lg:w-[70%] w-full flex ">
                <img
                  src={"/assets/Icons/spark.png"}
                  className=" absolute lg:w-[60px] w-[40px] lg:top-[-32px] lg:left-[2px] top-[-13px] left-[-20px] "
                />
                Transform Your Career with Skill Sprint
              </h2>

              <p className="font-inter text-[#808080] lg:text-[18px] text-[15px]">
                Learn in-demand tech and non-tech skills with live classes,
                gamified learning, <br /> and industry mentors.
              </p>
            </section>

            {renderButton()}

            <img
              src="/assets/Icons/arrow.png"
              alt=""
              className="lg:w-[190px] absolute left-[0px] lg:top-[290px] w-[85px] top-[220px]"
            />
            <img
              src="/assets/Icons/curvy_arrow.png"
              alt=""
              className="lg:w-[115px] relative lg:left-[-60px] w-[90px] left-[-40px]"
            />
            <img
              src="/assets/Icons/laptop.png"
              alt=""
              className="lg:w-[310px] absolute lg:right-[-17px] lg:top-[280px] right-[-100px] top-[200px] w-[180px]"
            />
            {/* </div> */}
          </div>
        </div>
        {/* banner */}

        {/* *********** why to join *********** */}
        <div className="text-white grid lg:mt-[10px] mt-[20px] lg:mb-[15px] mb-[170px] relative ">
          <HomePageSection
            header="Master Tech Skills, Faster."
            paragraph="Join Skill Sprint to gain in-demand tech expertise with live
              classes, hands-on projects, and career pathways—starting with a free
              one-month foundational course. 🚀"
            desktop="/assets/section2.png"
            responsive="/assets/responsive1.png"
          />
        </div>
        {/* *********** why to join *********** */}

        {/* *********** The Skill Sprint Edge *********** */}
        <div className="text-white grid relative ">
          <HomePageSection
            header="The Skill Sprint Edge"
            paragraph="Shaping the next wave of curious minds ready to turn passion into
              impact. With Skill Sprint, you enter a tech ecosystem built
              to make you a frontier. With expert training, hands-on
              projects, and mentorship, we equip you for success. Tech is
              evolving—stay ahead. Join Skill Sprint today!"
            desktop="/assets/center.png"
            responsive="/assets/responsive2.png"
          />
        </div>
        {/* *********** The Skill Sprint Edge *********** */}

        {/* Why Choose Skill Sprint Cards */}
        <div className="grid place-content-center space-y-2 lg:mt-[80px] mt-[250px] relative">
          <div className="text-center">
            <h2 className="font-[700] lg:text-[45px] text-[30px] tracking-[2px] lg:leading-[60px] text-white">
              Why choose Skill Sprint
            </h2>
          </div>

          {/*  */}
          <div className="gap-[40px] flex flex-col lg:grid lg:grid-cols-2 justify-center items-center lg:p-[90px] p-[10px]">
            {skillCard.map((card) => (
              <SkillCard
                key={card.id}
                icon={card.icon}
                mainText={card.mainText}
                subText={card.subText}
                desktopImage={card.desktopImage}
                mobileImage={card.mobileImage}
                position={card.position}
              />
            ))}

            <div className="col-span-2 flex items-center justify-center relative mt-[50px]">
              <Button
                text="Join the free program"
                location="/student/register"
              />
            </div>
          </div>
          {/*  */}
        </div>
        {/* Why Choose Skill Sprint Cards */}

        {/* Upskill with skill sprint */}
        <div className="text-white grid lg:mt-[40px] py-[250px] relative lg:p-[100px] place-content-center space-y-[70px]">
          <SectionHeader
            header={`Upskill with Skill Sprint`}
            paragraph={`Learn various in-demand skills to upgrade yor career . Start with a
              free one-month course, live classes, hands-on projects, and
              career opportunities.`}
          />

          {/* Cards */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 lg:items-center lg:gap-[20px] gap-[30px] relative lg:p-3 p-6  ">
            {upskillCard.map((card) => (
              <UpSkillCard bg={card.bg} key={card.id} text={card.text} />
            ))}

            {/* Button */}
            <div className="col-span-3 flex items-center justify-center relative mt-[30px]">
              <Button text="View all programs" location="/programmes" />
            </div>
            {/* Button */}
          </div>
          {/* Cards */}
        </div>
        {/* Upskill with skill sprint */}

        {/* FAQ */}
        <div className="text-white flex justify-center items-center flex-col lg:space-y-6 space-y-8 p-4 py-[170px]">
          <h2 className="font-[700] lg:text-[45px] text-[24px] tracking-[2px] lg:leading-[60px] leading-[30px] text-center">
            Frequently asked questions
          </h2>

          {/* Accordion */}
          <FAQ />
          {/* Accordion */}
        </div>
        {/* FAQ */}
      </div>
      {/* Main Content */}

      {/* Footer */}
      <Footer />
      {/* Footer */}
    </>
  );
}
