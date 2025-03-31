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
      label: 'AI CoE Framework',
      items: [
        'ai-coe-framework/introduction',
        'ai-coe-framework/opportunity-and-usecases',
        'ai-coe-framework/capability-and-development',
        'ai-coe-framework/technology-and-infrastructure',
      ],
    },
  ],
};

export default sidebars;
