import s from './newPost.module.scss'


function NewPost() {
  return (
    <>
      <h2 className={s.posts__title}>
        Мой пост
      </h2>
      <form className={s.posts__form} action="#">
        <textarea className={s.posts__newPost} name="textPost" id="" cols="30" rows="10" placeholder='Твоя новость'></textarea>
        <button className={s.posts__submit} type='submit'>Опубликовать</button>
      </form>
    </>
  );
}

export default NewPost;