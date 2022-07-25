export default {
  name: 'projects',
  title: 'Projects Section',
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
    // {
    //   title: 'Project Cards',
    //   name: 'projects',
    //   type: 'array',
    //   of: [{ type: 'project-card' }],
    // },
  ],
};
