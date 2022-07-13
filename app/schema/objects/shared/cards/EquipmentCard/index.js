export default {
  name: 'equipment-card',
  type: 'object',
  title: 'Equipment Card',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'quantity',
      type: 'number',
      title: 'Quantity',
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'picture',
    },
  ],
};
