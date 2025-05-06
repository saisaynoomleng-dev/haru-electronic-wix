import { defineField, defineType } from 'sanity';
import { AiFillProduct } from 'react-icons/ai';

export const productType = defineType({
  name: 'product',
  icon: AiFillProduct,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) => rule.required(),
      hidden: ({ document }) => !document?.name,
    }),
    defineField({
      name: 'addedDate',
      title: 'Added Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'instocks',
      title: 'Instock Items',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'info',
      title: 'Product Info',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Product Price',
      type: 'number',
      validation: (rule) => rule.required().min(10),
    }),
    defineField({
      name: 'color',
      title: 'Available Color',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Black', value: 'black' },
          { title: 'Blue', value: 'blue' },
          { title: 'Green', value: 'green' },
          { title: 'Orange', value: 'orange' },
          { title: 'Purple', value: 'purple' },
          { title: 'Red', value: 'red' },
        ],
        layout: 'grid',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: [
          { title: 'Mobile & Wearable Tech', value: 'mobile-wearable' },
          { title: 'Drones & Cameras ', value: 'drone-camera' },
          { title: 'Headphones & Speakers', value: 'headphone-speaker' },
          { title: 'Computers', value: 'computers' },
          { title: 'Tablets', value: 'tablets' },
          { title: 'TV & Home Cinema', value: 'tv-cinema' },
          { title: 'Accessories', value: 'accessories' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'reviews',
      title: 'Product Review',
      type: 'array',
      of: [
        {
          type: 'object',
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
              name: 'reviewText',
              title: 'Review Text',
              type: 'text',
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
        },
      ],
    }),
    defineField({
      name: 'detail',
      title: 'Product Detail',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImages',
      title: 'Product Images',
      type: 'array',
      of: [
        defineField({
          name: 'image',
          title: 'Product Image',
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
  preview: {
    select: {
      name: 'name',
      price: 'price',
      category: 'category',
      image: 'mainImages.0.asset',
    },
    prepare({ name, price, category, image }) {
      return {
        title: name,
        subtitle: `${category} | $(${price})`,
        media: image || AiFillProduct,
      };
    },
  },
});
