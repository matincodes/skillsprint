import CurriculumTable from "@/components/Table/CurriculumTable";
import curriculumData from "@/data/curriculumData";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/curriculum")({
  component: CurriculumComponent,
});

const CurriculumComponent = () => {
  return (
    <div className="px-3  w-full">
      <p className="text-paragraph font-medium font-inter text-base">
        Course curriculum
      </p>
      <div>
        <CurriculumTable />
      </div>
    </div>
  );
};
