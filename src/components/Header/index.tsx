import { Button } from '../Button'
import * as S from './styles'

type HeaderProps = {
  isLogged: boolean
}

export function Header({ isLogged = false }: HeaderProps) {
  return (
    <S.Container>
      <S.Title>Lista de afazeres</S.Title>

      <div>{isLogged && <Button title="Sair" />}</div>
    </S.Container>
  )
}
