"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    router.push("/discover");
  }, []);

  return (
    <main className="flex flex-col justify-between items-center bg-black w-full h-full min-h-[calc(100vh-98px)]">
      Coming Soon
    </main>
  );
}
