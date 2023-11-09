import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  max-width: 40rem;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.gray[600]};
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 20rem;
  gap: 1rem;
`
