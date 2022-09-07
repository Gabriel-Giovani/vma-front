import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    body {
        margin: 0;
        padding: 0;
        background: #FFF;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-size: 15px;
        overflow-x: hidden !important;
        height: 100%;

        &.admin-body {
            overflow-y: hidden;
        }
    }

    html {
        height: 100%;
        scroll-behavior: smooth;
    }

    a {
        text-decoration: none;
        color: inherit;

        &:hover,
        &:focus,
        &:visited {
            text-decoration: none;
            color: inherit;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    b,
    i {
        margin: 0;
    }

    textarea {
        resize: none;
    }
`;

export default GlobalStyle;