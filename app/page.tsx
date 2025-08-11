"use client";
import Left from "@/components/Left";
import Line from "@/components/Line";
import OverlayGradient from "@/components/OverlayGradient";
import Right from "@/components/Right";

export default function Home() {
  return (
    <main className="w-full min-h-screen relative flex">
      <OverlayGradient className="w-full h-20 bg-gradient-to-t top-0 left-0" />
      <Left />
      <Right />
      <Line />
      <OverlayGradient className="w-full h-20 bottom-0 left-0 bg-gradient-to-b" />
      <OverlayGradient className="h-screen w-20 top-0 right-0 bg-gradient-to-r" />
    </main>
  );
}
