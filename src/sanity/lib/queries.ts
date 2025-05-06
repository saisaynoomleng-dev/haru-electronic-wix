import { defineQuery } from 'next-sanity';

export const NEW_PRODUCTS_QUERY = defineQuery(`*[_type == 'product'
 && defined(slug.current)] 
| order(_addedAt desc)[0..5]{
  name,
  price,
  slug,
  reviews,
  mainImages[]{
    alt,
    asset->{url}
  }
}`);
