"use client";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div>
      Profile
      <h1> Existing profiles:</h1>
      <li onClick={() => router.push("/profile/1")}> Profile #1</li>
      <li onClick={() => router.push("/profile/2")}> Profile #2</li>
      <li onClick={() => router.push("/profile/3")}> Profile #3</li>
    </div>
  )
}