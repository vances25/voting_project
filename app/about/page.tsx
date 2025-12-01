// app/about/page.tsx
"use client";

import Navbar from "../componets/Navbar/Navbar";
import styles from "./style.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        {/* HERO / INTRO  --------------------------------------------------- */}
        <section
          id="project"
          className={styles.hero}
          aria-labelledby="about-hero-heading"
        >
          <div className={styles.heroText}>
            <p className={styles.kicker}>About This Project</p>
            <h1 id="about-hero-heading">Feed to Vote in Plain Language</h1>
            <p>
              This site is a guided tour of how{" "}
              <strong>social media and voting</strong> is connect. It’s built for
              students, new voters, and anyone who wants to understand what
              their feed is doing behind the scenes.
            </p>
            <p>
              Instead of reading long research papers, you get short, visual
              explanations you can scroll through in a few minutes.
            </p>
          </div>

          <figure className={styles.heroImage}>
            <img
              src="/about_hero.jpg"
              alt="Phone wiht hand that is liking content"
            />
          </figure>
        </section>

        {/* SNAPSHOT ROW  --------------------------------------------------- */}
        <section
          aria-labelledby="snapshot-heading"
          className={styles.snapshot}
        >
          <h2 id="snapshot-heading">Project at a Glance</h2>

          <div className={styles.snapshotGrid}>
            <article className={styles.snapshotCard}>
              <h3>Goal</h3>
              <p>
                Turn complex research on voting and social media into{" "}
                <strong>clear, student-friendly explanations</strong>.
              </p>
            </article>

            <article className={styles.snapshotCard}>
              <h3>Audience</h3>
              <p>
                Young voters, classmates, and anyone who mostly gets news from
                TikTok, Instagram, or X.
              </p>
            </article>

            <article className={styles.snapshotCard}>
              <h3>Big Question</h3>
              <p>
                If our feeds are filtered and boosted by algorithms,{" "}
                <strong>how does that change who shows up to vote</strong>?
              </p>
            </article>
          </div>
        </section>

        {/* RESEARCH PROCESS / TIMELINE ----------------------------------- */}
<section
  id="research"
  className={styles.timelineSection}
  aria-labelledby="timeline-heading"
>
  <h2 id="timeline-heading">How the Research Turned into This Site</h2>

  <ol className={styles.timelineList}>
    {/* STEP 1 */}
    <li className={styles.timelineItem}>
      <div className={styles.timelineMarker}>
        <div className={styles.timelineNumber}>1</div>
      </div>

      <div className={styles.timelineContent}>
        <figure className={styles.timelineImage}>
          <img
            src="/timeline_read.jpg"
            alt="Student reading book"
          />
        </figure>

        <div className={styles.timelineBody}>
          <h3>Read the Studies</h3>
          <p>
            I started with peer-reviewed work from{" "}
            <strong>Ali &amp; Lin (2013)</strong>,{" "}
            <strong>Levy (2021)</strong>, and{" "}
            <strong>Fujiwara et al. (2021)</strong> on voting and online
            information.
          </p>
        </div>
      </div>
    </li>

    {/* STEP 2 */}
    <li className={styles.timelineItem}>
      <div className={styles.timelineMarker}>
        <div className={styles.timelineNumber}>2</div>
      </div>

      <div className={styles.timelineContent}>
        <figure className={styles.timelineImage}>
          <img
            src="/timeline_ideas.jpg"
            alt="Sticky notes and highlighted text showing core ideas pulled out"
          />
        </figure>

        <div className={styles.timelineBody}>
          <h3>Pull Out the Core Ideas</h3>
          <p>
            I focused on <em>why people vote</em>,{" "}
            <em>how feeds create echo chambers</em>, and{" "}
            <em>how turnout changes</em> when one side is louder online.
          </p>
        </div>
      </div>
    </li>

    {/* STEP 3 */}
    <li className={styles.timelineItem}>
      <div className={styles.timelineMarker}>
        <div className={styles.timelineNumber}>3</div>
      </div>

      <div className={styles.timelineContent}>
        <figure className={styles.timelineImage}>
          <img
            src="/timeline_visuals.jpg"
            alt="Person designing simple visual explainers on a laptop"
          />
        </figure>

        <div className={styles.timelineBody}>
          <h3>Build Visual Explainers</h3>
          <p>
            Each page turns those ideas into{" "}
            <strong>simple visuals, short paragraphs, and examples</strong> so
            you don’t need a textbook to follow along.
          </p>
        </div>
      </div>
    </li>
  </ol>
</section>

        {/* WHY IT MATTERS / CALLOUT  -------------------------------------- */}
        <section
          id="why-matters"
          className={styles.whySection}
          aria-labelledby="why-heading"
        >
          <div className={styles.whyText}>
            <h2 id="why-heading">Why This Matters</h2>
            <p>
              Most of us see politics through a screen before we ever see a
              ballot. If those screens are shaped by algorithms and social
              pressure, they can quietly change{" "}
              <strong>what feels normal, urgent, or not worth caring about</strong>.
            </p>
            <p>
              This project doesn’t tell you who to support. It simply gives you
              space to <strong>slow down, notice patterns, and think for
              yourself</strong> before you vote.
            </p>
          </div>

          <aside className={styles.quoteCard}>
            <p className={styles.quoteMark}>“</p>
            <p className={styles.quoteText}>
             When you understand how these algorithms work, you become harder to manipulate.
            </p>
            <p className={styles.quoteAuthor}>— Vance Schaefer</p>
          </aside>
        </section>

        {/* CREATOR CARD  --------------------------------------------------- */}
        <section
          className={styles.creatorSection}
          aria-labelledby="creator-heading"
        >
          <div className={styles.creatorCard}>
            <figure className={styles.creatorAvatar}>
              <img
                src="/me.jpg"
                alt="Picture of the creator"
              />
            </figure>

            <div className={styles.creatorText}>
              <h2 id="creator-heading">Who Built This?</h2>
              <p>
                This site was created as a{" "}
                <strong>WRIT 1301 project at the University of Minnesota</strong>
                . I combined my interest in coding, design, and civic
                participation to turn academic research into something more
                interactive and shareable.
              </p>
              <p>
                You’re welcome to <strong>explore, screenshot, or share</strong>{" "}
                pieces of this site in class, discussions, or with friends who
                are trying to figure out what their vote really means.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}