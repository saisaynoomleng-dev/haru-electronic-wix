import { defineField, defineType } from 'sanity';

export const newsletterType = defineType({
  name: 'newsletter',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      type: 'email',
      validation: (rule) => rule.required(),
    }),
  ],
});
