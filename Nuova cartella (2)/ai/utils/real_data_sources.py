import os

def get_system_logs():
    log_path = os.environ.get("REAL_LOG_PATH", "/var/log/syslog")
    try:
        with open(log_path, "r") as f:
            return f.read()
    except Exception as e:
        print("Errore lettura log:", e)
        return ""

def get_network_data():
    import requests
    try:
        url = os.environ.get("NETWORK_SENSOR_URL", "http://localhost:9000/api/network-events")
        resp = requests.get(url, timeout=5)
        if resp.ok:
            return resp.json()
    except Exception as e:
        print("Errore fetch eventi rete:", e)
    return []