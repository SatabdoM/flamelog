'use client';

import * as React from 'react';
import { Tooltip, TooltipTrigger, TooltipContent } from './tooltip';
import { Button, type buttonVariants } from './button';

import type { VariantProps } from 'class-variance-authority';

type ButtonWithTooltipProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    tooltip: React.ReactNode;
    tooltipSide?: React.ComponentProps<typeof TooltipContent>['side'];
    tooltipSideOffset?: React.ComponentProps<typeof TooltipContent>['sideOffset'];
    tooltipDelayDuration?: number;
    disabled?: boolean;
  };

const ButtonWithTooltip = React.forwardRef<HTMLButtonElement, ButtonWithTooltipProps>(
  (
    {
      tooltip,
      tooltipSide,
      tooltipSideOffset,
      tooltipDelayDuration,
      variant,
      size,
      className,
      disabled,
      ...buttonProps
    },
    ref
  ) => {
    return (
      <Tooltip delayDuration={tooltipDelayDuration ?? 200}>
        <TooltipTrigger asChild>
          <Button
            ref={ref}
            variant={variant}
            size={size}
            className={className}
            disabled={disabled}
            {...buttonProps}
          />
        </TooltipTrigger>
        <TooltipContent side={tooltipSide} sideOffset={tooltipSideOffset}>
          {tooltip}
        </TooltipContent>
      </Tooltip>
    );
  }
);

ButtonWithTooltip.displayName = 'ButtonWithTooltip';

export { ButtonWithTooltip };
