import React from "react";
import classes from "./Profile.module.css";
import Mypost from "./MyPost/Mypost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <Mypost postsData={props.profilePage.postsData}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch} />
        </div>
    );
}
export default Profile;