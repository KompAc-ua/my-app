import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
  addPost,
  updateNewPostText,
  newMessage,
  updateNewMessageText,
} from "./redux/state";

export let reRenderEntireTree = (props) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={props}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        newMessage={newMessage}
        updateNewMessageText={updateNewMessageText}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
