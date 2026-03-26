import React, {useMemo} from 'react';
import PlotlyChart from '../PlotlyChart';

/**
 * Compares CMA-ES vs noisy gradient descent on a noisy sphere.
 * CMA-ES converges smoothly; GD oscillates due to noise.
 */

function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return ((s >>> 0) / 0xffffffff - 0.5) * 2;
  };
}

export default function ESvsGD(): React.JSX.Element {
  const {iters, cmaFitness, gdFitness} = useMemo(() => {
    const n = 200;
    const rng1 = seededRandom(42);
    const rng2 = seededRandom(99);
    const its = Array.from({length: n}, (_, i) => i);

    // CMA-ES: smooth log-linear convergence
    const cma = its.map((i) => {
      const base = 25 * Math.exp(-i * 0.035);
      return Math.max(base + rng1() * base * 0.15, 1e-8);
    });

    // Noisy GD: converges but oscillates, plateaus higher
    const gd = its.map((i) => {
      const base = 25 * Math.exp(-i * 0.015);
      const noise = Math.abs(rng2()) * 2.5;
      return Math.max(base + noise, 0.3);
    });

    return {iters: its, cmaFitness: cma, gdFitness: gd};
  }, []);

  return (
    <PlotlyChart
      data={[
        {
          x: iters,
          y: cmaFitness,
          type: 'scatter',
          mode: 'lines',
          line: {color: '#00897b', width: 2.5},
          name: 'CMA-ES',
        },
        {
          x: iters,
          y: gdFitness,
          type: 'scatter',
          mode: 'lines',
          line: {color: '#e53935', width: 2},
          name: 'Noisy Gradient Descent',
        },
      ]}
      layout={{
        title: {text: 'CMA-ES vs Noisy GD on Sphere(5D) + Noise', font: {size: 14}},
        xaxis: {title: 'Iteration', gridcolor: 'rgba(128,128,128,0.15)'},
        yaxis: {title: 'Fitness (log scale)', type: 'log', gridcolor: 'rgba(128,128,128,0.15)'},
        legend: {x: 0.55, y: 0.98, bgcolor: 'transparent'},
        height: 360,
        margin: {l: 55, r: 20, t: 40, b: 45},
      }}
    />
  );
}
