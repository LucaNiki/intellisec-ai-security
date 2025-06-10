import React from "react";

interface CyberpunkAlertProps {
  type?: "info" | "success" | "error" | "warning";
  title?: string;
  message: string;
}

const colorMap = {
  info: "border-cyan-400 text-cyan-200",
  success: "border-green-400 text-green-200",
  error: "border-pink-400 text-pink-200",
  warning: "border-yellow-400 text-yellow-200"
};

export default function CyberpunkAlert({ type = "info", title, message }: CyberpunkAlertProps) {
  return (
    <div className={`cyberpunk-card border-2 ${colorMap[type]} mb-4 animate-pulse`}>
      {title && <div className="text-lg font-bold">{title}</div>}
      <div>{message}</div>
    </div>
  );
}