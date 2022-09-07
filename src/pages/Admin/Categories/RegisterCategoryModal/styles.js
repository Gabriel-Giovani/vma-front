import styled from 'styled-components';

export const Container = styled.div`
    & .ant-form {
        margin-top: 30px;

        & .ant-input, & .ant-select-selector {
            height: 40px;
            border-radius: 4px;
            display: flex;
            align-items: center;
        }
    }
`;

export const FormButtonBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
`;

export const FormButton = styled.button`
    height: 40px;
    border: 1px solid #4081EC !important;
    background-color: transparent;
    color: #4081EC;
    text-transform: uppercase;
    font-weight: 500;
    border: none;
    border-radius: 4px;
    transition: .3s ease;
    cursor: pointer;

    &:hover {
        background-color: #4081EC;
        color: #FFF;
    }
`;