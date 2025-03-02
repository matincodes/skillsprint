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
  return (
    <Table  className="text-paragraph font-medium text-base font-inter  bg-[#121212] rounded-sm mt-5 ">
      <TableHeader>
        <TableRow className="!border-b-2 border-black ">
          <TableHead className="w-[40px]"></TableHead>
          <TableHead className="">Period</TableHead>
          <TableHead>Topic</TableHead>
          <TableHead>Instructor</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      {curriculumData.map((items, index) => (
        <TableBody key={index}>
          <TableRow className="h-[70px] ">
            <TableCell>
              {" "}
              <img src={arrowDown} alt="arrow" className="cursor-pointer" />
            </TableCell>
            <TableCell>
              <span className="flex items-center gap-1.5">
                <FolderOpen fill="#868C98" />
                week {items.period}
              </span>
            </TableCell>
            <TableCell>{items.topic}</TableCell>
            <TableCell>
              <span className="flex items-center">
                <img src={avatar} />
                {items.instructor}
              </span>
            </TableCell>
            <TableCell
              className={`${items.status === "Completed" ? "text-[#0950C3]" : "text-[#C28B0A]"}`}
            >
              <span className="flex items-center">
                <CircleSmall
                  fill={`${items.status === "Completed" ? "#0950C3" : "#C28B0A"}`}
                />

                {items.status}
              </span>
            </TableCell>
            <TableCell>
              <Ellipsis className="cursor-pointer" fill="#868C98" />
            </TableCell>
          </TableRow>
        </TableBody>
      ))}
      <TableFooter>
        <TableRow className="border-t-2 border-black">
          <TableCell></TableCell>
          <TableCell>Period</TableCell>
          <TableCell>Topic</TableCell>
          <TableCell>Instructor</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

export default CurriculumTable;
