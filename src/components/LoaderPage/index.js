import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { Spin } from 'antd';

export default () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        displayLoaderPage();
    }, []);

    const displayLoaderPage = () => {
        setTimeout(() => {
            setVisible(false);
        }, 5000);
    };

    return (
        <Container className={visible ? '-visible' : '-unvisible'}>
            <Spin />
        </Container>
    );
}