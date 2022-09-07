import styled from 'styled-components';

export const Button = styled.div`
    padding: 10px;
    border-radius: 100%;
    transition: .3s ease;

    &:hover {
        background-color: ${props => props.type === 'delete' ? 'rgba(234, 79, 52, .5)' : 'rgba(66, 133, 244, .3)'};
    }
`;