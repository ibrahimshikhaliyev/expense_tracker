export interface Category {
  id: string;
  name: string;
  key: string;
  type: "income" | "outcome";
  description: string;
  note: string;
  expenses: string[]; // array of expense IDs
}

export interface ExpenseItem {
  id: string;
  createdAt: number; // timestamp
  name: string;
  key: string;
  amount: number;
  type: "income" | "outcome"; // matches category type
  category: Category;
  description: string;
  note: string;
}

export type TotalCardType = "income" | "outcome" | "total";

export type TotalSumDisplayCardTypes = {
  icon?: React.ComponentType;
  title: string;
  id: number;
  type: TotalCardType;
  badgeColor?: string;
  amount: number;
};
