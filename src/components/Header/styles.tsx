import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    width: 100%;
    max-width: 120px;
  }
`
export const Content = styled.form`
  display: flex;
  gap: 1rem;
`
export const Title = styled.h1`
  font-weight: bold;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.gray[100]};
`
