import React from "react";
import classes from "./Profile.module.css";
import Mypost from "./MyPost/Mypost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <Mypost state={props.state.postsData} />
        </div>
    );
}
export default Profile;