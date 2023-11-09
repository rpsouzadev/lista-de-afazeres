import * as S from './styles'
import { CardTask } from '../../components/CardTask'

export function Home() {
  return (
    <S.Container>
      <S.Content>
        <h1>Seus afazeres</h1>

        <CardTask />
      </S.Content>
    </S.Container>
  )
}
