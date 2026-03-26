import React from 'react';
import PlotlyChart from '../PlotlyChart';

/**
 * Interactive treemap showing where Evolutionary Computation sits
 * within the broader Computational Intelligence landscape.
 */
export default function CILandscape(): React.JSX.Element {
  const labels = [
    'Computational Intelligence',
    'Neural Networks',
    'Fuzzy Systems',
    'Evolutionary Computation',
    'Swarm Intelligence',
    'Artificial Immune Systems',
    'Bayesian Networks',
    'Probabilistic Methods',
    // Neural Networks children
    'Feedforward / MLPs',
    'CNNs',
    'RNNs / LSTMs',
    'Transformers',
    // Fuzzy children
    'Fuzzy Logic',
    'Fuzzy Control',
    // EC children
    'Genetic Algorithms',
    'Evolution Strategies',
    'Genetic Programming',
    'Differential Evolution',
    'EDAs',
    'Neuroevolution',
    'Coevolution & Memetic',
    // Swarm children
    'PSO',
    'Ant Colony (ACO)',
    'Artificial Bee Colony',
    // Bayesian children
    'Bayesian Optimization',
    'Graphical Models',
  ];

  const parents = [
    '',
    'Computational Intelligence',
    'Computational Intelligence',
    'Computational Intelligence',
    'Computational Intelligence',
    'Computational Intelligence',
    'Computational Intelligence',
    'Computational Intelligence',
    // NN children
    'Neural Networks',
    'Neural Networks',
    'Neural Networks',
    'Neural Networks',
    // Fuzzy children
    'Fuzzy Systems',
    'Fuzzy Systems',
    // EC children
    'Evolutionary Computation',
    'Evolutionary Computation',
    'Evolutionary Computation',
    'Evolutionary Computation',
    'Evolutionary Computation',
    'Evolutionary Computation',
    'Evolutionary Computation',
    // Swarm children
    'Swarm Intelligence',
    'Swarm Intelligence',
    'Swarm Intelligence',
    // Bayesian children
    'Bayesian Networks',
    'Bayesian Networks',
  ];

  const values = [
    100,
    25,
    8,
    35,
    15,
    5,
    7,
    5,
    // NN
    6, 7, 6, 6,
    // Fuzzy
    4, 4,
    // EC
    6, 6, 5, 5, 4, 5, 4,
    // Swarm
    6, 5, 4,
    // Bayesian
    4, 3,
  ];

  const colors = [
    '#1a1a2e',
    '#e53935',
    '#ff9800',
    '#00897b',
    '#2196f3',
    '#9c27b0',
    '#607d8b',
    '#795548',
    // NN
    '#ef5350', '#e53935', '#c62828', '#b71c1c',
    // Fuzzy
    '#ffb74d', '#ffa726',
    // EC - teal variants (this course!)
    '#26a69a', '#00897b', '#00796b', '#00695c', '#004d40', '#4db6ac', '#80cbc4',
    // Swarm
    '#42a5f5', '#1e88e5', '#1565c0',
    // Bayesian
    '#78909c', '#546e7a',
  ];

  return (
    <PlotlyChart
      data={[
        {
          type: 'treemap',
          labels,
          parents,
          values,
          marker: {colors},
          textinfo: 'label',
          textfont: {size: 13, color: '#fff'},
          hovertemplate: '%{label}<extra></extra>',
          pathbar: {visible: true},
          branchvalues: 'total',
        },
      ]}
      layout={{
        title: {text: 'Computational Intelligence Landscape', font: {size: 14}},
        height: 500,
        margin: {l: 10, r: 10, t: 40, b: 10},
        treemapcolorway: ['#00897b'],
      }}
    />
  );
}
