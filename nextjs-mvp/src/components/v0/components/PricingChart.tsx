/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9dF8kR1l9Yr
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function PricingChart() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-5xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Pricing</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Flexible Pricing for Every Need</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that fits your business best. No hidden fees, no surprises.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-background rounded-lg shadow-lg p-6 md:p-8 flex flex-col gap-4">
            <div>
              <h3 className="text-2xl font-bold">Basic</h3>
              <p className="text-muted-foreground">Perfect for individuals.</p>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold">$3</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                <span>Unlimited retrospectives</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                <span>Basic online support</span>
              </li>
            </ul>
            <Button size="lg">Try in browser</Button>
          </div>
          <div className="bg-background rounded-lg shadow-lg p-6 md:p-8 flex flex-col gap-4">
            <div>
              <h3 className="text-2xl font-bold">Pro</h3>
              <p className="text-muted-foreground">Ideal for teams.</p>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold">$7</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                <span>Per user based</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                <span>Unlimited retrospectives</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                <span>Collaboration space</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                <span>Auto-updated Runbooks</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                <span>Priority support</span>
              </li>
            </ul>
            <Button size="lg">Get Started</Button>
          </div>
          <div className="bg-background rounded-lg shadow-lg p-6 md:p-8 flex flex-col gap-4">
            <div>
              <h3 className="text-2xl font-bold">Custom</h3>
              <p className="text-muted-foreground">Talk to us</p>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold">$?</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                <span>Unlimited users</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                <span>Unlimited storage</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                <span>Enterprise-grade features</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                <span>Dedicated support</span>
              </li>
            </ul>
            <Button size="lg">Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}