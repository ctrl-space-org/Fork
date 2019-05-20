// https://www.npmjs.com/package/request-balancer
// https://www.npmjs.com/package/smart-request-balancer
import dotenv from 'dotenv'
import { serverStart } from '../Helpers'
import application from './container'

dotenv.config()

const { SERVER_PORT } = process.env

application.init()

application.server.listen(SERVER_PORT, (): void => serverStart(SERVER_PORT))
