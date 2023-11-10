import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './app.routes'
import { useAuth } from '../contexts/authContext'
import { Login } from '../pages/login'

export function Routes() {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Login />
  }

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
