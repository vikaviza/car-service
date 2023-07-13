import styled from 'styled-components';
import * as color from '../../Components/Styles/ColorPalette.style';
import * as text from '../../Components/Styles/Text.style';
import * as heading from '../../Components/Styles/Headings.style';
import { ReactComponent as Diagnostics } from '../../assets/img/GridDiagnostics.svg';
import { ReactComponent as Engine } from '../../assets/img/GridEngine.svg';
import { ReactComponent as Wheel } from '../../assets/img/GridWheel.svg';
import { ReactComponent as Oil } from '../../assets/img/GridOil.svg';
import { ReactComponent as Body } from '../../assets/img/GridOil.svg';
import { ReactComponent as Batteries } from '../../assets/img/GridBattery.svg';
import { ReactComponent as Insurance } from '../../assets/img/GridInsurance.svg';
import { ReactComponent as Service } from '../../assets/img/GridService.svg';

export const Offer = styled.div`
    height: 1052px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${color.Lightgrey};
`

export const OfferTitle = styled.p`
    ${text.Title02};
    ${color.Black};
    font-style: normal;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: -0.72px;
`;

export const OfferHeading = styled.h2`
    ${heading.HeadingH2};
    ${color.Black};
    width: 858px;
    text-align: center;
    font-style: normal;
    font-weight: 800;
    line-height: 76px;
    letter-spacing: -1.74px;
    margin: 0px 0px 64px 0px;
`;

export const OfferGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 8px;
`;

export const GridItem = styled.div`
    width: 316px;
    height: 232px;
    background-color: ${color.White};
    text-align: center;
    padding: 70px;
`;

export const Title024 = styled.p`
    ${text.Title02};
    font-style: normal;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: -0.72px;
    margin: 10px;
`;

export const StyledDiagnostics = styled(Diagnostics)`

`;

export const StyledEngine = styled(Engine)`

`;

export const StyledWheel = styled(Wheel)`

`;

export const StyledOil = styled(Oil)`

`;

export const StyledBody = styled(Body)`

`;

export const StyledBatteries = styled(Batteries)`

`;

export const StyledInsurance = styled(Insurance)`

`;

export const StyledService = styled(Service)`

`;