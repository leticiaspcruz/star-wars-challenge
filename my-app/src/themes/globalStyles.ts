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

    html{
        overflow-y: scroll;
        scroll-behavior: smooth;
    }

    *:focus{
        outline-offset: 3px;
    }

    body {
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        transition: background-color 0.3s ease;
    }
`;

export default GlobalStyles;
