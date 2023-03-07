// import {StyledTitle } from './title.styles'
//
// export default StyledTitle

import styled from 'styled-components';
import {FC, ReactNode} from 'react';

export const StyledTitle = styled.h2`
  color: ${props => props.color};
  font-size: ${({size}: any) => size || '35px'};
  font-weight: 900;
  margin: ${({margin}: any) => margin || 0};
`
type TitleType = {
    children: ReactNode
    color: string
    size?: string
    margin?: string;
}
// export const title:FC<TitleType> = ({children, color}) => {
//     return <StyledTitle color={color}>
//         {children}
//     </StyledTitle>
// }

//  == OR
export const Title:FC<TitleType> = (props) => {
    return <StyledTitle {...props} />
}