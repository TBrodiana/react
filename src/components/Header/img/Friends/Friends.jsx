import React from 'react';
import style from "./Friends.module.css";
import {NavLink} from 'react-router-dom';
import fr1 from "./img/1.png.png";
import fr2 from "./img/2.png";
import fr3 from "./img/3.png";
import fr4 from "./img/4.png";
import fr5 from "./img/5.png";


const Friends = () => {
    return (

            <nav className={style.friendsIconContainer} >
                <NavLink to="/profile"><img className={style.friend_icon} src={fr1} alt="Friend 1"/></NavLink>
                <NavLink to="/dialogs"><img className={style.friend_icon} src={fr2} alt="Friend 2"/></NavLink>
                <NavLink to="/videos"><img className={style.friend_icon} src={fr3} alt="Friend 3"/></NavLink>
                <NavLink to="/videos"><img className={style.friend_icon} src={fr4} alt="Friend 4"/></NavLink>
                <NavLink to="/videos"><img className={style.friend_icon} src={fr5} alt="Friend 5"/></NavLink>

            </nav>

    );
};

export default Friends;