import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const authMyFacebookKey = "MyFacebook:auth_allowed";
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const authInfo = JSON.parse(localStorage.getItem(authMyFacebookKey));
            if (authInfo && authInfo.accessToken) 
                setIsAuthenticated(true);
        }
        catch(error) {
            console.log(error);
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                navigate,
                login: async (username, password) => {
                    const api_url = process.env.REACT_APP_API_BASE_URL + "/login";

                    try{
                        const res = await axios.post(api_url, { 
                            cellPhoneOrEmailText: username, 
                            password: password 
                        });

                        localStorage.setItem(authMyFacebookKey, JSON.stringify(res.data));
                        setIsAuthenticated(true);

                        return { error_code: null };
                    }
                    catch(error) {
                        setIsAuthenticated(false);
                        return { error_code: error.response.status};
                    }
                },
                logout: () => {
                    setIsAuthenticated(false);
                    localStorage.removeItem(authMyFacebookKey);
                    navigate("/", { replace: true }); // redirect to the HomePage
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;