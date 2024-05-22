import s from './newPost.module.scss'
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reduser";


function NewPost(props) {

    let newPostElement = React.createRef()
    let addPost = ()=> {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }
  return (
    <>
      <h2 className={s.posts__title}>
        Мой пост
      </h2>
      <form className={s.posts__form} action="#">
        <textarea className={s.posts__newPost}
                  name="textPost" ref={newPostElement}
                  cols="30" rows="10"
                  placeholder='Твоя новость'
                  value={props.newPostText}
                  onChange={onPostChange}
        ></textarea>
        <button className={s.posts__submit} type='submit' onClick={addPost}>Опубликовать</button>
      </form>
    </>
  );
}

export default NewPost;