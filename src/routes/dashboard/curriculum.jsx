import CurriculumTable from "@/components/Tables/CurriculumTable";
import { createFileRoute } from "@tanstack/react-router";
import "../../routes/programmes/programmes.css";
export const Route = createFileRoute("/dashboard/curriculum")({
  component: CurriculumComponent,
});

const CurriculumComponent = () => {
  return (
    <div className="lg:px-3 w-full">
      <p className="text-paragraph font-medium font-inter text-sm lg:text-base">
        Course curriculum
      </p>
      <div className="px-2 w-full   bg-[#121212]  rounded-sm mt-5 py-2.5 lg:px-3.5">
        <CurriculumTable />
      </div>
    </div>
  );
};
