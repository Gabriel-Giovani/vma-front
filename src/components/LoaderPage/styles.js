import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    position: absolute;
    width: 100%;
    background-color: rgba(238, 181, 63, .98);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: visibility .5s ease, opacity .5s ease;

    & .-visible {
        visibility: visible;
        opacity: 1;
    }

    &.-unvisible {
        visibility: hidden;
        opacity: 0;
    }

    & .ant-spin {
        width: 70px;
        height: 70px;

        & .ant-spin-dot {
            width: 100%;
            height: 100%;

            & i {
                width: 30px;
                height: 30px;
                background-color: #FFF;
            }
        }
    }
`;