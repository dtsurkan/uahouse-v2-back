export default {
  name: 'basic-link',
  type: 'object',
  title: 'Basic Button',
  fields: [
    {
      name: 'typography',
      type: 'typography',
      title: 'Link Typography Settings',
    },
    {
      title: 'Link Href',
      name: 'href',
      type: 'string',
    },
    // {
    //   title: 'Is Prefetch Link?',
    //   name: 'isPrefetchLink',
    //   description:
    //     'You can turn off/turn on prefetching of link. It is better for performance but worse navigate between pages',
    //   type: 'boolean',
    //   initialValue: true,
    // },
  ],
};
