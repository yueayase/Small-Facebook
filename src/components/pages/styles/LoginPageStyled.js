import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

export const Container = styled.div`
    height: 100vh;
    background-color: #f0f2f5;
`;

export const MoveToCenter = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Title = styled.h1`
    color: #0866ff;
    font-weight: 800;
    font-size: 56px;
`;

export const Paragraph = styled.p`
    font-weight: 400;
    font-size: 24px;
`;

export const Card = styled.div`
    width: 600px;
    height: 480px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 3px 30px rgba(0, 0, 0, 0.3);
`;

export const LoginFormCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin-bottom: 32px;
`;

export const FormControlInputStyle = styled(Form.Control)`
    padding: 12px 8px;
`;

export const ButtonLinkGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const LineStyle = styled.div`
	width: 100%;
	height: 1px;
	border-bottom: solid 1px #dadde1;
	margin: 20px 16px;
`;

export const ModalHeaderStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const TitleCloseBtnGroupStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const SignUpHeaderTitleStyle = styled.h1`
    font-size: 32px;
    font-weight: 800;
    margin: 0;
`;

export const SignUpHeaderParagraphStyle = styled.p`
    color: #606770;
    font-size: 16px;
    margin: 0;
`;

export const CommentStyle = styled.p`
    color: #606770;
    font-size: 14px;
    padding-left: 0;
`;

export const SignUpButtonCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FormCheckStyle = styled(Form.Check)`
    width: 100%;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    padding: 8px 36px 8px 12px;
    label {
        width: 100%;
        text-align: start;
    }
`;