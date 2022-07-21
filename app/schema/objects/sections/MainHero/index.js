export default {
  name: 'main-hero',
  title: 'Main Hero',
  type: 'object',
  fields: [
    {
      title: 'Enable to show section?',
      name: 'enabled',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      title: 'Link',
      name: 'link',
      type: 'basic-link',
    },
    {
      title: 'Background Image',
      name: 'backgroundImage',
      type: 'picture',
    },
    {
      title: 'Background video url',
      description: 'Youtube video url',
      name: 'videoUrl',
      type: 'string',
    },
  ],
};
