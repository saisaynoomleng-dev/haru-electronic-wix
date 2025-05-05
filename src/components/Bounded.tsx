import { BoundedProps } from '@/lib/types';
import clsx from 'clsx';

const Bounded = ({
  as: Comp = 'section',
  className,
  children,
  variant = 'no-margin',
}: BoundedProps) => {
  return (
    <Comp
      className={clsx(
        `space-y-5 md:space-y-10 m-0 p-0`,
        variant === 'margin' && 'px-5 md:px-10',
        className,
      )}
    >
      {children}
    </Comp>
  );
};

export default Bounded;
