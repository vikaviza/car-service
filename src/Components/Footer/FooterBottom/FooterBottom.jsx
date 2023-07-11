import React from 'react';
import { 
    FooterB,
    FooterBottomMenu,
    NavLink,
    Logo2,
    Copyright
} from './FooterBottom.style';



const FooterBottom = () => {
    return (
        <FooterB>
            <NavLink to='/'>
                <Logo2 />
            </NavLink>

            <FooterBottomMenu>

                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About us</NavLink>
                <NavLink to='/services'>Services</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                <NavLink to='/contact'>Contact</NavLink>

            </FooterBottomMenu> 

            <Copyright>
                @ Copyright Finsweet 2021
            </Copyright>
        </FooterB>
    );
};

export default FooterBottom;