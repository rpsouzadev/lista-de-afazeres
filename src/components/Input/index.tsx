import * as S from './styles'
import { InputHTMLAttributes, forwardRef } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  errorMessage: string | undefined
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, errorMessage, ...rest }, ref) => {
    return (
      <S.Container>
        <S.label> {label} </S.label>
        <input ref={ref} {...rest} />

        {errorMessage && <S.ErrorMessage> {errorMessage} </S.ErrorMessage>}
      </S.Container>
    )
  },
)
