import * as S from './styles'
import { Pencil, Trash } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { TaskData } from '../../redux/type'

import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { removeTask } from '../../redux/taskSlice'

type CardTaskProps = {
  data: TaskData
}

export function CardTask({ data }: CardTaskProps) {
  const { colors } = useTheme()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleRemoveTask(id: string) {
    dispatch(removeTask({ id }))
  }

  function handleEditTask(id: string) {
    if (id) {
      navigate(`/editar-tarefa/${id}`)
    }
  }

  return (
    <S.Container>
      <S.Content>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </S.Content>

      <S.Icon>
        <Pencil
          size={25}
          color={colors.gray[100]}
          onClick={() => handleEditTask(data.id)}
        />

        <Trash
          size={25}
          color={colors.red[700]}
          onClick={() => handleRemoveTask(data.id)}
        />
      </S.Icon>
    </S.Container>
  )
}
