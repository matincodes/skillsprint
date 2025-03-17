import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function CurriculumAccordion(e) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-[30%] absolute top-[6%] right-0 bg-black"
    >
      <p>
        
        {e.period} -{e.topic}
      </p>
      <AccordionItem value="item-1" className="mt-10">
        <AccordionTrigger>Class 1</AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-9">
            <li>
              <p>Topic</p>
              <p>{e.topic}</p>
            </li>
            <li>
              <p>Period</p>
              <p>{e.period} - Class 1</p>
            </li>
            <li>
              <p>Date</p>
              <p>{e.date}</p>
            </li>
            <li>
              <p>Status</p>
              <p>{e.status}</p>
            </li>
            <li>
              <p>Attachments</p>
              <input />
              <input />
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Class 2</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Class 3</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
