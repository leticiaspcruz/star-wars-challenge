import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 1rem;
        line-height: 1.5;
    }

    html, body {
        height: 100%;
        width: 100%;
        overflow-x: hidden;
    }

    body {
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        transition: background-color 0.3s ease;
    }

    #__next {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
    }

    @media (max-width: 768px) {
        html, body {
            overflow-x: hidden;
        }

        #__next {
            padding: 0;
        }
    }
`;

export default GlobalStyles;
