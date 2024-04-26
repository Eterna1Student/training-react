import s from './Profile.module.scss'


function Profile() {
  return (
    <main className={s.profile}>
      <img className={s.prev} src='./prev.jpg' alt="Превью"/>
      <div className={s.info}>
        <img className={s.info__avatar} src="./avatar.jpg" alt="Аватарка"/>
        <div className={s.info__data}>
          <span className={s.info__name}>Олег К.</span>
          <span className={s.info__adres}>День рождения: 9 января</span>
          <span className={s.info__adres}>Город: Саратов</span>
          <span className={s.info__adres}>Образование: СГТУ им. Ю.А. Гагарина</span>
          <span className={s.info__adres}>Сайт: -</span>
        </div>
      </div>  
      <div className={s.posts}>
        <h2 className={s.posts__title}>
          Мой пост
        </h2>
        <form className={s.posts__form} action="#">
          <textarea className={s.posts__newPost} name="textPost" id="" cols="30" rows="10" placeholder='Твоя новость'></textarea>
          <button className={s.posts__submit} type='submit'>Опубликовать</button>
        </form>
        <div className={s.posts__post}>
          <div className={s.posts__avatar}>
            <img src="./avatar.jpg" alt="Аватарка автора" />
          </div>
          <p className={s.posts__text}>Привет! Как дела?</p>
        </div>
      </div>
    </main>
  );
}

export default Profile;