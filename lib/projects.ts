export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  filledTags?: string[];
  image?: string;
  href: string;
  variant?: "large" | "small" | "editorial";
  colSpan?: 1 | 2;
  imageContain?: boolean;
  role?: string;
  timeline?: string;
  passwordProtected?: boolean;
}

export const projects: Project[] = [
  {
    id: "edge-admin-hub",
    title: "Building a scalable framework for Edge Browser's admin hub",
    description: "Redesigned the Microsoft Edge admin center to support enterprise-scale policy management.",
    tags: ["MICROSOFT", "ENTERPRISE", "SYSTEMS"],
    image: "/projects/edge-admin-hub.png",
    href: "/projects/edge-admin-hub",
    colSpan: 2,
  },
  {
    id: "compliance-review",
    title: "Risk review systems",
    description: "Designing the core compliance frameworks that scale to mitigate global operational risk.",
    tags: ["META", "PLATFORM", "TOOLING", "NDA"],
    filledTags: ["NDA"],
    href: "/projects/compliance-review",
    variant: "editorial",
    colSpan: 1,
    role: "Lead Designer",
    timeline: "2025 – Now",
    passwordProtected: true,
  },
  {
    id: "franklin-payroll",
    title: "0 to 1, a Web3 payroll suite",
    description: "Designed a Web3 payroll suite for crypto-native startups.",
    tags: ["START UP", "WEB3", "PAYROLL"],
    image: "/projects/franklin-payroll/card.png",
    href: "/projects/franklin-payroll",
    variant: "small",
    colSpan: 1,
  },
  {
    id: "edge-sidebar-onboarding",
    title: "Driving user retention in Edge sidebar",
    description: "Designed a contextual onboarding framework for Microsoft Edge's sidebar.",
    tags: ["MICROSOFT", "GROWTH", "CONSUMER"],
    image: "/projects/edge-sidebar-onboarding/card.png",
    href: "/projects/edge-sidebar-onboarding",
    colSpan: 2,
    imageContain: true,
  },
];
