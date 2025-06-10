import express from 'express';
import { threatAnalyzer } from './IntelliSec/threat-analyzer';
import { getSystemLogs, getNetworkEvents, getDbSecurityEvents } from './utils/data-sources';

const router = express.Router();

router.get('/api/system/logs', async (req, res) => {
    const logs = await getSystemLogs();
    res.json({ logs });
});

router.get('/api/network/events', async (req, res) => {
    const events = await getNetworkEvents();
    res.json(events);
});

router.get('/api/security/db-events', async (req, res) => {
    const events = await getDbSecurityEvents();
    res.json(events);
});

router.get('/api/security/scan', async (req, res) => {
    const results = await threatAnalyzer();
    res.json(results);
});

export default router;