import s from './Navbar.module.scss'

function Navbar() {
  return (
    <nav className={s.nav}>
      <ul className={s.nav__list}>
        <li>
          <a className={s.nav__link} href="">Профиль</a>
        </li>
        <li>
          <a className={s.nav__link} href="">Сообщения</a>
        </li>
        <li>
          <a className={s.nav__link} href="">Новости</a>
        </li>
        <li>
          <a className={s.nav__link} href="">Музыка</a>
        </li>
        <li>
          <a className={s.nav__link} href="">Настройки</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;