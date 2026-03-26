import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  courseSidebar: [
    'index',
    'contents',
    {
      type: 'category',
      label: 'A. Foundations',
      collapsed: false,
      items: ['modules/m00', 'modules/m01', 'modules/m02'],
    },
    {
      type: 'category',
      label: 'B. Genetic Algorithms',
      collapsed: false,
      items: ['modules/m03', 'modules/m04'],
    },
    {
      type: 'category',
      label: 'C. Evolution Strategies',
      collapsed: false,
      items: ['modules/m05', 'modules/m06', 'modules/m07', 'modules/m08'],
    },
    {
      type: 'category',
      label: 'D. Other EC Paradigms',
      collapsed: false,
      items: ['modules/m09', 'modules/m10', 'modules/m11', 'modules/m12'],
    },
    {
      type: 'category',
      label: 'E. Swarm Intelligence',
      collapsed: false,
      items: ['modules/m13', 'modules/m14', 'modules/m15'],
    },
    {
      type: 'category',
      label: 'F. Multi-Objective & Diversity',
      collapsed: false,
      items: ['modules/m16', 'modules/m17', 'modules/m18'],
    },
    {
      type: 'category',
      label: 'G. Neuroevolution & Deep Learning',
      collapsed: false,
      items: ['modules/m19', 'modules/m20', 'modules/m21'],
    },
    {
      type: 'category',
      label: 'H. Advanced Topics',
      collapsed: false,
      items: ['modules/m22', 'modules/m23', 'modules/m24'],
    },
    {
      type: 'category',
      label: 'I. Rigor & Capstone',
      collapsed: false,
      items: ['modules/m25', 'modules/m26'],
    },
  ],
};

export default sidebars;
