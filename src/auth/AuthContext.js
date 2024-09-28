import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authLoading, setAuthLoading] = useState(true);
    const [username, setUsername] = useState("");
    const [userCoverImage, setUserCoverImage] = useState("");
    const [userIcon, setUserIcon] = useState("");
    const authMyFacebookKey = "MyFacebook:auth_allowed";
    const navigate = useNavigate();

    useEffect(() => {
        const syncUserAuthInformation = async () => {
            try {
                const authInfo = JSON.parse(localStorage.getItem(authMyFacebookKey));
                if (authInfo && authInfo.accessToken) {
                    console.log("auth check");
                    const api_url = process.env.REACT_APP_API_BASE_URL + `/user/${authInfo.id}/profile`;
                    const res = await axios.get(api_url);
                    const { name, coverImage, userIcon } = res.data;

                    setIsAuthenticated(true);
                    setUsername(name);
                    setUserCoverImage(coverImage);
                    setUserIcon(userIcon);

                    console.log("test1", userCoverImage);
                    console.log("test2", userIcon);
                }
                
            }
            catch(error) {
                console.log(error);
            }
            finally {
                setAuthLoading(false);
            }
        }
        
        syncUserAuthInformation();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                authLoading,
                username,
                userCoverImage,
                userIcon,
                navigate,
                login: async (username, password) => {
                    const api_url = process.env.REACT_APP_API_BASE_URL + "/login";

                    try{
                        const res = await axios.post(api_url, { 
                            cellPhoneOrEmailText: username, 
                            password: password 
                        });

                        const { name, genderAlias, ...userStaticInfo } = res.data;
                        setUsername(name);

                        localStorage.setItem(authMyFacebookKey, JSON.stringify(userStaticInfo));
                        setIsAuthenticated(true);

                        return { error_code: null };
                    }
                    catch(error) {
                        setIsAuthenticated(false);
                        return { error_code: error.response.status };
                    }
                },
                logout: () => {
                    setIsAuthenticated(false);
                    setUsername("");
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