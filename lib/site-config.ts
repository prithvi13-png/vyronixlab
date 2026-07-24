import {
  Salad,
  MessageCircle,
  GraduationCap,
  TrendingUp,
  CalendarClock,
  UserCheck,
  FlaskConical,
  ShieldCheck,
  ClipboardList,
  Sparkles,
  Trophy,
  Utensils,
} from "lucide-react";

import type {
  StatItem,
  FeatureCard,
  ComparisonRow,
  TimelineStep,
  Program,
  FollowUpItem,
  FAQItem,
  NavLink,
} from "@/types";

export const siteConfig = {
  name: "VYRONIX LAB",
  tagline: "Transform Your Body. Understand the Science.",
  description:
    "VYRONIX LAB is a premium online body transformation coaching brand offering personalized diet, personalized workouts, daily accountability, and complete nutrition & fitness education.",
  url: "https://vyronixlab.com",
  whatsapp: "+916364096792",
  whatsappDisplay: "+91 6364096792",
  whatsappHref: "https://wa.me/916364096792",
};

export const navLinks: NavLink[] = [
  { label: "Why Us", href: "#why-us" },
  { label: "Timeline", href: "#timeline" },
  { label: "Programs", href: "#programs" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const stats: StatItem[] = [
  { icon: CalendarClock, value: 3, label: "Months Coaching" },
  { icon: UserCheck, value: 100, suffix: "%", label: "Personalized" },
  { icon: MessageCircle, display: "Daily", label: "Follow-up" },
  { icon: FlaskConical, display: "Science", label: "Based Coaching" },
  { icon: ShieldCheck, display: "Premium", label: "Client Support" },
];

export const whyChooseUs: FeatureCard[] = [
  {
    icon: Salad,
    title: "Personalized Diet & Workout",
    description: "Built around your body, schedule, and goals not a generic template.",
  },
  {
    icon: MessageCircle,
    title: "Daily WhatsApp Follow-up",
    description: "Real accountability, every single day.",
  },
  {
    icon: GraduationCap,
    title: "Nutrition & Workout Education",
    description: "Understand the why behind every meal and every exercise.",
  },
  {
    icon: TrendingUp,
    title: "Long-term Results",
    description: "Knowledge and habits designed to outlast the coaching period.",
  },
];

export const comparisonRows: ComparisonRow[] = [
  { label: "Personalized Diet & Workout", traditional: false, vyronix: true },
  { label: "Daily Accountability", traditional: false, vyronix: true },
  { label: "Nutrition & Workout Education", traditional: false, vyronix: true },
  { label: "Affordable Premium Pricing", traditional: false, vyronix: true },
];

export const timelineSteps: TimelineStep[] = [
  { step: 1, title: "Body Assessment", description: "A complete evaluation of your body type, goals, and lifestyle.", icon: ClipboardList },
  { step: 2, title: "Personalized Plan & Daily Support", description: "Your diet, workout, and daily accountability, built around you.", icon: Salad },
  { step: 3, title: "Complete Transformation", description: "Sustainable results, built on knowledge that lasts a lifetime.", icon: Trophy },
];

export const programs: Program[] = [
  {
    name: "Transformation Plan",
    price: "₹5,999",
    duration: "3 Months",
    tagline: "A complete foundation for your transformation.",
    features: [
      "Personalized Diet Plan",
      "Personalized Workout Plan",
      "Nutrition Guide",
      "Weekly Progress Review",
    ],
  },
  {
    name: "Premium Transformation",
    price: "₹10,999",
    duration: "3 Months",
    popular: true,
    tagline: "The complete VYRONIX LAB transformation system.",
    features: [
      "Personalized Diet",
      "Personalized Workout",
      "Daily WhatsApp Follow-up & Accountability",
      "Daily Habit Tracking",
      "Weekly Reviews & Plan Adjustments",
      "Nutrition & Workout Education",
      "Body Analysis",
      "Priority WhatsApp Support",
    ],
  },
];

export const followUpItems: FollowUpItem[] = [
  { icon: MessageCircle, title: "Daily Check-ins", description: "A daily point of contact so nothing slips through the cracks." },
  { icon: Utensils, title: "Meal & Workout Feedback", description: "Direct feedback to keep nutrition and training on point." },
  { icon: Sparkles, title: "Continuous Motivation", description: "A coach in your corner, keeping you moving on hard days." },
];

export const statIcons = { CalendarClock, UserCheck, MessageCircle, FlaskConical, ShieldCheck };

export const faqItems: FAQItem[] = [
  {
    question: "Can beginners and women join?",
    answer:
      "Yes. VYRONIX LAB is built for every level and for both men and women, across all transformation goals your plan is designed around where you are today.",
  },
  {
    question: "Do I need supplements?",
    answer:
      "No. Supplements are optional, never mandatory. Your plan is built around real food first.",
  },
  {
    question: "How long does transformation take?",
    answer:
      "Most transformations take 3–6 months. Our programs cover the first 3 months you can simply renew to continue.",
  },
];
