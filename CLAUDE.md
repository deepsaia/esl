# CLAUDE.md - Project Guide for ECL (Evolutionary Computation Learning)

## Project Overview

This is a **hands-on Evolutionary Computation course** - a structured, module-by-module curriculum that takes learners from zero to expertise in EC. It covers the full breadth of evolutionary computation: genetic algorithms, evolution strategies, genetic programming, differential evolution, swarm intelligence, neuroevolution, multi-objective optimization, quality-diversity, and more. It includes a documentation website (deployed to GitHub Pages) and runnable Python code for every concept.

- **Repo**: `deepsaia/ecl`
- **Live site**: https://deepsaia.github.io/ecl/
- **Author**: Deepak
- **Python**: 3.13+ (managed with `uv`)
- **Docs framework**: Docusaurus (React/Node.js), deployed via GitHub Actions to GitHub Pages

---

## Module Structure (27 Modules, 9 Sections)

### A. Foundations
| Module | Topic |
|--------|-------|
| 00 | Introduction to Evolutionary Computation |
| 01 | Optimization Foundations |
| 02 | Representation, Operators & Selection |

### B. Genetic Algorithms
| Module | Topic |
|--------|-------|
| 03 | Genetic Algorithms: Fundamentals |
| 04 | Genetic Algorithms: Advanced Topics |

### C. Evolution Strategies
| Module | Topic |
|--------|-------|
| 05 | The (1+1)-ES |
| 06 | Population-Based ES |
| 07 | CMA-ES: The Crown Jewel |
| 08 | CMA-ES Advanced & Natural Evolution Strategies |

### D. Other EC Paradigms
| Module | Topic |
|--------|-------|
| 09 | Genetic Programming |
| 10 | Differential Evolution |
| 11 | Estimation of Distribution Algorithms |
| 12 | Coevolution, Memetic & Cultural Algorithms |

### E. Swarm Intelligence
| Module | Topic |
|--------|-------|
| 13 | Particle Swarm Optimization |
| 14 | Ant Colony Optimization |
| 15 | Other Swarm & Nature-Inspired Methods |

### F. Multi-Objective & Diversity
| Module | Topic |
|--------|-------|
| 16 | Multi-Objective Evolutionary Optimization |
| 17 | Many-Objective & Decomposition Methods |
| 18 | Quality-Diversity Algorithms |

### G. Neuroevolution & Deep Learning
| Module | Topic |
|--------|-------|
| 19 | Neuroevolution: Evolving Network Topology |
| 20 | EC for Neural Network Training |
| 21 | ES for RL & Policy Optimization |

### H. Advanced Topics
| Module | Topic |
|--------|-------|
| 22 | Constrained & Combinatorial EC |
| 23 | Surrogate-Assisted & Expensive Optimization |
| 24 | Learning Classifier Systems & Hyper-heuristics |

### I. Rigor & Capstone
| Module | Topic |
|--------|-------|
| 25 | Benchmarking & Experimental Methodology |
| 26 | Theory, Foundations & Capstone |

Code for each module lives in a directory named after the module (e.g., `m00/`, `m01/`). Each module's documentation lives in `website/docs/modules/`.

---

## Content & Writing Guidelines

### Tone
- **Fun to read, not boring.** This is not a dry textbook. Write with personality.
- Use humor where it lands naturally - not forced, not on every page, but enough that a reader smiles.
- Conversational but technically precise. Explain hard things simply without dumbing them down.
- Analogies are encouraged. A good analogy is worth a thousand equations.

### Examples & Industry Coverage
- Every concept must be illustrated with **ample code examples** that actually run.
- Some examples should be funny or memorable (evolving a recipe for the perfect sandwich, etc.).
- Regularly draw examples from **real-world industries**: Automobile, Healthcare, Insurance, Finance, Robotics, Consumer Products, Travel, Hospitality, Aerospace, Manufacturing, and others.
- Not every example needs to be from industry - mix in benchmark functions, toy problems, and absurd scenarios to keep things varied.
- When using industry examples, be specific enough that a domain expert would nod, not so jargon-heavy that a newcomer drowns.

