import { urlFor } from '@/sanity/lib/image';
import { NEW_PRODUCTS_QUERYResult } from '@/sanity/types';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = (props: NonNullable<NEW_PRODUCTS_QUERYResult>[number]) => {
  const { name, mainImages, slug, price, reviews } = props;
  const imageURL = (mainImages && mainImages[0].asset?.url) || '';
  const imageAlt = (mainImages && mainImages[0].alt) || '';

  return (
    <Link href={`/products/${slug?.current}`} className="flex flex-col gap-1">
      <div className="overflow-hidden group">
        {mainImages!.length > 0 && (
          <Image
            src={urlFor(imageURL)
              .width(500)
              .height(500)
              .format('webp')
              .quality(90)
              .auto('format')
              .url()}
            width={300}
            height={300}
            alt={imageAlt}
            priority
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        )}
      </div>
      <p className="font-semibold text-fs-300">{name}</p>
      <p>${price?.toLocaleString()}</p>
    </Link>
  );
};

export default ProductCard;
