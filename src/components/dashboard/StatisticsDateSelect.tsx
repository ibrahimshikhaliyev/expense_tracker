import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { months } from "@/lib/const";

const StaticsDateSelect = () => {
  return (
    <Select>
      <SelectTrigger className="h-[8px]">
        <SelectValue placeholder="Month" className="h-[8px]" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {months.map((month) => {
            const { key, value } = month;
            return (
              <SelectItem value={value} key={key}>
                {value}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default StaticsDateSelect;
