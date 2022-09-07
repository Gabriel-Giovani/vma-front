import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    
    & .ant-row, & .ant-col {
        height: 100%;
    }

    & .col-login-wrapper-left {
        @media(max-width: 767px) {
            display: none;
        }
    }
`;

export const LoginWrapperLeft = styled.div`
    background: linear-gradient(180deg, rgba(110, 8, 240, 0.75) 10.42%, rgba(240, 22, 8, 0.7) 48.96%, rgba(240, 119, 8, 0.75) 100%);
    height: 100%;
`;

export const WrapperLeftDescription = styled.div`
    position: absolute;
    bottom: 80px;
    left: 80px;
    width: 50%;

    & h2 {
        color: #FFF;
        font-weight: bold;
        font-size: 40px;
        line-height: 50px;
        margin-bottom: 20px;
    }

    & p {
        color: #F8D4C5;
        font-size: 30px;
    }
`;

export const LoginWrapperRight = styled.div`
    background-color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const FormLoginBox = styled.div`
    width: 70%;
    text-align: center;
`;

export const FormLoginBoxLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;

    & img {
        width: 100%;
    }
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    & .btn-login {
        background-color: #6E08F0;
        height: 50px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        color: #FFF;
        font-size: 16px;
        font-weight: 500;
        margin-top: 20px;
    
        &:disabled {
            background-color: #D8D8D8;
            color: #9B9B9B;
        }
    }
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    & .ant-input, & .ant-input-password, & .ant-select-selector {
        padding: 12px 16px !important;
        font-size: 16px;
        border-radius: 8px;
        border: 1px solid #A8A8B3;
        color: #414146;

        &::placeholder {
            color: #A8A8B3;
        }
    }

    & .ant-input-password {
        & .ant-input {
            padding: 0 !important;
        }
    }

    & .ant-select-selector {
        height: 51px;
        text-align: left;
    }

    & .ant-input-status-error,
    & .ant-input-affix-wrapper-status-error {
        border-color: #ff4d4f;
    }

    & .ant-form-item-explain-error {
        text-align: left;
    }

    & .ant-input-password {
        padding: 0 16px 0 0;

        & input {
            border: none !important;
        }
    }
`;