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
                    <Post message="Hi, how are you" likes="15" />
                    <Post message="What do you think about it" likes="20" />
                </div>
            </div>
        </div>
    );
}
export default Mypost;