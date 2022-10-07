import React from 'react';
import img from '../../../Header/img/logo.png'
import style from "./Posts.module.css";
import Post from "./Post";

const Posts = () => {
    return (
        <div className={style.posts}>
            <Post message="first post" likes="10"/>
            {/*<Post message="second post" likes="15"/>*/}
            {/*<Post message="third post" likes="13"/>*/}
            {/*<Post message="fourth post" likes="19"/>*/}
            {/*<Post message="fifth post" likes="20"/>*/}
        </div>
    );
};

export default Posts;