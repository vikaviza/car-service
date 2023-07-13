import styled from 'styled-components';
import * as color from '../../Components/Styles/ColorPalette.style';
import * as text from '../../Components/Styles/Text.style';
import * as heading from '../../Components/Styles/Headings.style';
import { ReactComponent as Circle } from '../../assets/img/Circle.svg';
import { ReactComponent as Arrow } from '../../assets/img/Arrow.svg';

export const Quote = styled.div`
    width: 1922px;
    height: 894px;
    background-color: ${color.Steelgrey};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const QuoteLeft = styled.div`
    width: 584px;
    height: 638px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const HeadingH2 = styled.h2`
    ${heading.HeadingH2};
    color: ${color.Black};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-style: normal;
    font-weight: 800;
    line-height: 76px;
    letter-spacing: -1.74px;
`;

export const Feature = styled.div`
    width: 385px;
    height: 105px;
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
`;

export const Body023 = styled.p`
    opacity: 0.6000000238418579;
    display: flex;
    width: 322px;
    flex-direction: column;
`;

export const FeatureText = styled.div`

`;

export const Link = styled.div`
    width: 320px;
    height: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
`;

export const LinkText = styled.div`
    ${text.Body01};
    color: ${color.Black};
    font-style: normal;
    font-weight: 600;
    line-height: 175%;
    margin-left: 63px;
`;

export const LinkArrow = styled(Arrow)`

`;

export const CircleIcon = styled(Circle)`
    width: 47px;
    height: 47px;
`;

export const FeatureCircle = styled.div`
    width: 47px;
    height: 47px;
    position: relative;
`;

export const Feature1Icon = styled.img`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    position: absolute;
    top: 11.5px;
    left: 11.5px;
`;

export const Feature2Icon = styled.img`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    position: absolute;
    top: 11.5px;
    left: 11.5px;
`;

export const Feature3Icon = styled.img`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    position: absolute;
    top: 11.5px;
    left: 11.5px;
`;

export const QuoteRight = styled.div`
    width: 625px;
    height: 562px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const HeadingH3 = styled.h3`
    ${heading.HeadingH3}
    margin: 0;
`;

export const QuoteForm = styled.form`
    width: 100%;
`;

export const InputWhite = styled.input`
    width: 624px;
    height: 72px;
    padding-left: 40px;
    border-radius: 2px;
    border: 0;
    margin: 4px;
`;


