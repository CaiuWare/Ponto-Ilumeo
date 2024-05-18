import React from 'react'
import { Title, Text, Input, Container, Button } from '@mantine/core';
import classes from './loginPage.module.css';
// import { Navigate } from 'react-router-dom';

export function Login() {
  const demoProps = {
    // bg: 'var(--mantine-color-blue-light)',
    h: 50,
    mt: 'md',
    px: 0,
    size: "20rem"
  };
  const InputProps = {
    // styles={{
      // input: {
        textAlign: 'center',
        fontSize: '20px',
        color: 'white',
        backgroundColor: '#1A1B1E',
      // },
    // }}
  }

  // const handleClick = () => {
  //   Navigate('/id');
  // };

  return (
    <>
      <Container {...demoProps}>
        <Title order={4} fw={300} variant="gradient" className={classes.title} ta="start" mt={350} >
          Ponto{' '}
          <Text fw={700} size='lg' component="span">
            Ilumeo{' '}
            {/* <Text inherit variant="gradient" gradient={{ from: 'gray', to: 'gray' }} component="span">
              Ilumeo
            </Text> */}
          </Text>
        </Title>
        <br />
        <Input
          placeholder="Código do usuário"
          // value="4SXXFMf"
          // readOnly
          size="md"
          radius="xs"
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
          // onClick={handleClick}
        >
          Confirmar
        </Button>
      </Container>
    </>
  );
}
