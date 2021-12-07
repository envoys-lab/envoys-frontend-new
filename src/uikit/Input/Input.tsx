import styled, { DefaultTheme } from 'styled-components'

const Input = styled.input`
  background-color: #f5f6f7;
  border: 0;
  border-radius: 14px;
  display: block;
  font-size: 16px;
  outline: 0;
  padding: 0 16px;
  width: 100%;
  height: 60px;
  border: 1px solid #e8e8ea;
  &::placeholder {
    color: #0f2b46;
    opacity: 0.3;
  }
  &:disabled {
    background-color: gray;
    box-shadow: none;
    // color: black;
    cursor: not-allowed;
  }
  &:focus:not(:disabled) {
    box-shadow: black;
  }
  background: white;
`

export default Input
