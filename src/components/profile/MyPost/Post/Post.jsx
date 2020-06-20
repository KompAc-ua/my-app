import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://theimageconference.org/wp-content/uploads/2020/04/vancouver_image_conference_3-scaled.jpg" alt=""></img>
            {props.message}
            <div>
                <span className={classes.like}>{props.likesCount} Like</span>
            </div>
        </div>
    );
}
export default Post;