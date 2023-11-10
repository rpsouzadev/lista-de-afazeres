import * as S from './styles'

import { useEditTask } from '../../hooks/useEditTask'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'

export function EditTask() {
  const { errors, isTask, register, handleSubmit, handleSaveTask } =
    useEditTask()

  return (
    <S.Container>
      <S.Content>
        <h1>Editar tarefa</h1>

        <S.Form onSubmit={handleSubmit(handleSaveTask)}>
          <Input
            label="Titulo"
            {...register('title')}
            defaultValue={isTask.title}
            errorMessage={errors.title?.message}
          />

          <TextArea
            label="Descrição"
            {...register('description')}
            defaultValue={isTask.description}
            errorMessage={errors.description?.message}
          />

          <Button title="Salvar" type="submit" />
        </S.Form>
      </S.Content>
    </S.Container>
  )
}
