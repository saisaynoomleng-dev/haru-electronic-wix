import { TitleProps } from '@/lib/types';
import clsx from 'clsx';
import React from 'react';

const Title = ({
  as: Comp = 'h1',
  children,
  className,
  size = 'sm',
}: TitleProps) => {
  return (
    <Comp
      className={clsx(
        'font-semibold text-balance leading-[1.1]',
        size === 'lg' && 'text-fs-700 md:text-fs-800 lg:text-fs-900',
        size === 'md' && 'text-fs-600 md:text-fs-700 lg:text-fs-800',
        size === 'sm' && 'text-fs-500 md:text-fs-600 lg:text-fs-700',
        className,
      )}
    >
      {children}
    </Comp>
  );
};

export default Title;
