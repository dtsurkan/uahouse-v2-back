export default {
  name: 'activities',
  title: 'Activities Section',
  type: 'object',
  fields: [
    {
      title: 'Enable to show section?',
      name: 'enabled',
      type: 'boolean',
    },
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
      title: 'Activities Cards',
      name: 'activities',
      type: 'array',
      of: [{ type: 'activity-card' }],
    },
  ],
};
