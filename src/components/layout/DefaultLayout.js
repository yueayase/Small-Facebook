import React from 'react';
import Header from './Header';
import styled from 'styled-components';
import Container from '../../common/Container';

const DefaultStyle = styled.div`
    background-color: #000;
`;

const DefaultLayout = ({ children }) => {
    return (
        <DefaultStyle>
            <Header />
            <Container>{children}</Container>
        </DefaultStyle>
    );
};

export default DefaultLayout;