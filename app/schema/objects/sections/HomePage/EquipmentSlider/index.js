export default {
  name: 'equipment-slider',
  title: 'Equipment Slider',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      title: 'Equipment Items',
      name: 'equipments',
      type: 'array',
      of: [{ type: 'equipment-card' }],
    },
  ],
};
