import type { LucideIcon } from "lucide-react";

export interface StatItem {
  icon: LucideIcon;
  label: string;
  value?: number;
  suffix?: string;
  display?: string;
}

export interface FeatureCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ComparisonRow {
  label: string;
  traditional: boolean;
  vyronix: boolean;
}

export interface TimelineStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Program {
  name: string;
  price: string;
  duration: string;
  popular?: boolean;
  features: string[];
  tagline: string;
}

export interface FollowUpItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}
