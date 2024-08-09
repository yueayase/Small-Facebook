import Modal from 'react-bootstrap/Modal';
import { Paragraph } from '../../styles/LoginPageStyled';

const ErrorDialog = ({showErrorDialog, setShowErrorDialog}) => {
    return (
        <Modal show={showErrorDialog} onHide={() => setShowErrorDialog(false)} size="xl">
            <Modal.Header closeButton style={{ backgroundColor: "#edbb99" }}>
                <Modal.Title>註冊失敗!</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#f6ddcc" }}>
                <Paragraph>這可能是因為您輸入的手機號碼或是電子郵件地址已經有人註冊過了</Paragraph>
            </Modal.Body>
        </Modal>
    );
};

export default ErrorDialog;