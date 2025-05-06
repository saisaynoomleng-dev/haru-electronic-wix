import Category from '@/components/main-sections/Category';
import Hero from '@/components/main-sections/Hero';
import NewProducts from '@/components/main-sections/NewProducts';

export default function Home() {
  return (
    <main className="space-y-5 md:space-y-10">
      <Hero />
      <NewProducts />
      <Category />
    </main>
  );
}
