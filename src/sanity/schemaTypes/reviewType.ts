import { defineField, defineType } from 'sanity';

export const reviewType = defineType({
  name: 'review',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Review Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'username',
      title: 'Username',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating Number',
      type: 'number',
      options: {
        list: [
          { title: '1', value: 1 },
          { title: '2', value: 2 },
          { title: '3', value: 3 },
          { title: '4', value: 4 },
          { title: '5', value: 5 },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required().min(1).max(5),
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
          validation: (rule) => rule.required(),
        }),
      ],
    }),
  ],
});
