import styled from 'styled-components';

export const Container = styled.div`
    padding: 78px 0;
`;

export const BannerLinksContainer = styled.div`
    height: 100%;
`;

export const DescriptionContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;

    @media(max-width: 991px) {
        margin-top: 30px;
        text-align: center;
        padding: 0 10px;
    }
`;

export const Link = styled.div`
    position: relative;
    height: 100%;
    max-height: 530px;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    @media(max-width: 767px) {
        margin-bottom: 20px;
        max-height: 300px;
    }
`;

export const BackgroundCover = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .4);
`;

export const BannerLinkDetails = styled.div`
    position: absolute;
    bottom: 35px;
    left: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BannerIcon = styled.div`
    margin-right: 10px;

    & svg {
        font-size: 45px;
        color: #FFF;
    }
`;

export const BannerSmallerText = styled.h6`
    margin-bottom: 0;
    font-size: 14px;
    color: #FFF;
    font-weight: 300px;
    text-transform: uppercase;
`;

export const BannerBiggerText = styled.h5`
    margin-top: -6px;
    font-size: 23px;
    color: #FFF;
    font-weight: 700px;
    text-transform: uppercase;
`;

export const DescriptionTitle = styled.h4`
    font-size: 54px;
    color: #303239;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 50px;
    margin-bottom: 10px;
`;

export const DescriptionText = styled.p`
    font-size: 20px;
    color: #8c8c98;
    line-height: 30px;
    text-align: justify;

    @media(max-width: 991px) {
        text-align: center;
    }
`;

export const CrownsBackground = styled.div`
    margin-bottom: 10px;

    & img {
        width: 100%;
    }
`;

export const BlackLine = styled.hr`
    height: 2px;
    width: 160px;
    background-color: #000;
    border: none;
    margin: 0;
    margin-top: 30px;

    @media(max-width: 991px) {
        display: none;
    }
`;