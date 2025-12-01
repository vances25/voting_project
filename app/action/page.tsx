"use client";

import Navbar from "../componets/Navbar/Navbar";
import styles from "./style.module.css";

export default function TakeAction() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        {/* HERO */}
        <section id="hero" className={styles.hero}>
          <div className={styles.heroText}>
            <p className={styles.heroLabel}>TAKE ACTION</p>
            <h1>Turn What You Learned Into Real Choices</h1>
            <p>
              This page is about using what you’ve seen on this site to be a more
              informed voter. Before you step into the booth, you can slow down,
              question your feed, and double-check what you’re seeing.
            </p>

            <div className={styles.heroChips}>
              <span>Understand Your Feed</span>
              <span>Question Your Sources</span>
              <span>Plan Your Vote</span>
            </div>
          </div>

          <div className={styles.heroViz}>
            <img
              src="/take_action.jpg"
              alt="Person reviewing information on their phone and laptop before voting"
            />
          </div>
        </section>

        {/* ACTION GRID – LEARN + THEN VOTE */}
        <section id="actions" className={styles.actionGrid}>
          {/* Understand Your Feed */}
          <div className={styles.actionCard}>
            <h2>1. Understand Your Feed</h2>
            <p>
              Go back to the Social Media Effects page and think about how your
              own feed is shaped. Are you mostly seeing one side? Are extreme
              posts showing up more than calm ones?
            </p>
            <p>
              Ask yourself: <em>Who posted this?</em> <em>Why am I seeing it?</em>{" "}
              <em>What doesn’t show up here?</em>
            </p>
            <a
              href="/social-media-effects"
              className={styles.actionButton}
            >
              Revisit Social Media Effects →
            </a>
          </div>

          {/* Check the Evidence */}
          <div className={styles.actionCard}>
            <h2>2. Check the Evidence</h2>
            <p>
              If a post or video makes a strong claim, try to match it with real
              research. The Data &amp; Evidence page gives short summaries of
              studies and reports you can use as a reality check.
            </p>
            <p>
              You don’t need to memorize every study—just get used to asking,
              “Is there actual evidence behind this?”
            </p>
            <a
              href="/data-evidence"
              className={styles.actionButton}
            >
              Explore Data &amp; Evidence →
            </a>
          </div>

          {/* Get Ready to Vote */}
          <div className={styles.actionCard}>
            <h2>3. Get Ready to Vote</h2>
            <p>
              Once you feel more informed, you can take the practical steps:
              making sure you’re registered, knowing where you’ll vote, and
              sharing helpful tools with friends who are also figuring this out.
            </p>

            <div className={styles.shareButtons}>
              <a
                href="https://vote.gov"
                target="_blank"
                className={styles.actionButton}
              >
                Register at Vote.gov →
              </a>
              <a
                href="https://www.vote.org/polling-place-locator/"
                target="_blank"
                className={styles.actionButton}
              >
                Find Your Polling Place →
              </a>
            </div>
          </div>
        </section>

        {/* EXTRA RESOURCES */}
        <section id="resources" className={styles.resourceSection}>
          <h2>Learn to Double-Check Information</h2>
          <p>
            These non-partisan tools help you go beyond social media. You can
            look up who’s on your ballot, what each role actually does, and read
            about issues in plain language instead of just relying on posts.
          </p>

          <ul className={styles.resourceList}>
            <li>
              <a href="https://ballotpedia.org/" target="_blank">
                Ballotpedia — guides to candidates, ballot questions, and how each office works
              </a>
            </li>
            <li>
              <a href="https://www.usa.gov/voting" target="_blank">
                USA.gov — official information on voting rules, ID, and deadlines
              </a>
            </li>
            <li>
              <a href="https://www.vote411.org/" target="_blank">
                Vote411 — personalized voter guide from the League of Women Voters
              </a>
            </li>
          </ul>
        </section>

        {/* SHARE PROJECT */}
        <section id="share" className={styles.resourceSection}>
          <h2>Share What You’ve Learned</h2>
          <p>
            If this site helped you think more about your feed and your vote,
            share it with a friend, classmate, or family member. The more people
            understand how their feeds work, the harder they are to manipulate.
          </p>

          <div className={styles.shareButtons}>
            <button
              className={styles.share}
              onClick={() =>
                navigator.share?.({
                  title: "Feed To Vote",
                  text: "Check out this project explaining how social media influences voter motivation.",
                  url: window.location.origin,
                })
              }
            >
              Share on Device
            </button>

            <button
              className={styles.copy}
              onClick={() => {
                navigator.clipboard.writeText(window.location.origin);
                alert("Copied link!");
              }}
            >
              Copy Link
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}