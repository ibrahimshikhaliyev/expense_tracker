//SIDEBAR MENUS

import {
  LayoutDashboard,
  DollarSign,
  ArrowLeftRight,
  BanknoteArrowUpIcon,
  BanknoteArrowDownIcon,
  ChartColumn,
  HandCoinsIcon,
} from "lucide-react";

export const sidebarMenu = [
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    title: "Income",
    url: "#",
    icon: BanknoteArrowUpIcon,
  },
  {
    title: "Payments",
    url: "#",
    icon: DollarSign,
  },
  {
    title: "Tranactions",
    url: "#",
    icon: ArrowLeftRight,
  },
  {
    title: "Statistics",
    url: "#",
    icon: ChartColumn,
  },
];

//COLORS

export const mainBg = "#ecf4e9";
export const primaryColor = "#BCF49D";

//TOTAL CARD DATA

export const totalCardsData = [
  {
    title: "Total Income",
    type: "income",
    id: 1,
    icon: BanknoteArrowUpIcon,
    badgeColor: "",
  },
  {
    title: "Total Expense",
    type: "expense",
    id: 2,
    icon: BanknoteArrowDownIcon,
    badgeColor: "",
  },
  {
    title: "Total Savings",
    type: "savings",
    id: 3,
    icon: HandCoinsIcon,
    badgeColor: "",
  },
];

//month

export const months = [
  { id: 1, key: "january", value: "January" },
  { id: 2, key: "february", value: "February" },
  { id: 3, key: "march", value: "March" },
  { id: 4, key: "april", value: "April" },
  { id: 5, key: "may", value: "May" },
  { id: 6, key: "june", value: "June" },
  { id: 7, key: "july", value: "July" },
  { id: 8, key: "august", value: "August" },
  { id: 9, key: "september", value: "September" },
  { id: 10, key: "october", value: "October" },
  { id: 11, key: "november", value: "November" },
  { id: 12, key: "december", value: "December" },
];
