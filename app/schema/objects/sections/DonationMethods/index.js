export default {
  name: 'donation-methods',
  title: 'Donation Methods',
  type: 'object',
  fields: [
    {
      title: 'Enable to show section?',
      name: 'enabled',
      type: 'boolean',
    },
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
