export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  note?: string;
  icon: string;
  image: string;
  lessons?: string;
  hours?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  programme: string;
  university: string;
  avatar: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export interface WhyUsPoint {
  id: string;
  title: string;
  description: string;
  stat: string;
}
