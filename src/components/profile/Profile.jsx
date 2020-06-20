import React from "react";
import classes from "./Profile.module.css";
import Mypost from "./MyPost/Mypost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <Mypost />
        </div>
    );
}
export default Profile;