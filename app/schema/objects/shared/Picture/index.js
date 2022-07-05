export default {
  title: 'Picture',
  name: 'picture',
  type: 'image',
  options: {
    hotspot: true, // <-- Defaults to false
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternate text',
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      // Editing this field will be hidden behind an "Edit"-button
      name: 'attribution',
      type: 'string',
      title: 'Attribution',
    },
  ],
};
