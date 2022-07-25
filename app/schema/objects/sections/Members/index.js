export default {
  name: 'members',
  title: 'Members',
  type: 'object',
  fields: [
    {
      title: 'Enable to show section?',
      name: 'enabled',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'boards',
      type: 'array',
      title: 'Boards',
      of: [{ type: 'member-board' }],
    },
  ],
};
