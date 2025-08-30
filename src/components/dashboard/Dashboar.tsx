"use client";
import LimitationCard from "@/components/dashboard/LimitationCard";
import StatisticsCard from "@/components/dashboard/StatisticsCard";
import RecentTransactionsCard from "@/components/dashboard/RecentTransactionsCard";
import TotalSumDisplayCard from "@/components/dashboard/TotalSumDisplayCard";
import { totalCardsData } from "@/lib/const";
import { Fragment } from "react";
import { fetcher } from "@/api/expenses";
import { calculateTotalSum, getAmount } from "@/lib/utils";
import { ExpenseItem, TotalCardType } from "@/types/expenses";

import useSWR from "swr";

const Dashboard = ({ initialData }: { initialData: ExpenseItem[] }) => {
  const { data } = useSWR("/expenses", fetcher, {
    fallbackData: initialData,
    refreshInterval: 5000,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
  });

  const { income, outcome } = calculateTotalSum(data);

  return (
    <div>
      <div className="grid grid-cols-[1.5fr_3fr_1.5fr] gap-4 p-8">
        <div className="flex flex-col gap-4">
          <LimitationCard />
          <LimitationCard cardHeading={"Monthly Limit"} />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">
            {totalCardsData.map((total) => {
              const { title, id, type, badgeColor } = total;
              return (
                <Fragment key={id}>
                  <TotalSumDisplayCard
                    title={title}
                    id={id}
                    type={type as TotalCardType}
                    badgeColor={badgeColor}
                    amount={getAmount(income, outcome, type as TotalCardType)}
                  />
                </Fragment>
              );
            })}
          </div>
          <RecentTransactionsCard transactions={data} />
        </div>
        <div>
          <StatisticsCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
