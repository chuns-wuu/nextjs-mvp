/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Bj181u21Qyz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function NavBar() {
  return (
    <header className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <MountainIcon className="h-6 w-6" />
        <span className="text-lg font-semibold">echo X</span>
      </Link>
      <nav className="flex items-center space-x-12">
        <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
          Discord
        </Link>
        <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
          Pricing
        </Link>
        <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
          Book demo
        </Link>
      </nav>
      <div className="flex items-right space-x-6">
        <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Try it
          </Link>
        <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
          Log in
        </Link>
      </div>
      
    </header>
  )
}

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}