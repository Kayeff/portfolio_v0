"use client";
import Left from "@/components/Left";
import Line from "@/components/Line";
import Right from "@/components/Right";

export default function Home() {
  return (
    <main className="w-full min-h-screen relative flex">
      <div className="w-full h-20 fixed top-0 left-0 bg-gradient-to-t from-transparent to-background z-10 pointer-events-none" />
      <Left />
      <Right />
      <Line />
      <div className="w-full h-20 fixed bottom-0 left-0 bg-gradient-to-b from-transparent to-background z-10 pointer-events-none" />
    </main>
  );
}
