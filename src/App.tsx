type Category =
  | "ステッカーモックアップ"
  | "招待状モックアップ"
  | "ポストカードモックアップ"
  | "グリーティングカードモックアップ"
  | "Etsyサムネイル"
  | "アートプリントモックアップ"
  | "アクリルキーホルダーモックアップ";

type LibraryPrompt = {
  id: string;
  title: string;
  category: Category;
  description: string;
  prompt: string;
  tags: string[];
  imageUrl: string;
};

type MockupCategory = {
  id: string;
  title: string;
  description: string;
  coverImage: string;
};

type LibraryBoardPrompt = LibraryPrompt & {
  categoryId: string;
  japaneseTranslation?: string;
  memo?: string;
  isTextStock?: boolean;
};

type MyPrompt = LibraryPrompt & {
  note: string;
  favorite: boolean;
  japaneseTranslation?: string;
  memo?: string;
  isTextStock?: boolean;
};

type MjSetting = {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  images?: any[];
  prompt?: string;
  promptEn?: string;
  promptJa?: string;
  activeLanguage?: "en" | "ja";
  memo?: string;
  basePrompt?: string;
  originalPrompt?: string;
  translatedPrompt?: string;
  englishPrompt?: string;
  japanesePrompt?: string;
  extractedParams?: string[];
  fullPrompt?: string;
  createdAt?: string;
  ar: string;
  stylize: string;
  chaos: string;
  profile: string;
  seed: string;
  raw: boolean;
  extra: string;
  note: string;
};

type Project = {
  id: string;
  name: string;
  description: string;
  promptIds: string[];
  mjIds: string[];
  note: string;
  tags: string[];
  dueDate?: string;
  remindOnHome?: boolean;
  updatedAt?: string;
};

type AtelierImage = {
  id: string;
  src: string;
  thumbnail?: string;
  originalName?: string;
  mimeType?: string;
  width?: number;
  height?: number;
  title: string;
  memo: string;
  createdAt: string;
  source: string;
  favorite: boolean;
};

type JournalItem = {
  id: string;
  imageId: string;
  src: string;
  thumbnail?: string;
  x: number;
  y: number;
  width: number;
  rotate: number;
  sticker?: boolean;
};

type OptimizedImageData = {
  id: string;
  src: string;
  thumbnail: string;
  originalName: string;
  mimeType: string;
  width: number;
  height: number;
  createdAt: string;
};

type JournalState = {
  background: string;
  customBackgrounds?: AtelierImage[];
  items: JournalItem[];
};

type Screen = "home" | "library" | "prompts" | "mj" | "projects" | "customize" | "journal" | "gallery";

type HomeSectionId = "dashboard" | "quickActions" | "search" | "featureCards" | "favorites" | "atelier";
type HomeFeatureId = "library" | "prompts" | "mj" | "projects";

type WorkToolIconStyle = "simple" | "pastel" | "frame" | "cool" | "dark" | "vivid" | "cute";

type HomeSettings = {
  themeId: string;
  bannerImageUrl: string;
  bannerVisible: boolean;
  bannerSize: "small" | "medium" | "large";
  workToolIconStyle: WorkToolIconStyle;
  visible: Record<string, boolean>;
  order: HomeSectionId[];
};

type WorkTool = {
  id: string;
  name: string;
  url: string;
  iconText: string;
  iconImage: string;
  memo: string;
};

const categories: Category[] = [
  "ステッカーモックアップ",
  "招待状モックアップ",
  "ポストカードモックアップ",
  "グリーティングカードモックアップ",
  "Etsyサムネイル",
  "アートプリントモックアップ",
  "アクリルキーホルダーモックアップ",
];

const homeSections: { id: HomeSectionId; label: string }[] = [
  { id: "dashboard", label: "制作状況カード" },
  { id: "quickActions", label: "作業ツール" },
  { id: "search", label: "検索バー" },
  { id: "featureCards", label: "メイン機能カード" },
  { id: "favorites", label: "お気に入り" },
  { id: "atelier", label: "アトリエコーナー" },
];

const homeFeatures: { id: HomeFeatureId; label: string }[] = [
  { id: "library", label: "モックアップライブラリ" },
  { id: "prompts", label: "プロンプト帳" },
  { id: "mj", label: "MJ設定" },
  { id: "projects", label: "プロジェクト" },
];

const homeThemes = [
  { id: "cute", name: "キュート", colors: ["#f7e8e3", "#fffaf4", "#efe4d4"], vars: { ink: "#4a3935", muted: "#806f67", paper: "#fffaf4", ivory: "#fbf6ed", shell: "#f7e8e3", sage: "#dce7d7", sand: "#efe4d4", line: "#eadbd0", accent: "#c88f8d" } },
  { id: "cool", name: "クール", colors: ["#d9e1e8", "#ffffff", "#42464d"], vars: { ink: "#343841", muted: "#68717d", paper: "#ffffff", ivory: "#f4f7f8", shell: "#d9e1e8", sage: "#dce5e4", sand: "#e9edf0", line: "#d8e0e6", accent: "#72889a" } },
  { id: "natural", name: "ナチュラル", colors: ["#dce7d7", "#fbf6ed", "#7c624d"], vars: { ink: "#46382d", muted: "#766859", paper: "#fffaf2", ivory: "#f6f1e8", shell: "#e8eadc", sage: "#dce7d7", sand: "#e8dccb", line: "#ded3c1", accent: "#71866d" } },
  { id: "lavender", name: "ラベンダー", colors: ["#e7dff1", "#eff0ec", "#ffffff"], vars: { ink: "#40384c", muted: "#786f82", paper: "#fffdfd", ivory: "#f7f4fa", shell: "#e7dff1", sage: "#e4ece8", sand: "#ebe5ef", line: "#ded7e8", accent: "#9a85b6" } },
  { id: "cafe", name: "カフェ", colors: ["#ead8c3", "#b99b83", "#fffaf4"], vars: { ink: "#4a382e", muted: "#806b5b", paper: "#fff8ef", ivory: "#f6eee4", shell: "#ead8c3", sage: "#e2e5d8", sand: "#e6d2bc", line: "#dfcdb9", accent: "#a98270" } },
  { id: "kstationery", name: "韓国文具", colors: ["#fff4dc", "#f6d9de", "#d7eadf"], vars: { ink: "#493c39", muted: "#7d7167", paper: "#fffdf7", ivory: "#fff8ea", shell: "#f6d9de", sage: "#d7eadf", sand: "#f2e6cf", line: "#eadfcb", accent: "#d49aa5" } },
  { id: "simple", name: "シンプル", colors: ["#ffffff", "#eeeeee", "#333333"], vars: { ink: "#303030", muted: "#6a6a6a", paper: "#ffffff", ivory: "#f7f7f7", shell: "#eeeeee", sage: "#e9e9e9", sand: "#efefef", line: "#dddddd", accent: "#555555" } },
  { id: "girly", name: "ガーリー", colors: ["#e9b7c2", "#fff4dc", "#d8b9a2"], vars: { ink: "#55383e", muted: "#896d71", paper: "#fff9f2", ivory: "#fff4e6", shell: "#f3d7dc", sage: "#e3e8d9", sand: "#ead6c5", line: "#ead4d8", accent: "#c97d91" } },
  { id: "antique", name: "アンティーク", colors: ["#e5d6bd", "#8a7463", "#89906f"], vars: { ink: "#45382c", muted: "#766959", paper: "#fff8ed", ivory: "#f0e5d2", shell: "#e5d6bd", sage: "#d5d9c4", sand: "#d8c6aa", line: "#d4c3aa", accent: "#89906f" } },
  { id: "pastel", name: "パステル", colors: ["#f7d9e3", "#d8efe5", "#e8ddf4", "#fff4dc"], vars: { ink: "#463d46", muted: "#7b7280", paper: "#fffdf9", ivory: "#fff8ed", shell: "#f7d9e3", sage: "#d8efe5", sand: "#e8ddf4", line: "#eadfeb", accent: "#b995cf" } },
  { id: "dark", name: "ダークモード", colors: ["#262321", "#3a3430", "#d8c7ae"], vars: { ink: "#f3eadf", muted: "#c6b8aa", paper: "#2a2725", ivory: "#1f1d1c", shell: "#3a3430", sage: "#4d4941", sand: "#d8c7ae", line: "#4a433d", accent: "#d8b98c" } },
  { id: "night-lavender", name: "ナイトラベンダー", colors: ["#34234d", "#a98bd8", "#fff7ea"], vars: { ink: "#fff7ea", muted: "#d8c8ee", paper: "#3a2854", ivory: "#261936", shell: "#4d3670", sage: "#8069a8", sand: "#efe3ff", line: "#5c4678", accent: "#c7a6ff" } },
  { id: "vivid-pink", name: "ビビッドピンク", colors: ["#ff4fa3", "#ffffff", "#222222"], vars: { ink: "#221d21", muted: "#6d5964", paper: "#ffffff", ivory: "#fff3f8", shell: "#ffd2e6", sage: "#f0eef5", sand: "#ffe6f1", line: "#f5b5d2", accent: "#ff4fa3" } },
  { id: "pop-blue", name: "ポップブルー", colors: ["#2477ff", "#ffffff", "#e8edf5"], vars: { ink: "#1d2636", muted: "#59677a", paper: "#ffffff", ivory: "#f4f8ff", shell: "#dce9ff", sage: "#e8edf5", sand: "#edf3ff", line: "#c8dcff", accent: "#2477ff" } },
  { id: "emerald", name: "エメラルド", colors: ["#00a878", "#fffaf0", "#26312d"], vars: { ink: "#26312d", muted: "#5f746b", paper: "#fffaf0", ivory: "#f2fbf4", shell: "#d8f2e6", sage: "#bfe9d8", sand: "#fff0ce", line: "#bde2d2", accent: "#00a878" } },
  { id: "retro-orange", name: "レトロオレンジ", colors: ["#f28c28", "#fff1d6", "#704628"], vars: { ink: "#4a2f20", muted: "#80624b", paper: "#fff7ea", ivory: "#fff1d6", shell: "#ffd59d", sage: "#e6d8b9", sand: "#f4c178", line: "#e6b070", accent: "#f28c28" } },
];

const mjParameterOptions = [
  "--ar 1:1",
  "--ar 4:5",
  "--ar 3:4",
  "--ar 2:3",
  "--ar 16:9",
  "--stylize 50",
  "--stylize 80",
  "--stylize 100",
  "--chaos 5",
  "--chaos 10",
  "--chaos 20",
  "--raw",
  "--hd",
  "--seed",
  "--profile",
  "--v 6",
  "--niji 6",
  "--quality 1",
  "--weird 50",
];

const mjParamKey = (param: string) => param.trim().split(/\s+/)[0];
const mjParamValue = (params: string[], key: string) => {
  const found = params.find((param) => mjParamKey(param) === key);
  return found ? found.replace(key, "").trim() : "";
};
const mjReplaceKeys = ["--ar", "--stylize", "--chaos", "--seed", "--profile", "--v", "--niji", "--quality", "--weird"];
const defaultWorkTools: WorkTool[] = [
  { id: "tool-midjourney", name: "Midjourney", url: "https://www.midjourney.com/", iconText: "MJ", iconImage: "", memo: "画像生成" },
  { id: "tool-pinterest", name: "Pinterest", url: "https://www.pinterest.com/", iconText: "P", iconImage: "", memo: "参考画像" },
  { id: "tool-chatgpt", name: "ChatGPT", url: "https://chatgpt.com/", iconText: "GPT", iconImage: "", memo: "文章づくり" },
];

const sampleAtelierImages: AtelierImage[] = [];

const defaultJournal: JournalState = {
  background: "paper",
  items: [],
};

const defaultHomeSettings: HomeSettings = {
  themeId: "cute",
  bannerImageUrl: "",
  bannerVisible: true,
  bannerSize: "medium",
  workToolIconStyle: "pastel",
  visible: {
    library: true,
    prompts: true,
    mj: true,
    projects: true,
    favorites: true,
    atelier: true,
    dashboard: true,
    quickActions: true,
    search: true,
    featureCards: true,
  },
  order: ["dashboard", "quickActions", "search", "featureCards", "favorites", "atelier"],
};

const normalizeHomeSettings = (settings: HomeSettings): HomeSettings => ({
  ...defaultHomeSettings,
  ...settings,
  visible: { ...defaultHomeSettings.visible, ...(settings?.visible || {}) },
  order: [
    ...(settings?.order || defaultHomeSettings.order).filter((id) => homeSections.some((section) => section.id === id)),
    ...defaultHomeSettings.order.filter((id) => !(settings?.order || []).includes(id)),
  ],
});

