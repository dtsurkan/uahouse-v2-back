export default {
  name: 'intro-slider-card',
  type: 'object',
  title: 'Intro Slider Card',

  fields: [
    {
      name: 'heading',
      type: 'typography',
      title: 'Heading Settings',
    },
    {
      title: 'Has description text?',
      name: 'hasDescriptionText',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'description',
      type: 'typography',
      title: 'Description Settings',
      hidden: ({ parent }) => !parent?.hasDescriptionText,
    },
    {
      title: 'Link',
      name: 'link',
      type: 'basic-link',
    },
    {
      title: 'Background Type',
      name: 'backgroundType',
      type: 'string',
      initialValue: 'image',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Background Image',
      name: 'image',
      type: 'picture',
      hidden: ({ parent }) => parent?.backgroundType === 'video',
    },
    {
      title: 'Background video url',
      description: 'Youtube video url',
      name: 'bgVideoUrl',
      type: 'string',
      hidden: ({ parent }) => parent?.backgroundType === 'image',
    },
    {
      title: 'Background mobile image instead of video',
      name: 'mobileVideoPlaceholder',
      type: 'picture',
      description: "For mobile, because video won't be on mobile",
      hidden: ({ parent }) => parent?.backgroundType === 'image',
    },
  ],
  preview: {
    select: {
      title: 'heading.text',
    },
  },
};
