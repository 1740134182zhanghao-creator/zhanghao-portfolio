export type Locale = "zh" | "en";

export type CapabilityStat = {
  id: string;
  kind: "text" | "number" | "brand";
  value: string | number;
  suffix: string;
  label: string;
};

export type ExperienceItem = {
  no: string;
  title: string;
  role: string;
  period: string;
  body: readonly string[];
};

export type CompanyProject = {
  title: string;
  subtitle?: string;
  role: string;
};

export type CompanyExperienceItem = {
  no: string;
  company: string;
  companyEnglish?: string;
  role: string;
  department?: string;
  period: string;
  featured: boolean;
  responsibilities?: readonly string[];
  projectsTitle?: string;
  projectsLabel?: string;
  projects?: readonly CompanyProject[];
  summary?: string;
};

export type ProjectGroupMessages = {
  title: string;
  description: string;
  category: string;
};

export type Messages = {
  htmlLang: "zh-CN" | "en";
  site: {
    title: string;
    description: string;
  };
  navigation: {
    items: readonly { label: string; href: string }[];
    connect: string;
    languageButton: string;
    languageAria: string;
  };
  hero: {
    badge: string;
    title: readonly [string, string];
    description: readonly [string, string];
    cta: string;
    ctaHint: string;
    previous: string;
    next: string;
    viewImage: string;
    currentWork: string;
    carouselTitles: readonly [string, string, string, string, string, string, string];
  };
  heroStats: {
    name: string;
    role: string;
    positioning: string;
    location: string;
    avatarAlt: string;
    metrics: readonly { value: string; label: string }[];
    experienceTitle: string;
    experiencePeriod: string;
    experienceRole: string;
  };
  capabilityTitle: string;
  capabilityStats: readonly CapabilityStat[];
  about: {
    title: string;
    imageAlt: string;
    imageFallback: string;
    paragraphs: readonly string[];
    tags: readonly string[];
  };
  experience: {
    title: string;
    items: readonly CompanyExperienceItem[];
  };
  projects: {
    title: string;
    subtitle: string;
    performance: string;
    collectionLabel: string;
    playAction: string;
    closeVideo: string;
    viewAllVideos: string;
    showFewerVideos: string;
    groups: {
      aigaibao: ProjectGroupMessages;
      shipai: ProjectGroupMessages;
    };
  };
  workflow: {
    title: string;
    subtitle: string;
    steps: readonly string[];
  };
  skills: {
    title: string;
    subtitle: string;
    tools: readonly string[];
  };
  achievements: {
    title: string;
    items: readonly ExperienceItem[];
  };
  contact: {
    eyebrow: string;
    title: readonly [string, string];
    text: string;
    viewWork: string;
    downloadResume: string;
    contactMe: string;
    viewMoreProjects: string;
    resumeNotice: string;
    contactDialogTitle: string;
    contactDialogDescription: string;
    phoneLabel: string;
    emailLabel: string;
    phone: string;
    email: string;
    copy: string;
    copied: string;
    closeDialog: string;
  };
};
