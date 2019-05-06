export default interface Server{
    post(path: string, handler: Function):void
    get(path:string, handler:Function):void
    path(path:string, handler:Function):void
    patch(path:string, handler:Function):void
    use(handler: Function): void
    listen(port?: string, fun?: Function):void
};
