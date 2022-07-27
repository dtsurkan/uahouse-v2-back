import slugify from 'slugify';

// NOTE! Just override some of symbols of library
slugify.extend({ $: '', '%': '', '<': '', '>': '' });

export const customSlugify = (input) => {
  const slug = slugify(input, {
    strict: true, // strip special characters except replacement
    lower: true,
  });

  return slug;
};
