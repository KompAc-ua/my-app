import React from 'react';
import classes from "./Message.module.css"

const Message = (props) => {
    if (props.who == "me") {
        return (

            <div className={classes.message + ' ' + classes.me}> {props.message}</div >
        )
    }
    else return (

        <div className={classes.message + ' ' + classes.friend}> {props.message}</div >
    )
}
export default Message;