const art = (label: string, a: string, b: string) =>
  `data:image/svg+xml,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="900" height="650" viewBox="0 0 900 650">
    <defs>
      <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
        <stop stop-color="${a}"/><stop offset="1" stop-color="${b}"/>
      </linearGradient>
    </defs>
    <rect width="900" height="650" rx="42" fill="url(#g)"/>
    <circle cx="190" cy="165" r="80" fill="#fff" opacity=".42"/>
    <circle cx="720" cy="500" r="140" fill="#fff" opacity=".28"/>
    <rect x="210" y="190" width="480" height="270" rx="28" fill="#fffaf4" opacity=".92"/>
    <text x="450" y="335" text-anchor="middle" font-family="Arial" font-size="42" fill="#4b4038">${label}</text>
  </svg>`)}`

const libraryPrompts: LibraryPrompt[] = [
  {
    id: "lib-sticker-1",
    title: "清潔感のあるステッカーシート",
    category: "ステッカーモックアップ",
    description: "白背景でステッカーの質感が見えやすい、Etsy向けの定番モックアップ。",
    prompt: "温かみのある白い紙の上に置いた、清潔感のあるステッカーシートの平置きモックアップ。自然光、やわらかな影、上品なハンドメイド文具の雰囲気、透過PNGアートを配置しやすい余白。",
    tags: ["ステッカー", "平置き", "シンプル"],
    imageUrl: art("ステッカー", "#f8ead8", "#dfe8df"),
  },
  {
    id: "lib-invitation-1",
    title: "上品な結婚式招待状セット",
    category: "招待状モックアップ",
    description: "招待状セットを上品に見せるカード、封筒、小物つき構図。",
    prompt: "封筒、シルクリボン、ドライフラワーを添えた上品な結婚式招待状のモックアップ。温かみのあるニュートラル背景、洗練された雑誌風写真、やわらかな影。",
    tags: ["結婚式", "招待状", "上品"],
    imageUrl: art("招待状", "#efe1d2", "#f6f3ec"),
  },
  {
    id: "lib-postcard-1",
    title: "旅気分のポストカード平置き",
    category: "ポストカードモックアップ",
    description: "ポストカード作品を旅・雑貨感のある見せ方にする構図。",
    prompt: "リネン素材の机の上に置いたポストカードモックアップ。ヴィンテージ切手、鉛筆、温かい日差し、旅の文具のような心地よい雰囲気、リアルな印刷紙の質感。",
    tags: ["ポストカード", "旅", "紙もの"],
    imageUrl: art("ポストカード", "#eee6d9", "#d9e4e8"),
  },
  {
    id: "lib-greeting-1",
    title: "立てかけたグリーティングカード",
    category: "グリーティングカードモックアップ",
    description: "グリーティングカードを立てて、印刷商品の存在感を出すモックアップ。",
    prompt: "シンプルな棚に立てかけたグリーティングカードのモックアップ。ニュートラルなインテリア、朝のやわらかな光、リアルな厚紙の質感、清潔感のある商品写真。",
    tags: ["カード", "インテリア", "印刷"],
    imageUrl: art("カード", "#f7eadf", "#e5e5dd"),
  },
  {
    id: "lib-etsy-1",
    title: "明るいEtsyサムネイル",
    category: "Etsyサムネイル",
    description: "検索結果で見やすい、明るく余白のあるサムネイル構図。",
    prompt: "明るいEtsy商品画像サムネイル。商品を中央に配置、清潔感のある温かい白背景、見やすい構図、控えめな小物、クリックされやすいマーケット向け写真。",
    tags: ["Etsy", "サムネイル", "商品画像"],
    imageUrl: art("Etsy", "#f8efe6", "#eadfcf"),
  },
  {
    id: "lib-print-1",
    title: "壁に飾るアートプリント",
    category: "アートプリントモックアップ",
    description: "アートプリントをリビングの壁に飾った販売ページ向け写真。",
    prompt: "落ち着いたリビングの壁に飾った額入りアートプリントのモックアップ。オーク材の額縁、ニュートラルなソファ、やわらかな日差し、北欧風インテリア、リアルなファインアート紙。",
    tags: ["アートプリント", "額縁", "インテリア"],
    imageUrl: art("アート", "#e4e7df", "#f8efe2"),
  },
  {
    id: "lib-keychain-1",
    title: "アクリルキーホルダー商品写真",
    category: "アクリルキーホルダーモックアップ",
    description: "透明アクリルの厚みと金具が見える、かわいい商品写真風。",
    prompt: "透明でつやのある縁が見えるアクリルキーホルダーのモックアップ。ゴールドの金具、かわいいチャームの商品写真、淡いニュートラル背景、やわらかな反射、ハンドメイドショップ風。",
    tags: ["キーホルダー", "アクリル", "チャーム"],
    imageUrl: art("キーホルダー", "#f6e6ec", "#e8edf5"),
  },
];

const mockupCategoryIdByTitle: Record<Category, string> = {
  "ステッカーモックアップ": "sticker",
  "招待状モックアップ": "invitation",
  "ポストカードモックアップ": "postcard",
  "グリーティングカードモックアップ": "greeting-card",
  "Etsyサムネイル": "etsy-thumbnail",
  "アートプリントモックアップ": "art-print",
  "アクリルキーホルダーモックアップ": "keychain",
};

const defaultMockupCategories: MockupCategory[] = [
  {
    id: "sticker",
    title: "ステッカー",
    description: "シート、透明、ライフスタイルなど販売画像に使いやすいモックアップ。",
    coverImage: art("Sticker Board", "#f8e6e1", "#dce7d7"),
  },
  {
    id: "invitation",
    title: "招待状",
    description: "結婚式やイベント招待状を上品に見せるカードと封筒の表紙。",
    coverImage: art("Invitation", "#efe1d2", "#fff6e9"),
  },
  {
    id: "postcard",
    title: "ポストカード",
    description: "旅、紙もの、雑貨感のあるポストカード用モックアップ。",
    coverImage: art("Postcard", "#eee6d9", "#d9e4e8"),
  },
  {
    id: "greeting-card",
    title: "グリーティングカード",
    description: "立てかけ、棚、ギフトシーンに合わせたカード用ボード。",
    coverImage: art("Card", "#f7eadf", "#e5e5dd"),
  },
  {
    id: "etsy-thumbnail",
    title: "Etsyサムネイル",
    description: "検索結果で目に留まりやすい商品画像の見せ方。",
    coverImage: art("Etsy", "#f8efe6", "#eadfcf"),
  },
  {
    id: "art-print",
    title: "アートプリント",
    description: "額縁、壁掛け、インテリアに合わせたアート販売用ボード。",
    coverImage: art("Art Print", "#e4e7df", "#f8efe2"),
  },
  {
    id: "keychain",
    title: "キーホルダー",
    description: "アクリルチャームや小物商品のかわいい撮影イメージ。",
    coverImage: art("Keychain", "#f6e6ec", "#e8edf5"),
  },
];

const defaultLibraryBoardPrompts: LibraryBoardPrompt[] = [
  ...libraryPrompts.map((prompt) => ({
    ...prompt,
    categoryId: mockupCategoryIdByTitle[prompt.category],
    japaneseTranslation: prompt.prompt,
  })),
  {
    id: "sticker-simple",
    title: "シンプル",
    category: "ステッカーモックアップ",
    categoryId: "sticker",
    description: "白背景でステッカーの形と色を見せる、いちばん使いやすい基本モックアップ。",
    prompt: "simple sticker mockup on a clean white background, neatly arranged sticker designs, soft natural light, subtle shadows, Etsy listing photo, generous whitespace",
    japaneseTranslation: "白い背景にステッカーをきれいに並べたシンプルな商品写真。やわらかな自然光、薄い影、Etsy販売画像向け、余白多め。",
    tags: [],
    imageUrl: "",
  },
  {
    id: "sticker-lifestyle",
    title: "ライフスタイル",
    category: "ステッカーモックアップ",
    categoryId: "sticker",
    description: "手帳や文具と一緒に置いた、暮らしの中で使う雰囲気のモックアップ。",
    prompt: "lifestyle sticker mockup on a cute creator desk with planner, pen, washi tape, soft pastel Korean stationery mood, natural daylight, cozy handmade shop aesthetic",
    japaneseTranslation: "手帳、ペン、マスキングテープのそばにステッカーを置いたライフスタイル写真。韓国文具風、淡いパステル、自然光、かわいい作業机。",
    tags: [],
    imageUrl: "",
  },
  {
    id: "sticker-clear",
    title: "透明ステッカー",
    category: "ステッカーモックアップ",
    categoryId: "sticker",
    description: "透明素材の縁やつや感が分かる、質感重視の販売画像。",
    prompt: "close-up clear sticker mockup showing glossy transparent edges, white backing card, soft reflection, clean premium product photography",
    japaneseTranslation: "透明ステッカーのつやと薄い縁が見える接写モックアップ。白い台紙、やわらかな反射、清潔感のある商品写真。",
    tags: [],
    imageUrl: "",
  },
  {
    id: "sticker-laptop",
    title: "ノートPC",
    category: "ステッカーモックアップ",
    categoryId: "sticker",
    description: "ノートPCに貼った使用例として見せる、クリエイター向けモックアップ。",
    prompt: "cute sticker mockup placed on a minimal laptop cover, bright desk, stationery props, natural soft shadow, realistic product preview for online shop",
    japaneseTranslation: "シンプルなノートPCの天板にかわいいステッカーを貼ったモックアップ。明るいデスク、文具、ナチュラルな影、販売用プレビュー。",
    tags: [],
    imageUrl: "",
  },
  {
    id: "sticker-phone",
    title: "スマホ",
    category: "ステッカーモックアップ",
    categoryId: "sticker",
    description: "スマホケースや小物に貼った雰囲気が伝わるモックアップ。",
    prompt: "cute sticker mockup on a phone case, soft pastel background, planner and small stationery props, gentle light, clean handmade product photo",
    japaneseTranslation: "スマホケースにステッカーを貼ったかわいい商品写真。淡い背景、手帳や小物を添えた構図、やわらかな光。",
    tags: [],
    imageUrl: "",
  },
  {
    id: "sticker-packaging",
    title: "パッケージ",
    category: "ステッカーモックアップ",
    categoryId: "sticker",
    description: "台紙や袋に入れた販売時の梱包イメージを見せるモックアップ。",
    prompt: "sticker packaging mockup with backing card and clear sleeve, small shop card, soft beige background, handmade Etsy seller product presentation",
    japaneseTranslation: "ステッカーを台紙と透明袋に入れたパッケージモックアップ。ショップカード、淡いベージュ背景、ハンドメイド販売向け。",
    tags: [],
    imageUrl: "",
  },
];

const samplePrompts: MyPrompt[] = [
  {
    ...libraryPrompts[0],
    id: "my-1",
    title: "かわいい動物ステッカー",
    note: "動物クリップアートのステッカー販売ページ用。",
    tags: ["かわいい", "動物", "ステッカー"],
    favorite: true,
  },
  {
    ...libraryPrompts[5],
    id: "my-2",
    title: "植物アートプリント",
    note: "水彩植物シリーズ用。額縁は明るめ。",
    tags: ["植物", "壁掛けアート"],
    favorite: false,
  },
];

const sampleMj: MjSetting[] = [
  {
    id: "mj-1",
    title: "かわいいクリップアート基本設定",
    description: "Etsy向けのかわいい単品クリップアート生成用。",
    ar: "1:1",
    stylize: "50",
    chaos: "10",
    profile: "XXXXX",
    seed: "",
    raw: true,
    extra: "かわいいクリップアート風、白背景、印刷しやすいシンプルな形",
    note: "背景透過にしやすい白背景で使う。",
  },
  {
    id: "mj-2",
    title: "ステッカーシート確認用",
    description: "複数ステッカーを1枚に並べるプレビュー用。",
    ar: "4:5",
    stylize: "80",
    chaos: "6",
    profile: "",
    seed: "1234",
    raw: false,
    extra: "統一感のあるステッカーシート、清潔感のある白背景",
    note: "商品画像の1枚目候補。",
  },
];

const sampleProjects: Project[] = [
  {
    id: "project-1",
    name: "ハロウィンクリップアート",
    description: "秋から販売するハロウィン素材セット。",
    promptIds: ["my-1"],
    mjIds: ["mj-1"],
    note: "9月上旬までに30点作成。",
    tags: ["季節商品", "ハロウィン"],
    dueDate: "2026-09-01",
    remindOnHome: true,
  },
];

const blankPrompt = (textOnly = false): MyPrompt => ({
  id: "",
  title: "",
  category: "ステッカーモックアップ",
  description: "",
  prompt: "",
  note: "",
  tags: [],
  imageUrl: "",
  favorite: false,
  japaneseTranslation: "",
  memo: "",
  isTextStock: textOnly,
});

const blankMj = (): MjSetting => ({
  id: "",
  title: "",
  description: "",
  ar: "1:1",
  stylize: "",
  chaos: "",
  profile: "",
  seed: "",
  raw: false,
  extra: "",
  note: "",
});

const blankProject = (): Project => ({
  id: "",
  name: "",
  description: "",
  promptIds: [],
  mjIds: [],
  note: "",
  tags: [],
  dueDate: "",
  remindOnHome: false,
});

const uid = () => `${Date.now()}-${Math.random().toString(16).slice(2)}`;
const splitTags = (value: string) => value.split(",").map((tag) => tag.trim()).filter(Boolean);
const tagText = (tags: string[]) => tags.join(", ");
const lowerIncludes = (source: string, query: string) => source.toLowerCase().includes(query.toLowerCase());
const IMAGE_WARNING_KEY = "promptAtelierImageStorageWarningLevel";
const STORAGE_LIMIT_BYTES = 5 * 1024 * 1024;

const isDarkTheme = (id: string) => ["dark", "night-lavender"].includes(id);
const readableTextOn = (hex: string) => {
  const normalized = hex.replace("#", "");
  if (!/^[0-9a-f]{6}$/i.test(normalized)) return "#fffdf9";
  const [r, g, b] = [0, 2, 4].map((start) => parseInt(normalized.slice(start, start + 2), 16) / 255);
  const [lr, lg, lb] = [r, g, b].map((value) => (value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4));
  return 0.2126 * lr + 0.7152 * lg + 0.0722 * lb > 0.58 ? "#2f2924" : "#fffdf9";
};

function themeClassName(id: string) {
  if (["cute", "girly", "kstationery", "pastel", "lavender"].includes(id)) return "theme-cute";
  if (["cool", "simple", "pop-blue"].includes(id)) return "theme-cool";
  if (["dark", "night-lavender"].includes(id)) return "theme-dark";
  if (["vivid-pink", "emerald", "retro-orange"].includes(id)) return "theme-vivid";
  if (["natural", "cafe", "antique"].includes(id)) return "theme-natural";
  return "theme-cute";
}

function themeStyle(theme: any) {
  const dark = isDarkTheme(theme.id);
  const accentText = readableTextOn(theme.vars.accent);
  const buttonText = readableTextOn(dark ? theme.vars.accent : theme.vars.paper);
  const decorativeMap: Record<string, string> = {
    cute: "color-mix(in srgb, #f8cdd5 42%, var(--card-bg))",
    cool: "color-mix(in srgb, #b9c8d5 38%, transparent)",
    natural: "color-mix(in srgb, #a9bf91 34%, transparent)",
    lavender: "color-mix(in srgb, #cdb7e8 36%, transparent)",
    cafe: "color-mix(in srgb, #caa98d 32%, transparent)",
    kstationery: "color-mix(in srgb, #f7cbd7 34%, transparent)",
    simple: "color-mix(in srgb, #d8d8d8 32%, transparent)",
    girly: "color-mix(in srgb, #e7a9bc 38%, transparent)",
    antique: "color-mix(in srgb, #b59770 34%, transparent)",
    pastel: "color-mix(in srgb, #d8c7f0 36%, transparent)",
    dark: "color-mix(in srgb, #ffffff 14%, transparent)",
    "night-lavender": "color-mix(in srgb, #c7a6ff 22%, transparent)",
    "vivid-pink": "color-mix(in srgb, #ff4fa3 34%, transparent)",
    "pop-blue": "color-mix(in srgb, #2477ff 30%, transparent)",
    emerald: "color-mix(in srgb, #00a878 28%, transparent)",
    "retro-orange": "color-mix(in srgb, #f28c28 34%, transparent)",
  };
  return {
    "--app-bg": theme.vars.ivory,
    "--text-main": theme.vars.ink,
    "--text-sub": theme.vars.muted,
    "--ink": theme.vars.ink,
    "--muted": theme.vars.muted,
    "--paper": theme.vars.paper,
    "--ivory": theme.vars.ivory,
    "--shell": theme.vars.shell,
    "--sage": theme.vars.sage,
    "--sand": theme.vars.sand,
    "--line": theme.vars.line,
    "--accent": theme.vars.accent,
    "--accent-soft": dark ? theme.vars.shell : theme.vars.shell,
    "--sage-deep": theme.vars.accent,
    "--heading": theme.vars.ink,
    "--card-bg": dark ? theme.vars.paper : theme.vars.paper,
    "--card-gradient": dark
      ? `linear-gradient(145deg, ${theme.vars.paper}, ${theme.vars.shell})`
      : `linear-gradient(145deg, ${theme.vars.paper} 8%, ${theme.vars.shell} 58%, ${theme.vars.sand})`,
    "--card-border": theme.vars.line,
    "--border": theme.vars.line,
    "--button-bg": dark ? theme.vars.accent : theme.vars.paper,
    "--button-text": buttonText,
    "--button-ink": buttonText,
    "--primary-bg": theme.vars.accent,
    "--primary-ink": accentText,
    "--input-bg": dark ? theme.vars.shell : "#fffdf9",
    "--input-ink": theme.vars.ink,
    "--icon-bg": dark ? theme.vars.shell : theme.vars.paper,
    "--icon-color": theme.vars.accent,
    "--decorative-shape": decorativeMap[theme.id] || "color-mix(in srgb, var(--accent) 24%, transparent)",
    "--nav-bg": dark ? theme.vars.paper : "color-mix(in srgb, var(--paper) 88%, transparent)",
    "--nav-ink": theme.vars.ink,
  } as any;
}

function projectDueInfo(value: string) {
  if (!value) return { diff: 999999, expired: false, text: "" };
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(`${value}T00:00:00`);
  if (Number.isNaN(due.getTime())) return { diff: 999999, expired: false, text: "" };
  const diff = Math.ceil((due.getTime() - today.getTime()) / 86400000);
  return {
    diff,
    expired: diff < 0,
    text: diff < 0 ? `${Math.abs(diff)}日過ぎています` : diff === 0 ? "今日" : `あと${diff}日`,
  };
}

function projectDueText(value: string) {
  const info = projectDueInfo(value);
  return info.expired ? "⚠ 達成予定日を過ぎています" : `達成予定まで ${info.text}`;
}

function projectSortRank(project: Project) {
  if (!project.dueDate) return 1;
  return projectDueInfo(project.dueDate).expired ? 2 : 0;
}

function sortProjectsForDisplay(items: Project[]) {
  return [...items].sort((a, b) => {
    const rankDiff = projectSortRank(a) - projectSortRank(b);
    if (rankDiff) return rankDiff;
    if (projectSortRank(a) === 0) {
      const dateDiff = String(a.dueDate).localeCompare(String(b.dueDate));
      if (dateDiff) return dateDiff;
    }
    const updatedDiff = String(b.updatedAt || "").localeCompare(String(a.updatedAt || ""));
    if (updatedDiff) return updatedDiff;
    return String(b.id || "").localeCompare(String(a.id || ""));
  });
}

function collectAtelierImages(prompts: MyPrompt[], mjSettings: MjSetting[], galleryImages: AtelierImage[]) {
  const promptImages = prompts
    .filter((prompt) => prompt.imageUrl)
    .map((prompt) => ({
      id: `prompt-${prompt.id}`,
      src: prompt.imageUrl,
      thumbnail: prompt.imageUrl,
      title: prompt.title || "プロンプト画像",
      memo: prompt.note || prompt.description || "",
      createdAt: prompt.id,
      source: "prompt",
      favorite: Boolean(prompt.favorite),
    }));
  const mjImages = mjSettings.flatMap((setting) => (setting.images || (setting.imageUrl ? [setting.imageUrl] : [])).map((src, index) => ({
    id: `mj-${setting.id}-${index}`,
    src: imageSrc(src),
    thumbnail: imageThumbnail(src),
    title: setting.title || "MJ画像",
    memo: setting.memo || setting.note || "",
    createdAt: setting.createdAt || setting.id,
    source: "midjourney",
    favorite: false,
  })));
  const normalizedGalleryImages = galleryImages.map((item) => ({ ...item, src: imageSrc(item), thumbnail: imageThumbnail(item) }));
  const merged = [...promptImages, ...mjImages, ...normalizedGalleryImages].filter((item) => item.src);
  const seen = new Set<string>();
  return merged
    .filter((item) => {
      if (seen.has(item.src)) return false;
      seen.add(item.src);
      return true;
    })
    .sort((a, b) => Number(Boolean(b.favorite)) - Number(Boolean(a.favorite)) || String(b.createdAt).localeCompare(String(a.createdAt)))
    .slice(0, 24);
}

function imageSrc(image: any) {
  if (!image) return "";
  return typeof image === "string" ? image : image.src || "";
}

function imageThumbnail(image: any) {
  if (!image) return "";
  return typeof image === "string" ? image : image.thumbnail || image.src || "";
}

function normalizeImageData(image: any): OptimizedImageData {
  if (image && typeof image === "object" && image.src) {
    return {
      id: image.id || uid(),
      src: image.src,
      thumbnail: image.thumbnail || image.src,
      originalName: image.originalName || image.title || "image",
      mimeType: image.mimeType || "image/*",
      width: Number(image.width || 0),
      height: Number(image.height || 0),
      createdAt: image.createdAt || new Date().toISOString(),
    };
  }
  const src = String(image || "");
  return {
    id: uid(),
    src,
    thumbnail: src,
    originalName: "existing-image",
    mimeType: src.startsWith("data:") ? src.slice(5, src.indexOf(";")) : "image/url",
    width: 0,
    height: 0,
    createdAt: new Date().toISOString(),
  };
}

function estimateStorageUsage() {
  let total = 0;
  for (let index = 0; index < localStorage.length; index += 1) {
    const key = localStorage.key(index) || "";
    if (!key.startsWith("promptAtelier")) continue;
    const value = localStorage.getItem(key) || "";
    total += new Blob([key + value]).size;
  }
  return total;
}

function warnIfImageStorageLarge() {
  const usage = estimateStorageUsage();
  const ratio = usage / STORAGE_LIMIT_BYTES;
  const shownLevel = sessionStorage.getItem(IMAGE_WARNING_KEY);
  if (ratio < 0.7) {
    sessionStorage.removeItem(IMAGE_WARNING_KEY);
    return;
  }
  if (ratio >= 0.9) {
    if (shownLevel === "strong") return;
    sessionStorage.setItem(IMAGE_WARNING_KEY, "strong");
    window.alert("保存容量が残り少なくなっています。バックアップ後、不要な画像を削除してください。");
    return;
  }
  if (shownLevel) return;
  sessionStorage.setItem(IMAGE_WARNING_KEY, "light");
  window.alert("画像データが増えています。バックアップや不要画像の整理をおすすめします。");
}

function isSupportedImageFile(file: File) {
  return ["image/jpeg", "image/png", "image/webp"].includes(file.type) || /\.(jpe?g|png|webp)$/i.test(file.name);
}

function loadImageFromFile(file: File) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("画像を読み込めませんでした"));
    };
    image.src = url;
  });
}

function canvasDataUrl(image: HTMLImageElement, maxSide: number, quality = 0.82) {
  const sourceWidth = image.naturalWidth || image.width;
  const sourceHeight = image.naturalHeight || image.height;
  const ratio = Math.min(1, maxSide / Math.max(sourceWidth, sourceHeight));
  const width = Math.max(1, Math.round(sourceWidth * ratio));
  const height = Math.max(1, Math.round(sourceHeight * ratio));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("画像処理を開始できませんでした");
  context.drawImage(image, 0, 0, width, height);
  const webp = canvas.toDataURL("image/webp", quality);
  const dataUrl = webp.startsWith("data:image/webp") ? webp : canvas.toDataURL("image/jpeg", quality);
  return { dataUrl, width, height, mimeType: dataUrl.slice(5, dataUrl.indexOf(";")) };
}

async function optimizeImage(file: File): Promise<OptimizedImageData> {
  if (!isSupportedImageFile(file)) throw new Error("対応していない画像形式です");
  const image = await loadImageFromFile(file);
  const full = canvasDataUrl(image, 1200, 0.82);
  const thumbnail = canvasDataUrl(image, 360, 0.76);
  warnIfImageStorageLarge();
  return {
    id: uid(),
    src: full.dataUrl,
    thumbnail: thumbnail.dataUrl,
    originalName: file.name,
    mimeType: full.mimeType,
    width: full.width,
    height: full.height,
    createdAt: new Date().toISOString(),
  };
}

async function createThumbnail(file: File) {
  const image = await loadImageFromFile(file);
  return canvasDataUrl(image, 360, 0.76).dataUrl;
}

function saveImageToStorage(image: OptimizedImageData) {
  warnIfImageStorageLarge();
  return image;
}

function clipboardImageFiles(event: React.ClipboardEvent) {
  return Array.from(event.clipboardData?.items || [])
    .filter((item) => item.kind === "file")
    .map((item) => item.getAsFile())
    .filter((file): file is File => Boolean(file) && isSupportedImageFile(file));
}

function useStoredState<T>(key: string, fallback: T) {
  const [value, setValue] = React.useState<T>(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : fallback;
    } catch {
      return fallback;
    }
  });
  React.useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn("[Prompt Atelier] localStorage保存に失敗しました", key, error);
    }
  }, [key, value]);
  return [value, setValue] as const;
}

function collectPromptAtelierStorage() {
  const data: Record<string, string> = {};
  for (let index = 0; index < localStorage.length; index += 1) {
    const key = localStorage.key(index);
    if (!key) continue;
    if (key.startsWith("promptAtelier") || key.startsWith("prompt-atelier")) {
      const value = localStorage.getItem(key);
      if (value !== null) data[key] = value;
    }
  }
  return data;
}

function exportPromptAtelierBackup() {
  const today = new Date().toISOString().slice(0, 10);
  const payload = {
    app: "Prompt Atelier",
    version: 1,
    exportedAt: new Date().toISOString(),
    data: collectPromptAtelierStorage(),
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `prompt-atelier-backup-${today}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

