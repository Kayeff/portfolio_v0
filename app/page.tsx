import Left from "@/components/sidebar/Left";
import OverlayGradient from "@/components/common/OverlayGradient";
import Right from "@/components/main/Right";

export default function Home() {
  return (
    <main className="w-full min-h-screen relative flex flex-col lg:flex-row gap-10 max-lg:p-5 lg:p-10 lg:py-20 font-mono">
      <OverlayGradient className="w-full h-20 bg-gradient-to-t top-0 left-0 hidden lg:block will-change-transform" />
      <Left />
      <Right />
      <OverlayGradient className="w-full h-20 bottom-0 left-0 bg-gradient-to-b will-change-transform" />
    </main>
  );
}
