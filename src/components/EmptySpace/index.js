import React from 'react';
import EmptySpaceImage from '../../assets/images/empty-space.png';
import { Container, Image, Title, Text } from './styles';

export default (props) => {
    const { title, text, style } = props;

    return (
        <Container style={style}>
            <Image src={EmptySpaceImage} />
            <Title>{ title }</Title>
            <Text>{ text }</Text>
        </Container>
    );
}