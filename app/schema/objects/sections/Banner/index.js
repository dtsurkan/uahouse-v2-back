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
    {
      name: 'hasLink',
      title: 'Has Link?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'link',
      type: 'basic-link',
      title: 'Basic Link',
      hidden: ({ parent }) => !parent?.hasLink,
    },
  ],
};
