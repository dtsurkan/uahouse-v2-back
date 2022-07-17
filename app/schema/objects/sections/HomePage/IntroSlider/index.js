export default {
  name: 'intro-slider',
  title: 'Intro Slider',
  type: 'object',
  fields: [
    {
      title: 'Enable to show section?',
      name: 'enabled',
      type: 'boolean',
    },
    {
      title: 'Swiper Cards',
      name: 'swipers',
      type: 'array',

      of: [{ type: 'intro-slider-card' }],
    },
  ],
};
