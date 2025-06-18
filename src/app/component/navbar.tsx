'use client'

import styles from '../ui/nav.module.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import Image from 'next/image';
import { signIn, signOut } from 'next-auth/react';
import { useSession } from "next-auth/react";
import { CoolMode } from "@/components/magicui/cool-mode";
interface NavProps {
  onOpenSidebar: () => void;
}

export default function Nav({ onOpenSidebar }: NavProps) {
  const { data: session, status } = useSession();
  return (
    <>
        <nav className={styles.nav}>
          <div className={styles.list}> 
            <button className={styles.iconbutton} onClick={onOpenSidebar}><ReorderIcon /></button>
          </div>
          <div className={styles.logoContainer}>
            <Image src="/logo.png" alt="Logo" className={styles.logoImage} width={140} height={48} />
          </div>
    
            <input className={styles.search} type="text" />
            <div className={styles.divhomelist}>
              <ul className={styles.homelist}>
                <li className={styles.ali}><CoolMode><button>Home</button></CoolMode> </li>
                <li className={styles.ali}><CoolMode><button>About</button></CoolMode> </li>
                <li className={styles.alia}><CoolMode><button>Contact</button></CoolMode> </li>
                {status === "authenticated" ? (<li className={styles.ali}>{session.user?.name}<CoolMode> <button onClick={()=> signOut() }>sign out</button></CoolMode></li> ) : (<CoolMode><button onClick={() => signIn("google")}>login</button></CoolMode>) }
                
              </ul>
            </div>
        </nav>
    </>
  );
}
