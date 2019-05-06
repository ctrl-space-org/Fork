import Server from './Server'
export default interface Application {
    server: Server
    createRoutes():void
};
