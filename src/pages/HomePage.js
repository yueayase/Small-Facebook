import React, { useContext } from 'react';
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import AuthContext from '../auth/AuthContext';

const HomePage = () => {
    const { isAuthenticated } = useContext(AuthContext);

    return isAuthenticated ? <MainPage /> : <LoginPage />;

};

export default HomePage;