import {
  Table,
  TableBody,
  TableCaption,
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

const RecentTransactionsCard = () => {
  const { headings, data } = recentTransactionsData;
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
            {data.map(({ id, details }) => {
              const { invoice, status, method, amount } = details;
              return (
                <TableRow key={id}>
                  <TableCell>{id}</TableCell>
                  <TableCell className={"font-medium"}>{invoice}</TableCell>
                  <TableCell>{status}</TableCell>
                  <TableCell>{method}</TableCell>
                  <TableCell className="text-right">{amount}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
      <Separator />
      <CardFooter>
        <TablePagination />
      </CardFooter>
    </Card>
  );
};

export default RecentTransactionsCard;
