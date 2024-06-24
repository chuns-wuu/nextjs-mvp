/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3wZQNCqli9L
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import MultiSelectBubble from "./components/MultiSelectBubble"
import { Progress } from "../ui/progress"
import SearchInput from "./components/SearchInput"

export default function ServiceForm() {
  return (
    <div className="flex flex-col items-center w-full">
      <Progress value={33} />
      <div className="flex flex-row items-center justify-between w-3/4 py-6 ">
        <p className="mx-auto md:text-xl"> You took an interesting approach. What was the underlying tech stack? </p>
        <Button type="submit" className="flex items-center gap-2">
            <span>Continue</span>
        </Button>
      </div>
      <div className="pt-10 flex flex-row justify-center items-start gap-8 w-full h-screen">
        <div>
          <Label htmlFor="incidentService">Select relevant technologies:</Label>
        </div>
        <SearchInput />
      </div>
    </div>
  )
}