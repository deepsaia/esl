# ESL -> ECL (Evolutionary Computation Learning) - Restructure Plan

## Context

The current `esl` (Evolution Strategies Learning) project at `~/exp/esl` (repo: `deepsaia/esl`) is too narrow - it focuses almost exclusively on CMA-ES and Evolution Strategies. We're broadening it into a comprehensive **Evolutionary Computation** course covering all major EC families, positioned within the broader Computational Intelligence landscape. This requires renaming the repo, restructuring modules, and rewriting the intro.

The `rll` project at `/Users/228496/exp/rll` remains unchanged.

---

## Phase 1: Rename (esl -> ecl)

### 1.1 GitHub & Filesystem
```bash
# Rename GitHub repo via gh CLI
gh repo rename ecl --repo deepsaia/esl

# Move local directory
mv ~/exp/esl ~/exp/ecl
cd ~/exp/ecl
git remote set-url origin git@github.com:deepsaia/ecl.git
```

### 1.2 String Replacements

Global find-and-replace in all source files (not node_modules/build):

| Pattern | Replacement | Files affected |
|---------|-------------|----------------|
| `deepsaia/esl` | `deepsaia/ecl` | docusaurus.config.ts, FeedbackWidget, README, CLAUDE.md, deploy.yml |
| `baseUrl: '/esl/'` | `baseUrl: '/ecl/'` | docusaurus.config.ts |
| `projectName: 'esl'` | `projectName: 'ecl'` | docusaurus.config.ts |
| `ES Learning Course` | `EC Learning Course` | docusaurus.config.ts |
| `ES Learning` | `EC Learning` | docusaurus.config.ts, navbar |
| `name = "esl"` | `name = "ecl"` | pyproject.toml |
| `/esl/` | `/ecl/` | README.md, index.md, anywhere in docs |
| `Evolution Strategies` (as course name) | `Evolutionary Computation` | Multiple docs, homepage, CLAUDE.md |

### 1.3 Branding Updates

| Property | Old | New |
|----------|-----|-----|
| Title | ES Learning Course | EC Learning Course |
| Tagline | From Zero to ES Mastery - with code at every step | From Zero to EC Mastery - with code at every step |
| Navbar | ES Learning | EC Learning |
| Landing page title | Evolution Strategies - A Learning Journey | Evolutionary Computation - A Learning Journey |
| Favicon | Keep DNA emoji (unchanged) | Keep DNA emoji (unchanged) |
| Color scheme | Teal (unchanged) | Teal (unchanged) |

---

## Phase 2: New Module Structure (27 Modules, m00-m26, 9 Sections)

### Section A: Foundations (m00-m02)

| # | Title | Description | Status |
|---|-------|-------------|--------|
| m00 | Introduction to Evolutionary Computation | Full rewrite. CI landscape diagram, EC family tree, history of all branches, setup & first optimization with CMA-ES + GA + PSO. NASA antenna + Adrian Thompson's evolved circuit as hooks. | **Rewrite** m00.mdx |
| m01 | Optimization Foundations | Random search, hill climbing, simulated annealing, fitness landscapes, gradient-free vs gradient-based, No Free Lunch theorem. | Keep (minor updates) |
| m02 | Representation, Operators & Selection | Solution representations (binary, real, permutation, tree, variable-length). Mutation operators, crossover/recombination, selection schemes (tournament, roulette, rank, truncation, elitism). Shared vocabulary for all EC families. | **New** |

### Section B: Genetic Algorithms (m03-m04)

| # | Title | Description | Status |
|---|-------|-------------|--------|
| m03 | Genetic Algorithms: Fundamentals | Holland's GA, binary encoding, crossover variants (1-point, 2-point, uniform), bit-flip mutation, fitness-proportionate selection, tournament selection. Schema theorem intuition. TSP and knapsack. Implement from scratch. | **Expand** from old m09 |
| m04 | Genetic Algorithms: Advanced Topics | Real-coded GAs (SBX crossover, polynomial mutation), adaptive operator rates, constraint handling, island model / parallel GAs, niching and speciation, steady-state vs generational. | **New** |

### Section C: Evolution Strategies (m05-m08)

