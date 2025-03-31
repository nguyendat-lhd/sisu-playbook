/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Tổng quan về AI CoE',
      items: [
        'overview',
        {
          type: 'category',
          label: 'Giới thiệu về AI CoE',
          items: [
            'overview/what-is-ai-coe',
            'overview/benefits',
            'overview/operating-model',
          ],
        },
        {
          type: 'category',
          label: 'Lộ trình xây dựng AI CoE',
          items: [
            'overview/development-stages',
            'overview/success-factors',
          ],
        },
      ],
    },
    'framework',
    'case-studies',
    'summary',
    'appendix',
  ],
};

module.exports = sidebars; 