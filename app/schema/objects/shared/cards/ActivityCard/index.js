export default {
  name: 'activity-card',
  type: 'object',
  title: 'Activity Card',
  fields: [
    {
      name: 'heading',
      type: 'typography',
      title: 'Heading Settings',
    },
    {
      title: 'Background Image',
      name: 'image',
      type: 'picture',
    },
  ],
  preview: {
    select: {
      title: 'heading.text',
    },
  },
};
