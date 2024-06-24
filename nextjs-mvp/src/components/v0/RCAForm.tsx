import { Button } from "../ui/button";
import { Progress } from "../ui/progress"
import QuestionCard from "./components/QuestionCard";

export default function RCAForm() {
  return (
    <div className="flex flex-col items-center w-full">
      <Progress value={100} />
      <div className="flex flex-row items-center justify-between w-3/4 py-6 ">
        <p className="mx-auto md:text-xl"> Finally, can you help me understand the root causes? </p>
        <Button type="submit" className="flex items-center gap-2">
            <span>Finish</span>
        </Button>
      </div>
      <QuestionCard />
    </div>
  )
}