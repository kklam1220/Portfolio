
import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Award {
  title: string;
  description?: string;
  highlight?: boolean;
  year: string;
}

export interface Work {
  title: string;
  organization?: string;
  category: string;
  description?: string;
  image?: string; // Path to the image
  year?: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  year: string;
  description?: string;
}

export interface TimelineEntry {
  id: string;
  year: string;
  title: string;
  subtitle?: string; // Organization or Award body
  description?: string;
  category?: string;
  image?: string;
  type: 'work' | 'award' | 'grant' | 'scholarship';
  highlight?: boolean;
}
