export default {
  name: 'image-quote-block',
  type: 'object',
  title: 'Image Quote Block',
  fields: [
    {
      name: 'quote',
      type: 'string',
      title: 'Quote',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'picture',
    },
  ],
};
