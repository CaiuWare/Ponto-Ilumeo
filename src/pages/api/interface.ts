export interface TimeData {
  id: string
  userId: string
  date: string
  startTime: string
  endTime: string | null
  duration: number | null
}

export interface TimeClockProps {
  user: string
}

export interface User {
  id: string
  name: string
  email: string
}
