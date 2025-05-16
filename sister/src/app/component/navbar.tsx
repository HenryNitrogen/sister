import styles from '../ui/nav.module.css';
import ReorderIcon from '@mui/icons-material/Reorder';
export default function Nav() {
  return (
        <nav className={styles.nav}>
          <div className={styles.list}> 
            <ReorderIcon />
          </div>
          <div className={styles.logoContainer}>
            <img src="/logo.png" alt="Logo" className={styles.logoImage} />
          </div>
    
            <input className={styles.search} type="text" />

          
        </nav>
        
    

  );
}
