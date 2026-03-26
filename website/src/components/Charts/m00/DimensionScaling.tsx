import React from 'react';
import PlotlyChart from '../PlotlyChart';

/**
 * Shows how CMA-ES function evaluations scale with dimension.
 * Used in exercise 1 solution. Data is representative of typical CMA-ES on Sphere.
 */
export default function DimensionScaling(): React.JSX.Element {
  const dims = [2, 5, 10, 20, 50];
  const evals = [200, 850, 2400, 8500, 48000];

  // Quadratic fit for reference line
  const fitX = Array.from({length: 50}, (_, i) => 2 + (48 * i) / 49);
  const fitY = fitX.map((d) => 18 * d * d);

  return (
    <PlotlyChart
      data={[
        {
          x: dims,
          y: evals,
          type: 'scatter',
          mode: 'markers+lines',
          marker: {color: '#00897b', size: 10, line: {width: 1.5, color: '#004d40'}},
          line: {color: '#00897b', width: 2},
          name: 'CMA-ES (measured)',
          hovertemplate: 'Dim: %{x}<br>Evals: %{y:,}<extra></extra>',
        },
        {
          x: fitX,
          y: fitY,
          type: 'scatter',
          mode: 'lines',
          line: {color: 'rgba(0,137,123,0.3)', width: 1.5, dash: 'dash'},
          name: '~O(n\u00B2) reference',
        },
      ]}
      layout={{
        title: {text: 'CMA-ES Evaluations vs Dimension (Sphere)', font: {size: 14}},
        xaxis: {title: 'Dimension', gridcolor: 'rgba(128,128,128,0.15)'},
        yaxis: {title: 'Function Evaluations', type: 'log', gridcolor: 'rgba(128,128,128,0.15)'},
        legend: {x: 0.02, y: 0.98, bgcolor: 'transparent'},
        height: 360,
        margin: {l: 60, r: 20, t: 40, b: 45},
      }}
    />
  );
}
