import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Home } from '../pages/home'
import { Login } from '../pages/login'

export const router = createBrowserRouter([
  {
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '*',
        element: <Navigate to="/login" />,
      },
    ],
  },
])
