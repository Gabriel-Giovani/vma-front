import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    AdminContainer,
    Header,
    ItemsNavBox,
    LogoHeader,
    Container,
    Sidebar,
    PhotoUserBox,
    PhotoUser,
    NavMenu,
    ListMenuItems,
    ListItem,
    Content
} from './styles';
import {
    UserOutlined,
    ExportOutlined,
    HomeOutlined,
    AppleOutlined,
    FolderOpenOutlined,
    IdcardOutlined,
    BankOutlined,
    FileDoneOutlined,
    EditOutlined,
    PlusCircleOutlined
} from '@ant-design/icons';
import LogoHeaderImage from '../../../assets/images/logo-footer.png';
import PhotoUserExample from '../../../assets/images/photo-user-example.png';
import AuthService from '../../../services/auth';

export default ({ children }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const body = document.querySelector('body');

        if(body)
            body.classList.add('admin-body');

        const authData = AuthService.getAuthData();

        if(authData)
            setUserData(authData);
        else
            window.location.href = '/admin/login';
    }, []);

    const logout = () => {
        AuthService.Logout();
    };

    return (
        <AdminContainer>
            <Header>
                <LogoHeader src={LogoHeaderImage} />

                <ItemsNavBox>
                    {/* <Link to="/admin/home">
                        <UserOutlined />
                    </Link> */}
                    <a href="javascript:void(0)" onClick={logout}>
                        <ExportOutlined/>
                    </a>
                </ItemsNavBox>
            </Header>

            <Container>
                <Sidebar>
                    <PhotoUserBox>
                        <PhotoUser src={PhotoUserExample} />
                        <p>{ userData ? userData.name : '' }</p>
                    </PhotoUserBox>

                    <NavMenu>
                        <ListMenuItems>
                            <Link to="/admin/products">
                                <ListItem>
                                    <AppleOutlined /> Produtos
                                </ListItem>
                            </Link>
                            <Link to="/admin/categories">
                                <ListItem>
                                    <FolderOpenOutlined /> Categorias
                                </ListItem>
                            </Link>
                            <Link to="/admin/banners">
                                <ListItem>
                                    <IdcardOutlined /> Banners
                                </ListItem>
                            </Link>
                        </ListMenuItems>
                    </NavMenu>
                </Sidebar>

                <Content>
                    { children }
                </Content>
            </Container>
        </AdminContainer>
    );
};