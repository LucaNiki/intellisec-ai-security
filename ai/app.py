from flask import Flask, request, jsonify
from utils.real_data_sources import get_system_logs, get_network_data
from ml_legion_optimized import analyze_security_threats

app = Flask(__name__)

@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "ok"})

@app.route('/analyze/threat', methods=['POST'])
def analyze_threat():
    logs = get_system_logs()
    network = get_network_data()
    input_data = {
        "logs": logs,
        "network": network
    }
    result = analyze_security_threats(input_data)
    return jsonify(result)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5002)