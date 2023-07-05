import React from 'react';
import { StyledButton, ButtonText } from './Button.style';

const Button = (props) => {
    return (
        <div>
            <StyledButton>
                <ButtonText {...props}>{props.text}</ButtonText>
            </StyledButton>
        </div>
    );
};

export default Button;