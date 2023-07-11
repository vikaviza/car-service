import React from 'react';
import { 
    Nav,
    NavMenu,
    NavLink,
    Logo1,
    Assistance,
    AssistanceIcon,
    Text,
    Top,
    Bottom
} from './Navbar.style';



const Navbar = () => {
    return (
        <Nav>
            <NavLink to='/'>
                <Logo1 />
            </NavLink>

            <NavMenu>

                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About us</NavLink>
                <NavLink to='/services'>Services</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                <NavLink to='/contact'>Contact</NavLink>

                <Assistance>
                    <AssistanceIcon src={require('../../assets/img/assistanceicon.png')} alt='' />
                    <Text>
                        <Top>Road Assistance</Top>
                        <Bottom>1800 265 24 52</Bottom>
                    </Text>
                </Assistance>

            </NavMenu> 
        </Nav>
    );
};

export default Navbar;