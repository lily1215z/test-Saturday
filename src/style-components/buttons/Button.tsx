import styled, {css, keyframes} from 'styled-components';
import {FC, ReactNode} from 'react';

const rotateAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`
export const StyleButton = styled.button`
  max-width: ${({width}: any) => width || '70px'};
  width: 100%;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  border: none;
  padding: 5px 10px;
  background-color: ${({color}) => color || 'green'};
  border-radius: 5px;
  cursor: pointer;

  &:focus {
    outline: transparent;
  }

  &:hover {
      //animation: ${rotateAnimation} 1s infinite linear;
    color: #b8bbba;
  }

  ${(props: any) => props.primary && css`
    color: ${(props: any) => props.color || '#ffffff'};
    background: ${(props: any) => props.background || '#092a98'};
  `}
`


type ButtonType = {
    onClick?: any
    children: ReactNode
    color?: string
    width?: string
    primary?: boolean
}
export const Button: FC<ButtonType> = (props) => {
    return <StyleButton type="submit" {...props} />
}