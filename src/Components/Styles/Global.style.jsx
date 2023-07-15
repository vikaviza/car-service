import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        width: 1920px;
        height: 100%;
        margin: 0 auto;
        font-family: 'Manrope', sans-serif;
}
`;

export default GlobalStyles;