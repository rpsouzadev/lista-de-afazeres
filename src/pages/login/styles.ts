import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.gray[600]};

  h1 {
    margin-bottom: 4rem;
    font-size: 2rem;
  }
`
export const Form = styled.form`
  display: flex;
  padding: 1rem 0;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 20rem;
  gap: 1rem;
`
