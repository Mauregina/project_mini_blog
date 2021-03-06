import { NavLink } from 'react-router-dom';

// css
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <NavLink to="/" className={styles.brand}>Mini <span>Blog</span></NavLink>
        <ul className={styles.links_list}>
        <li>
            <NavLink to="/" className={({isActive}) => (isActive ? styles.active: null)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/register" className={({isActive}) => (isActive ? styles.active: null)}>Register</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({isActive}) => (isActive ? styles.active: null)}>About</NavLink>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar