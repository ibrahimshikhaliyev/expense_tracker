import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import CardHeaderText from "../common/CardHeaderText";
import { recentTransactionsData } from "@/lib/const";
import TablePagination from "../common/TablePagination";
import { Separator } from "../ui/separator";
import { ExpenseItem } from "@/types/expenses";
import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";
import { Badge } from "../ui/badge";
import { useState } from "react";

const RecentTransactionsCard = ({
  transactions,
}: {
  transactions: ExpenseItem[];
}) => {
  const { headings } = recentTransactionsData;
  const [take, setTake] = useState(10);
  const [offset, setOffset] = useState(0);

  return (
    <Card className="w-full gap-2">
      <CardHeader>
        <CardHeaderText heading={"Recent Transactions"} />
      </CardHeader>
      <CardContent className="flex flex-col justify-between gap-2">
        <Table>
          <TableHeader>
            <TableRow>
              {headings.map(({ id, heading, className }) => {
                return (
                  <TableHead key={id} className={className}>
                    {heading}
                  </TableHead>
                );
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.slice(offset, offset + take).map((transaction) => {
              const { id, name, category, type, amount } = transaction;
              return (
                <TableRow key={id}>
                  <TableCell>{id}</TableCell>
                  <TableCell className={"font-medium"}>{name}</TableCell>
                  <TableCell>
                    <Badge
                      className={`flex flex-row items-end gap-2 w-fit bg-[${
                        type === "income" ? "#BCF49D" : "#ecf4e9"
                      }]`}
                      variant={"outline"}
                    >
                      <div>{type}</div>
                      <div>
                        {type === "income" ? (
                          <GoArrowDownLeft />
                        ) : (
                          <GoArrowUpRight />
                        )}{" "}
                      </div>
                    </Badge>
                  </TableCell>
                  <TableCell>{category.name}</TableCell>
                  <TableCell className="text-right">{amount} ₼</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
      <Separator />
      <CardFooter>
        <TablePagination
          setOffset={setOffset}
          setTake={setTake}
          offset={offset}
          take={take}
          totalLength={transactions.length}
        />
      </CardFooter>
    </Card>
  );
};

export default RecentTransactionsCard;
