import s from './Navbar.module.scss'
import {NavLink} from "react-router-dom";


function Navbar() {
  return (
      <nav className={s.nav}>
        <ul className={s.nav__list}>
          <li>
            <NavLink className={({isActive}) => (isActive ? s.nav__linkActive : s.nav__link) } to="/">Профиль</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => (isActive ? s.nav__linkActive : s.nav__link) } to="/dialogs">Сообщения</NavLink>
          </li>
          <li>
            <NavLink className={s.nav__link} to="">Новости</NavLink>
          </li>
          <li>
            <NavLink className={s.nav__link} to="">Музыка</NavLink>
          </li>
          <li>
            <NavLink className={s.nav__link} to="">Настройки</NavLink>
          </li>
        </ul>
      </nav>
  );
}

export default Navbar;