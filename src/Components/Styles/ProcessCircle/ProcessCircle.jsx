import React from 'react';
import { StyledCircle, CircleText, CircleBottom } from './ProcessCircle.style';

const ProcessCircle = (props) => {
    return (
        <div>
            <StyledCircle>
                <CircleText {...props}>{props.text}</CircleText>
                <CircleBottom />
            </StyledCircle>
        </div>
    );
};

export default ProcessCircle;