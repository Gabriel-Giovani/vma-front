import styled from 'styled-components';

export const CarouselContainer = styled.div`
    position: relative;
    top: 100px;
    margin-bottom: 100px;
    height: calc(100vh - 100px);

    @media(max-width: 1199px) {
        height: calc(70vh - 100px);
    }

    @media(max-width: 763px) {
        height: calc(50vh - 100px);
    }

    @media(max-width: 575px) {
        height: 600px;
    }

    & .slide {
        height: calc(100vh - 100px);

        @media(max-width: 1199px) {
            height: calc(70vh - 100px);
        }

        @media(max-width: 763px) {
            height: calc(50vh - 100px);
        }

        @media(max-width: 575px) {
            height: 600px;
        }

        & div img {
            height: calc(100vh - 100px);
            object-fit: cover;

            @media(max-width: 1199px) {
                height: calc(70vh - 100px);
            }

            @media(max-width: 763px) {
                height: calc(50vh - 100px);
            }

            @media(max-width: 575px) {
                height: 600px;
            }
        }
    }
`;

export const WhatsappLink = styled.a`
    display: flex;
    align-items: center;
    position: fixed;
    padding: 18px;
    top: 30%;
    right: 0;
    background-color: #FFF;

    & svg {
        color: #EE5134;
        font-size: 35px;
        margin-right: 10px;
    }
`;

export const WhatsappLinkDescription = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
`;

export const DescriptionBiggerText = styled.span`
    color: #EE5134;
    font-size: 16px;
    font-weight: bold;
`;

export const DescriptionSmallerText = styled.span`
    font-size: 14px;
    margin-top: -5px;
`;

export const SocialLinksBar = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 75px;
    background-color: #000;
    margin: 0 auto;
    position: relative;
    top: -50px;

    & p {
        margin: 0;
        color: #8c8c98;
        font-size: 16px;
        text-transform: uppercase;
    }

    & div {
        display: flex;
        gap: 5px;
    }

    & svg {
        color: #EE5134;
        font-size: 22px;
    }
`;