import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { 
    Container, 
    MoveToCenter,
    Title,
    Paragraph,
    Card,
    LoginFormCenter,
    ButtonLinkGroup,
    LineStyle,
    ModalHeaderStyle,
    TitleCloseBtnGroupStyle,
    SignUpHeaderTitleStyle,
    SignUpHeaderParagraphStyle,
    CommentStyle,
    SignUpButtonCenter,
    FormCheckStyle
} from './styles/LoginPageStyled';


const LoginButtonStyle = {
    width: '100%',
    margin: 'auto'
};

const ForgotPasswordLinkStyle = {
    margin: 'auto',
    padding: '16px 0'
};

const CreateNewAccountButtonStyle = {
    width: '33.333%',
    margin: 'auto',
    padding: '8px'
};

const SpaceStyle = {
    margin: '8px 16px'
};

const SignUpFormCloseBtnStyle = {
    fontSize: '32px', 
    border: 'none', 
    background: 'none'
};

const GenderRadioStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
};


const DropDownListYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    const options = [];

    for(let y = year; y >= 1905; y--) {
        options.push(y);
    }

    return (
        <Form.Select>
            <option>{year}</option>
            {options.map((y, index) => <option value={y}>{y}</option>)}
        </Form.Select>
    );
};

const DropDownListMonth = () => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const options = Array.from(Array(12).keys()).map((m, index) => m + 1);

    return (
        <Form.Select>
            <option>{month}月</option>
            {options.map((m, index) => <option value={m}>{m}月</option>)}
        </Form.Select>
    );
};

const DropDownListDay = () => {
    const date = new Date();
    const day = date.getDate();
    const options = Array.from(Array(31).keys()).map((m, index) => m + 1);

    return (
        <Form.Select>
            <option>{day}</option>
            {options.map((d, index) => <option value={d}>{d}</option>)}
        </Form.Select>
    );
};

const DropDownListGenderAlias = () => {
    return (
        <Row style={{padding: '12px 12px'}}>
            <Form.Select>
                <option>選擇人稱代名詞</option>
                <option>她: 「祝她生日快樂！」</option>
                <option>他: 「祝他生日快樂！」</option>
                <option>他們: 「祝他們生日快樂！」</option>
            </Form.Select>
            <CommentStyle>你的人稱代名詞會向所有人顯示。</CommentStyle>
            <Form.Control type="text" placeholder="性別（選填）" />
        </Row>
    );
};

const GenderRadio = () => {
    const [show, setShow] = useState(false);

    return (
        <Form.Group className="mb-3">
            <Form.Label>性別</Form.Label>
            <Row lg={3}>
                <Col style={GenderRadioStyle}>
                    <FormCheckStyle 
                        reverse 
                        type="radio" 
                        label="女性" 
                        name="gender" 
                        value="female"
                        onChange={() => setShow(false)}
                    />
                </Col>
                <Col style={GenderRadioStyle}>
                    <FormCheckStyle 
                        reverse 
                        type="radio" 
                        label="男性" 
                        name="gender" 
                        value="male" 
                        onChange={() => setShow(false)}
                    />
                </Col>
                <Col style={GenderRadioStyle}>
                    <FormCheckStyle
                        reverse 
                        type="radio" 
                        label="自訂" 
                        name="gender" 
                        value="other"
                        onChange={() => setShow(true)}
                    />
                </Col>
            </Row>
            {show && <DropDownListGenderAlias />}
        </Form.Group>
    );
};

const SignUpForm = ({show, handleClose}) => {
    return (
        <Modal show={show}>
            <Modal.Header>
                <ModalHeaderStyle>
                    <TitleCloseBtnGroupStyle>
                        <SignUpHeaderTitleStyle>註冊</SignUpHeaderTitleStyle>
                        <button type="button" 
                            class="close"
                            data-dismiss="modal"
                            onClick={handleClose}
                            style={SignUpFormCloseBtnStyle}
                        >
                            ×
                        </button>
                    </TitleCloseBtnGroupStyle>
                    <SignUpHeaderParagraphStyle>快速又簡單。</SignUpHeaderParagraphStyle>
                </ModalHeaderStyle>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Row>
                            <Col lg={6}>
                                <Form.Control type="text" placeholder="姓氏" />
                            </Col>
                            <Col lg={6}>
                                <Form.Control type="text" placeholder="名字" />
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="手機號碼或電子郵件" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="設定密碼" />
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>出生日期</Form.Label>
                        <Row>
                            <Col lg={4}><DropDownListYear /></Col>
                            <Col lg={4}><DropDownListMonth /></Col>
                            <Col lg={4}><DropDownListDay /></Col>
                        </Row>
                    </Form.Group>

                    
                    <GenderRadio />

                    <Form.Group className="mb-3">
                        <CommentStyle>
                            使用我們服務的用戶可能上傳了你的聯絡資料到 Facebook。 
                            <Link>瞭解詳情。</Link>
                        </CommentStyle>

                        <CommentStyle>
                            點擊「註冊」即表示你同意我們的<Link>《服務條款》</Link>、<Link>《隱私政策》</Link>和 
                            <Link>《Cookie 政策》</Link>。你可能會收到我們的簡訊通知，而且可以隨時選擇停止接收。
                        </CommentStyle>
                    </Form.Group>
                    <SignUpButtonCenter>
                        <Button variant="success" style={CreateNewAccountButtonStyle}>註冊</Button>
                    </SignUpButtonCenter>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

const LoginForm = () => {
    const [showSignUpForm, setShowSignUpForm] = useState(false);
    const handleClose = () => setShowSignUpForm(false);

    return (
        <LoginFormCenter>
            <Form style={{width: '100%', paddingRight: '32px'}}>
                <Form.Control 
                    type="text" 
                    placeholder="電子郵件地址或手機號碼"
                    style={SpaceStyle}
                />
                <Form.Control 
                    type="password" 
                    placeholder="密碼"
                    style={SpaceStyle}
                />
                <ButtonLinkGroup>
                    <Button 
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

const LoginPage = () => {
    return (
        <Container>
            <Row className='h-100'>
                <Col lg={6} className='h-100'>
                    <MoveToCenter>
                        <Title>facebook</Title>
                        <Paragraph>Facebook，讓你和親朋好友保持聯繫，隨時分享生活中的每一刻。</Paragraph>
                    </MoveToCenter>
                </Col>
                <Col lg={6} className='h-100'>
                    <MoveToCenter>
                        <Card>
                            <LoginForm />
                            <div style={{textAlign: 'center'}}>
                                為名人、品牌或商家<b>建立粉絲專頁</b>。
                            </div>
                        </Card>
                    </MoveToCenter>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginPage;