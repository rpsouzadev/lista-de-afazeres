import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;

  h1 {
    font-weight: bold;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.gray[100]};
  }
`
export const Content = styled.section`
  width: 100%;
  max-width: 50rem;
  padding: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.gray[600]};
`
export const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 20rem;
  gap: 1rem;
`
