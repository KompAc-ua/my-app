let store = {
  _state: {
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
        {
          id: 3,
          message: "Thank you man! I aprisiate this much",
          who: "friend",
        },
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
  },
  _callSubscriber() {
    console.log("State change");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        post: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === "NEW-MESSAGE") {
      let newMessage = {
        id: 5,
        message: this._state.dialogsPage.newMessageText,
        who: "friend",
      };
      this._state.dialogsPage.messageData.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export default store;
window.store = store;
