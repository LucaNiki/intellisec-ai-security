import fs from 'fs/promises';
import { Client } from 'pg';
import fetch from 'node-fetch';

export async function getSystemLogs(): Promise<string> {
    try {
        return await fs.readFile(process.env.REAL_LOG_PATH || '/var/log/syslog', 'utf8');
    } catch (err) {
        console.error("Errore lettura log:", err);
        return '';
    }
}

export async function getNetworkEvents(): Promise<any[]> {
    try {
        const url = process.env.NETWORK_SENSOR_URL || 'http://localhost:9000/api/network-events';
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return await response.json();
    } catch (err) {
        console.error("Errore fetch eventi rete:", err);
        return [];
    }
}

export async function getDbSecurityEvents(): Promise<any[]> {
    const client = new Client({ connectionString: process.env.DATABASE_URL });
    try {
        await client.connect();
        const res = await client.query('SELECT * FROM security_events ORDER BY timestamp DESC LIMIT 100;');
        return res.rows;
    } catch (err) {
        console.error("Errore database:", err);
        return [];
    } finally {
        await client.end();
    }
}