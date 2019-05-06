// https://www.npmjs.com/package/request-balancer
// https://www.npmjs.com/package/smart-request-balancer
import dotenv from 'dotenv'
import { serverStart } from '../Helpers'
import application from './container'
import helmet from 'helmet'
import morgan from 'morgan'

dotenv.config()

const { SERVER_PORT } = process.env

application.createRoutes()

application.server.use(morgan('dev'))
application.server.use(helmet())

application.server.listen(SERVER_PORT, (): void => serverStart(SERVER_PORT))
