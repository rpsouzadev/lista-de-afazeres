import * as S from './styles'

import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

import { CardTask } from '../../components/CardTask'

export function Home() {
  const tasks = useSelector((state: RootState) => state.tasks)

  return (
    <S.Container>
      <S.Content>
        <h1>Seus afazeres</h1>

        {tasks.map((task) => (
          <CardTask key={task.id} data={task} />
        ))}
      </S.Content>
    </S.Container>
  )
}
