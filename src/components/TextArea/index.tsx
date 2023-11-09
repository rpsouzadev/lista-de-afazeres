import * as S from './styles'
import { TextareaHTMLAttributes, forwardRef } from 'react'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  errorMessage: string | undefined
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, errorMessage, ...rest }, ref) => {
    return (
      <S.Container>
        <S.label> {label} </S.label>
        <textarea ref={ref} {...rest} />

        {errorMessage && <S.ErrorMessage> {errorMessage} </S.ErrorMessage>}
      </S.Container>
    )
  },
)
