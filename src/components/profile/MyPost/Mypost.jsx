import React from "react";
import classes from "./Mypost.module.css";
import Post from "./Post/Post";

const Mypost = (props) => {
    let postsElement = props.postsData.map(post => <Post message={post.post} likesCount={post.likesCount} />);

    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch({ type: 'ADD-POST' });
    } //Обработчик кнопки AddPost
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
    }
    return (
        <div className={classes.content}>
            <div>
                <h3>My posts:</h3>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
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