import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #323232;
    padding: 78px 0;

    @media(max-width: 767px) {
        padding: 78px 20px;
    }

    @media(max-width: 575px) {
        padding: 78px 0;
    }
`;

export const ContactTitle = styled.h3`
    font-size: 42px;
    text-transform: uppercase;
    letter-spacing: 17px;
    font-weight: 700;
    color: #f7f7f7;
    border-bottom: 3px solid #eeb53f;
    padding: 0 100px 36px 100px;
    margin-bottom: 76px;

    @media(max-width: 575px) {
        font-size: 30px;
    }
`;

export const ContactItem = styled.div`
    display: flex;

    @media(max-width: 767px) {
        margin-bottom: 20px;
    }
`;

export const ContactIcon = styled.div`
    margin-right: 24px;

    & svg {
        font-size: 30px;
        color: #b3b3b3;
    }
`;

export const ContactDetails = styled.div`

`;

export const ContactDetailsBiggerText = styled.h5`
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #b3b3b3;
    font-weight: 700;
`;

export const ContactDetailsSmallerText = styled.h6`
    font-size: 16px;
    color: #999999;
`;

export const ContainerForm = styled.div`
    margin-top: 90px;
    padding: 40px 70px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    & .ant-col {
        padding: 0 !important;
    }

    & input {
        border: 2px solid #ededed;
        height: 50px;
        font-size: 16px;
        color: #999;
        margin-bottom: 15px;
    }

    & textarea {
        border: 2px solid #ededed;
        font-size: 16px;
        color: #999;
        margin-bottom: 15px;
    }

    & button {
        height: 50px;
        background-color: #eeb53f;
        color: #fff;
        text-transform: uppercase;
        font-size: 14px;
        letter-spacing: 1px;
        transition: .3s ease;

        &:hover, &::after, &:focus {
            background-color: #FFF;
            border: 1px solid #eeb53f;
            color: #eeb53f;
        }
    }

    @media(max-width: 575px) {
        padding: 20px 30px;
    }
`;