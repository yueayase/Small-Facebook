import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import * as formik from 'formik';
import * as yup from 'yup';

import { 
    Container, 
    MoveToCenter,
    Title,
    Paragraph,
    Card,
    LoginFormCenter,
    FormControlInputStyle,
    FormControlFeedbackStyle,
    ButtonLinkGroup,
    LineStyle,
    ModalHeaderStyle,
    TitleCloseBtnGroupStyle,
    SignUpHeaderTitleStyle,
    SignUpHeaderParagraphStyle,
    CommentStyle,
    SignUpButtonCenter,
    FormCheckStyle,
} from './styles/LoginPageStyled';


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

const ModalBodyForm = () => {
    const { Formik } = formik;

    // test regular expression: https://regex101.com/
    // Cell Phone Number : https://stackoverflow.com/questions/22378736/regex-for-mobile-number-validation
    // Email: https://regexr.com/3e48o
    // password: https://dev.to/rasaf_ibrahim/write-regex-password-validation-like-a-pro-5175 
    // (but here, I use simplified version)
    const schema = yup.object().shape({
        firstName: yup.string().required("你的姓氏?"),
        lastName: yup.string().required("你的名字?"),
        EmailOrCellPhoneNumber: yup.string().required("當你登入和需要重設密碼時，將需要使用此資料。")
            .matches(
                /(^(\+\d{1,3}[- ]?)?\d{10}$)|(^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$)/, 
                "請輸入合法的電話號碼或是合法的電子郵件地址。"
            ),
        password: yup.string()
            .required("請輸入含有數字、英文字母和標點符號（如!或&）的密碼組合，且至少由6個字元組成")
            .matches(
                /^([A-Za-z0-9]|(?=.*\w)).{6,}$/, 
                "請輸入含有數字、英文字母和標點符號（如!或&）的密碼組合，且至少由6個字元組成"
            )
    });

    return (
        <Formik
            validationSchema={schema}
            onSubmit={value => console.log(value)}
            initialValues={{
                firstName: '',
                lastName: '',
                EmailOrCellPhoneNumber: '',
                password: ''
            }}
        >
            {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} lg={6} className="position-relative">
                            <FormControlInputStyle 
                                type="text" 
                                name= "firstName" 
                                value={values.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.firstName && !!errors.firstName}
                                placeholder="姓氏" 
                            />
                            <FormControlFeedbackStyle 
                                type="invalid" 
                                tooltip 
                                displayTooltip={touched.firstName && !!errors.firstName}
                                arrow_scale="-150%"
                            >
                                {errors.firstName}
                            </FormControlFeedbackStyle>
                        </Form.Group>
                        <Form.Group as={Col} lg={6} className="position-relative">
                             <FormControlInputStyle 
                                type="text" 
                                name="lastName"
                                value={values.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.lastName && !!errors.lastName}
                                placeholder="名字" 
                            />
                            <FormControlFeedbackStyle 
                                type="invalid" 
                                tooltip 
                                displayTooltip={touched.lastName && !!errors.lastName}
                                arrow_scale="-150%"
                            >
                                {errors.lastName}
                            </FormControlFeedbackStyle>
                        </Form.Group>
                    </Row>
        
                    <Form.Group className="mb-3">
                        <FormControlInputStyle 
                            type="text" 
                            name="EmailOrCellPhoneNumber"
                            value={values.EmailOrCellPhoneNumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.EmailOrCellPhoneNumber && !!errors.EmailOrCellPhoneNumber}
                            placeholder="手機號碼或電子郵件" 
                        />
                        <FormControlFeedbackStyle 
                            type="invalid" 
                            tooltip 
                            displayTooltip={touched.EmailOrCellPhoneNumber && !!errors.EmailOrCellPhoneNumber}
                            arrow_scale="-150%"
                        >
                            {errors.EmailOrCellPhoneNumber}
                        </FormControlFeedbackStyle>
                    </Form.Group>
        
                    <Form.Group className="mb-3">
                        <FormControlInputStyle 
                            type="password" 
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.password && !!errors.password}
                            placeholder="設定密碼" 
                        />
                        <FormControlFeedbackStyle
                            type="invalid"
                            tooltip
                            displayTooltip={touched.password && !!errors.password}
                            arrow_scale="-200%"
                        >
                            {errors.password}
                        </FormControlFeedbackStyle>
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
                        <Button variant="success" type="submit" style={CreateNewAccountButtonStyle}>註冊</Button>
                    </SignUpButtonCenter>
                </Form>
            )}
        </Formik>
    );
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
                <ModalBodyForm />
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
                <FormControlInputStyle 
                    type="text" 
                    placeholder="電子郵件地址或手機號碼"
                    style={SpaceStyle}
                />
                <FormControlInputStyle 
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