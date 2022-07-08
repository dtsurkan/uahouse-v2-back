export default {
  type: 'document',
  name: 'home-page',
  title: 'Home Page',
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
      name: 'introSlider',
      type: 'intro-slider',
      title: 'Intro Slider',
    },
    {
      title: 'Activities Section',
      name: 'activitiesSection',
      type: 'activities',
    },
    {
      title: 'Our Mission Section',
      name: 'ourMissionSection',
      type: 'our-mission',
    },
  ],
};
