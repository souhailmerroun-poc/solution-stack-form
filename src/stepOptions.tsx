const stepOptions = [
  {
    key: 0,
    name: "Version Control",
    options: [
      'Github Flow',
      'Conventional commits',
      'Pull Request Template',
      'Releases',
      'Semantic Versioning',
    ],
    inputType: "checkbox",
  },
  {
    key: 1,
    name: "Framework",
    options: [
      'Laravel',
      'Next.js',
    ],
    inputType: "select",
  },
];

export default stepOptions;