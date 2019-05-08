export interface Request {
    body: any
    query: any
}
export interface Response {
    send: Function,
    json: Function
}
