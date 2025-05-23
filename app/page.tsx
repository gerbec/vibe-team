"use client";
import Header from "@/components/Header";
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-start mx-auto gap-4 py-8 px-4 max-w-prose">
        Hello Thinkers!
      </main>
    </>
  );
}
