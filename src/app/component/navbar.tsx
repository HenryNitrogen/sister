import styles from '../ui/nav.module.css';
import ReorderIcon from '@mui/icons-material/Reorder';
export default function Nav() {
  return (
    <>
        <nav className={styles.nav}>
          <div className={styles.list}> 
            <button className={styles.iconbutton}><ReorderIcon /></button>
          </div>
          <div className={styles.logoContainer}>
            <img src="/logo.png" alt="Logo" className={styles.logoImage} />
          </div>
    
            <input className={styles.search} type="text" />
            <div className={styles.divhomelist}>
              <ul className={styles.homelist}>
                <li className={styles.ali}>Home</li>
                <li className={styles.ali}>About</li>
                <li className={styles.alia}>Contact</li>
              </ul>
            </div>

          
        </nav>

        </>
    

  );
}
