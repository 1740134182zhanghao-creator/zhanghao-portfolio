import { heroImages } from "./generatedProjects";

export type HeroProject = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  metric: string;
  metricLabel: string;
  image: string;
};

export const heroProjects: HeroProject[] = [
  {
    id: "beauty",
    title: "美妆护理",
    subtitle: "Beauty Film",
    category: "AI Commercial Video",
    metric: "86+",
    metricLabel: "beauty creatives",
    image: heroImages[0],
  },
  {
    id: "home",
    title: "家居家电",
    subtitle: "Home Appliance",
    category: "AI Commercial Video",
    metric: "120+",
    metricLabel: "product stories",
    image: heroImages[1],
  },
  {
    id: "lifestyle",
    title: "生活方式",
    subtitle: "Lifestyle Story",
    category: "AI Commercial Video",
    metric: "64+",
    metricLabel: "brand stories",
    image: heroImages[2],
  },
  {
    id: "commercial",
    title: "商业视频",
    subtitle: "AI Commercial Video",
    category: "AI Commercial Video",
    metric: "200+",
    metricLabel: "High-performing videos",
    image: heroImages[3],
  },
  {
    id: "tech",
    title: "智能产品",
    subtitle: "Product Visual",
    category: "AI Commercial Video",
    metric: "98+",
    metricLabel: "product visuals",
    image: heroImages[4],
  },
  {
    id: "outdoor",
    title: "户外装备",
    subtitle: "Outdoor Gear",
    category: "AI Commercial Video",
    metric: "73+",
    metricLabel: "outdoor stories",
    image: heroImages[5],
  },
  {
    id: "tools",
    title: "电动工具",
    subtitle: "Power Tools",
    category: "AI Commercial Video",
    metric: "110+",
    metricLabel: "tool creatives",
    image: heroImages[6],
  },
];
