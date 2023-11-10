import { useState, useCallback, useEffect } from 'react'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formTaskSchema } from '../schemas/formTaskSchema'

import { useParams, useNavigate } from 'react-router-dom'

import { TaskData } from '../redux/type'
import { RootState } from '../redux/store'
import { updateTask } from '../redux/taskSlice'
import { useDispatch, useSelector } from 'react-redux'

type FormData = z.infer<typeof formTaskSchema>

type ParamsProps = {
  id: string
}

export function useEditTask() {
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

  return {
    isTask,
    errors,
    register,
    handleSubmit,
    handleSaveTask,
  }
}
