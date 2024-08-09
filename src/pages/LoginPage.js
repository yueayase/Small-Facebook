import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginForm from '../components/LoginPage/LoginForm.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Container, 
    MoveToCenter,
    Title,
    Paragraph,
    Card
} from '../styles/LoginPageStyled.js';



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