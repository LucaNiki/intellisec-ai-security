import React from "react";
import CyberpunkAlert from "./CyberpunkAlert";

export default function CyberpunkDashboard() {
  // Mock dati
  const summary = [
    { label: "Minacce rilevate", value: 4, color: "text-pink-400" },
    { label: "Eventi sospetti", value: 12, color: "text-yellow-300" },
    { label: "Log sistema", value: 37, color: "text-cyan-300" },
    { label: "Protezione AI", value: "ON", color: "text-green-400" }
  ];

  return (
    <section className="max-w-4xl mx-auto my-8">
      <CyberpunkAlert
        type="info"
        title="Stato Piattaforma"
        message="IntelliSec è attivo. Nessuna minaccia critica in corso."
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {summary.map(s => (
          <div key={s.label} className={`cyberpunk-card flex flex-col items-center py-5`}>
            <span className={`text-3xl font-bold ${s.color} cyberpunk-title`}>{s.value}</span>
            <span className="text-cyan-200 mt-2">{s.label}</span>
          </div>
        ))}
      </div>
      <div className="cyberpunk-card">
        <h3 className="cyberpunk-title mb-4">Ultimi Log di Sicurezza</h3>
        <pre className="bg-black bg-opacity-50 max-h-40 overflow-y-auto text-cyan-200 p-3 rounded border-cyan-800 border">
{`[23:13:03] [INFO] Connessione stabilita da 192.168.1.7
[23:13:10] [WARNING] Porta 8080: tentativo di accesso non autorizzato
[23:13:14] [ALERT] Malware pattern rilevato in memoria
[23:13:18] [INFO] Analisi AI completata: nessuna minaccia attiva`}
        </pre>
      </div>
    </section>
  );
}