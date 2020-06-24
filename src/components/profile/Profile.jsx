import React from "react";
import classes from "./Profile.module.css";
import Mypost from "./MyPost/Mypost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <Mypost postsData={props.profilePage.postsData}
                addPost={props.addPost}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText} />
        </div>
    );
}
export default Profile;