import Navbar from "../componets/Navbar/Navbar";
import styles from "./style.module.css";

export default function Effects() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        {/* HERO / INTRO – phones centered above text */}
        <section
          id="top"
          className={styles.effectsHero}
          aria-labelledby="effects-hero-heading"
        >
          <div className={styles.effectsHeroInner}>
            <figure className={styles.effectsHeroImage}>
              <img
                src="/shape_see.jpg"
                alt="Someone scrolling on their phone"
              />
            </figure>

            <p className={styles.effectsHeroLabel}>SOCIAL MEDIA EFFECTS</p>

            <h1 id="effects-hero-heading">How Feeds Shape What We See</h1>

            <p className={styles.effectsHeroText}>
              From algorithms to echo chambers, this page walks through how
              platforms filter information long before we ever decide to vote.
            </p>

            <div className={styles.effectsHeroChips}>
              <button type="button">Algorithms</button>
              <button type="button">Echo Chambers</button>
              <button type="button">Motivation</button>
            </div>
          </div>
        </section>

        {/* ALGORITHMS – timeline / steps strip */}
        <section
          id="algorithms"
          className={styles.algorithmsSection}
          aria-labelledby="algorithms-heading"
        >
          <header className={styles.algorithmsHeader}>
            <h2 id="algorithms-heading">What Algorithms Actually Do</h2>
            <p>
              Platforms rank posts based on engagement, not accuracy or balance.
              That changes what shows up at the top of your feed.
            </p>
          </header>

          <div className={styles.algorithmsStepsRow}>
            <article className={styles.algorithmsStep}>
              <span className={styles.stepNumber}>1</span>
              <h3>Rank by Reaction</h3>
              <p>
                Posts with strong likes, comments, and watch time get pushed to
                the top, even if they’re oversimplified or misleading.
              </p>
            </article>

            <article className={styles.algorithmsStep}>
              <span className={styles.stepNumber}>2</span>
              <h3>Learn Your Preferences</h3>
              <p>
                The system quietly tracks what you pause on, share, or save, and
                learns which topics keep you scrolling.
              </p>
            </article>

            <article className={styles.algorithmsStep}>
              <span className={styles.stepNumber}>3</span>
              <h3>Narrow the Feed</h3>
              <p>
                Over time, your feed shrinks to a small slice of everything
                online, making some viewpoints feel “normal” and others
                practically invisible.
              </p>
            </article>
          </div>
        </section>

        {/* ECHO CHAMBERS – text on left, dark case card on right */}
        <section
          id="echo-chambers"
          className={styles.echoSection}
          aria-labelledby="echo-heading"
        >
          <div className={styles.echoText}>
            <h2 id="echo-heading">Echo Chambers in Action</h2>
            <p>
              Many people mostly see viewpoints that fit their existing beliefs.
              Over time, that can make disagreement feel rare, extreme, or even
              dangerous.
            </p>

            <h3 className={styles.echoSubheading}>
              Signs you might be in an echo chamber:
            </h3>
            <ul className={styles.echoList}>
              <li>You rarely see posts you strongly disagree with.</li>
              <li>
                Opposing views mostly appear as screenshots used to make fun of
                them.
              </li>
              <li>
                It feels like “everyone” you know online agrees with you.
              </li>
            </ul>
          </div>

          <aside className={styles.echoCaseCard}>
            <figure className={styles.echoCaseImage}>
              <img
                src="/echo_mixed_filtered.jpg"
                alt="Social media icons"
              />
            </figure>
            <p className={styles.echoCaseCaption}>
Inside an algorithm bubble, you mostly see the same reactions, comments, and creators — which makes it feel like everyone agrees with you.            </p>
          </aside>
        </section>

        {/* KEY TAKEAWAYS – wide strip summary */}
        <section
          id="motivation"
          className={styles.takeawaysSection}
          aria-labelledby="takeaways-heading"
        >
          <h2 id="takeaways-heading">Key Takeaways</h2>

          <div className={styles.takeawaysGrid}>
            <p>Feeds are curated — you never see “everything.”</p>
            <p>
              Algorithms reward strong reactions and watch time, not accuracy or
              fairness.
            </p>
            <p>
              Echo chambers can make extreme views feel more common and more
              “normal” than they really are.
            </p>
            <p>
              Knowing how your feed works helps you be an intentional voter
              instead of a passive scroller.
            </p>
          </div>
        </section>

              {/* NEXT STEPS / CROSS-LINKS */}
        <section className={styles.nextStepsSection}>
          <h2>Where to Go Next</h2>
          <p>
            Now that you’ve seen how feeds work, you can dig into the research 
            behind these ideas or turn what you learned into an actual voting plan.
          </p>

          <div className={styles.nextStepsGrid}>
            <a href="/data" className={styles.nextCard}>
              <h3>See the Research</h3>
              <p>
                Visit the Data &amp; Evidence page for short, readable
                breakdowns of the main studies behind this project.
              </p>
              <span className={styles.nextLink}>Go to Data &amp; Evidence →</span>
            </a>

            <a href="/action" className={styles.nextCard}>
              <h3>Turn It Into Action</h3>
              <p>
                Use the Take Action page to slow down your feed, double-check
                information, and make a real voting plan.
              </p>
              <span className={styles.nextLink}>Go to Take Action →</span>
            </a>
          </div>
        </section>


      </main>
    </div>
  );
}