import React, {useMemo} from 'react';
import PlotlyChart from '../PlotlyChart';

/**
 * Renders a 2D Rastrigin fitness landscape as an interactive contour plot.
 * Data is computed client-side from the mathematical function.
 */

function rastrigin(x1: number, x2: number): number {
  return 20 + (x1 * x1 - 10 * Math.cos(2 * Math.PI * x1))
            + (x2 * x2 - 10 * Math.cos(2 * Math.PI * x2));
}

export default function FitnessLandscape(): React.JSX.Element {
  const {x, y, z} = useMemo(() => {
    const n = 80;
    const range = 5.12;
    const xs = Array.from({length: n}, (_, i) => -range + (2 * range * i) / (n - 1));
    const ys = [...xs];
    const zs = ys.map((y2) => xs.map((x1) => Math.log10(rastrigin(x1, y2) + 1)));
    return {x: xs, y: ys, z: zs};
  }, []);

  return (
    <PlotlyChart
      data={[
        {
          x,
          y,
          z,
          type: 'contour',
          colorscale: 'Viridis',
          contours: {coloring: 'heatmap', showlabels: false},
          colorbar: {title: 'log10(f+1)', titleside: 'right', thickness: 15},
          hovertemplate: 'x1: %{x:.2f}<br>x2: %{y:.2f}<br>fitness: %{z:.2f}<extra></extra>',
        },
        {
          x: [0],
          y: [0],
          type: 'scatter',
          mode: 'markers',
          marker: {color: '#ff1744', size: 10, symbol: 'star', line: {width: 1.5, color: '#fff'}},
          name: 'Global optimum',
          showlegend: true,
        },
      ]}
      layout={{
        title: {text: 'Rastrigin Fitness Landscape (2D)', font: {size: 15}},
        xaxis: {title: 'x\u2081', gridcolor: 'rgba(128,128,128,0.15)'},
        yaxis: {title: 'x\u2082', gridcolor: 'rgba(128,128,128,0.15)', scaleanchor: 'x'},
        legend: {x: 0.02, y: 0.98, bgcolor: 'transparent'},
        height: 440,
      }}
    />
  );
}
