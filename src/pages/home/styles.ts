import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    padding-bottom: 2rem;
    color: ${({ theme }) => theme.colors.gray[100]};
  }
`
export const Content = styled.section`
  width: 100%;
  max-width: 50rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: auto;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.gray[600]};
`
