import React from 'react'
import { TimeClock } from '../components/timeClockPage/timeClockPage'
import { useParams } from 'react-router-dom'

export function TimeClockPage() {
  const { id } = useParams()

  return <>{id && <TimeClock userId={id}></TimeClock>}</>
}
