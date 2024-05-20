import { SetStateAction, useState } from 'react'
import {
  Title,
  Text,
  Input,
  Container,
  Button,
  Notification,
} from '@mantine/core'
import classes from './loginPage.module.css'
import { findUser } from '../../api/user'
import { useNavigate } from 'react-router-dom'

export function Login() {
  const [userId, setUserId] = useState('')
  const [error, setError] = useState<string | null>(null)
  const history = useNavigate()

  const demoProps = {
    h: 50,
    mt: 'md',
    px: 0,
    size: '20rem',
  }
  const InputProps = {
    textAlign: 'center',
    fontSize: '20px',
    color: 'white',
    backgroundColor: '#1A1B1E',
  }

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setUserId(event.target.value)
  }

  const handleClick = async () => {
    try {
      const userData = await findUser(userId)

      history(`/time/users/${userData.id}`)
    } catch (error) {
      console.error('Error fetching user:', error)
      setError('Usuário não encontrado')
    }
  }

  console.log(userId)

  return (
    <>
      <Container {...demoProps}>
        <Title
          order={4}
          fw={300}
          variant="gradient"
          className={classes.title}
          ta="start"
          mt={350}
        >
          Ponto{' '}
          <Text fw={700} size="lg" component="span">
            Ilumeo{' '}
          </Text>
        </Title>
        <br />
        <Input
          placeholder="Código do usuário"
          size="md"
          radius="xs"
          value={userId}
          onChange={handleInputChange}
          {...InputProps}
        />
        <Button
          fullWidth
          mt="md"
          size="md"
          radius="xs"
          styles={{
            root: {
              backgroundColor: 'orange',
              '&:hover': {
                backgroundColor: '#FF8C00',
              },
            },
          }}
          onClick={handleClick}
        >
          Confirmar
        </Button>
        {error && <Notification color="red">{error}</Notification>}
      </Container>
    </>
  )
}
