export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'status',
      type: 'string',
      title: 'Status',
      initialValue: 'draft',
      description: "The status of the project. 'draft' means the project is not published.",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Ongoing', value: 'ongoing' },
          { title: 'Completed', value: 'completed' },
        ],
      },
    },
    {
      name: 'settings',
      type: 'project-card',
      title: 'Settings',
    },
  ],
};
