import styled from 'styled-components';

export const StyledButton = styled.button`
    width: auto;
    height: 64px;
    border: none;
    border-radius: 12px;
    padding: 16px 40px 16px 40px;
    display: block;
    background-color: #FF6433;
    display: flex;
    justify-content: center;
    align-items: center;
    display: inline-flex;

    &:hover {
        cursor: pointer;
    }
`

export const ButtonText = styled.p`
    width: auto;
    font-size: 18px;
    color: #FFFFFF;
    line-height: 25px;
`