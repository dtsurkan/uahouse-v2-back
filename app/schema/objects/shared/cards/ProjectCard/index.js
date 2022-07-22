export default {
  name: 'project-card',
  type: 'object',
  title: 'Project Card',
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
    {
      name: 'donation',
      type: 'object',
      title: 'Donation',
      fields: [
        {
          name: 'amount',
          type: 'number',
          title: 'Amount',
        },
        {
          name: 'target',
          type: 'number',
          title: 'Target',
        },
      ],
    },
    // {
    //   title: 'Link Href',
    //   name: 'href',
    //   type: 'string',
    // },
  ],
};
