import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  textarea {
    width: 100%;
    resize: none;
    min-height: 120px;
    max-height: 20px;
    padding: 8px 16px;
    border-radius: 6px;
    border: 2px solid ${({ theme }) => theme.colors.green[500]};
    background-color: ${({ theme }) => theme.colors.gray[600]};
    color: ${({ theme }) => theme.colors.gray[100]};
  }
`
export const label = styled.span`
  color: ${({ theme }) => theme.colors.gray[300]};
`
export const ErrorMessage = styled.span`
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.red[500]};
`
