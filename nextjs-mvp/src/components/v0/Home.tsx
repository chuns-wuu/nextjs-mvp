/**
 * v0 by Vercel.
 * @see https://v0.dev/t/O4P4KNUxIlk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function HomePage() {
  return (
    <section className="flex items-center justify-center">
      <div className="container mx-auto text-center h-full">
        <div className="space-y-6">
          <h1 className="text-3xl lg:pt-56 pt-10 font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Create Post-Incident Rituals
          </h1>
          <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
            Your knowledge is meant to be shared and learned from.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              prefetch={false}
            >
              Try it in browser
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              prefetch={false}
            >
              Book a demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}