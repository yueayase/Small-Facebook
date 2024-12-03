import styled from 'styled-components';
import Introduction from './PostContent/Introduction';
import Photo from './PostContent/Photo';
import Friend from './PostContent/Friend';
import LifeEvent from './LifeEvent';

const PostContentSectionStyle = styled.div`
    width: 70%;
    height: 100%;
    margin: 0 auto;
    padding-top: 16px;
    color: #fff;
    background-color: #000;
    display: flex;
`;

const UserInformationSectionStyle = styled.div`
    width: 40%;
    height: 100%;
    padding-right: 16px;
    /* border: 1px solid #fff; */
`;

const UserArticlesSectionStyle = styled.div`
    width: 60%;
    height: 100%;
    border: 1px solid red;
`;

const PostContent = () => {
    return (
        <PostContentSectionStyle>
            <UserInformationSectionStyle>
                {/* User information: Introduction, Photos, Friends, Life Event */}
                <Introduction />
                <Photo />
                <Friend />
                <LifeEvent />
            </UserInformationSectionStyle>
            <UserArticlesSectionStyle>
                All posted articles here.
            </UserArticlesSectionStyle>
        </PostContentSectionStyle>
    );
};

export default PostContent;