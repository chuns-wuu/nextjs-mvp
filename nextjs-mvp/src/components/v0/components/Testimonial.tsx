/**
 * v0 by Vercel.
 * @see https://v0.dev/t/N3m7UnzKT2N
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Testimonial() {
  return (
    <Card className="w-full max-w-md p-6 grid gap-6">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-lg font-medium">Jane Doe</p>
          <p className="text-sm text-muted-foreground">CEO, Acme Inc</p>
        </div>
      </div>
      <blockquote className="text-lg leading-relaxed">
        &ldquo;The customer service I received was exceptional. The support team went above and beyond to address my
        concerns.&rdquo;
      </blockquote>
    </Card>
  )
}