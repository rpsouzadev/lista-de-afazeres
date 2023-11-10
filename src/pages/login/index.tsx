import * as S from './styles'

import { useLogin } from '../../hooks/useLogin'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Login() {
  const { errors, register, handleSubmit, handleSignIn } = useLogin()

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
