import React, { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './home'
import { TimeClockPage } from './timeClock'
import { findUser } from '../api/user'
import { TimeClockProps } from '../api/interface'

const router = createBrowserRouter([
  {
    path: 'time/users',
    element: <HomePage />,
  },
  {
    path: 'time/users/:id',
    element: <DynamicTimeClockPage />,
  },
])

function DynamicTimeClockPage() {
  const [user, setUser] = useState<TimeClockProps | null>(null)

  useEffect(() => {
    const pathParts = window.location.pathname.split('/')
    const id = pathParts.length > 0 ? pathParts.pop() : ''

    if (typeof id === 'string' && id.trim() !== '') {
      findUser(id)
        .then((userData) => {
          setUser(userData)
        })
        .catch((error) => {
          console.error('Erro ao buscar usuário:', error)
        })
    } else {
      console.error('ID inválido:', id)
    }
  }, [])

  useEffect(() => {
    if (user) {
      console.log('User object:', user)
    } else {
      console.log('User is null.')
    }
  }, [user])

  if (user === null) {
    return <div>Carregando...</div>
  }

  return <TimeClockPage />
}

export function Router() {
  return <RouterProvider router={router} />
}
