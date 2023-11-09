import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { defaultThemes } from './theme/default'
import { GlobalStyle } from './styles/global'
import { Router } from './routes'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultThemes}>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}
