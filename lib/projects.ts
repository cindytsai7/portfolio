export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  filledTags?: string[];
  image: string;
  href: string;
  variant?: "large" | "small";
}

export const projects: Project[] = [
  {
    id: "edge-admin-hub",
    title: "Building a scalable framework for Edge Browser's admin hub",
    description: "Redesigned the Microsoft Edge admin center to support enterprise-scale policy management.",
    tags: ["MICROSOFT", "ENTERPRISE", "SYSTEMS"],
    image: "/projects/edge-admin-hub.png",
    href: "/projects/edge-admin-hub",
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
  },
];
