import React, { useContext, useEffect } from "react";
import AuthContext from "../auth/AuthContext";
import DefaultLayout from "../components/layout/DefaultLayout";
import ClearFix from "../common/ClearFix";

const UserProfile = () => {
    const { isAuthenticated, navigate } = useContext(AuthContext);

    useEffect(() => {
        if (!isAuthenticated)
            navigate("/", { replace: true });
    }, [isAuthenticated, navigate]);

    return (
        <DefaultLayout>
            <ClearFix />
            This is your personal profile.
        </DefaultLayout>
    );
};

export default UserProfile;