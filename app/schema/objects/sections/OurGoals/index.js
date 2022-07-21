export default {
  name: 'our-goals',
  title: 'Our Goals',
  type: 'object',
  fields: [
    {
      title: 'Enable to show section?',
      name: 'enabled',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'videoUrl',
      type: 'string',
      title: 'Video URL',
      description: 'Enter the URL of the video',
    },
    {
      name: 'blocks',
      type: 'array',
      title: 'Blocks',
      of: [
        {
          name: 'item',
          type: 'object',
          title: 'Block',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
              description: 'Enter the title of the block',
            },
            {
              name: 'body',
              type: 'text',
              title: 'Body',
              description: 'Enter the body of the block',
            },
          ],
        },
      ],
    },
  ],
};
