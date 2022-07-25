export default {
  name: 'story',
  type: 'document',
  title: 'Story',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    // {
    //   name: 'slug',
    //   type: 'slug',
    //   options: {
    //     source: 'title',
    //     maxLength: 96,
    //   },
    //   validation: (Rule) => Rule.required(),
    // },
    {
      name: 'settings',
      type: 'story-card',
      title: 'Story Settings',
    },
  ],
};
