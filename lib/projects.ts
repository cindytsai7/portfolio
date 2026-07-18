export interface Project {
  id: string;
  title: string;
  tags: string[];
  image?: string;
  href: string;
  colSpan?: 1 | 2;
  imageContain?: boolean;
  imageWidth?: string;
  lockIcon?: boolean;
}

export const projects: Project[] = [
  {
    id: "edge-admin-hub",
    title: "Edge browser's admin hub",
    tags: ["Microsoft", "Enterprise", "Systems design"],
    image: "/projects/edge-admin-hub.png",
    href: "/projects/edge-admin-hub",
    colSpan: 1,
  },
  {
    id: "compliance-review",
    title: "Risk systems",
    tags: ["Platform design", "Internal tools", "NDA"],
    href: "/projects/compliance-review",
    colSpan: 1,
    lockIcon: true,
  },
  {
    id: "franklin-payroll",
    title: "Web3 payroll",
    tags: ["Start up", "Crypto", "Zero to one"],
    image: "/projects/franklin-payroll/card.png",
    href: "/projects/franklin-payroll",
    imageContain: true,
    imageWidth: "100%",
    colSpan: 1,
  },
  {
    id: "edge-sidebar-onboarding",
    title: "Edge browser's sidebar",
    tags: ["Microsoft", "Consumer", "Growth design"],
    image: "/projects/edge-sidebar-onboarding/card.png",
    href: "/projects/edge-sidebar-onboarding",
    colSpan: 1,
    imageContain: true,
  },
];
