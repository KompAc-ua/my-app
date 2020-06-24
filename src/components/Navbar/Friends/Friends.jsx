import React from "react";
import classes from "./Friends.module.css"
import { NavLink } from "react-router-dom";

const FriendItem = (props) => {
    return (
        <div className={classes.friends}>
            <img src="https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v1785392215/original.jpeg"
                alt="Friend" title={props.name}></img>

        </div>

    )

};
const Friends = (props) => {
    let friendsItem = props.state.map(f => <FriendItem name={f.name} />);
    return (
        <div>
            <h2>Friends</h2>
            {friendsItem}
        </div>
    )
}
export default Friends;