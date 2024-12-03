import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../auth/AuthContext";
import UserProfileDefaultLayout from "../components/UserProfile/UserProfileDefaultLayout";
import PostContent from "../components/UserProfile/PostContent";
import AboutContent from "../components/UserProfile/AboutContent";
import FriendContent from "../components/UserProfile/FriendContent";
import PhotoContent from "../components/UserProfile/PhotoContent";
import VideoContent from "../components/UserProfile/VideoContent";
import GroupContent from "../components/UserProfile/GroupContent";

const UserProfile = () => {
    const { isAuthenticated, authLoading, navigate } = useContext(AuthContext);
    const [currentTag, setCurrentTag] = useState(0);
    const TagContents = [
        <PostContent />, <AboutContent />, <FriendContent />, 
        <PhotoContent />, <VideoContent />, <GroupContent />
    ];

    useEffect(() => {
        if (!authLoading && !isAuthenticated){
            console.log("redirect to HomePage", isAuthenticated);
            navigate("/", { replace: true });
        }
    }, [isAuthenticated, authLoading, navigate]);

    return (
        <UserProfileDefaultLayout currentTag={currentTag} setCurrentTag={setCurrentTag}>
            {TagContents[currentTag]}
        </UserProfileDefaultLayout>
    );
};

export default UserProfile;