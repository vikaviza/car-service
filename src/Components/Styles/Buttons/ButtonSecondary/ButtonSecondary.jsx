import React from 'react';
import { StyledButtonSecondary } from './ButtonSecondary.style';
import { ButtonText } from '../Button/Button.style'

const ButtonSecondary = (props) => {
    return (
        <div>
            <StyledButtonSecondary>
                    <ButtonText {...props}>{props.text}</ButtonText>
            </StyledButtonSecondary>
        </div>
    );
};

export default ButtonSecondary;