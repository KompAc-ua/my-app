import React from "react";
import classes from "./Mypost.module.css";
import Post from "./Post/Post";

const Mypost = () => {
    return (
        <div className={classes.content}>
            <div>
                my posts
                 <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
                <div className={classes.posts}>
                    <Post />
                    <Post />
                </div>
            </div>
        </div>
    );
}
export default Mypost;