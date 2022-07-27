import basicSlug from '../../objects/shared/BasicSlug';

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
    basicSlug({ source: 'title', group: '' }),
    {
      name: 'settings',
      type: 'story-card',
      title: 'Story Settings',
    },
  ],
};
