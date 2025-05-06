import Bounded from '@/components/Bounded';
import Hero from '@/components/main-sections/Hero';
import NewProducts from '@/components/main-sections/NewProducts';

export default function Home() {
  return (
    <Bounded>
      <Hero />
      <NewProducts />
    </Bounded>
  );
}
