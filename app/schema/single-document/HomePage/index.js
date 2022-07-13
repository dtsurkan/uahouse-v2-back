export default {
  type: 'document',
  name: 'home-page',
  title: 'Home Page',
  groups: [
    {
      name: 'introSlider',
      title: 'Intro Slider',
    },
    {
      name: 'activitiesSection',
      title: 'Activities',
    },
    {
      name: 'ourMissionSection',
      title: 'Our Mission',
    },
    {
      name: 'donationMethodsSection',
      title: 'Donation Methods',
    },
    {
      name: 'aidRoadmapSection',
      title: 'Aid Roadmap',
    },
    {
      name: 'equipmentSliderSection',
      title: 'Equipment Slider',
    },
    {
      name: 'projectsSection',
      title: 'Projects',
    },
    {
      name: 'statisticsSection',
      title: 'Statistics',
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
      name: 'introSlider',
      type: 'intro-slider',
      title: 'Intro Slider',
      group: 'introSlider',
    },
    {
      title: 'Activities Section',
      name: 'activitiesSection',
      type: 'activities',
      group: 'activitiesSection',
    },
    {
      title: 'Our Mission Section',
      name: 'ourMissionSection',
      type: 'our-mission',
      group: 'ourMissionSection',
    },
    {
      title: 'Donation Methods Section',
      name: 'donationMethodsSection',
      type: 'donation-methods',
      group: 'donationMethodsSection',
    },
    {
      title: 'Aid Roadmap Section',
      name: 'aidRoadmapSection',
      type: 'aid-roadmap',
      group: 'aidRoadmapSection',
    },
    {
      title: 'Equipment Slider Section',
      name: 'equipmentSliderSection',
      type: 'equipment-slider',
      group: 'equipmentSliderSection',
    },
    {
      title: 'Projects Section',
      name: 'projectsSection',
      type: 'projects',
      group: 'projectsSection',
    },
    {
      title: 'Statistics Section',
      name: 'statisticsSection',
      type: 'statistics',
      group: 'statisticsSection',
    },
  ],
};
