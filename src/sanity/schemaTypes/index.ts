import { type SchemaTypeDefinition } from 'sanity';
import { productType } from './productType';
import { productReviewType } from './productReview';
import { blockContentType } from './blockContent';
import { reviewType } from './reviewType';
import { newsletterType } from './newsletterType';
import { faqType } from './faqType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    productType,
    productReviewType,
    blockContentType,
    reviewType,
    newsletterType,
    faqType,
  ],
};
