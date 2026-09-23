// Placeholder content for the resume/portfolio site.
// Swap these values for real content when it becomes available —
// no other code should need to change.

export const profile = {
  name: "Jordan Avery",
  title: "Product-Minded Software Engineer",
  bio: "I build thoughtful, reliable software and enjoy turning ambiguous problems into shippable products. This is placeholder bio copy until real content is provided.",
  resumeUrl: "/resume.pdf",
};

export const workHistory = [
  {
    role: "Senior Software Engineer",
    company: "Placeholder Co.",
    period: "2022 — Present",
    description:
      "Led development of core product features and mentored engineers. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    role: "Software Engineer",
    company: "Sample Studio",
    period: "2019 — 2022",
    description:
      "Built and shipped customer-facing features across the stack. Sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    role: "Junior Developer",
    company: "Example Labs",
    period: "2017 — 2019",
    description:
      "Contributed to internal tools and learned the fundamentals of production software. Ut enim ad minim veniam.",
  },
];

export const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Product Thinking",
  "API Design",
  "Testing",
  "UI/UX Collaboration",
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Sample Project One",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A placeholder description for a sample project until real content is supplied.",
    image: "/placeholder-project-1.svg",
  },
  {
    slug: "project-two",
    title: "Sample Project Two",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Another placeholder project description.",
    image: "/placeholder-project-2.svg",
  },
  {
    slug: "project-three",
    title: "Sample Project Three",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. A third placeholder project description.",
    image: "/placeholder-project-3.svg",
  },
];
