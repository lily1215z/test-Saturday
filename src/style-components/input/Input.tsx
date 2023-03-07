import styled from 'styled-components';
import {FC} from 'react';

const StyledInput = styled.input`
  width: 100%;
  padding: 5px 7px;
  background-color: #e8e8e8;
  border: none;
  font-size: 18px;
  line-height: 24px;
  border-radius: 5px;

  &:focus {
    outline: transparent;
  }
`

type InputStyleType = {
    placeholder: string
    type: string
    name: string
    onChange?: any
    value?: string
    required?: any
    id?: string
}
export const Input: FC<InputStyleType> = (props) => {
    return <StyledInput {...props} />
}