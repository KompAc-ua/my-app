import React from "react";
import classes from "./Post.module.css";

const Post = () => {
    return (
        <div className={classes.item}>
            <img src="https://theimageconference.org/wp-content/uploads/2020/04/vancouver_image_conference_3-scaled.jpg" alt=""></img>
            post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}
export default Post;