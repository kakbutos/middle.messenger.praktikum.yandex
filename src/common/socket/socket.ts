import { EventBus } from '@/common/eventBus/eventBus';
/* eslint-disable */
export enum WSTransportEvents {
	Error = 'error',
	Connected = 'connected',
	Close = 'close',
	Message = 'message',
}
/* eslint-enable */
export class WSTransport extends EventBus {
    private socket?: WebSocket;

    private pingInterval?: ReturnType<typeof setInterval>;

    private readonly pingIntervalTime = 30000;

    private readonly url: string;

    constructor(url: string) {
        super();

        this.url = url;
    }

    public send(data: string | number | object) {
        if (!this.socket) {
            throw new Error('Socket is not connected');
        }

        this.socket.send(JSON.stringify(data));
    }

    public connect(): Promise<void> {
        if (this.socket) {
            throw new Error('Socket is already connected');
        }

        this.socket = new WebSocket(this.url);
        this.subscribe(this.socket);
        this.setupPing();

        return new Promise((resolve, reject) => {
            this.on(WSTransportEvents.Error, reject);
            this.on(WSTransportEvents.Connected, () => {
                this.off(WSTransportEvents.Error, reject);
                resolve();
            });
        });
    }

    public close() {
        this.socket?.close();
        clearInterval(this.pingInterval);
    }

    private setupPing() {
        this.pingInterval = setInterval(() => {
            this.send({ type: 'ping' });
        }, this.pingIntervalTime);

        this.on(WSTransportEvents.Close, () => {
            clearInterval(this.pingInterval);
            this.pingInterval = undefined;
        });
    }

    private subscribe(socket: WebSocket) {
        socket.addEventListener('open', () => {
            this.emit(WSTransportEvents.Connected);
        });

        socket.addEventListener('close', () => {
            this.emit(WSTransportEvents.Close);
        });

        socket.addEventListener('error', (error: Event) => {
            this.emit(WSTransportEvents.Error, error);
        });

        socket.addEventListener('message', (message: MessageEvent<any>) => {
            try {
                const data = JSON.parse(message.data);

                if (['pong', 'user connected'].includes(data?.type)) {
                    return;
                }

                this.emit(WSTransportEvents.Message, data);
            } catch (error) {
                /* eslint-disable-next-line no-console */
                console.error(error);
            }
        });
    }
}
