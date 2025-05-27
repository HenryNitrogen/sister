import React from 'react';
import styles from './ui/page.module.css';
import Videos from './component/videos';

export default function Home() {
  return (
    <body className={styles.body}>
      <main>
        <Videos />
        
        
      </main>
    </body>
  );
}
