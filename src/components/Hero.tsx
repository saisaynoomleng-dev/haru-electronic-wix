import Image from 'next/image';
import Bounded from './Bounded';
import Titlte from './Title';
import Title from './Title';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <Bounded
      variant="no-margin"
      className="min-h-screen hero-bg-mobile md:hero-bg-tablet lg:hero-bg-desktop flex flex-col justify-start pt-22 items-center gap-3 md:gap-5 lg:gap-8 text-center text-white"
    >
      <Title
        className="text-brand-white capitalize md:max-w-[70%] lg:max-w-[60%]"
        size="lg"
      >
        Shop the top brand electronic
      </Title>
      <p>Get more for your money with every purchase!</p>
      <Button>Shop Now</Button>
    </Bounded>
  );
};

export default Hero;
