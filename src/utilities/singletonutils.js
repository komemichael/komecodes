import io from 'socket.io-client';

export class Singleton {
    static instance;

    constructor(serverUrl) {
        const socket = io.connect(serverUrl);
        const connected = socket.connected;
        return { socket, connected };
    }

    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}