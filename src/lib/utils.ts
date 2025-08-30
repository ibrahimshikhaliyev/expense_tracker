import { ExpenseItem, TotalCardType } from "@/types/expenses";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateTotalSum = (data: ExpenseItem[]) => {
  let income = 0;
  let outcome = 0;
  data.forEach((item) => {
    const { amount, type } = item;
    if (type === "income") {
      income += amount;
    } else {
      outcome += amount;
    }
  });
  return {
    income: Number(income.toFixed(2)),
    outcome: Number(outcome.toFixed(2)),
  };
};

export const getAmount = (
  income: number,
  outcome: number,
  type: TotalCardType
) => {
  switch (type) {
    case "income":
      return Number(income);
    case "outcome":
      return Number(outcome);
    default:
      return Number((income - outcome).toFixed(2));
  }
};
