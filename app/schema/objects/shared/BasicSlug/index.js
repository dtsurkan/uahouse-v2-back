import { customSlugify } from '../../../../utils';

const basicSlug = ({ source = `title`, group = '', description = 'Used for routing in frontend. E.g: /projects/title-of-project' }) => ({
  name: 'slug',
  type: 'slug',
  description,
  group,
  options: {
    source,
    slugify: (value) => customSlugify(value),
  },
  validation: (Rule) => Rule.required(),
});

export default basicSlug;
