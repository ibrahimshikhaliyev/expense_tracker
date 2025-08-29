import React from "react";
import { Button } from "../ui/button";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { months } from "@/lib/const";

const TablePagination = () => {
  return (
    <div className="w-[100%] flex flex-row justify-between items-center">
      <div className="flex flex-row items-center gap-2">
        <p className="text-sm">rows per page: </p>
        <Select>
          <SelectTrigger size="sm">
            <SelectValue placeholder="Month" className="h-[8px]" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {[10, 15, 20, 25].map((item) => {
                return (
                  <SelectItem value={item} key={item}>
                    {item}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="text-sm">Page 1 of 7 </div>
      <div className="flex flex-row gap-2">
        <Button className="cursor-pointer" size={"sm"} variant={"outline"}>
          <MdOutlineKeyboardDoubleArrowLeft />
        </Button>
        <Button className="cursor-pointer" size={"sm"} variant={"outline"}>
          <MdOutlineKeyboardArrowLeft />
        </Button>
        <Button className="cursor-pointer" size={"sm"} variant={"outline"}>
          <MdOutlineKeyboardArrowRight />
        </Button>
        <Button className="cursor-pointer" size={"sm"} variant={"outline"}>
          <MdOutlineKeyboardDoubleArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default TablePagination;
