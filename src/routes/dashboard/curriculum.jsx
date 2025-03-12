import CurriculumTable from "@/components/Table/CurriculumTable";
import { createFileRoute } from "@tanstack/react-router";
import "../../routes/programmes/programmes.css";
export const Route = createFileRoute("/dashboard/curriculum")({
  component: CurriculumComponent,
});

const CurriculumComponent = () => {
  return (
    <div className="px-3 w-full">
      <p className="text-paragraph font-medium font-inter text-sm lg:text-base">Course curriculum</p>
     <div  className="custom-scroll">
     <CurriculumTable />
     </div>
    </div>
  );
};
