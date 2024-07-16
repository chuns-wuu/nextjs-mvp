"use client";

import ResultPage from "@/components/v0/ResultPage";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Profile() {
  // const router = useRouter();
  // return (
  //   <div>
  //     Profile
  //     <h1 className="bg-green-600 text-white"> Existing profiles:</h1>
  //     <Link 
  //       scroll = {false}
  //       href = {{
  //         pathname: "/profile/1",
  //         query: {
  //           userName: "testUser",
  //           person: JSON.stringify({
  //             age: 18
  //           })
  //         }
  //       }}
  //     > 
  //     Profile #1 
  //     </Link>
  //     <Link href="/profile/2"> Profile #2 </Link>
  //     <Link href="/profile/3"> Profile #3 </Link>
  //   </div>
  // )
  return (
    <div className="items-center justify-center flex flex-col">
      <div className="w-3/4">
        <ResultPage />
      </div>
    </div>
  )
}