| # | Title | Description | Status |
|---|-------|-------------|--------|
| m05 | The (1+1)-ES | Rechenberg's simplest ES, Gaussian mutation, 1/5th rule, step-size adaptation. Implement from scratch on Sphere and Rosenbrock. | Renumber from old m02 |
| m06 | Population-Based ES | (mu,lambda)-ES, (mu+lambda)-ES, weighted recombination, self-adaptation of strategy parameters, derandomized step-size control. | Renumber from old m03 |
| m07 | CMA-ES: The Crown Jewel | Covariance matrix adaptation, rank-one update, rank-mu update, cumulative step-size adaptation. Build CMA-ES piece by piece. Use pycma. | Renumber from old m04 |
| m08 | CMA-ES Advanced & Natural Evolution Strategies | IPOP/BIPOP restarts, sep-CMA-ES, VD-CMA, large-scale CMA-ES. NES: score function estimator, xNES, SNES, fitness shaping, connection to REINFORCE and natural gradients. | Merge old m05 + m06 |

### Section D: Other EC Paradigms (m09-m12)

| # | Title | Description | Status |
|---|-------|-------------|--------|
| m09 | Genetic Programming | Tree-based GP, Koza's approach, bloat control (parsimony pressure, depth limits), strongly-typed GP, linear GP, grammatical evolution, symbolic regression with gplearn. GP as automatic program synthesis. | **New** |
| m10 | Differential Evolution | DE/rand/1, DE/best/1, DE/current-to-best/1, binomial vs exponential crossover, F and CR parameters, adaptive DE (JADE, SHADE, L-SHADE). When DE beats CMA-ES. Implement from scratch + SciPy's `differential_evolution`. | **New** |
| m11 | Estimation of Distribution Algorithms | From operators to models: PBIL, UMDA, cGA, MIMIC, BOA (Bayesian Optimization Algorithm). CMA-ES as an EDA. Connection to Bayesian optimization. When EDAs outperform operator-based EAs. | **New** |
| m12 | Coevolution, Memetic & Cultural Algorithms | Competitive coevolution (predator-prey, game strategies, Red Queen dynamics), cooperative coevolution (CC for large-scale problems), memetic algorithms (EA + local search hybrids), cultural algorithms (belief space + population). | **New** |

### Section E: Swarm Intelligence (m13-m15)

| # | Title | Description | Status |
|---|-------|-------------|--------|
| m13 | Particle Swarm Optimization | Kennedy & Eberhart's PSO, velocity update, inertia weight, constriction factor. Topologies (global, ring, von Neumann). Bare bones PSO, adaptive PSO. Binary PSO. Use pyswarms. Implement from scratch. | **New** |
| m14 | Ant Colony Optimization | Dorigo's ACO, pheromone model, ant system, ACS, MMAS, rank-based. TSP and graph problems. Pheromone evaporation and exploration-exploitation balance. | **New** |
| m15 | Other Swarm & Nature-Inspired Methods | Artificial Bee Colony (ABC), firefly algorithm, bat algorithm, harmony search, gravitational search. Critical evaluation: which have theoretical grounding vs. which are "metaphor-driven"? The controversy around novel metaheuristics. | **New** |

### Section F: Multi-Objective & Diversity (m16-m18)

| # | Title | Description | Status |
|---|-------|-------------|--------|
| m16 | Multi-Objective Evolutionary Optimization | Pareto dominance, non-dominated sorting, NSGA-II, SPEA2, crowding distance, hypervolume indicator. Use pymoo. Visualizing Pareto fronts. Decision-making (TOPSIS, knee points). | Expand from old m10 |
| m17 | Many-Objective & Decomposition Methods | NSGA-III (reference point based), MOEA/D (decomposition), indicator-based methods (SMS-EMOA, HypE), scalability beyond 3 objectives. Performance metrics (IGD, hypervolume, epsilon-indicator). | **New** |
| m18 | Quality-Diversity Algorithms | MAP-Elites, novelty search, curiosity search, CMA-ME, AURORA, differentiable QD. Illumination algorithms. Damage recovery in robots. Behavioral repertoires. Use qdax. | Expand from old m11 |

### Section G: Neuroevolution & Deep Learning (m19-m21)

