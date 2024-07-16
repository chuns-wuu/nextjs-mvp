/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7sZ3u0ps2DG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"

export default function FAQ() {
  return (
    <div className="space-y-4">
      <Collapsible className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <CollapsibleTrigger className="flex items-center justify-between px-6 py-4">
          <h3 className="text-lg font-medium">What is the refund policy?</h3>
          <div className="h-5 w-5 text-gray-500 transition-transform duration-300 group-[data-state=open]:rotate-180" />
        </CollapsibleTrigger>
        <CollapsibleContent className="px-6 pb-4 pt-0">
          <div className="prose text-gray-600 dark:text-gray-400">
            <p>
              xyz
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <CollapsibleTrigger className="flex items-center justify-between px-6 py-4">
          <h3 className="text-lg font-medium">How do I track my order?</h3>
          <div className="h-5 w-5 text-gray-500 transition-transform duration-300 group-[data-state=open]:rotate-180" />
        </CollapsibleTrigger>
        <CollapsibleContent className="px-6 pb-4 pt-0">
          <div className="prose text-gray-600 dark:text-gray-400">
            <p>
              xyz
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <CollapsibleTrigger className="flex items-center justify-between px-6 py-4">
          <h3 className="text-lg font-medium">What payment methods do you accept?</h3>
          <div className="h-5 w-5 text-gray-500 transition-transform duration-300 group-[data-state=open]:rotate-180" />
        </CollapsibleTrigger>
        <CollapsibleContent className="px-6 pb-4 pt-0">
          <div className="prose text-gray-600 dark:text-gray-400">
            <p>
              xyz
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <CollapsibleTrigger className="flex items-center justify-between px-6 py-4">
          <h3 className="text-lg font-medium">How long does shipping take?</h3>
          <div className="h-5 w-5 text-gray-500 transition-transform duration-300 group-[data-state=open]:rotate-180" />
        </CollapsibleTrigger>
        <CollapsibleContent className="px-6 pb-4 pt-0">
          <div className="prose text-gray-600 dark:text-gray-400">
            <p>
              xyz
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>

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