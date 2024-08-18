import React, { useState, useContext } from 'react';
import AuthContext from '../../auth/AuthContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import { 
    LoginFormCenter, 
    FormControlInputStyle, 
    ButtonLinkGroup, 
    LineStyle 
} from '../../styles/LoginPageStyled';


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
    const { login, isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = (cellPhoneOrEmailText, password) => {
        login(cellPhoneOrEmailText, password)
        .then(({ error_code }) => {
            if (!error_code) {
                console.log("Authentication success");
            }
            else if (error_code === 404){
                navigate("/login", { replace: true, state: { error_code: error_code, username: ''} });
            }
            else if (error_code === 401) {
                navigate("/login", { replace: true, state: { error_code: error_code, username: cellPhoneOrEmailText } });
            }
            else {
                console.log(`error code ${error_code}`);
            }
        });
    };

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
                        onClick={() => handleLogin(cellPhoneOrEmailText, password)}
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