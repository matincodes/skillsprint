import CurriculumTable from "@/components/Tables/DesktopCurriculum";
import { createFileRoute } from "@tanstack/react-router";
import "../../routes/programmes/programmes.css";
import MobileCurriculum from "@/components/Tables/MobileCurriculum";
export const Route = createFileRoute("/dashboard/curriculum")({
  component: CurriculumComponent,
});

const CurriculumComponent = () => {
  return (
    <div className="px-3 w-full">
      <p className="text-paragraph font-medium font-inter text-sm lg:text-base">
        Course curriculum
      </p>
      <div className="w-full   bg-[#121212]  rounded-sm mt-5 py-2.5 px-3.5">
        <CurriculumTable />
        <MobileCurriculum />
      </div>
    </div>
  );
};
