import styled from "styled-components";

const LifeEventContainer = styled.div`
    width: 100%;
    height: 250px;
    color: #fff;
    background-color: #333334;
    margin-bottom: 16px;
`;

const LifeEvent = () => {
    return (
        <LifeEventContainer>
            Your life important events
        </LifeEventContainer>
    );
};

export default LifeEvent;