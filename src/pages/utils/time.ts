export function calculateElapsedTime(
  startTime: string,
  endTime: string | null,
) {
  if (!endTime) {
    return { hours: 0, minutes: 0 }
  }

  const start = new Date(startTime)
  const end = new Date(endTime)

  let difference = end.getTime() - start.getTime()

  const hours = Math.floor(difference / (1000 * 60 * 60))
  difference -= hours * 1000 * 60 * 60
  const minutes = Math.floor(difference / (1000 * 60))

  return { hours, minutes }
}