| # | Title | Description | Status |
|---|-------|-------------|--------|
| m19 | Neuroevolution: Evolving Network Topology | NEAT, HyperNEAT, ES-HyperNEAT. Speciation, complexification, indirect encoding via CPPNs. Weight-agnostic neural networks. Use neat-python. | Expand from old m07 |
| m20 | EC for Neural Network Training | How EC trains FF, RNN, LSTM, CNN, and Transformer architectures. Direct weight evolution, evolutionary hyperparameter optimization, neural architecture search (NAS) with EC, hybrid gradient + evolution approaches, EvoPrompting for LLMs. | **New** |
| m21 | ES for RL & Policy Optimization | OpenAI ES for RL, shared noise tables, parallelization across CPUs, fitness shaping for policy search. Comparison with PPO/A2C. When ES beats gradient-based RL. | Expand from old m08 |

### Section H: Advanced Topics (m22-m24)

| # | Title | Description | Status |
|---|-------|-------------|--------|
| m22 | Constrained & Combinatorial EC | Penalty methods, Deb's feasibility rules, repair operators, decoder approaches. Permutation problems (TSP, scheduling, bin packing). Integer and mixed-integer optimization. SAT solvers with EC. | Renumber from old m12 |
| m23 | Surrogate-Assisted & Expensive Optimization | When evaluations cost hours/days. Surrogate models (GP regression, RBF, neural nets), model management strategies, infill criteria, multi-fidelity optimization. Bayesian optimization connection. | **New** |
| m24 | Learning Classifier Systems & Hyper-heuristics | Michigan-style LCS (XCS), Pittsburgh-style LCS. Hyper-heuristics: evolving heuristics instead of solutions. GP-based hyper-heuristics. Automatic algorithm configuration (irace, SMAC). | **New** |

### Section I: Rigor & Capstone (m25-m26)

| # | Title | Description | Status |
|---|-------|-------------|--------|
| m25 | Benchmarking & Experimental Methodology | BBOB/COCO, CEC benchmarks, ECDF plots, IOHprofiler. Statistical testing (Mann-Whitney, Wilcoxon), effect sizes, performance profiles. No Free Lunch revisited. How to run and report fair experiments. Use ioh. | Renumber from old m13 |
| m26 | Theory, Foundations & Capstone | Runtime analysis, convergence proofs (1+1)-ES on sphere/OneMax, information geometry, natural gradients, fitness landscape analysis, schema theorem deep dive. Then capstone: reproduce a paper or solve a real problem. | Merge old m14 + m15 |

### Old -> New Module Mapping

| Old # | Old Title | New # | Action |
|-------|-----------|-------|--------|
| m00 | Introduction | m00 | Full rewrite |
| m01 | Optimization Foundations | m01 | Minor updates |
| m02 | The (1+1)-ES | m05 | Renumber |
| m03 | Population-Based ES | m06 | Renumber |
| m04 | CMA-ES | m07 | Renumber |
| m05 | CMA-ES Advanced | m08 | Merge with m06 |
| m06 | Natural ES | m08 | Merge with m05 |
| m07 | Neuroevolution | m19 | Expand, renumber |
| m08 | OpenAI ES for RL | m21 | Expand, renumber |
| m09 | Genetic Algorithms | m03 | Expand, renumber |
| m10 | Multi-Objective | m16 | Expand, renumber |
| m11 | Quality Diversity | m18 | Expand, renumber |
| m12 | Constrained & Combinatorial | m22 | Renumber |
| m13 | Benchmarking | m25 | Renumber |
| m14 | Theory & Foundations | m26 | Merge with m15 |
| m15 | Capstone | m26 | Merge with m14 |
| - | - | m02 | New |
| - | - | m04 | New |
| - | - | m09 | New |
| - | - | m10 | New |
| - | - | m11 | New |
| - | - | m12 | New |
| - | - | m13 | New |
| - | - | m14 | New |
| - | - | m15 | New |
| - | - | m17 | New |
| - | - | m20 | New |
| - | - | m23 | New |
| - | - | m24 | New |

---

## Phase 3: Intro Module (m00) Rewrite

### New m00.mdx Structure

