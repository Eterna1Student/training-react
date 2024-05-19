import s from './newPost.module.scss'
import React from "react";



function NewPost(props) {

    let newPostElement = React.createRef()
    let addPost = ()=> {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ''
    }

  return (
    <>
      <h2 className={s.posts__title}>
        Мой пост
      </h2>
      <form className={s.posts__form} action="#">
        <textarea className={s.posts__newPost} name="textPost" ref={newPostElement} cols="30" rows="10" placeholder='Твоя новость'></textarea>
        <button className={s.posts__submit} type='submit' onClick={addPost}>Опубликовать</button>
      </form>
    </>
  );
}

export default NewPost;