"use client";


import ProfileTile from "@/components/profile";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-zinc-900 flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl mb-10">Who’s watching?</h1>

      <ProfileTile
        name="Valentine?"
        image="/avatar.png"
        onClick={() => router.push("/valentine")}
      />
    </main>
  );
}
