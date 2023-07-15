import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/img/Logo1.svg';
import * as color from '../Styles/ColorPalette.style';
import * as text from '../Styles/Text.style';

export const Nav = styled.nav`
    height: 90px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const Logo1 = styled(Logo)`
    &:hover {
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
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
    opacity: 1;
`;

export const Assistance = styled.div`
    height: 42px;
    display: flex;
    align-items: center;
    border-left: 1px solid #939191;
`;

export const AssistanceIcon = styled.img`
    width: 40px; 
    height: 40px;
    margin: 20px;
`;

export const Text = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    color: ${color.Black};
`;

export const Top = styled.p`
    margin: 0;
    ${text.Caption};
`;

export const Bottom = styled.p`
    margin: 0;
    font-weight: 600;
    ${text.Body01};
`;