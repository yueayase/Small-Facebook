import styled from "styled-components";

const PhotoContainer = styled.div`
    width: 100%;
    height: 300px;
    color: #fff;
    background-color: #333334;
    margin-bottom: 16px;
`;

const Photo = () => {
    return (
        <PhotoContainer>
            Your photos
        </PhotoContainer>
    );
};

export default Photo;