import styles from './ui/nav.module.css';

export default function Nav() {
  return (
        <nav className={styles.nav}>
          <div className={styles.logoContainer}>
            <img src="/logo.png" alt="Logo" className={styles.logoImage} />
          </div>
        </nav>
    

  );
}
