import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FormControlFeedbackStyle, CommentStyle } from '../../styles/LoginPageStyled';

export const DropDownListYear = ({ setFieldValue, values }) => {
    const date = new Date();
    const year = date.getFullYear();
    const options = [];

    for(let y = year; y >= 1905; y--) {
        options.push(y);
    }

    return (
        <Form.Select 
            defaultValue={year}
            name="year"
            value={values.year}
            onChange={e => setFieldValue("year", e.target.value)}
        >
            {options.map((y, index) => <option value={y}>{y}</option>)}
        </Form.Select>
    );
};

export const DropDownListMonth = ({ setFieldValue, values }) => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const options = Array.from(Array(12).keys()).map((m, index) => m + 1);

    return (
        <Form.Select 
            defaultValue={month}
            name="month"
            value={values.month}
            onChange={e => setFieldValue("month", e.target.value)}
        >
            {options.map((m, index) => <option value={m}>{m}月</option>)}
        </Form.Select>
    );
};

export const DropDownListDay = ({ setFieldValue, values }) => {
    const date = new Date();
    const year = values.year;
    const month = values.month;
    const day = date.getDate();
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
        days[1]++;

    const options = Array.from(Array(days[month-1]).keys()).map((m, index) => m + 1);

    return (
        <Form.Select 
            defaultValue={day}
            name="day"
            value={values.day}
            onChange={e => setFieldValue("day", e.target.value)}
        >
            {options.map((d, index) => <option value={d}>{d}</option>)}
        </Form.Select>
    );
};

export const DropDownListGenderAlias = ({ setFieldValue, setFieldTouched, values, touched, errors }) => {
    return (
        <Row style={{padding: '12px 12px'}}>
            <Form.Select 
                name="genderAlias"
                value={values.genderAlias} 
                onChange={e => setFieldValue("genderAlias", e.target.value)}
                onBlur={() => setFieldTouched("genderAlias", true)}
                isInvalid={touched.genderAlias && !!errors.genderAlias}
            >
                <option value={0} disabled>選擇人稱代名詞</option>
                <option value={1}>她: 「祝她生日快樂！」</option>
                <option value={2}>他: 「祝他生日快樂！」</option>
                <option value={3}>他們: 「祝他們生日快樂！」</option>
            </Form.Select>
            <FormControlFeedbackStyle 
                type="invalid" 
                tooltip 
                displayTooltip={touched.genderAlias && !!errors.genderAlias}
                arrow_scale="-150%"
                className="position-relative"
            >
                請輸入你的人稱代名詞。
            </FormControlFeedbackStyle>
            <CommentStyle>你的人稱代名詞會向所有人顯示。</CommentStyle>
            <Form.Control type="text" placeholder="性別（選填）" onChange={(e) => setFieldValue("gender", e.target.value)}/>
        </Row>
    );
};
