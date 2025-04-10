import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@workspace/ui/lib/utils';
import logo from '@workspace/ui/assets/images/logo.png';

// Define the type for Next.js image imports
interface NextImage {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
}

// Extract the actual URL from the logo object with proper type assertion
const logoUrl = typeof logo === 'string' ? logo : (logo as unknown as NextImage).src;

const logoVariants = cva('flex items-center justify-center overflow-hidden bg-[#010A25ff]', {
  variants: {
    variant: {
      default: 'text-primary-foreground',
      outline: 'border ring ring-primary ring-offset-primary',
    },
    size: {
      default: 'size-10',
      sm: 'size-6',
      lg: 'size-20',
      xl: 'size-32',
    },
    shape: {
      default: 'rounded-md',
      circle: 'rounded-full',
      squircle: 'rounded-[20%]',
      square: 'rounded-none',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    shape: 'default',
  },
});

// Define the size type that includes both predefined sizes and numeric values
type LogoSize = 'sm' | 'default' | 'lg' | 'xl' | number;

export interface LogoProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  text?: string;
  className?: string;
  size?: LogoSize;
  variant?: 'default' | 'outline';
  shape?: 'default' | 'circle' | 'squircle' | 'square';
}

const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
  ({ className, variant, size = 'default', shape, text, ...props }, ref) => {
    // Handle numeric size
    const isNumericSize = typeof size === 'number';
    const sizeValue = isNumericSize ? size : undefined;

    // Apply custom size if numeric, otherwise use the variant
    const sizeStyle = isNumericSize
      ? { width: `${sizeValue}px`, height: `${sizeValue}px` }
      : undefined;

    // Determine which size variant to use
    const sizeVariant = isNumericSize ? undefined : (size as 'sm' | 'default' | 'lg' | 'xl');

    return (
      <div ref={ref} className={cn('flex items-center gap-2', className)} {...props}>
        <div className={cn(logoVariants({ variant, size: sizeVariant, shape }))} style={sizeStyle}>
          <img src={logoUrl} alt="Logo" className="h-full w-full object-contain" />
        </div>
        {text && <span className="font-medium">{text}</span>}
      </div>
    );
  }
);

Logo.displayName = 'Logo';

export { Logo, logoVariants };