1. **Opening hooks**
   - NASA ST5 evolved antenna (keep, it's EC not just ES)
   - Adrian Thompson's evolved FPGA circuit (GP exploited physics engineers didn't understand)
   - Brief: AlphaGo used neural networks, but the antenna used *evolution*

2. **What is Evolutionary Computation?**
   - Define EC as a family of population-based, nature-inspired optimization metaheuristics
   - The shared loop: initialize -> evaluate -> select -> vary -> repeat
   - List all major families with 1-sentence descriptions

3. **CI Landscape Diagram** (new React component: `CILandscape.tsx`)
   - Interactive SVG or Plotly treemap showing:
     ```
     Computational Intelligence
     +-- Neural Networks (deep learning, CNNs, Transformers)
     +-- Fuzzy Systems (fuzzy logic, fuzzy control)
     +-- Evolutionary Computation  <-- THIS COURSE
     |   +-- Genetic Algorithms
     |   +-- Evolution Strategies (CMA-ES, NES)
     |   +-- Genetic Programming
     |   +-- Differential Evolution
     |   +-- EDAs
     |   +-- Neuroevolution
     |   +-- Coevolution & Memetic
     +-- Swarm Intelligence (PSO, ACO, ABC)
     +-- Artificial Immune Systems
     +-- Bayesian Networks
     +-- Probabilistic Methods
     +-- Learning Theory
     ```
   - Properly referenced to Engelbrecht, Eiben & Smith, Fogel

4. **EC Family Tree** (new React component: `ECFamilyTree.tsx`)
   - Interactive tree showing relationships between EC families
   - Clickable nodes linking to their respective modules

5. **Brief History** - expanded timeline covering ALL EC branches:
   - 1960s: Rechenberg/Schwefel (ES), Holland (GA), Fogel (EP)
   - 1973: Rechenberg 1/5th rule
   - 1975: Holland "Adaptation in Natural and Artificial Systems"
   - 1989: Koza Genetic Programming
   - 1991: Dorigo Ant Colony Optimization
   - 1995: Kennedy/Eberhart PSO, Storn/Price Differential Evolution
   - 1996: Hansen/Ostermeier CMA-ES
   - 2000: Deb NSGA-II
   - 2002: Stanley/Miikkulainen NEAT
   - 2015: Mouret/Clune MAP-Elites
   - 2017: Salimans et al. OpenAI ES for RL
   - 2020s: EC for LLMs, NAS, prompt evolution

6. **Where EC Shines** - examples spanning ALL families, not just ES:
   - GA: scheduling, combinatorial optimization
   - ES/CMA-ES: continuous black-box optimization, hyperparameter tuning
   - GP: symbolic regression, automatic programming
   - DE: engineering design, power systems
   - PSO: neural network training, function optimization
   - ACO: routing, logistics, network design
   - NEAT: game AI, robot controllers
   - NSGA-II: multi-objective engineering design
   - MAP-Elites: robot damage recovery

7. **Setup & First Optimization**
   - Install: cma, nevergrad, deap, pyswarms, gplearn
   - CMA-ES on Sphere (keep existing)
   - GA on OneMax with DEAP (new)
   - PSO on Sphere with pyswarms (new)
   - Show all three solve the same problem differently

8. **Interactive Charts**
   - Keep: CMAESConvergence, FitnessLandscape, AlgorithmComparison, PopulationEvolution, ESvsGD, DimensionScaling
   - New: CILandscape (CI taxonomy diagram)
   - New: ECFamilyTree (EC family relationships)

9. **Exercises** - broadened:
   - Compare GA, CMA-ES, DE, PSO on Sphere (nevergrad)
   - Visualize a GA solving OneMax
   - Run PSO on Rastrigin
   - Real-world brainstorm (kept)

10. **References** - expanded to ~20:
    - Eiben & Smith, De Jong, Back/Fogel/Michalewicz, Holland, Hansen, Dorigo/Stutzle, Kennedy/Eberhart, Koza, Stanley/Miikkulainen, Mouret/Clune, Salimans et al., Rechenberg, Storn/Price, Deb, Engelbrecht "Computational Intelligence"

---

## Phase 4: Other File Changes

