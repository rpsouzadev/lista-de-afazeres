import * as S from './styles'

import { useAuth } from '../../contexts/authContext'

import { Button } from '../Button'

export function Header() {
  const { logOut } = useAuth()

  return (
    <S.Container>
      <S.Title>Lista de afazeres</S.Title>

      <nav>
        <a href="/">Home</a>

        <a href="/nova-tarefa">Criar</a>

        <Button title="Sair" onClick={logOut} />
      </nav>
    </S.Container>
  )
}
