import styled from 'styled-components';
import * as color from '../../Components/Styles/ColorPalette.style';
import * as text from '../../Components/Styles/Text.style';
import * as heading from '../../Components/Styles/Headings.style';

export const Experience = styled.div`
    height: 210px;
    background-color: ${color.Lightgrey};
    display: flex;
    justify-content: space-between;
    padding: 48px 325px 48px 318px;

`;

export const Number = styled.div`
    height: 114px;
`;

export const ExpH2 = styled.h2`
    ${heading.HeadingH2};
    font-style: normal;
    font-weight: 800;
    line-height: 76px; /* 131.034% */
    letter-spacing: -1.74px;
    color: ${color.Secondary};
`;

export const ExpTitle02 = styled.p`
    ${text.Title02};
    font-style: normal;
    font-weight: 600;
    line-height: 36px; /* 150% */
    letter-spacing: -0.72px;
    color: ${color.Black};
    opacity: 0.699999988079071;
`;