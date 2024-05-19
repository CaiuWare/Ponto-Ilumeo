import { SetStateAction, useState } from 'react'
import { Title, Text, Input, Container, Button } from '@mantine/core'
import classes from './loginPage.module.css'
import { Link } from 'react-router-dom'

export function Login() {
  const [userId, setUserId] = useState('') // Estado para armazenar o valor do input
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
    // Atualiza o estado com o valor do input
    setUserId(event.target.value)
  }

  const handleClick = async () => {
    // Use o valor de userId conforme necessário
    console.log('UserID:', userId)

    // Exemplo: Enviar o userId para uma função que faz uma requisição para o backend
    // await enviarUserIdParaBackend(userId);
  }

  // const handleClick = () => {
  //   Navigate('/id');
  // };
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
          value={userId} // Valor do input
          onChange={handleInputChange} // Função para atualizar o estado com o valor do input
          {...InputProps}
        />
        <Link to={`/${userId}`}>
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
            onClick={handleClick} // Chama a função handleClick ao clicar no botão
          >
            Confirmar
          </Button>
        </Link>
      </Container>
    </>
  )
}
