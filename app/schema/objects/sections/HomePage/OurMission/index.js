export default {
  name: 'our-mission',
  title: 'Our Mission',
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
      name: 'heading',
      type: 'typography',
      title: 'Heading Settings',
    },
    {
      title: 'Link',
      name: 'link',
      type: 'basic-link',
    },
    {
      title: 'Body Portable Text',
      name: 'body',
      type: 'portableText',
    },
  ],
};
