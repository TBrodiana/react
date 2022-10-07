import React from 'react';
import style from "./Posts.module.css";
import likeImg from "./img/like.png";
import dislikeImg from "./img/dislike.png";

const Post = (props) => {
    return (
        <div className={style.post}>

            <iframe src="https://giphy.com/embed/xl2zRzM8sVo3td58kS" width="480" height="270" frameBorder="0"
                    className="giphy-embed" allowFullScreen></iframe>

            <button ><img className={style.likeBtn} src={likeImg}/></button>
            <button ><img className={style.dislikeBtn} src={dislikeImg}/></button>

        </div>
    );
};

export default Post;