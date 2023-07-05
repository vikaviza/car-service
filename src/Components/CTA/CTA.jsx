import React from 'react';
import Button from '../Styles/Buttons/ButtonSecondary/ButtonSecondary'
import { 
    StyledCTA, 
    Orange, 
    CTAHeading,
    Image1,
    Image2
} from './CTA.style';

const CTA = () => {
    return (
        <StyledCTA>
            <Image1 src={require('../../assets/img/CTA1.jpg')} alt='' />
            <Image2 src={require('../../assets/img/CTA2.jpg')} alt='' />
            <Orange>
                <CTAHeading>
                    Get in touch with us for your service related query
                </CTAHeading>
                <Button text='Contact Us'/>
            </Orange>
        </StyledCTA>
    );
};

export default CTA;