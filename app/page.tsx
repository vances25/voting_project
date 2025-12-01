"use client";

import styles from "./style.module.css";
import Navbar from "./componets/Navbar/Navbar";
import { useRouter } from "next/navigation";

export default function Home() {


  const router = useRouter();


  return (
    <>


  
      <div className={styles.container}>
       
      <Navbar/>
        



       <div className={styles.header}>

      <img src="/voter.jpg" alt="Phone with social media apps on it" />

      <div className={styles.heroContent}>
        <h1>How Social Media Influences Voting</h1>
        <p>
          Explore how platforms shape civic engagement and voter motivation.
        </p>
        <button onClick={()=>router.push("/effects")}>Start Exploring!</button>
      </div>
    </div>

      {/* NEW COMFORT SECTION */}
<section className={styles.comfortSection}>
  <h2>Explore More Insights</h2>

  <div className={styles.comfortGrid}>
    
    <div className={styles.comfortCard}>
      <img src="/civic_social.png" alt="Civic vs Social" />
      <h3>Why People Vote</h3>
      <p>
        Learn how civic duty and social incentives shape the way Americans 
        decide to participate in elections.
      </p>
    </div>

    <div className={styles.comfortCard}>
      <img src="/echo_chambers.png" alt="Echo Chamber Graphic" />
      <h3>How Algorithms Shape Views</h3>
      <p>
        Platforms often filter what we see. Discover how this affects 
        polarization and political beliefs.
      </p>
    </div>

    <div className={styles.comfortCard}>
      <img src="/impact.png" alt="Turnout chart" />
      <h3>Changes in Voter Turnout</h3>
      <p>
        Explore real data from Fujiwara et al. (2021) showing shifts in 
        turnout across multiple counties.
      </p>
    </div>

  </div>

</section>
  {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerLeft}>
            <h3>Feed to Vote Project</h3>
            <p>Exploring how social media shapes voter motivation and participation.</p>
          </div>

          <div className={styles.footerLinks}>
            <a href="#about">About</a>
            <a href="#evidence">Sources</a>
            <a href="#action">Take Action</a>
          </div>

          <div className={styles.footerRight}>
            <p>Made by Vance Schaefer • WRIT 1301 • 2025</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
// https://thehilltoponline.com/wp-content/uploads/2024/10/image-38-1024x683.jpeg