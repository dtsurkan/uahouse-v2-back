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
      name: 'suptitle',
      type: 'typography',
      title: 'Suptitle Settings',
    },
    {
      type: 'array',
      name: 'tabs',
      title: 'Tabs',
      of: [{ type: 'aid-roadmap-tab' }],
    },
  ],
};
