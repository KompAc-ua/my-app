import React from "react";
import classes from "./Mypost.module.css";
import Post from "./Post/Post";

let postsData = [
    { id: 1, post: 'Hi, how are you', likesCount: 25 },
    { id: 2, post: 'What do you think about it', likesCount: 43 },
    { id: 2, post: 'It\'s my last post today', likesCount: 43 }
]

let postsElement = postsData.map(p => <Post message={p.post} likesCount={p.likesCount} />);

const Mypost = () => {
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