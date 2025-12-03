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
              All of the ideas here are connected to the studies and reports
              summarized on the <strong>Data &amp; Evidence</strong> page.
            </p>

            <div className={styles.effectsHeroChips}>
              <a href="#algorithms">Algorithms</a>
              <a href="#echo-chambers">Echo Chambers</a>
              <a href="#motivation">Motivation</a>
            </div>

            <div className={styles.heroEvidenceLink}>
              <a href="/data">See all sources on Data &amp; Evidence →</a>
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
              That changes what shows up at the top of your feed and which
              political ideas feel “normal.”
            </p>
          </header>

          <div className={styles.algorithmsStepsRow}>
            <article className={styles.algorithmsStep}>
              <span className={styles.stepNumber}>1</span>
              <h3>Rank by Reaction</h3>
              <p>
                Posts with strong likes, comments, and watch time get pushed to
                the top, even if they’re oversimplified, emotional, or
                misleading.
              </p>
            </article>

            <article className={styles.algorithmsStep}>
              <span className={styles.stepNumber}>2</span>
              <h3>Learn Your Preferences</h3>
              <p>
                The system quietly tracks what you pause on, share, or save and
                learns which topics keep you scrolling the longest.
              </p>
            </article>

            <article className={styles.algorithmsStep}>
              <span className={styles.stepNumber}>3</span>
              <h3>Narrow the Feed</h3>
              <p>
                Over time, your feed shrinks to a small slice of everything
                online, making some viewpoints feel “normal” and others almost
                invisible.
              </p>
            </article>
          </div>

          {/* Evidence strip for algorithms / exposure / turnout */}
          <div className={styles.evidenceStrip}>
            <p className={styles.evidenceLabel}>Backed by:</p>
            <a href="/data#levy" className={styles.evidenceLink}>
              Levy (2021) – feeds &amp; polarization
            </a>
            <span className={styles.evidenceDot}>•</span>
            <a href="/data#fujiwara" className={styles.evidenceLink}>
              Fujiwara et al. (2021) – social media &amp; turnout
            </a>
            <span className={styles.evidenceDot}>•</span>
            <a href="/data#janfaza" className={styles.evidenceLink}>
              Janfaza (2020) – TikTok &amp; activism
            </a>
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
              dangerous — especially when every screen looks the same.
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
                It feels like “everyone” you know online agrees with you about
                politics.
              </li>
            </ul>

            {/* Evidence strip for echo chambers / democracy / meddling */}
            <div className={styles.evidenceStrip}>
              <p className={styles.evidenceLabel}>Seen in:</p>
              <a href="/data#pew" className={styles.evidenceLink}>
                Pew (2022) – democracy &amp; division online
              </a>
              <span className={styles.evidenceDot}>•</span>
              <a href="/data#bbc" className={styles.evidenceLink}>
                BBC (2018) – targeted election meddling
              </a>
              <span className={styles.evidenceDot}>•</span>
              <a href="/data#janfaza" className={styles.evidenceLink}>
                Janfaza (2020) – TikTok as a political hub
              </a>
            </div>
          </div>

          <aside className={styles.echoCaseCard}>
            <figure className={styles.echoCaseImage}>
              <img
                src="/echo_mixed_filtered.jpg"
                alt="Social media icons"
              />
            </figure>
            <p className={styles.echoCaseCaption}>
              Algorithms repeat content from the same side over and over. Studies show this
            doesn’t change your beliefs instantly — it changes what feels normal, visible,
            and socially supported.
            </p>

            <div className={styles.caseLinkBlock}>
              <p className={styles.caseLabel}>Real-world example:</p>
              <a href="/data#cnn-janfaza" className={styles.caseLink}>
                TikTok &amp; #BlackLivesMatter – how activism spreads →
              </a>
            </div>
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

          {/* Evidence strip for motivation / why people vote / personal story */}
          <div className={styles.evidenceStrip}>
            <p className={styles.evidenceLabel}>Connects to:</p>
            <a href="/data#ali-lin" className={styles.evidenceLink}>
              Ali &amp; Lin (2013) – why people feel like voting
            </a>
            <span className={styles.evidenceDot}>•</span>
            <a href="/data#interview" className={styles.evidenceLink}>
              Primary interview – how one voter experiences feeds
            </a>
            <span className={styles.evidenceDot}>•</span>
            <a href="/data#patterns" className={styles.evidenceLink}>
              Big patterns – motives + feeds = action
            </a>
          </div>
        </section>

        {/* NEXT STEPS / CROSS-LINKS */}
        <section className={styles.nextStepsSection}>
          <h2>Where to Go Next</h2>
          <p>
            Now that you’ve seen how feeds work, you can dig into the research
            behind these ideas or turn what you learned into an actual voting
            plan.
          </p>

          <div className={styles.nextStepsGrid}>
            <a href="/data" className={styles.nextCard}>
              <h3>See the Research</h3>
              <p>
                Visit the Data &amp; Evidence page for short, readable
                breakdowns of the main studies and real-world cases behind this
                project.
              </p>
              <span className={styles.nextLink}>
                Go to Data &amp; Evidence →
              </span>
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