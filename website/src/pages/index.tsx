import React from 'react';
import Layout from '@theme/Layout';
import HomepageHeader from '@site/src/components/HomepageHeader';
import ModuleCards from '@site/src/components/ModuleCards';
import styles from './index.module.css';

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Evolutionary Computation - A Learning Journey"
      description="A hands-on, code-first guide to evolutionary computation - from genetic algorithms to CMA-ES and beyond"
    >
      <HomepageHeader />
      <main className={styles.main}>
        <section className={styles.features}>
          <div className={styles.featureGrid}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>&#x1F4BB;</div>
              <h3>Code-First</h3>
              <p>Every concept has runnable Python. No hand-waving - you'll implement EC algorithms from scratch.</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>&#x1F4D0;</div>
              <h3>Just Enough Math</h3>
              <p>Clear explanations with KaTeX-rendered equations. Enough rigor to understand why things work.</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>&#x1F30D;</div>
              <h3>Real-World Examples</h3>
              <p>From robot locomotion to portfolio optimization - see how evolutionary methods solve actual problems.</p>
            </div>
          </div>
        </section>

        <section className={styles.modules}>
          <h2 className={styles.sectionTitle}>27 Modules, Zero to Mastery</h2>
          <p className={styles.sectionSubtitle}>
            A structured path through genetic algorithms, evolution strategies, swarm intelligence, neuroevolution, and beyond.
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
