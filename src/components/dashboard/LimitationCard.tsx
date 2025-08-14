import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Progress } from "../ui/progress";

const LimitationCard = ({ cardHeading = "Daily Limit" }) => {
  return (
    <Card className="w-full gap-2">
      <CardHeader>
        <p className="font-bold text-lg">{cardHeading}</p>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p className="text-sm">
          {" "}
          <span className="font-medium text-base">$500</span> spent of 1000$
        </p>
        <p>12.4%</p>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Progress value={60} />
      </CardFooter>
    </Card>
  );
};

export default LimitationCard;
