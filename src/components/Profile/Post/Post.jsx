import s from './Post.module.scss'


function Post(props) {

    return (
        <div className={s.posts__post}>
            <div className={s.posts__avatar}>
                <img src="./avatar.jpg" alt="Аватарка автора"/>
            </div>
            <p className={s.posts__text}>{props.text}</p>
        </div>
    );
}

export default Post;