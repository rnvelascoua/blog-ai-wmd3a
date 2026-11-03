import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta
          name="description"
          content="Meet Rhyannah Sophia Velasco: a family-oriented individual committed to learning, meaningful collaboration, and purposeful growth."
        />
      </Head>
      <section className={styles.profile}>
        <p className={styles.eyebrow}>Family, growth &amp; purpose</p>
        <h2 className={styles.introTitle}>Rooted in family. Growing with purpose.</h2>
        <p className={styles.intro}>
          Rhyannah Sophia Velasco is a driven, family-oriented individual who balances her personal
          ambitions with a strong connection to her roots. As the daughter of Raymond and Herlorie
          Velasco, and sister to Rhyles, she draws inspiration from a supportive household that
          values hard work, creativity, and mutual encouragement.
        </p>

        <section className={styles.section} aria-labelledby="values-title">
          <h3 id="values-title" className={styles.sectionTitle}>
            What guides her
          </h3>
          <div className={styles.cardGrid}>
            <article className={styles.card}>
              <h4>Grounded in family</h4>
              <p>
                Her close connection to her family inspires her to approach each step with
                dedication, creativity, and encouragement for those around her.
              </p>
            </article>
            <article className={styles.card}>
              <h4>Adaptable and collaborative</h4>
              <p>
                She brings a fresh perspective to personal and academic or professional pursuits,
                and values working together on meaningful projects.
              </p>
            </article>
            <article className={styles.card}>
              <h4>Always learning</h4>
              <p>
                Whether exploring creative outlets or mastering a new skill, she is committed to
                continuous learning and personal growth.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="future-title">
          <h3 id="future-title" className={styles.sectionTitle}>
            Looking ahead
          </h3>
          <p className={styles.intro}>
            Rhyannah aims to channel her dedication into impactful work and build a path defined by
            purpose, growth, and a lasting commitment to excellence.
          </p>
        </section>
      </section>
    </Layout>
  );
}
