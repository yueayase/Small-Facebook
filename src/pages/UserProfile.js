import React, { useContext, useEffect } from "react";
import AuthContext from "../auth/AuthContext";
import UserProfileDefaultLayout from "../components/UserProfile/UserProfileDefaultLayout";


const UserProfile = () => {
    const { isAuthenticated, authLoading, navigate } = useContext(AuthContext);

    useEffect(() => {
        if (!authLoading && !isAuthenticated){
            console.log("redirect to HomePage", isAuthenticated);
            navigate("/", { replace: true });
        }
    }, [isAuthenticated, authLoading, navigate]);

    return (
        <UserProfileDefaultLayout>
            This is your personal profile.
        </UserProfileDefaultLayout>
    );
};

export default UserProfile;