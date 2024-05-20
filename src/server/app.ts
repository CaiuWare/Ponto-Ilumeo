import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'
import { ShortUUID } from './helpers/helpers'

// export const app = fastify()

export async function routes(app: FastifyInstance) {
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
  app.get('/users/:id', async (request, reply) => {
    const getTransactionParamsSchema = z.object({
      id: z.string(),
    })
  const { id } = getTransactionParamsSchema.parse(request.params);

  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      return reply.status(404).send({ message: 'Usuário não encontrado' });
    }

    return reply.send(user);
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    return reply.status(500).send({ message: 'Erro ao buscar usuário' });
  }
});

  app.post('/:id', async (request, reply) => {
    const getTransactionParamsSchema = z.object({
      id: z.string(),
    })

    try {
      const { id } = getTransactionParamsSchema.parse(request.params)

      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      })

      if (!user) {
        throw new Error('Empregado não registrado!')
      }

      const timeStatus = await prisma.timeClock.findFirst({
        where: {
          userId: user.id,
        },
        orderBy: {
          date: 'desc',
        },
      })

      const currentTime = new Date()

      if (!timeStatus || timeStatus.endTime) {
        // Se não há registro ou o último registro já tem um endTime, criar um novo registro
        await prisma.timeClock.create({
          data: {
            id: ShortUUID(),
            userId: user.id,
            date: currentTime,
            startTime: currentTime,
            duration: null,
            endTime: null,
          },
        })
        return reply.status(201).send('Hora de entrada registrada')
      } else if (!timeStatus.endTime) {
        // Se há um registro sem endTime, atualizar o endTime e calcular a duração
        const startTime = new Date(timeStatus.startTime)
        const duration = currentTime.getTime() - startTime.getTime() // Diferença em milissegundos

        await prisma.timeClock.update({
          where: {
            id: timeStatus.id,
          },
          data: {
            endTime: currentTime,
            duration,
          },
        })
        return reply.status(200).send('Hora de saída registrada')
      }
    } catch (error) {
      console.error(error)
      const errorMessage =
        error instanceof Error ? error.message : 'Erro interno.'
      return reply.status(400).send(errorMessage)
    }
  })

  app.get('/:id', async (request) => {
    const getTransactionParamsSchema = z.object({
      id: z.string(),
    })
    const { id } = getTransactionParamsSchema.parse(request.params)

    const timeHistory = await prisma.timeClock.findMany({
      where: {
        userId: String(id),
      },
      orderBy: {
        date: 'desc',
      },
    })
    return { timeHistory }
  })
}
