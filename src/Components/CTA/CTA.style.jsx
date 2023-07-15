import styled from 'styled-components';
import * as heading from '../Styles/Headings.style';
import * as color from '../Styles/ColorPalette.style';

export const StyledCTA = styled.div`
    display: flex;
    height: 502px;
`;

export const Image1 = styled.img`
    width: 50%;
`;

export const Image2 = styled.img`
    width: 50%;
`;

export const Orange = styled.div`
    background-color: ${color.Primary};
    color: ${color.White};
    height: inherit;
    width: 729px;
    position: absolute;
    z-index: 2;
    margin-left: 318px;
    display: flex;
    flex-direction: column;
    padding: 128px 80px;
`;

export const CTAHeading = styled.div`
    ${heading.HeadingH3};
    margin-bottom: 48px;
`;