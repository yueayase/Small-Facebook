import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalBodyForm from './ModalBodyForm';
import ErrorDialog from './ErrorDialog';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    ModalHeaderStyle, 
    TitleCloseBtnGroupStyle, 
    SignUpHeaderTitleStyle, 
    SignUpHeaderParagraphStyle 
} from '../../styles/LoginPageStyled';

const SignUpFormCloseBtnStyle = {
    fontSize: '32px', 
    border: 'none', 
    background: 'none'
};

const SignUpForm = ({show, handleClose}) => {
    const [showErrorDialog, setShowErrorDialog] = useState(false);

    return (
        <Modal show={show}>
            {showErrorDialog && 
                <ErrorDialog 
                    showErrorDialog={showErrorDialog} 
                    setShowErrorDialog={setShowErrorDialog} 
                />
            }
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
                <ModalBodyForm handleClose={handleClose} setShowErrorDialog={setShowErrorDialog}/>
            </Modal.Body>
        </Modal>
    );
};

export default SignUpForm;