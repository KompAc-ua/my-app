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
    let dialogElements = props.d.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.m.map(message => <Message message={message.message} />);
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} /> */}
                {dialogElements}
                {/* {props.d.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)} */}
            </div>

            <div className={classes.messages}>

                {/* <MessageItem message={messageData[0].message} />
                <MessageItem message={messageData[1].message} />
                <MessageItem message={messageData[2].message} />
                <MessageItem message={messageData[3].message} /> */}

                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;