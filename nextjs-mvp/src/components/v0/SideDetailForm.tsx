/**
 * v0 by Vercel.
 * @see https://v0.dev/t/s8dvqOWsBJl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"


export default function SideDetailForm({ showDetails }) {
  return (
    <div>
        {showDetails && (<Card className="w-full">
        <CardHeader>
          <CardTitle>New action</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Action title" />
          <Textarea placeholder="Did it work? What's the rationale?" className="min-h-[200px]" />
        </CardContent>
        <CardFooter>
          <Button className="ml-auto">Save action</Button>
        </CardFooter>
      </Card>)}
    </div>
  )
}