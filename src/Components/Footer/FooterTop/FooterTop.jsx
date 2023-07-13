import React from 'react';
import {
    FooterT,
    FooterLeft,
    FooterHeading,
    Social,
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    LinkedinIcon,
    FooterRight,
    Help1,
    Help2,
    Help,
    Address1,
    Address2,
    Address,
    OpenTime1,
    OpenTime2,
    OpenTime
} from './FooterTop.style';

const FooterTop = () => {
    return (
        <FooterT>
            <FooterLeft>
                <FooterHeading>
                    Get in touch with us for your service
                </FooterHeading>
                <Social>
                    <FacebookIcon src={require('../../../assets/img/facebook.png')} alt='' />
                    <TwitterIcon src={require('../../../assets/img/twitter.png')} alt='' />
                    <InstagramIcon src={require('../../../assets/img/instagram.png')} alt='' />
                    <LinkedinIcon src={require('../../../assets/img/linkedin.png')} alt='' />
                </Social>
            </FooterLeft>
            <FooterRight>
                <Help>
                    <Help1>Help line Number</Help1>
                    <Help2>1800 265 24 52</Help2>
                </Help>
                <Address>
                    <Address1>Address</Address1>
                    <Address2>NH 234 Public Square San Francisco 65368</Address2>
                </Address>
                <OpenTime>
                    <OpenTime1>We are open</OpenTime1>
                    <OpenTime2>Monday to Friday 9:00 AM to 10:00 AM</OpenTime2>
                </OpenTime>
            </FooterRight>
        </FooterT>
    );
};

export default FooterTop;