export default {
  name: 'statistics',
  title: 'Statistics Section',
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
