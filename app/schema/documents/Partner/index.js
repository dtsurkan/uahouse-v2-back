export default {
  name: 'partner',
  type: 'document',
  title: 'Partner',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      readOnly: true,
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      readOnly: true,
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone',
      readOnly: true,
    },
    {
      name: 'representative',
      type: 'string',
      title: 'Representative',
      readOnly: true,
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      readOnly: true,
    },
  ],
};
