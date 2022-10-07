import React from 'react';
import style from "./Nav.module.css";
import {NavLink} from 'react-router-dom';
import page from "./img/icon-my-page.png";
import message from "./img/message.png";
import videos from "./img/icon-videos.png";
import friends from "./img/icon-friends.png";
import photos from "./img/icon-photo.png";


const Nav = () => {
    return (

            <nav className={style.iconContainer} >
                <NavLink to="/profile"><img className={style.icon} src={page} alt="My page"/></NavLink>
                <NavLink to="/dialogs"><img className={style.icon} src={message} alt="My page"/></NavLink>
                <NavLink to="/videos"><img className={style.icon} src={videos} alt="My page"/></NavLink>
                <NavLink to="/videos"><img className={style.icon} src={friends} alt="My page"/></NavLink>
                <NavLink to="/videos"><img className={style.icon} src={photos} alt="My page"/></NavLink>

            </nav>

    );
};

export default Nav;