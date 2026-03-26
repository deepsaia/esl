import React from 'react';
import PlotlyChart from '../PlotlyChart';

/**
 * Bar chart comparing optimization algorithms on Sphere(10D).
 * Values are representative of typical performance with budget=2000.
 * Source: generated with scripts/generate_m00_data.py (see repo).
 */
export default function AlgorithmComparison(): React.JSX.Element {
  const algorithms = ['CMA-ES', 'Differential\nEvolution', 'PSO', '(1+1)-ES', 'Random\nSearch'];
  const bestFitness = [3.97e-14, 1.2e-5, 0.042, 0.31, 8.7];
  const colors = ['#00897b', '#26a69a', '#4db6ac', '#80cbc4', '#b2dfdb'];

  return (
    <PlotlyChart
      data={[
        {
          x: algorithms,
          y: bestFitness.map((v) => Math.log10(v + 1e-15)),
          type: 'bar',
          marker: {
            color: colors,
            line: {width: 1.5, color: '#00695c'},
          },
          text: bestFitness.map((v) => v < 0.001 ? v.toExponential(1) : v.toFixed(3)),
          textposition: 'outside',
          textfont: {size: 11},
          hovertemplate: '<b>%{x}</b><br>Best fitness: %{text}<extra></extra>',
        },
      ]}
      layout={{
        title: {text: 'Algorithm Comparison on Sphere(10D), Budget=2000', font: {size: 14}},
        xaxis: {gridcolor: 'rgba(128,128,128,0.15)'},
        yaxis: {
          title: 'log\u2081\u2080(best fitness)',
          gridcolor: 'rgba(128,128,128,0.15)',
          range: [-16, 2],
        },
        showlegend: false,
        height: 400,
      }}
    />
  );
}
