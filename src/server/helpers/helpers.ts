import { randomUUID } from 'crypto'

export function ShortUUID() {
  // Gera um UUID completo
  const fullUUID = randomUUID()
  // Retorna os primeiros 8 caracteres do UUID
  return fullUUID.substring(0, 8)
}
