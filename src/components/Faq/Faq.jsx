import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import FAQS from "@/data/faq";

const FAQ = () => {
  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="border border-orange-500 bg-[#1A1A1A] p-[9px]"
      >
        {FAQS.map((faq) => (
          <>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </>
        ))}
      </Accordion>
    </>
  );
};

export default FAQ;
