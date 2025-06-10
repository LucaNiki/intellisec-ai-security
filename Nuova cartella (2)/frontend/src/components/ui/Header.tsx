import React from "react";
import Logo from "./Logo";

const Header: React.FC = () => (
  <header className="flex items-center gap-4 cyberpunk-header p-4 shadow">
    <Logo />
    <div>
      <h1 className="text-3xl font-bold cyberpunk-title">IntelliSec</h1>
      <span className="text-md font-mono text-cyan-400 tracking-widest">
        CYBERPUNK AI Security Platform
      </span>
    </div>
  </header>
);

export default Header;