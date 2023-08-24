import Sidebar from "@/components/sidebar";
import TopNav from "@/components/top-nav";

export default function Home() {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />

      <div className="w-full">
        <TopNav />
      </div>
    </div>
  );
}
