export default {
  name: 'story-card',
  type: 'object',
  title: 'Story Card',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'picture',
    },
    // {
    //   title: 'Link Href',
    //   name: 'href',
    //   type: 'string',
    // },
  ],
};
