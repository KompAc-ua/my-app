import React from 'react';
import classes from "./Dialogs.module.css"
// import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


// let dialogsData = [
//     { id: 1, name: 'Andrei' },
//     { id: 2, name: 'Vasya' },
//     { id: 3, name: 'Marina' },
//     { id: 4, name: 'Tolya' },
//     { id: 5, name: 'Kolya' }
// ]
// let messageData = [
//     { id: 1, message: 'Hi! meet me pleas' },
//     { id: 2, message: 'OK i\'m going to job interview' },
//     { id: 3, message: 'Thank you man! I aprisiate this much' },
//     { id: 4, message: 'Where are you' }
// ]
// let dialogElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
// let messagesElements = messageData.map(message => <Message message={message.message} />);

const Dialogs = (props) => {
    let newMessageElement = React.createRef();
    let wroteMessage = () => {
        let text = newMessageElement.current.value;
        props.dispatch({ type: 'NEW-MESSAGE' });
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch({ type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text });
    }
    let dialogElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.dialogsPage.messageData.map(message => <Message message={message.message} who={message.who} />);
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogElements}

            </div>

            <div className={classes.messages}>
                {messagesElements}
                <textarea ref={newMessageElement} onChange={onMessageChange} value={props.dialogsPage.newMessageText}></textarea>
                <button onClick={wroteMessage}>Message</button>
            </div>
        </div>
    )
}
export default Dialogs;