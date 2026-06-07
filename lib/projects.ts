export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  filledTags?: string[];
  image: string;
  href: string;
  variant?: "large" | "small";
  colSpan?: 1 | 2;
  imageContain?: boolean;
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
    title: "Compliance review for fast moving teams",
    description: "Designed a compliance review system for Meta's AI platform teams.",
    tags: ["META", "PLATFORM", "TOOLING", "NDA"],
    filledTags: ["NDA"],
    image: "/projects/compliance-review.png",
    href: "/projects/compliance-review",
    variant: "small",
    colSpan: 1,
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
