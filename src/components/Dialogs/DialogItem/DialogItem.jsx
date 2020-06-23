import React from 'react';
import classes from "./DialogItem.module.css"
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.activ}>
            <div>
                <img src="https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v1785392215/original.jpeg" alt=""></img>
            </div>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;