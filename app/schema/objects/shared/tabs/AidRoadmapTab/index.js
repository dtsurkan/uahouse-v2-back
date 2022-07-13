export default {
  name: 'aid-roadmap-tab',
  type: 'object',
  title: 'Tab',
  fields: [
    {
      name: 'contentType',
      type: 'string',
      title: 'Content Type',
      initialValue: 'text',
      options: {
        list: [
          { title: 'Text', value: 'text' },
          { title: 'Image', value: 'image' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'label',
      type: 'string',
      title: 'Tab label',
      hidden: ({ parent }) => parent?.contentType === 'image',
    },
    {
      title: 'Tab Content Image',
      name: 'tabImage',
      type: 'picture',
      hidden: ({ parent }) => parent?.contentType === 'text',
    },
    {
      title: 'Accordion Mobile Image',
      name: 'accordionMobileImage',
      type: 'picture',
      hidden: ({ parent }) => parent?.contentType === 'text',
    },
    {
      name: 'tabContent',
      type: 'typography',
      title: 'Tab Content Settings',
    },
    {
      type: 'array',
      name: 'imageList',
      title: 'Image List',
      of: [
        {
          type: 'picture',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'label',
      media: 'tabImage',
    },
  },
};
