import CurriculumTable from "@/components/Table/CurriculumTable";
import curriculumData from "@/data/curriculumData";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/curriculum")({
  component: CurriculumComponent,
});

const CurriculumComponent = () => {
  return (
    <div className="">
      <p className="text-paragraph font-medium font-inter text-base">
        Course curriculum
      </p>
      <CurriculumTable />
    </div>
  );
};
