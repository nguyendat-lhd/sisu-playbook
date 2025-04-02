import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'why-invest-in-ai-coe',
    {
      type: 'category',
      label: 'AI CoE Toolkit',
      items: [
        'ai-coe-toolkit/introduction',
        'ai-coe-toolkit/opportunity-and-usecases',
        'ai-coe-toolkit/enablement',
        'ai-coe-toolkit/technology-and-infrastructure',
      ],
    },
    {
      type: 'category',
      label: 'Quy trình triển khai',
      items: [
        'process-ai-coe/intro-process-ai-coe',
        'process-ai-coe/prepare',
        'process-ai-coe/assessment',
        'process-ai-coe/planning',
        'process-ai-coe/monitoring',
      ],
    },
    'next-steps',
  ],
};

export default sidebars;
