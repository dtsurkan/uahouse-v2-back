export default {
  name: 'donation-methods',
  title: 'Donation Methods',
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
      type: 'array',
      name: 'donationMethods',
      title: 'Donation Methods',
      of: [
        {
          type: 'picture',
        },
      ],
    },
  ],
};
