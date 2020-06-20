import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.ava}>
                <img src="https://theimageconference.org/wp-content/uploads/2020/04/vancouver_image_conference_3-scaled.jpg" alt=""></img>
            </div>
            <div className={classes.descriptionBlock}>ava+description</div>
        </div>
    )
}
export default ProfileInfo;