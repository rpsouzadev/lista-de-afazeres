import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    max-width: 10rem;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.gray[100]};

      :hover {
        color: ${({ theme }) => theme.colors.gray[300]};
      }
    }
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
