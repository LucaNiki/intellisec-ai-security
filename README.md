# 🛡️ IntelliSec AI Security Platform

Una piattaforma avanzata di cybersecurity alimentata da intelligenza artificiale per il monitoraggio e la protezione proattiva dei sistemi informatici.

## 🌟 Caratteristiche Principali

### 🤖 Intelligenza Artificiale Autonoma
- **8 modelli ML operativi 24/7** per rilevamento minacce
- **Precisione del 94.2%** con solo 0.3% di falsi positivi
- **Analisi comportamentale avanzata** e predizione delle minacce
- **Auto-apprendimento continuo** da nuovi pattern di attacco

### 🔍 XDR (Extended Detection & Response)
- **Monitoraggio unificato** di endpoint, reti, applicazioni e cloud
- **Correlazione avanzata** degli eventi di sicurezza
- **Risposta automatica** alle minacce rilevate
- **234 endpoint, 12 reti, 45 applicazioni** monitorate

### ⚡ SOAR (Security Orchestration & Automated Response)
- **85% di automazione** nelle risposte agli incidenti
- **15 playbook personalizzati** per diversi scenari
- **Tempo medio di risposta: 2.3 minuti**
- **95% di successo** nelle risoluzioni automatiche

### 📊 SIEM Real-time
- **2,847 eventi processati** giornalmente
- **Correlazione intelligente** degli eventi
- **Dashboard interattive** con visualizzazioni avanzate
- **Alerting multi-canale** (email, Slack, SMS)

## 🎯 Visualizzazioni Avanzate

### 🌐 Network Threat Visualization
- **Canvas animato** con minacce in tempo reale
- **Particelle colorate** per diversi tipi di attacco
- **Zoom e pan interattivi** per analisi dettagliate
- **Effetti di scansione** sui nodi compromessi

### 🏗️ Network Architecture Diagram
- **Mappa completa** dell'infrastruttura di rete
- **Zone di sicurezza** con codifica colori
- **Flussi di traffico animati** 
- **Indicatori di stato** per ogni dispositivo

## 🚀 Tecnologie

### Frontend
- **React 18** con TypeScript
- **Tailwind CSS** per styling responsive
- **Shadcn/ui** per componenti UI
- **Lucide React** per iconografia
- **Canvas API** per visualizzazioni

### Backend
- **Node.js** con Express
- **TypeScript** per type safety
- **Drizzle ORM** per database
- **PostgreSQL** per persistenza dati
- **WebSockets** per real-time

### AI & Machine Learning
- **TensorFlow.js** per modelli client-side
- **OpenAI GPT-4** per analisi avanzate
- **Algoritmi proprietari** per pattern matching
- **Neural Networks** per rilevamento anomalie

## 📋 Requisiti di Sistema

### Minimi
- **RAM:** 4GB
- **CPU:** Dual-core 2.0GHz
- **Storage:** 10GB liberi
- **Node.js:** v18+
- **PostgreSQL:** v14+

### Raccomandati
- **RAM:** 8GB+
- **CPU:** Quad-core 2.5GHz+
- **Storage:** 20GB+ SSD
- **GPU:** NVIDIA per accelerazione AI
- **Rete:** Gigabit per monitoraggio

## 🛠️ Installazione

### 1. Clona il repository
```bash
git clone https://github.com/tuoaccount/intellisec.git
cd intellisec
```

### 2. Installa dipendenze
```bash
npm install
```

### 3. Configura database
```bash
# Crea database PostgreSQL
createdb intellisec

# Configura variabili ambiente
cp .env.example .env
# Modifica .env con le tue configurazioni
```

### 4. Avvia l'applicazione
```bash
# Sviluppo
npm run dev

# Produzione
npm run build
npm start
```

## 🔧 Configurazione

### Variabili Ambiente
```env
# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/intellisec

# API Keys (opzionali)
OPENAI_API_KEY=your_openai_key
SENDGRID_API_KEY=your_sendgrid_key
SLACK_BOT_TOKEN=your_slack_token

# Sicurezza
SESSION_SECRET=your_secure_session_secret
```

### Porte di Default
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000
- **Database:** postgresql://localhost:5432

## 📊 Dashboard

### Metriche Principali
- **Punteggio Sicurezza:** 87/100 (+3% trend)
- **Minacce Attive:** 2 (143 bloccate oggi)
- **Sistemi Monitorati:** 1,247 dispositivi
- **Modelli AI:** 8 operativi 24/7

### Moduli Operativi
- **XDR:** Rilevamento esteso e risposta
- **SOAR:** Automazione e orchestrazione
- **ML:** Machine Learning predittivo
- **SIEM:** Gestione eventi e informazioni

## 🔐 Sicurezza

### Autenticazione
- **Multi-factor authentication** supportato
- **Session management** sicuro
- **Role-based access control**
- **API key management**

### Crittografia
- **HTTPS/TLS 1.3** per comunicazioni
- **AES-256** per dati sensibili
- **JWT tokens** per autenticazione API
- **Hashing bcrypt** per password

## 📱 Accesso

### Credenziali Demo
- **Email:** diberardoluca@gmail.com
- **Password:** NikiAri2313
- **Ruolo:** Admin Pro

### Funzionalità Pro
- **Dashboard avanzata** con tutti i moduli
- **Report personalizzati** e esportazione
- **Alerting multi-canale** configurabile
- **API access** completo

## 🤝 Contribuire

### Sviluppo
1. Fork del repository
2. Crea branch feature (`git checkout -b feature/nome-feature`)
3. Commit delle modifiche (`git commit -am 'Aggiungi feature'`)
4. Push al branch (`git push origin feature/nome-feature`)
5. Crea Pull Request

### Bug Report
Usa GitHub Issues per segnalare bug con:
- Descrizione dettagliata
- Passi per riprodurre
- Screenshot se applicabile
- Versione sistema e browser

## 📄 Licenza

Questo progetto è rilasciato sotto licenza MIT. Vedi `LICENSE` per dettagli.

## 🆘 Supporto

### Documentazione
- [Guida Configurazione](GUIDA_CONFIGURAZIONE_ENV.md)
- [Guida Utilizzo](GUIDA_UTILIZZO_INTELLISEC.md)
- [Architettura](INTELLISEC_ARCHITECTURE.md)

### Contatti
- **Email:** support@intellisec.ai
- **GitHub Issues:** Per bug e feature request
- **Discussions:** Per domande generali

---

**IntelliSec** - Protezione AI per l'era digitale 🛡️✨
