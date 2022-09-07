import React, { useEffect, useState } from 'react';
import {
    Container,
    Logo,
    FormTitle,
    ButtonLogin,
    LoginWrapperLeft,
    WrapperLeftDescription,
    LoginWrapperRight,
    FormLoginBox,
    FormLoginBoxLogo,
    FormContainer,
    FormGroup
} from './styles';
import { Form, Input, Row, Col, Button } from 'antd';
import {LoginOutlined} from '@ant-design/icons'
import LogoTitle from '../../../assets/images/crown-logo.png';
import { post } from '../../../services/api';
import AuthService from '../../../services/auth';
import LogoImage from '../../../assets/images/logo-footer.png';

export default () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [formError, setFormError] = useState(false);

    const handleEntryButonClick = async () => {
        const req = await post('/login', { username, password });

        if(req && !req.payload) {
            AuthService.Login(req);
        }
        else {
            setFormError('Senha ou e-mail inválidos!');
        }
    };

    return (
        <Container>
            <Row gutter={24}>
                <Col xl={12} lg={12} md={12} className='col-login-wrapper-left'>
                    <LoginWrapperLeft>
                        <WrapperLeftDescription>
                            <h2>Ambiente administrativo</h2>
                            <p>Grencie as informações do seu site</p>
                        </WrapperLeftDescription>
                    </LoginWrapperLeft>
                </Col>
                <Col xl={12} lg={12} md={12} sm={24}>
                    <LoginWrapperRight>
                        <FormLoginBox>
                            <FormLoginBoxLogo>
                                <img src={LogoImage}/>
                            </FormLoginBoxLogo>

                            <FormContainer>
                                <Form
                                    name="login"
                                    autoComplete="off"
                                >
                                    <FormGroup>
                                        <Form.Item
                                            name="username"
                                            rules={[{
                                                required: true,
                                                type: 'text',
                                                message: 'Informe seu username'
                                            }]}
                                            validateStatus={formError ? 'error' : ''}
                                        >
                                            <Input
                                                defaultValue={username}
                                                placeholder="Username"
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            name="password"
                                            rules={[{
                                                required: true,
                                                message: 'Informe sua senha!'
                                            }]}
                                            validateStatus={formError ? 'error' : ''}
                                            help={formError ? formError : ''}
                                        >
                                            <Input.Password
                                                defaultValue={password}
                                                placeholder="Senha"
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </Form.Item>
                                    </FormGroup>

                                    <Button
                                        className="btn-login"
                                        htmlType="submit"
                                        icon={<LoginOutlined />}
                                        onClick={handleEntryButonClick}
                                    >
                                        Entrar
                                    </Button>
                                </Form>
                            </FormContainer>
                        </FormLoginBox>
                    </LoginWrapperRight>
                </Col>
            </Row>
        </Container>
    );
};