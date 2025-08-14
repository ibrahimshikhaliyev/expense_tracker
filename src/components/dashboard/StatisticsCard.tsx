import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import StaticsDateSelect from "./StatisticsDateSelect";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ChartPieDonutText } from "../ui/donut-chart";

const StatisticsCard = () => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle>Statistics</CardTitle>
        <StaticsDateSelect />
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="income" className="w-64">
          <TabsList className="w-64">
            <TabsTrigger value="income" className=" cursor-pointer">
              Income
            </TabsTrigger>
            <TabsTrigger value="expenses" className=" cursor-pointer">
              Expenses
            </TabsTrigger>
          </TabsList>
          <TabsContent value="income">
            <ChartPieDonutText />
          </TabsContent>
          <TabsContent value="expenses">
            <ChartPieDonutText />
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex-col gap-2"></CardFooter>
    </Card>
  );
};

export default StatisticsCard;
