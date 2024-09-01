import React, { useContext } from "react";
import AuthContext from "../auth/AuthContext";
import DefaultLayout from "../components/layout/DefaultLayout";
import ClearFix from "../common/ClearFix";

const MainPage = () => {
    return (
        <DefaultLayout>
            <ClearFix />
            Articles there.
        </DefaultLayout>
    );
};

export default MainPage;