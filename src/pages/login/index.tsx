import * as S from './styles'
import { useAuth } from '../../contexts/authContext'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export const formSignInSchema = z.object({
  email: z
    .string()
    .min(1, 'O email é obrigatório.')
    .email('Formato de e-mail inválido. exemplo@email.com'),
  password: z.string().min(1, 'senha é obrigatoria'),
})

type SignInFormData = z.infer<typeof formSignInSchema>

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(formSignInSchema),
  })

  const { login } = useAuth()

  function handleSignIn({ email, password }: SignInFormData) {
    login(email, password)
  }

  return (
    <S.Container>
      <S.Content>
        <h1>Fazer Login</h1>

        <S.Form onSubmit={handleSubmit(handleSignIn)}>
          <Input
            label="Email"
            {...register('email')}
            errorMessage={errors.email?.message}
          />

          <Input
            label="Senha"
            type="password"
            {...register('password')}
            errorMessage={errors.password?.message}
          />

          <Button title="Entrar" />
        </S.Form>
      </S.Content>
    </S.Container>
  )
}
