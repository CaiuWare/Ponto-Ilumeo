import { v4 as uuidv4 } from 'uuid'

export function ShortUUID() {
  // Gera um UUID completo
  const fullUUID = uuidv4()
  // Retorna os primeiros 8 caracteres do UUID
  return fullUUID.substring(0, 8)
}
