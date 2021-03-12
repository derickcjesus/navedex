import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --black: #212121;
        --placeholder-text: #9E9E9E;
    }

    body {
        height: 100vh;
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93, 75%;
        }
    }

    button {
        cursor: pointer;
    }
`