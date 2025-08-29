import LimitationCard from "@/components/dashboard/LimitationCard";
import StatisticsCard from "@/components/dashboard/StatisticsCard";
import RecentTransactionsCard from "@/components/dashboard/RecentTransactionsCard";
import TotalSumDisplayCard from "@/components/dashboard/TotalSumDisplayCard";
import { totalCardsData } from "@/lib/const";
import { Fragment } from "react";

export default function Home() {
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
                    type={type}
                    badgeColor={badgeColor}
                  />
                </Fragment>
              );
            })}
          </div>
          <RecentTransactionsCard />
        </div>
        <div>
          <StatisticsCard />
        </div>
      </div>
    </div>
  );
}
