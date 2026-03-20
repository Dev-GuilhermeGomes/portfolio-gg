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
  logoLabel: "GG",
  name: "Guilherme Gomes",
  role: "Software Development Student",
  summary:
    "I combine software development with project management to deliver digital products that are useful, scalable, and aligned with business goals.",
  details:
    "I enjoy working from planning to delivery: organizing scope, collaborating with teams and building interfaces. If you want to know more about my projects or experience, feel free to reach out!",
};

export const coreSkills: string[] = [
  "JavaScript",
  "TypeScript",
  "Node.js",
  "HTML & CSS",
  "Python",
  "React",
  "Scrum",
  "Agile",
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
  { name: "React & TypeScript", level: 75 },
  { name: "HTML & CSS", level: 80 },
  { name: "JavaScript and Node.js", level: 85 },
  { name: "Python", level: 70 },
  { name: "Node.js", level: 80 },
  { name: "SQL & Databases", level: 82 },
  { name: "Git & Version Control", level: 80 },
  { name: "Scrum & Agile", level: 85 },
];

export const experiences = [
  {
    role: "Project Management Intern",
    company: "ISTEC-PORTO",
    period: "2026 - Present",
    description:
      "Supporting sprint planning, stakeholder follow-ups, and delivery tracking for web and mobile products with a focus on agile methodologies.",
  },
  {
    role: "Internship in Loja Enter ",
    company: "Loja Enter",
    period: "2024 - 2025",
    description:
      "Responsible for supporting the configuration and maintenance of the computer systems, and Tablets and Smartphones.",
  },
  {
    role: "Freelance Web Developer",
    company: "Personal Projects",
    period: "2026 - Present",
    description:
      "Created websites and small management systems for local clients, from requirements to deployment.",
  },
];

export const education = [
  {
    degree: "Software Development",
    institution: "Instituto Superior de Tecnologias Avançadas Do Porto (ISTEC)",
    period: "2025 - 2027",
    description: "Focus on Software Development, Systems Analysis, and Project Management.",
  },
];

export const languages = [
  { name: "Portuguese", level: "Native" },
  { name: "English", level: "Medium (B1)" },
  { name: "French", level: "Basic (A1)" },
  { name: "German", level: "Basic (A1)" },
];

export const hobbies: string[] = [
  "Open Source Contribution with my friends",
  "youTube Content Creation about Gaming",
  "Play video games and Board Games",
  "Reading Manga and Light Novels, and Watching Anime",
];

export const portfolioProjects: ProjectItem[] = [
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
    repoUrl: "https://github.com/Dev-GuilhermeGomes/portfolio-gg",
  },
];

export const managementProjects: ManagementItem[] = [
  {
    title: "Mobile App Development",
    methodology: "Scrum",
    teamSize: 4,
    deadline: "Feb 2026",
    progress: 50,
    status: "Active",
  },
  {
    title: "Website Redesign",
    methodology: "Kanban",
    teamSize: 1,
    deadline: "Apr 2026",
    progress: 40,
    status: "Active",
  },
  {
    title: "API Integration",
    methodology: "Scrum",
    teamSize: 4,
    deadline: "Mar 2026",
    progress: 100,
    status: "Completed",
  },
  {
    title: "Cloud Migration",
    methodology: "Waterfall",
    teamSize: 1,
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
        owner: "Guilherme ",
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
