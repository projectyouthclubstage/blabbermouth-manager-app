export class Event {
    id: string;
    process: number;
    state: number;
    application: string;
    version: number;
    retryCount: number;
    previousMessage: string;
    calendar: string;
    retryMessage: boolean;
}
