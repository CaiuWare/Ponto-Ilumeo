import React from 'react'
import { TimeClock } from '../components/timeClockPage/timeClockPage'
import { useParams } from 'react-router-dom'

export function TimeClockPage() {
  const { id } = useParams()

  // Use o valor de id conforme necessário
  console.log('ID:', id)
  return (
    <>
      <TimeClock></TimeClock>
    </>
  )
}
