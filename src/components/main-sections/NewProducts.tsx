import Link from 'next/link';
import Bounded from '../Bounded';
import Title from '../Title';
import { Button } from '../ui/button';
import { sanityFetch } from '@/sanity/lib/live';
import { NEW_PRODUCTS_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import ProductCard from '../ProductCard';

const NewProducts = async () => {
  const { data: products } = await sanityFetch({
    query: NEW_PRODUCTS_QUERY,
  });
  return (
    <Bounded className="flex flex-col gap-5 mx-3" variant="margin">
      <div className="flex justify-between">
        <Title as="h3">New Products</Title>
        <Button>
          <Link href="/products">View More</Link>
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {products.map((product) => (
          <ProductCard key={product.slug?.current} {...product} />
        ))}
      </div>
    </Bounded>
  );
};

export default NewProducts;