### sidebars.ts
Restructure from flat list to 9 categories with 27 modules (see module structure above). Use `type: 'category'` with `collapsed: false`.

### website/src/pages/index.tsx (Homepage)
- Update hero: "Evolutionary Computation" not "Evolution Strategies"
- Update module cards from 16 to 27 entries
- Update section descriptions

### website/src/components/HomepageHeader/index.tsx
- Title: "EC Learning Course"
- Subtitle: "From Zero to EC Mastery"

### website/src/components/ModuleBanner/index.tsx
- Update module number -> emoji icon mapping for 27 modules
- Add new icons for GP, DE, PSO, ACO, etc.

### website/docs/index.md (Landing page)
- New module table with all 27 modules
- Updated course description

### website/docs/contents.md (Roadmap)
- 9 sections overview
- Updated prerequisites (same math/coding, broader scope)
- Expanded resources: add De Jong, Back/Fogel/Michalewicz, Holland, Dorigo, Koza, Engelbrecht
- Key libraries: add pyswarms, gplearn, ioh
- 10-month suggested schedule
- Expanded project ideas (GP symbolic regression, ACO routing, PSO visualization, DE engineering, coevolution games)

### CLAUDE.md
- Title: ECL - Evolutionary Computation Learning
- 27-module table with new titles
- Tech stack: add pyswarms, gplearn, ioh
- Same coding guidelines (unchanged)
- Same content guidelines (fun, not boring, industry examples)

### pyproject.toml
- name: ecl
- Add: pyswarms, gplearn, ioh

### README.md
- Title and URLs updated
- Same dev instructions structure

### New module stub files to create
m02.md, m04.md, m09.md, m10.md, m11.md, m12.md, m13.md, m14.md, m15.md, m17.md, m20.md, m23.md, m24.md (13 new files)

### Existing module files to rename/update frontmatter
All existing m01-m15 files need updated `sidebar_position` and possibly new titles per the mapping table.

### New React components
- `src/components/Charts/m00/CILandscape.tsx` - CI taxonomy diagram
- `src/components/Charts/m00/ECFamilyTree.tsx` - EC family tree

---

## Phase 5: Implementation Order

**Step 1: Rename repo & directory**
- `gh repo rename ecl --repo deepsaia/esl`
- `mv ~/exp/esl ~/exp/ecl`
- Update git remote
- Global string replacement (esl -> ecl)
- Update all branding strings
- Commit: "rename esl to ecl"

**Step 2: Restructure module files**
- Create 13 new stub module files
- Move/rename existing modules per mapping
- Update all frontmatter (sidebar_position, titles)
- Update sidebars.ts with 9 categories
- Update ModuleBanner icon mapping
- Commit: "restructure modules for EC curriculum"

**Step 3: Update supporting docs**
- Rewrite index.md (landing page with 27 modules)
- Rewrite contents.md (roadmap, schedule, resources)
- Update homepage (index.tsx, HomepageHeader)
- Update ModuleCards for 27 modules
- Update CLAUDE.md
- Update README.md
- Update pyproject.toml
- Commit: "update docs and config for EC curriculum"

**Step 4: Rewrite m00.mdx**
- Create CILandscape.tsx and ECFamilyTree.tsx components
- Full rewrite of m00.mdx per Phase 3 spec
- Keep existing chart components (still relevant)
- Commit: "rewrite intro module for EC"

**Step 5: Save plan & verify**
- Save plan to `ecl/website/docs/plan.md` (as user requested)
- Run `yarn build` to verify no broken links
- Push and verify GitHub Pages deployment

---

## Verification

```bash
cd ~/exp/ecl/website
yarn build          # zero errors
yarn serve          # preview at localhost:3000/ecl/
```

Checklist:
- [ ] Repo renamed to deepsaia/ecl on GitHub
- [ ] All 27 module pages in sidebar with correct categories
- [ ] Landing page shows all 27 modules
- [ ] Intro module has CI diagram and EC family tree
- [ ] No broken links (all old /esl/ refs updated to /ecl/)
- [ ] Favicon still works (DNA emoji, unchanged)
- [ ] GitHub Actions deploys to deepsaia.github.io/ecl/
- [ ] Plan saved in website/docs/plan.md
