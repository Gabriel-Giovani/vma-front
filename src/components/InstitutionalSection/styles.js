import styled from 'styled-components';

export const Container = styled.div`
    height: 600px;
    background-color: #FFF;
    padding: 85px 150px;
`;

export const SectionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const TitleBox = styled.div`
    display: flex;
    align-items: center;
`;

export const RedLine = styled.hr`
    height: 4px;
    width: 40px;
    background-color: #EF624E;
    border: none;
    margin-right: 20px;
    margin-top: -10px;
`;

export const TitleText = styled.h3`
    text-transform: uppercase;
    font-size: 48px;
    font-weight: bold;
    letter-spacing: 2px;
    margin-bottom: 20px;
`;

export const Description = styled.p`
    font-size: 16px;
    color: #464646;
    max-width: 735px;
    text-align: center;
`;

export const CategoriesList = styled.div`
    margin-top: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
`;

export const CategoryButton = styled.button`
    border: 1px solid #d1d1d1;
    background-color: #FFF;
    height: 50px;
    padding: 0 30px;
    text-transform: uppercase;
    font-size: 13px;
    color: #474646;
    cursor: pointer;
    transition: .3s ease;

    &:hover {
        background-color: #cd3935;
        color: #FFF;
    }

    &.-selected {
        background-color: #cd3935;
        color: #FFF;
    }
`;

export const PlayIcon = styled.img`
`;

export const ProductsList = styled.div`
`;

export const ProductCard = styled.div`
    border: 1px solid #d1d1d1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const GreyLine = styled.hr`
    border: 1px solid #d1d1d1;
    width: 100%;
    margin: 0;
    margin-top: 20px;
`;

export const BoxProductName = styled.div`
    border: 1px solid #d1d1d1;
    position: relative;
    top: -15px;
    font-size: 13px;
    color: #d22d28;
    font-weight: bold;
    text-transform: uppercase;
    padding: 3px 18px;
    background-color: #FFF;
`;

export const WeightInfos = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 5px;
    margin-bottom: 15px;
`;

export const InfoTitle = styled.span`
    font-size: 13px;
    color: #444;
    font-weight: bold;
`;

export const InfoBadge = styled.div`
    padding: 0 2px;
    border-radius: 10px;
    background-color: #f23a35;
    color: #FFF;
`;

export const ProductDetails = styled.div`
    width: 100%;
`;

export const DetailBox = styled.div`
    background-color: #E8E8E8;
    width: 100%;
    text-align: center;
    border: 1px solid #FFF;
`;

export const DetailTitle = styled.span`
    font-size: 13px;
    font-weight: bold;
`;

export const DetailText = styled.span`
    font-size: 13px;
    margin-right: 5px;
`;