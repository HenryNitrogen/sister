'use client'
import {useSession } from 'next-auth/react';
import { Avatar } from '@mui/material';
import styles from '../ui/videos.module.css';
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
  const [videos, setVideos] = useState<Video[]>([]);
  const { status } = useSession();

  useEffect(() => {
    // Fetch videos from API route
    fetch('/api/videos')
      .then(res => res.json())
      .then(data => setVideos(data));
  }, []);
  if (status === 'loading' || status === 'unauthenticated') {
    return <div>Loading...</div>;}
    else if (status === 'authenticated') {
  return (
    <main className={styles.main}>
      {videos.map((video) => (
        <div key={video.id} className={styles.cards}>
          <div className={styles.v}>
            <video
              src={video.videoUrl}
              poster={video.thumbnailUrl}
              controls
            />
          </div>
          <div className={styles.infobox}>
            <div className={styles.au}>
              <div className={styles.channelicon}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </div>
              <div className={styles.name}>Channel Name</div>
            </div>
            <div className={styles.description}>
              <div className={styles.wenzi}>
              <p>{video.title}</p>
              <p>{video.description}</p>
              <p className={styles.date}>
                {new Date(video.createdAt).toLocaleDateString()}
              </p>
              <p className={styles.views}>10K views</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
    
  );
}
}
