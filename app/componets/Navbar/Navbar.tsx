"use client";

import styles from "./style.module.css";

export default function Navbar() {
  return (
    <div className={styles.nav_bar}>
      <div className={styles.the_logo}>
        <a href="/">
          <img
            src="/feed_vote.png"
            alt="Digital Democracy Logo"
            className={styles.logo_img}
          />
        </a>
</div>

      <div className={styles.nav_links}>
        {/* ABOUT */}
        <div className={styles.nav_item}>
          <button onClick={() => (window.location.href = "/about")}>
            About ▼
          </button>
          <div className={styles.dropdown}>
            <a href="/about#project">What This Project Is</a>
            <a href="/about#research">The Research</a>
            <a href="/about#why-matters">Why This Matters</a>
            <a href="/about#who-built">Who Built This?</a>
          </div>
        </div>

        {/* SOCIAL MEDIA EFFECTS */}
        <div className={styles.nav_item}>
          <button onClick={() => (window.location.href = "/effects")}>
            Social Media Effects ▼
          </button>
          <div className={styles.dropdown}>
            <a href="/effects">Overview</a>
            <a href="/effects#algorithms">Algorithms: What Gets Boosted</a>
            <a href="/effects#echo-chambers">Echo Chambers in Action</a>
            <a href="/effects#takeaways">Key Takeaways</a>
          </div>
        </div>

        {/* DATA & EVIDENCE */}
        <div className={styles.nav_item}>
          <button onClick={() => (window.location.href = "/data")}>
            Data &amp; Evidence ▼
          </button>
          <div className={styles.dropdown}>
            <a href="/data#ali-lin">Ali &amp; Lin (2013)</a>
            <a href="/data#levy">Levy (2021)</a>
            <a href="/data#fujiwara">Fujiwara et al. (2021)</a>
            <a href="/data#pew">Pew Research (2022)</a>
            <a href="/data#bbc">BBC: 2016 Election</a>
            <a href="/data#interview">Interview (Primary Source)</a>
          </div>
        </div>

        {/* TAKE ACTION */}
        <div className={styles.nav_item}>
      <button onClick={() => (window.location.href = "/action")}>
        Take Action ▼
      </button>

      <div className={styles.dropdown}>
        <a href="/action#hero">Overview</a>
        <a href="/action#actions">Steps to Take</a>
        <a href="/action#resources">Voter Resources</a>
        <a href="/action#share">Share This Project</a>
      </div>
    </div>
      </div>
    </div>
  );
}