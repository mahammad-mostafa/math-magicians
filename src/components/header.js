import { NavLink } from 'react-router-dom';
import Styles from '../styles/header.module.css';

const Header = () => {
  const links = ['Home', 'Calculator', 'Quote'];

  return (
    <header className={Styles.header}>
      <nav className={Styles.navigation}>
        <h1 className={Styles.title}>Math Magicians</h1>
        <ul className={Styles.list}>
          {links.map((link) => (
            <li key={link}>
              <NavLink to={link === 'Home' ? '/' : link.toLowerCase()} className={({ isActive }) => (isActive ? Styles.active : null)}>{link}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
