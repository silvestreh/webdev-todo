import feathers from 'feathers/client';
import socketio from 'feathers-socketio/client';
import authentication from 'feathers-authentication/client';
import hooks from 'feathers-hooks';
import io from 'socket.io-client';

const socket = io(`${(location.protocol || 'http:')}//${location.hostname}:3030`);

export const app = feathers()
    .configure(hooks())
    .configure(socketio(socket))
    .configure(authentication({
        storage: global.localStorage,
    }));
