import styled from 'styled-components';

export const AdminContainer = styled.div`
    overflow-y: hidden;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90px;
    padding: 0 30px;
    border-bottom: 1px solid #E2E2E2;
`;

export const ItemsNavBox = styled.div`
    display: flex;
    gap: 20px;

    & a {
        color: #6F4BD8;
        font-size: 25px;
        cursor: pointer;
    }
`;

export const LogoHeader = styled.img`
    width: 300px;
`;

export const Container = styled.div`
    display: flex;
    background-color: #F8F8F8;
`;

export const Sidebar = styled.div`
    height: calc(100vh - 90px);
    width: 180px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 30px;
    background: rgba(0, 0, 0, 0.85);
    color: #FFF;
`;

export const PhotoUserBox = styled.div`
    margin-bottom: 75px;
    text-align: center;

    & p {
        font-size: 14px;
        font-weight: 300;
    }
`;

export const PhotoUser = styled.img`
    margin-bottom: 10px;
`;

export const NavMenu = styled.nav`

`;

export const ListMenuItems = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 0;
`;

export const ListItem = styled.li`
    font-weight: 800;
    font-size: 16px;
    display: flex;
    align-items: center;
    cursor: pointer;

    & .anticon {
        font-size: 25px;
        margin-right: 10px;
    }
`;

export const Content = styled.div`
    height: calc(100vh - 90px);
    width: 100%;
    background-color: #F8F8F8;
    padding: 70px 100px;
    overflow-y: scroll;

    &::-webkit-scrollbar-track {
        background-color: #F4F4F4;
    }
    &::-webkit-scrollbar {
        width: 6px;
        background: #F4F4F4;
    }
    &::-webkit-scrollbar-thumb {
        background: #dad7d7;
        border-radius: 8px;
    }
`;