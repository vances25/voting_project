import Navbar from "../componets/Navbar/Navbar";
import styles from "./style.module.css";

export default function DataEvidence() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        {/* HERO / INTRO */}
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <p className={styles.heroLabel}>Data &amp; Evidence</p>
            <h1>What the Research Actually Says</h1>
            <p>
              This page pulls together the main studies and reports behind
              <strong> Feed To Vote</strong>. Instead of reading long
              journal articles, you get short summaries, key findings, and why
              each source matters for understanding how social media and voting
              connect.
            </p>

            <div className={styles.heroChips}>
              <span>Why People Vote</span>
              <span>Algorithms &amp; Feeds</span>
              <span>Turnout &amp; Elections</span>
              <span>Real-World Cases</span>
            </div>
          </div>

          <figure className={styles.heroViz}>
            <img
              src="/data_stack.jpg"
              alt="Someone writing stuff down"
            />
          </figure>
        </section>

        {/* QUICK LEGEND / MAP */}
        <section className={styles.legendSection}>
          <h2>How to Read This Page</h2>
          <div className={styles.legendGrid}>
            <div className={styles.legendItem}>
              <h3>Study Snapshot</h3>
              <p>
                A quick description of what the researchers actually did and
                who they studied.
              </p>
            </div>
            <div className={styles.legendItem}>
              <h3>Key Findings</h3>
              <p>
                The main results that connect to social media, information, or
                voting behavior.
              </p>
            </div>
            <div className={styles.legendItem}>
              <h3>Why It Matters</h3>
              <p>
                A short explanation of how this source supports the questions
                asked in this project.
              </p>
            </div>
          </div>
        </section>

        {/* SOURCES GRID */}
        <section className={styles.sourcesSection}>
          {/* Ali & Lin */}
          <article id="ali-lin" className={styles.sourceCard}>
            <header className={styles.sourceHeader}>
              <p className={styles.sourceTag}>Why People Vote</p>
              <h2>Ali &amp; Lin (2013)</h2>
              <p className={styles.sourceCitation}>
                Ali, S. N. &amp; Lin, C. (2013). <em>Why people vote: Ethical
                motives and social incentives.</em> American Economic Journal:
                Microeconomics.
              </p>
            </header>

            <div className={styles.sourceBody}>
              <div className={styles.sourceColumn}>
                <h3>Study Snapshot</h3>
                <p>
                  Ali and Lin look at why people still bother to vote even when
                  one single vote won’t change the outcome. They focus on how
                  people think about their duty to society and how they want to
                  look to others.
                </p>
              </div>

              <div className={styles.sourceColumn}>
                <h3>Key Findings</h3>
                <ul>
                  <li>
                    <strong>Ethical citizens</strong> vote because it feels like
                    a responsibility to help the common good.
                  </li>
                  <li>
                    <strong>Pragmatists</strong> vote when it helps them
                    socially or personally, like looking responsible.
                  </li>
                  <li>
                    When voting feels costly, hard to see, or not encouraged,
                    people are less likely to show up.
                  </li>
                </ul>
              </div>

              <div className={styles.sourceColumn}>
                <h3>Why It Matters Here</h3>
                <p>
                  This study explains the <strong>motives behind voting</strong>.
                  It helps show how social media could boost ethical duty
                  messages or, on the flip side, make voting feel pointless or
                  invisible.
                </p>
              </div>
            </div>
          </article>

          {/* Levy */}
          <article id="levy" className={styles.sourceCard}>
            <header className={styles.sourceHeader}>
              <p className={styles.sourceTag}>Algorithms &amp; Exposure</p>
              <h2>Levy (2021)</h2>
              <p className={styles.sourceCitation}>
                Levy, R. (2021). <em>Social media, news consumption, and
                polarization.</em> American Economic Review.
              </p>
            </header>

            <div className={styles.sourceBody}>
              <div className={styles.sourceColumn}>
                <h3>Study Snapshot</h3>
                <p>
                  Levy ran an experiment with over 10,000 Facebook users who
                  liked either liberal or conservative news pages. The study
                  followed how their feeds changed after subscribing.
                </p>
              </div>

              <div className={styles.sourceColumn}>
                <h3>Key Findings</h3>
                <ul>
                  <li>
                    Liking political news pages didn’t suddenly flip people’s
                    beliefs.
                  </li>
                  <li>
                    Instead, it <strong>changed what they were exposed to</strong>,
                    often limiting the range of viewpoints they saw.
                  </li>
                  <li>
                    Narrow exposure can quietly increase political
                    <strong> polarization</strong> over time.
                  </li>
                </ul>
              </div>

              <div className={styles.sourceColumn}>
                <h3>Why It Matters Here</h3>
                <p>
                  This study supports the idea of <strong>echo chambers</strong>.
                  If your feed mostly shows one side, it may not change who
                  you are, but it does change what feels “normal,” which can
                  affect how motivated you feel to vote.
                </p>
              </div>
            </div>
          </article>

          {/* Fujiwara, Müller & Schwarz */}
          <article id="fujiwara" className={styles.sourceCard}>
            <header className={styles.sourceHeader}>
              <p className={styles.sourceTag}>Turnout &amp; Elections</p>
              <h2>Fujiwara, Müller &amp; Schwarz (2021)</h2>
              <p className={styles.sourceCitation}>
                Fujiwara, T., Müller, K., &amp; Schwarz, C. (2021).{" "}
                <em>
                  The effect of social media on elections: Evidence from the
                  United States.
                </em>{" "}
                NBER Working Paper No. 28849.
              </p>
            </header>

            <div className={styles.sourceBody}>
              <div className={styles.sourceColumn}>
                <h3>Study Snapshot</h3>
                <p>
                  The authors study how Twitter usage across U.S. counties is
                  linked to voting outcomes in real elections, especially for
                  Republicans versus Democrats.
                </p>
              </div>

              <div className={styles.sourceColumn}>
                <h3>Key Findings</h3>
                <ul>
                  <li>
                    Counties with <strong>more Twitter users</strong> saw lower
                    turnout for Republican voters.
                  </li>
                  <li>
                    Political content on Twitter leaned more liberal, so some
                    users saw mainly one side of the debate.
                  </li>
                  <li>
                    Social media exposure can shift <strong>who</strong> shows
                    up to vote, not just what people believe.
                  </li>
                </ul>
              </div>

              <div className={styles.sourceColumn}>
                <h3>Why It Matters Here</h3>
                <p>
                  This study connects the online world to <strong>actual
                  turnout numbers</strong>. It backs up the idea that feeds are
                  not neutral and can subtly change which groups feel energized
                  or discouraged.
                </p>
              </div>
            </div>
          </article>

          {/* Pew Research */}
          <article id="pew" className={styles.sourceCard}>
            <header className={styles.sourceHeader}>
              <p className={styles.sourceTag}>Public Opinion</p>
              <h2>Pew Research Center (2022)</h2>
              <p className={styles.sourceCitation}>
                Pew Research Center. (2022).{" "}
                <em>
                  Social media is seen as mostly good for democracy across many
                  nations, but the U.S. is a major outlier.
                </em>
              </p>
            </header>

            <div className={styles.sourceBody}>
              <div className={styles.sourceColumn}>
                <h3>Study Snapshot</h3>
                <p>
                  Pew surveyed people in 19 countries about whether social media
                  helps or hurts democracy and how it affects information,
                  division, and political discussion.
                </p>
              </div>

              <div className={styles.sourceColumn}>
                <h3>Key Findings</h3>
                <ul>
                  <li>
                    Many people worldwide think social media has{" "}
                    <strong>helped democracy</strong> by informing them and
                    giving them a voice.
                  </li>
                  <li>
                    The United States is an outlier: most Americans say social
                    media has been <strong>bad for democracy</strong>.
                  </li>
                  <li>
                    People worry about misinformation, increased division, and
                    more online arguments—but younger adults are generally more
                    positive.
                  </li>
                </ul>
              </div>

              <div className={styles.sourceColumn}>
                <h3>Why It Matters Here</h3>
                <p>
                  This report shows both the{" "}
                  <strong>upsides and downsides</strong> of social media for
                  political life. It connects directly to voter motivation: some
                  people feel empowered and informed, while others feel burned
                  out and turned off from politics.
                </p>
              </div>
            </div>
          </article>

          {/* BBC on Russian meddling */}
          <article id="bbc" className={styles.sourceCard}>
            <header className={styles.sourceHeader}>
              <p className={styles.sourceTag}>Real-World Case</p>
              <h2>BBC News (2018)</h2>
              <p className={styles.sourceCitation}>
                BBC News. (2018).{" "}
                <em>Russia “meddled in all big social media” around US election.</em>
              </p>
            </header>

            <div className={styles.sourceBody}>
              <div className={styles.sourceColumn}>
                <h3>Report Snapshot</h3>
                <p>
                  This BBC article explains how Russian groups used major
                  platforms—Facebook, Twitter, YouTube, Instagram, and others—
                  to spread political propaganda during the 2016 U.S. election.
                </p>
              </div>

              <div className={styles.sourceColumn}>
                <h3>Key Findings</h3>
                <ul>
                  <li>
                    The Internet Research Agency targeted different groups with
                    custom messages, including conservatives and African
                    American voters.
                  </li>
                  <li>
                    Some messages tried to <strong>boost support</strong> for
                    Donald Trump; others tried to <strong>discourage voting</strong> among certain groups.
                  </li>
                  <li>
                    Tech companies were slow to detect and stop the
                    manipulation.
                  </li>
                </ul>
              </div>

              <div className={styles.sourceColumn}>
                <h3>Why It Matters Here</h3>
                <p>
                  This case shows how social media can be used to{" "}
                  <strong>manipulate voter motivation on purpose</strong>.
                  It connects the ideas of echo chambers, targeted messaging,
                  and misinformation to a real election.
                </p>
              </div>
            </div>
          </article>

                   {/* Interview / Primary Source */}
          <article id="interview" className={styles.sourceCard}>
            <header className={styles.sourceHeader}>
              <p className={styles.sourceTag}>Primary Source</p>
              <h2>Conversation with a Voter</h2>
              <p className={styles.sourceCitation}>
                V. Schaefer, personal communication, December 1, 2025.
              </p>
            </header>

            <div className={styles.sourceBody}>
              <div className={styles.sourceColumn}>
                <h3>Source Snapshot</h3>
                <p>
                  I interviewed my mom, who grew up before social media and now
                  uses Facebook, about how politics and voting have changed in
                  her life. When she was younger, most political talk in the
                  family focused on things like taxes and came from TV news,
                  not from the internet. She didn’t pay much attention to
                  elections until her 30s.
                </p>
              </div>

              <div className={styles.sourceColumn}>
                <h3>What It Showed</h3>
                <ul>
                  <li>
                    She joined Facebook around 2008, and the Obama election was
                    the first time she experienced politics mixed into her
                    social media feed. At first she mainly used it to stay in
                    touch with friends and family.
                  </li>
                  <li>
                    She sometimes feels an urgency to vote a certain way when
                    online information makes the opposite choice seem dangerous
                    or “problematic,” but she is also very skeptical of posts
                    that seem too good to be true.
                  </li>
                  <li>
                    She remembers bad information spreading even before social
                    media, like false ideas in the 1980s–90s about how HIV was
                    contracted, and uses that memory to decide what to trust
                    and what to ignore now.
                  </li>
                  <li>
                    She thinks young voters today are more influenced by online
                    political content than older adults because there is so much
                    more of it, it’s easier to access, and it often feels more
                    extreme, with fewer people staying in the middle.
                  </li>
                </ul>
              </div>

              <div className={styles.sourceColumn}>
                <h3>Why It Matters Here</h3>
                <p>
                  This interview puts the research on <strong>exposure</strong>,
                  <strong> echo chambers</strong>, and <strong>voter
                  motivation</strong> into a real person’s story. It shows how
                  someone who grew up with TV news now navigates social media
                  feeds, pressure, and misinformation—and why younger voters
                  who live inside these feeds every day might be even more
                  affected by what they see.
                </p>
              </div>
            </div>
          </article>
        </section>

        {/* SYNTHESIS / PATTERNS */}
        <section className={styles.patternsSection}>
          <h2>Big Patterns Across the Evidence</h2>
          <div className={styles.patternsGrid}>
            <div className={styles.patternCard}>
              <h3>Motives + Feeds = Action</h3>
              <p>
                Ali &amp; Lin explain <strong>why</strong> people feel like
                voting; Levy and Fujiwara show how feeds can boost or weaken
                that motivation by changing what feels normal and urgent.
              </p>
            </div>
            <div className={styles.patternCard}>
              <h3>Exposure Matters More Than We Think</h3>
              <p>
                Across the studies, what you <strong>see over and over</strong>{" "}
                matters more than one single shocking post. Slow changes in
                exposure shape attitudes and turnout.
              </p>
            </div>
            <div className={styles.patternCard}>
              <h3>Democracy Feels Different Online</h3>
              <p>
                Pew and the BBC example show that people are both empowered and
                exhausted by social media. That tension is at the center of this
                project: how do we use these tools without letting them quietly
                control our vote?
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}