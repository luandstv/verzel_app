import styles from '../styles/components/header.module.scss';
import { FiList } from 'react-icons/fi';


export default function Header () {
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <FiList className={styles.FiList} />
        {/* <h1>Task Register</h1> */}
        <nav>
          <ul>
            <button><li>Sing in</li></button>
            <button><li>Sing up</li></button>
          </ul>
        </nav>
      </div>
      
    </header>
  );
}