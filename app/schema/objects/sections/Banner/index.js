export default {
  name: 'banner',
  title: 'Banner',
  type: 'object',
  fields: [
    {
      name: 'enabled',
      title: 'Enable to show section?',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      title: 'Background Image',
      name: 'image',
      type: 'picture',
    },
  ],
};
