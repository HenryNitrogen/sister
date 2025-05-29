'use client'

import { PrismaClient } from '@prisma/client';
import { Avatar } from '@mui/material';
import styles from '../ui/videos.module.css';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

interface Video {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  createdAt: Date;
}

export default function VideosPage() {
  const { data: session } = useSession();
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    // Fetch videos from API route
    fetch('/api/videos')
      .then(res => res.json())
      .then(data => setVideos(data));
  }, []);

  return (
    <main className={styles.main}>
      {videos.map((video) => (
        <div key={video.id} className={`${styles.cards} ${!session ? styles.blurred : ''}`}>
          <div className={styles.v}></div>
          <div className={styles.infobox}>
            <div className={styles.au}>
              <div className={styles.channelicon}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </div>
              <div className={styles.name}>Channel Name</div>
            </div>
            <div className={styles.description}>
              <p>{video.title}</p>
              <p>{video.description}</p>
              <p className={styles.date}>
                {new Date(video.createdAt).toLocaleDateString()}
              </p>
              <p className={styles.views}>10K views</p>
            </div>
          </div>
          {!session && (
            <div className={styles.loginOverlay}>
              <p>Please sign in to view videos</p>
            </div>
          )}
        </div>
      ))}
    </main>
  );
}
