import React from "react";

const Logo: React.FC = () => (
  <img
    src="/logo.png"
    alt="IntelliSec Logo"
    style={{ height: 80, width: 80, filter: 'drop-shadow(0 0 16px #0ff)' }}
    className="rounded-full cyberpunk-glow"
  />
);

export default Logo;