export default {
  name: 'intro-slider',
  title: 'Intro Slider',
  type: 'object',
  fields: [
    {
      title: 'Swiper Cards',
      name: 'swipers',
      type: 'array',

      of: [{ type: 'intro-slider-card' }],
    },
  ],
};
