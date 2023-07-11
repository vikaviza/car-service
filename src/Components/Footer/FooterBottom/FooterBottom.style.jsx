import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/img/Logo2.svg';
import * as color from '../../Styles/ColorPalette.style';
import * as text from '../../Styles/Text.style';


export const FooterB = styled.nav`
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${color.Black};
    margin: -1px;
`;

export const Logo2 = styled(Logo)`
    &:hover {
        cursor: pointer;
    }
`;

export const FooterBottomMenu = styled.div`
    height: 28px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const NavLink = styled(Link)`
    padding-inline: 20px;
    text-decoration: none;
    font-weight: 600;
    ${text.Body02};
    color: ${color.White};
    opacity: 1;
`;

export const Copyright = styled.p`
    ${text.Body02};
    color: #939191;
`