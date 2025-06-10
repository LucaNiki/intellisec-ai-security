import React from "react";
export default function CyberpunkLoader() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <img src="/logo.png" alt="Logo" width={72} className="mb-4 cyberpunk-glow animate-spin-slow" />
      <span className="text-fuchsia-400 text-lg font-mono">Caricamento cyberpunk...</span>
    </div>
  );
}