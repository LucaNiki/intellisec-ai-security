import React from "react";

const nav = [
  { icon: "🛰️", label: "Dashboard", href: "/" },
  { icon: "🔍", label: "Scansioni AI", href: "/scan" },
  { icon: "🦾", label: "Threats", href: "/threats" },
  { icon: "🗒️", label: "Log", href: "/logs" }
];

export default function CyberpunkSidebar() {
  return (
    <aside className="bg-black bg-opacity-80 cyberpunk-card min-h-screen w-60 pt-10 flex flex-col items-center border-r-2 border-fuchsia-500">
      <img src="/logo.png" alt="IntelliSec Logo" width={55} className="mb-7 cyberpunk-glow" />
      <nav className="w-full">
        {nav.map(item => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 px-6 py-4 text-cyan-200 hover:bg-fuchsia-800 hover:text-white rounded transition-all font-mono tracking-widest"
          >
            <span className="text-2xl">{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}