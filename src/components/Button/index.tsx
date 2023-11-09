import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return <S.Container {...rest}>{title}</S.Container>
}
