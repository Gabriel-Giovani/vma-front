import React from 'react';
import { Button } from './styles';

export default (props) => {
    const { children, type } = props;

    return (
        <Button type={type}>
            { children }
        </Button>
    );
};