import styled from "styled-components";

export const HeaderMenu = styled.nav`
    position: fixed;
    z-index: 9;
    height: 110px;
    width: 100%;
    background-color: #FFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 70px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

    @media(max-width: 575px) {
        padding: 0 20px;
    }
`;

export const Logo = styled.img`
    position: absolute;
    left: 250px;
    top: 30px;
    width: 230px;

    @media(max-width: 575px) {
        width: 200px;
    }
`;

export const NavList = styled.ul`
    list-style: none;
    display: flex;
    width: fit-content;
    padding: 0;
    gap: 20px;
    margin: 0;
    position: absolute;
    right: 150px;

    @media(max-width: 991px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    color: #EE5134;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 3px;
    font-family: 'Open Sans', sans-serif;
`;

export const RetiringMenu = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    padding: 20px;
    cursor: pointer;
    background-color: #EE5134;
`;

export const RetiringMenuLine = styled.div`
    width: 35px;
    height: 3px;
    background-color: #FFF;
    margin-bottom: 5px;
`;

export const MenuDropdown = styled.div`
    width: 100%;
    visibility: hidden;
    opacity: 0;
    transition: visibility .3s ease, opacity .2s ease;

    &.-visible {
        visibility: visible;
        opacity: 1;
    }
`;

export const NavListDropdown = styled.ul`
    background-color: #181818;
    position: absolute;
    top: 100px;
    left: 0;
    z-index: 9;
    list-style: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 20px 0;
    gap: 40px;
    margin: 0;
`;

export const RedSquare = styled.div`
    border: 6px solid #EE5134;
    width: 60px;
    height: 60px;
    position: absolute;
    right: 45px;
`;