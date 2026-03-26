import React, {useMemo} from 'react';
import PlotlyChart from '../PlotlyChart';

/**
 * Simulates CMA-ES convergence on Sphere(10D).
 * Uses a simplified model: log-linear convergence with noise,
 * which closely matches real CMA-ES behavior on unimodal functions.
 */
function simulateConvergence(
  initialFitness: number,
  rate: number,
  generations: number,
  noise: number,
  seed: number,
): number[] {
  let s = seed;
  const rng = () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return ((s >>> 0) / 0xffffffff - 0.5) * 2;
  };
  const values: number[] = [];
  for (let g = 0; g < generations; g++) {
    const logVal = Math.log10(initialFitness) - rate * g + rng() * noise;
    values.push(Math.pow(10, Math.max(logVal, -14)));
  }
  return values;
}

export default function CMAESConvergence(): React.JSX.Element {
  const {gens, sphere, rosenbrock} = useMemo(() => {
    const nSphere = 80;
    const nRosen = 200;
    const maxGen = Math.max(nSphere, nRosen);
    return {
      gens: Array.from({length: maxGen}, (_, i) => i),
      sphere: simulateConvergence(150, 0.16, nSphere, 0.15, 42),
      rosenbrock: simulateConvergence(5000, 0.065, nRosen, 0.2, 99),
    };
  }, []);

  return (
    <PlotlyChart
      data={[
        {
          x: gens.slice(0, sphere.length),
          y: sphere,
          type: 'scatter',
          mode: 'lines',
          line: {color: '#00897b', width: 2.5},
          name: 'Sphere (10D)',
        },
        {
          x: gens.slice(0, rosenbrock.length),
          y: rosenbrock,
          type: 'scatter',
          mode: 'lines',
          line: {color: '#f4511e', width: 2.5},
          name: 'Rosenbrock (10D)',
        },
      ]}
      layout={{
        title: {text: 'CMA-ES Convergence', font: {size: 15}},
        xaxis: {title: 'Generation', gridcolor: 'rgba(128,128,128,0.15)'},
        yaxis: {title: 'Best Fitness', type: 'log', gridcolor: 'rgba(128,128,128,0.15)'},
        legend: {x: 0.6, y: 0.98, bgcolor: 'transparent'},
        height: 380,
      }}
    />
  );
}
