# Guida Configurazione Variabili d'Ambiente (.env)

## Come Configurare il File .env

### 1. Accesso al File
Il file `.env` si trova nella directory principale del progetto IntelliSec. Per modificarlo:

- **Su Replit**: Clicca sul file `.env` nella barra laterale sinistra
- **Localmente**: Apri `.env` con qualsiasi editor di testo

### 2. Variabili Essenziali da Configurare

#### Database (Automatico su Replit)
```env
DATABASE_URL=${DATABASE_URL}  # Fornito automaticamente
```

#### Intelligenza Artificiale
```env
OPENAI_API_KEY=sk-proj-your-openai-api-key-here
```
**Come ottenere**: Vai su https://platform.openai.com/api-keys

#### Sicurezza
```env
SECURITY_LEVEL=high
INTELLISEC_MODE=autonomous
VIGILANTE_AI_ENABLED=true
```

#### Email per Alerting (Opzionale)
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### 3. Configurazioni Predefinite (Non Modificare)

Queste sono già configurate correttamente:
- `NODE_ENV=development`
- `PORT=5000`
- `FRONTEND_PORT=3000`
- `ML_CONFIDENCE_THRESHOLD=0.85`
- `THREAT_DETECTION_ENABLED=true`

### 4. Personalizzazioni Avanzate

#### Modalità di Funzionamento
```env
# Modalità base
INTELLISEC_MODE=autonomous        # Funzionamento automatico
INTELLISEC_MODE=manual           # Controllo manuale
INTELLISEC_MODE=hybrid           # Modalità mista

# Livello sicurezza
SECURITY_LEVEL=low               # Monitoraggio base
SECURITY_LEVEL=medium            # Monitoraggio standard
SECURITY_LEVEL=high              # Monitoraggio massimo
SECURITY_LEVEL=paranoid          # Monitoraggio estremo
```

#### Configurazione ML
```env
ML_CONFIDENCE_THRESHOLD=0.85     # Soglia affidabilità (0.1-1.0)
AUTO_LEARNING_ENABLED=true       # Apprendimento automatico
```

#### Alerting
```env
ALERT_THRESHOLD=low              # Avvisi per tutto
ALERT_THRESHOLD=medium           # Avvisi importanti
ALERT_THRESHOLD=high             # Solo avvisi critici
```

### 5. Variabili per Deployment

#### Sviluppo Locale
```env
NODE_ENV=development
DEBUG=true
HOT_RELOAD=true
```

#### Produzione
```env
NODE_ENV=production
DEBUG=false
HOT_RELOAD=false
```

### 6. Integrazione Servizi Esterni

#### CVE Database
```env
CVE_API_BASE=https://cve.circl.lu/api/
MITRE_API_BASE=https://attack.mitre.org/api/
```

#### Cache Redis (Opzionale)
```env
REDIS_URL=redis://localhost:6379
CACHE_TTL=3600
```

### 7. Variabili di Performance

#### Processi Worker
```env
WORKER_PROCESSES=2               # Numero processi paralleli
MAX_CONNECTIONS=1000             # Connessioni simultanee massime
```

#### Logging
```env
LOG_LEVEL=info                   # debug, info, warn, error
LOG_FILE_PATH=./logs/intellisec.log
VERBOSE_LOGGING=false
```

### 8. Esempio File .env Completo per Produzione

```env
# Configurazione base
NODE_ENV=production
INTELLISEC_MODE=autonomous
SECURITY_LEVEL=high

# Database
DATABASE_URL=postgresql://user:pass@host:port/db

# AI
OPENAI_API_KEY=sk-proj-your-key-here
ML_CONFIDENCE_THRESHOLD=0.90
AUTO_LEARNING_ENABLED=true

# Sicurezza
VIGILANTE_AI_ENABLED=true
THREAT_DETECTION_ENABLED=true
ALERT_THRESHOLD=medium

# Performance
WORKER_PROCESSES=4
MAX_CONNECTIONS=2000
CACHE_TTL=7200

# Logging
LOG_LEVEL=warn
VERBOSE_LOGGING=false
DEBUG=false
```

### 9. Test Configurazione

Dopo aver modificato `.env`, riavvia IntelliSec:

```bash
# Su Replit: Clicca il pulsante "Run" o riavvia il workflow
# Localmente:
npm run dev
```

### 10. Risoluzione Problemi

#### Errore "DATABASE_URL not found"
- Su Replit: Verifica che il database PostgreSQL sia attivo
- Localmente: Installa PostgreSQL o usa SQLite

#### Errore "OPENAI_API_KEY not found"
- Ottieni una chiave API da https://platform.openai.com
- Aggiungi credito al tuo account OpenAI

#### Errore di connessione SMTP
- Verifica credenziali email
- Attiva "App password" se usi Gmail
- Controlla impostazioni firewall

### 11. Sicurezza File .env

**IMPORTANTE**: 
- Non condividere mai il file `.env` pubblicamente
- Non committare `.env` su repository pubblici
- Usa variabili d'ambiente del sistema in produzione
- Cambia le chiavi API regolarmente

### 12. Variabili d'Ambiente di Sistema

Per deployment in produzione, imposta le variabili direttamente nel sistema:

```bash
# Linux/macOS
export OPENAI_API_KEY="sk-proj-your-key"
export SECURITY_LEVEL="high"

# Windows
set OPENAI_API_KEY=sk-proj-your-key
set SECURITY_LEVEL=high
```

---

**IntelliSec** è ora configurato e pronto per proteggere la tua infrastruttura con intelligenza artificiale autonoma.