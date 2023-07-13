import styled from 'styled-components';
import * as color from '../../Components/Styles/ColorPalette.style';
import * as text from '../../Components/Styles/Text.style';
import * as heading from '../../Components/Styles/Headings.style';
import { ReactComponent as Stars } from '../../assets/img/Stars.svg';
import { ReactComponent as Clock } from '../../assets/img/Clock.svg';
import { ReactComponent as Image } from '../../assets/img/Header.svg';

// HEADER
export const Header = styled.header`
    width: 1300px;
    height: 632px;
    display: flex;
    margin: 80px 320px 128px 320px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const HeaderText = styled.div`
    width: 624px;
    height: 452px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const HeadingH1 = styled.h1`
    ${heading.HeadingH1};
    font-weight: 800;
    margin: 0;
`;

export const Open = styled.div`
    width: 374.984px;
    height: 56px;
    display: flex;
    align-items: center;
`;

export const StyledClock = styled(Clock)`
    width: 30.938px;
    height: 30.938px;
    margin-right: 13.05px;
`;

export const OpenText = styled.div`
    height: 56px;
`;

export const Caption = styled.p`
    ${text.Caption};
    color: ${color.Grey};
    margin: 0;
`;

export const Body01 = styled.p`
    ${text.Body01};
    color: ${color.Black};
    margin: 0;
`;

export const HeaderImage = styled.div`
    width: 655px;
    height: 632px;
    position: relative;
    text-align: center;
`;

export const Rating = styled.div`
    width: 326px;
    height: 102px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px;
    background-color: ${color.White};
    border: 12px solid rgba(225, 225, 225,.5);
    box-shadow: 0px 28px 118px 0px rgba(109, 108, 115, 0.12);
    border-radius: 59px;
    position: absolute;
    bottom: 81px;
    right: 0;
`;

export const RatingText = styled.div`
    text-align: center;
`;

export const Title021 = styled.p`
    ${text.Title02};
    margin: 0;
`;

export const Title02 = styled.p`
    ${text.Title02};
    margin: 0;
`;

export const StyledStars = styled(Stars)`
    margin-left: 15px;
`;

export const Service = styled.div`
    width: 281.635px;
    height: 102px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 32px;
    background-color: ${color.White};
    border: 12px solid rgba(225, 225, 225, 0.43);
    box-shadow: 0px 28px 118px 0px rgba(109, 108, 115, 0.12);
    border-radius: 59px;
    border-radius: 59px;
    position: absolute;
    top: 81px;
    left: 0;
    z-index: 1;
`;

export const Circle = styled.div`
    width: 69.662px;
    height: 70px;
    flex-shrink: 0;
    border-radius: 100%;
    background-color: ${color.Mint};
    color: ${color.White};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`;

export const Body02 = styled.p`
    ${text.Body02};
    color: ${color.White};
`;

export const Title022 = styled.p`
    ${text.Title02}
    display: flex;
    width: 184px;
    flex-direction: column;
    flex-shrink: 0;
`;

export const StyledImage = styled(Image)`

`;