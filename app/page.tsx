import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center bg-teal-600 min-h-screen items-center">
      <Link href="/contacts" className="rounded-lg border text-xl p-2 bg-white hover:bg-gray-100 text-teal-600">
        Get Started
      </Link>
    </div>
  );
}
