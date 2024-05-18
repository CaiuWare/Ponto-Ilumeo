import React from 'react'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { theme } from './theme'
import { Router } from './router/Router'

export default function App() {
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <Router />
    </MantineProvider>
  )
}
