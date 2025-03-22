import CurriculumTable from "@/components/Tables/CurriculumTable";
import { createFileRoute } from "@tanstack/react-router";
import "../../routes/programmes/programmes.css";
import folder from "../../assets/image/folder.svg";
export const Route = createFileRoute("/dashboard/curriculum")({
  component: CurriculumComponent,
});

const CurriculumComponent = () => {
  const data = false;
  return (
    <div className="lg:px-3 w-full">
      <p className="text-paragraph font-medium font-inter text-sm lg:text-base">
        Course curriculum
      </p>
      <div className="px-2 w-full   bg-[#121212]  rounded-sm mt-5 py-2.5 lg:px-3.5">
        {data ? (
          <CurriculumTable />
        ) : (
          <div className="flex flex-col justify-center items-center py-15 gap-4 ">
            {" "}
            <img src={folder} alt="folder" />
            <span className="flex flex-col items-center font-inter gap-1.5 tracking-wide">
              <p className="font-medium text-xs lg:text-base">No curriculum available yet.</p>
              <p className="font-light text-[10px] text-sm">
                {" "}
                This course’s curriculum hasn’t been added yet. Check back
                later!
              </p>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
