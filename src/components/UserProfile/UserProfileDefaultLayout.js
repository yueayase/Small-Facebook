import React from 'react';
import styled from 'styled-components';
import DefaultLayout from '../layout/DefaultLayout';
import ClearFix from '../../common/ClearFix';

const UserProfileSettingSection = styled.div`
    width: 100%;
    height: 960px;
    background-color: #1c2833;
`;

const UserProfileDefaultLayout = ({ children }) => {
    return (
        <DefaultLayout>
            <ClearFix />
            <UserProfileSettingSection>
                
            </UserProfileSettingSection>
            {children}
        </DefaultLayout>
    );
};

export default UserProfileDefaultLayout;