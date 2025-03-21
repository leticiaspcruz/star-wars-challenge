import { styled } from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-conter: center;
    align-items: center;
    margin: ${({ theme }) => theme.sizes.sm} auto;
    gap: ${({ theme }) => theme.sizes.sm};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: ${({ theme }) => theme.fontSizes.xs} !important;

    button {
        font-size: ${({ theme }) => theme.fontSizes.xs} !important;
    }
`;