### Depth
- Cover **sufficient detail** for each topic. Do not skim or hand-wave.
- Every algorithm should include: intuition, math (where needed), pseudocode, runnable Python implementation, and discussion of when/why it fails.
- Include diagnostic advice: "If you see X, it probably means Y."
- Exercises should range from guided ("fill in this function") to open-ended ("design a fitness function for...").

### Structure per Module
Each module page should follow this structure:
1. **Learning Objectives** - what the reader will be able to do after this module
2. **Concept Explanation** - theory with analogies and visuals
3. **Code Examples** - runnable, well-commented Python
4. **Real-World Connections** - industry examples showing where this applies
5. **Common Pitfalls** - what goes wrong and how to debug it
6. **Exercises** - with starter code and test cases where applicable
7. **Key Takeaways** - concise summary

---

## Tech Stack

- **Language**: Python 3.13+
- **Package manager**: `uv`
- **EC libraries**: cma (pycma), nevergrad, deap, evosax, pymoo, neat-python, qdax, pyswarms, gplearn
- **ML libraries**: PyTorch, NumPy, SciPy, Gymnasium
- **Benchmarking**: ioh (IOHprofiler)
- **Experiment tracking**: Optuna
- **Docs**: Docusaurus (React/Node.js), deployed via GitHub Actions to GitHub Pages
- **Math rendering**: KaTeX (via remark-math + rehype-katex)
- **Logging**: loguru (not print statements)

---

## Coding Guidelines & Best Practices

---

### General Principles

* Write **clear, maintainable, and modular code**.
* Prefer **explicitness over cleverness**.
* Keep functions and modules **small and focused**.
* Do not ever write nested functions or classes.
* Avoid duplication; reuse existing utilities where possible.
* Prioritize **readability and maintainability** over premature optimization.

---

### Code Style

* Follow **PEP8** for formatting, naming conventions, and import conventions.
* Organize imports into standard library, third-party, and local modules.
* Use **explicit type hints** for all functions and methods.
* Avoid untyped interfaces unless absolutely necessary.

---

### Module Design

* Each module should have a **single clear responsibility**. And therefore have only a single class per module.
* Avoid excessively large modules or functions.
* Group related functionality logically within packages.
* Do **not place anything logic** inside `__init__.py`.
* Avoid global variables unless absolutely necessary.
* Favor simple, well-understood design patterns when appropriate.

---

### Error Handling & Logging

* Handle exceptions **explicitly and consistently**.
* Do not silently swallow exceptions.
* Provide meaningful error messages and logging.
* Use a structured logging approach instead of `print` statements.
* Ensure logs provide sufficient context for debugging and monitoring.

---

### Testing

* Write tests for new functionality whenever possible.
* Ensure tests cover normal behavior, edge cases, and failure scenarios.
* Tests should be deterministic and easy to run.

---

## Repository Layout

```
ecl/
  CLAUDE.md              # This file
  pyproject.toml         # Python project config (uv)
  website/               # Docusaurus site
    docusaurus.config.ts # Site configuration
    sidebars.ts          # Sidebar navigation
    package.json         # Node.js dependencies (yarn)
    docs/                # Course documentation (Markdown/MDX)
      index.md           # Landing page
      contents.md        # Course roadmap
      modules/           # m00.mdx through m26.md
    src/
      components/        # Custom React components (FeedbackWidget, Charts)
      clientModules/     # Client-side scripts (progress tracking)
      css/               # Custom styles
      theme/             # Swizzled Docusaurus theme components
    static/              # Static assets (favicon, images)
  m00/ - m26/            # Module Python code directories
  .github/workflows/     # CI/CD (GitHub Actions -> GitHub Pages)
```

---

## Deployment

The docs site is deployed to GitHub Pages via GitHub Actions on every push to `main`. The workflow installs Node.js dependencies with `yarn`, builds the Docusaurus site, and publishes `website/build/` to GitHub Pages.
