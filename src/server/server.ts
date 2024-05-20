import fastify from 'fastify'
import { routes } from './app'
// import { env } from '../env'
// import { env } from '../env'

const app = fastify()

app.register(routes, { prefix: 'time' })

app
  .listen({
    host: '0.0.0.0',
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
