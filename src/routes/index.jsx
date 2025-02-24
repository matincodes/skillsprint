import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import Button from "@/components/Button/Button";
import Card from "@/components/Card/Cards";
import { cardChooseSkillSprint } from "@/data/cards";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import FAQS from "@/data/faq";
import FAQ from "@/components/Faq/Faq";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="bg-black">
      {/* banner */}
      <div className="p-[250px] bg-black flex flex-col justify-center items-center w-full text-white">
        <div className="font-mont text-center space-y-[50px] flex flex-col items-center justify-center ">
          <section className="space-y-3">
            <h2 className="font-[700] text-[45px] tracking-[2px] leading-[60px]">
              Transform Your Career <br /> with Skill Sprint
            </h2>
            <p className="font-inter text-[#808080] text-[18px]">
              Learn in-demand tech and non-tech skills with live classes,
              gamified learning, <br /> and industry mentors.
            </p>
          </section>

          <Button text="Join the Free Program" />
        </div>
      </div>
      {/* banner */}

      {/* why to join */}
      <div className="text-white grid p-[90px] place-content-center space-y-[90px]">
        <div className="space-y-4 text-center">
          <h2 className="font-[700] text-[45px] tracking-[2px] leading-[60px]">
            Master Tech Skills, Faster.
          </h2>
          <p className="font-inter text-paragraph text-[18px] tracking-[2.2px]">
            Join Skill Sprint to gain in-demand tech expertise with live
            classes, hands-on projects, <br /> and career pathways—starting with
            a free one-month foundational course. 🚀
          </p>
        </div>

        <img
          src="/assets/section2.png"
          alt="Image With Sub-Images showing What We Do"
          className="w-full object-contain"
        />
      </div>
      {/* why to join */}

      {/* The Skill Sprint Edge */}
      <div className="text-white grid mt-[40px] relative p-[100px] place-content-center space-y-[70px]">
        <div className="space-y-4 text-center">
          <h2 className="font-[700] text-[45px] tracking-[2px] leading-[60px]">
            The Skill Sprint Edge
          </h2>
          <p className="font-inter text-paragraph text-[18px] font-[300] tracking-[2.2px] leading-[40px]">
            Shaping the next wave of curious minds ready to turn passion into
            impact. <br /> With Skill Sprint, you enter a tech ecosystem built
            to make you a frontier. <br /> With expert training, hands-on
            projects, and mentorship, we equip you for <br /> success. Tech is
            evolving—stay ahead. Join Skill Sprint today!
          </p>
        </div>

        <div className="flex place-content-center overflow-hidden">
          <img
            src="/assets/center.png"
            alt="Image With Sub-Images showing What We Do"
            className="object-contain w-full"
          />
        </div>
      </div>
      {/* The Skill Sprint Edge */}

      {/* Why Choose Skill Sprint Cards */}
      <div className="grid place-content-center space-y-2 mt-[80px] relative">
        <div className="text-center">
          <h2 className="font-[700] text-[45px] tracking-[2px] leading-[60px] text-white">
            Why choose Skill Sprint
          </h2>
        </div>

        {/*  */}
        <div className="gap-[40px] grid grid-cols-2 justify-center items-center p-[90px]">
          <Card
            icon="/assets/Icons/camera.png"
            mainText="Live Interactive Classes"
            subText="Engage with instructors and peers in real-time."
            image="/assets/card1.png"
            right
          />
          <Card
            icon="/assets/Icons/note.png"
            mainText="Practical Challenges"
            subText="Work on assignments to build real-world skills."
            image="/assets/card2.png"
            right
          />
          <Card
            icon="/assets/Icons/game.png"
            mainText="Gamified Learning"
            subText="Skill up with interactive challenges rewards and leaderboard updates"
            image="/assets/card1.png"
            left
          />
          <Card
            icon="/assets/Icons/bell.png"
            mainText="Stay Updated and Connected"
            subText="Get the latest updates and announcements, from instructors."
            image="/assets/card4.png"
            right
          />
          <div className="col-span-2 flex items-center justify-center relative mt-[50px]">
            <Button text="Join the free program" />
          </div>
        </div>
        {/*  */}
      </div>
      {/* Why Choose Skill Sprint Cards */}

      {/* Upskill with skill sprint */}
      <div className="text-white grid mt-[40px] relative p-[100px] place-content-center space-y-[70px]">
        <div className="space-y-4 text-center">
          <h2 className="font-[700] text-[45px] tracking-[2px] leading-[60px]">
            Upskill with Skill Sprint
          </h2>
          <p className="font-inter text-paragraph text-[18px] font-[300] tracking-[2.2px] leading-[25px]">
            Learn various in-demand skills to upgrade yor career . Start with a
            free one-month course, <br /> live classes, hands-on projects, and
            career opportunities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-[20px] relative">
          {cardChooseSkillSprint.map((card) => (
            <>
              <div
                className={`flex items-center relative bg-[url(${card.bg})] bg-center bg-cover bg-no-repeat h-[60lvh]`}
                key={card.id}
              >
                <div className=" absolute top-0 left-0 h-full w-full bg-[#0e0d0de0]">
                  <p className="absolute bottom-0 font-inter text-[25px] font-[600] p-6 ">
                    {card.text}
                  </p>
                </div>
              </div>
            </>
          ))}

          {/* Button */}
          <div className="col-span-3 flex items-center justify-center relative mt-[30px]">
            <Button text="View all programs" location="/about" />
          </div>
          {/* Button */}
        </div>
        {/* Cards */}
      </div>
      {/* Upskill with skill sprint */}

      {/* FAQ */}
      <div className="border border-red-500 text-white flex justify-center items-center flex-col space-y-6">
        <div className="space-y-4 text-center border border-white">
          <h2 className="font-[700] text-[45px] tracking-[2px] leading-[60px]">
            Frequently asked questions
          </h2>

          <Carousel>
              <CarouselContent>
                {FAQS.map((faqs) => (
                    <CarouselItem key={faqs.id} className="basis-1/3 border">
                      {faqs.category}
                    </CarouselItem>
                ))}
              </CarouselContent>
          </Carousel>
        </div>

        {/* Accordion */}
        <div className="w-[65%] font-inter"></div>
        {/* Accordion */}
      </div>
      {/* FAQ */}
    </div>
  );
}
