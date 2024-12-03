import styled from "styled-components";

const FriendContainer = styled.div`
    width: 100%;
    height: 500px;
    color: #fff;
    background-color: #333334;
    margin-bottom: 16px;
`;

const Friend = () => {
    return (
        <FriendContainer>
            Your friends
        </FriendContainer>
    );
};

export default Friend;