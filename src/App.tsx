import { Routes } from './routes'
import { GlobalStyle } from './styles/global'
import { defaultThemes } from './theme/default'
import { ThemeProvider } from 'styled-components'
import { AuthContextProvider } from './contexts/authContext'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultThemes}>
        <GlobalStyle />
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </ThemeProvider>
    </>
  )
}
