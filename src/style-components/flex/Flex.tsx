import styled from 'styled-components';
import {FC, ReactNode} from 'react';

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props: any) => props.direction || 'row'};
  align-items: ${(props: any) => props.align || 'stretch'};
  justify-content: ${(props: any) => props.justify || 'stretch'};
  margin: ${({margin}: any) => margin || '0'};
`

type FlexStyleType = {
    children: ReactNode
    justify: string
}
export const Flex: FC<FlexStyleType> = (props) => {
    return <StyledFlex {...props} />
}