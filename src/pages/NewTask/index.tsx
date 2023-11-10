import * as S from './styles'

import { useNewTask } from '../../hooks/useNewTask'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'

export function NewTask() {
  const { errors, register, handleSubmit, handleSaveTask } = useNewTask()

  return (
    <S.Container>
      <S.Content>
        <h1>Adicinar nova tarefa</h1>

        <S.Form onSubmit={handleSubmit(handleSaveTask)}>
          <Input
            label="Titulo"
            {...register('title')}
            errorMessage={errors.title?.message}
          />

          <TextArea
            label="Descrição"
            {...register('description')}
            errorMessage={errors.description?.message}
          />

          <Button title="Salvar" type="submit" />
        </S.Form>
      </S.Content>
    </S.Container>
  )
}
