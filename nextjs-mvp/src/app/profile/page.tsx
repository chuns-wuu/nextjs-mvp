"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div>
      Profile
      <h1 className="bg-green-600 text-white"> Existing profiles:</h1>
      <Link 
        scroll = {false}
        href = {{
          pathname: "/profile/1",
          query: {
            userName: "testUser",
            person: JSON.stringify({
              age: 18
            })
          }
        }}
      > 
      Profile #1 
      </Link>
      <Link href="/profile/2"> Profile #2 </Link>
      <Link href="/profile/3"> Profile #3 </Link>
    </div>
  )
}