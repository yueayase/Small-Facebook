import React, { useContext } from "react";
import AuthContext from "../auth/AuthContext";

const MainPage = () => {
    const { logout } = useContext(AuthContext);
    return (
        <div>
            Hello there.
            <span style={{cursor: "pointer"}} onClick={() => logout()}>
                登出
            </span>
        </div>
    );
};

export default MainPage;