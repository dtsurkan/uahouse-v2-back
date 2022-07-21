export default {
  name: 'statistics',
  title: 'Statistics Section',
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
      name: 'total',
      type: 'number',
      title: 'Total',
    },
    {
      title: 'Points',
      name: 'points',
      type: 'array',
      of: [{ type: 'statistic-point' }],
    },
  ],
};
