import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Manrope', sans-serif;
        display: block;
        margin: auto;
        padding: 0;
        max-width: 1924px;

}
`

export default GlobalStyles;