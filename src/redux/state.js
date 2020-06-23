// let postsData = [
//   { id: 1, post: "Hi, how are you", likesCount: 25 },
//   { id: 2, post: "What do you think about it", likesCount: 43 },
//   { id: 3, post: "It's my last", likesCount: 3 },
//   { id: 4, post: "It's my  post today", likesCount: 24 },
// ];

// let dialogsData = [
//   { id: 1, name: "Andrei" },
//   { id: 2, name: "Vasya" },
//   { id: 3, name: "Marina" },
//   { id: 4, name: "Tolya" },
//   { id: 5, name: "Kolya" },
//   { id: 5, name: "Petya" },
// ];
// let messageData = [
//   { id: 1, message: "Hi! meet me pleas" },
//   { id: 2, message: "OK i'm going to job interview" },
//   { id: 3, message: "Thank you man! I aprisiate this much" },
//   { id: 4, message: "Where are you" },
//   { id: 5, message: "Nigga whatt?" },
// ];
let state = {
  profilePage: {
    postsData: [
      { id: 1, post: "Hi, how are you", likesCount: 25 },
      { id: 2, post: "What do you think about it", likesCount: 43 },
      { id: 3, post: "It's my last", likesCount: 3 },
      { id: 4, post: "It's my  post today", likesCount: 555 },
    ],
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
  },
};
export default state;
