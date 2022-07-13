export default {
  name: 'projects',
  title: 'Projects Section',
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
      title: 'Project Cards',
      name: 'projects',
      type: 'array',
      of: [{ type: 'project-card' }],
    },
  ],
};