async function restorePromptAtelierBackup(file: File) {
  const text = await file.text();
  const parsed = JSON.parse(text);
  const data = parsed?.data && typeof parsed.data === "object" ? parsed.data : parsed;
  if (!data || typeof data !== "object") throw new Error("Invalid backup data");
  const existingKeys = Array.from({ length: localStorage.length }, (_, index) => localStorage.key(index))
    .filter((key): key is string => Boolean(key) && (key.startsWith("promptAtelier") || key.startsWith("prompt-atelier")));
  existingKeys.forEach((key) => localStorage.removeItem(key));
  Object.entries(data).forEach(([key, value]) => {
    if (key.startsWith("promptAtelier") || key.startsWith("prompt-atelier")) {
      localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
    }
  });
}

function App() {
  const [screen, setScreen] = React.useState<Screen>("home");
  const [myPrompts, setMyPrompts] = useStoredState<MyPrompt[]>("prompt-atelier-prompts-ja-v2", samplePrompts);
  const [mjSettings, setMjSettings] = useStoredState<MjSetting[]>("promptAtelierMidjourneySettings", sampleMj);
  const [projects, setProjects] = useStoredState<Project[]>("prompt-atelier-projects-ja-v2", sampleProjects);
  const [recentIds, setRecentIds] = useStoredState<string[]>("prompt-atelier-recent-ja-v2", ["my-1", "lib-sticker-1"]);
  const [rawHomeSettings, setRawHomeSettings] = useStoredState<HomeSettings>("promptAtelierHomeSettings", defaultHomeSettings);
  const [workTools, setWorkTools] = useStoredState<WorkTool[]>("promptAtelierWorkTools", defaultWorkTools);
  const [galleryImages, setGalleryImages] = useStoredState<AtelierImage[]>("promptAtelierGallery", sampleAtelierImages);
  const [journal, setJournal] = useStoredState<JournalState>("promptAtelierJournal", defaultJournal);
  const [toast, setToast] = React.useState("");
  const homeSettings = normalizeHomeSettings(rawHomeSettings);
  const activeTheme = homeThemes.find((theme) => theme.id === homeSettings.themeId) || homeThemes[0];
  const appStyle = themeStyle(activeTheme);

  const allPrompts = [...myPrompts, ...libraryPrompts];
  const recentPrompts = recentIds.map((id) => allPrompts.find((p) => p.id === id)).filter(Boolean).slice(0, 4) as LibraryPrompt[];
  const favorites = myPrompts.filter((p) => p.favorite).slice(0, 4);
  const atelierImages = collectAtelierImages(myPrompts, mjSettings, galleryImages);

  const copyText = async (text: string, id?: string) => {
    await navigator.clipboard.writeText(text);
    if (id) setRecentIds((ids) => [id, ...ids.filter((item) => item !== id)].slice(0, 8));
    setToast("コピーしました");
    window.setTimeout(() => setToast(""), 1600);
  };

  React.useEffect(() => {
    const message = sessionStorage.getItem("promptAtelierRestoreMessage");
    if (!message) return;
    sessionStorage.removeItem("promptAtelierRestoreMessage");
    setToast(message);
    window.setTimeout(() => setToast(""), 2200);
  }, []);

  return (
    <div className={`app-shell ${themeClassName(activeTheme.id)}`} style={appStyle}>
      <header className="app-header">
        <button className="brand" onClick={() => setScreen("home")} aria-label="ホームへ">
          <span className="brand-mark">PA</span>
          <span>
            <strong>Prompt Atelier</strong>
            <small>AIイラストクリエイター向け</small>
          </span>
        </button>
        <nav>
          {[
            ["home", "ホーム"],
            ["library", "ライブラリ"],
            ["prompts", "マイプロンプト"],
            ["mj", "ミッドジャーニー設定"],
            ["projects", "プロジェクト"],
            ["customize", "カスタマイズ"],
          ].map(([id, label]) => (
            <button key={id} className={screen === id ? "active" : ""} onClick={() => setScreen(id as Screen)}>
              {label}
            </button>
          ))}
        </nav>
      </header>

      <main>
        {screen === "home" && (
          <Home
            setScreen={setScreen}
            recent={recentPrompts}
            favorites={favorites}
            projects={projects}
            myPrompts={myPrompts}
            mjSettings={mjSettings}
            copyText={copyText}
            settings={homeSettings}
            workTools={workTools}
            atelierImages={atelierImages}
          />
        )}
        {screen === "customize" && (
          <HomeCustomize
            settings={homeSettings}
            setSettings={setRawHomeSettings}
            setScreen={setScreen}
            workTools={workTools}
            setWorkTools={setWorkTools}
          />
        )}
        {screen === "library" && <Library copyText={copyText} />}
        {screen === "prompts" && <PromptBook prompts={myPrompts} setPrompts={setMyPrompts} copyText={copyText} />}
        {screen === "mj" && <Midjourney settings={mjSettings} setSettings={setMjSettings} copyText={copyText} />}
        {screen === "projects" && (
          <Projects
            projects={projects}
            setProjects={setProjects}
            prompts={myPrompts}
            settings={mjSettings}
            copyText={copyText}
          />
        )}
        {screen === "journal" && <JournalPage images={atelierImages} journal={journal} setJournal={setJournal} setGalleryImages={setGalleryImages} setScreen={setScreen} />}
        {screen === "gallery" && <GalleryPage images={galleryImages} setImages={setGalleryImages} setJournal={setJournal} setScreen={setScreen} />}
      </main>
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

function Home({ setScreen, recent, favorites, projects, myPrompts, mjSettings, copyText, settings, workTools, atelierImages }: any) {
  const [homeQuery, setHomeQuery] = React.useState("");
  const isVisible = (id: string) => settings.visible[id] !== false;
  const entries = [
    ["library", "モックアップライブラリ", "販売画像に使える定番プロンプト", "mockup"],
    ["prompts", "プロンプト帳", "自分だけのプロンプトを保存", "notebook"],
    ["mj", "MJ設定", "Midjourneyパラメータ管理", "magic"],
    ["projects", "プロジェクト", "素材セットごとにまとめる", "folder"],
  ];
  const searchable = [...myPrompts, ...projects].filter((item: any) => {
    const text = `${item.title || item.name} ${item.description || ""} ${item.note || ""} ${(item.tags || []).join(" ")}`;
    return homeQuery && lowerIncludes(text, homeQuery);
  }).slice(0, 3);
  const nextReminder = (projects as Project[])
    .filter((project) => project.remindOnHome && project.dueDate)
    .sort((a, b) => {
      const aInfo = projectDueInfo(a.dueDate || "");
      const bInfo = projectDueInfo(b.dueDate || "");
      if (aInfo.expired !== bInfo.expired) return aInfo.expired ? -1 : 1;
      return Math.abs(aInfo.diff) - Math.abs(bInfo.diff);
    })[0];
  const reminderInfo = nextReminder ? projectDueInfo(nextReminder.dueDate || "") : null;
  const dashboardItems = [
    { screen: "library", title: "モックアップ", value: `${Math.max(libraryPrompts.length, 128)}件`, icon: "mockup" },
    { screen: "prompts", title: "プロンプト帳", value: `${Math.max(myPrompts.length, 42)}件`, icon: "notebook" },
    { screen: "mj", title: "MJ設定", value: `${Math.max(mjSettings.length, 18)}件`, icon: "magic" },
    { screen: "projects", title: "プロジェクト", value: `${Math.min(projects.length, 30)}件`, icon: "folder" },
    {
      screen: "projects",
      title: reminderInfo?.expired ? "期限超過" : "達成予定",
      value: nextReminder ? reminderInfo?.text || "" : "リマインドなし",
      icon: "alarm",
      note: nextReminder?.name || "",
    },
  ];
  const normalizedTools = (workTools as WorkTool[]).slice(0, 10);
  const renderSection = (sectionId: HomeSectionId) => {
    if (!isVisible(sectionId)) return null;
    if (sectionId === "dashboard") {
      return (
        <section className="dashboard-panel home-module" key={sectionId}>
          <div className="dashboard-grid">
            {dashboardItems.map((item) => (
              <button className="stat-card" key={`${item.title}-${item.icon}`} onClick={() => setScreen(item.screen as Screen)}>
                <span className="stat-icon"><FeatureIcon name={item.icon} /></span>
                <span className="stat-title">{item.title}</span>
                <strong>{item.value}</strong>
                {item.note && <small>{item.note}</small>}
              </button>
            ))}
          </div>
        </section>
      );
    }
    if (sectionId === "quickActions") {
      return (
        <section className={`work-tools-card home-module ${settings.workToolIconStyle || "pastel"}`} key={sectionId}>
          <h2>作業ツール</h2>
          <div className="work-tools-launcher">
            {normalizedTools.map((tool: WorkTool) => (
              <a className="work-tool-launcher-item" href={tool.url} target="_blank" rel="noopener noreferrer" key={tool.id} aria-label={`${tool.name}を開く`}>
                <span>{tool.iconImage ? <img src={tool.iconImage} alt="" /> : <b>{tool.iconText || tool.name.slice(0, 2)}</b>}</span>
                <strong>{tool.name}</strong>
              </a>
            ))}
          </div>
        </section>
      );
    }
    if (sectionId === "search") {
      return (
        <section key={sectionId}>
          <div className="home-search">
            <span>⌕</span>
            <input value={homeQuery} onChange={(e) => setHomeQuery(e.target.value)} placeholder="プロンプトやプロジェクトを検索..." />
          </div>
          {homeQuery && (
            <div className="home-search-results">
              {searchable.length ? searchable.map((item: any) => (
                <button key={item.id} onClick={() => setScreen(item.name ? "projects" : "prompts")}>
                  {item.title || item.name}
                </button>
              )) : <small>一致する項目がありません。</small>}
            </div>
          )}
        </section>
      );
    }
    if (sectionId === "featureCards") {
      const visibleEntries = entries.filter(([id]) => isVisible(id as string));
      if (!visibleEntries.length) return null;
      return (
        <section className="home-feature-grid" key={sectionId}>
          {visibleEntries.map(([id, title, body, icon]) => (
            <button className="home-feature-card" key={id} onClick={() => setScreen(id as Screen)}>
              <span className="feature-corner-spark">✦</span>
              <span className="feature-washi"></span>
              <span className="feature-icon"><FeatureIcon name={icon as string} /></span>
              <span className="feature-title">{title}</span>
              <small>{body}</small>
            </button>
          ))}
        </section>
      );
    }
    if (sectionId === "favorites") {
      return (
        <section className="home-favorites-section" key={sectionId}>
          <SectionTitle title="お気に入り" />
          <div className="home-prompt-row">
            {favorites.length ? favorites.map((prompt: MyPrompt) => (
              <HomePromptCard key={prompt.id} prompt={prompt} onCopy={copyText} favorite />
            )) : <Empty text="お気に入りにしたプロンプトがここに表示されます。" />}
          </div>
        </section>
      );
    }
    if (sectionId === "atelier") {
      return (
        <section className="atelier-corner home-module" key={sectionId}>
          <div className="atelier-head">
            <div>
              <h2>アトリエコーナー</h2>
            </div>
            <div className="atelier-actions">
              <button onClick={() => setScreen("journal")}>ジャーナルページへ</button>
              <button className="primary" onClick={() => setScreen("gallery")}>ギャラリーへ</button>
            </div>
          </div>
          {atelierImages.length ? (
            <div className="atelier-tape" aria-label="アトリエ画像">
              <div className="atelier-track">
                {[...atelierImages, ...atelierImages].map((image: AtelierImage, index: number) => (
                  <figure key={`${image.id}-${index}`}>
                    <img src={image.thumbnail || image.src} alt="" />
                  </figure>
                ))}
              </div>
            </div>
          ) : (
            <div className="atelier-empty">画像を追加すると、ここにアトリエが表示されます。</div>
          )}
        </section>
      );
    }
    return null;
  };
  return (
    <section className="page home-page">
      <div className="home-topbar">
        <span>Prompt Atelier Home</span>
      </div>
      {settings.bannerVisible && (
        <div
          className={`home-banner ${settings.bannerSize}`}
          style={settings.bannerImageUrl ? { backgroundImage: `url(${settings.bannerImageUrl})` } : undefined}
        >
          {!settings.bannerImageUrl && (
            <>
              <span>✦</span>
              <i></i>
              <b></b>
            </>
          )}
        </div>
      )}
      {settings.order.map((sectionId: HomeSectionId) => renderSection(sectionId))}
    </section>
  );
}

function WorkToolEditor({ tool, onClose, onSave }: any) {
  const [draft, setDraft] = React.useState({ ...tool });
  const update = (key: keyof WorkTool, value: string) => setDraft({ ...draft, [key]: value });
  return (
    <div className="quick-link-editor">
      <div className="quick-link-editor-head">
        <strong>{tool.id ? "作業ツールを編集" : "作業ツールを追加"}</strong>
        <button onClick={onClose}>閉じる</button>
      </div>
      <input value={draft.name} onChange={(event) => update("name", event.target.value)} placeholder="表示名" />
      <input value={draft.url} onChange={(event) => update("url", event.target.value)} placeholder="URL" />
      <input value={draft.iconText} onChange={(event) => update("iconText", event.target.value)} placeholder="アイコン文字（例：MJ / P / GPT）" />
      <input value={draft.iconImage} onChange={(event) => update("iconImage", event.target.value)} placeholder="アイコン画像URL" />
      <input type="file" accept="image/*" onChange={(event) => readImage(event, (iconImage) => setDraft({ ...draft, iconImage }))} />
      <input value={draft.memo || ""} onChange={(event) => update("memo", event.target.value)} placeholder="メモ（任意）" />
      <div className="quick-link-editor-actions">
        <button onClick={onClose}>キャンセル</button>
        <button className="primary" onClick={() => onSave(draft)}>保存する</button>
      </div>
    </div>
  );
}

function HomeCustomize({ settings, setSettings, setScreen, workTools, setWorkTools }: any) {
  const [editingTool, setEditingTool] = React.useState<WorkTool | null>(null);
  const backupInputRef = React.useRef<HTMLInputElement | null>(null);
  const updateSettings = (patch: Partial<HomeSettings>) => setSettings(normalizeHomeSettings({ ...settings, ...patch }));
  const updateVisible = (id: string, value: boolean) => updateSettings({ visible: { ...settings.visible, [id]: value } });
  const moveSection = (id: HomeSectionId, direction: -1 | 1) => {
    const index = settings.order.indexOf(id);
    const target = index + direction;
    if (index < 0 || target < 0 || target >= settings.order.length) return;
    const next = [...settings.order];
    [next[index], next[target]] = [next[target], next[index]];
    updateSettings({ order: next });
  };
  const reset = () => {
    if (window.confirm("ホーム設定を初期化しますか？")) setSettings(defaultHomeSettings);
  };
  const importBackup = async (file?: File) => {
    if (!file) return;
    if (!window.confirm("現在のデータを上書きしてバックアップを復元しますか？")) return;
    try {
      await restorePromptAtelierBackup(file);
      sessionStorage.setItem("promptAtelierRestoreMessage", "バックアップを復元しました");
      window.location.reload();
    } catch (error) {
      console.error("[Prompt Atelier] バックアップ復元に失敗しました", error);
      window.alert("バックアップファイルを読み込めませんでした。");
    }
  };
  const normalizedTools = (workTools as WorkTool[]).slice(0, 10);
  const saveWorkTool = (tool: WorkTool) => {
    const rawUrl = tool.url.trim();
    const safeUrl = rawUrl ? (/^https?:\/\//i.test(rawUrl) ? rawUrl : `https://${rawUrl}`) : "https://";
    const next = {
      ...tool,
      id: tool.id || uid(),
      name: tool.name || "新しい作業ツール",
      url: safeUrl,
      iconText: tool.iconText || (tool.name || "TL").slice(0, 3).toUpperCase(),
      iconImage: tool.iconImage || "",
      memo: tool.memo || "",
    };
    setWorkTools((items: WorkTool[]) => tool.id ? items.map((item) => item.id === tool.id ? next : item).slice(0, 10) : [...items, next].slice(0, 10));
    setEditingTool(null);
  };
  const moveWorkTool = (id: string, direction: -1 | 1) => {
    setWorkTools((items: WorkTool[]) => {
      const next = [...items];
      const index = next.findIndex((item) => item.id === id);
      const target = index + direction;
      if (index < 0 || target < 0 || target >= next.length) return items;
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  };
  const deleteWorkTool = (id: string) => {
    if (window.confirm("この作業ツールを削除しますか？")) {
      setWorkTools((items: WorkTool[]) => items.filter((item) => item.id !== id));
    }
  };
  const activeTheme = homeThemes.find((theme) => theme.id === settings.themeId) || homeThemes[0];
  return (
    <section className="page customize-page">
      <PageHead
        title="ホームカスタマイズ"
        action={<button className="primary" onClick={() => setScreen("home")}>ホームへ戻る</button>}
      />
      <div className="customize-layout">
        <div className="customize-settings">
          <section className="customize-card">
            <h3>テーマ</h3>
            <p>ホーム画面の背景、カード、ボタン、見出しの色を切り替えます。</p>
            <div className="theme-grid">
              {homeThemes.map((theme) => (
                <button
                  key={theme.id}
                  className={`theme-card ${settings.themeId === theme.id ? "selected" : ""}`}
                  onClick={() => updateSettings({ themeId: theme.id })}
                >
                  <span>{theme.name}</span>
                  <small>
                    {theme.colors.map((color) => <i key={color} style={{ background: color }} />)}
                  </small>
                </button>
              ))}
            </div>
          </section>

          <section className="customize-card">
            <h3>バナー</h3>
            <p>ホーム上部に表示する横長画像を設定できます。</p>
            <label className="switch-row">
              <span>バナー表示</span>
              <input type="checkbox" checked={settings.bannerVisible} onChange={(event) => updateSettings({ bannerVisible: event.target.checked })} />
            </label>
            <input value={settings.bannerImageUrl} onChange={(event) => updateSettings({ bannerImageUrl: event.target.value })} placeholder="バナー画像URL" />
            <input type="file" accept="image/png,image/jpeg,image/webp" onChange={(event) => readImage(event, (bannerImageUrl) => updateSettings({ bannerImageUrl }))} />
            <div className="inline-buttons">
              {(["small", "medium", "large"] as const).map((size) => (
                <button key={size} className={settings.bannerSize === size ? "active-soft" : ""} onClick={() => updateSettings({ bannerSize: size })}>
                  {size === "small" ? "小" : size === "medium" ? "中" : "大"}
                </button>
              ))}
              <button onClick={() => updateSettings({ bannerImageUrl: "" })}>画像を削除</button>
            </div>
          </section>

          <section className="customize-card">
            <h3>作業ツール</h3>
            <p>ホームに表示する外部サービスのショートカットを編集できます。最大10件まで登録できます。</p>
            <div className="icon-style-choices">
              <strong>アイコンテイスト</strong>
              {[
                ["simple", "シンプル"],
                ["pastel", "パステル"],
                ["frame", "フレーム"],
                ["cool", "クール"],
                ["dark", "ダーク"],
                ["vivid", "ビビッド"],
                ["cute", "キュート"],
              ].map(([id, label]) => (
                <button key={id} className={settings.workToolIconStyle === id ? "active-soft" : ""} onClick={() => updateSettings({ workToolIconStyle: id as WorkToolIconStyle })}>
                  {label}
                </button>
              ))}
            </div>
            <div className={`work-tool-edit-list ${settings.workToolIconStyle || "pastel"}`}>
              {normalizedTools.map((tool: WorkTool, index: number) => (
                <article className="work-tool-edit-row" key={tool.id}>
                  <span className="work-tool-edit-icon">{tool.iconImage ? <img src={tool.iconImage} alt="" /> : <b>{tool.iconText || tool.name.slice(0, 2)}</b>}</span>
                  <div>
                    <strong>{tool.name}</strong>
                    <small>{tool.url}</small>
                  </div>
                  <div className="work-tool-edit-actions">
                    <button onClick={() => setEditingTool(tool)}>編集</button>
                    <button onClick={() => moveWorkTool(tool.id, -1)} disabled={index === 0}>左へ</button>
                    <button onClick={() => moveWorkTool(tool.id, 1)} disabled={index === normalizedTools.length - 1}>右へ</button>
                    <button className="danger" onClick={() => deleteWorkTool(tool.id)}>削除</button>
                  </div>
                </article>
              ))}
            </div>
            {normalizedTools.length < 10 ? (
              <button className="add-work-tool-button" onClick={() => setEditingTool({ id: "", name: "", url: "", iconText: "", iconImage: "", memo: "" })}>
                ＋ 作業ツールを追加
              </button>
            ) : <p className="limit-message">作業ツールは最大10件まで登録できます</p>}
            {editingTool && <WorkToolEditor tool={editingTool} onClose={() => setEditingTool(null)} onSave={saveWorkTool} />}
          </section>

          <section className="customize-card">
            <h3>表示項目</h3>
            <p>ホームに表示する項目を選べます。カスタマイズへの導線は常に残ります。</p>
            <div className="toggle-list">
              {[...homeFeatures, ...homeSections].map((item) => (
                <label className="switch-row" key={item.id}>
                  <span>{item.label}</span>
                  <input type="checkbox" checked={settings.visible[item.id] !== false} onChange={(event) => updateVisible(item.id, event.target.checked)} />
                </label>
              ))}
            </div>
          </section>

          <section className="customize-card">
            <h3>並び順</h3>
            <p>ホームの表示順を「上へ」「下へ」で調整できます。</p>
            <div className="order-list">
              {settings.order.map((id: HomeSectionId) => {
                const section = homeSections.find((item) => item.id === id);
                return (
                  <div className="order-row" key={id}>
                    <span>{section?.label}</span>
                    <div>
                      <button onClick={() => moveSection(id, -1)}>上へ</button>
                      <button onClick={() => moveSection(id, 1)}>下へ</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="customize-card backup-card">
            <h3>バックアップ</h3>
            <p>大切なプロンプトや画像データを保存できます。機種変更やブラウザ変更前にバックアップしてください。</p>
            <div className="backup-actions">
              <button className="primary" onClick={exportPromptAtelierBackup}>バックアップを書き出す</button>
              <button onClick={() => backupInputRef.current?.click()}>バックアップを読み込む</button>
            </div>
            <input
              ref={backupInputRef}
              type="file"
              accept="application/json,.json"
              style={{ display: "none" }}
              onChange={(event) => {
                importBackup(event.currentTarget.files?.[0]);
                event.currentTarget.value = "";
              }}
            />
          </section>

          <section className="customize-card danger-zone">
            <h3>初期化</h3>
            <p>テーマ、バナー、表示項目、並び順を初期設定に戻します。</p>
            <button className="danger" onClick={reset}>初期設定に戻す</button>
          </section>
        </div>

        <aside className="customize-preview">
          <span>プレビュー</span>
          <div className="preview-shell" style={themeStyle(activeTheme)}>
            {settings.bannerVisible && <div className={`preview-banner ${settings.bannerSize}`} style={settings.bannerImageUrl ? { backgroundImage: `url(${settings.bannerImageUrl})` } : undefined} />}
            <div className="preview-card large"></div>
            <div className="preview-grid">
              <i></i><i></i><i></i><i></i>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function FeatureIcon({ name }: { name: string }) {
  if (name === "mockup") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="13" y="16" width="38" height="32" rx="7" />
        <path d="M19 39l8-8 7 7 5-5 8 8" />
        <circle cx="42" cy="25" r="3.5" />
        <path d="M10 13l3-5 3 5 5 3-5 3-3 5-3-5-5-3 5-3z" className="icon-fill" />
      </svg>
    );
  }
  if (name === "notebook") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M18 12h27a6 6 0 016 6v31a5 5 0 01-5 5H18a5 5 0 01-5-5V17a5 5 0 015-5z" />
        <path d="M22 12v42" />
        <path d="M29 24h13M29 32h10" />
        <path d="M44 12v15l-5-3-5 3V12" className="icon-fill" />
        <path d="M10 22h7M10 32h7M10 42h7" />
      </svg>
    );
  }
  if (name === "magic") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M18 48l28-28" />
        <path d="M39 17l8 8" />
        <path d="M18 18l3-6 3 6 6 3-6 3-3 6-3-6-6-3 6-3z" className="icon-fill" />
        <path d="M47 40l2-4 2 4 4 2-4 2-2 4-2-4-4-2 4-2z" />
        <path d="M31 47h21M34 54h13" />
      </svg>
    );
  }
  if (name === "alarm") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="34" r="18" />
        <path d="M22 10l-9 8M42 10l9 8M32 22v13l9 5M24 54l-4 5M40 54l4 5" />
        <path d="M25 5h14" className="icon-fill" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M11 22h17l5-6h20v31a6 6 0 01-6 6H17a6 6 0 01-6-6V22z" />
      <path d="M11 28h42" />
      <rect x="20" y="34" width="24" height="12" rx="4" className="icon-fill" />
      <path d="M24 40h16" />
      <path d="M49 14l2-4 2 4 4 2-4 2-2 4-2-4-4-2 4-2z" />
    </svg>
  );
}

function HomePromptCard({ prompt, onCopy, favorite }: any) {
  return (
    <article className="home-prompt-card">
      <button className="heart-button" aria-label="お気に入り">{favorite ? "♥" : "♡"}</button>
      <img src={prompt.imageUrl || art("プロンプト", "#f5eadc", "#e7e7df")} alt="" />
      <div className="home-prompt-body">
        <span className="mini-pill">{prompt.category}</span>
        <h3>{prompt.title}</h3>
        <div className="home-card-bottom">
          <div className="tiny-tags">
            {(prompt.tags || []).slice(0, 2).map((tag: string) => <span key={tag}>#{tag}</span>)}
          </div>
          <button className="copy-chip" onClick={() => onCopy(prompt.prompt, prompt.id)}>コピー</button>
        </div>
      </div>
    </article>
  );
}

function Library({ copyText }: any) {
  const [query, setQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<MockupCategory | null>(null);
  const [editingCategory, setEditingCategory] = React.useState<MockupCategory | null>(null);
  const [editingPrompt, setEditingPrompt] = React.useState<LibraryBoardPrompt | null>(null);
  const [memoPrompt, setMemoPrompt] = React.useState<LibraryBoardPrompt | null>(null);
  const [inlineEdit, setInlineEdit] = React.useState<{ id: string; field: string } | null>(null);
  const [stockFrameCounts, setStockFrameCounts] = React.useState<Record<string, number>>({});
  const [boardCategories, setBoardCategories] = useStoredState<MockupCategory[]>("prompt-atelier-mockup-categories-v2", defaultMockupCategories);
  const [boardPrompts, setBoardPrompts] = useStoredState<LibraryBoardPrompt[]>("prompt-atelier-library-prompts-v5", defaultLibraryBoardPrompts);
  const currentCategory = selectedCategory ? boardCategories.find((category) => category.id === selectedCategory.id) || selectedCategory : null;
  const filteredCategories = boardCategories.filter((item) => lowerIncludes(`${item.title} ${item.description}`, query));
  const filteredPrompts = boardPrompts.filter((item) => {
    const haystack = `${item.title} ${item.description} ${item.prompt}`;
    return item.categoryId === currentCategory?.id && lowerIncludes(haystack, query);
  });
  const categoryPrompts = currentCategory ? boardPrompts.filter((item) => item.categoryId === currentCategory.id) : [];
  const imagePrompts = filteredPrompts.filter((item) => !item.isTextStock).slice(0, 20);
  const textPrompts = filteredPrompts.filter((item) => item.isTextStock);
  const textStockCount = categoryPrompts.filter((item) => item.isTextStock).length;
  const canAddImagePrompt = imagePrompts.length < 20;
  const canAddTextStock = textStockCount < 100;
  const stockFrameCount = currentCategory ? Math.min(100, Math.max(5, stockFrameCounts[currentCategory.id] || 5, textPrompts.length)) : 5;
  const textStockSlots = currentCategory ? Array.from({ length: stockFrameCount }, (_, index) => textPrompts[index] || null) : [];
  const imageSlotCount = imagePrompts.length < 20
    ? Math.max(8, Math.ceil((imagePrompts.length + 1) / 4) * 4)
    : 20;
  const imagePromptSlots = currentCategory ? Array.from({ length: imageSlotCount }, (_, index) => imagePrompts[index] || null) : [];
  const createBlankLibraryPrompt = (textOnly = false) => ({
    id: "",
    title: "",
    category: "ステッカーモックアップ" as Category,
    categoryId: currentCategory?.id || boardCategories[0]?.id || "",
    description: "",
    prompt: "",
    memo: "",
    tags: [],
    imageUrl: "",
    japaneseTranslation: "",
    isTextStock: textOnly,
  });
  const saveCategory = (item: MockupCategory) => {
    const next = { ...item, id: item.id || uid(), coverImage: item.coverImage || art("カテゴリ", "#f8e6e1", "#dce7d7") };
    setBoardCategories((items: MockupCategory[]) => item.id ? items.map((category) => category.id === item.id ? next : category) : [next, ...items]);
    setEditingCategory(null);
  };
  const savePrompt = (item: LibraryBoardPrompt) => {
    const category = boardCategories.find((category) => category.id === item.categoryId) || currentCategory || boardCategories[0];
    const countForKind = boardPrompts.filter((prompt) => prompt.categoryId === category.id && Boolean(prompt.isTextStock) === Boolean(item.isTextStock)).length;
    const limit = item.isTextStock ? 100 : 20;
    if (!item.id && countForKind >= limit) {
      setEditingPrompt(null);
      return;
    }
    const next = {
      ...item,
      id: item.id || uid(),
      categoryId: item.categoryId || category.id,
      category: "ステッカーモックアップ" as Category,
      imageUrl: item.imageUrl || "",
      japaneseTranslation: item.japaneseTranslation || item.prompt,
      memo: item.memo || "",
      tags: item.tags || [],
      isTextStock: Boolean(item.isTextStock),
    };
    setBoardPrompts((items: LibraryBoardPrompt[]) => item.id ? items.map((prompt) => prompt.id === item.id ? next : prompt) : [...items, next]);
    setEditingPrompt(null);
  };
  const duplicateCategory = (item: MockupCategory) => {
    setBoardCategories((items: MockupCategory[]) => [{ ...item, id: uid(), title: `${item.title} コピー` }, ...items]);
  };
  const duplicatePrompt = (item: LibraryBoardPrompt) => {
    const countForKind = boardPrompts.filter((prompt) => prompt.categoryId === item.categoryId && Boolean(prompt.isTextStock) === Boolean(item.isTextStock)).length;
    if (countForKind >= (item.isTextStock ? 100 : 20)) return;
    setBoardPrompts((items: LibraryBoardPrompt[]) => [...items, { ...item, id: uid(), title: `${item.title} コピー` }]);
  };
  const updatePrompt = (id: string, patch: Partial<LibraryBoardPrompt>) => {
    setBoardPrompts((items: LibraryBoardPrompt[]) => items.map((prompt) => prompt.id === id ? { ...prompt, ...patch } : prompt));
  };
  const saveTextStockFrame = (item: LibraryBoardPrompt) => {
    if (!item.title.trim() && !item.prompt.trim()) return;
    savePrompt({ ...item, isTextStock: true, imageUrl: "" });
  };
  const addTextStockFrame = () => {
    if (!currentCategory || !canAddTextStock) return;
    setStockFrameCounts((counts) => ({ ...counts, [currentCategory.id]: Math.min(100, stockFrameCount + 1) }));
  };
  return (
    <section className="page library-page">
      {!currentCategory ? (
        <>
          <PageHead
            title="モックアップライブラリ"
            action={<button className="primary" onClick={() => setEditingCategory({ id: "", title: "", description: "", coverImage: "" })}>＋ カテゴリを追加</button>}
          />
          <div className="library-intro">
            <p>販売画像づくりに使うモックアップを、Pinterestのボードのようにカテゴリで整理できます。</p>
          </div>
          <Filters>
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="カテゴリを検索..." />
          </Filters>
          <div className="library-category-grid">
            {filteredCategories.map((category) => (
              <article className="library-category-card" key={category.id}>
                <MenuButton
                  onEdit={() => setEditingCategory(category)}
                  onDuplicate={() => duplicateCategory(category)}
                  onImage={() => setEditingCategory(category)}
                  onDelete={() => setBoardCategories((items: MockupCategory[]) => items.filter((item) => item.id !== category.id))}
                />
                <button className="category-open" onClick={() => { setSelectedCategory(category); setQuery(""); }}>
                  <img src={category.coverImage} alt="" />
                  <span>{category.title}</span>
                  <small>{category.description}</small>
                </button>
              </article>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="library-detail-head">
            <img className="library-detail-cover" src={currentCategory.coverImage} alt="" />
            <div>
              <h2>{currentCategory.title}</h2>
              <p>{currentCategory.description}</p>
            </div>
            <span className="prompt-count-pill">画像 {imagePrompts.length} / 20・ストック {textStockCount} / 100</span>
          </div>
          <Filters>
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={`${currentCategory.title}内を検索...`} />
          </Filters>
          <section className="prompt-area">
            <div className="prompt-area-head">
              <div>
                <h3>画像付きプロンプト</h3>
                <p>最大20個まで保存できます。</p>
              </div>
            </div>
            <div className="library-prompt-grid">
              {imagePromptSlots.map((prompt, index) => prompt ? (
                <LibraryImagePromptCard
                  key={prompt.id}
                  prompt={prompt}
                  inlineEdit={inlineEdit}
                  setInlineEdit={setInlineEdit}
                  updatePrompt={updatePrompt}
                  duplicatePrompt={duplicatePrompt}
                  deletePrompt={() => setBoardPrompts((items: LibraryBoardPrompt[]) => items.filter((item) => item.id !== prompt.id))}
                  copyText={copyText}
                  showMemo={() => setMemoPrompt(prompt)}
                />
              ) : canAddImagePrompt ? (
                <button className="add-prompt-card" key={`empty-prompt-${index}`} onClick={() => setEditingPrompt(createBlankLibraryPrompt())}>
                  <span>＋</span>
                  <strong>新しいプロンプト</strong>
                </button>
              ) : null)}
            </div>
          </section>
          <section className="prompt-area text-prompt-area">
            <div className="prompt-area-head">
              <div>
                <h3>プロンプトストック</h3>
                <p>画像を設定しないプロンプトはこちらに保存します。最大100件まで保存できます。</p>
              </div>
            </div>
            <div className="text-prompt-list">
              {textStockSlots.map((prompt, index) => (
                <TextStockFrame
                  key={prompt?.id || `stock-frame-${index}`}
                  prompt={prompt}
                  blankPrompt={createBlankLibraryPrompt(true)}
                  onCreate={saveTextStockFrame}
                  onUpdate={updatePrompt}
                  copyText={copyText}
                  showMemo={() => prompt && setMemoPrompt(prompt)}
                />
              ))}
            </div>
            {canAddTextStock && textStockCount >= stockFrameCount && (
              <button className="add-stock-button" onClick={addTextStockFrame}>＋ プロンプトを追加</button>
            )}
            {!canAddTextStock && <p className="limit-message">保存上限（100件）に達しました</p>}
          </section>
          <button className="back-to-library" onClick={() => { setSelectedCategory(null); setQuery(""); }}>← ライブラリへ戻る</button>
        </>
      )}
      {editingCategory && <MockupCategoryModal item={editingCategory} onClose={() => setEditingCategory(null)} onSave={saveCategory} />}
      {editingPrompt && <LibraryPromptModal item={editingPrompt} categories={boardCategories} onClose={() => setEditingPrompt(null)} onSave={savePrompt} />}
      {memoPrompt && (
        <MemoModal
          prompt={memoPrompt}
          onClose={() => setMemoPrompt(null)}
          onSave={(memo) => {
            updatePrompt(memoPrompt.id, { memo });
            setMemoPrompt(null);
          }}
        />
      )}
    </section>
  );
}

function LibraryImagePromptCard({ prompt, inlineEdit, setInlineEdit, updatePrompt, duplicatePrompt, deletePrompt, copyText, showMemo }: any) {
  return (
    <article className="library-prompt-card">
      <PromptMenuButton
        onDuplicate={() => duplicatePrompt(prompt)}
        onClearImage={() => updatePrompt(prompt.id, { imageUrl: "" })}
        onDelete={deletePrompt}
      />
      <EditableThumbnail
        prompt={prompt}
        isEditing={inlineEdit?.id === prompt.id && inlineEdit.field === "imageUrl"}
        onEdit={() => setInlineEdit({ id: prompt.id, field: "imageUrl" })}
        onCancel={() => setInlineEdit(null)}
        onSave={(imageUrl: string) => { updatePrompt(prompt.id, { imageUrl }); setInlineEdit(null); }}
      />
      <div className="prompt-card-content">
        <InlineEditable
          className="inline-title"
          value={prompt.title}
          placeholder="タイトル"
          isEditing={inlineEdit?.id === prompt.id && inlineEdit.field === "title"}
          onEdit={() => setInlineEdit({ id: prompt.id, field: "title" })}
          onSave={(title: string) => { updatePrompt(prompt.id, { title }); setInlineEdit(null); }}
        />
        <InlineEditable
          className="inline-prompt"
          multiline
          value={prompt.prompt}
          placeholder="プロンプト本文"
          isEditing={inlineEdit?.id === prompt.id && inlineEdit.field === "prompt"}
          onEdit={() => setInlineEdit({ id: prompt.id, field: "prompt" })}
          onSave={(promptText: string) => { updatePrompt(prompt.id, { prompt: promptText }); setInlineEdit(null); }}
        />
        <div className="prompt-card-actions">
          <button className="primary" onClick={(event) => { event.stopPropagation(); copyText(prompt.prompt, prompt.id); }}>📋 プロンプトをコピー</button>
          <button onClick={(event) => { event.stopPropagation(); showMemo(); }}>メモ</button>
        </div>
      </div>
    </article>
  );
}

function TextStockFrame({ prompt, blankPrompt, onCreate, onUpdate, copyText, showMemo }: any) {
  const [title, setTitle] = React.useState(prompt?.title || "");
  const [promptText, setPromptText] = React.useState(prompt?.prompt || "");
  React.useEffect(() => {
    setTitle(prompt?.title || "");
    setPromptText(prompt?.prompt || "");
  }, [prompt?.id, prompt?.title, prompt?.prompt]);
  const isSaved = Boolean(prompt?.id);
  const save = (patch: Partial<LibraryBoardPrompt>) => {
    const next = { ...blankPrompt, ...prompt, title, prompt: promptText, ...patch, isTextStock: true, imageUrl: "" };
    if (isSaved) {
      onUpdate(prompt.id, patch);
      return;
    }
    if ((next.title || "").trim() || (next.prompt || "").trim()) onCreate(next);
  };
  const copyStockPrompt = (event: any) => {
    event.stopPropagation();
    copyText(promptText, prompt?.id);
  };
  return (
    <article className="text-stock-frame">
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        onBlur={() => save({ title })}
        placeholder="タイトル"
      />
      <textarea
        value={promptText}
        onChange={(event) => setPromptText(event.target.value)}
        onBlur={() => save({ prompt: promptText })}
        placeholder="プロンプト本文"
      />
      <div className="text-stock-actions">
        <button className="primary" onClick={copyStockPrompt} disabled={!promptText.trim()}>📋 プロンプトをコピー</button>
        <button onClick={(event) => { event.stopPropagation(); showMemo(); }} disabled={!isSaved}>メモ</button>
      </div>
    </article>
  );
}

function PromptThumbnail({ imageUrl }: { imageUrl?: string }) {
  if (imageUrl) return <img src={imageUrl} alt="" />;
  return (
    <div className="image-placeholder" aria-label="画像未設定">
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="12" y="16" width="40" height="32" rx="7" />
        <path d="M18 41l10-10 8 8 5-5 7 7" />
        <circle cx="42" cy="25" r="4" />
      </svg>
    </div>
  );
}

function EditableThumbnail({ prompt, isEditing, onEdit, onCancel, onSave }: any) {
  const [draft, setDraft] = React.useState(prompt.imageUrl || "");
  React.useEffect(() => setDraft(prompt.imageUrl || ""), [prompt.imageUrl, isEditing]);
  const importFiles = async (files: FileList | File[]) => {
    const file = Array.from(files).find(isSupportedImageFile);
    if (!file) return;
    const image = saveImageToStorage(await optimizeImage(file));
    setDraft(image.src);
  };
  if (isEditing) {
    return (
      <div
        className="thumbnail-editor"
        onClick={(event) => event.stopPropagation()}
        onDragOver={(event) => event.preventDefault()}
        onDrop={(event) => {
          event.preventDefault();
          event.stopPropagation();
          importFiles(event.dataTransfer.files);
        }}
        onPaste={(event) => {
          const files = clipboardImageFiles(event);
          if (!files.length) return;
          event.preventDefault();
          event.stopPropagation();
          importFiles(files);
        }}
      >
        <input value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="サムネイル画像URL" autoFocus />
        <label className="mini-upload">
          画像を選ぶ
          <input type="file" accept="image/png,image/jpeg,image/webp" onChange={(event) => readImage(event, (imageUrl) => setDraft(imageUrl))} />
        </label>
        <div>
          <button className="primary" onClick={() => onSave(draft)}>保存</button>
          <button onClick={onCancel}>閉じる</button>
        </div>
      </div>
    );
  }
  return (
    <button className="thumbnail-button" onClick={(event) => { event.stopPropagation(); onEdit(); }} aria-label="画像を変更">
      <PromptThumbnail imageUrl={prompt.imageUrl} />
    </button>
  );
}

function InlineEditable({ value, placeholder, isEditing, onEdit, onSave, multiline, className }: any) {
  const [draft, setDraft] = React.useState(value || "");
  React.useEffect(() => setDraft(value || ""), [value, isEditing]);
  const save = () => onSave(draft.trim() || value || "");
  if (isEditing) {
    const commonProps = {
      value: draft,
      onChange: (event: any) => setDraft(event.target.value),
      onBlur: save,
      onClick: (event: any) => event.stopPropagation(),
      onKeyDown: (event: any) => {
        if (event.key === "Enter" && !multiline) save();
        if (event.key === "Escape") setDraft(value || "");
      },
      autoFocus: true,
      placeholder,
      className: `inline-input ${className || ""}`,
    };
    return multiline ? <textarea {...commonProps} /> : <input {...commonProps} />;
  }
  const Tag = className === "inline-title" ? "h3" : "p";
  return <Tag className={`inline-editable ${className || ""}`} onClick={(event: any) => { event.stopPropagation(); onEdit(); }}>{value || placeholder}</Tag>;
}

function TranslationModal({ prompt, onClose, copyText }: any) {
  const translation = prompt.japaneseTranslation || "このプロンプトにはまだ和訳がありません。編集画面から和訳を追加できます。";
  return (
    <Modal title="日本語訳" onClose={onClose}>
      <div className="translation-box">
        <h3>{prompt.title} の和訳</h3>
        <p>{translation}</p>
      </div>
      <div className="modal-actions">
        <button onClick={onClose}>閉じる</button>
        <button className="primary" onClick={() => copyText(translation)}>和訳をコピー</button>
      </div>
    </Modal>
  );
}

function MemoModal({ prompt, onClose, onSave }: any) {
  const [memo, setMemo] = React.useState(prompt.memo || "");
  const [showConfirm, setShowConfirm] = React.useState(false);
  const savedMemo = prompt.memo || "";
  const isDirty = memo !== savedMemo;
  const requestClose = () => {
    if (isDirty) {
      setShowConfirm(true);
      return;
    }
    onClose();
  };
  return (
    <Modal title="メモ" onClose={requestClose} hideClose>
      <div className="translation-box">
        <h3>{prompt.title} のメモ</h3>
        <textarea className="memo-textarea" value={memo} onChange={(event) => setMemo(event.target.value)} placeholder="このプロンプトで気づいたこと、使いどころ、商品化メモなど" />
      </div>
      {showConfirm && (
        <div className="unsaved-confirm">
          <strong>保存せず閉じますか？</strong>
          <div>
            <button onClick={() => setShowConfirm(false)}>キャンセル</button>
            <button className="danger" onClick={onClose}>保存せず閉じる</button>
            <button className="primary" onClick={() => onSave(memo)}>保存して閉じる</button>
          </div>
        </div>
      )}
      <div className="memo-modal-footer">
        <button onClick={requestClose}>閉じる</button>
        <button className="primary" onClick={() => onSave(memo)}>メモを保存</button>
      </div>
    </Modal>
  );
}

function MenuButton({ onEdit, onDuplicate, onImage, onDelete }: any) {
  const runMenuAction = (event: any, action: () => void) => {
    event.preventDefault();
    event.stopPropagation();
    action();
  };
  return (
    <details className="card-menu" onClick={(event) => event.stopPropagation()}>
      <summary aria-label="メニュー">…</summary>
      <div>
        <button onClick={(event) => runMenuAction(event, onEdit)}>編集</button>
        <button onClick={(event) => runMenuAction(event, onDuplicate)}>複製</button>
        <button onClick={(event) => runMenuAction(event, onImage)}>画像変更</button>
        <button className="danger" onClick={(event) => runMenuAction(event, onDelete)}>削除</button>
      </div>
    </details>
  );
}

function PromptMenuButton({ onDuplicate, onClearImage, onDelete }: any) {
  const runMenuAction = (event: any, action: () => void) => {
    event.preventDefault();
    event.stopPropagation();
    action();
  };
  return (
    <details className="card-menu" onClick={(event) => event.stopPropagation()}>
      <summary aria-label="メニュー">…</summary>
      <div>
        <button onClick={(event) => runMenuAction(event, onDuplicate)}>複製</button>
        <button onClick={(event) => runMenuAction(event, onClearImage)}>画像を削除</button>
        <button className="danger" onClick={(event) => runMenuAction(event, onDelete)}>削除</button>
      </div>
    </details>
  );
}

async function readImage(event: any, onLoad: (value: string) => void) {
  event?.preventDefault?.();
  event?.stopPropagation?.();
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const image = saveImageToStorage(await optimizeImage(file));
    onLoad(image.src);
  } catch (error) {
    console.error("[Prompt Atelier] 画像の最適化に失敗しました", error);
    window.alert("画像を追加できませんでした。jpg / png / webp を選んでください。");
  }
}

function MockupCategoryModal({ item, onClose, onSave }: any) {
  const [draft, setDraft] = React.useState({ ...item });
  return (
    <Modal title={item.id ? "カテゴリを編集" : "カテゴリを追加"} onClose={onClose}>
      <FormGrid>
        <input value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} placeholder="タイトル" />
        <textarea value={draft.description} onChange={(e) => setDraft({ ...draft, description: e.target.value })} placeholder="説明文" />
        <input value={draft.coverImage} onChange={(e) => setDraft({ ...draft, coverImage: e.target.value })} placeholder="カバー画像URL" />
        <label className="upload-box">
          <span>画像をアップロード</span>
          <input type="file" accept="image/*" onChange={(e) => readImage(e, (coverImage) => setDraft({ ...draft, coverImage }))} />
        </label>
        {draft.coverImage && <img className="modal-preview-image" src={draft.coverImage} alt="" />}
      </FormGrid>
      <ModalActions onClose={onClose} onSave={() => onSave(draft)} />
    </Modal>
  );
}

function LibraryPromptModal({ item, categories, onClose, onSave }: any) {
  const [draft, setDraft] = React.useState({ ...item });
  return (
    <Modal title={item.id ? "プロンプトを編集" : "プロンプトを追加"} onClose={onClose}>
      <FormGrid>
        <input value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} placeholder="タイトル" />
        <select value={draft.categoryId} onChange={(e) => setDraft({ ...draft, categoryId: e.target.value })}>
          {categories.map((category: MockupCategory) => <option value={category.id} key={category.id}>{category.title}</option>)}
        </select>
        <textarea value={draft.description} onChange={(e) => setDraft({ ...draft, description: e.target.value })} placeholder="説明" />
        <textarea className="tall" value={draft.prompt} onChange={(e) => setDraft({ ...draft, prompt: e.target.value })} placeholder="プロンプト本文" />
        <textarea className="tall" value={draft.japaneseTranslation || ""} onChange={(e) => setDraft({ ...draft, japaneseTranslation: e.target.value })} placeholder="和訳本文" />
        <textarea value={draft.memo || ""} onChange={(e) => setDraft({ ...draft, memo: e.target.value })} placeholder="メモ" />
        <input value={draft.imageUrl} onChange={(e) => setDraft({ ...draft, imageUrl: e.target.value })} placeholder="サムネイル画像URL" />
        <label className="upload-box">
          <span>画像をアップロード</span>
          <input type="file" accept="image/*" onChange={(e) => readImage(e, (imageUrl) => setDraft({ ...draft, imageUrl }))} />
        </label>
        {draft.imageUrl && <img className="modal-preview-image" src={draft.imageUrl} alt="" />}
      </FormGrid>
      <ModalActions onClose={onClose} onSave={() => onSave(draft)} />
    </Modal>
  );
}

function PromptBook({ prompts, setPrompts, copyText }: any) {
  const [query, setQuery] = React.useState("");
  const [tag, setTag] = React.useState("すべて");
  const [favoritesOnly, setFavoritesOnly] = React.useState(false);
  const [editing, setEditing] = React.useState<MyPrompt | null>(null);
  const [translationPrompt, setTranslationPrompt] = React.useState<MyPrompt | null>(null);
  const [memoPrompt, setMemoPrompt] = React.useState<MyPrompt | null>(null);
  const [inlineEdit, setInlineEdit] = React.useState<{ id: string; field: string } | null>(null);
  const [stockFrameCount, setStockFrameCount] = React.useState(5);
  const tags = Array.from(new Set(prompts.flatMap((p: MyPrompt) => p.tags))).sort();
  const filtered = prompts.filter((item: MyPrompt) => {
    const haystack = `${item.title} ${item.category} ${item.description} ${item.prompt} ${item.note} ${item.tags.join(" ")}`;
    return lowerIncludes(haystack, query) && (tag === "すべて" || item.tags.includes(tag)) && (!favoritesOnly || item.favorite);
  });
  const imagePrompts = filtered.filter((item: MyPrompt) => !item.isTextStock).slice(0, 20);
  const textPrompts = filtered.filter((item: MyPrompt) => item.isTextStock);
  const imagePromptCount = prompts.filter((item: MyPrompt) => !item.isTextStock).length;
  const textStockCount = prompts.filter((item: MyPrompt) => item.isTextStock).length;
  const canAddImagePrompt = imagePromptCount < 20;
  const canAddTextStock = textStockCount < 100;
  const imageSlotCount = imagePrompts.length < 20 ? Math.max(8, Math.ceil((imagePrompts.length + 1) / 4) * 4) : 20;
  const imagePromptSlots = Array.from({ length: imageSlotCount }, (_, index) => imagePrompts[index] || null);
  const visibleStockFrameCount = Math.min(100, Math.max(5, stockFrameCount, textPrompts.length));
  const textStockSlots = Array.from({ length: visibleStockFrameCount }, (_, index) => textPrompts[index] || null);
  const save = (item: MyPrompt) => {
    const countForKind = prompts.filter((prompt: MyPrompt) => Boolean(prompt.isTextStock) === Boolean(item.isTextStock)).length;
    const limit = item.isTextStock ? 100 : 20;
    if (!item.id && countForKind >= limit) {
      setEditing(null);
      return;
    }
    const next = {
      ...item,
      id: item.id || uid(),
      imageUrl: item.isTextStock ? "" : item.imageUrl || "",
      japaneseTranslation: item.japaneseTranslation || item.prompt,
      memo: item.memo || item.note || "",
      note: item.note || item.memo || "",
      tags: item.tags || [],
      favorite: Boolean(item.favorite),
    };
    setPrompts((items: MyPrompt[]) => item.id ? items.map((p) => p.id === item.id ? next : p) : [...items, next]);
    setEditing(null);
  };
  const updatePrompt = (id: string, patch: Partial<MyPrompt>) => {
    setPrompts((items: MyPrompt[]) => items.map((prompt) => prompt.id === id ? { ...prompt, ...patch } : prompt));
  };
  const duplicatePrompt = (prompt: MyPrompt) => {
    const countForKind = prompts.filter((item: MyPrompt) => Boolean(item.isTextStock) === Boolean(prompt.isTextStock)).length;
    if (countForKind >= (prompt.isTextStock ? 100 : 20)) return;
    setPrompts((items: MyPrompt[]) => [...items, { ...prompt, id: uid(), title: `${prompt.title} コピー` }]);
  };
  const saveTextStockFrame = (item: MyPrompt) => {
    if (!item.title.trim() && !item.prompt.trim()) return;
    save({ ...item, isTextStock: true, imageUrl: "" });
  };
  const addTextStockFrame = () => {
    if (!canAddTextStock) return;
    setStockFrameCount((count) => Math.min(100, count + 1));
  };
  return (
    <section className="page prompt-book-page">
      <PageHead title="プロンプト帳" action={<span className="prompt-count-pill">画像 {imagePromptCount} / 20・ストック {textStockCount} / 100</span>} />
      <Filters>
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="検索" />
        <select value={tag} onChange={(e) => setTag(e.target.value)}>
          <option>すべて</option>
          {tags.map((item: string) => <option key={item}>{item}</option>)}
        </select>
        <label className="check"><input type="checkbox" checked={favoritesOnly} onChange={(e) => setFavoritesOnly(e.target.checked)} /> お気に入りのみ</label>
      </Filters>
      <section className="prompt-area">
        <div className="prompt-area-head">
          <div>
            <h3>画像付きプロンプト</h3>
            <p>お気に入り・よく使うプロンプトを、最大20個まで保存できます。</p>
          </div>
        </div>
        <div className="library-prompt-grid">
          {imagePromptSlots.map((prompt, index) => prompt ? (
            <LibraryImagePromptCard
              key={prompt.id}
              prompt={prompt}
              inlineEdit={inlineEdit}
              setInlineEdit={setInlineEdit}
              updatePrompt={updatePrompt}
              duplicatePrompt={duplicatePrompt}
              deletePrompt={() => setPrompts((items: MyPrompt[]) => items.filter((item) => item.id !== prompt.id))}
              copyText={copyText}
              showTranslation={() => setTranslationPrompt(prompt)}
              showMemo={() => setMemoPrompt(prompt)}
            />
          ) : canAddImagePrompt ? (
            <button className="add-prompt-card" key={`my-empty-prompt-${index}`} onClick={() => setEditing(blankPrompt())}>
              <span>＋</span>
              <strong>新しいプロンプト</strong>
            </button>
          ) : null)}
        </div>
      </section>
      <section className="prompt-area text-prompt-area">
        <div className="prompt-area-head">
          <div>
            <h3>プロンプトストック</h3>
            <p>画像を設定しないプロンプトはこちらに保存します。最大100件まで保存できます。</p>
          </div>
        </div>
        <div className="text-prompt-list">
          {textStockSlots.map((prompt, index) => (
            <TextStockFrame
              key={prompt?.id || `my-stock-frame-${index}`}
              prompt={prompt}
              blankPrompt={blankPrompt(true)}
              onCreate={saveTextStockFrame}
              onUpdate={updatePrompt}
              copyText={copyText}
              showTranslation={() => prompt && setTranslationPrompt(prompt)}
              showMemo={() => prompt && setMemoPrompt(prompt)}
            />
          ))}
        </div>
        {canAddTextStock && textStockCount >= visibleStockFrameCount && (
          <button className="add-stock-button" onClick={addTextStockFrame}>＋ プロンプトを追加</button>
        )}
        {!canAddTextStock && <p className="limit-message">保存上限（100件）に達しました</p>}
      </section>
      {editing && <PromptModal item={editing} onClose={() => setEditing(null)} onSave={save} />}
      {translationPrompt && <TranslationModal prompt={translationPrompt} onClose={() => setTranslationPrompt(null)} copyText={copyText} />}
      {memoPrompt && (
        <MemoModal
          prompt={{ ...memoPrompt, memo: memoPrompt.memo || memoPrompt.note }}
          onClose={() => setMemoPrompt(null)}
          onSave={(memo) => {
            updatePrompt(memoPrompt.id, { memo, note: memo });
            setMemoPrompt(null);
          }}
        />
      )}
    </section>
  );
}

function Midjourney({ settings, setSettings, copyText }: any) {
  const [query, setQuery] = React.useState("");
  const [basePrompt, setBasePrompt] = React.useState("");
  const [promptEn, setPromptEn] = React.useState("");
  const [promptJa, setPromptJa] = React.useState("");
  const [activeLanguage, setActiveLanguage] = React.useState<"en" | "ja">("en");
  const [selectedParams, setSelectedParams] = React.useState<string[]>([]);
  const [fullPrompt, setFullPrompt] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [memo, setMemo] = React.useState("");
  const [editingId, setEditingId] = React.useState("");
  const [copied, setCopied] = React.useState(false);
  const [imageModal, setImageModal] = React.useState<{ images: any[]; index: number } | null>(null);
  const [highlightedId, setHighlightedId] = React.useState("");
  const normalizedSettings = settings.map((item: MjSetting) => normalizeMjSetting(item));
  const filtered = normalizedSettings.filter((item: MjSetting) => lowerIncludes(`${item.memo || ""} ${item.note || ""} ${mjCommand(item)} ${(item.extractedParams || []).join(" ")}`, query));
  const saveLimitReached = settings.length >= 50 && !editingId;
  const currentParams = parseMidjourneyPrompt(fullPrompt).params;
  const displayedPrompt = activeLanguage === "en" ? promptEn : promptJa;
  const completePrompt = combinePrompt(displayedPrompt, currentParams);
  const canSave = Boolean(completePrompt.trim()) && !saveLimitReached;
  const showEmptySlots = !query.trim();
  const shelfSlotCount = showEmptySlots
    ? (settings.length < 3 ? 3 : Math.min(50, filtered.length + (settings.length < 50 ? 1 : 0)))
    : filtered.length;
  const shelfSlots = Array.from({ length: shelfSlotCount }, (_, index) => filtered[index] || null);
  const imageSearchItems = normalizedSettings.flatMap((item: MjSetting) => (item.images || []).map((image, index) => ({ image, cardId: item.id, index })));
  const updatePromptField = (value: string) => {
    setBasePrompt(value);
    if (activeLanguage === "en") setPromptEn(value);
    if (activeLanguage === "ja") setPromptJa(value);
  };
  const switchPromptLanguage = () => {
    if (activeLanguage === "en") {
      const english = displayedPrompt || promptEn;
      const japanese = promptJa || english;
      setPromptEn(english);
      setPromptJa(japanese);
      setBasePrompt(japanese);
      setActiveLanguage("ja");
      return;
    }
    const japanese = displayedPrompt || promptJa;
    const english = promptEn || japanese;
    setPromptJa(japanese);
    setPromptEn(english);
    setBasePrompt(english);
    setActiveLanguage("en");
  };
  const applyParamFromCard = (param: string) => {
    const key = mjParamKey(param);
    const parsed = parseMidjourneyPrompt(fullPrompt);
    const replaceSameKind = mjReplaceKeys.includes(key);
    const current = parsed.params;
    const alreadyExists = current.includes(param);
    const next = alreadyExists
      ? current
      : replaceSameKind
        ? [...current.filter((item) => mjParamKey(item) !== key), param]
        : [...current.filter((item) => item !== param), param];
    setSelectedParams(next);
    setFullPrompt(combinePrompt("", next));
  };
  const copyFullPrompt = async () => {
    await copyText(completePrompt);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };
  const copyParams = async () => {
    await copyText(fullPrompt);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };
  const clearComposer = () => {
    setBasePrompt("");
    setPromptEn("");
    setPromptJa("");
    setActiveLanguage("en");
    setSelectedParams([]);
    setFullPrompt("");
    setTitle("");
    setImageUrl("");
    setMemo("");
    setEditingId("");
  };
  const save = () => {
    if (!canSave) return;
    const parsed = parseMidjourneyPrompt(fullPrompt);
    const images = splitImageUrls(imageUrl);
    const normalized = normalizeMjSetting({
      id: editingId,
      title: title || "無題のMJ設定",
      description: memo,
      imageUrl: images[0] || "",
      images,
      prompt: combinePrompt(displayedPrompt, parsed.params.length ? parsed.params : selectedParams),
      promptEn: activeLanguage === "en" ? displayedPrompt : promptEn,
      promptJa: activeLanguage === "ja" ? displayedPrompt : promptJa,
      activeLanguage,
      memo,
      note: memo,
      basePrompt: displayedPrompt,
      originalPrompt: activeLanguage === "en" ? displayedPrompt : promptEn,
      translatedPrompt: activeLanguage === "ja" ? displayedPrompt : promptJa,
      englishPrompt: activeLanguage === "en" ? displayedPrompt : promptEn,
      japanesePrompt: activeLanguage === "ja" ? displayedPrompt : promptJa,
      extractedParams: parsed.params.length ? parsed.params : selectedParams,
      fullPrompt: combinePrompt(displayedPrompt, parsed.params.length ? parsed.params : selectedParams),
      extra: displayedPrompt,
      createdAt: editingId ? settings.find((item: MjSetting) => item.id === editingId)?.createdAt : new Date().toISOString(),
    } as MjSetting);
    setSettings((items: MjSetting[]) => editingId ? items.map((item) => item.id === editingId ? normalized : item) : [normalized, ...items]);
    clearComposer();
  };
  const updateSavedSetting = (id: string, patch: Partial<MjSetting>) => {
    setSettings((items: MjSetting[]) => items.map((setting) => {
      if (setting.id !== id) return setting;
      const current = normalizeMjSetting(setting);
      const merged = normalizeMjSetting({ ...current, ...patch, id, createdAt: current.createdAt });
      return { ...merged, createdAt: current.createdAt };
    }));
  };
  const addEmptySavedSetting = () => {
    if (settings.length >= 50) return;
    const created = normalizeMjSetting({
      id: uid(),
      title: "新しいMJプロンプト",
      description: "",
      memo: "",
      note: "",
      prompt: "",
      promptEn: "",
      promptJa: "",
      activeLanguage: "en",
      basePrompt: "",
      originalPrompt: "",
      translatedPrompt: "",
      englishPrompt: "",
      japanesePrompt: "",
      extractedParams: [],
      fullPrompt: "",
      images: [],
      imageUrl: "",
      extra: "",
      createdAt: new Date().toISOString(),
    } as MjSetting);
    setSettings((items: MjSetting[]) => [created, ...items]);
  };
  const jumpToCard = (cardId: string) => {
    setQuery("");
    setHighlightedId(cardId);
    window.setTimeout(() => {
      document.getElementById(`mj-card-${cardId}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 80);
    window.setTimeout(() => setHighlightedId(""), 1800);
  };
  return (
    <section className="page mj-board-page">
      <PageHead title="Midjourneyパラメータ制作ボード" action={<button className="primary" onClick={save} disabled={!canSave}>完成プロンプトを保存</button>} />
      <div className="mj-workspace">
        <aside className="mj-builder-panel">
          <section className="mj-input-panel">
            <div className="mj-field-head">
              <h3>プロンプト</h3>
            </div>
            <textarea
              className="mj-base-input"
              value={displayedPrompt}
              onChange={(event) => updatePromptField(event.target.value)}
              placeholder={activeLanguage === "en" ? "例：cute pastel clipart, white background, no shadow" : "ここに日本語訳を入力してください"}
            />
            <h3>パラメータ</h3>
            <p className="mj-help-text">✨ 右側の抽出済みパラメータをクリックすると、ここへ追加できます。</p>
            <textarea className="mj-final-input" value={fullPrompt} onChange={(event) => setFullPrompt(event.target.value)} placeholder="例：--ar 1:1 --stylize 50 --chaos 10 --raw" />
            <div className="mj-save-grid">
              <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="保存タイトル" />
              <textarea value={imageUrl} onChange={(event) => setImageUrl(event.target.value)} placeholder="サンプル画像URL（最大5件・改行またはカンマ区切り）" />
              <textarea value={memo} onChange={(event) => setMemo(event.target.value)} placeholder="メモ" />
            </div>
            <div className="mj-composer-actions">
              <button className="primary" onClick={copyFullPrompt} disabled={!completePrompt.trim()}>📋 プロンプトをコピー</button>
              <button onClick={copyParams} disabled={!fullPrompt.trim()}>📋 パラメータをコピー</button>
              <button onClick={save} disabled={!canSave}>完成プロンプトを保存</button>
              {editingId && <button onClick={clearComposer}>新規作成に戻る</button>}
              {copied && <span>コピーしました</span>}
            </div>
            {saveLimitReached && <p className="limit-message">保存上限（50件）に達しました</p>}
          </section>
        </aside>
        <section className="mj-saved-shelf">
          <div className="mj-shelf-head">
            <div>
              <h3>クイック検索</h3>
              <p>保存したMJプロンプトを、ワードや画像から探せます。</p>
            </div>
            <Filters><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="プロンプトやメモを検索..." /></Filters>
            <div className="mj-image-search">
              <strong>画像から探す</strong>
              <div className="mj-image-search-grid">
                {imageSearchItems.length ? imageSearchItems.map((item) => (
                  <button key={`${item.cardId}-${item.index}-${imageSrc(item.image)}`} onClick={() => jumpToCard(item.cardId)}>
                    <img src={imageThumbnail(item.image)} alt="" />
                  </button>
                )) : <small>画像を登録すると、ここから探せます。</small>}
              </div>
            </div>
          </div>
          <div className="mj-card-grid">
            {shelfSlots.map((raw: MjSetting | null, index) => {
              if (!raw) {
                return settings.length < 50 ? (
                  <button className="mj-empty-card" key={`mj-empty-${index}`} onClick={addEmptySavedSetting}>
                    <span>＋</span>
                    <strong>新しいMJプロンプト</strong>
                  </button>
                ) : null;
              }
              const item = normalizeMjSetting(raw);
              return (
                <MJEditableCard
                  key={item.id}
                  item={item}
                  highlighted={highlightedId === item.id}
                  onUpdate={(patch: Partial<MjSetting>) => updateSavedSetting(item.id, patch)}
                  onDelete={() => setSettings((items: MjSetting[]) => items.filter((setting) => setting.id !== item.id))}
                  onCopyPrompt={() => copyText(mjCommand(item), item.id)}
                  onCopyParams={() => copyText((item.extractedParams || []).join(" "), item.id)}
                  onParamClick={applyParamFromCard}
                  onOpenImage={(imageIndex: number) => setImageModal({ images: item.images || [], index: imageIndex })}
                />
              );
            })}
            {settings.length >= 50 && <p className="limit-message">保存上限（50件）に達しました</p>}
          </div>
        </section>
      </div>
      {imageModal && <ImagePreviewModal modal={imageModal} setModal={setImageModal} />}
    </section>
  );
}

function parseMidjourneyPrompt(value: string) {
  const params = Array.from(value.matchAll(/--[a-zA-Z0-9-]+(?:\s+(?!--)[^\s]+)*/g)).map((match) => match[0].trim());
  const uniqueParams = Array.from(new Set(params));
  const basePrompt = value.replace(/--[a-zA-Z0-9-]+(?:\s+(?!--)[^\s]+)*/g, " ").replace(/\s+/g, " ").trim();
  return { basePrompt, params: uniqueParams };
}

function splitImageUrls(value: string) {
  return value.split(/[\n,]/).map((item) => item.trim()).filter(Boolean).slice(0, 5);
}

async function fileToDataUrl(file: File) {
  const image = saveImageToStorage(await optimizeImage(file));
  return image.src;
}

function promptCardHeading(prompt: string) {
  const text = prompt.replace(/\s+/g, " ").trim();
  return text ? text.slice(0, 30) : "新しいMJプロンプト";
}

function MJEditableCard({ item, highlighted, onUpdate, onDelete, onCopyPrompt, onCopyParams, onParamClick, onOpenImage }: any) {
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);
  const [imageMessage, setImageMessage] = React.useState("");
  const [isDragging, setIsDragging] = React.useState(false);
  const [isEditingTitle, setIsEditingTitle] = React.useState(false);
  const [slideIndex, setSlideIndex] = React.useState(0);
  const [titleDraft, setTitleDraft] = React.useState(item.title || "");
  React.useEffect(() => {
    setTitleDraft(item.title || "");
  }, [item.id, item.title]);
  React.useEffect(() => {
    const images = item.images || [];
    if (slideIndex >= images.length) setSlideIndex(0);
  }, [item.id, (item.images || []).length, slideIndex]);
  React.useEffect(() => {
    const images = item.images || [];
    if (images.length < 2) return;
    const timer = window.setInterval(() => setSlideIndex((current) => (current + 1) % images.length), 3200);
    return () => window.clearInterval(timer);
  }, [item.id, (item.images || []).length]);
  const params = item.extractedParams || [];
  const promptText = mjCommand(item);
  const images = item.images || [];
  const openFilePicker = (event?: any) => {
    event?.preventDefault?.();
    event?.stopPropagation?.();
    console.log("[MJ画像追加] input exists:", Boolean(fileInputRef.current), "cardId:", item.id);
    fileInputRef.current?.click();
  };
  const addImageFiles = async (fileList: FileList | File[]) => {
    const files = Array.from(fileList).filter(isSupportedImageFile);
    console.log("[MJ画像追加] selected files:", files.length, files.map((file) => file.name), "cardId:", item.id);
    if (!files.length) return;
    const remaining = 5 - images.length;
    if (remaining <= 0) {
      setImageMessage("画像は最大5枚までです");
      return;
    }
    if (files.length > remaining) {
      setImageMessage("画像は最大5枚までです");
      return;
    }
    const nextImages = await Promise.all(files.map(optimizeImage));
    nextImages.forEach((image, index) => console.log("[MJ画像追加] base64 prefix:", image.src.slice(0, 30), "file:", files[index]?.name, "cardId:", item.id));
    const updatedImages = [...images, ...nextImages].slice(0, 5);
    console.log("[MJ画像追加] updated images length:", updatedImages.length, "cardId:", item.id);
    setImageMessage("");
    onUpdate({ images: updatedImages, imageUrl: imageSrc(updatedImages[0]) || "" });
  };
  const removeImage = (index: number) => {
    const updatedImages = images.filter((_: any, imageIndex: number) => imageIndex !== index);
    onUpdate({ images: updatedImages, imageUrl: imageSrc(updatedImages[0]) || "" });
  };
  const updatePrompt = (value: string) => {
    const parsed = parseMidjourneyPrompt(value);
    onUpdate({
      title: item.title || promptCardHeading(value),
      prompt: value,
      promptEn: value,
      activeLanguage: item.activeLanguage || "en",
      basePrompt: parsed.basePrompt,
      originalPrompt: value,
      englishPrompt: value,
      extra: parsed.basePrompt,
      extractedParams: parsed.params,
      fullPrompt: value,
    });
  };
  const saveTitle = () => {
    const nextTitle = titleDraft.trim() || promptCardHeading(promptText);
    setTitleDraft(nextTitle);
    setIsEditingTitle(false);
    onUpdate({ title: nextTitle });
  };
  return (
    <article id={`mj-card-${item.id}`} className={`mj-card editable-mj-card ${highlighted ? "highlighted" : ""}`}>
      <input
        ref={fileInputRef}
        style={{ display: "none" }}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        multiple
        onClick={(event) => event.stopPropagation()}
        onChange={(event) => {
          event.preventDefault();
          event.stopPropagation();
          if (event.currentTarget.files) addImageFiles(event.currentTarget.files);
          event.currentTarget.value = "";
        }}
      />
      <div
        className={`mj-image-edit-zone ${isDragging ? "dragging" : ""}`}
        role="button"
        tabIndex={0}
        onClick={(event) => {
          if (images.length) {
            event.preventDefault();
            event.stopPropagation();
            onOpenImage(slideIndex);
            return;
          }
          openFilePicker(event);
        }}
        onKeyDown={(event) => {
          if (event.key !== "Enter" && event.key !== " ") return;
          if (images.length) {
            event.preventDefault();
            event.stopPropagation();
            onOpenImage(slideIndex);
            return;
          }
          openFilePicker(event);
        }}
        onDragEnter={(event) => {
          event.preventDefault();
          event.stopPropagation();
          setIsDragging(true);
        }}
        onDragOver={(event) => {
          event.preventDefault();
          event.stopPropagation();
          setIsDragging(true);
        }}
        onDragLeave={(event) => {
          event.preventDefault();
          event.stopPropagation();
          setIsDragging(false);
        }}
        onDrop={(event) => {
          event.preventDefault();
          event.stopPropagation();
          setIsDragging(false);
          addImageFiles(event.dataTransfer.files);
        }}
        onPaste={(event) => {
          const files = clipboardImageFiles(event);
          if (!files.length) return;
          event.preventDefault();
          event.stopPropagation();
          addImageFiles(files);
        }}
      >
        {images.length ? (
          <>
            <div className="mj-card-image image-only-button">
              <img src={imageThumbnail(images[slideIndex] || images[0])} alt="" />
              {images.length > 1 && (
                <span className="image-dots">
                  {images.map((_: any, dotIndex: number) => <i key={dotIndex} className={dotIndex === slideIndex ? "active" : ""} />)}
                </span>
              )}
            </div>
          </>
        ) : <PromptThumbnail imageUrl="" />}
        <span className="drop-hint">ここへドロップ</span>
        <button
          type="button"
          className="image-edit-toggle"
          onClick={openFilePicker}
        >
          画像を追加
        </button>
      </div>
      {images.length > 0 && (
        <div className="image-url-list image-delete-list">
          {images.map((image: any, index: number) => (
            <button type="button" key={`${imageSrc(image)}-${index}`} onClick={() => removeImage(index)}>画像{index + 1}を削除</button>
          ))}
        </div>
      )}
      {imageMessage && <small className="image-message">{imageMessage}</small>}
      <div className="mj-card-body">
        {isEditingTitle ? (
          <input
            className="mj-title-edit-input"
            value={titleDraft}
            autoFocus
            onChange={(event) => setTitleDraft(event.target.value)}
            onBlur={saveTitle}
            onKeyDown={(event) => {
              if (event.key === "Enter") saveTitle();
              if (event.key === "Escape") {
                setTitleDraft(item.title || "");
                setIsEditingTitle(false);
              }
            }}
          />
        ) : (
          <button type="button" className="mj-derived-title" onClick={() => setIsEditingTitle(true)}>
            {item.title || promptCardHeading(promptText)}
          </button>
        )}
        <small className="mj-date">保存日：{formatSavedAt(item.createdAt)}</small>
        <label className="mj-edit-field">
          <span>プロンプト</span>
          <textarea
            className="mj-card-textarea prompt"
            value={promptText}
            onChange={(event) => updatePrompt(event.target.value)}
            placeholder="MJプロンプトを入力すると、パラメータを自動抽出します"
          />
        </label>
        <label className="mj-edit-field">
          <span>メモ</span>
          <textarea
            className="mj-card-textarea memo"
            value={item.memo || ""}
            onChange={(event) => onUpdate({ memo: event.target.value, note: event.target.value, description: event.target.value })}
            placeholder="メモ"
          />
        </label>
        <div>
          <span className="mj-param-label">抽出済みパラメータ</span>
          <div className="mj-param-pills compact">
            {params.length ? params.map((param: string) => (
              <button type="button" key={param} onClick={() => onParamClick(param)}>{param}</button>
            )) : <small>パラメータなし</small>}
          </div>
        </div>
        <div className="mj-card-actions">
          <button type="button" className="primary" onClick={onCopyPrompt}>📋 プロンプトをコピー</button>
          <button type="button" onClick={onCopyParams}>📋 パラメータをコピー</button>
          <button type="button" className="danger" onClick={onDelete}>削除</button>
        </div>
      </div>
    </article>
  );
}

function ImagePreviewModal({ modal, setModal }: any) {
  const { images, index } = modal;
  const move = (direction: number) => setModal({ images, index: (index + direction + images.length) % images.length });
  return (
    <Modal title="画像プレビュー" onClose={() => setModal(null)}>
      <div className="image-preview-modal">
        <img src={imageSrc(images[index])} alt="" />
        <div className="modal-actions">
          {images.length > 1 && <button onClick={() => move(-1)}>前へ</button>}
          {images.length > 1 && <button onClick={() => move(1)}>次へ</button>}
          <button className="primary" onClick={() => setModal(null)}>閉じる</button>
        </div>
      </div>
    </Modal>
  );
}

function combinePrompt(basePrompt: string, params: string[]) {
  return [basePrompt, ...params].filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
}

function normalizeMjSetting(item: Partial<MjSetting>): MjSetting {
  const legacyPrompt = mjCommandLegacy(item as MjSetting);
  const fullPrompt = item.prompt || item.fullPrompt || legacyPrompt;
  const parsed = parseMidjourneyPrompt(fullPrompt);
  const params = item.extractedParams?.length ? item.extractedParams : parsed.params;
  const basePrompt = item.basePrompt || parsed.basePrompt || item.extra || "";
  const originalPrompt = item.originalPrompt || item.englishPrompt || fullPrompt || basePrompt;
  const translatedPrompt = item.translatedPrompt || item.japanesePrompt || "";
  const promptEn = item.promptEn || originalPrompt || fullPrompt || "";
  const promptJa = item.promptJa || translatedPrompt || "";
  const activeLanguage = item.activeLanguage === "ja" ? "ja" : "en";
  const images = (Array.isArray(item.images) ? item.images : item.imageUrl ? [item.imageUrl] : []).slice(0, 5).map(normalizeImageData);
  return {
    id: item.id || uid(),
    title: item.title || "無題のMJ設定",
    description: item.description || item.memo || item.note || "",
    images,
    imageUrl: imageSrc(images[0]) || item.imageUrl || "",
    prompt: fullPrompt || combinePrompt(basePrompt, params),
    promptEn,
    promptJa,
    activeLanguage,
    memo: item.memo || item.note || item.description || "",
    basePrompt,
    originalPrompt,
    translatedPrompt,
    englishPrompt: item.englishPrompt || originalPrompt || basePrompt,
    japanesePrompt: item.japanesePrompt || translatedPrompt,
    extractedParams: params,
    fullPrompt: item.fullPrompt || combinePrompt(basePrompt, params),
    ar: item.ar || "",
    stylize: item.stylize || "",
    chaos: item.chaos || "",
    profile: item.profile || "",
    seed: item.seed || "",
    raw: Boolean(item.raw),
    extra: item.extra || basePrompt,
    note: item.note || item.memo || "",
    createdAt: item.createdAt || "",
  };
}

function formatSavedAt(value?: string) {
  if (!value) return "未設定";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "未設定";
  const pad = (num: number) => String(num).padStart(2, "0");
  return `${date.getFullYear()}/${pad(date.getMonth() + 1)}/${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function mjCommandLegacy(item: MjSetting) {
  return [
    item.extra,
    item.ar && `--ar ${item.ar}`,
    item.stylize && `--stylize ${item.stylize}`,
    item.chaos && `--chaos ${item.chaos}`,
    item.raw && "--raw",
    item.profile && `--profile ${item.profile}`,
    item.seed && `--seed ${item.seed}`,
  ].filter(Boolean).join(" ");
}

function GalleryPage({ images, setImages, setJournal, setScreen }: any) {
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);
  const [previewId, setPreviewId] = React.useState("");
  const preview = images.find((image: AtelierImage) => image.id === previewId) || null;
  const addFiles = async (fileList: FileList | File[]) => {
    const files = Array.from(fileList).filter(isSupportedImageFile);
    if (!files.length) return;
    const remaining = 200 - images.length;
    if (remaining <= 0) {
      window.alert("ギャラリー画像は最大200枚までです");
      return;
    }
    const optimizedImages = await Promise.all(files.slice(0, remaining).map(optimizeImage));
    if (files.length > remaining) window.alert("ギャラリー画像は最大200枚までです");
    const nextImages = optimizedImages.map((image, index) => ({
      ...image,
      title: files[index].name.replace(/\.[^.]+$/, ""),
      memo: "",
      originalName: files[index].name,
      source: "gallery",
      favorite: false,
    }));
    setImages((items: AtelierImage[]) => [...nextImages, ...items]);
  };
  const updateImage = (id: string, patch: Partial<AtelierImage>) => {
    setImages((items: AtelierImage[]) => items.map((item) => item.id === id ? { ...item, ...patch } : item));
  };
  const deleteImage = (id: string) => {
    setImages((items: AtelierImage[]) => items.filter((item) => item.id !== id));
    setPreviewId("");
  };
  const pasteToJournal = (image: AtelierImage) => {
    const item: JournalItem = {
      id: uid(),
      imageId: image.id,
      src: image.src,
      thumbnail: image.thumbnail || image.src,
      x: 96,
      y: 96,
      width: 190,
      rotate: -4,
      sticker: true,
    };
    setJournal((current: JournalState) => ({ ...current, items: [...(current.items || []), item] }));
    setScreen("journal");
  };
  return (
    <section
      className="page gallery-page"
      tabIndex={0}
      onDragOver={(event) => event.preventDefault()}
      onDrop={(event) => {
        event.preventDefault();
        event.stopPropagation();
        addFiles(event.dataTransfer.files);
      }}
      onPaste={(event) => {
        const files = clipboardImageFiles(event);
        if (!files.length) return;
        event.preventDefault();
        event.stopPropagation();
        addFiles(files);
      }}
    >
      <PageHead
        title="ギャラリー"
        action={<div className="actions"><button onClick={() => setScreen("home")}>ホームへ</button><button onClick={() => setScreen("journal")}>ジャーナルへ</button><button className="primary" onClick={() => fileInputRef.current?.click()}>＋ 画像を追加</button></div>}
      />
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        multiple
        style={{ display: "none" }}
        onChange={(event) => {
          if (event.currentTarget.files) addFiles(event.currentTarget.files);
          event.currentTarget.value = "";
        }}
      />
      {images.length ? (
        <div className="gallery-grid">
          {images.map((image: AtelierImage) => (
            <article className="gallery-card" key={image.id}>
              <button className="gallery-favorite-button" aria-label="お気に入り" onClick={() => updateImage(image.id, { favorite: !image.favorite })}>
                {image.favorite ? "♥" : "♡"}
              </button>
              <button className="gallery-image-button" onClick={() => setPreviewId(image.id)}>
                <img src={image.thumbnail || image.src} alt="" />
              </button>
            </article>
          ))}
        </div>
      ) : <Empty text="画像を追加すると、ここにギャラリーが表示されます。" />}
      {preview && (
        <Modal title={preview.title || "画像詳細"} onClose={() => setPreviewId("")}>
          <div className="gallery-detail-modal">
            <img src={preview.src} alt="" />
            <label>タイトル<input value={preview.title} onChange={(event) => updateImage(preview.id, { title: event.target.value })} placeholder="タイトル" /></label>
            <label>メモ<textarea value={preview.memo} onChange={(event) => updateImage(preview.id, { memo: event.target.value })} placeholder="メモ" /></label>
            <small>追加日：{formatSavedAt(preview.createdAt)}</small>
            <label className="check"><input type="checkbox" checked={preview.favorite} onChange={(event) => updateImage(preview.id, { favorite: event.target.checked })} /> お気に入り</label>
            <div className="modal-actions">
              <button onClick={() => pasteToJournal(preview)}>ジャーナルに貼る</button>
              <button className="danger" onClick={() => deleteImage(preview.id)}>削除</button>
              <button className="primary" onClick={() => setPreviewId("")}>閉じる</button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}

function JournalPage({ images, journal, setJournal, setGalleryImages, setScreen }: any) {
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);
  const backgroundInputRef = React.useRef<HTMLInputElement | null>(null);
  const [draggingId, setDraggingId] = React.useState("");
  const [selectedId, setSelectedId] = React.useState("");
  const [isBackgroundDragging, setIsBackgroundDragging] = React.useState(false);
  const boardRef = React.useRef<HTMLDivElement | null>(null);
  const selected = journal.items.find((item: JournalItem) => item.id === selectedId);
  const customBackgrounds = journal.customBackgrounds || [];
  const selectedCustomBackground = customBackgrounds.find((item: AtelierImage) => journal.background === `custom-${item.id}`);
  const addJournalItem = (image: AtelierImage) => {
    const normalized = { ...image, src: imageSrc(image), thumbnail: imageThumbnail(image) };
    const item: JournalItem = {
      id: uid(),
      imageId: normalized.id,
      src: normalized.src,
      thumbnail: normalized.thumbnail,
      x: 80 + journal.items.length * 18,
      y: 80 + journal.items.length * 14,
      width: 170,
      rotate: (journal.items.length % 5) * 4 - 8,
      sticker: true,
    };
    setJournal((current: JournalState) => ({ ...current, items: [...current.items, item] }));
    setSelectedId(item.id);
  };
  const addFiles = async (fileList: FileList | File[]) => {
    const files = Array.from(fileList).filter(isSupportedImageFile);
    if (!files.length) return;
    const currentCount = journal.items.length || 0;
    const remaining = 100 - currentCount;
    if (remaining <= 0) {
      window.alert("ジャーナル1ページの画像は最大100枚までです");
      return;
    }
    const optimizedImages = await Promise.all(files.slice(0, remaining).map(optimizeImage));
    if (files.length > remaining) window.alert("ジャーナル1ページの画像は最大100枚までです");
    const nextImages = optimizedImages.map((image, index) => ({
      ...image,
      title: files[index].name.replace(/\.[^.]+$/, ""),
      memo: "ジャーナルから追加",
      source: "journal",
      favorite: false,
    }));
    setGalleryImages((items: AtelierImage[]) => [...nextImages, ...items]);
    nextImages.forEach(addJournalItem);
  };
  const addBackgroundFiles = async (fileList: FileList | File[]) => {
    const files = Array.from(fileList).filter(isSupportedImageFile);
    if (!files.length) return;
    const currentBackgrounds = customBackgrounds.length;
    const remaining = 20 - currentBackgrounds;
    if (remaining <= 0) {
      window.alert("背景画像は最大20枚までです");
      return;
    }
    const optimizedBackgrounds = await Promise.all(files.slice(0, remaining).map(optimizeImage));
    if (files.length > remaining) window.alert("背景画像は最大20枚までです");
    const nextBackgrounds = optimizedBackgrounds.map((image, index) => ({
      ...image,
      title: files[index].name.replace(/\.[^.]+$/, "") || `お気に入り背景${index + 1}`,
      memo: "",
      source: "journal-background",
      favorite: false,
    }));
    setJournal((current: JournalState) => ({
      ...current,
      customBackgrounds: [...nextBackgrounds, ...(current.customBackgrounds || [])],
      background: `custom-${nextBackgrounds[0].id}`,
    }));
  };
  const updateBackground = (id: string, patch: Partial<AtelierImage>) => {
    setJournal((current: JournalState) => ({
      ...current,
      customBackgrounds: (current.customBackgrounds || []).map((item) => item.id === id ? { ...item, ...patch } : item),
    }));
  };
  const deleteBackground = (id: string) => {
    setJournal((current: JournalState) => {
      const nextBackgrounds = (current.customBackgrounds || []).filter((item) => item.id !== id);
      return { ...current, customBackgrounds: nextBackgrounds, background: current.background === `custom-${id}` ? "paper" : current.background };
    });
  };
  const updateItem = (id: string, patch: Partial<JournalItem>) => {
    setJournal((current: JournalState) => ({ ...current, items: current.items.map((item) => item.id === id ? { ...item, ...patch } : item) }));
  };
  const moveItem = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingId || !boardRef.current) return;
    const rect = boardRef.current.getBoundingClientRect();
    updateItem(draggingId, { x: event.clientX - rect.left - 60, y: event.clientY - rect.top - 60 });
  };
  return (
    <section className="page journal-page">
      <PageHead
        title="ジャーナル"
        action={<div className="actions"><button onClick={() => setScreen("home")}>ホームへ</button><button onClick={() => setScreen("gallery")}>ギャラリーへ</button><button className="primary" onClick={() => fileInputRef.current?.click()}>＋ 画像を追加</button></div>}
      />
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        multiple
        style={{ display: "none" }}
        onChange={(event) => {
          if (event.currentTarget.files) addFiles(event.currentTarget.files);
          event.currentTarget.value = "";
        }}
      />
      <input
        ref={backgroundInputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        multiple
        style={{ display: "none" }}
        onChange={(event) => {
          if (event.currentTarget.files) addBackgroundFiles(event.currentTarget.files);
          event.currentTarget.value = "";
        }}
      />
      <div className="journal-layout">
        <aside className="journal-tools">
          <label>背景
            <select value={journal.background} onChange={(event) => setJournal((current: JournalState) => ({ ...current, background: event.target.value }))}>
              <option value="paper">無地アイボリー</option>
              <option value="grid">方眼紙</option>
              <option value="dot-grid">ドット方眼</option>
              <option value="kraft">クラフト紙</option>
              <option value="old-paper">古紙</option>
              <option value="pink">淡いピンク</option>
              <option value="blue">淡いブルー</option>
              <option value="green">淡いグリーン</option>
              <option value="linen">リネン風</option>
              <option value="washi">マスキングテープ風</option>
              <option value="scrapbook">スクラップブック風</option>
              <option value="lined">罫線ノート</option>
              <option value="check">チェック柄</option>
              <option value="floral">薄い花柄</option>
              <option value="watercolor">水彩にじみ</option>
              <option value="dark">ダーク紙</option>
              {customBackgrounds.map((background: AtelierImage) => <option key={background.id} value={`custom-${background.id}`}>{background.title || "お気に入り背景"}</option>)}
            </select>
          </label>
          <div
            className={`journal-background-drop ${isBackgroundDragging ? "dragging" : ""}`}
            onDragOver={(event) => event.preventDefault()}
            onDragEnter={(event) => {
              event.preventDefault();
              setIsBackgroundDragging(true);
            }}
            onDragLeave={() => setIsBackgroundDragging(false)}
            onDrop={(event) => {
              event.preventDefault();
              setIsBackgroundDragging(false);
              addBackgroundFiles(event.dataTransfer.files);
            }}
          >
            <button type="button" onClick={() => backgroundInputRef.current?.click()}>＋ 背景を追加</button>
            <small>画像をドロップして背景にできます</small>
          </div>
          {selectedCustomBackground && (
            <div className="journal-background-editor">
              <label>背景名<input value={selectedCustomBackground.title} onChange={(event) => updateBackground(selectedCustomBackground.id, { title: event.target.value })} /></label>
              <button className="danger" onClick={() => deleteBackground(selectedCustomBackground.id)}>背景を削除</button>
            </div>
          )}
          <strong>画像ストック</strong>
          <div className="journal-stock">
            {images.slice(0, 18).map((image: AtelierImage) => (
              <button key={image.id} onClick={() => addJournalItem(image)}><img src={image.thumbnail || image.src} alt="" /></button>
            ))}
          </div>
          {selected && (
            <div className="journal-edit-panel">
              <label>サイズ<input type="range" min="80" max="360" value={selected.width} onChange={(event) => updateItem(selected.id, { width: Number(event.target.value) })} /></label>
              <label>回転<input type="range" min="-35" max="35" value={selected.rotate} onChange={(event) => updateItem(selected.id, { rotate: Number(event.target.value) })} /></label>
              <label className="check"><input type="checkbox" checked={selected.sticker !== false} onChange={(event) => updateItem(selected.id, { sticker: event.target.checked })} /> シール風</label>
              <button className="danger" onClick={() => setJournal((current: JournalState) => ({ ...current, items: current.items.filter((item) => item.id !== selected.id) }))}>選択画像を削除</button>
            </div>
          )}
        </aside>
        <div
          ref={boardRef}
          className={`journal-board ${journal.background}`}
          tabIndex={0}
          style={selectedCustomBackground ? { backgroundImage: `linear-gradient(rgba(255,255,255,0.08), rgba(255,255,255,0.08)), url(${selectedCustomBackground.src})` } : undefined}
          onPointerMove={moveItem}
          onPointerUp={() => setDraggingId("")}
          onPointerLeave={() => setDraggingId("")}
          onDragOver={(event) => event.preventDefault()}
          onDrop={(event) => {
            event.preventDefault();
            event.stopPropagation();
            addFiles(event.dataTransfer.files);
          }}
          onPaste={(event) => {
            const files = clipboardImageFiles(event);
            if (!files.length) return;
            event.preventDefault();
            event.stopPropagation();
            addFiles(files);
          }}
        >
          {journal.items.length ? journal.items.map((item: JournalItem) => (
            <div
              className={`journal-sticker ${selectedId === item.id ? "selected" : ""}`}
              key={item.id}
              style={{ left: item.x, top: item.y, width: item.width, transform: `rotate(${item.rotate}deg)` }}
              onPointerDown={(event) => {
                event.preventDefault();
                setSelectedId(item.id);
                setDraggingId(item.id);
              }}
            >
              <span className={item.sticker !== false ? "sticker-frame sticker-frame-on" : "sticker-frame"}>
                <img className={item.sticker !== false ? "sticker-image sticker-cutout" : "sticker-image"} src={item.src} alt="" draggable={false} />
              </span>
            </div>
          )) : <div className="journal-empty">画像を追加して、シール帳のように並べられます。</div>}
        </div>
      </div>
    </section>
  );
}

function Projects({ projects, setProjects, prompts, settings, copyText }: any) {
  const [editing, setEditing] = React.useState<Project | null>(null);
  const [query, setQuery] = React.useState("");
  const canAddProject = projects.length < 30;
  const filtered = sortProjectsForDisplay(projects.filter((item: Project) => lowerIncludes(`${item.name} ${item.description} ${item.note} ${item.tags.join(" ")}`, query)));
  const save = (item: Project) => {
    const next = { ...item, id: item.id || uid(), updatedAt: new Date().toISOString() };
    setProjects((items: Project[]) => item.id ? items.map((p) => p.id === item.id ? next : p) : [next, ...items].slice(0, 30));
    setEditing(null);
  };
  return (
    <section className="page">
      <PageHead
        title="プロジェクト管理"
        action={canAddProject ? <button className="primary" onClick={() => setEditing(blankProject())}>追加する</button> : <span className="limit-message">プロジェクトは最大30件まで登録できます</span>}
      />
      <Filters><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="プロジェクト名、タグ、メモで検索" /></Filters>
      {!canAddProject && <p className="limit-note">プロジェクトは最大30件まで登録できます</p>}
      <div className="project-grid">
        {filtered.map((project: Project) => {
          const linkedPrompts = prompts.filter((p: MyPrompt) => project.promptIds.includes(p.id));
          const linkedMj = settings.filter((m: MjSetting) => project.mjIds.includes(m.id));
          return (
            <article className="project-card" key={project.id}>
              <div className="project-top">
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="actions">
                  <button onClick={() => setEditing(project)}>編集</button>
                  <button className="danger" onClick={() => setProjects((items: Project[]) => items.filter((p) => p.id !== project.id))}>削除</button>
                </div>
              </div>
              <TagRow tags={project.tags} />
              {project.dueDate && <p className="project-due-line">{projectDueText(project.dueDate)}</p>}
              {project.note && <p className="note">{project.note}</p>}
              <h4>関連プロンプト</h4>
              <div className="mini-list">
                {linkedPrompts.length ? linkedPrompts.map((p: MyPrompt) => <button key={p.id} onClick={() => copyText(p.prompt, p.id)}>{p.title}</button>) : <small>未設定</small>}
              </div>
              <h4>関連ミッドジャーニー設定</h4>
              <div className="mini-list">
                {linkedMj.length ? linkedMj.map((m: MjSetting) => <button key={m.id} onClick={() => copyText(mjCommand(m))}>{m.title}</button>) : <small>未設定</small>}
              </div>
            </article>
          );
        })}
      </div>
      {editing && <ProjectModal item={editing} prompts={prompts} settings={settings} onClose={() => setEditing(null)} onSave={save} />}
    </section>
  );
}

function PromptCard({ prompt, onCopy, extra }: any) {
  return (
    <article className="prompt-card">
      <img src={prompt.imageUrl || art("プロンプト", "#f5eadc", "#e7e7df")} alt="" />
      <div>
        <span className="pill">{prompt.category}</span>
        <h3>{prompt.title}</h3>
        <p>{prompt.description || prompt.note}</p>
        <TagRow tags={prompt.tags} />
        <details>
          <summary>プロンプト本文</summary>
          <p className="prompt-text">{prompt.prompt}</p>
        </details>
      </div>
      <div className="actions">
        <button className="primary" onClick={() => onCopy(prompt.prompt, prompt.id)}>コピー</button>
        {extra}
      </div>
    </article>
  );
}

function PromptModal({ item, onClose, onSave }: any) {
  const [draft, setDraft] = React.useState({ ...item, tagInput: tagText(item.tags) });
  return (
    <Modal title={item.id ? "プロンプトを編集" : "プロンプトを追加"} onClose={onClose}>
      <FormGrid>
        <input value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} placeholder="タイトル" />
        <select value={draft.category} onChange={(e) => setDraft({ ...draft, category: e.target.value })}>{categories.map((cat) => <option key={cat}>{cat}</option>)}</select>
        <textarea value={draft.description} onChange={(e) => setDraft({ ...draft, description: e.target.value })} placeholder="説明" />
        <textarea className="tall" value={draft.prompt} onChange={(e) => setDraft({ ...draft, prompt: e.target.value })} placeholder="プロンプト本文" />
        <textarea value={draft.note} onChange={(e) => setDraft({ ...draft, note: e.target.value })} placeholder="メモ" />
        <input value={draft.tagInput} onChange={(e) => setDraft({ ...draft, tagInput: e.target.value })} placeholder="タグ（カンマ区切り）" />
        <input value={draft.imageUrl} onChange={(e) => setDraft({ ...draft, imageUrl: e.target.value })} placeholder="サンプル画像URL" />
        <label className="check"><input type="checkbox" checked={draft.favorite} onChange={(e) => setDraft({ ...draft, favorite: e.target.checked })} /> お気に入り</label>
      </FormGrid>
      <ModalActions onClose={onClose} onSave={() => onSave({ ...draft, tags: splitTags(draft.tagInput) })} />
    </Modal>
  );
}

function MjModal({ item, onClose, onSave }: any) {
  const [draft, setDraft] = React.useState({ ...item });
  const set = (key: string, value: any) => setDraft({ ...draft, [key]: value });
  return (
    <Modal title={item.id ? "ミッドジャーニー設定を編集" : "ミッドジャーニー設定を追加"} onClose={onClose}>
      <FormGrid>
        <input value={draft.title} onChange={(e) => set("title", e.target.value)} placeholder="タイトル" />
        <textarea value={draft.description} onChange={(e) => set("description", e.target.value)} placeholder="説明" />
        <div className="inline-fields">
          <input value={draft.ar} onChange={(e) => set("ar", e.target.value)} placeholder="--ar 1:1" />
          <input value={draft.stylize} onChange={(e) => set("stylize", e.target.value)} placeholder="--stylize" />
          <input value={draft.chaos} onChange={(e) => set("chaos", e.target.value)} placeholder="--chaos" />
        </div>
        <div className="inline-fields">
          <input value={draft.profile} onChange={(e) => set("profile", e.target.value)} placeholder="--profile" />
          <input value={draft.seed} onChange={(e) => set("seed", e.target.value)} placeholder="--seed" />
          <label className="check"><input type="checkbox" checked={draft.raw} onChange={(e) => set("raw", e.target.checked)} /> --raw</label>
        </div>
        <input value={draft.extra} onChange={(e) => set("extra", e.target.value)} placeholder="その他自由入力、ベース文など" />
        <textarea value={draft.note} onChange={(e) => set("note", e.target.value)} placeholder="メモ" />
        <code>{mjCommand(draft)}</code>
      </FormGrid>
      <ModalActions onClose={onClose} onSave={() => onSave(draft)} />
    </Modal>
  );
}

function ProjectModal({ item, prompts, settings, onClose, onSave }: any) {
  const [draft, setDraft] = React.useState({ ...item, tagInput: tagText(item.tags) });
  const promptChoices = [...prompts].sort((a: MyPrompt, b: MyPrompt) => Number(Boolean(b.favorite)) - Number(Boolean(a.favorite)));
  const mjChoices = [...settings].sort((a: any, b: any) => String(b.createdAt || "").localeCompare(String(a.createdAt || "")));
  const toggle = (key: "promptIds" | "mjIds", id: string) => {
    const exists = draft[key].includes(id);
    setDraft({ ...draft, [key]: exists ? draft[key].filter((item: string) => item !== id) : [...draft[key], id] });
  };
  return (
    <Modal title={item.id ? "プロジェクトを編集" : "プロジェクトを追加"} onClose={onClose}>
      <FormGrid className="project-edit-form">
        <ProjectField label="プロジェクト名">
          <input value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} placeholder="例：Christmas Sticker Set" />
        </ProjectField>
        <ProjectField label="概要">
          <textarea value={draft.description} onChange={(e) => setDraft({ ...draft, description: e.target.value })} placeholder="制作する素材セットの内容を書きます" />
        </ProjectField>
        <ProjectField label="目標・ゴール">
          <textarea value={draft.note} onChange={(e) => setDraft({ ...draft, note: e.target.value })} placeholder="点数、販売開始日、やることなど" />
        </ProjectField>
        <ProjectField label="タグ">
          <input value={draft.tagInput} onChange={(e) => setDraft({ ...draft, tagInput: e.target.value })} placeholder="季節商品, ステッカー, Etsy" />
        </ProjectField>
        <ProjectField label="達成予定日">
          <input type="date" value={draft.dueDate || ""} onChange={(e) => setDraft({ ...draft, dueDate: e.target.value })} />
        </ProjectField>
        <label className="check project-remind-check">
          <input type="checkbox" checked={Boolean(draft.remindOnHome)} onChange={(e) => setDraft({ ...draft, remindOnHome: e.target.checked })} />
          ホーム画面でリマインドする
        </label>
        <SelectList
          title="関連プロンプト"
          description="お気に入りを優先して10件表示します。もっと探すときは検索できます。"
          items={promptChoices}
          selected={draft.promptIds}
          getLabel={(choice: MyPrompt) => choice.title || "無題のプロンプト"}
          getText={(choice: MyPrompt) => `${choice.title} ${choice.description} ${choice.prompt} ${choice.note} ${(choice.tags || []).join(" ")}`}
          onToggle={(id: string) => toggle("promptIds", id)}
        />
        <SelectList
          title="関連Midjourney設定"
          description="保存日の新しいものを優先して10件表示します。"
          items={mjChoices}
          selected={draft.mjIds}
          getLabel={(choice: any) => choice.title || promptTitleFromText(choice.prompt || choice.fullPrompt || choice.basePrompt || choice.extra || "")}
          getText={(choice: any) => `${choice.title || ""} ${choice.prompt || choice.fullPrompt || choice.basePrompt || ""} ${choice.parameters || choice.extra || ""} ${choice.memo || choice.note || ""}`}
          onToggle={(id: string) => toggle("mjIds", id)}
        />
      </FormGrid>
      <ModalActions onClose={onClose} onSave={() => onSave({ ...draft, tags: splitTags(draft.tagInput) })} />
    </Modal>
  );
}

function ProjectField({ label, children }: any) {
  return (
    <label className="project-field">
      <span>{label}</span>
      {children}
    </label>
  );
}

function SelectList({ title, description, items, selected, getLabel, getText, onToggle }: any) {
  const [query, setQuery] = React.useState("");
  const [expanded, setExpanded] = React.useState(false);
  const filtered = items.filter((item: any) => lowerIncludes(getText(item), query));
  const shown = (expanded || query ? filtered : filtered.slice(0, 10));
  return (
    <div className="select-list">
      <div className="select-list-head">
        <div>
          <strong>{title}</strong>
          {description && <small>{description}</small>}
        </div>
      </div>
      <input className="select-search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={`${title}を検索...`} />
      {items.length ? shown.map((item: any) => (
        <label key={item.id} className="check select-row"><input type="checkbox" checked={selected.includes(item.id)} onChange={() => onToggle(item.id)} /> {getLabel(item)}</label>
      )) : <small>先に項目を追加してください。</small>}
      {items.length > 10 && !expanded && !query && <button className="ghost more-button" type="button" onClick={() => setExpanded(true)}>もっと見る</button>}
      {items.length > 0 && !shown.length && <small>一致する項目がありません。</small>}
    </div>
  );
}

function mjCommand(item: MjSetting) {
  if (item.prompt) return item.prompt;
  if (item.fullPrompt) return item.fullPrompt;
  const parsed = parseMidjourneyPrompt(mjCommandLegacy(item));
  return combinePrompt(item.basePrompt || parsed.basePrompt || item.extra || "", item.extractedParams?.length ? item.extractedParams : parsed.params);
}

function PageHead({ title, action }: any) {
  return <div className="page-head"><h2>{title}</h2>{action}</div>;
}

function SectionTitle({ title }: any) {
  return <div className="section-title"><h2>{title}</h2></div>;
}

function Filters({ children }: any) {
  return <div className="filters">{children}</div>;
}

function TagRow({ tags }: any) {
  return <div className="tags">{tags.map((tag: string) => <span key={tag}>#{tag}</span>)}</div>;
}

function Empty({ text }: any) {
  return <div className="empty">{text}</div>;
}

function FormGrid({ children, className = "" }: any) {
  return <div className={`form-grid ${className}`.trim()}>{children}</div>;
}

function Modal({ title, children, onClose, hideClose }: any) {
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal">
        <div className="modal-head">
          <h2>{title}</h2>
          {!hideClose && <button onClick={onClose}>閉じる</button>}
        </div>
        {children}
      </div>
    </div>
  );
}

function ModalActions({ onClose, onSave }: any) {
  return (
    <div className="modal-actions">
      <button onClick={onClose}>キャンセル</button>
      <button className="primary" onClick={onSave}>保存する</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
