import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from "@fortawesome/free-solid-svg-icons";
import DefaultMaleUser from '../../images/anonymous-avatars-grey-circles/anonymous_avatars_grey_circles_male1.jpg';
import DefaultFemaleUser from '../../images/anonymous-avatars-grey-circles/anonymous_avatars_grey_circles_female1.jpg'
import LinkToUserCustom from '../Header/LinkToUserCustom';
import styled from 'styled-components';

const HeaderStyle = styled.header`
    background-color: #18191a;
    width: 100vw;
    height: 60px;
    padding: 12px 0;
    z-index: 1;
    position: fixed;
`;

const HeaderStartStyle = styled.div`
    display: flex;
    align-items: center;
    padding: 0 16px;

    & > *:not(:last-child) {
        padding-right: 8px;
    }
`;

const HeaderMiddleStyle = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 16px;
`;

const HeaderEndStyle = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 16px;

    & > *:not(:last-child) {
        padding-right: 24px;
    }
`;

const FontAwesomeIconStyle = styled(FontAwesomeIcon)`
    font-size: 36px;
    color: #e2e5e9;
`;

const UserIconStyle = styled.div`
    /* avoid user highlighting this region */
    user-select: none;
    -moz-user-select: none;  /* Mozilla-specific values */
    -webkit-user-select: none;   /* WebKit-specific values */

    /* the region of the circle to indicate there is a block showing after clicking the user icon */
    &::before {
        position: absolute;
        content: '';
        display: flex;
        justify-content: center;
        align-items: center;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: #18191a;
        z-index: 1;
        transform: translate(150%, 150%);
    }
    /* display downward arrow */
    &::after {
        position: absolute;
        content: '';
        border: solid #fff;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 2px;
        transform: translate(-8px, 28px) rotate(45deg);
        z-index: 2;
    }

    &:active {
        transform: scale(80%);
        transition: all 0.2s;
    }
`;

const BoxContentStyle = styled.div`
    position: absolute;
    right: 16px;
    width: 300px;
    height: 540px;
    font-size: 24px;
    color: #fff;
    background-color: #18191a;
`;


const Messenger = () => {
    return (
        <div>This is the messenger.</div>
    );
};

const Notification = () => {
    return (
        <div>News</div>
    );
};



const BoxContent = ({ children }) => {
    return (
        <BoxContentStyle>
            {children}
        </BoxContentStyle>
    );
};

const Header = () => {
    const [showMessenger, setShowMessenger] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [showUserCustom, setShowUserCustom] = useState(false);

    const handleMessenger = () => {
        setShowMessenger(!showMessenger);
        setShowUserCustom(false);
        setShowNotification(false);
    }

    const handleNotify = () => {
        setShowNotification(!showNotification);
        setShowUserCustom(false);
        setShowMessenger(false);
    }

    const handleUserCustom = () => {
        setShowUserCustom(!showUserCustom);
        setShowNotification(false);
        setShowMessenger(false);
    }

    return (
        <HeaderStyle>
            <Row>
                <Col lg={3}>
                    <HeaderStartStyle>
                        <Link to="/">
                            <FontAwesomeIconStyle icon={fab.faFacebook} />
                        </Link>
                        <Form.Control type="text" name="search" placeholder="搜尋Facebook" />
                    </HeaderStartStyle>
                </Col>
                <Col lg={6}>
                    <HeaderMiddleStyle>
                        <FontAwesomeIconStyle icon={fas.faHouseChimneyWindow} />
                        <FontAwesomeIconStyle icon={fas.faUserGroup} />
                        <FontAwesomeIconStyle icon={fas.faUsersLine} />
                    </HeaderMiddleStyle>
                </Col>
                <Col lg={3}>
                    <HeaderEndStyle>
                        <FontAwesomeIconStyle icon={fab.faFacebookMessenger} onClick={handleMessenger}/>
                        <FontAwesomeIconStyle icon={fas.faBell} onClick={handleNotify}/>
                        <UserIconStyle onClick={handleUserCustom}>
                            <Image 
                                src={DefaultMaleUser}
                                alt="default"
                                width={36}
                                style={{borderRadius: "50%"}}
                            />
                        </UserIconStyle>
                    </HeaderEndStyle>
                </Col>
            </Row>
            {showUserCustom && <BoxContent><LinkToUserCustom /></BoxContent>}
            {showMessenger && <BoxContent><Messenger /></BoxContent>}
            {showNotification && <BoxContent><Notification /></BoxContent>}
        </HeaderStyle>
    );
};

export default Header;