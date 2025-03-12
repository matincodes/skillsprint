import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import arrowDown from "../../assets/icons/arrowDown.svg";
import avatar from "../../assets/image/curriculumAvatar.svg";
import curriculumData from "@/data/curriculumData";
import { FolderOpen, CircleSmall, Ellipsis } from "lucide-react";

export function CurriculumTable() {
  const completed = "text-[#0950C3] bg-[#020E22]";
  const inComplete = "text-[#C28B0A] bg-[#181101]";

  return (
    <Table className="text-paragraph font-medium text-[12px] lg:text-base font-inter   bg-[#121212] rounded-sm mt-5 ">
      <TableHeader>
        <TableRow className="!border-b-2 border-black h-[50px]">
          <TableHead className="text-center ">Period</TableHead>
          <TableHead className="px-6  ">Topic</TableHead>
          <TableHead className="pr-6 md:px-0">Instructor</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      {curriculumData.map((items, index) => (
        <TableBody key={index}>
          <TableRow className="h-[70px]">
            <TableCell className="px-5 ">
              <div className="flex items-center gap-3.5">
                <img src={arrowDown} alt="arrow" className="cursor-pointer " />
                <FolderOpen width={30} className="" fill="#868C98" />
                week {items.period}
              </div>
            </TableCell>
            <TableCell
              dangerouslySetInnerHTML={{
                __html: items.topic.replace(
                  /(.*)\s+(\S+)$/,
                  '$1<span class="inline lg:hidden"><br/></span>$2'
                ),
              }}
              className="px-6  "
            ></TableCell>
            <TableCell>
              <span className="flex items-center gap-1.5 pr-6 ">
                <img src={avatar} />
                {items.instructor}
              </span>
            </TableCell>
            <TableCell>
              <div
                className={`${items.status === "Completed" ? completed : inComplete} w-auto lg:w-[120px] flex items-center gap-1  px-1.5 rounded-full`}
              >
                <CircleSmall
                  height={19}
                  fill={`${items.status === "Completed" ? "#0950C3" : "#C28B0A"}`}
                  className="rounded-sm"
                />

                {items.status}
              </div>
            </TableCell>
            <TableCell className="pr-3">
              <Ellipsis width={20} className="cursor-pointer " fill="#868C98" />
            </TableCell>
          </TableRow>
        </TableBody>
      ))}
      <TableFooter>
        <TableRow className="border-t-2 border-black">
          <TableCell className="text-center">Period</TableCell>
          <TableCell className="px-6 ">Topic</TableCell>
          <TableCell>Instructor</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

export default CurriculumTable;
