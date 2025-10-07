"use client";
import Left from "@/components/Left";
import OverlayGradient from "@/components/OverlayGradient";
import Right from "@/components/Right";

export default function Home() {
  return (
    <main className="w-full min-h-screen relative flex flex-col lg:flex-row gap-10 max-lg:p-5 lg:p-10 lg:py-20">
      <OverlayGradient className="w-full h-20 bg-gradient-to-t top-0 left-0 hidden lg:block" />
      <Left />
      <Right />
      <OverlayGradient className="w-full h-20 bottom-0 left-0 bg-gradient-to-b" />
    </main>
  );
}
