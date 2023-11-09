import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.gray[300]};
  text-align: justify;
`
export const Icon = styled.div`
  gap: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }
`
