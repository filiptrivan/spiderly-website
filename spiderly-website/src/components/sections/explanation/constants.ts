export const terminalSteps = [
  { type: 'success', text: 'Files generated successfully.' },
  { type: 'success', text: 'Created and updated the database successfully.' },
  { type: 'success', text: 'Packages installed successfully.' },
  { type: 'success', text: 'Spiderly app created successfully!' },
];

export const productProperties = [
  { name: 'Name', type: 'string' },
  { name: 'Active', type: 'bool' },
  { name: 'Text', type: 'string', attributes: [{ name: 'UIControlType', value: 'TextArea' }] },
  { name: 'Html', type: 'string', attributes: [{ name: 'UIControlType', value: 'Editor' }] },
  { name: 'Image', type: 'string', attributes: [{ name: 'BlobName' }] },
];

export const starterFeatures = [
  {
    title: 'Database Initialized',
    description: 'Complete database setup and configuration',
  },
  {
    title: 'Built In Authentication',
    description: 'Including third party (e.g., Google sign-in)',
  },
  {
    title: 'Built In Authorization',
    description: 'Roles and permissions management',
  },
  {
    title: 'Built In Notifications',
    description: 'Notify users inside your Spiderly app',
  },
];

export const crudFeatures = [
  {
    title: 'UI pages',
    description: 'Table view with sorting, filtering, pagination, and admin create/edit forms',
  },
  {
    title: 'Controllers',
    description: '.NET API controllers with matching Angular API client methods',
  },
  {
    title: 'DTOs and TypeScript classes',
    description: 'C# partial DTOs with matching Angular TypeScript classes',
  },
  {
    title: 'Backend + Frontend validations',
    description: 'FluentValidation rules with synced Angular reactive form validators',
  },
  {
    title: 'Service methods',
    description: 'Service-layer logic for database access',
  },
];
