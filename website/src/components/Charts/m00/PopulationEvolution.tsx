import React, {useMemo} from 'react';
import PlotlyChart from '../PlotlyChart';

/**
 * Shows CMA-ES population evolving on 2D Rosenbrock.
 * Simulates populations shrinking toward the optimum across generations.
 * Background is the Rosenbrock contour; dots show population members.
 */

function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return ((s >>> 0) / 0xffffffff - 0.5) * 2;
  };
}

function rosenbrock(x1: number, x2: number): number {
  return 100 * (x2 - x1 * x1) ** 2 + (1 - x1) ** 2;
}

export default function PopulationEvolution(): React.JSX.Element {
  const {contourData, popTraces} = useMemo(() => {
    // Contour grid
    const n = 80;
    const xs = Array.from({length: n}, (_, i) => -2.5 + (5.5 * i) / (n - 1));
    const ys = Array.from({length: n}, (_, i) => -1.5 + (5 * i) / (n - 1));
    const z = ys.map((y2) => xs.map((x1) => Math.log10(rosenbrock(x1, y2) + 1)));

    // Simulate population converging from (-2, 2) toward (1, 1)
    const rng = seededRandom(42);
    const popSize = 20;
    const generations = [0, 5, 15, 30, 60];
    const colors = ['#2196f3', '#9c27b0', '#ff9800', '#f44336', '#4caf50'];
    let cx = -2, cy = 2, spread = 1.8;

    const traces = generations.map((gen, gi) => {
      // Move center toward (1,1) and shrink spread
      const t = gen / 60;
      cx = -2 + t * 3;
      cy = 2 + t * (-1);
      spread = 1.8 * Math.exp(-gen * 0.06);

      const px = Array.from({length: popSize}, () => cx + rng() * spread);
      const py = Array.from({length: popSize}, () => cy + rng() * spread * 0.6);

      return {
        x: px,
        y: py,
        type: 'scatter' as const,
        mode: 'markers' as const,
        marker: {color: colors[gi], size: 7, opacity: 0.8, line: {width: 1, color: '#fff'}},
        name: `Gen ${gen}`,
        hovertemplate: `Gen ${gen}<br>x₁: %{x:.2f}<br>x₂: %{y:.2f}<extra></extra>`,
      };
    });

    return {
      contourData: {x: xs, y: ys, z},
      popTraces: traces,
    };
  }, []);

  return (
    <PlotlyChart
      data={[
        {
          ...contourData,
          type: 'contour',
          colorscale: 'Greys',
          reversescale: true,
          opacity: 0.4,
          contours: {coloring: 'heatmap', showlabels: false},
          showscale: false,
          hoverinfo: 'skip',
        },
        ...popTraces,
        {
          x: [1], y: [1],
          type: 'scatter', mode: 'markers',
          marker: {color: '#ff1744', size: 14, symbol: 'star', line: {width: 2, color: '#fff'}},
          name: 'Optimum (1,1)',
          hovertemplate: 'Global optimum<br>(1, 1)<extra></extra>',
        },
      ]}
      layout={{
        title: {text: 'CMA-ES Population Evolving on Rosenbrock', font: {size: 14}},
        xaxis: {title: 'x\u2081', range: [-3, 3.5], gridcolor: 'rgba(128,128,128,0.15)'},
        yaxis: {title: 'x\u2082', range: [-1.5, 3.5], gridcolor: 'rgba(128,128,128,0.15)', scaleanchor: 'x'},
        legend: {x: 0.01, y: 0.99, bgcolor: 'rgba(255,255,255,0.7)', font: {size: 11}},
        height: 440,
        margin: {l: 50, r: 20, t: 40, b: 45},
      }}
    />
  );
}
