import { BoundedProps } from '@/lib/types';
import clsx from 'clsx';

const Bounded = ({
    as: Comp = 'section',
    className,
    children,
    variant = 'margin',
}: BoundedProps) => {
    return <Comp className={clsx(`space-y-5 md:space-y-10`)}>{children}</Comp>;
};

export default Bounded;
