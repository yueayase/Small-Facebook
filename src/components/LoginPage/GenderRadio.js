import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { DropDownListGenderAlias } from './DropDownList'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormCheckStyle, FormControlFeedbackStyle } from '../../styles/LoginPageStyled';

const GenderRadioStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
};

const GenderRadio = ({ setFieldValue, setFieldTouched, values, touched, errors }) => {
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
                        onChange={() => {
                            setShow(false);
                            setFieldValue("gender", "female");
                            setFieldValue("genderAlias", 1);
                        }}
                    />
                </Col>
                <Col style={GenderRadioStyle}>
                    <FormCheckStyle 
                        reverse 
                        type="radio" 
                        label="男性" 
                        name="gender" 
                        value="male" 
                        onChange={() => {
                            setShow(false);
                            setFieldValue("gender", "male");
                            setFieldValue("genderAlias", 2);
                        }}
                    />
                </Col>
                <Col style={GenderRadioStyle}>
                    <FormCheckStyle
                        reverse 
                        type="radio" 
                        label="自訂" 
                        name="gender" 
                        value="other"
                        onChange={() => {
                            setShow(true);
                            setFieldValue("gender", "other");
                        }}
                    />
                </Col>
            </Row>
            <FormControlFeedbackStyle 
                type="invalid" 
                tooltip 
                displayTooltip={touched.gender && !!errors.gender}
                arrow_scale="-150%"
            >
                {errors.gender}
            </FormControlFeedbackStyle>
            {show && 
            <DropDownListGenderAlias
                setFieldValue={setFieldValue} 
                setFieldTouched={setFieldTouched} 
                values={values} 
                touched={touched} 
                errors={errors}
            />}
        </Form.Group>
    );
};

export default GenderRadio;