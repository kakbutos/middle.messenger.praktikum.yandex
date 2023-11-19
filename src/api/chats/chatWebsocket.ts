import { WSTransport, WSTransportEvents } from '@/common/socket/socket';
import store from '@/common/store/store';

export class ChatWS extends WSTransport {
    constructor(url: string) {
        super(url);

        this.on(WSTransportEvents.Message, this.handleWSMessages.bind(this));
    }

    public getMessages(offset: string): void {
        this.send({ type: 'get old', content: offset });
    }

    public sendMessage(message: string): void {
        this.send({ type: 'message', content: message });
    }

    private handleWSMessages(data: any) {
        switch (data.type) {
        case undefined:
            this.storeMessages(data.reverse());
            break;

        case 'message':
            this.getMessages('0');
            break;

        default:
            break;
        }
    }

    private storeMessages(messages: any): void {
        store.set('chats.messages', messages, true);
    }
}
