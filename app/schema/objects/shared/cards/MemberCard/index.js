export default {
  name: 'member-card',
  title: 'Member Card',
  type: 'object',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'position',
      type: 'string',
      title: 'Position',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'image',
      type: 'picture',
      title: 'Image',
    },
  ],
};
