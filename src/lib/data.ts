import type {
  Service,
  Testimonial,
  FAQItem,
  ProcessStep,
  WhyUsPoint,
  NavLink,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "About us", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: "500+", label: "Students placed" },
  { value: "50+", label: "Partner universities" },
  { value: "98%", label: "Visa success rate" },
  { value: "4.9★", label: "Student rating" },
] as const;

export const FEATURES = [
  {
    title: "Expert guidance",
    description:
      "Personal advisors who have been through the UK admission process guide you at every step.",
    icon: "academic-cap",
  },
  {
    title: "End-to-end support",
    description:
      "From your first consultation to landing in the UK — we handle everything so you don't have to.",
    icon: "globe",
  },
  {
    title: "Proven track record",
    description:
      "98% visa approval rate and 500+ successful placements across top UK universities.",
    icon: "trophy",
  },
] as const;

export const SERVICES: Service[] = [
  {
    id: "1",
    title: "University admission",
    description:
      "We handle your entire application — from university selection to securing your CAS letter. Sit back while we do the heavy lifting.",
    price: "₦50,000",
    icon: "academic-cap",
    image:
      "https://cdn.prod.website-files.com/67754de7a79fd2e4984653b7/699187ec24408a48fd246daa_learn-grow-succeed-1.2-small.webp",
    lessons: "Full service",
    hours: "4–8 weeks",
  },
  {
    id: "2",
    title: "SOP & personal statement",
    description:
      "Professionally crafted statements of purpose that make admissions officers take notice. Stand out from thousands of applicants.",
    price: "Free for Masters*",
    note: "Paid for Masters by Research",
    icon: "document",
    image:
      "https://cdn.prod.website-files.com/67754de7a79fd2e4984653b7/697dc671b38eb68fe87b64e6_gain-the-skills-to-succeed-1-p-1600.webp",
    lessons: "1-on-1 review",
    hours: "1–2 weeks",
  },
  {
    id: "3",
    title: "IELTS preparation",
    description:
      "Structured prep to help you achieve band 6.5+ on your first attempt. Includes mock tests and personalised feedback.",
    price: "₦35,000",
    icon: "chart",
    image:
      "https://cdn.prod.website-files.com/67754de7a79fd2e4984653b7/697d011e9c8e5fd602f5e864_Smiling%20Man%20Portrait.webp",
    lessons: "Mock tests",
    hours: "6–8 weeks",
  },
  {
    id: "4",
    title: "Visa guidance",
    description:
      "Complete document preparation and mock interview sessions. We've mastered what the embassy looks for.",
    price: "₦40,000",
    icon: "shield",
    image:
      "https://cdn.prod.website-files.com/67754de7a79fd2e4984653b7/697d011c4fb208206e7f1c5e_Young%20Adult%20at%20Desk.webp",
    lessons: "Full prep",
    hours: "2–3 weeks",
  },
  {
    id: "5",
    title: "Accommodation & flights",
    description:
      "We help you find suitable UK housing and book the best flight deals so you arrive stress-free.",
    price: "₦25,000",
    icon: "home",
    image:
      "https://cdn.prod.website-files.com/67754de7a79fd2e4984653b7/697d011e8aa69188c0a01061_Warm%20Portrait%20of%20a%20Man.webp",
    lessons: "Guided",
    hours: "1–2 weeks",
  },
  {
    id: "6",
    title: "Proof of funds",
    description:
      "Financial documentation support to meet UK visa requirements. We guide you on what's needed and how to present it.",
    price: "Contact us",
    icon: "banknote",
    image:
      "https://cdn.prod.website-files.com/67754de7a79fd2e4984653b7/697d011ea738480c1ff68016_Portrait%20in%20Green%20Edited.webp",
    lessons: "Advisory",
    hours: "1 week",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "Crownway made my dream of studying in the UK a reality. They handled everything from my application to my visa — I barely had to lift a finger!",
    name: "Adaeze Okafor",
    programme: "MSc Data Science",
    university: "University of Manchester",
    avatar: "AO",
    image:
      "https://cdn.prod.website-files.com/67754de7a79fd2e4984653b7/697cdaaef1c7c5d0e6241c57_learner-1-small.webp",
  },
  {
    id: "2",
    quote:
      "I was completely lost trying to apply on my own. Crownway's team guided me perfectly and I got my CAS letter in just 3 weeks.",
    name: "Oluwaseun Adeyemi",
    programme: "MBA",
    university: "University of Birmingham",
    avatar: "OA",
    image:
      "https://cdn.prod.website-files.com/67754de7a79fd2e4984653b7/697cdaabb1a54ce947746229_learner-6-small.webp",
  },
  {
    id: "3",
    quote:
      "The SOP they wrote for me was incredible. I received offers from 4 out of 5 universities I applied to!",
    name: "Chidinma Nwosu",
    programme: "MSc Public Health",
    university: "University of Leeds",
    avatar: "CN",
    image:
      "https://cdn.prod.website-files.com/67754de7a79fd2e4984653b7/697cdaacea0e030d9a8b2187_learner-3-small.webp",
  },
  {
    id: "4",
    quote:
      "Best decision I ever made. The visa prep was so thorough — I got approved on my very first attempt.",
    name: "Emeka Obi",
    programme: "MSc Engineering Management",
    university: "University of Nottingham",
    avatar: "EO",
    image:
      "https://cdn.prod.website-files.com/67754de7a79fd2e4984653b7/697cdaacf590a1deb90d4312_learner-4-small.webp",
  },
  {
    id: "5",
    quote:
      "From IELTS prep to finding accommodation in London, Crownway was with me every step of the way. I couldn't have done it without them.",
    name: "Funke Adebayo",
    programme: "MSc International Relations",
    university: "University of Bristol",
    avatar: "FA",
    image:
      "https://cdn.prod.website-files.com/67754de7a79fd2e4984653b7/697cdaae252867591a02cb90_learner-2-small.webp",
  },
];

