import React from 'react';
import Videos from './component/videos';
import styles from './ui/page.module.css';
import getSession from '@/lib/session';

export default async function Home() {
  const isAuthenticated = await getSession();
  return (
      <main className={styles.main}>
        <Videos isAuthenticated={isAuthenticated} />
      </main>
  );
}
