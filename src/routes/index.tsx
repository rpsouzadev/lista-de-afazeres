import { AppRoutes } from './app.routes'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { useAuth } from '../contexts/authContext'

import { Login } from '../pages/login'

export function Routes() {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Login />
  }

  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </BrowserRouter>
  )
}
