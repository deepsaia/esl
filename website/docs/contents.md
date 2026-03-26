---
sidebar_position: 2
title: Course Contents
---

# Course Roadmap

## Quick overview

1. **Foundations**: What EC is, optimization basics, representation and operators.
2. **Genetic Algorithms**: Holland's GA through real-coded, adaptive, and parallel variants.
3. **Evolution Strategies**: (1+1)-ES through CMA-ES and natural evolution strategies.
4. **Other EC Paradigms**: Genetic programming, differential evolution, EDAs, coevolution.
5. **Swarm Intelligence**: PSO, ant colony optimization, and the nature-inspired zoo.
6. **Multi-Objective & Diversity**: Pareto optimization, many-objective, quality-diversity.
7. **Neuroevolution & Deep Learning**: NEAT, EC for NN training, ES for RL.
8. **Advanced Topics**: Constraints, surrogates, hyper-heuristics.
9. **Rigor & Capstone**: Benchmarking methodology, theory, and your capstone project.

---

## Prerequisites

* **Math**: Linear algebra (eigenvalues, covariance matrices), multivariate calculus (gradients, Hessians), probability and statistics (Gaussian distributions, expectations, KL divergence), basics of optimization (gradient descent, convexity).
* **Coding**: Python (NumPy, Matplotlib, basic OOP). Some PyTorch experience helpful for later modules.
* **Tools**: Git, venv/uv, Jupyter or VS Code.

---

## Recommended resources

### Books
* **Introduction to Evolutionary Computing** by Eiben & Smith - the standard modern textbook.
* **Evolutionary Computation: A Unified Approach** by Kenneth De Jong - authoritative theoretical treatment.
* **Handbook of Evolutionary Computation** by Back, Fogel & Michalewicz - comprehensive reference.
* **Adaptation in Natural and Artificial Systems** by John Holland - the founding GA text.
* **The CMA Evolution Strategy: A Tutorial** by Nikolaus Hansen - essential CMA-ES reading.
* **Ant Colony Optimization** by Dorigo & Stutzle - definitive ACO reference.
* **Genetic Programming** by Koza - the four-volume series that started GP.
* **Computational Intelligence: An Introduction** by Engelbrecht - broader CI context.
* **Essentials of Metaheuristics** by Sean Luke - accessible and free online.

### Key papers
* Holland (1975): *Adaptation in Natural and Artificial Systems* - the GA foundation
* Rechenberg (1973): *Evolutionsstrategie* - the ES foundation
* Hansen & Ostermeier (2001): "Completely Derandomized Self-Adaptation in Evolution Strategies"
* Storn & Price (1997): "Differential Evolution - A Simple and Efficient Heuristic for Global Optimization"
* Kennedy & Eberhart (1995): "Particle Swarm Optimization"
* Dorigo et al. (1996): "Ant System: Optimization by a Colony of Cooperating Agents"
* Koza (1992): "Genetic Programming: On the Programming of Computers by Means of Natural Selection"
* Deb et al. (2002): "A Fast and Elitist Multiobjective Genetic Algorithm: NSGA-II"
* Stanley & Miikkulainen (2002): "Evolving Neural Networks through Augmenting Topologies" (NEAT)
* Salimans et al. (2017): "Evolution Strategies as a Scalable Alternative to Reinforcement Learning"
* Mouret & Clune (2015): "Illuminating search spaces by mapping elites" (MAP-Elites)
* Wierstra et al. (2014): "Natural Evolution Strategies"

### Key libraries
* `cma` (pycma) - reference CMA-ES implementation
* `nevergrad` - Meta's gradient-free optimization platform
* `deap` - Distributed Evolutionary Algorithms in Python
* `pyswarms` - Particle swarm optimization
* `gplearn` - Genetic programming / symbolic regression
* `pymoo` - multi-objective optimization framework
* `neat-python` - NEAT implementation
* `evosax` - JAX-based ES library (GPU-accelerated)
* `qdax` - Quality-Diversity algorithms in JAX
* `ioh` - IOHprofiler benchmarking framework

---

## Suggested schedule (flexible)

| Timeframe | Modules | Focus |
|-----------|---------|-------|
| Month 1 | 00-02 | Foundations, optimization basics, operators |
| Month 2 | 03-05 | Genetic algorithms, (1+1)-ES |
| Month 3 | 06-08 | Population ES, CMA-ES, NES |
| Month 4 | 09-12 | GP, DE, EDAs, coevolution |
| Month 5 | 13-15 | Swarm intelligence |
| Month 6 | 16-18 | Multi-objective, quality-diversity |
| Month 7 | 19-21 | Neuroevolution, EC for NNs, ES for RL |
| Month 8 | 22-24 | Constraints, surrogates, hyper-heuristics |
| Month 9 | 25-26 | Benchmarking, theory, capstone |

For research-level mastery, expect 12-15 months including reading papers and contributing to open-source EC libraries.

---

## Practical project ideas

1. **EC Algorithm Showdown**: Compare GA, CMA-ES, DE, and PSO on BBOB functions with statistical rigor.
2. **Evolve a robot controller**: Use ES or NEAT to train a neural network policy for a locomotion task.
3. **Symbolic regression with GP**: Rediscover physical laws from data using genetic programming.
4. **Quality-Diversity robotics**: MAP-Elites for diverse robot gaits with damage adaptation.
5. **Multi-objective engineering**: Solve a real trade-off problem with NSGA-II and visualize the Pareto front.
6. **ACO for logistics**: Solve a real routing/scheduling problem with ant colony optimization.
7. **Surrogate-assisted optimization**: Apply surrogate-assisted CMA-ES to an expensive simulation.
8. **Neuroevolution for game AI**: Evolve a NEAT agent to play a game, visualize the topologies.
9. **Coevolution game strategies**: Evolve competing strategies for Iterated Prisoner's Dilemma.
10. **DE for engineering design**: Optimize a real engineering problem (antenna, airfoil, circuit).

---

## Metrics of progress

* You can explain the EC landscape and when to use each algorithm family.
* You can implement a GA, (1+1)-ES, CMA-ES, DE, and PSO from scratch.
* You can use pycma, nevergrad, deap, and pyswarms to solve practical problems.
* You can build a GP system for symbolic regression.
* You can set up rigorous BBOB benchmarks and produce ECDF plots.
* You can evolve a neural network controller for a locomotion task.
* You can solve multi-objective problems and visualize Pareto fronts.
* You can explain the No Free Lunch theorem and its practical implications.
* You can read a new EC paper and reproduce its experiments.
* You can critically evaluate a "novel nature-inspired algorithm" paper.
