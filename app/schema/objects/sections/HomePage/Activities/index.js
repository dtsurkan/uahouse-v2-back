export default {
  name: 'activities',
  title: 'Activities Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      title: 'Activities Cards',
      name: 'activities',
      type: 'array',
      of: [{ type: 'activity-card' }],
    },
  ],
};
