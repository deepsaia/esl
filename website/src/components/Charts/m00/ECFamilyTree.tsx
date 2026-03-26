import React from 'react';
import PlotlyChart from '../PlotlyChart';

/**
 * Interactive sunburst chart showing the Evolutionary Computation family tree.
 * Each ring represents a level of the taxonomy; click to zoom in.
 */
export default function ECFamilyTree(): React.JSX.Element {
  const labels = [
    'Evolutionary Computation',
    // Level 1: major families
    'Genetic Algorithms',
    'Evolution Strategies',
    'Genetic Programming',
    'Differential Evolution',
    'EDAs',
    'Multi-Objective EA',
    'Quality-Diversity',
    'Neuroevolution',
    'Coevolution',
    'Memetic Algorithms',
    // GA subtypes
    'Binary GA',
    'Real-Coded GA',
    'Island Model GA',
    // ES subtypes
    '(1+1)-ES',
    '(\u00B5,\u03BB)-ES',
    'CMA-ES',
    'Natural ES (xNES)',
    // GP subtypes
    'Tree GP',
    'Linear GP',
    'Grammatical Evo',
    // DE subtypes
    'DE/rand/1',
    'JADE / SHADE',
    // EDA subtypes
    'PBIL / UMDA',
    'BOA',
    // MO subtypes
    'NSGA-II',
    'NSGA-III',
    'MOEA/D',
    // QD subtypes
    'MAP-Elites',
    'Novelty Search',
    // Neuroevo subtypes
    'NEAT',
    'HyperNEAT',
    'Weight Evolution',
    // Coevo subtypes
    'Competitive',
    'Cooperative',
    // Memetic subtypes
    'EA + Local Search',
    'Cultural Algorithms',
  ];

  const parents = [
    '',
    'Evolutionary Computation',
    'Evolutionary Computation',
    'Evolutionary Computation',
    'Evolutionary Computation',
    'Evolutionary Computation',
    'Evolutionary Computation',
    'Evolutionary Computation',
    'Evolutionary Computation',
    'Evolutionary Computation',
    'Evolutionary Computation',
    // GA
    'Genetic Algorithms',
    'Genetic Algorithms',
    'Genetic Algorithms',
    // ES
    'Evolution Strategies',
    'Evolution Strategies',
    'Evolution Strategies',
    'Evolution Strategies',
    // GP
    'Genetic Programming',
    'Genetic Programming',
    'Genetic Programming',
    // DE
    'Differential Evolution',
    'Differential Evolution',
    // EDA
    'EDAs',
    'EDAs',
    // MO
    'Multi-Objective EA',
    'Multi-Objective EA',
    'Multi-Objective EA',
    // QD
    'Quality-Diversity',
    'Quality-Diversity',
    // Neuroevo
    'Neuroevolution',
    'Neuroevolution',
    'Neuroevolution',
    // Coevo
    'Coevolution',
    'Coevolution',
    // Memetic
    'Memetic Algorithms',
    'Memetic Algorithms',
  ];

  const values = [
    0,
    // Level 1
    12, 14, 10, 8, 6, 10, 6, 10, 6, 6,
    // GA children
    4, 4, 4,
    // ES children
    3, 3, 5, 3,
    // GP children
    4, 3, 3,
    // DE children
    4, 4,
    // EDA children
    3, 3,
    // MO children
    4, 3, 3,
    // QD children
    3, 3,
    // Neuroevo children
    4, 3, 3,
    // Coevo children
    3, 3,
    // Memetic children
    3, 3,
  ];

  const moduleLinks: Record<string, string> = {
    'Genetic Algorithms': 'M03-04',
    'Evolution Strategies': 'M05-08',
    'Genetic Programming': 'M09',
    'Differential Evolution': 'M10',
    'EDAs': 'M11',
    'Multi-Objective EA': 'M16-17',
    'Quality-Diversity': 'M18',
    'Neuroevolution': 'M19-20',
    'Coevolution': 'M12',
    'Memetic Algorithms': 'M12',
    'CMA-ES': 'M07',
    'Natural ES (xNES)': 'M08',
    'NEAT': 'M19',
    'NSGA-II': 'M16',
    'MAP-Elites': 'M18',
  };

  const hoverText = labels.map((l) => {
    const mod = moduleLinks[l];
    return mod ? `${l}<br><b>${mod}</b>` : l;
  });

  return (
    <PlotlyChart
      data={[
        {
          type: 'sunburst',
          labels,
          parents,
          values,
          branchvalues: 'total',
          hovertext: hoverText,
          hoverinfo: 'text',
          textinfo: 'label',
          textfont: {size: 11},
          marker: {
            colors: labels.map((l) => {
              if (l === 'Evolutionary Computation') return '#1a1a2e';
              if (parents[labels.indexOf(l)] === 'Evolutionary Computation') {
                const familyColors: Record<string, string> = {
                  'Genetic Algorithms': '#4caf50',
                  'Evolution Strategies': '#00897b',
                  'Genetic Programming': '#8bc34a',
                  'Differential Evolution': '#009688',
                  'EDAs': '#26a69a',
                  'Multi-Objective EA': '#2196f3',
                  'Quality-Diversity': '#9c27b0',
                  'Neuroevolution': '#e53935',
                  'Coevolution': '#ff9800',
                  'Memetic Algorithms': '#ff5722',
                };
                return familyColors[l] || '#607d8b';
              }
              return '';
            }),
          },
          insidetextorientation: 'radial',
        },
      ]}
      layout={{
        title: {text: 'The EC Family Tree (click to zoom)', font: {size: 14}},
        height: 520,
        margin: {l: 10, r: 10, t: 40, b: 10},
      }}
    />
  );
}
