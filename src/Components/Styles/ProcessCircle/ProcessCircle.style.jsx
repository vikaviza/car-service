import styled from 'styled-components';
import * as color from '../ColorPalette.style';
import { ReactComponent as CircleBtm } from '../../../assets/img/CircleBottom.svg';

export const StyledCircle = styled.div`
    width: 72px;
    height: 72px;
    background-color: ${color.Secondary};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
`

export const CircleText = styled.p`
    color: #FFF;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    margin: 0;
    position: absolute;
`

export const CircleBottom = styled(CircleBtm)`
    margin: 0;
`;