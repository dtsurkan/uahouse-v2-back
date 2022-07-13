export default {
  name: 'equipment-slider',
  title: 'Equipment Slider',
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
      title: 'Equipment Items',
      name: 'equipments',
      type: 'array',
      of: [{ type: 'equipment-card' }],
    },
  ],
};
