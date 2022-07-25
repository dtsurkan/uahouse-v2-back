export default {
  type: 'document',
  name: 'about-page',
  title: 'About Page',
  groups: [
    {
      name: 'heroSection',
      title: 'Hero',
    },
    {
      name: 'ourGoalsSection',
      title: 'Our Goals',
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
    {
      name: 'ourGoalsSection',
      type: 'our-goals',
      title: 'Our Goals',
      group: 'ourGoalsSection',
    },
  ],
};
