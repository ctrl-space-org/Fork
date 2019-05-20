import { Router } from 'server-port'

export default interface ApplicationInterface{
    server: Router
    init():void
};
