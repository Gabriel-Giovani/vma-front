import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 60px;
    padding: 75px 125px;

    @media(max-width: 1199px) {
            padding: 75px 50px;
        }
`;

export const ColumnProductCategories = styled.div`
    height: 100%;

    @media(max-width: 991px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`;

export const ColumnProducts = styled.div`
    height: 100%;

    & .swiper-pagination {
        display: none;
    }

    & img {
        width: 315px;
        object-fit: cover;

        @media(max-width: 1199px) {
            width: 250px;
        }
    }

    @media(max-width: 991px) {
        & .item {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;

export const TitleColumnCategories = styled.div`
`;

export const SmallerText = styled.span`
    font-size: 13px;
    font-weight: 700;
    font-family: 'Open Sans', sans-serif;
    color: #17292d;
    text-transform: uppercase;
    letter-spacing: 3px;
`;

export const BiggerText = styled.h4`
    font-size: 60px;
    text-transform: uppercase;
    font-weight: 700;
    margin-top: -25px;

    @media(max-width: 575px) {
        font-size: 50px;
    }
`;

export const CategoriesList = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 15px;

    @media(max-width: 991px) {
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 30px;
    }
`;

export const CategorieButton = styled.button`
    text-transform: uppercase;
    border-radius: 0;
    border: 1px solid #000;
    height: 50px;
    padding: 0 30px;
    background-color: #FFF;
    font-size: 13px;
    cursor: pointer;
    transition: .3s ease;

    &:hover {
        background-color: #000;
        color: #FFF;
    }

    &.-selected {
        background-color: #000;
        color: #FFF;
    }
`;

export const SmallerTextContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const SmallerBlackLine = styled.hr`
    height: 1px;
    width: 35px;
    background-color: #000;
    border: none;
    margin: 0 20px 0 -50px;

    @media(max-width: 991px) {
        display: none;
    }
`;

export const YellowLine = styled.div`
    border: 2px solid #eeb53f;
    height: 100%;
    position: absolute;
    left: 0;
    top: 140px;

    @media(max-width: 991px) {
        display: none;
    }
`;