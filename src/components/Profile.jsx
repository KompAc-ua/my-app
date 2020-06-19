import React from "react";
import classes from "./css/Profile.module.css";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://theimageconference.org/wp-content/uploads/2020/04/vancouver_image_conference_3-scaled.jpg" alt=""></img>
            </div>
            <div>ava+description</div>
            <div>
                my posts
          <div>new post</div>
                <div>
                    <div>post1</div>
                    <div>post2</div>
                </div>
            </div>
        </div>
    );
}
export default Profile;