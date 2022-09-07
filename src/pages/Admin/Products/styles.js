import styled from 'styled-components';

export const Container = styled.div`

`;

export const WelcomeTitle = styled.h2`
    font-weight: 700;
    font-size: 28px;
    color: #29292E;
    margin-bottom: 35px;
    text-transform: uppercase;
`;

export const SubtitlePage = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const RegisterButton = styled.button`
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

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 45px;
    margin-top: 16px;

    & .card-item {
        border-radius: 8px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

        & .col-photo {
            & .photo {
                width: 64px;
                height: 64px;
            }
        }

        & .col-name {
            display: flex;
            align-items: center;
            justify-content: flex-start;

            & .name {
                font-weight: 700;
                font-size: 24px;
            }
        }

        & .col-actions {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;

            & .button-delete {
                cursor: pointer;
            }

            & .anticon {
                font-size: 25px;
                color: #737380;
            }
        }

        & .title-item {
            font-weight: 700;
            font-size: 24px;
            color: #29292E;
            text-transform: uppercase;
            margin-bottom: 15px;
        }

        & .description-item {
            font-weight: 500;
            font-size: 14px;
            color: #737380;
            margin-bottom: 20px;
        }
    }
`;