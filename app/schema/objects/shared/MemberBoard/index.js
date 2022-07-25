export default {
  name: 'member-board',
  title: 'Member Board',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'members',
      type: 'array',
      title: 'Members',
      of: [{ type: 'member-card' }],
    },
  ],
};
