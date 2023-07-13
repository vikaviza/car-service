import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    html, body {
        font-family: 'Manrope', sans-serif;
        display: block;
        margin: auto;
        padding: 0;
        width: 1924px;
        min-height: 100vh;
}
`

export default GlobalStyles;