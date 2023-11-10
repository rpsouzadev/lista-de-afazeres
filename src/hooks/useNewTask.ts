import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { formTaskSchema } from '../schemas/formTaskSchema'
import { zodResolver } from '@hookform/resolvers/zod'

import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { TaskData } from '../redux/type'
import { addTask } from '../redux/taskSlice'

type FormData = z.infer<typeof formTaskSchema>

export function useNewTask() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formTaskSchema),
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleSaveTask({ title, description }: FormData) {
    try {
      const task: TaskData = {
        id: Date.now().toString(),
        title,
        description,
      }

      dispatch(addTask(task))

      navigate('/')
    } catch (error) {}
  }

  return { errors, register, handleSubmit, handleSaveTask }
}
