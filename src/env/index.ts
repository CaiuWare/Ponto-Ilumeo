// import 'dotenv/config'
// import { z } from 'zod'

// const envSchema = z.object({
//   NODE_ENV: z.enum(['dev']).default('dev'),
//   DATABASE_URL: z.string(),
//   PORT: z.number().default(3333),
//   URL: z.string().default('http://localhost:3000'),
// })

// const _env = envSchema.safeParse(process.env)

// if (_env.success === false) {
//   console.error('⚠️ Invalid environment variable!', _env.error.format())
//   throw new Error('Invalid environment variables.')
// }

// export const env = _env.data
