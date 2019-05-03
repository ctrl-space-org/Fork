export default function routes (server: any): void {
  console.log('teste')
  server.get('/', (req: any, res: any, next: any) => {
    req
    next
    res.send('First Test2')
  })
}
