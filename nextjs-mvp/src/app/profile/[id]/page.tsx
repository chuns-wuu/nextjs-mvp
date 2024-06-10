"use client";


import { useParams, useRouter } from "next/navigation";

export default function ProfileId() {
    const params = useParams();
    const router = useRouter();
    return (
      <div>
        <h1>ID page {params.id}</h1>
        <h1 onClick={() => router.push("/profile")}>Back to profile</h1>
      </div>
    )
}