# Guida Utilizzo IntelliSec Strutturato

## 📦 Estrazione e Setup Iniziale

### 1. Estrazione del Pacchetto
```bash
# Estrai il pacchetto ZIP
unzip IntelliSec_Structured_20250603_130902.zip
cd IntelliSec_Structured_20250603_130902

# Verifica la struttura
ls -la
```

### 2. Configurazione Ambiente
```bash
# Copia il file di ambiente
cp .env.example .env

# Modifica le variabili secondo le tue esigenze
nano .env
```

## 🐳 Deploy con Docker (Consigliato)

### Avvio Rapido
```bash
# Build e avvio di tutti i servizi
make build
make up

# Oppure manualmente
docker-compose build
docker-compose up -d
```

### Verifica Status Servizi
```bash
# Controlla lo stato dei container
docker-compose ps

# Visualizza i log
make logs
# oppure
docker-compose logs -f
```

### Accesso ai Servizi
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5001
- **AI Engine**: http://localhost:5002
- **Health Check**: http://localhost:5001/health

## 💻 Sviluppo Locale (Senza Docker)

### Prerequisiti
- Node.js 18+
- Python 3.11+
- npm/yarn

### Setup Frontend
```bash
cd frontend
npm install
npm run dev
# Disponibile su http://localhost:3000
```

### Setup Backend
```bash
cd backend
npm install
npm run dev
# API disponibile su http://localhost:5001
```

### Setup AI Engine
```bash
cd ai
pip install -r requirements.txt
python app.py
# Servizio disponibile su http://localhost:5002
```

## 🔧 Configurazione Avanzata

### Variabili Ambiente (.env)
```bash
# Applicazione
NODE_ENV=production
PORT=5001

# Sicurezza
JWT_SECRET=your-super-secret-key

# AI Engine
AI_SERVICE_URL=http://localhost:5002

# Monitoring
LOG_LEVEL=info
ENABLE_METRICS=true
```

### Configurazione Security Tools
```bash
# Modifica configurazione sicurezza
nano security-tools/config/security_config.yaml

# Avvia scanner di rete
cd security-tools
python scripts/network_scanner.py
```

## 📊 Testing e Validazione

### Test API Backend
```bash
# Health check
curl http://localhost:5001/health

# Metriche sistema
curl http://localhost:5001/api/system/metrics

# Status sicurezza
curl http://localhost:5001/api/system/status
```

### Test AI Engine
```bash
# Health check AI
curl http://localhost:5002/health

# Test analisi minacce
curl -X POST http://localhost:5002/analyze/threat \
  -H "Content-Type: application/json" \
  -d '{"data": "test threat data"}'
```

## 🛠️ Comandi Utili Make

```bash
make help          # Mostra tutti i comandi disponibili
make build          # Build di tutte le immagini Docker
make up             # Avvia tutti i servizi
make down           # Ferma tutti i servizi
make logs           # Mostra i log in tempo reale
make clean          # Pulizia container e volumi
make health         # Verifica stato di tutti i servizi
```

## 📈 Monitoring e Logs

### Visualizzazione Log
```bash
# Log di tutti i servizi
docker-compose logs -f

# Log specifico servizio
docker-compose logs -f intellisec-frontend
docker-compose logs -f intellisec-backend
docker-compose logs -f intellisec-ai
```

### Metriche Sistema
```bash
# Accesso metriche via API
curl http://localhost:5001/api/system/metrics | jq
```

## 🔒 Sicurezza in Produzione

### SSL/HTTPS Setup
1. Posiziona i certificati in `./ssl/`
2. Modifica `nginx.conf` per HTTPS
3. Aggiorna `docker-compose.yml` per SSL

### Backup Database
```bash
# Backup automatico
make backup

# Restore da backup
make restore BACKUP_DIR=./backups/mongo-20231203
```

## 🚨 Troubleshooting

### Problemi Comuni

**Porte occupate:**
```bash
# Verifica porte in uso
netstat -tulpn | grep :3000
netstat -tulpn | grep :5001
netstat -tulpn | grep :5002
```

**Container non si avviano:**
```bash
# Rebuild forzato
docker-compose down -v
docker-compose build --no-cache
docker-compose up -d
```

**Problemi permessi:**
```bash
# Fix permessi file
sudo chown -R $USER:$USER .
chmod +x scripts/*.sh
```

### Log Debug
```bash
# Abilita debug mode
export NODE_ENV=development
export LOG_LEVEL=debug

# Riavvia servizi
docker-compose restart
```

## 🔄 Aggiornamenti

### Update Codice
```bash
# Pull nuove modifiche
git pull origin main

# Rebuild e restart
make down
make build
make up
```

### Update Dipendenze
```bash
# Frontend
cd frontend && npm update

# Backend  
cd backend && npm update

# AI Engine
cd ai && pip install -r requirements.txt --upgrade
```

## 📚 Documentazione API

### Endpoint Backend

**Sistema:**
- `GET /api/system/metrics` - Metriche sistema
- `GET /api/system/status` - Status servizi
- `GET /health` - Health check

**Sicurezza:**
- `GET /api/security/threats` - Stato minacce
- `POST /api/security/scan` - Avvia scansione

### Endpoint AI Engine

**Analisi:**
- `POST /analyze/threat` - Analisi minacce
- `POST /predict/security` - Predizione sicurezza
- `GET /models/status` - Status modelli ML

## 🎯 Prossimi Passi

1. **Personalizzazione**: Modifica la configurazione per il tuo ambiente
2. **Integrazione**: Connetti le tue fonti dati di sicurezza
3. **Estensione**: Aggiungi nuovi moduli di analisi
4. **Monitoring**: Implementa dashboard personalizzate
5. **Automazione**: Configura risposte automatiche agli incidenti