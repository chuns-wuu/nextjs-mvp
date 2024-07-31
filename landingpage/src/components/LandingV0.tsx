/**
 * v0 by Vercel.
 * @see https://v0.dev/t/o7POhwBpeQV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Animation from "@/components/animation";

export default function Landing() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-8 px-4 md:grid-cols-2 md:px-6 lg:gap-16">
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Streamline Your Workflow with Our All-in-One Solution
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Simplify your business operations and boost productivity with our powerful platform.
            </p>
          </div>
          <form className="flex gap-2">
            <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
            <Button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Get Started
            </Button>
          </form>
        </div>
        <div className="flex justify-center">
          <Animation />
        </div>
      </div>
    </section>
  )
}
