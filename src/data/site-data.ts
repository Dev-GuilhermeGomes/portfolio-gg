export type SkillItem = {
  name: string;
  level?: number;
};

export type ProjectItem = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  highlights: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export type ManagementItem = {
  title: string;
  methodology: "Scrum" | "Kanban" | "Waterfall";
  teamSize: number;
  deadline: string;
  progress: number;
  status: "Active" | "Completed";
};

export type ContactInfo = {
  email: string;
  github: {
    username: string;
    url: string;
  };
  linkedin: {
    display: string;
    url: string;
  };
};

export type AboutProfile = {
  logoLabel: string;
  name: string;
  role: string;
  summary: string;
  details: string;
};

export type KanbanTask = {
  title: string;
  project: string;
  owner: string;
  priority: "High" | "Medium" | "Low";
};

export type KanbanColumn = {
  id: "backlog" | "inProgress" | "review" | "done";
  title: string;
  tasks: KanbanTask[];
};

export type TimelineMilestone = {
  month: string;
  title: string;
  description: string;
  status: "Done" | "In Progress" | "Planned";
};

export const contactInfo: ContactInfo = {
  email: "guilherme.fggomes07@gmail.com",
  github: {
    username: "Dev-GuilhermeGomes",
    url: "https://github.com/Dev-GuilhermeGomes",
  },
  linkedin: {
    display: "linkedin.com/in/guilherme-gomes-devviper",
    url: "https://www.linkedin.com/in/guilherme-gomes-devviper",
  },
};

export const cvRequestMailto =
  "mailto:guilherme.fggomes07@gmail.com?subject=CV%20Request%20-%20Guilherme%20Gomes";

export const aboutProfile: AboutProfile = {
  logoLabel: "DGG",
  name: "Guilherme Gomes",
  role: "Project Management & Software Development Student",
  summary:
    "I combine software development with project management to deliver digital products that are useful, scalable, and aligned with business goals.",
  details:
    "I enjoy working from planning to delivery: organizing scope, collaborating with teams, and building interfaces and systems with clean and maintainable code.",
};

export const coreSkills: string[] = [
  "React",
  "TypeScript",
  "Python",
  "Scrum",
  "Agile",
  "Jira",
];

export const softSkills: string[] = [
  "Communication",
  "Team Leadership",
  "Problem Solving",
  "Adaptability",
  "Time Management",
  "Critical Thinking",
];

export const hardSkills: SkillItem[] = [
  { name: "React & TypeScript", level: 88 },
  { name: "Python", level: 82 },
  { name: "Node.js", level: 78 },
  { name: "SQL & Databases", level: 72 },
  { name: "Git & Version Control", level: 87 },
  { name: "Scrum & Agile", level: 84 },
];

export const experiences = [
  {
    role: "Project Management Intern",
    company: "Digital Product Studio",
    period: "2025 - Present",
    description:
      "Supporting sprint planning, stakeholder follow-ups, and delivery tracking for web and mobile products.",
  },
  {
    role: "Front-end Developer Intern",
    company: "Tech Innovations Lab",
    period: "2024 - 2025",
    description:
      "Built responsive interfaces with React and TypeScript, improving usability and performance in internal dashboards.",
  },
  {
    role: "Freelance Web Developer",
    company: "Personal Projects",
    period: "2023 - 2024",
    description:
      "Created websites and small management systems for local clients, from requirements to deployment.",
  },
];

export const education = [
  {
    degree: "BSc in Software Engineering",
    institution: "Instituto Politecnico",
    period: "2022 - 2026",
    description: "Focus on Software Development, Systems Analysis, and Project Management.",
  },
  {
    degree: "Professional Course in Project Management",
    institution: "Online Certification Program",
    period: "2025",
    description: "Practical training in Scrum, planning, risk control, and team communication.",
  },
];

export const languages = [
  { name: "Portuguese", level: "Native" },
  { name: "English", level: "Advanced (C1)" },
  { name: "French", level: "Basic (A2)" },
  { name: "German", level: "Basic (A1)" },
];

export const hobbies: string[] = [
  "Open Source Contribution",
  "Tech Blogging",
  "Photography",
  "Hiking",
  "Reading Tech Books",
];

