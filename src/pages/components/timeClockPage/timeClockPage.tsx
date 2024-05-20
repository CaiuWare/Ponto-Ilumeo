import React, { useEffect, useState } from 'react'
import {
  Container,
  Title,
  Text,
  Button,
  Stack,
  Center,
  Flex,
} from '@mantine/core'
import { getTime, registerTime } from '../../api/timeClock'
import { TimeData } from '../../api/interface'

export function TimeClock({ userId }: { userId: string }) {
  const [timeData, setTimeData] = useState<TimeData | null>(null)

  useEffect(() => {
    getTime(userId)
      .then((data) => {
        setTimeData(data)
      })
      .catch((error) => {
        console.error('Erro ao obter dados de tempo:', error)
      })
  }, [userId])

  const handleClockIn = async () => {
    try {
      await registerTime(userId)
      const newData = await getTime(userId)
      setTimeData(newData)
    } catch (error) {
      console.error('Erro ao registrar tempo:', error)
    }
  }

  const previousDays = [
    '03/11/23',
    '04/11/23',
    '05/11/23',
    '06/11/23',
    '09/11/23',
    '22/11/23',
    '24/11/23',
    '25/11/23',
    '24/12/23',
    '25/12/23',
  ]

  return (
    <Container mt="5rem" h={50} px={0} size="30rem" pe="lg">
      <Flex justify="space-between" align="center">
        <Text size="md" fw={500} style={{ color: 'white' }}>
          Relógio de ponto
        </Text>
        <Text size="md" style={{ color: 'white' }}>
          #{userId}
        </Text>
      </Flex>
      <Text size="md" ta="end" style={{ marginBottom: '2rem', color: 'white' }}>
        Usuário
      </Text>
      <Text fw={600} size="2rem" ta={'start'} style={{ color: 'white' }}>
        0h 00m
      </Text>
      <Text style={{ marginBottom: '1rem', color: '#A0A0A0' }}>
        Horas de hoje
      </Text>
      <Center>
        <Button
          size="lg"
          fullWidth
          onClick={handleClockIn}
          style={{
            backgroundColor: 'orange',
            color: 'black',
            marginBottom: '2rem',
          }}
        >
          {timeData?.endTime ? 'Hora de entrada' : 'Hora de saída'}
        </Button>
      </Center>
      <Title order={5} style={{ marginBottom: '1rem', color: 'white' }}>
        Dias anteriores
      </Title>
      <Stack>
        {previousDays &&
          previousDays.map((day) => (
            <Flex
              justify="space-between"
              align="center"
              key={day}
              style={{
                backgroundColor: '#2C2D31',
                padding: '1rem',
                borderRadius: '4px',
                color: 'white',
              }}
            >
              <Text>{day}</Text>
              <Text fw={700} ta={'end'}>
                7h 30m
              </Text>
            </Flex>
          ))}
      </Stack>
    </Container>
  )
}
