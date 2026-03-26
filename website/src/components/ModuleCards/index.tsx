import React from 'react';
import styles from './styles.module.css';

interface ModuleInfo {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const modules: ModuleInfo[] = [
  {id: 'm00', title: 'Introduction to EC', description: 'What is evolutionary computation, CI landscape, setup your lab', icon: '\u{1F9EC}'},
  {id: 'm01', title: 'Optimization Foundations', description: 'Random search, hill climbing, fitness landscapes, No Free Lunch', icon: '\u{1F3D4}\u{FE0F}'},
  {id: 'm02', title: 'Representation & Operators', description: 'Binary, real, permutation encodings; mutation, crossover, selection', icon: '\u{1F9E9}'},
  {id: 'm03', title: 'GA Fundamentals', description: "Holland's GA, binary encoding, crossover, schema theorem", icon: '\u{1F500}'},
  {id: 'm04', title: 'GA Advanced', description: 'Real-coded GAs, SBX, adaptive operators, island models', icon: '\u{1F3DD}\u{FE0F}'},
  {id: 'm05', title: 'The (1+1)-ES', description: "Rechenberg's 1/5th rule, Gaussian mutation, step-size adaptation", icon: '\u{1F9EA}'},
  {id: 'm06', title: 'Population-Based ES', description: '(\u00B5,\u03BB)-ES, (\u00B5+\u03BB)-ES, self-adaptation', icon: '\u{1F465}'},
  {id: 'm07', title: 'CMA-ES', description: 'Covariance matrix adaptation, rank-one/rank-mu updates', icon: '\u{1F451}'},
  {id: 'm08', title: 'CMA-ES Advanced & NES', description: 'Restarts, large-scale variants, natural gradients, xNES', icon: '\u{1F680}'},
  {id: 'm09', title: 'Genetic Programming', description: 'Tree-based GP, symbolic regression, bloat control', icon: '\u{1F333}'},
  {id: 'm10', title: 'Differential Evolution', description: 'DE/rand/1, adaptive DE, SHADE, when DE beats CMA-ES', icon: '\u{2194}\u{FE0F}'},
  {id: 'm11', title: 'EDAs', description: 'PBIL, UMDA, BOA, CMA-ES as an EDA', icon: '\u{1F4CA}'},
  {id: 'm12', title: 'Coevolution & Memetic', description: 'Competitive/cooperative coevolution, EA + local search', icon: '\u{2694}\u{FE0F}'},
  {id: 'm13', title: 'Particle Swarm (PSO)', description: 'Velocity update, topologies, inertia weight', icon: '\u{1F426}'},
  {id: 'm14', title: 'Ant Colony (ACO)', description: 'Pheromone trails, TSP, routing problems', icon: '\u{1F41C}'},
  {id: 'm15', title: 'Other Swarm Methods', description: 'ABC, firefly, the metaphor problem in EC', icon: '\u{1F41D}'},
  {id: 'm16', title: 'Multi-Objective EA', description: 'Pareto fronts, NSGA-II, SPEA2, hypervolume', icon: '\u{1F3AF}'},
  {id: 'm17', title: 'Many-Objective & MOEA/D', description: 'NSGA-III, decomposition, indicator-based methods', icon: '\u{1F4C8}'},
  {id: 'm18', title: 'Quality-Diversity', description: 'MAP-Elites, novelty search, illumination algorithms', icon: '\u{1F308}'},
  {id: 'm19', title: 'Neuroevolution', description: 'NEAT, HyperNEAT, evolving network topology', icon: '\u{1F9E0}'},
  {id: 'm20', title: 'EC for NN Training', description: 'Weight evolution, NAS, hybrid gradient+evolution', icon: '\u{1F916}'},
  {id: 'm21', title: 'ES for RL', description: 'OpenAI ES, shared noise tables, policy optimization', icon: '\u{1F3AE}'},
  {id: 'm22', title: 'Constrained & Combinatorial', description: 'Penalty methods, scheduling, mixed-integer', icon: '\u{1F512}'},
  {id: 'm23', title: 'Surrogate-Assisted', description: 'Expensive optimization, GP surrogates, Bayesian connection', icon: '\u{1F52E}'},
  {id: 'm24', title: 'LCS & Hyper-heuristics', description: 'Evolving rules, evolving heuristics, algorithm configuration', icon: '\u{1F4DC}'},
  {id: 'm25', title: 'Benchmarking', description: 'BBOB/COCO, ECDF plots, statistical testing', icon: '\u{1F4CF}'},
  {id: 'm26', title: 'Theory & Capstone', description: 'Runtime analysis, natural gradients, capstone project', icon: '\u{1F3C6}'},
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
