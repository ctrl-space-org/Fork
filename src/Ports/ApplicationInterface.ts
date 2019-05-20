import { Server } from 'server-port'

export default interface ApplicationInterface{
    server: Server
    init():void
};
