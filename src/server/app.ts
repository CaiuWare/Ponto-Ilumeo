import fastify from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'
import { ShortUUID } from './helpers/helpers'

export const app = fastify()

app.post('/users', async (request, reply) => {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string(),
  })

  const { name, email } = registerBodySchema.parse(request.body)

  await prisma.user.create({
    data: {
      id: ShortUUID(),
      name,
      email,
    },
  })

  return reply.status(201).send()
})
