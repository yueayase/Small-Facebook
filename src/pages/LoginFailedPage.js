import React, { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import AuthContext from '../auth/AuthContext';
import { 
    Container, 
    MoveToCenter,
    LoginFailedTitle,
    Card, 
    LoginFormCenter,
    LoginFailedFormTitle,
    FormControlInputStyle,
    FormControlFeedbackStyle,
    ButtonLinkGroup,
 } from "../styles/LoginPageStyled";

const ForgotPasswordLinkStyle = {
    margin: 'auto',
    padding: '16px 0',
    fontSize: '18px'
};

const LoginFailedPage = () => {
    const location = useLocation();
    const { error_code, username } = location.state
    const [cellPhoneOrEmail, setcellPhoneOrEmail] = useState(username);
    const [password, setPassword] = useState("");
    const [currentError, setCurrentError] = useState(error_code);
    const { login, isAuthenticated, navigate } = useContext(AuthContext);

    useEffect(() => {
        if (isAuthenticated) {
            console.log("redirect");
            navigate("/", { replace: true });
        }
    }, [isAuthenticated, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        login(cellPhoneOrEmail, password)
        .then(({ error_code }) => {
            setCurrentError(error_code);
            console.log("error_code", error_code);
            if(!error_code){
                navigate("/", { replace: true });
            }
            else if(error_code === 404){
                setPassword("");
            }
        });
    };
    
    return (
        <Container>
            <MoveToCenter>
                <LoginFailedTitle>facebook</LoginFailedTitle>
                <Card>
                    <LoginFormCenter>
                        <Form style={{width: '100%', padding: '32px'}} noValidate onSubmit={handleSubmit}>
                            <LoginFailedFormTitle>登入Facebook</LoginFailedFormTitle>
                            <Form.Group className="mb-3">
                                <FormControlInputStyle
                                    type="text"
                                    value={cellPhoneOrEmail}
                                    onChange={(e) => setcellPhoneOrEmail(e.target.value)}
                                    isInvalid={currentError === 404}
                                    placeholder="電子郵件地址或手機號碼"
                                />
                                <FormControlFeedbackStyle
                                    type="invalid"
                                    tooltip
                                    displayTooltip={currentError === 404}
                                    arrow_scale="-150%"
                                >
                                    你輸入的電子郵件地址或手機號碼並未與帳號連結。
                                    <Link>尋找你的帳號並登入。</Link>
                                </FormControlFeedbackStyle>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <FormControlInputStyle
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    isInvalid={currentError === 401}
                                    placeholder="密碼"
                                />
                                <FormControlFeedbackStyle
                                    type="invalid"
                                    tooltip
                                    displayTooltip={currentError === 401}
                                    arrow_scale="-150%"
                                >
                                    你輸入的密碼不正確。
                                    <Link>忘記密碼？</Link>
                                </FormControlFeedbackStyle>
                            </Form.Group>
                            <ButtonLinkGroup>
                                <Button type="submit">登入</Button>
                                <Link style={ForgotPasswordLinkStyle}>
                                    忘記密碼?
                                </Link>
                            </ButtonLinkGroup>
                        </Form>
                    </LoginFormCenter>
                </Card>
            </MoveToCenter>
        </Container>
    );
};

export default LoginFailedPage;