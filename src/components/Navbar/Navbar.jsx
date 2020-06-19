import React from "react";
import classes from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div>
                <a className={classes.item}>Profile</a>
            </div>
            <div>
                <a className={`${classes.item} ${classes.hover}`}>Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>
    );
}
export default Navbar;