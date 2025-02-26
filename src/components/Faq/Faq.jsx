import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import faqs from "@/data/faq";

const FAQ = () => {
  const [active, setActive] = useState("General Information");
  //   console.log(active);

  return (
    <>
      <div className="lg:flex gap-[15px] p-[19px] hidden">
        {faqs.map((faqCategory) => (
          <button
            key={faqCategory.id}
            className={`cursor-pointer font-inter text-[14px] rounded-full px-[18px] py-[10px] ${active == faqCategory.category ? "bg-[#121212]" : "border border-[#121212]"}`}
          >
            <p onClick={(e) => setActive(e.target.innerText)}>
              {faqCategory.category}
            </p>
          </button>
        ))}
      </div>

      <div className="lg:w-[70%] w-full lg:p-3 font-inter">
        {faqs
          .filter((faq) => faq.category == active)
          .map((faqCategory) => (
            <div key={faqCategory.id} className="space-y-6">
              {faqCategory.faqs.map((faq) => (
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  key={faq.id}
                >
                  <AccordionItem value={`item-${faq.id}`} className={'bg-[#1A1A1A] rounded-[7px]'}>
                    <AccordionTrigger
                      className={
                        "cursor-pointer font-[400] text-[15px] "
                      }
                    >
                      {faq.question} {/* Render the question */}
                    </AccordionTrigger>
                    <AccordionContent className={'text-[15px] leading-[27px]'}>
                      {faq.answer} {/* Render the answer */}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          ))}
      </div>
    </>
  );
};

export default FAQ;
