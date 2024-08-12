import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { 
    LoginFormCenter, 
    FormControlInputStyle, 
    ButtonLinkGroup, 
    LineStyle 
} from '../../styles/LoginPageStyled';
import SignUpForm from './SignUpForm';

const SpaceStyle = {
    margin: '8px 16px'
};

const LoginButtonStyle = {
    width: '100%',
    margin: 'auto',
    fontSize: '24px',
    padding: '8px'
};

const ForgotPasswordLinkStyle = {
    margin: 'auto',
    padding: '16px 0',
    fontSize: '18px'
};

const CreateNewAccountButtonStyle = {
    width: '33.333%',
    margin: 'auto',
    fontSize: '18px',
    padding: '12px'
};

const LoginForm = () => {
    const [showSignUpForm, setShowSignUpForm] = useState(false);
    const [cellPhoneOrEmailText, setCellPhoneOrEmailText] = useState("");
    const [password, setPassword] = useState("");
    const handleClose = () => setShowSignUpForm(false);

    return (
        <LoginFormCenter>
            <Form style={{width: '100%', paddingRight: '32px'}}>
                <FormControlInputStyle 
                    type="text" 
                    placeholder="電子郵件地址或手機號碼"
                    onChange={(e) => setCellPhoneOrEmailText(e.target.value)}
                    style={SpaceStyle}
                />
                <FormControlInputStyle 
                    type="password" 
                    placeholder="密碼"
                    onChange={(e) => setPassword(e.target.value)}
                    style={SpaceStyle}
                />
                <ButtonLinkGroup>
                    <Button 
                        onClick={() => { console.log(cellPhoneOrEmailText); console.log(password); }}
                        style={{...LoginButtonStyle, ...SpaceStyle}}
                    >
                        登入
                    </Button>
                    <Link style={ForgotPasswordLinkStyle}>
                        忘記密碼?
                    </Link>
                    <LineStyle />
                    <Button 
                        variant="success" 
                        style={CreateNewAccountButtonStyle}
                        onClick={() => setShowSignUpForm(true)}>建立新帳號</Button>
                        {showSignUpForm && <SignUpForm show={showSignUpForm} handleClose={handleClose}/>}
                </ButtonLinkGroup>
            </Form>
        </LoginFormCenter>
    );
};

export default LoginForm;