import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 100vh;
    background-color: #f0f2f5;
`;

const MoveToCenter = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Title = styled.h1`
    color: #0866ff;
    font-weight: 800;
    font-size: 56px;
`;

const Paragraph = styled.p`
    font-weight: 400;
    font-size: 24px;
`;

const Card = styled.div`
    width: 600px;
    height: 480px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 3px 30px rgba(0, 0, 0, 0.3);
`;

const LoginFormCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin-bottom: 32px;
`;


const ButtonLinkGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

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

const LineStyle = styled.div`
    width: 100%;
    height: 1px;
    border-bottom: solid 1px #dadde1;
    margin: 20px 16px;
`;

const SpaceStyle = {
    margin: '8px 16px'
};

const ModalHeaderStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const TitleCloseBtnGroupStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const SignUpHeaderTitleStyle = styled.h1`
    font-size: 32px;
    font-weight: 800;
    margin: 0;
`;

const SignUpHeaderParagraphStyle = styled.p`
    color: #606770;
    font-size: 16px;
    margin: 0;
`;

const SignUpFormCloseBtnStyle = {
    fontSize: '32px', 
    border: 'none', 
    background: 'none'
};

const CommentStyle = styled.p`
    color: #606770;
    font-size: 14px;
    padding-left: 0;
`;

const SignUpButtonCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const GenderRadioStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '1px solid #dee2e6',
    borderRadius: '4px', 
    margin: '8px',
    padding: '8px'
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
        <div class="row" style={{padding: '8px 12px'}}>
            <Form.Select>
                <option>選擇人稱代名詞</option>
                <option>她: 「祝她生日快樂！」</option>
                <option>他: 「祝他生日快樂！」</option>
                <option>他們: 「祝他們生日快樂！」</option>
            </Form.Select>
            <CommentStyle>你的人稱代名詞會向所有人顯示。</CommentStyle>
            <Form.Control type="text" placeholder="性別（選填）" />
        </div>
    );
};

const GenderRadio = () => {
    const [show, setShow] = useState(false);

    return (
        <Form.Group className="mb-3">
            <Form.Label>性別</Form.Label>
            <div className='row'>
                <div className='col-lg-4' style={GenderRadioStyle}>
                    <Form.Check 
                        reverse 
                        type="radio" 
                        label="女性" 
                        name="gender" 
                        value="female"
                        onChange={() => setShow(false)}
                    />
                </div>
                <div className='col-lg-4' style={GenderRadioStyle}>
                    <Form.Check 
                        reverse 
                        type="radio" 
                        label="男性" 
                        name="gender" 
                        value="male" 
                        onChange={() => setShow(false)}
                    />
                </div>
                <div className='col-lg-4' style={GenderRadioStyle}>
                    <Form.Check 
                        reverse 
                        type="radio" 
                        label="自訂" 
                        name="gender" 
                        value="other"
                        onChange={() => setShow(true)}
                    />
                </div>
            </div>
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
                        <div className='row'>
                            <div className='col-lg-6'>
                                <Form.Control type="text" placeholder="姓氏" />
                            </div>
                            <div className='col-lg-6'>
                                <Form.Control type="text" placeholder="名字" />
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="手機號碼或電子郵件" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="設定密碼" />
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>出生日期</Form.Label>
                        <div className='row'>
                            <div className="col-lg-4"><DropDownListYear /></div>
                            <div className="col-lg-4"><DropDownListMonth /></div>
                            <div className="col-lg-4"><DropDownListDay /></div>
                        </div>
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
            <div className='row h-100' style={{height: '100%'}}>
                <div className='col-lg-6 h-100'>
                    <MoveToCenter>
                        <Title>facebook</Title>
                        <Paragraph>Facebook，讓你和親朋好友保持聯繫，隨時分享生活中的每一刻。</Paragraph>
                    </MoveToCenter>
                </div>
                <div className='col-lg-6 h-100'>
                    <MoveToCenter>
                        <Card>
                            <LoginForm />
                            <div style={{textAlign: 'center'}}>
                                為名人、品牌或商家<b>建立粉絲專頁</b>。
                            </div>
                        </Card>
                    </MoveToCenter>
                </div>
            </div>
        </Container>
    );
};

export default LoginPage;