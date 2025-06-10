import { getSystemLogs, getNetworkEvents, getDbSecurityEvents } from '../utils/data-sources';
import { analyzeThreat } from './ai-engine';

export async function threatAnalyzer() {
    const logs = await getSystemLogs();
    const networkEvents = await getNetworkEvents();
    const dbEvents = await getDbSecurityEvents();

    const inputData = [
        ...(typeof logs === 'string' ? logs.split('\n') : logs),
        ...networkEvents,
        ...dbEvents
    ];
    return analyzeThreat(inputData);
}