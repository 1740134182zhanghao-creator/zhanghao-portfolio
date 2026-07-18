export const site = {
  title: "张皓｜AI 创意视频设计师",
  description: "张皓的中文个人网页简历，聚焦 AI 创意视频、海外电商广告与商业视觉叙事。",
  nav: [
    { label: "首页", href: "#hero" },
    { label: "关于我", href: "#about" },
    { label: "数据", href: "#data" },
    { label: "经历", href: "#experience" },
    { label: "案例", href: "#projects" },
    { label: "流程", href: "#workflow" },
    { label: "联系", href: "#contact" },
  ],
};

export const hero = {
  name: "ZHANG HAO",
  role: "AI 创意视频设计师",
  englishRole: "AI Creative Video Designer",
  tagline: "TEMU 海外项目经验",
  description: "1300+ 商业视频作品",
};

export const heroVideos = [
  { title: "Beauty UGC", tone: "from-rose-100 via-white to-sky-100", x: "-translate-x-[118%]", z: "-z-10", rotate: "-rotate-12", scale: "scale-[.74]", delay: 0.08 },
  { title: "Kitchen Ad", tone: "from-sky-100 via-white to-violet-100", x: "-translate-x-[62%]", z: "z-0", rotate: "-rotate-6", scale: "scale-[.88]", delay: 0.16 },
  { title: "Showreel", tone: "from-white via-slate-50 to-cyan-100", x: "translate-x-0", z: "z-20", rotate: "rotate-0", scale: "scale-100", delay: 0.24 },
  { title: "Product Film", tone: "from-violet-100 via-white to-slate-100", x: "translate-x-[62%]", z: "z-0", rotate: "rotate-6", scale: "scale-[.88]", delay: 0.32 },
  { title: "Outdoor Tool", tone: "from-cyan-100 via-white to-amber-100", x: "translate-x-[118%]", z: "-z-10", rotate: "rotate-12", scale: "scale-[.74]", delay: 0.4 },
];

export const stats = [
  { value: 1300, suffix: "+", label: "商业视频" },
  { value: 100, suffix: "+", label: "产品品类" },
  { value: 100, suffix: "+", label: "高表现视频" },
  { value: 3, suffix: "+", label: "商业视频经验" },
  { value: "TEMU", suffix: "", label: "海外项目经验" },
] as const;

export const about = {
  paragraphs: [
    "我是一名 AI 创意视频设计师，拥有 TEMU 海外商业视频制作经验。",
    "专注于 AI 商业广告、产品短视频、全球电商视觉表达与创意内容设计。",
    "熟悉从创意策划、AI 图片生成、AI 视频生成、数字人口播、剪辑包装到商业交付的完整工作流程。",
  ],
  tags: ["AI 商业广告", "产品短视频", "全球电商视觉", "创意内容设计"],
};

export const experiences = [
  { no: "01", title: "TEMU", role: "AI 创意视频设计师", period: "2023 — 至今", body: ["AI 商业视频制作", "创意脚本策划", "AI 图片生成", "AI 视频生成", "数字人口播", "视频剪辑包装", "热点趋势研究", "海外广告创意"] },
  { no: "02", title: "实习经历", role: "预留位置", period: "可展示后续补充内容", body: ["商业设计辅助", "内容创意执行", "跨团队协作"] },
  { no: "03", title: "校园经历", role: "预留位置", period: "可展示后续补充内容", body: ["视觉创作训练", "影像叙事探索", "个人项目沉淀"] },
] as const;

export const projects = [
  { no: "CASE 01", title: "AI 商品广告", product: "厨房用品", category: "Product Commerce", role: ["创意策划", "AI 图片", "AI 视频", "剪辑包装"], result: "高表现广告素材", tone: "from-sky-100 via-white to-slate-200", desc: "围绕真实使用痛点建立前后对比，让产品价值在三秒内被看见。" },
  { no: "CASE 02", title: "UGC 风格广告", product: "家居好物", category: "UGC Performance", role: ["脚本口播", "数字人镜头", "节奏剪辑", "字幕包装"], result: "提升首屏停留", tone: "from-rose-100 via-white to-orange-100", desc: "模拟海外用户自然推荐语境，平衡真实感、信息密度与平台投放节奏。" },
  { no: "CASE 03", title: "纯 AI 创意短片", product: "户外工具", category: "Full AI Film", role: ["概念设定", "提示词设计", "AI 视频生成", "声音合成"], result: "验证端到端 AI 工作流", tone: "from-emerald-100 via-white to-cyan-100", desc: "以生成式镜头组合完成从产品卖点到完整商业叙事的视觉实验。" },
  { no: "CASE 04", title: "品牌产品广告", product: "消费电子", category: "Brand Product", role: ["视觉策略", "产品氛围", "动效包装", "成片交付"], result: "强化品牌质感", tone: "from-violet-100 via-white to-slate-100", desc: "用克制高级的产品镜头语言表达科技感，保留明确的商业转化导向。" },
] as const;

export const workflow = ["创意洞察", "脚本策划", "AI 图片生成", "AI 视频生成", "数字人口播", "剪辑包装", "数据复盘"];

export const tools = ["ChatGPT", "Midjourney", "Seedance", "Kling", "即梦", "Nano Banana", "Photoshop", "Premiere Pro", "After Effects", "CapCut"];

export const achievements = ["1300+ 商业视频制作", "100+ 产品品类", "多条高表现商业视频", "参与海外电商广告创意", "获得团队优秀绩效"];

export const contact = {
  title: "让我们一起创造 AI 驱动的商业视频。",
  text: "开放 AI 创意视频、海外商业广告、产品短视频与品牌内容合作。",
  email: "your-email@example.com",
};
