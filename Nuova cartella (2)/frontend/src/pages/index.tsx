import React from "react";
import CyberpunkDashboard from "../components/dashboard/CyberpunkDashboard";
import CyberpunkSidebar from "../components/dashboard/CyberpunkSidebar";

export default function HomePage() {
  return (
    <div className="flex">
      <CyberpunkSidebar />
      <main className="flex-1 min-h-screen p-10 bg-transparent">
        <CyberpunkDashboard />
      </main>
    </div>
  );
}