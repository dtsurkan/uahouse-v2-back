export default {
  type: 'document',
  name: 'project-page',
  title: 'Project Page',
  groups: [
    {
      name: 'heroSection',
      title: 'Hero',
    },
    {
      name: 'bannerSection',
      title: 'Banner',
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
      name: 'bannerSection',
      type: 'banner',
      title: 'Banner',
      group: 'bannerSection',
    },
  ],
};
