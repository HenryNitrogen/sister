'use client'

import styles from '../ui/nav.module.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

export default function Nav() {
  const { data: session } = useSession();

  return (
    <>
        <nav className={styles.nav}>
          <div className={styles.list}> 
            <button className={styles.iconbutton}><ReorderIcon /></button>
          </div>
          <div className={styles.logoContainer}>
            <Image src="/logo.png" alt="Logo" className={styles.logoImage} width={140} height={48} />
          </div>
    
            <input className={styles.search} type="text" />
            <div className={styles.divhomelist}>
              <ul className={styles.homelist}>
                <li className={styles.ali}>Home</li>
                <li className={styles.ali}>About</li>
                <li className={styles.alia}>Contact</li>
                {session ? (
                  <li className={styles.ali}>
                    <button onClick={() => signOut()}>Sign out</button>
                  </li>
                ) : (
                  <li className={styles.ali}>
                    <button onClick={() => signIn('google')}>Sign in</button>
                  </li>
                )}
              </ul>
            </div>
        </nav>
    </>
  );
}