export const PARTNER_UNIVERSITIES = [
  "University of Manchester",
  "University of Birmingham",
  "University of Leeds",
  "University of Nottingham",
  "University of Bristol",
  "University of Glasgow",
] as const;

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "1",
    step: 1,
    title: "Free consultation",
    description:
      "Book a call to discuss your academic goals, budget, and preferred UK universities.",
  },
  {
    id: "2",
    step: 2,
    title: "University selection",
    description:
      "We match you with the best universities based on your profile, course preference, and career goals.",
  },
  {
    id: "3",
    step: 3,
    title: "Application & SOP",
    description:
      "We prepare a standout personal statement and submit your application to your chosen universities.",
  },
  {
    id: "4",
    step: 4,
    title: "Visa processing",
    description:
      "Complete visa documentation support, financial evidence guidance, and mock interview preparation.",
  },
  {
    id: "5",
    step: 5,
    title: "Pre-departure",
    description:
      "Accommodation booking, flight arrangements, and everything you need for a smooth arrival in the UK.",
  },
];

export const WHY_US_POINTS: WhyUsPoint[] = [
  {
    id: "1",
    title: "5+ years of experience",
    description:
      "We've been helping Nigerian students get into top UK universities since 2019.",
    stat: "5+",
  },
  {
    id: "2",
    title: "500+ successful placements",
    description:
      "Hundreds of students now studying and thriving across the United Kingdom.",
    stat: "500+",
  },
  {
    id: "3",
    title: "Personalised approach",
    description:
      "No two students are the same. We tailor our guidance to your unique situation and goals.",
    stat: "1:1",
  },
  {
    id: "4",
    title: "Transparent pricing",
    description:
      "No hidden fees. You know exactly what you're paying for before we start.",
    stat: "₦0",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "1",
    question: "How much does the full admission service cost?",
    answer:
      "Our comprehensive university admission package starts at ₦50,000. This covers university selection, application submission, and CAS letter follow-up. Additional services like IELTS prep, visa guidance, and accommodation support are priced separately. We offer bundle discounts for students who need the full package.",
  },
  {
    id: "2",
    question: "How long does the admission process take?",
    answer:
      "Typically 4–8 weeks from application submission to receiving your CAS letter, depending on the university and intake period. We recommend starting at least 3–4 months before your intended start date to allow time for visa processing and pre-departure preparation.",
  },
  {
    id: "3",
    question: "Can you help with scholarships?",
    answer:
      "Yes! We actively research and recommend scholarship opportunities that match your profile. Many UK universities offer partial scholarships for international students, and we help you identify and apply for these. We also advise on external funding bodies like Chevening and Commonwealth scholarships.",
  },
  {
    id: "4",
    question: "What if my visa gets rejected?",
    answer:
      "We have a 98% visa success rate, so rejections are extremely rare with our guidance. In the unlikely event of a rejection, we provide free reapplication support — reviewing the refusal reasons, strengthening your application, and resubmitting at no extra cost.",
  },
  {
    id: "5",
    question: "Do I need IELTS to study in the UK?",
    answer:
      "Most UK universities require an IELTS score of 6.0–7.0 for postgraduate programmes. Some universities accept alternative tests or offer pre-sessional English courses. We offer IELTS preparation to help you achieve the score you need on your first attempt.",
  },
];

export const FOOTER_LINKS = {
  Services: [
    { label: "University Admission", href: "#services" },
    { label: "SOP Writing", href: "#services" },
    { label: "Visa Guidance", href: "#services" },
    { label: "IELTS Prep", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Process", href: "#process" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;

export const TICKER_ITEMS = [
  "University admission",
  "SOP & personal statement",
  "IELTS preparation",
  "Visa guidance",
  "Accommodation & flights",
  "Proof of funds",
  "Scholarship support",
];
