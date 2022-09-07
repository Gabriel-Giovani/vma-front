import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px 0;
    border-radius: 4px;
    background-color: #FFF;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    & .ant-spin {
        margin-bottom: 15px;
    }
`;