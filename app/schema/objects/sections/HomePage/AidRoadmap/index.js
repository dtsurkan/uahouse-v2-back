export default {
  name: 'aid-roadmap',
  title: 'Aid Roadmap',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'typography',
      title: 'Title Settings',
    },
    {
      type: 'array',
      name: 'tabs',
      title: 'Tabs',
      of: [{ type: 'aid-roadmap-tab' }],
    },
  ],
};
