import { useEffect, useState, useCallback } from 'react'
import * as S from './styles'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../redux/store'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { useNavigate, useParams } from 'react-router-dom'
import { TaskData } from '../../redux/type'
import { updateTask } from '../../redux/taskSlice'

export const formTaskSchema = z.object({
  title: z.string().min(1, 'obrigatório.'),
  description: z.string().min(1, 'obrigatoria'),
})

type FormData = z.infer<typeof formTaskSchema>

type ParamsProps = {
  id: string
}

export function EditTask() {
  const [isTask, setIsTask] = useState<TaskData>({} as TaskData)

  const dispatch = useDispatch()
  const tasks = useSelector((state: RootState) => state.tasks)

  const { id } = useParams() as ParamsProps
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formTaskSchema),
  })

  const findTask = useCallback(() => {
    const task = tasks.find((task) => task.id === id)
    if (task) return setIsTask(task)
  }, [])

  function handleSaveTask({ title, description }: FormData) {
    const task: TaskData = {
      id: isTask.id,
      title,
      description,
    }

    dispatch(updateTask(task))

    navigate('/')
  }

  useEffect(() => {
    findTask()
  }, [id, findTask])

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
