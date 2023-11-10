import { z } from 'zod'

export const formTaskSchema = z.object({
  title: z.string().min(1, 'obrigatório.'),
  description: z.string().min(1, 'obrigatoria'),
})
