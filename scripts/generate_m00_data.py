"""Generate data for Module 00 charts.

Produces CSV files consumed by the Docusaurus chart components:
  - cmaes_convergence.csv: CMA-ES convergence on Sphere and Rosenbrock
  - algorithm_comparison.csv: multiple algorithms on Sphere(10D)
  - fitness_landscape.csv: 2D Rastrigin landscape grid for contour plot

Usage:
    python scripts/generate_m00_data.py
"""

import csv
from pathlib import Path

import cma
import numpy as np

OUTPUT_DIR = Path(__file__).parent.parent / "website" / "static" / "data" / "m00"


def sphere(x: np.ndarray) -> float:
    return float(np.sum(np.square(x)))


def rastrigin(x: np.ndarray) -> float:
    n = len(x)
    return float(10 * n + np.sum(x**2 - 10 * np.cos(2 * np.pi * x)))


def rosenbrock(x: np.ndarray) -> float:
    return float(np.sum(100 * (x[1:] - x[:-1] ** 2) ** 2 + (1 - x[:-1]) ** 2))


def generate_cmaes_convergence(seed: int = 42) -> list[dict]:
    """Track CMA-ES best fitness per generation on multiple functions."""
    np.random.seed(seed)
    rows = []
    for func_name, func, dim in [("Sphere", sphere, 10), ("Rosenbrock", rosenbrock, 10)]:
        x0 = np.random.randn(dim) * 3
        es = cma.CMAEvolutionStrategy(x0, 2.0, {"seed": seed, "verbose": -1})
        gen = 0
        while not es.stop():
            solutions = es.ask()
            fitnesses = [func(s) for s in solutions]
            es.tell(solutions, fitnesses)
            rows.append({
                "function": func_name,
                "generation": gen,
                "best_fitness": round(min(fitnesses), 8),
                "mean_fitness": round(float(np.mean(fitnesses)), 8),
                "sigma": round(es.sigma, 8),
            })
            gen += 1
        es.result_pretty()
    return rows


def generate_algorithm_comparison(seed: int = 42) -> list[dict]:
    """Compare algorithms on Sphere(10D) — run each multiple times."""
    import nevergrad as ng

    rows = []
    for algo_name in ["CMA", "PSO", "OnePlusOne", "DE", "RandomSearch"]:
        for trial in range(10):
            parametrization = ng.p.Array(shape=(10,))
            optimizer = ng.optimizers.registry[algo_name](
                parametrization=parametrization,
                budget=2000,
            )
            np.random.seed(seed + trial)
            recommendation = optimizer.minimize(sphere)
            best = sphere(recommendation.value)
            rows.append({
                "algorithm": algo_name,
                "trial": trial,
                "best_fitness": round(best, 8),
            })
    return rows


def generate_fitness_landscape() -> list[dict]:
    """Generate 2D Rastrigin landscape grid for contour plot."""
    rows = []
    grid = np.linspace(-5, 5, 100)
    for x1 in grid:
        for x2 in grid:
            z = rastrigin(np.array([x1, x2]))
            rows.append({"x1": round(x1, 3), "x2": round(x2, 3), "fitness": round(z, 4)})
    return rows


def write_csv(rows: list[dict], filename: str) -> None:
    path = OUTPUT_DIR / filename
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=rows[0].keys())
        writer.writeheader()
        writer.writerows(rows)
    print(f"Wrote {len(rows)} rows to {path}")


if __name__ == "__main__":
    write_csv(generate_cmaes_convergence(), "cmaes_convergence.csv")
    write_csv(generate_algorithm_comparison(), "algorithm_comparison.csv")
    write_csv(generate_fitness_landscape(), "fitness_landscape.csv")