export const portfolioProjects: ProjectItem[] = [
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with payment integration and admin dashboard.",
    longDescription:
      "This project delivers a complete e-commerce experience with product listing, cart, secure checkout, and an admin area for order and catalog management.",
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
    highlights: [
      "Integrated online payments with Stripe",
      "Built role-based admin dashboard",
      "Implemented product and order analytics",
    ],
    repoUrl: "https://github.com/Dev-GuilhermeGomes",
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates and team features.",
    longDescription:
      "A collaborative platform to plan and track tasks in teams, with real-time updates, assignment workflow, and project visibility.",
    stack: ["React", "Firebase", "Tailwind CSS"],
    highlights: [
      "Real-time board synchronization",
      "Task assignment and due date tracking",
      "Team activity feed for transparency",
    ],
    repoUrl: "https://github.com/Dev-GuilhermeGomes",
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Modern portfolio website with CMS integration for easy content management.",
    longDescription:
      "Personal portfolio focused on performance and maintainability, designed to present projects, skills, and management experience in one place.",
    stack: ["Next.js", "TypeScript", "Sanity CMS"],
    highlights: [
      "Reusable component-based architecture",
      "Fast page loads with static rendering",
      "Easy content updates via structured data",
    ],
    repoUrl: "https://github.com/Dev-GuilhermeGomes",
  },
];

export const managementProjects: ManagementItem[] = [
  {
    title: "Mobile App Development",
    methodology: "Scrum",
    teamSize: 8,
    deadline: "Apr 2026",
    progress: 65,
    status: "Active",
  },
  {
    title: "Website Redesign",
    methodology: "Kanban",
    teamSize: 5,
    deadline: "May 2026",
    progress: 40,
    status: "Active",
  },
  {
    title: "API Integration",
    methodology: "Scrum",
    teamSize: 6,
    deadline: "Mar 2026",
    progress: 100,
    status: "Completed",
  },
  {
    title: "Cloud Migration",
    methodology: "Waterfall",
    teamSize: 7,
    deadline: "Jun 2026",
    progress: 30,
    status: "Active",
  },
];

export const managementKanban: KanbanColumn[] = [
  {
    id: "backlog",
    title: "Backlog",
    tasks: [
      {
        title: "Define API monitoring strategy",
        project: "API Integration",
        owner: "Guilherme",
        priority: "Medium",
      },
      {
        title: "Finalize migration checklist",
        project: "Cloud Migration",
        owner: "Infra Team",
        priority: "High",
      },
    ],
  },
  {
    id: "inProgress",
    title: "In Progress",
    tasks: [
      {
        title: "Sprint 7 planning and execution",
        project: "Mobile App Development",
        owner: "Dev Team",
        priority: "High",
      },
      {
        title: "UX review with stakeholders",
        project: "Website Redesign",
        owner: "Design Team",
        priority: "Medium",
      },
    ],
  },
  {
    id: "review",
    title: "Review",
    tasks: [
      {
        title: "Validate acceptance criteria",
        project: "Mobile App Development",
        owner: "QA Team",
        priority: "Medium",
      },
    ],
  },
  {
    id: "done",
    title: "Done",
    tasks: [
      {
        title: "Authentication module deployed",
        project: "API Integration",
        owner: "Backend Team",
        priority: "Low",
      },
    ],
  },
];

export const managementTimeline: TimelineMilestone[] = [
  {
    month: "Jan 2026",
    title: "Kickoff and scope alignment",
    description: "Defined objectives, constraints, and delivery KPIs with stakeholders.",
    status: "Done",
  },
  {
    month: "Feb 2026",
    title: "Execution phase",
    description: "Started implementation sprints with weekly delivery checkpoints.",
    status: "Done",
  },
  {
    month: "Mar 2026",
    title: "Quality and integration",
    description: "Focused on testing, integrations, and cross-team validation.",
    status: "In Progress",
  },
  {
    month: "Apr 2026",
    title: "Release preparation",
    description: "Prepare deployment plan, rollout communication, and post-launch support.",
    status: "Planned",
  },
];
