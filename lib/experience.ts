export interface Experience {
  years: string;
  company: string;
  isActive?: boolean;
}

export const experience: Experience[] = [
  { years: "2025–Now", company: "Meta", isActive: true },
  { years: "2023–2025", company: "Microsoft" },
  { years: "2022–2023", company: "Franklin Payroll" },
  { years: "2018–2022", company: "Herman Miller" },
];
