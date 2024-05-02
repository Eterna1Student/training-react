import s from './ProfileInfo.module.scss'


function ProfileInfo(props) {
  return (
      <>
          <img className={s.prev} src='./prev.jpg' alt="Превью"/>
          <div className={s.info}>
              <img className={s.info__avatar} src="./avatar.jpg" alt="Аватарка"/>
              <div className={s.info__data}>
                  <span className={s.info__name}>{props.name}</span>
                  <span className={s.info__adres}>День рождения: 9 января</span>
                  <span className={s.info__adres}>Город: Саратов</span>
                  <span className={s.info__adres}>Образование: СГТУ им. Ю.А. Гагарина</span>
                  <span className={s.info__adres}>Сайт: -</span>
              </div>
          </div>
      </>
  );
}

export default ProfileInfo;