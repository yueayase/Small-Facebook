import React, { useContext } from "react";
import AuthContext from "../auth/AuthContext";
import Header from "../components/layout/Header";

const MainPage = () => {
    const { logout } = useContext(AuthContext);
    return (
        <div>
            {/* Hello there.
            <span style={{cursor: "pointer"}} onClick={() => logout()}>
                登出
            </span> */}
            <Header />
        </div>
    );
};

export default MainPage;