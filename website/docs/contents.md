---
sidebar_position: 2
title: Course Contents
---

# Course Roadmap

## Quick overview

1. **Foundations**: Setup, optimization basics, why derivative-free methods matter.
2. **Core ES algorithms**: (1+1)-ES, population-based ES, self-adaptation.
3. **CMA-ES**: The crown jewel — basics through advanced variants.
4. **NES & Neuroevolution**: Natural gradients, evolving neural networks.
5. **ES for RL**: OpenAI's scalable approach to policy optimization.
6. **Broader evolutionary computation**: GAs, multi-objective, quality diversity, constraints.
7. **Rigor & practice**: Benchmarking, theory, scaling, real-world applications.
8. **Capstone**: Put it all together.

---

## Prerequisites

* **Math**: Linear algebra (eigenvalues, covariance matrices), multivariate calculus (gradients, Hessians), probability and statistics (Gaussian distributions, expectations, KL divergence), basics of optimization (gradient descent, convexity).
* **Coding**: Python (NumPy, Matplotlib, basic OOP). Some PyTorch experience helpful for later modules.
* **Tools**: Git, venv/uv, Jupyter or VS Code.

---

## Recommended resources

### Books
* **Introduction to Evolutionary Computing** by Eiben & Smith — the standard textbook.
* **The CMA Evolution Strategy: A Tutorial** by Nikolaus Hansen — essential CMA-ES reading.
* **Algorithms for Optimization** by Kochenderfer & Wheeler — broader optimization context.
* **Essentials of Metaheuristics** by Sean Luke — accessible and free online.

### Key papers
* Hansen & Ostermeier (2001): "Completely Derandomized Self-Adaptation in Evolution Strategies"
* Salimans et al. (2017): "Evolution Strategies as a Scalable Alternative to Reinforcement Learning"
* Wierstra et al. (2014): "Natural Evolution Strategies"
* Stanley & Miikkulainen (2002): "Evolving Neural Networks through Augmenting Topologies" (NEAT)
* Mouret & Clune (2015): "Illuminating search spaces by mapping elites" (MAP-Elites)
* Deb et al. (2002): "A Fast and Elitist Multiobjective Genetic Algorithm: NSGA-II"

### Key libraries
* `cma` (pycma) — reference CMA-ES implementation
* `nevergrad` — Facebook's gradient-free optimization platform
* `deap` — Distributed Evolutionary Algorithms in Python
* `evosax` — JAX-based ES library (GPU-accelerated)
* `pymoo` — multi-objective optimization framework
* `neat-python` — NEAT implementation
* `qdax` — Quality-Diversity algorithms in JAX

---

## Suggested schedule (flexible)

| Timeframe | Modules | Focus |
|-----------|---------|-------|
| Month 1 | 00-03 | Setup, optimization foundations, basic ES, self-adaptation |
| Month 2 | 04-06 | CMA-ES deep dive, NES |
| Month 3 | 07-09 | Neuroevolution, OpenAI ES, genetic algorithms |
| Month 4 | 10-12 | Multi-objective, quality diversity, constrained optimization |
| Month 5 | 13-14 | Benchmarking, theory |
| Month 6 | 15 | Capstone project |

For research-level mastery, expect 9-12 months including reading papers and contributing to open-source ES libraries.

---

## Practical project ideas

1. **CMA-ES vs. the world**: Compare CMA-ES, NES, and a GA on BBOB functions with statistical rigor.
2. **Evolve a robot controller**: Use ES to train a neural network policy for a locomotion task.
3. **Quality-Diversity robotics**: MAP-Elites for diverse robot gaits with damage adaptation.
4. **Multi-objective engineering**: Solve a real trade-off problem with NSGA-II and visualize the Pareto front.
5. **Surrogate-assisted optimization**: Apply surrogate-assisted CMA-ES to an expensive simulation.
6. **Neuroevolution for game AI**: Evolve a NEAT agent to play a game, visualize the topologies.

---

## Metrics of progress

* You can explain why derivative-free optimization matters and when to use it over gradient methods.
* You can implement (1+1)-ES, (mu,lambda)-ES, and CMA-ES from scratch.
* You can use pycma/nevergrad to solve practical optimization problems.
* You can derive the NES score function gradient and connect it to REINFORCE.
* You can set up rigorous BBOB benchmarks and produce ECDF plots.
* You can evolve a neural network controller for a locomotion task.
* You can solve multi-objective problems and visualize Pareto fronts.
* You can read a new ES paper and reproduce its experiments.
