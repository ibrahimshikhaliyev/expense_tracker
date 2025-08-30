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

type TablePaginationProps = {
  take: number;
  offset: number;
  setTake: React.Dispatch<React.SetStateAction<number>>;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  totalLength: number;
};

const TablePagination: React.FC<TablePaginationProps> = ({
  setTake,
  setOffset,
  take,
  offset,
  totalLength,
}) => {
  const onNext = () => {
    setOffset(offset + take);
  };
  const onPrev = () => {
    setOffset(offset - take);
  };

  const onToLast = () => {
    setOffset(Number((totalLength / take).toFixed()) * take);
  };

  return (
    <div className="w-[100%] flex flex-row justify-between items-center">
      <div className="flex flex-row items-center gap-2">
        <p className="text-sm">rows per page: </p>
        <Select
          defaultValue={String(take)}
          onValueChange={(val) => {
            setTake(parseInt(val));
          }}
        >
          <SelectTrigger size="sm">
            <SelectValue placeholder="Count" className="h-[8px]" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {[5, 10, 15, 20, 25].map((item) => {
                return (
                  <SelectItem value={String(item)} key={item}>
                    {item}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="text-sm">
        Page {Number((offset / take).toFixed()) + 1} of{" "}
        {Number((totalLength / take).toFixed()) + 1}{" "}
      </div>
      <div className="flex flex-row gap-2">
        <Button className="cursor-pointer" size={"sm"} variant={"outline"}>
          <MdOutlineKeyboardDoubleArrowLeft />
        </Button>
        <Button
          className="cursor-pointer"
          size={"sm"}
          variant={"outline"}
          onClick={onPrev}
        >
          <MdOutlineKeyboardArrowLeft />
        </Button>
        <Button
          className="cursor-pointer"
          size={"sm"}
          variant={"outline"}
          onClick={onNext}
        >
          <MdOutlineKeyboardArrowRight />
        </Button>
        <Button
          className="cursor-pointer"
          size={"sm"}
          variant={"outline"}
          onClick={onToLast}
        >
          <MdOutlineKeyboardDoubleArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default TablePagination;
