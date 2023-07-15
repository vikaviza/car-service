import styled from 'styled-components';
import * as color from '../../Components/Styles/ColorPalette.style';
import * as text from '../../Components/Styles/Text.style';
import * as heading from '../../Components/Styles/Headings.style';
import { ReactComponent as BrandLogo1 } from '../../assets/img/BrandLogo1.svg';
import { ReactComponent as BrandLogo2 } from '../../assets/img/BrandLogo2.svg';
import { ReactComponent as BrandLogo3 } from '../../assets/img/BrandLogo3.svg';
import { ReactComponent as BrandLogo4 } from '../../assets/img/BrandLogo4.svg';
import { ReactComponent as BrandLogo5 } from '../../assets/img/BrandLogo5.svg';

export const Brands = styled.div`
    height: 611px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-block: 128px 81.64px;
`;

export const BrandsHeadingH3 = styled.h3`
    ${heading.HeadingH3};
    color: ${color.Black};
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 67.2px */
    letter-spacing: -1.44px;
`;

export const BrandRow = styled.div`
    width: 1280px;
    height: 127.879px;
    display: flex;
    justify-content: space-between;
`;

export const StyledBrandLogo1 = styled(BrandLogo1)`

`;

export const StyledBrandLogo2 = styled(BrandLogo2)`

`;

export const StyledBrandLogo3 = styled(BrandLogo3)`

`;

export const StyledBrandLogo4 = styled(BrandLogo4)`

`;

export const StyledBrandLogo5 = styled(BrandLogo5)`

`;