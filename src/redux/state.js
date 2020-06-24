import { reRenderEntireTree } from "../render";

let state = {
  profilePage: {
    postsData: [
      { id: 1, post: "Hi, how are you", likesCount: 25 },
      { id: 2, post: "What do you think about it", likesCount: 43 },
      { id: 3, post: "It's my last", likesCount: 3 },
      { id: 4, post: "It's my  post today", likesCount: 555 },
    ],
    newPostText: "Post Text",
  },
  dialogsPage: {
    dialogsData: [
      { id: 1, name: "Andrei" },
      { id: 2, name: "Vasya" },
      { id: 3, name: "Marina" },
      { id: 4, name: "Tolya" },
      { id: 5, name: "Kolya" },
      { id: 5, name: "Petya" },
    ],
    messageData: [
      { id: 1, message: "Hi! meet me pleas", who: "me" },
      { id: 2, message: "OK i'm going to job interview", who: "friend" },
      { id: 3, message: "Thank you man! I aprisiate this much", who: "friend" },
      { id: 4, message: "Where are you", who: "me" },
      { id: 5, message: "Nigga whatt?", who: "me" },
    ],
    newMessageText: "Type new message here",
  },
  sideBar: {
    friends: [
      { name: "Maria", id: 1 },
      { name: "Anna", id: 2 },
      { name: "Andrei", id: 3 },
    ],
  },
};

export let addPost = () => {
  let newPost = {
    id: 5,
    post: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = "";
  reRenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  reRenderEntireTree(state);
};
export let newMessage = () => {
  let newMessage = {
    id: 5,
    message: state.dialogsPage.newMessageText,
    who: "friend",
  };
  state.dialogsPage.messageData.push(newMessage);
  state.dialogsPage.newMessageText = "";
  reRenderEntireTree(state);
};
export let updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  reRenderEntireTree(state);
};

export default state;
