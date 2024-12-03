import styled from 'styled-components';

const IntroductionContainer = styled.div`
    width: 100%;
    height: 400px;
    color: #fff;
    background-color: #333334;
    margin-bottom: 16px;
`;

const Introduction = () => {
    return (
        <IntroductionContainer>
            Introduct yourself.
        </IntroductionContainer>
    );
};

export default Introduction;