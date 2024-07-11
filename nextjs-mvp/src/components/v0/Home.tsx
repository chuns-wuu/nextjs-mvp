/**
 * v0 by Vercel.
 * @see https://v0.dev/t/O4P4KNUxIlk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { motion } from 'framer-motion';
import Photo from "@/components/Photo"
import LogoScroll from "@/components/v0/components/LogoScroll";
import FAQ from "./FAQ";
import DemoAnimation from "./components/DemoAnimation";
import Image from "next/image";
import Testimonial from "./components/Testimonial";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="container mx-auto text-center h-full">
        <div className="space-y-2">
          <h1 className="gradient-text text-3xl lg:pt-36 font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Write less. Code more.
          </h1>
          <p className="p-3 mx-auto text-gray-500 md:text-xl dark:text-gray-400">
          Joe makes coffee with the time he saved, what would you do?
          </p>
          <div className="flex flex-col gap-8 sm:flex-row sm:justify-center">
            <Link
              href="/new/0"
              //className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              prefetch={false}
            >
              Try in browser
            </Link>
            <Link
              href="#"
              //className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              prefetch={false}
            >
              Book a demo
            </Link>
            
          </div>
        </div>
      </div>
      <div className="gap-8 pt-64 flex flex-row items-center justify-center">
        <p className="w-1/5 text-gray-500 md:text-md dark:text-gray-400 p-4">
          Trusted by developers from:
        </p>
        <LogoScroll />
      </div>
      <div className="space-y-6 items-center justify-center flex flex-col">
        <h1 className="text-3xl lg:pt-56 pt-10 font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What developers are saying
        </h1>
        <p className="mx-auto text-gray-500 md:text-xl dark:text-gray-400">
          Try our browser retrospective tool and save time today
        </p>
        <Testimonial />
      </div>
      <div className="space-y-6 items-center justify-center flex flex-col">
        <h1 className="text-3xl lg:pt-56 pt-10 font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Incident retrospectives, simplified.
        </h1>
        <p className="mx-auto text-gray-500 md:text-xl dark:text-gray-400">
            Don&#39;t start from scratch. Use our retrospective boilerplates instead.
        </p>
        <DemoAnimation />
      </div>
      <div className="space-y-6 items-center justify-center flex flex-col">
        <h1 className="text-3xl lg:pt-56 pt-10 font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Auto-update incident runbooks
        </h1>
        <p className="mx-auto text-gray-500 md:text-xl dark:text-gray-400">
            We make sure runbooks are up-to-date for your critical incidents.
        </p>
        <p className="mx-auto text-gray-500 md:text-xl dark:text-gray-400">
            *Early birds feature*
        </p>
        <Link
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
          prefetch={false}
        >
          Join the waitlist
        </Link>
        <DemoAnimation />
      </div>

      {/* <FAQ /> */}
    </section>
  )
}