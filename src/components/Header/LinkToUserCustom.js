import React, { useContext, useState } from 'react';
import AuthContext from '../../auth/AuthContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UserCustomDivStyle = styled.div`
    margin: 0 8px;
    padding: 8px 12px;
    &:hover {
        background-color: #b3b6b7;
        cursor: pointer;
    }
`;

const LinkStyle = styled(Link)`
    text-decoration: none;
    color: #fff;
`;


const LinkToUserCustom = () => {
    const { username, logout } = useContext(AuthContext);
    const authMyFacebookKey = "MyFacebook:auth_allowed";
    const userInfo = JSON.parse(localStorage.getItem(authMyFacebookKey));

    return (
        <div>
            <LinkStyle to={`/${userInfo.url}`}>
                <UserCustomDivStyle>
                    {username}
                </UserCustomDivStyle>
            </LinkStyle>
            <LinkStyle to="/setting">
                <UserCustomDivStyle>
                    設定與隱私     
                </UserCustomDivStyle>
            </LinkStyle>
            <UserCustomDivStyle>
                顯示方式與無障礙環境
            </UserCustomDivStyle>
            <UserCustomDivStyle onClick={(e) => { e.stopPropagation(); logout(); }}>
                登出
            </UserCustomDivStyle>
        </div>
    );

}

export default LinkToUserCustom;