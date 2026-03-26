import React from 'react';
import Layout from '@theme/Layout';
import HomepageHeader from '@site/src/components/HomepageHeader';
import ModuleCards from '@site/src/components/ModuleCards';
import styles from './index.module.css';

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Evolution Strategies — A Learning Journey"
      description="A hands-on, code-first guide to Evolution Strategies and evolutionary computation"
    >
      <HomepageHeader />
      <main className={styles.main}>
        <section className={styles.features}>
          <div className={styles.featureGrid}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>&#x1F4BB;</div>
              <h3>Code-First</h3>
              <p>Every concept has runnable Python. No hand-waving — you'll implement ES algorithms from scratch.</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>&#x1F4D0;</div>
              <h3>Just Enough Math</h3>
              <p>Clear explanations with KaTeX-rendered equations. Enough rigor to understand why things work.</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>&#x1F30D;</div>
              <h3>Real-World Examples</h3>
              <p>From robot locomotion to portfolio optimization — see how ES solves actual problems.</p>
            </div>
          </div>
        </section>

        <section className={styles.modules}>
          <h2 className={styles.sectionTitle}>16 Modules, Zero to Mastery</h2>
          <p className={styles.sectionSubtitle}>
            A structured path from basic optimization to CMA-ES, neuroevolution, quality diversity, and beyond.
          </p>
          <ModuleCards />
        </section>

        <section className={styles.cta}>
          <div className={styles.ctaInner}>
            <h2>Ready to evolve?</h2>
            <p>All you need is Python 3.13+ and a tolerance for watching fitness curves that take 500 generations to do anything interesting.</p>
            <a href="course/modules/m00" className={styles.ctaButton}>
              Get Started
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
