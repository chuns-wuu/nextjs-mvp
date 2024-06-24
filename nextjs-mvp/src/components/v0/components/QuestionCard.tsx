/**
 * v0 by Vercel.
 * @see https://v0.dev/t/h9ezeQfRIWW
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import SearchInput from "./SearchInput"
import { Input } from "@/components/ui/input"

export default function QuestionCard() {
  return (
    <div>
      {/* <Card className="w-full max-w-md">
        <CardHeader className="flex flex-row justify-between">
        <Button variant="outline">Prev</Button>
          <CardTitle>Question 1/6</CardTitle>
          <Button variant="outline">Next</Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg font-medium">Which layers caused the incident?</p>
          <SearchInput />
        </CardContent>
      </Card> */}
      {/* <Card className="w-full max-w-md">
        <CardHeader className="flex flex-row justify-between">
        <Button variant="outline">Prev</Button>
          <CardTitle>Question 2/6</CardTitle>
          <Button variant="outline">Next</Button>
        </CardHeader>
        <CardContent className="space-y-4 ">
          <p className="text-lg font-medium">What was the impact?</p>
          <div className="flex flex-row justify-between items-center gap-6">
            <Input placeholder="Who"/> couldn't <Input placeholder="What"/> for <Input placeholder="How long"/>
          </div>
        </CardContent>
      </Card> */}
      {/* <Card className="w-full max-w-md">
        <CardHeader className="flex flex-row justify-between">
        <Button variant="outline">Prev</Button>
          <CardTitle>Question 3/6</CardTitle>
          <Button variant="outline">Next</Button>
        </CardHeader>
        <CardContent className="space-y-4 ">
          <p className="text-lg font-medium">Was it caught by QA or tests?</p>
          <div className="flex flex-row justify-between items-center gap-6">
            <Button>Missing or buggy test</Button>
            <Button>Yes, it was caught</Button>
          </div>
        </CardContent>
      </Card> */}
      {/* <Card className="w-full max-w-md">
        <CardHeader className="flex flex-row justify-between">
        <Button variant="outline">Prev</Button>
          <CardTitle>Question 4/6</CardTitle>
          <Button variant="outline">Next</Button>
        </CardHeader>
        <CardContent className="space-y-4 ">
          <p className="text-lg font-medium">What conditions triggered the incident this time?</p>
          <div className="flex flex-row justify-between items-center gap-6">
          <SearchInput />
          </div>
        </CardContent>
      </Card> */}
      {/* <Card className="w-full max-w-md">
        <CardHeader className="flex flex-row justify-between">
        <Button variant="outline">Prev</Button>
          <CardTitle>Question 5/6</CardTitle>
          <Button variant="outline">Next</Button>
        </CardHeader>
        <CardContent className="space-y-4 ">
          <p className="text-lg font-medium">What were the root causes in your own words?</p>
          <div className="flex flex-row justify-between items-center gap-6">
          <SearchInput />
          </div>
        </CardContent>
      </Card> */}
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-row justify-between">
        <Button variant="outline">Prev</Button>
          <CardTitle>Question 6/6</CardTitle>
          <Button variant="outline">Next</Button>
        </CardHeader>
        <CardContent className="space-y-4 ">
          <p className="text-lg font-medium">What writing template do you prefer?</p>
          <div className="flex flex-row justify-between items-center gap-6">
            <Button>Atlanssian</Button>
            <Button>Technical</Button>
          </div>
        </CardContent>
      </Card>
    </div>
    
  )
}
