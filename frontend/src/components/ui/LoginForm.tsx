import React, { useState } from "react";

export default function LoginForm({ onLogin }: { onLogin?: (email: string) => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAlert(null);
    setTimeout(() => {
      setLoading(false);
      if (email === "admin@intellisec.ai" && password === "cyberpunk") {
        setAlert("Accesso consentito! 🚀");
        onLogin && onLogin(email);
      } else {
        setAlert("Credenziali errate. Riprova.");
      }
    }, 1200);
  };

  return (
    <form className="cyberpunk-card max-w-md mx-auto mt-20 p-10" onSubmit={handleSubmit}>
      <h2 className="cyberpunk-title text-2xl mb-7 tracking-widest text-center">
        LOGIN INTELLISEC
      </h2>
      <input
        type="email"
        className="cyberpunk-input w-full"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        autoFocus
      />
      <input
        type="password"
        className="cyberpunk-input w-full"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button
        className="cyberpunk-btn w-full text-lg"
        type="submit"
        disabled={loading}
      >
        {loading ? "Collegamento..." : "Entra"}
      </button>
      {alert && (
        <div className={`mt-4 text-center ${alert.includes("errate") ? "text-pink-400" : "text-green-400"}`}>
          {alert}
        </div>
      )}
    </form>
  );
}