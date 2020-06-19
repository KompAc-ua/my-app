import React from "react";
import classes from "./Profile.module.css";
import Mypost from "./MyPost/Mypost";

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://theimageconference.org/wp-content/uploads/2020/04/vancouver_image_conference_3-scaled.jpg" alt=""></img>
            </div>
            <div>ava+description</div>
            <Mypost />
        </div>
    );
}
export default Profile;