// Bounded
export type BoundedProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  variant?: 'margin' | 'no-margin';
};

// Title
export type TitleProps = {
  as?: 'h1' | 'h2' | 'h3';
  size?: 'lg' | 'md' | 'sm';
  className?: string;
  children: React.ReactNode;
};
