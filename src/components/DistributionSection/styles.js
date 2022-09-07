import styled from 'styled-components';
import DistributionBackground from '../../assets/images/distribution-background.png';

export const Container = styled.div`
    background-image: url(${DistributionBackground});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: #181818;
    padding: 160px 0px 160px 100px;

    @media(max-width: 991px) {
        padding: 160px 40px;
    }

    @media(max-width: 575px) {
        padding: 100px 10px;
    }
`;

export const DistributionTexts = styled.div`
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    @media(max-width: 991px) {
        align-items: center;
    }
`;

export const DistributionBiggerTitle = styled.h5`
    font-size: 130px;
    color: #eeb53f;
    font-weight: 700;
    text-transform: uppercase;

    @media(max-width: 745px) {
        font-size: 90px;
        margin-bottom: 20px;
    }

    @media(max-width: 575px) {
        font-size: 70px;
        margin-bottom: 20px;
    }
`;

export const DistributionSmallerTitle = styled.h6`
    font-size: 90px;
    color: #eeb53f;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: -60px;
    margin-bottom: 0;

    @media(max-width: 745px) {
        font-size: 50px;
    }

    @media(max-width: 575px) {
        font-size: 30px;
    }
`;

export const DistributionDescription = styled.h5`
    font-size: 16px;
    color: #FFF;
    text-align: justify;
    width: 660px;

    @media(max-width: 991px) {
        width: 100%;
    }
`;

export const YellowLine = styled.hr`
    height: 2px;
    width: 80px;
    background-color: #eeb53f;
    border: none;
    margin: 0;
    margin-top: 30px;

    @media(max-width: 991px) {
        display: none;
    }
`;