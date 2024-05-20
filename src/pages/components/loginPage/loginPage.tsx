import { SetStateAction, useState } from 'react'
import { Title, Text, Input, Container, Button } from '@mantine/core'
import classes from './loginPage.module.css'
// import { Link } from 'react-router-dom'
import { findUser } from '../../api/user'

export function Login() {
  const [userId, setUserId] = useState('')

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
      console.log('UserID:', userId)
      const userData = await findUser(userId) // Chame a função findUser com o userId
      console.log('User data:', userData.id)
      // Faça algo com os dados do usuário, como redirecionar para outra página
    } catch (error) {
      console.error('Error fetching user:', error)
      // Lide com o erro, se necessário
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
        {/* <Link to={`/${userId}`}> */}
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
        {/* </Link> */}
      </Container>
    </>
  )
}
