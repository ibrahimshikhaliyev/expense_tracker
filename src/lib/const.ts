//API BASE URL
export const BASE_URL = "https://68b1ba9fa860fe41fd5f6900.mockapi.io";

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
    title: "Total Outcome",
    type: "outcome",
    id: 2,
    icon: BanknoteArrowDownIcon,
    badgeColor: "",
  },
  {
    title: "Balance",
    type: "balance",
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

export const recentTransactionsData = {
  headings: [
    { id: 5, heading: "№", key: "number", className: "w-[50px]" },
    { id: 1, heading: "Name", key: "name", className: "w-[100px]" },
    { id: 2, heading: "Type", key: "type", className: "" },
    { id: 3, heading: "Category", key: "category", className: "" },
    { id: 4, heading: "Amount", key: "amount", className: "text-right" },
  ],
  data: [
    {
      id: 1,
      details: {
        invoice: "INV001",
        status: "Paid",
        method: "Credit Card",
        amount: "250.00 AZN",
      },
    },
    {
      id: 2,
      details: {
        invoice: "INV002",
        status: "Pending",
        method: "Cash",
        amount: "120.00 AZN",
      },
    },
    {
      id: 3,
      details: {
        invoice: "INV003",
        status: "Paid",
        method: "Bank Transfer",
        amount: "540.00 AZN",
      },
    },
    {
      id: 4,
      details: {
        invoice: "INV004",
        status: "Overdue",
        method: "Credit Card",
        amount: "300.00 AZN",
      },
    },
    {
      id: 5,
      details: {
        invoice: "INV005",
        status: "Paid",
        method: "Cash",
        amount: "75.00 AZN",
      },
    },
    {
      id: 6,
      details: {
        invoice: "INV006",
        status: "Pending",
        method: "PayPal",
        amount: "450.00 AZN",
      },
    },
    {
      id: 7,
      details: {
        invoice: "INV007",
        status: "Paid",
        method: "Bank Transfer",
        amount: "999.00 AZN",
      },
    },
    {
      id: 8,
      details: {
        invoice: "INV008",
        status: "Overdue",
        method: "Credit Card",
        amount: "220.00 AZN",
      },
    },
    {
      id: 9,
      details: {
        invoice: "INV009",
        status: "Pending",
        method: "Cash",
        amount: "180.00 AZN",
      },
    },
    {
      id: 10,
      details: {
        invoice: "INV010",
        status: "Paid",
        method: "PayPal",
        amount: "620.00 AZN",
      },
    },
    {
      id: 11,
      details: {
        invoice: "INV011",
        status: "Pending",
        method: "Credit Card",
        amount: "135.00 AZN",
      },
    },
    {
      id: 12,
      details: {
        invoice: "INV012",
        status: "Paid",
        method: "Bank Transfer",
        amount: "760.00 AZN",
      },
    },
    {
      id: 13,
      details: {
        invoice: "INV013",
        status: "Overdue",
        method: "Cash",
        amount: "90.00 AZN",
      },
    },
    {
      id: 14,
      details: {
        invoice: "INV014",
        status: "Paid",
        method: "PayPal",
        amount: "1,200.00 AZN",
      },
    },
    {
      id: 15,
      details: {
        invoice: "INV015",
        status: "Pending",
        method: "Credit Card",
        amount: "410.00 AZN",
      },
    },
  ],
};
