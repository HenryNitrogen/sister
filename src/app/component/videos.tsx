import styles from '../ui/videos.module.css';
export default function Videos() {
    return(
        <main className={styles.main}>
            <div className={styles.cards}>
                <div className={styles.v}></div>
                <div className={styles.infobox}>
                    <div className={styles.au}>
                        <div className={styles.channelicon}>
                        <img src="/" alt="icon"/>
                        </div>
                        <div className={styles.name}>Channel Name</div>
                    </div>
                    <div className={styles.description}>
                        <p>name</p>
                        <p>This is a sample description of the video. It provides an overview of the content and what viewers can expect.</p>
                        <p className={styles.date}>date</p>
                        <p className={styles.views}>10K views</p>
                    </div>
                </div>
            </div>


            <div className={styles.cards}>
            <div className={styles.v}></div>
                <div className={styles.infobox}>
                    <div className={styles.au}>
                        <div className={styles.channelicon}>
                        <img src="/" alt="icon"/>
                        </div>
                        <div className={styles.name}>Channel Name</div>
                    </div>
                    <div className={styles.description}>
                        <p>name</p>
                        <p>This is a sample description of the video. It provides an overview of the content and what viewers can expect.</p>
                        <p className={styles.date}>date</p>
                        <p className={styles.views}>10K views</p>
                    </div>
                </div>
            </div>
            <div className={styles.cards}>
            <div className={styles.v}></div>
                <div className={styles.infobox}>
                    <div className={styles.au}>
                        <div className={styles.channelicon}>
                        <img src="/" alt="icon"/>
                        </div>
                        <div className={styles.name}>Channel Name</div>
                    </div>
                    <div className={styles.description}>
                        <p>name</p>
                        <p>This is a sample description of the video. It provides an overview of the content and what viewers can expect.</p>
                        <p className={styles.date}>date</p>
                        <p className={styles.views}>10K views</p>
                    </div>
                </div>
            </div>
            
        </main>

    )
    
}