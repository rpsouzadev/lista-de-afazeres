import styled from 'styled-components'

export const Container = styled.button`
  min-height: 30px;
  max-height: 30px;
  width: 100%;
  border-radius: 6px;
  border: none !important;
  background-color: ${({ theme }) => theme.colors.green[500]};
  color: ${({ theme }) => theme.colors.gray[100]};
  cursor: pointer;
  font-weight: bold;
`
