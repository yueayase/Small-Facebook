import React, { useContext, useEffect } from "react";
import AuthContext from "../auth/AuthContext";
import DefaultLayout from "../components/layout/DefaultLayout";
import ClearFix from "../common/ClearFix";

const UserSettingPrivacy = () => {
    const { isAuthenticated, authLoading, navigate } = useContext(AuthContext);
    
    useEffect(() => {
        if (!authLoading && !isAuthenticated)
            navigate("/", { replace: true });
    }, [isAuthenticated, navigate]);

    return (
        <DefaultLayout>
            <ClearFix />
            You can change your personal setting or privacy here.
        </DefaultLayout>
    );
};

export default UserSettingPrivacy;