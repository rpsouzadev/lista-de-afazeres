import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { formSignInSchema } from '../schemas/formSignInSchema'
import { zodResolver } from '@hookform/resolvers/zod'

import { useAuth } from '../contexts/authContext'

type SignInFormData = z.infer<typeof formSignInSchema>

export function useLogin() {
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

  return { register, errors, handleSubmit, handleSignIn }
}
