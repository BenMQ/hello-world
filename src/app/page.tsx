import Chat from "@/components/chat";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="relative flex h-[calc(100vh_-_theme(spacing.16))] overflow-hidden pb-10 flex-row">
      <Sidebar />
      <div className="flex-1 h-full">
        <Chat />
      </div>
    </div>
  );
}
