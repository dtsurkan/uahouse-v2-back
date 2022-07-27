export default {
  name: 'resource-donation',
  type: 'document',
  title: 'Resource Donation',
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
      name: 'resourceDescription',
      type: 'text',
      title: 'Resource Description',
      readOnly: true,
    },
    {
      name: 'transportationDescription',
      type: 'text',
      title: 'Transportation Description',
      readOnly: true,
    },
  ],
};
