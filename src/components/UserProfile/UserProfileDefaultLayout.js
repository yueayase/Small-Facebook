import React, { useContext } from 'react';
import AuthContext from '../../auth/AuthContext';
import styled from 'styled-components';
import axios from 'axios';
import DefaultLayout from '../layout/DefaultLayout';
import ClearFix from '../../common/ClearFix';
import Image from 'react-bootstrap/Image';
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
    background-size: cover;
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

// const UserIconStyle = styled.div`
//     top: -30px;
//     width: 180px;
//     height: 180px;
//     border-radius: 50%;
//     background-image: url(${({ img_url }) => img_url});
//     background-position-x: 50%;
//     background-size: contain;
//     background-repeat: no-repeat;
// `;

const UserIconStyle = styled.div`
    user-select: none;
    -moz-user-select: none;  /* Mozilla-specific values */
    -webkit-user-select: none;   /* WebKit-specific values */

    position: relative;
    top: -30px;
    width: 180px;
    height: 180px;
    border-radius: 50%; 

`;

const UserIconImageStyle = styled(Image)`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 50%; 

    /* This olution is from: */
    /* https://stackoverflow.com/questions/54133910/why-does-my-active-selector-lose-its-click-event-state-on-scale-tranformation */
    ${UserIconStyle}:active & {
        transform: scale(0.8);  /* Shrinks the inner image, not the outer div */
        transition: all 0.2s;
    }
`;

const UploadUserIconStyle = styled.input`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
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
    
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NavbarTagsStyle = styled.ul`
    list-style-type: none;
    display: flex;
    padding-top: 28px;
    padding-left: 0px;
`;

const NavbarTagStyle = styled.li`
    padding: 16px 20px;
    color: ${({ highlighted }) => highlighted ? '#0866ff' : '#e2e5e9'};

    user-select:none; /* standard syntax */
    -webkit-user-select:none; /* for Chrome、Safari */
    -moz-user-select:none;  /* for Mozilla、Firefox */
    
    &:hover {
        background-color: ${({ highlighted }) => highlighted ? 'inherit' : '#84878b'};
        cursor: pointer;
    }
`;

const TagUnderlineStyle = styled.div`
    width: 100%;
	border-bottom: solid 4px #0866ff;
    margin-top: 12px;
    top: -5px;
`;

const UserProfileDefaultLayout = ({ children, currentTag, setCurrentTag }) => {
    const { 
        username, 
        userCoverImage, 
        setUserCoverImage, 
        userIcon, 
        setUserIcon 
    } = useContext(AuthContext);
    const tags = ["貼文", "關於", "朋友", "相片", "影片", "社團"];

    // Reference: https://omarshishani.com/how-to-upload-images-to-server-with-react-and-express/
    const handleUploadCoverImage = (e) => {
        console.log("Uploading the cover image...");
        if (e.target.files.length > 0){
            const api_url = process.env.REACT_APP_API_BASE_URL + "/upload/cover_image";
            const authMyFacebookKey = "MyFacebook:auth_allowed";
            const { url } = JSON.parse(localStorage.getItem(authMyFacebookKey));
            const formData = new FormData();
            const file = e.target.files[0];

            // Be careful of the order of the append because it won't deal with those 
            // fields after file object until the file is successfully uploaded 
            // See: https://medium.com/@muh__hizbullah/multer-req-body-null-object-when-send-file-with-other-field-string-using-formdata-b275b4364404 
            formData.append("userUrl", url);
            formData.append("cover_image", file, file.name);
            console.log(formData.getAll("cover_image"));
            axios.post(api_url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res => {
                let reader = new FileReader();

                reader.readAsDataURL(file);
                reader.onload = () => {
                    setUserCoverImage(reader.result);
                }
                console.log("upload cover image successfully");
            })
            .catch(error => {
                console.log("something wrong", error);
            });
        }
    };

    const handleUploadUserIcon = (e) => {
        console.log("Uploading the user icon...");
        if (e.target.files.length > 0) {
            const api_url = process.env.REACT_APP_API_BASE_URL + "/upload/user_icon";
            const authMyFacebookKey = "MyFacebook:auth_allowed";
            const { url } = JSON.parse(localStorage.getItem(authMyFacebookKey));
            const formData = new FormData();
            const file = e.target.files[0];

            formData.append("userUrl", url);
            formData.append("user_icon", file, file.name);
            console.log(formData.getAll("user_icon"));
            axios.post(api_url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res => {
                // See: https://molly1024.medium.com/react%E5%B0%88%E6%A1%88%E4%B8%ADinput%E4%B8%8A%E5%82%B3%E6%AA%94%E6%A1%88%E4%B8%A6%E4%BB%A5base64%E6%AA%A2%E8%A6%96-3f4df797465e 
                let reader = new FileReader();

                reader.readAsDataURL(file);
                reader.onload = () => {
                    setUserIcon(reader.result);
                }

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
                    <UserIconStyle>
                        <UserIconImageStyle 
                            src={userIcon}
                            alt="default"
                        />
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
                    <NavbarTagsStyle>
                        {
                            tags.map((tag, index) => (
                                <div>
                                     <NavbarTagStyle 
                                        highlighted={index === currentTag} 
                                        onClick={() => setCurrentTag(index)}
                                    >
                                      {tag}
                                    </NavbarTagStyle>
                                    {(index === currentTag) && <TagUnderlineStyle />}
                                </div>
                               ) 
                            )
                        }
                    </NavbarTagsStyle>
                    <div>...</div>
                </UserProfileNavbarStyle>
            </UserProfileSettingSectionStyle>
            {children}
        </DefaultLayout>
    );
};

export default UserProfileDefaultLayout;