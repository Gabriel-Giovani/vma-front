import React from 'react';
import { Container } from './styles';
import { Spin } from 'antd';

export default () => {
    return (
        <Container>
            <Spin />
            <p>Carregando...</p>
        </Container>
    );
};