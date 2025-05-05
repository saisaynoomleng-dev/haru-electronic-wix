import { FaQuestionCircle } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export const faqType = defineType({
  name: 'faq',
  title: 'FAQ',
  icon: FaQuestionCircle,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'faqs',
      title: 'faqs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              type: 'string',
            }),
            defineField({
              name: 'answer',
              type: 'text',
            }),
          ],
        },
      ],
    }),
  ],
});
