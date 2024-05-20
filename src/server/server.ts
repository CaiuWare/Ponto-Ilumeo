import fastify from 'fastify'
import { routes } from './app'
import cors from '@fastify/cors'

const app = fastify()

app.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
})

app.register(routes, { prefix: 'time' })

app
  .listen({
    host: '0.0.0.0',
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
