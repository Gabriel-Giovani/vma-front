import styled from 'styled-components';

export const Footer = styled.footer`
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
        @media(max-width: 575px) {
            width: 80%;
        }
    }
`;