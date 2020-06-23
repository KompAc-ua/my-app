import React from "react";
import classes from "./Mypost.module.css";
import Post from "./Post/Post";

const Mypost = (props) => {
    let postsElement = props.state.map(post => <Post message={post.post} likesCount={post.likesCount} />);
    return (
        <div className={classes.content}>
            <div>
                <h3>My posts:</h3>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <button>Remove</button>
                <div className={classes.posts}>
                    {/* <Post message={postsData[0].post} likesCount={postsData[0].likesCount} />
                    <Post message={postsData[1].post} likesCount={postsData[1].likesCount} /> */}
                    {postsElement}
                </div>
            </div>
        </div>
    );
}
export default Mypost;