import * as S from './styles'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'

export const formTaskSchema = z.object({
  title: z.string().min(1, 'obrigatório.'),
  description: z.string().min(1, 'obrigatoria'),
})

type FormData = z.infer<typeof formTaskSchema>

export function NewTask() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formTaskSchema),
  })

  function handleSaveTask({ title, description }: FormData) {
    console.log(title, description)
  }

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
