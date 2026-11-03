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
          content="Rhyles David Velasco is an aspiring game developer and gameplay programmer focused on C++, Lua, Unreal Engine, and Luau."
        />
      </Head>
      <section className={styles.profile}>
        <p className={styles.eyebrow}>Aspiring Game Developer &amp; Gameplay Programmer</p>
        <h2 className={styles.introTitle}>Building interactive worlds, one system at a time.</h2>
        <p className={styles.intro}>
          I&apos;m a driven, self-taught programmer focused on game mechanics and interactive
          systems. I move between rapid prototyping and performance-minded engineering, connecting
          high-level gameplay logic with efficient low-level systems.
        </p>

        <div className={styles.toolkit} aria-label="Core toolkit">
          <span>C++</span>
          <span>Lua</span>
          <span>Unreal Engine</span>
          <span>Luau</span>
          <span>Roblox Studio</span>
        </div>

        <section className={styles.section} aria-labelledby="specializations-title">
          <h3 id="specializations-title" className={styles.sectionTitle}>
            Technical specializations
          </h3>
          <div className={styles.cardGrid}>
            <article className={styles.card}>
              <h4>C++ engineering</h4>
              <p>
                Building custom game mechanics, optimizing system memory, and creating modular
                features inside Unreal Engine.
              </p>
            </article>
            <article className={styles.card}>
              <h4>Lua scripting</h4>
              <p>
                Writing lightweight scripts for game logic, UI behavior, and sandbox environments,
                including Roblox Studio and micro-engines.
              </p>
            </article>
            <article className={styles.card}>
              <h4>Hybrid workflow</h4>
              <p>
                Using C++ for performance-critical foundations and exposing clean Lua APIs so
                gameplay can be iterated on quickly.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="projects-title">
          <h3 id="projects-title" className={styles.sectionTitle}>
            Dream projects
          </h3>
          <div className={styles.cardGrid}>
            <article className={styles.projectCard}>
              <h4>The Modular Sandbox</h4>
              <p>
                A data-driven action RPG powered by a lightweight custom C++ physics loop and
                scripted entirely through Lua.
              </p>
            </article>
            <article className={styles.projectCard}>
              <h4>Procedural AI Ecosystems</h4>
              <p>
                A flexible NPC behavior framework built with C++ behavior trees that developers can
                tune on the fly with Lua scripts.
              </p>
            </article>
          </div>
        </section>
      </section>
    </Layout>
  );
}
