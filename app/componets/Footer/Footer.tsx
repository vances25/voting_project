import styles from "./style.module.css"

export default function Footer() {
  return (
    <>
      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerLeft}>
            <h3>Feed to Vote Project</h3>
            <p>Exploring how social media shapes voter motivation and participation.</p>
          </div>

          <div className={styles.footerLinks}>
            <a href="/about">About</a>
            <a href="/data">Sources</a>
            <a href="/action">Take Action</a>
          </div>

          <div className={styles.footerRight}>
            <p>Made by Vance Schaefer • WRIT 1301 • 2025</p>
            <p className={styles.credits}>
              Some images provided by <a href="https://storyblocks.com" target="_blank">Storyblocks</a>.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}