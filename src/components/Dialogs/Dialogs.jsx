import React from 'react';
import classes from "./Dialogs.module.css"
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div className={classes.dialog + ' ' + classes.activ}>
                    <NavLink to="/dialogs/1">Andrei</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/2">Marina</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/3">Tolya</NavLink>
                </div>
            </div>

            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How are you</div>
                <div className={classes.message}>Where are you</div>
            </div>
        </div>
    )
}
export default Dialogs;