import React from "react";
import classes from "./Navbar.module.css"
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
    return (
        <nav className={classes.nav}>
            <div>
                <NavLink className={classes.item} activeClassName={classes.aktivLink} to="/profile">Profile</NavLink>
            </div>
            <div>
                <NavLink className={classes.item} activeClassName={classes.aktivLink} to="/dialogs">Messages</NavLink>
            </div>
            <div>
                <NavLink className={classes.item} activeClassName={classes.aktivLink} to="/news">News</NavLink>
            </div>
            <div>
                <NavLink className={classes.item} activeClassName={classes.aktivLink} to="/music">Music</NavLink>
            </div>
            <div>
                <NavLink className={classes.item} activeClassName={classes.aktivLink} to="/settings">Settings</NavLink>
            </div>
            <div className={classes.friends}>
                <Friends state={props.state.friends} />
            </div>
        </nav>
    );
}
export default Navbar;