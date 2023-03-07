import styled from 'styled-components';
import {FC, ReactNode} from 'react';

export const StyledText = styled.h2`
  color: ${({color}: any) => color || '#000000'};
  font-size: ${({size}: any) => size || '16px'};
  font-weight: 400;
  margin: ${({margin}: any) => margin || 0};
`
type TextType = {
    children: ReactNode
    color?: string
    size?: string
    margin?: string;
}

export const Text:FC<TextType> = (props) => {
    return <StyledText {...props} />
}