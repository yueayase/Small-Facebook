import React from 'react';
import Header from './Header';
import Container from '../../common/Container';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <Container>{children}</Container>
        </div>
    );
};

export default DefaultLayout;