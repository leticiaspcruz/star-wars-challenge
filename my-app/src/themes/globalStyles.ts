import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    :root {
        font-size: 1rem;
        line-height: 1.5;
    }

    body {
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        transition: background-color 0.3s ease;
    }
`;

export default GlobalStyles;
