import React from 'react';
import logo from "./img/logo2.png";
import home from "./img/home.png";
import friends from "./img/profile-icon.png";
import notification from "./img/notification-bell.png";
import messages from "./img/dialogues.png";
import style from "./Header.module.css";

const Header = () => {
    return (

    <header>
        <div className={style.header__container}>
            <div className={style.header__logo}>
                {/*<h2 className={style.logoName}>bestie</h2>*/}
                <img src={logo} alt="logo"/>
                <h2 className={style.logoName}>Friendo</h2>
            </div>
            <div className={style.header__nav}>
                <input className={style.input_header} type="text" placeholder="Search People, Pages, Groups etc"/>
                <span className={style.page_name}>Newsfeed</span>

                <div className={style.header__nav_icons}>
                        <a className={style.nav_item} href="#"><img src={home} alt="Home"/></a>
                        <a className={style.nav_item} href="#"><img src={friends} alt="Friend Request"/></a>
                        <a className={style.nav_item} href="#"><img src={notification} alt="Notification"/></a>
                        <a className={style.nav_item} href="#"><img src={messages} alt="Messages"/></a>
                </div>

            </div>
        </div>
    </header>
    );
};

export default Header;