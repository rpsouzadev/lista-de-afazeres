import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react'

type AuthContextDataProps = {
  isAuthenticated: boolean
  logOut: () => void
  login: (email: string, password: string) => void
}

type AuthContextProviderProps = {
  children: ReactNode
}

const LOCAL_STORAGE_KEY__ACCESS_TOKEN = 'APP_ACCESS_TOKEN'

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = useCallback((email: string, password: string) => {
    if (email && password) {
      localStorage.setItem(
        LOCAL_STORAGE_KEY__ACCESS_TOKEN,
        'kfahdsçkflhaeiofhakldsfhaiefhaçkldshie',
      )
      setIsAuthenticated(true)
    }
  }, [])

  const logOut = useCallback(() => {
    localStorage.removeItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN)

    setIsAuthenticated(false)
  }, [])

  useEffect(() => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN)

    if (accessToken) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
