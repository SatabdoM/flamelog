import type { LucideIcon } from 'lucide-react';

export type NavMenu = {
  label: string;
  icon?: LucideIcon;
  url: string;
  roles?: string[];
};

export type MobileNavMenu = {
  label: string;
  icon: LucideIcon;
  url: string;
  roles?: string[];
};
