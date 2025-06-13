import React from 'react';
import Videos from './component/videos';
import styles from './ui/page.module.css';
export default function Home() {
  return (
      <main className={styles.main}>
        <Videos />
      </main>
  );
}
