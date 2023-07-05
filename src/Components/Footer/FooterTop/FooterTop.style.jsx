import styled from 'styled-components';
import * as color from '../../Styles/ColorPalette.style';
import * as text from '../../Styles/Text.style';
import * as heading from '../../Styles/Headings.style';

export const FooterT = styled.div`
    height: 549px;
    background-color: ${color.Black};
    color: ${color.White};
    padding-block: 128px;
    display: flex;
`;

export const FooterLeft = styled.div`
    width: 463px;
    margin: 0 193px 0 320px;
    display: flex;
    flex-direction: column;
`;

export const FooterHeading = styled.div`
    ${heading.HeadingH3};
`;

export const Social = styled.div`
    margin-top: 64px;
`;

export const FacebookIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 23.67px;
`;

export const TwitterIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 23.67px;
`;

export const InstagramIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 23.67px;
`;

export const LinkedinIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 23.67px;
`;

export const FooterRight = styled.div`
    width: 471px;
    height: 292px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Help = styled.div`

`;

export const Help1 = styled.p`
    ${text.Body01};
    color: #FFF;
    margin: 0;

`;

export const Help2 = styled.p`
    ${text.Title02};
    color: #FFF;
    margin: 0;
`;

export const Address = styled.div`

`;

export const Address1 = styled.p`
    ${text.Body01};
    color: #FFF;
    margin: 0;
`;

export const Address2 = styled.p`
    ${text.Title02};
    color: #FFF;
    margin: 0;
`;

export const OpenTime = styled.div`

`;

export const OpenTime1 = styled.p`
    ${text.Body01};
    color: #FFF;
    margin: 0;
`;

export const OpenTime2 = styled.p`
    ${text.Title02};
    color: #FFF;
    margin: 0;
`;
