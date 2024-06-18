/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7sZ3u0ps2DG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"

export default function FAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Get answers to the most common questions about our product.
          </p>
        </div>
        <div className="mt-12 space-y-4 max-w-2xl mx-auto">
          <Collapsible className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left [&[data-state=open]>svg]:rotate-90">
              <h3 className="text-lg font-medium max-w-[80%]">What is the pricing structure for your product?</h3>
              <ChevronRightIcon className="h-5 w-5 transition-all" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-6 pb-4 pt-2 text-gray-500 dark:text-gray-400">
              <p>
                Our pricing is based on the number of users and the features you need. We offer a range of plans to fit
                your budget and requirements. You can check our pricing page for more details.
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left [&[data-state=open]>svg]:rotate-90">
              <h3 className="text-lg font-medium max-w-[80%]">How long does it take to set up your product?</h3>
              <ChevronRightIcon className="h-5 w-5 transition-all" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-6 pb-4 pt-2 text-gray-500 dark:text-gray-400">
              <p>
                The setup process is quick and easy. Most customers can get up and running in just a few minutes. We
                provide detailed documentation and support to guide you through the process.
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left [&[data-state=open]>svg]:rotate-90">
              <h3 className="text-lg font-medium max-w-[80%]">What kind of support do you offer?</h3>
              <ChevronRightIcon className="h-5 w-5 transition-all" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-6 pb-4 pt-2 text-gray-500 dark:text-gray-400">
              <p>
                We offer a range of support options, including email, chat, and phone support. Our team of experts is
                available to help you with any questions or issues you may have. We also have a comprehensive knowledge
                base and community forums.
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left [&[data-state=open]>svg]:rotate-90">
              <h3 className="text-lg font-medium max-w-[80%]">Do you offer any integrations or customizations?</h3>
              <ChevronRightIcon className="h-5 w-5 transition-all" />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-6 pb-4 pt-2 text-gray-500 dark:text-gray-400">
              <p>
                Yes, we offer a range of integrations with popular tools and platforms. We also provide custom
                development services to help you tailor our product to your specific needs.
              </p>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  )
}

function ChevronRightIcon(props: any) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}