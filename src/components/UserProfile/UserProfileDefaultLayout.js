import React, { useContext } from 'react';
import AuthContext from '../../auth/AuthContext';
import styled from 'styled-components';
import axios from 'axios';
import DefaultLayout from '../layout/DefaultLayout';
import ClearFix from '../../common/ClearFix';
import Button from 'react-bootstrap/Button';


const UserProfileSettingSectionStyle = styled.div`
    width: 100%;
    height: 960px;
    background-color: #333334;
`;

const UserCoverImageStyle = styled.div`
    width: 75%;
    height: 456px;
    background-color: #242526;
    background-size: contain;
    background-repeat: no-repeat;
    margin: 0 auto;
    ${({ img_url }) => img_url && `background-image: url(${img_url});`}
`;

// For how to make the whole region able to upload the file, see
// https://stackoverflow.com/questions/8609556/make-input-type-file-element-fill-up-its-parent-div
// The idea is to use custom style with width and height equal to the parent region
const UserUploadCoverImageStyle = styled.input`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left:0;
    opacity: 0;
`;

const UserIconAndEditSectionStyle = styled.div`
    width: 70%;
    height: 150px;
    color: #fff;
    margin: 0 auto;
    display: flex;
`;

const UserIconStyle = styled.div`
    top: -30px;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background-image: url(${({ img_url }) => img_url});
    background-position-x: 50%;
    background-size: contain;
    background-repeat: no-repeat;
`;

const UploadUserIconStyle = styled.input`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left:0;
    border-radius: 50%; /* because the parent div is a circle*/
    opacity: 0;
`;

const UserProfileEditSectionStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 16px; 
    width: 80%;

`;

const UsernameLabelStyle = styled.label`
    font-size: 40px;
    font-weight: 800;
    color: #fff;
`;

const UserFriendsNumberStyle = styled.label`
    font-size: 16px;
    color: #b0b3b8;
`;

const UserFriendIconsAndEditButtonsStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const FriendsSuggestionSectionStyle = styled.div`
    width: 70%;
    height: 270px;
    border: solid 1px #fff;
    border-radius: 8px;
    margin: 0 auto;
`;

const LineStyle = styled.div`
	width: 70%;
	height: 1px;
	border-bottom: solid 1px #fff;
    margin: 16px auto 0 auto;
`;

const UserProfileNavbarStyle = styled.div`
    width: 70%;
    height: 60px;
    color: #fff;
    margin: 0 auto;
`;

const UserProfileDefaultLayout = ({ children }) => {
    const { username, userCoverImage, userIcon } = useContext(AuthContext);

    const handleUploadCoverImage = (e) => {
        console.log("Uploading the cover image...");
        const formData = new FormData();
        if (e.target.files.length > 0){
            const api_url = process.env.REACT_APP_API_BASE_URL + "/upload/cover_image";
            const authMyFacebookKey = "MyFacebook:auth_allowed";
            const { url } = JSON.parse(localStorage.getItem(authMyFacebookKey));

            // Be careful of the order of the append because it won't deal with those 
            // fields after file object until the file is successfully uploaded 
            // See: https://medium.com/@muh__hizbullah/multer-req-body-null-object-when-send-file-with-other-field-string-using-formdata-b275b4364404 
            formData.append("userUrl", url);
            formData.append("cover_image", e.target.files[0], e.target.files[0].name);
            console.log(formData.getAll("cover_image"));
            axios.post(api_url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res => {
                console.log("upload cover image successfully");
            })
            .catch(error => {
                console.log("something wrong", error);
            });
        }
    };

    const handleUploadUserIcon = (e) => {
        console.log("Uploading the user icon...");
        const formData = new FormData();
        if (e.target.files.length > 0) {
            const api_url = process.env.REACT_APP_API_BASE_URL + "/upload/user_icon";
            const authMyFacebookKey = "MyFacebook:auth_allowed";
            const { url } = JSON.parse(localStorage.getItem(authMyFacebookKey));

            formData.append("userUrl", url);
            formData.append("user_icon", e.target.files[0], e.target.files[0].name);
            console.log(formData.getAll("user_icon"));
            axios.post(api_url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res => {
                console.log("upload user icon successfully");
            })
            .catch(error => {
                console.log("something wrong", error);
            });
        }
    };

    return (
        <DefaultLayout>
            <ClearFix />
            <UserProfileSettingSectionStyle>
                <UserCoverImageStyle img_url={userCoverImage}>
                    <UserUploadCoverImageStyle type="file" onChange={handleUploadCoverImage} />
                </UserCoverImageStyle>
                <UserIconAndEditSectionStyle>
                    <UserIconStyle img_url={userIcon}>
                        <UploadUserIconStyle type="file" onChange={handleUploadUserIcon}/>
                    </UserIconStyle>
                    <UserProfileEditSectionStyle>
                        <UsernameLabelStyle>{username}</UsernameLabelStyle>
                        <UserFriendsNumberStyle>20位朋友</UserFriendsNumberStyle>
                        <UserFriendIconsAndEditButtonsStyle>
                            <div>
                                這裡是好友的頭像
                            </div>
                            <div>
                                <Button style={{margin: "0 8px"}}>新增到限時動態</Button>
                                <Button variant="secondary">編輯個人檔案</Button>
                            </div>
                        </UserFriendIconsAndEditButtonsStyle>
                    </UserProfileEditSectionStyle>
                </UserIconAndEditSectionStyle>
                <FriendsSuggestionSectionStyle></FriendsSuggestionSectionStyle>
                <LineStyle />
                <UserProfileNavbarStyle>
                    User Navbar Here.
                </UserProfileNavbarStyle>
            </UserProfileSettingSectionStyle>
            {children}
        </DefaultLayout>
    );
};

export default UserProfileDefaultLayout;