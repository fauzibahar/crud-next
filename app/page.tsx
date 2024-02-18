"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex justify-center bg-teal-600 min-h-screen items-center">
      <button
        type="button"
        className="rounded-lg border text-xl p-2 bg-white hover:drop-shadow-2xl text-teal-600"
        onClick={() => router.push("/contacts")}
      >
        Get Started
      </button>
    </div>
  );
}
