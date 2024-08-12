import * as formik from 'formik';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import GenderRadio from './GenderRadio';
import { DropDownListYear, DropDownListMonth, DropDownListDay } from './DropDownList';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    FormControlInputStyle, 
    FormControlFeedbackStyle, 
    CommentStyle, 
    SignUpButtonCenter 
} from '../../styles/LoginPageStyled';

const CreateNewAccountButtonStyle = {
    width: '33.333%',
    margin: 'auto',
    fontSize: '18px',
    padding: '12px'
};

const ModalBodyForm = ({ handleClose, setShowErrorDialog }) => {
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
            ),
        gender: yup.string().required("請選擇性別。你之後可以變更此資料的分享對象。"),
        genderAlias: yup.number().required("請輸入你的人稱代名詞。").min(1, "請輸入你的人稱代名詞。")
    });

    // call restful api to send data to the backend 
    const passDataToBackend = (values) => {
        console.log("test line 259:", values);
        const api_url = process.env.REACT_APP_API_BASE_URL + "/signup";

        axios.post(api_url, {
            name: `${values.firstName} ${values.lastName}`,
            EmailOrCellPhoneNumber: values.EmailOrCellPhoneNumber,
            password: values.password,
            birthday: `${values.year}-${values.month}-${values.day}`,
            gender: values.gender,
            genderAlias: values.genderAlias
        })
        .then(res => {
            handleClose();
            setShowErrorDialog(false);
            console.log(res);
        })
        .catch(err => {
            setShowErrorDialog(true);
            console.log(err.response.data.error);
        });
    };

    return (
        <Formik
            validationSchema={schema}
            onSubmit={passDataToBackend} 
            initialValues={{
                firstName: '',
                lastName: '',
                EmailOrCellPhoneNumber: '',
                password: '',
                year: new Date().getFullYear(),
                month: new Date().getMonth() + 1,
                day: new Date().getDate(),
                gender: '',
                genderAlias: 0
            }}
        >
            {({ 
                handleSubmit, 
                handleChange, 
                handleBlur, 
                setFieldValue,
                setFieldTouched,
                values, 
                touched, 
                errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                    <Form.Group as={Col} lg={6} className="position-relative">
                             <FormControlInputStyle 
                                type="text" 
                                name="lastName"
                                value={values.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.lastName && !!errors.lastName}
                                placeholder="姓氏" 
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
                        <Form.Group as={Col} lg={6} className="position-relative">
                            <FormControlInputStyle 
                                type="text" 
                                name= "firstName" 
                                value={values.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.firstName && !!errors.firstName}
                                placeholder="名字" 
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
                            <Col lg={4}>
                                <DropDownListYear setFieldValue={setFieldValue} values={values} />
                            </Col>
                            <Col lg={4}>
                                <DropDownListMonth setFieldValue={setFieldValue} values={values} />
                            </Col>
                            <Col lg={4}>
                                <DropDownListDay setFieldValue={setFieldValue} values={values} />
                            </Col>
                        </Row>
                    </Form.Group>
                    
                    <GenderRadio  
                        setFieldValue={setFieldValue} 
                        setFieldTouched={setFieldTouched} 
                        values={values}
                        touched={touched}
                        errors={errors}
                    />
        
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

export default ModalBodyForm;