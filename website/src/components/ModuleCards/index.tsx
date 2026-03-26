import React from 'react';
import styles from './styles.module.css';

interface ModuleInfo {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const modules: ModuleInfo[] = [
  {id: 'm00', title: 'Setup & Tools', description: 'Install libraries, run your first optimization, visualize populations', icon: '\u{1F6E0}\u{FE0F}'},
  {id: 'm01', title: 'Optimization Foundations', description: 'Random search, hill climbing, fitness landscapes', icon: '\u{1F3D4}\u{FE0F}'},
  {id: 'm02', title: 'The (1+1)-ES', description: "Rechenberg's 1/5th rule, Gaussian mutation, step-size adaptation", icon: '\u{1F9EC}'},
  {id: 'm03', title: 'Population-Based ES', description: '(\u00B5,\u03BB)-ES, (\u00B5+\u03BB)-ES, recombination, self-adaptation', icon: '\u{1F465}'},
  {id: 'm04', title: 'CMA-ES: The Crown Jewel', description: 'Covariance matrix adaptation, rank-one/rank-mu updates', icon: '\u{1F451}'},
  {id: 'm05', title: 'CMA-ES Advanced', description: 'IPOP/BIPOP restarts, sep-CMA, large-scale variants', icon: '\u{1F680}'},
  {id: 'm06', title: 'Natural Evolution Strategies', description: 'Score function estimator, xNES, fitness shaping', icon: '\u{1F4CA}'},
  {id: 'm07', title: 'Neuroevolution', description: 'NEAT, HyperNEAT, evolving architectures', icon: '\u{1F9E0}'},
  {id: 'm08', title: 'OpenAI ES for RL', description: 'ES as scalable RL alternative, shared noise tables', icon: '\u{1F3AE}'},
  {id: 'm09', title: 'Genetic Algorithms', description: 'Selection, crossover, mutation, GA vs ES', icon: '\u{1F500}'},
  {id: 'm10', title: 'Multi-Objective Optimization', description: 'Pareto fronts, NSGA-II, hypervolume', icon: '\u{1F3AF}'},
  {id: 'm11', title: 'Quality Diversity', description: 'MAP-Elites, novelty search, illumination', icon: '\u{1F308}'},
  {id: 'm12', title: 'Constrained & Combinatorial', description: 'Penalty methods, discrete variables, mixed-integer', icon: '\u{1F512}'},
  {id: 'm13', title: 'Benchmarking', description: 'BBOB/COCO, ECDF plots, statistical testing', icon: '\u{1F4CF}'},
  {id: 'm14', title: 'Theory & Foundations', description: 'Convergence rates, information geometry, natural gradients', icon: '\u{1F4D0}'},
  {id: 'm15', title: 'Capstone', description: 'Pick a real problem, run experiments, write it up', icon: '\u{1F3C6}'},
];

export default function ModuleCards(): React.JSX.Element {
  return (
    <div className={styles.grid}>
      {modules.map((mod) => (
        <a key={mod.id} href={`course/modules/${mod.id}`} className={styles.card}>
          <div className={styles.cardIcon}>{mod.icon}</div>
          <div className={styles.cardBody}>
            <div className={styles.cardLabel}>{mod.id.toUpperCase()}</div>
            <h3 className={styles.cardTitle}>{mod.title}</h3>
            <p className={styles.cardDesc}>{mod.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
