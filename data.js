const TOOLS_DATA = [
  // ====== AI 绘画 & 设计 ======
  {
    name: "Midjourney",
    desc: "全球最强AI绘画，通过Discord生成电影级画作",
    url: "https://www.midjourney.com",
    icon: "🌌",
    tags: ["en", "hot"],
    cat: "paint"
  },
  {
    name: "Stable Diffusion",
    desc: "开源AI绘画模型，本地部署，可控性极强",
    url: "https://stability.ai",
    icon: "🏞️",
    tags: ["en", "free"],
    cat: "paint"
  },
  {
    name: "DALL·E 3",
    desc: "OpenAI出品，对话式AI绘画，理解力顶尖",
    url: "https://chat.openai.com",
    icon: "🎨",
    tags: ["en"],
    cat: "paint"
  },
  {
    name: "Leonardo AI",
    desc: "高质量AI艺术生成，游戏资产制作利器",
    url: "https://leonardo.ai",
    icon: "🗿",
    tags: ["en", "free"],
    cat: "paint"
  },
  {
    name: "即梦AI",
    desc: "字节跳动出品，AI绘画与视频创作平台",
    url: "https://www.jimengai.com",
    icon: "✨",
    tags: ["cn", "hot"],
    cat: "paint"
  },
  {
    name: "Liblib哩布哩布",
    desc: "国内最大AI图像创作社区，海量模型",
    url: "https://www.liblib.ai",
    icon: "🖼️",
    tags: ["cn", "free"],
    cat: "paint"
  },
  {
    name: "NightCafe",
    desc: "多种AI绘画算法，支持风格迁移",
    url: "https://nightcafe.studio",
    icon: "🌙",
    tags: ["en"],
    cat: "paint"
  },
  {
    name: "DreamStudio",
    desc: "Stability AI官方平台，快速生成高质量图像",
    url: "https://dreamstudio.ai",
    icon: "💫",
    tags: ["en"],
    cat: "paint"
  },
  {
    name: "Canva AI",
    desc: "在线设计平台，AI一键抠图、魔法编辑",
    url: "https://www.canva.com/ai-image-generator/",
    icon: "🎨",
    tags: ["en", "free"],
    cat: "paint"
  },
  {
    name: "墨刀 AI",
    desc: "国产原型设计神器，AI辅助生成UI界面",
    url: "https://modao.cgref.cn/s/rpe3rode05",
    icon: "🖌️",
    tags: ["cn"],
    cat: "paint"
  },

  // ====== AI 对话 & 大模型 ======
  {
    name: "ChatGPT",
    desc: "OpenAI出品，全球用户最多的AI对话助手",
    url: "https://chat.openai.com/",
    icon: "🧩",
    tags: ["en", "hot"],
    cat: "chat"
  },
  {
    name: "Claude",
    desc: "Anthropic出品，长上下文理解能力最强",
    url: "https://claude.ai/",
    icon: "💬",
    tags: ["en", "hot"],
    cat: "chat"
  },
  {
    name: "Gemini",
    desc: "Google最新大模型，多模态理解能力强",
    url: "https://gemini.google.com/",
    icon: "✨",
    tags: ["en"],
    cat: "chat"
  },
  {
    name: "DeepSeek",
    desc: "深度求索，开源大模型，代码能力突出",
    url: "https://chat.deepseek.com",
    icon: "🔭",
    tags: ["cn", "hot", "free"],
    cat: "chat"
  },
  {
    name: "Kimi",
    desc: "月之暗面出品，超长上下文窗口",
    url: "https://kimi.moonshot.cn",
    icon: "🌙",
    tags: ["cn", "hot"],
    cat: "chat"
  },
  {
    name: "豆包",
    desc: "字节跳动AI助手，全场景智能对话",
    url: "https://www.doubao.com",
    icon: "🫘",
    tags: ["cn", "free"],
    cat: "chat"
  },
  {
    name: "通义千问",
    desc: "阿里出品，多模态大模型，综合能力强劲",
    url: "https://tongyi.aliyun.com",
    icon: "🤖",
    tags: ["cn"],
    cat: "chat"
  },
  {
    name: "文心一言",
    desc: "百度出品，中文理解能力优秀",
    url: "https://yiyan.baidu.com",
    icon: "📝",
    tags: ["cn"],
    cat: "chat"
  },
  {
    name: "Perplexity",
    desc: "AI驱动搜索引擎，提供精准答案与引用",
    url: "https://www.perplexity.ai/",
    icon: "🔍",
    tags: ["en"],
    cat: "chat"
  },
  {
    name: "Poe",
    desc: "Quora出品，集成多个AI模型的对话平台",
    url: "https://poe.com/",
    icon: "💬",
    tags: ["en"],
    cat: "chat"
  },

  // ====== AI 智能体 & Agent ======
  {
    name: "OpenCLAW",
    desc: "开源本地AI智能体，通过聊天程序远程执行任务，支持文件管理、写代码、发社交内容",
    url: "https://openclaw.ai",
    icon: "🦞",
    tags: ["en", "hot", "new"],
    cat: "agent"
  },
  {
    name: "01 Agent",
    desc: "零代码搭建专属AI智能体，打造个人知识库",
    url: "https://01agent.cgref.cn/s/5ln1l9gkrw",
    icon: "🧠",
    tags: ["cn"],
    cat: "agent"
  },
  {
    name: "VibeKnow",
    desc: "团队知识秒变智能问答，企业内部效率引擎",
    url: "https://vibeknow.cgref.cn/s/zdkj0m8e1r",
    icon: "📚",
    tags: ["cn"],
    cat: "agent"
  },
  {
    name: "Coze",
    desc: "字节跳动AI Bot平台，零代码创建工作流",
    url: "https://www.coze.com",
    icon: "⚙️",
    tags: ["cn", "en", "free"],
    cat: "agent"
  },
  {
    name: "Dify",
    desc: "开源LLM应用开发平台，可视化工作流编排",
    url: "https://dify.ai",
    icon: "🔧",
    tags: ["en", "free"],
    cat: "agent"
  },
  {
    name: "AutoGen",
    desc: "Microsoft开源多智能体框架，AI协作编程",
    url: "https://microsoft.github.io/autogen/",
    icon: "🤖",
    tags: ["en", "free"],
    cat: "agent"
  },

  // ====== AI 办公 & 提效 ======
  {
    name: "Notion AI",
    desc: "最强All-in-one工作台，AI辅助写作与整理",
    url: "https://www.notion.so/product/ai",
    icon: "📝",
    tags: ["en"],
    cat: "office"
  },
  {
    name: "Grammarly",
    desc: "AI语法检查与写作建议，提升英文写作质量",
    url: "https://www.grammarly.com/",
    icon: "✅",
    tags: ["en", "free"],
    cat: "office"
  },
  {
    name: "Otter.ai",
    desc: "实时语音转文字，会议记录整理利器",
    url: "https://otter.ai/",
    icon: "🎙️",
    tags: ["en"],
    cat: "office"
  },
  {
    name: "Fireflies.ai",
    desc: "自动记录会议内容，AI生成会议纪要",
    url: "https://www.fireflies.ai/",
    icon: "🔥",
    tags: ["en"],
    cat: "office"
  },
  {
    name: "WonderCV",
    desc: "AI一键优化简历排版与内容",
    url: "https://wondercv.cgref.cn/s/1oe70mmn23",
    icon: "📄",
    tags: ["cn"],
    cat: "office"
  },
  {
    name: "iSlide PPT",
    desc: "海量PPT模板，AI一键生成大纲与排版",
    url: "https://islide.cgref.cn/s/1zn5r9peqm",
    icon: "📊",
    tags: ["cn"],
    cat: "office"
  },
  {
    name: "Gamma",
    desc: "AI一键生成演示文稿，设计感极强",
    url: "https://gamma.app",
    icon: "📐",
    tags: ["en", "hot"],
    cat: "office"
  },
  {
    name: "Beautiful.ai",
    desc: "智能PPT设计工具，自动调整排版布局",
    url: "https://www.beautiful.ai/",
    icon: "✨",
    tags: ["en"],
    cat: "office"
  },

  // ====== AI 视频 & 创作 ======
  {
    name: "Runway Gen-3",
    desc: "好莱坞级AI视频生成，图生视频效果惊艳",
    url: "https://runwayml.com/",
    icon: "🎥",
    tags: ["en", "hot"],
    cat: "video"
  },
  {
    name: "Sora",
    desc: "OpenAI视频生成模型，电影级画质",
    url: "https://openai.com/sora",
    icon: "🎬",
    tags: ["en", "new"],
    cat: "video"
  },
  {
    name: "可灵AI",
    desc: "快手出品，AI视频生成与创意生产力平台",
    url: "https://klingai.kuaishou.com",
    icon: "🎞️",
    tags: ["cn", "hot"],
    cat: "video"
  },
  {
    name: "剪映专业版",
    desc: "内置AI功能，自动字幕、智能抠像",
    url: "https://www.capcut.cn/",
    icon: "✂️",
    tags: ["cn", "free"],
    cat: "video"
  },
  {
    name: "Synthesia",
    desc: "AI虚拟人视频生成，支持多语言口型同步",
    url: "https://www.synthesia.io/",
    icon: "👤",
    tags: ["en"],
    cat: "video"
  },
  {
    name: "讯飞智作",
    desc: "文字转语音、虚拟人视频一键制作",
    url: "https://xfzhizuo.cgref.cn/s/jgemm3gemy",
    icon: "🎙️",
    tags: ["cn"],
    cat: "video"
  },
  {
    name: "HeyGen",
    desc: "AI数字人视频，照片说话效果逼真",
    url: "https://www.heygen.com/",
    icon: "🗣️",
    tags: ["en"],
    cat: "video"
  },
  {
    name: "Pika Labs",
    desc: "AI动画与视频生成，风格多样",
    url: "https://pika.art/",
    icon: "⚡",
    tags: ["en"],
    cat: "video"
  },

  // ====== AI 代码 & 开发 ======
  {
    name: "GitHub Copilot",
    desc: "AI编程副驾驶，自动补全代码写注释",
    url: "https://github.com/features/copilot",
    icon: "👨‍💻",
    tags: ["en", "hot"],
    cat: "code"
  },
  {
    name: "Cursor",
    desc: "内置AI的代码编辑器，对话式修改代码",
    url: "https://cursor.com/",
    icon: "⚡",
    tags: ["en", "hot"],
    cat: "code"
  },
  {
    name: "v0 by Vercel",
    desc: "自然语言描述，AI自动生成React组件代码",
    url: "https://v0.dev/",
    icon: "🔧",
    tags: ["en", "free"],
    cat: "code"
  },
  {
    name: "Codeium",
    desc: "免费AI代码补全，支持70+语言",
    url: "https://codeium.com/",
    icon: "💻",
    tags: ["en", "free"],
    cat: "code"
  },
  {
    name: "通义灵码",
    desc: "阿里出品，AI编码助手，IDE插件",
    url: "https://tongyi.aliyun.com/lingma",
    icon: "🧑‍💻",
    tags: ["cn", "free"],
    cat: "code"
  },
  {
    name: "Trae",
    desc: "字节跳动AI编程工具，智能代码生成",
    url: "https://www.trae.ai/",
    icon: "🚀",
    tags: ["cn", "new"],
    cat: "code"
  },

  // ====== AI 音乐 & 音频 ======
  {
    name: "Suno AI",
    desc: "AI音乐生成，输入文字即可创作完整歌曲",
    url: "https://suno.com/",
    icon: "🎵",
    tags: ["en", "hot"],
    cat: "audio"
  },
  {
    name: "Udio",
    desc: "高质量AI音乐创作，支持多种曲风",
    url: "https://www.udio.com/",
    icon: "🎶",
    tags: ["en"],
    cat: "audio"
  },
  {
    name: "ElevenLabs",
    desc: "最逼真的AI语音合成，支持多语言克隆",
    url: "https://elevenlabs.io/",
    icon: "🗣️",
    tags: ["en", "hot"],
    cat: "audio"
  },
  {
    name: "网易天音",
    desc: "网易出品AI音乐创作平台",
    url: "https://tianyin.163.com/",
    icon: "🎼",
    tags: ["cn"],
    cat: "audio"
  },

  // ====== AI 搜索 & 知识 ======
  {
    name: "Character.AI",
    desc: "创建AI角色对话，支持自定义人物设定",
    url: "https://www.character.ai/",
    icon: "🎭",
    tags: ["en", "free"],
    cat: "search"
  },
  {
    name: "Arc Search",
    desc: "AI驱动浏览器搜索，自动总结网页内容",
    url: "https://arc.net/search",
    icon: "🌐",
    tags: ["en"],
    cat: "search"
  },
  {
    name: "You.com",
    desc: "AI搜索引擎，对话式搜索体验",
    url: "https://you.com/",
    icon: "🔎",
    tags: ["en", "free"],
    cat: "search"
  },
  {
    name: "秘塔AI搜索",
    desc: "国内AI搜索，学术搜索功能强大",
    url: "https://metaso.cn/",
    icon: "🔎",
    tags: ["cn", "free"],
    cat: "search"
  },

  // ====== AI 翻译 & 语言 ======
  {
    name: "DeepL",
    desc: "全球最精准的AI翻译工具",
    url: "https://www.deepl.com/",
    icon: "🌍",
    tags: ["en", "hot"],
    cat: "translate"
  },
  {
    name: "沉浸式翻译",
    desc: "浏览器插件，双语对照网页翻译",
    url: "https://immersivetranslate.com/",
    icon: "📖",
    tags: ["cn", "free"],
    cat: "translate"
  },
];

// 分类配置
const CATEGORIES = {
  paint:   { emoji: "🎨", title: "AI 绘画 & 设计" },
  chat:    { emoji: "💬", title: "AI 对话 & 大模型" },
  agent:   { emoji: "🤖", title: "AI 智能体 & Agent" },
  office:  { emoji: "💼", title: "AI 办公 & 提效" },
  video:   { emoji: "🎬", title: "AI 视频 & 创作" },
  code:    { emoji: "💻", title: "AI 代码 & 开发" },
  audio:   { emoji: "🎵", title: "AI 音乐 & 音频" },
  search:  { emoji: "🔍", title: "AI 搜索 & 知识" },
  translate: { emoji: "🌍", title: "AI 翻译 & 语言" },
};
