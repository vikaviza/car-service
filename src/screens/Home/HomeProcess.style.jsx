import styled from 'styled-components';
import * as color from '../../Components/Styles/ColorPalette.style';
import * as text from '../../Components/Styles/Text.style';
import * as heading from '../../Components/Styles/Headings.style';
import { ReactComponent as Circle } from '../../assets/img/ProcessCircle.svg'

export const Process = styled.div`
    height: 527px;
    margin: 128px 513px 128px 320px;
    display: flex;
    justify-content: space-between;
`;

export const ProcessLeft = styled.div`
    width: 524px;
    height: 396px;
    margin-right: 131px;
`;

export const Body024 = styled.p`
    ${text.Body02};
    width: 437px;
`;


export const ProcessRight = styled.div`
    width: 432px;
    height: 527px;
    display: flex;
    flex-direction: column;
`;

export const Step = styled.div`
    width: 432px;
    height: 165px;
    margin: 16px;
    display: flex;
    justify-content: space-between;
`;

export const CircleContainer = styled.div`
    width: 72px;
    height: 165px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const Circle1 = styled(Circle)`
    position: relative;
`;

export const CircleText = styled.p`
    position: absolute;
`;

export const Line = styled.img`
    width: 2px;
    height: 71px;
    border: 2px dashed ${color.Primary};
`;

export const StepText = styled.p`
    width: 336px;
    height: 152px;
    flex-shrink: 0;
`;

export const Title023 = styled.p`
    ${text.Title02};
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: -0.96px;
    margin: 0;
`;

export const Body012 = styled.p`
    ${text.Body01};
    ${color.Black};
    font-style: normal;
    font-weight: 600;
    line-height: 175%;
    opacity: 0.6000000238418579;
`;