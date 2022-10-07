import React from 'react';
import style from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={style.user}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    )
}

const Dialogs = () => {
    return (
    <div className={style.dialogs}>

        <div className={style.usersDiv}>
            <DialogItem name="Tommy Shelby" id="01"/>
            <DialogItem name="Beth Harmon" id="02"/>
            <DialogItem name="Otis Milburn" id="03"/>
            <DialogItem name="Mike Wheeler" id="04"/>
            <DialogItem name="Emily Cooper" id="05"/>
        </div>
        <div className={style.messagesDiv}>
            <Message message="You can change what you do, but you can't change what you want!"/>
            <Message message="Hi! How are you? Do you wanna play?"/>
            <Message message="We all mess up and do impure things. Doesn't mean we're bad people."/>
            <Message message="Hey, if we're both going crazy, we'll go crazy together, right?"/>
            <Message message="Bonjour! I feel like I'm dreaming and I'm about to wake up."/>
        </div>
    </div>

    );
};

export default Dialogs;