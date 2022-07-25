export default {
  type: 'document',
  name: 'our-stories-page',
  title: 'Our Stories Page',
  groups: [
    {
      name: 'heroSection',
      title: 'Hero',
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      // options: {
      //   source: 'title',
      //   maxLength: 96,
      // },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heroSection',
      type: 'banner',
      title: 'Hero',
      group: 'heroSection',
    },
  ],
};
