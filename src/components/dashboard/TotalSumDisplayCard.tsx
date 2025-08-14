import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

import { Badge } from "../ui/badge";
import { TotalSumDisplayCardTypes } from "@/types/TotalSumDisplayCardTypes";
import { BanknoteArrowUpIcon } from "lucide-react";

const TotalSumDisplayCard = ({
  title,
  badgeColor,
  id,
  type,
}: TotalSumDisplayCardTypes) => {
  return (
    <Card className="w-full gap-2">
      <CardHeader>
        <div
          className={`bg-[#ecf4e9] w-8 h-8 rounded-md flex justify-center items-center`}
        >
          <BanknoteArrowUpIcon />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col justify-between gap-2">
        <Badge variant="secondary" className="bg-[#BCF49D] h-4 text-xs">
          +17.2%
        </Badge>
        <div>
          <p className="text-xl font-bold">$78.000</p>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-sm">{title}</p>
      </CardFooter>
    </Card>
  );
};

export default TotalSumDisplayCard;
