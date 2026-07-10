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
  coverImages?: any[];
  folder?: string;
};

type MockupCategory = {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  coverImages?: any[];
  order?: number;
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

type ProjectMemo = {
  id: string;
  title: string;
  body: string;
  favorite: boolean;
  createdAt: string;
  updatedAt?: string;
};

type AtelierImage = {
  id: string;
  src: string;
  thumbnail?: string;
  dbId?: string;
  originalName?: string;
  mimeType?: string;
  width?: number;
  height?: number;
  title: string;
  memo: string;
  createdAt: string;
  source: string;
  favorite: boolean;
  folder?: string;
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
  stickerEffect?: boolean;
  sticker?: boolean;
};

type OptimizedImageData = {
  id: string;
  dbId?: string;
  category?: string;
  src: string;
  thumbnail: string;
  originalName: string;
  mimeType: string;
  width: number;
  height: number;
  createdAt: string;
};

type IndexedDbImageRecord = OptimizedImageData & {
  category: string;
  title?: string;
  memo?: string;
  favorite?: boolean;
  updatedAt: string;
};

type JournalState = {
  background: string;
  stockImages?: AtelierImage[];
  customBackgrounds?: AtelierImage[];
  hiddenStockImageIds?: string[];
  items: JournalItem[];
};

type VideoItem = {
  id: string;
  title: string;
  url: string;
  model: string;
  thumbnail?: string;
  thumbnailMode?: "thumbnail" | "video";
  prompt: string;
  memo: string;
  tags: string[];
  favorite: boolean;
  createdAt: string;
  updatedAt?: string;
};

type VideoPromptStock = {
  id: string;
  title: string;
  prompt: string;
  memo: string;
  createdAt: string;
  updatedAt?: string;
};

type PwaInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice?: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

type Screen = "home" | "library" | "prompts" | "mj" | "projects" | "customize" | "journal" | "gallery" | "videos";

type HomeSectionId = "dashboard" | "quickActions" | "featureCards" | "favorites" | "atelier";
type HomeFeatureId = "library" | "prompts" | "videos" | "mj" | "projects";
type BannerSize = "small" | "medium" | "large";
type BannerPositions = Record<BannerSize, { x: number; y: number }>;

type WorkToolIconStyle = "simple" | "pastel" | "frame" | "cool" | "dark" | "vivid" | "cute";
type HomeCharacterPosition = "right-bottom" | "right-center" | "left-bottom" | "custom" | "hidden";
type HomeCharacterMessageMode = "auto" | "fixed" | "project";
type HomeCharacterSize = "small" | "medium" | "large";
type DisplayDensity = "comfortable" | "normal" | "compact";
type HomeClockStyle = "pill" | "digital" | "retro" | "neon" | "doodle" | "stamp" | "minimal" | "hidden";
type HomeClockSize = "small" | "medium" | "large";
type HomeClockColor = "theme" | "pink" | "brown" | "blue" | "mono" | "rainbow";
type CardRadiusStyle = "small" | "medium" | "large" | "pillowy";
type CardShadowStyle = "none" | "soft" | "normal" | "dreamy";
type CardTransparencyStyle = "solid" | "soft" | "glass";
type CardBorderStyle = "none" | "thin" | "soft" | "bold" | "dashed";
type BackgroundType = "theme" | "solid" | "gradient" | "pattern" | "image";
type BackgroundGradient = "milkPink" | "peachBeige" | "blueMist" | "lavenderMilk" | "mintCream" | "cafeLatte";
type BackgroundPattern = "none" | "dot" | "stripe" | "grid" | "paper";
type BackgroundImageFit = "contain" | "cover";
type BackgroundImagePosition = "center" | "top" | "bottom" | "left" | "right";
type BackgroundImageBlur = "none" | "soft" | "medium";
type BackgroundOpacity = "light" | "normal" | "deep";
type FontPreset = "simple" | "elegant" | "cute" | "korean" | "handwritten" | "cool";
type IconSet = "line" | "soft" | "minimal" | "label" | "pixel" | "emoji";

type CardStyleSettings = {
  radius: CardRadiusStyle;
  shadow: CardShadowStyle;
  transparency: CardTransparencyStyle;
  border: CardBorderStyle;
};

type BackgroundStyleSettings = {
  type: BackgroundType;
  color: string;
  gradient: BackgroundGradient;
  pattern: BackgroundPattern;
  image: string;
  imageFit: BackgroundImageFit;
  imagePosition: BackgroundImagePosition;
  imageBlur: BackgroundImageBlur;
  imageOpacity: BackgroundOpacity;
  showDecorations: boolean;
};

type PageDisplaySettings = {
  gallery: {
    gap: "narrow" | "normal" | "wide";
    ratio: "square" | "portrait" | "landscape" | "original";
    showHeart: boolean;
    columns: "auto" | "2" | "3" | "4" | "5";
  };
  prompts: {
    viewMode: "card" | "list";
    showTags: boolean;
    showMemo: boolean;
    imageSize: "small" | "normal" | "large";
  };
  videoPrompts: {
    viewMode: "card" | "list";
    showTags: boolean;
    showMemo: boolean;
    thumbnailSize: "small" | "normal" | "large";
  };
  projects: {
    sortBy: "deadline" | "created" | "manual";
    showCompleted: boolean;
    showAlarms: boolean;
  };
  mockups: {
    categoryCardSize: "small" | "normal" | "large";
    showDescription: boolean;
    showCount: boolean;
  };
};

type HomeCharacterSettings = {
  image: any;
  position: HomeCharacterPosition;
  size: HomeCharacterSize;
  speechEnabled: boolean;
  messageMode: HomeCharacterMessageMode;
  fixedMessage: string;
  selectedProjectId?: string;
  customX?: number;
  customY?: number;
};

type HomeStatsCardId = "mockups" | "prompts" | "mjSettings" | "projects" | "achievement";
type HomeStatsCards = Record<HomeStatsCardId, boolean>;

type HomeSettings = {
  themeId: string;
  bannerImage: string;
  bannerImageUrl: string;
  bannerVisible: boolean;
  bannerSize: BannerSize;
  bannerFit: "contain" | "cover";
  bannerPositionX: number;
  bannerPositionY: number;
  bannerPositions: BannerPositions;
  workToolIconStyle: WorkToolIconStyle;
  homeClockStyle: HomeClockStyle;
  homeClockSize: HomeClockSize;
  homeClockColor: HomeClockColor;
  displayDensity: DisplayDensity;
  pageDisplaySettings: PageDisplaySettings;
  cardStyle: CardStyleSettings;
  backgroundStyle: BackgroundStyleSettings;
  fontPreset: FontPreset;
  iconSet: IconSet;
  homeCharacter: HomeCharacterSettings;
  homeStatsCards: HomeStatsCards;
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
  visible?: boolean;
  color?: string;
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
  { id: "featureCards", label: "メイン機能カード" },
  { id: "favorites", label: "お気に入り" },
  { id: "atelier", label: "アトリエコーナー" },
];

const homeFeatures: { id: HomeFeatureId; label: string }[] = [
  { id: "library", label: "モックアップライブラリ" },
  { id: "prompts", label: "プロンプト帳" },
  { id: "videos", label: "動画プロンプト帳" },
  { id: "mj", label: "MJ設定" },
  { id: "projects", label: "プロジェクト" },
];

const homeClockStyleOptions: { id: HomeClockStyle; label: string; description: string }[] = [
  { id: "pill", label: "ふんわり", description: "淡い丸ラベルで表示" },
  { id: "digital", label: "デジタル", description: "黒い液晶風の表示" },
  { id: "retro", label: "レトロ", description: "古い印字風の文字" },
  { id: "neon", label: "ネオン", description: "カラフルな立体文字" },
  { id: "doodle", label: "手描き", description: "らくがき風のゆるい日付" },
  { id: "stamp", label: "スタンプ", description: "ハートスタンプ風の表示" },
  { id: "minimal", label: "最小", description: "月日と曜日だけ表示" },
  { id: "hidden", label: "非表示", description: "ホームに日付を出さない" },
];

const homeClockSizeOptions: { id: HomeClockSize; label: string }[] = [
  { id: "small", label: "小" },
  { id: "medium", label: "中" },
  { id: "large", label: "大" },
];

const homeClockColorOptions: { id: HomeClockColor; label: string }[] = [
  { id: "theme", label: "テーマ" },
  { id: "pink", label: "ピンク" },
  { id: "brown", label: "ブラウン" },
  { id: "blue", label: "ブルー" },
  { id: "mono", label: "モノクロ" },
  { id: "rainbow", label: "レインボー" },
];

const homeStatsCardOptions: { id: HomeStatsCardId; label: string }[] = [
  { id: "mockups", label: "モックアップカードを表示" },
  { id: "prompts", label: "プロンプト帳カードを表示" },
  { id: "mjSettings", label: "MJ設定カードを表示" },
  { id: "projects", label: "プロジェクトカードを表示" },
  { id: "achievement", label: "達成予定カードを表示" },
];

const defaultPageDisplaySettings: PageDisplaySettings = {
  gallery: { gap: "normal", ratio: "square", showHeart: true, columns: "auto" },
  prompts: { viewMode: "card", showTags: true, showMemo: true, imageSize: "normal" },
  videoPrompts: { viewMode: "card", showTags: true, showMemo: true, thumbnailSize: "normal" },
  projects: { sortBy: "deadline", showCompleted: true, showAlarms: true },
  mockups: { categoryCardSize: "normal", showDescription: true, showCount: true },
};

const densityOptions: { id: DisplayDensity; label: string; description: string }[] = [
  { id: "comfortable", label: "ゆったり", description: "余白を広めにして、見た目の余裕を優先します。" },
  { id: "normal", label: "標準", description: "現在の見た目に近いバランスです。" },
  { id: "compact", label: "コンパクト", description: "カード間隔を少し詰めて一覧性を高めます。" },
];

const defaultCardStyle: CardStyleSettings = {
  radius: "medium",
  shadow: "normal",
  transparency: "solid",
  border: "soft",
};

const defaultBackgroundStyle: BackgroundStyleSettings = {
  type: "theme",
  color: "#fffafc",
  gradient: "milkPink",
  pattern: "none",
  image: "",
  imageFit: "cover",
  imagePosition: "center",
  imageBlur: "none",
  imageOpacity: "normal",
  showDecorations: true,
};

const backgroundColorOptions = [
  ["#fffafc", "ミルクホワイト"],
  ["#f7efe4", "ベージュ"],
  ["#fff0f5", "淡いピンク"],
  ["#eef6ff", "淡いブルー"],
  ["#f4efff", "淡いラベンダー"],
  ["#effbf4", "淡いミント"],
];

const cardStyleOptions = {
  radius: [["small", "控えめ"], ["medium", "標準"], ["large", "大きめ"], ["pillowy", "ぷっくり"]],
  shadow: [["none", "なし"], ["soft", "弱め"], ["normal", "標準"], ["dreamy", "ふんわり"]],
  transparency: [["solid", "なし"], ["soft", "薄め"], ["glass", "ガラス風"]],
  border: [["none", "なし"], ["thin", "細線"], ["soft", "淡い線"], ["bold", "太い"], ["dashed", "点線"]],
} as const;

const backgroundStyleOptions = {
  type: [["theme", "テーマ標準"], ["solid", "単色"], ["gradient", "グラデーション"], ["pattern", "パターン"], ["image", "画像"]],
  gradient: [["milkPink", "ミルクピンク"], ["peachBeige", "ピーチベージュ"], ["blueMist", "ブルーミスト"], ["lavenderMilk", "ラベンダーミルク"], ["mintCream", "ミントクリーム"], ["cafeLatte", "カフェラテ"]],
  pattern: [["none", "なし"], ["dot", "ドット"], ["stripe", "細ストライプ"], ["grid", "グリッド"], ["paper", "紙テクスチャ風"]],
  imageFit: [["contain", "全体を表示"], ["cover", "枠いっぱいに表示"]],
  imagePosition: [["center", "中央"], ["top", "上"], ["bottom", "下"], ["left", "左"], ["right", "右"]],
  imageBlur: [["none", "なし"], ["soft", "弱"], ["medium", "中"]],
  imageOpacity: [["light", "薄い"], ["normal", "標準"], ["deep", "濃い"]],
} as const;

const fontPresetOptions: { id: FontPreset; label: string; description: string }[] = [
  { id: "simple", label: "シンプル", description: "読みやすさ優先の標準バランス。" },
  { id: "elegant", label: "上品", description: "細めで余白のある高級感。" },
  { id: "cute", label: "かわいい", description: "少し丸くやわらかい印象。" },
  { id: "korean", label: "韓国風", description: "カフェ風の細め文字と広い行間。" },
  { id: "handwritten", label: "手書き風", description: "見出しだけ少しラフに。" },
  { id: "cool", label: "クール", description: "すっきりシャープな印象。" },
];

const iconSetOptions: { id: IconSet; label: string; description: string }[] = [
  { id: "line", label: "線画", description: "細い線で軽い印象。" },
  { id: "soft", label: "ぷっくり", description: "丸くやわらかいアイコン。" },
  { id: "minimal", label: "ミニマル", description: "控えめで静かな表示。" },
  { id: "label", label: "ラベル風", description: "タグのような小さな見た目。" },
  { id: "pixel", label: "ピクセル風", description: "少し遊びのある表示。" },
  { id: "emoji", label: "絵文字風", description: "親しみやすい雰囲気。" },
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
  { id: "tool-midjourney", name: "Midjourney", url: "https://www.midjourney.com/", iconText: "MJ", iconImage: "", memo: "画像生成", visible: true },
  { id: "tool-pinterest", name: "Pinterest", url: "https://www.pinterest.com/", iconText: "P", iconImage: "", memo: "参考画像", visible: true },
  { id: "tool-chatgpt", name: "ChatGPT", url: "https://chatgpt.com/", iconText: "GPT", iconImage: "", memo: "文章づくり", visible: true },
];

const sampleAtelierImages: AtelierImage[] = [];

const defaultJournal: JournalState = {
  background: "paper",
  stockImages: [],
  hiddenStockImageIds: [],
  items: [],
};

const sampleVideos: VideoItem[] = [
  {
    id: "video-sample-1",
    title: "淡いステッカー紹介動画",
    url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    model: "Runway",
    thumbnail: "",
    prompt: "soft pastel clipart sticker sheet reveal, gentle camera push in, cozy stationery desk, clean white background, smooth motion",
    memo: "Etsyのサムネイル動画やSNS用に使いやすい構成。",
    tags: ["sticker", "pastel", "reveal"],
    favorite: true,
    createdAt: "2026-07-02T00:00:00.000Z",
  },
  {
    id: "video-sample-2",
    title: "招待状モックアップ動画",
    url: "",
    model: "Kling",
    thumbnail: "",
    prompt: "wedding invitation card mockup on linen fabric, slow top-down camera movement, elegant natural light, warm ivory tone",
    memo: "招待状パックの販売ページ用。",
    tags: ["invitation", "mockup", "wedding"],
    favorite: false,
    createdAt: "2026-07-02T00:00:00.000Z",
  },
];
const videoModels = ["Runway", "Kling", "Veo", "Hailuo", "Pika", "Luma", "その他"];
const blankVideoPrompt = (): VideoItem => ({
  id: "",
  title: "",
  url: "",
  model: "Runway",
  thumbnail: "",
  thumbnailMode: "thumbnail",
  prompt: "",
  memo: "",
  tags: [],
  favorite: false,
  createdAt: "",
});
const blankVideoPromptStock = (): VideoPromptStock => ({
  id: "",
  title: "",
  prompt: "",
  memo: "",
  createdAt: "",
});

function initialVideoPrompts() {
  return loadStoredVideoPrompts() || sampleVideos;
}

function loadStoredVideoPrompts() {
  try {
    const keys = ["promptAtelierVideoPrompts", "promptAtelierVideos", "promptAtelierVideoPromptBook", "videoPrompts"];
    for (const key of keys) {
      const saved = localStorage.getItem(key);
      if (!saved) continue;
      const items = JSON.parse(saved);
      const extracted = extractVideoPromptItems(items);
      if (extracted.length) return extracted.map(normalizeVideoPrompt).slice(0, 20);
    }
    return null;
  } catch {
    return null;
  }
}

function extractVideoPromptItems(value: any): any[] {
  if (Array.isArray(value)) return value;
  if (!value || typeof value !== "object") return [];
  if (Array.isArray(value.cards)) return value.cards;
  if (Array.isArray(value.prompts)) return value.prompts;
  if (Array.isArray(value.videoPrompts)) return value.videoPrompts;
  if (Array.isArray(value.items)) return value.items;
  return [];
}

function normalizeVideoPrompt(item: any): VideoItem {
  const base = blankVideoPrompt();
  const prompt = item?.prompt || item?.videoPrompt || item?.description || "";
  const title = item?.title || prompt.slice(0, 28) || item?.memo || "動画プロンプト";
  const tags = Array.isArray(item?.tags) ? item.tags : splitTags(item?.tags || "");
  return {
    ...base,
    ...item,
    id: item?.id || uid(),
    title,
    url: item?.url || item?.videoUrl || item?.link || "",
    model: item?.model || item?.aiModel || "その他",
    thumbnail: item?.thumbnail || item?.thumbnailUrl || item?.imageUrl || item?.image || "",
    thumbnailMode: item?.thumbnailMode === "video" ? "video" : "thumbnail",
    prompt,
    memo: item?.memo || item?.note || "",
    tags,
    favorite: Boolean(item?.favorite),
    createdAt: item?.createdAt || new Date().toISOString(),
    updatedAt: item?.updatedAt || item?.createdAt || "",
  };
}

const bannerSizes: BannerSize[] = ["small", "medium", "large"];
const defaultBannerPositions: BannerPositions = {
  small: { x: 50, y: 50 },
  medium: { x: 50, y: 50 },
  large: { x: 50, y: 50 },
};

const defaultHomeSettings: HomeSettings = {
  themeId: "cute",
  bannerImage: "",
  bannerImageUrl: "",
  bannerVisible: true,
  bannerSize: "medium",
  bannerFit: "contain",
  bannerPositionX: 50,
  bannerPositionY: 50,
  bannerPositions: defaultBannerPositions,
  workToolIconStyle: "pastel",
  homeClockStyle: "pill",
  homeClockSize: "medium",
  homeClockColor: "theme",
  displayDensity: "normal",
  pageDisplaySettings: defaultPageDisplaySettings,
  cardStyle: defaultCardStyle,
  backgroundStyle: defaultBackgroundStyle,
  fontPreset: "simple",
  iconSet: "line",
  homeStatsCards: {
    mockups: true,
    prompts: true,
    mjSettings: true,
    projects: true,
    achievement: true,
  },
  homeCharacter: {
    image: "",
    position: "right-bottom",
    size: "medium",
    speechEnabled: true,
    messageMode: "auto",
    fixedMessage: "今日も制作がんばろう♡",
    selectedProjectId: "",
    customX: 86,
    customY: 62,
  },
  visible: {
    library: true,
    prompts: true,
    videos: true,
    mj: true,
    projects: true,
    atelier: true,
    dashboard: true,
    quickActions: true,
    featureCards: true,
    favorites: true,
  },
  order: ["dashboard", "quickActions", "featureCards", "favorites", "atelier"],
};

const normalizeHomeSettings = (settings: HomeSettings): HomeSettings => {
  const rawCharacter = { ...defaultHomeSettings.homeCharacter, ...(settings?.homeCharacter || {}) };
  const rawPageSettings = settings?.pageDisplaySettings || defaultHomeSettings.pageDisplaySettings;
  const rawCardStyle = { ...defaultCardStyle, ...(settings?.cardStyle || {}) };
  const rawBackgroundStyle = { ...defaultBackgroundStyle, ...(settings?.backgroundStyle || {}) };
  const safeMessageMode: HomeCharacterMessageMode = ["auto", "fixed", "project"].includes(rawCharacter.messageMode)
    ? rawCharacter.messageMode as HomeCharacterMessageMode
    : "auto";
  const safeDensity: DisplayDensity = ["comfortable", "normal", "compact"].includes(settings?.displayDensity)
    ? settings.displayDensity as DisplayDensity
    : "normal";
  const safeClockStyle: HomeClockStyle = ["pill", "digital", "retro", "neon", "doodle", "stamp", "minimal", "hidden"].includes(settings?.homeClockStyle)
    ? settings.homeClockStyle as HomeClockStyle
    : "pill";
  const safeClockSize: HomeClockSize = ["small", "medium", "large"].includes(settings?.homeClockSize)
    ? settings.homeClockSize as HomeClockSize
    : "medium";
  const safeClockColor: HomeClockColor = ["theme", "pink", "brown", "blue", "mono", "rainbow"].includes(settings?.homeClockColor)
    ? settings.homeClockColor as HomeClockColor
    : "theme";
  const safeFontPreset: FontPreset = ["simple", "elegant", "cute", "korean", "handwritten", "cool"].includes(settings?.fontPreset)
    ? settings.fontPreset as FontPreset
    : "simple";
  const safeIconSet: IconSet = ["line", "soft", "minimal", "label", "pixel", "emoji"].includes(settings?.iconSet)
    ? settings.iconSet as IconSet
    : "line";
  const safeCharacterSize: HomeCharacterSize = ["small", "medium", "large"].includes(rawCharacter.size)
    ? rawCharacter.size as HomeCharacterSize
    : "medium";
  const safePosition = (value: any) => Math.min(100, Math.max(0, Number.isFinite(Number(value)) ? Number(value) : 50));
  const safeBannerSize: BannerSize = bannerSizes.includes(settings?.bannerSize as BannerSize) ? settings.bannerSize as BannerSize : "medium";
  const legacyPosition = {
    x: safePosition(settings?.bannerPositionX),
    y: safePosition(settings?.bannerPositionY),
  };
  const rawBannerPositions = (settings as any)?.bannerPositions || {};
  const bannerPositions = bannerSizes.reduce((positions, size) => {
    const stored = rawBannerPositions?.[size] || {};
    positions[size] = {
      x: safePosition(stored.x ?? legacyPosition.x),
      y: safePosition(stored.y ?? legacyPosition.y),
    };
    return positions;
  }, {} as BannerPositions);
  const activeBannerPosition = bannerPositions[safeBannerSize] || legacyPosition;
  const bannerImage = (settings as any)?.bannerImage || settings?.bannerImageUrl || "";
  return {
    ...defaultHomeSettings,
    ...settings,
    bannerImage,
    bannerImageUrl: settings?.bannerImageUrl || bannerImage,
    bannerSize: safeBannerSize,
    bannerPositionX: activeBannerPosition.x,
    bannerPositionY: activeBannerPosition.y,
    bannerPositions,
    homeClockStyle: safeClockStyle,
    homeClockSize: safeClockSize,
    homeClockColor: safeClockColor,
    displayDensity: safeDensity,
    pageDisplaySettings: {
      gallery: { ...defaultPageDisplaySettings.gallery, ...(rawPageSettings as any).gallery },
      prompts: { ...defaultPageDisplaySettings.prompts, ...(rawPageSettings as any).prompts },
      videoPrompts: { ...defaultPageDisplaySettings.videoPrompts, ...(rawPageSettings as any).videoPrompts },
      projects: { ...defaultPageDisplaySettings.projects, ...(rawPageSettings as any).projects },
      mockups: { ...defaultPageDisplaySettings.mockups, ...(rawPageSettings as any).mockups },
    },
    cardStyle: {
      radius: ["small", "medium", "large", "pillowy"].includes(rawCardStyle.radius) ? rawCardStyle.radius : "medium",
      shadow: ["none", "soft", "normal", "dreamy"].includes(rawCardStyle.shadow) ? rawCardStyle.shadow : "normal",
      transparency: ["solid", "soft", "glass"].includes(rawCardStyle.transparency) ? rawCardStyle.transparency : "solid",
      border: ["none", "thin", "soft", "bold", "dashed"].includes(rawCardStyle.border) ? rawCardStyle.border : "soft",
    },
    backgroundStyle: {
      ...rawBackgroundStyle,
      type: ["theme", "solid", "gradient", "pattern", "image"].includes(rawBackgroundStyle.type) ? rawBackgroundStyle.type : "theme",
      gradient: ["milkPink", "peachBeige", "blueMist", "lavenderMilk", "mintCream", "cafeLatte"].includes(rawBackgroundStyle.gradient) ? rawBackgroundStyle.gradient : "milkPink",
      pattern: rawBackgroundStyle.pattern === "floral" ? "paper" : ["none", "dot", "stripe", "grid", "paper"].includes(rawBackgroundStyle.pattern) ? rawBackgroundStyle.pattern : "none",
      imageFit: ["contain", "cover"].includes(rawBackgroundStyle.imageFit) ? rawBackgroundStyle.imageFit : "cover",
      imagePosition: ["center", "top", "bottom", "left", "right"].includes(rawBackgroundStyle.imagePosition) ? rawBackgroundStyle.imagePosition : "center",
      imageBlur: ["none", "soft", "medium"].includes(rawBackgroundStyle.imageBlur) ? rawBackgroundStyle.imageBlur : "none",
      imageOpacity: ["light", "normal", "deep"].includes(rawBackgroundStyle.imageOpacity) ? rawBackgroundStyle.imageOpacity : "normal",
      color: /^#[0-9a-f]{6}$/i.test(rawBackgroundStyle.color || "") ? rawBackgroundStyle.color : "#fffafc",
      image: rawBackgroundStyle.image || "",
      showDecorations: rawBackgroundStyle.showDecorations !== false,
    },
    fontPreset: safeFontPreset,
    iconSet: safeIconSet,
    homeCharacter: {
      ...rawCharacter,
      size: safeCharacterSize,
      messageMode: safeMessageMode,
      customX: safePosition(rawCharacter.customX ?? 86),
      customY: safePosition(rawCharacter.customY ?? 62),
    },
    homeStatsCards: { ...defaultHomeSettings.homeStatsCards, ...(settings?.homeStatsCards || {}) },
    visible: { ...defaultHomeSettings.visible, ...(settings?.visible || {}) },
    order: [
      ...(settings?.order || defaultHomeSettings.order).filter((id) => homeSections.some((section) => section.id === id)),
      ...defaultHomeSettings.order.filter((id) => !(settings?.order || []).includes(id)),
    ],
  };
};

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

function normalizeMockupCategoryOrder(items: MockupCategory[]) {
  return [...(items || [])]
    .map((category, index) => ({
      ...category,
      order: Number.isFinite(Number(category.order)) ? Number(category.order) : index + 1,
      __index: index,
    }))
    .sort((a, b) => (a.order || 0) - (b.order || 0) || a.__index - b.__index)
    .map(({ __index, ...category }, index) => ({ ...category, order: index + 1 }));
}

function assignMockupCategoryOrder(items: MockupCategory[]) {
  return [...(items || [])].map((category, index) => ({ ...category, order: index + 1 }));
}

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

const samplePrompts: MyPrompt[] = [];

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
  coverImages: [],
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

const blankProjectMemo = (): ProjectMemo => ({
  id: "",
  title: "",
  body: "",
  favorite: false,
  createdAt: new Date().toISOString(),
});

const uid = () => `${Date.now()}-${Math.random().toString(16).slice(2)}`;
const splitTags = (value: string) => value.split(",").map((tag) => tag.trim()).filter(Boolean);
const tagText = (tags: string[]) => tags.join(", ");
const lowerIncludes = (source: string, query: string) => source.toLowerCase().includes(query.toLowerCase());
const IMAGE_WARNING_KEY = "promptAtelierImageStorageWarningLevel";
const IMAGE_MIGRATION_KEY = "promptAtelierImageMigrationIndexedDbV1";
const SAMPLE_SEED_PATHS = ["/src/data/sampleSeed.json?v=20260709-production-sample-seed-v64", "./src/data/sampleSeed.json?v=20260709-production-sample-seed-v64"];
const EMBEDDED_SAMPLE_SEED_DATA: Record<string, any> = {"libraryItems":[{"id":"sticker","title":"ステッカー","description":"シート、透明、ライフスタイルなど販売画像に使いやすいモックアップ。","coverImage":{"id":"1783058580437-73b3d367a217b","dbId":"1783058580437-73b3d367a217b","category":"mockup","src":"indexeddb:1783058580437-73b3d367a217b","thumbnail":"indexeddb-thumb:1783058580437-73b3d367a217b","originalName":"13a0d4f5-85df-4eb1-b8e9-b74e323e53d2.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T06:03:00.437Z"},"coverImages":[{"id":"1783058580437-73b3d367a217b","dbId":"1783058580437-73b3d367a217b","category":"mockup","src":"indexeddb:1783058580437-73b3d367a217b","thumbnail":"indexeddb-thumb:1783058580437-73b3d367a217b","originalName":"13a0d4f5-85df-4eb1-b8e9-b74e323e53d2.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T06:03:00.437Z"}],"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-library-001","order":1},{"id":"invitation","title":"招待状","description":"結婚式やイベント招待状を上品に見せるカード。","coverImage":{"id":"1783058618475-0562eb411fb388","dbId":"1783058618475-0562eb411fb388","category":"mockup","src":"indexeddb:1783058618475-0562eb411fb388","thumbnail":"indexeddb-thumb:1783058618475-0562eb411fb388","originalName":"26634d89-615f-4222-9c3e-1573353526f7.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T06:03:38.475Z"},"coverImages":[{"id":"1783058618475-0562eb411fb388","dbId":"1783058618475-0562eb411fb388","category":"mockup","src":"indexeddb:1783058618475-0562eb411fb388","thumbnail":"indexeddb-thumb:1783058618475-0562eb411fb388","originalName":"26634d89-615f-4222-9c3e-1573353526f7.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T06:03:38.475Z"}],"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-library-002","order":2},{"id":"postcard","title":"ポストカード","description":"紙もの、雑貨感のあるポストカード。","coverImage":{"id":"1783058681048-f81cfd109c7868","dbId":"1783058681048-f81cfd109c7868","category":"mockup","src":"indexeddb:1783058681048-f81cfd109c7868","thumbnail":"indexeddb-thumb:1783058681048-f81cfd109c7868","originalName":"db9f4630-4c67-434b-8daf-22bd534d26f3.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T06:04:41.048Z"},"coverImages":[{"id":"1783058681048-f81cfd109c7868","dbId":"1783058681048-f81cfd109c7868","category":"mockup","src":"indexeddb:1783058681048-f81cfd109c7868","thumbnail":"indexeddb-thumb:1783058681048-f81cfd109c7868","originalName":"db9f4630-4c67-434b-8daf-22bd534d26f3.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T06:04:41.048Z"}],"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-library-003","order":3},{"id":"greeting-card","title":"ティシャツ・トレーナー","description":"ティシャツ・トレーナー・ポロシャツなどのモックアップ。","coverImage":{"id":"1783059953065-d9f27f7fc85f8","dbId":"1783059953065-d9f27f7fc85f8","category":"mockup","src":"indexeddb:1783059953065-d9f27f7fc85f8","thumbnail":"indexeddb-thumb:1783059953065-d9f27f7fc85f8","originalName":"6ca1f776-920d-4af4-ac69-5ace8038d4a9.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T06:25:53.065Z"},"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-library-004","order":4,"coverImages":[{"id":"1783059953065-d9f27f7fc85f8","dbId":"1783059953065-d9f27f7fc85f8","category":"mockup","src":"indexeddb:1783059953065-d9f27f7fc85f8","thumbnail":"indexeddb-thumb:1783059953065-d9f27f7fc85f8","originalName":"6ca1f776-920d-4af4-ac69-5ace8038d4a9.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T06:25:53.065Z"}]},{"id":"art-print","title":"アートプリント","description":"額縁、壁掛け、インテリアに合わせたアートボード。","coverImage":{"id":"1783059852771-2a1c7c6da7f2c8","dbId":"1783059852771-2a1c7c6da7f2c8","category":"mockup","src":"indexeddb:1783059852771-2a1c7c6da7f2c8","thumbnail":"indexeddb-thumb:1783059852771-2a1c7c6da7f2c8","originalName":"d58281df-5558-41dd-a0b2-bd84a0e90dd5.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T06:24:12.771Z"},"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-library-005","order":5,"coverImages":[{"id":"1783059852771-2a1c7c6da7f2c8","dbId":"1783059852771-2a1c7c6da7f2c8","category":"mockup","src":"indexeddb:1783059852771-2a1c7c6da7f2c8","thumbnail":"indexeddb-thumb:1783059852771-2a1c7c6da7f2c8","originalName":"d58281df-5558-41dd-a0b2-bd84a0e90dd5.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T06:24:12.771Z"}]},{"id":"keychain","title":"キーホルダー","description":"アクリルチャームや小物商品のかわいい撮影イメージ。","coverImage":{"id":"1783059875791-442b357b5ae07","dbId":"1783059875791-442b357b5ae07","category":"mockup","src":"indexeddb:1783059875791-442b357b5ae07","thumbnail":"indexeddb-thumb:1783059875791-442b357b5ae07","originalName":"2ef0f018-bdc3-424b-9c64-e86709db67d2.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T06:24:35.791Z"},"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-library-006","order":6,"coverImages":[{"id":"1783059875791-442b357b5ae07","dbId":"1783059875791-442b357b5ae07","category":"mockup","src":"indexeddb:1783059875791-442b357b5ae07","thumbnail":"indexeddb-thumb:1783059875791-442b357b5ae07","originalName":"2ef0f018-bdc3-424b-9c64-e86709db67d2.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T06:24:35.791Z"}]},{"id":"1783060221248-f2021f3b0d9a9","title":"文房具","description":"ノートやペンケースなど文房具のモックアップ。","coverImage":{"id":"1783060181098-1e7dab96cbd6","dbId":"1783060181098-1e7dab96cbd6","category":"mockup","src":"indexeddb:1783060181098-1e7dab96cbd6","thumbnail":"indexeddb-thumb:1783060181098-1e7dab96cbd6","originalName":"c2eea75a-33d6-436b-be08-b5784086b440.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T06:29:41.098Z"},"coverImages":[{"id":"1783060181098-1e7dab96cbd6","dbId":"1783060181098-1e7dab96cbd6","category":"mockup","src":"indexeddb:1783060181098-1e7dab96cbd6","thumbnail":"indexeddb-thumb:1783060181098-1e7dab96cbd6","originalName":"c2eea75a-33d6-436b-be08-b5784086b440.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T06:29:41.098Z"}],"order":7,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-library-007"},{"id":"1783060284528-ec4f9844eba338","title":"コラージュ","description":"ジャンクジャーナルなどの切り貼りするモックアップ。","coverImage":{"id":"1783060281320-ffc78be789e428","dbId":"1783060281320-ffc78be789e428","category":"mockup","src":"indexeddb:1783060281320-ffc78be789e428","thumbnail":"indexeddb-thumb:1783060281320-ffc78be789e428","originalName":"0b7a183d-e8f3-4091-8989-bbf449a7052e.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T06:31:21.320Z"},"coverImages":[{"id":"1783060281320-ffc78be789e428","dbId":"1783060281320-ffc78be789e428","category":"mockup","src":"indexeddb:1783060281320-ffc78be789e428","thumbnail":"indexeddb-thumb:1783060281320-ffc78be789e428","originalName":"0b7a183d-e8f3-4091-8989-bbf449a7052e.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T06:31:21.320Z"}],"order":8,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-library-008"},{"id":"1783060414229-ef96655cc20d48","title":"プリント式ブランケット","description":"プリント式ブランケットのモックアップ。","coverImage":{"id":"1783060298226-39b8b5765d868","dbId":"1783060298226-39b8b5765d868","category":"mockup","src":"indexeddb:1783060298226-39b8b5765d868","thumbnail":"indexeddb-thumb:1783060298226-39b8b5765d868","originalName":"ebed76ac-83db-4de0-b775-0f425bf9f1fe.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T06:31:38.226Z"},"coverImages":[{"id":"1783060298226-39b8b5765d868","dbId":"1783060298226-39b8b5765d868","category":"mockup","src":"indexeddb:1783060298226-39b8b5765d868","thumbnail":"indexeddb-thumb:1783060298226-39b8b5765d868","originalName":"ebed76ac-83db-4de0-b775-0f425bf9f1fe.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T06:31:38.226Z"}],"order":9,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-library-009"},{"id":"1783060494346-17fbe47256a8c8","title":"マグカップ","description":"可愛いマグカップのモックアップ。","coverImage":{"id":"1783060472932-bd18e0820914b","dbId":"1783060472932-bd18e0820914b","category":"mockup","src":"indexeddb:1783060472932-bd18e0820914b","thumbnail":"indexeddb-thumb:1783060472932-bd18e0820914b","originalName":"2f51bf53-d423-424e-94d6-9cbea268b1a0.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T06:34:32.932Z"},"coverImages":[{"id":"1783060472932-bd18e0820914b","dbId":"1783060472932-bd18e0820914b","category":"mockup","src":"indexeddb:1783060472932-bd18e0820914b","thumbnail":"indexeddb-thumb:1783060472932-bd18e0820914b","originalName":"2f51bf53-d423-424e-94d6-9cbea268b1a0.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T06:34:32.932Z"}],"order":10,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-library-010"},{"id":"1783060555031-0469788a1b5138","title":"ガーランド","description":"子供部屋やパーティで使えるガーランドのモックアップ。","coverImage":{"id":"1783060516378-df7b6916afa6e8","dbId":"1783060516378-df7b6916afa6e8","category":"mockup","src":"indexeddb:1783060516378-df7b6916afa6e8","thumbnail":"indexeddb-thumb:1783060516378-df7b6916afa6e8","originalName":"dfd1bf0e-43dd-4687-97ca-5c84fe9ddf39.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T06:35:16.378Z"},"coverImages":[{"id":"1783060516378-df7b6916afa6e8","dbId":"1783060516378-df7b6916afa6e8","category":"mockup","src":"indexeddb:1783060516378-df7b6916afa6e8","thumbnail":"indexeddb-thumb:1783060516378-df7b6916afa6e8","originalName":"dfd1bf0e-43dd-4687-97ca-5c84fe9ddf39.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T06:35:16.378Z"}],"order":11,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-library-011"},{"id":"1783060621277-27995fb06f732","title":"包装紙","description":"シームレスパターンで作った包装紙などのモックアップ。","coverImage":{"id":"1783060576301-12ca9623b8472","dbId":"1783060576301-12ca9623b8472","category":"mockup","src":"indexeddb:1783060576301-12ca9623b8472","thumbnail":"indexeddb-thumb:1783060576301-12ca9623b8472","originalName":"13413a85-1e4c-4dd8-9490-6f84face30fa.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T06:36:16.301Z"},"coverImages":[{"id":"1783060576301-12ca9623b8472","dbId":"1783060576301-12ca9623b8472","category":"mockup","src":"indexeddb:1783060576301-12ca9623b8472","thumbnail":"indexeddb-thumb:1783060576301-12ca9623b8472","originalName":"13413a85-1e4c-4dd8-9490-6f84face30fa.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T06:36:16.301Z"}],"order":12,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-library-012"},{"id":"1783060678179-2bc61a5a9511b","title":"ペーパーアイテム","description":"テーブルデコレーションに使えるペーパーアイテムのモックアップ。","coverImage":{"id":"1783060650667-860a329c66f66","dbId":"1783060650667-860a329c66f66","category":"mockup","src":"indexeddb:1783060650667-860a329c66f66","thumbnail":"indexeddb-thumb:1783060650667-860a329c66f66","originalName":"85636502-3433-4bd3-8b28-f50a2b58f364.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T06:37:30.667Z"},"coverImages":[{"id":"1783060650667-860a329c66f66","dbId":"1783060650667-860a329c66f66","category":"mockup","src":"indexeddb:1783060650667-860a329c66f66","thumbnail":"indexeddb-thumb:1783060650667-860a329c66f66","originalName":"85636502-3433-4bd3-8b28-f50a2b58f364.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T06:37:30.667Z"}],"order":13,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-library-013"}],"mockupItems":[{"id":"lib-sticker-1","title":"ステッカー・デジタル同時出力","category":"ステッカーモックアップ","description":"白背景でステッカーの質感が見えやすい、Etsy向けの定番モックアップ。","prompt":"Create a premium Etsy-style Sticker Mockup using ONLY the uploaded clipart artwork.\n\nThe uploaded clipart must remain completely unchanged.\n\nDo not redraw, repaint, restyle, simplify, alter colors, modify characters, add new illustrations, replace elements, or reinterpret the artwork.\n\nUse the uploaded clipart exactly as provided as professionally produced sticker designs.\n\n━━━━━━━━━━━━━━━━━━\nPRIMARY DESIGN PRINCIPLE\n━━━━━━━━━━━━━━━━━━\n\nThis task is NOT to showcase the clipart collection.\n\nThis task IS to create realistic Etsy-style sticker mockups that demonstrate how the artwork could be used as both physical stickers and digital stickers.\n\nThe stickers themselves are the product.\n\nThe final images should look like real Etsy bestseller listings.\n\n━━━━━━━━━━━━━━━━━━\nIMAGE FORMAT\n━━━━━━━━━━━━━━━━━━\n\nFinal image ratio: 4:3\n\nLandscape orientation.\n\nThe stickers should occupy approximately 50–80% of the image.\n\nThe sticker designs must remain clearly visible at Etsy thumbnail size.\n\nThe images should be optimized for Etsy search results and mobile browsing.\n\n━━━━━━━━━━━━━━━━━━\nTHEME-FIRST STYLING RULE\n━━━━━━━━━━━━━━━━━━\n\nBefore designing the mockup, determine:\n\n* Theme\n* Subject Matter\n* Intended Use\n* Target Audience\n* Lifestyle Context\n\nThe entire scene must be built around the artwork theme.\n\nDo not build the scene around matching colors.\n\nThe theme always overrides the color palette.\n\n━━━━━━━━━━━━━━━━━━\nBACKGROUND PRIORITY RULE\n━━━━━━━━━━━━━━━━━━\n\nThe environment must be determined by:\n\n1. Theme\n2. Subject Matter\n3. Intended Use\n4. Target Audience\n5. Color Palette\n\nNever reverse this order.\n\nColor palette should only be used as a supporting accent.\n\n━━━━━━━━━━━━━━━━━━\nSTICKER FORMAT VARIATION\n━━━━━━━━━━━━━━━━━━\n\nFor each generated image, randomly choose one or more of the following:\n\nPHYSICAL STICKERS\n\n* die-cut stickers\n* kiss-cut stickers\n* sticker sheet\n* vinyl stickers\n* waterproof stickers\n* planner stickers\n* journal stickers\n* laptop stickers\n* water bottle stickers\n\nDIGITAL STICKERS\n\n* GoodNotes stickers\n* digital planner stickers\n* tablet sticker mockup\n* digital sticker book\n* digital journaling stickers\n* iPad planner stickers\n\nMix physical and digital sticker concepts throughout the 10 generated images.\n\nEach image should feel like a unique product presentation.\n\n━━━━━━━━━━━━━━━━━━\nARTWORK USAGE RULE\n━━━━━━━━━━━━━━━━━━\n\nDo not use all uploaded artwork.\n\nSelect only the most suitable artwork pieces.\n\nTypical usage:\n\nMinimal:\n4–8 stickers\n\nStandard:\n8–15 stickers\n\nDetailed:\n15–25 stickers\n\nAvoid sticker catalog layouts.\n\nAvoid overwhelming compositions.\n\nThe stickers should feel intentionally curated.\n\n━━━━━━━━━━━━━━━━━━\nBACKGROUND STORY RULE\n━━━━━━━━━━━━━━━━━━\n\nThe environment should feel like a realistic place where the stickers would naturally be used.\n\nThe scene should communicate a lifestyle.\n\nExamples:\n\nHalloween Artwork\n→ journaling desk\n→ planner setup\n→ seasonal crafting workspace\n\nMahjong Artwork\n→ game-night accessories\n→ laptop stickers\n→ water bottle styling\n→ social gathering setup\n\nOcean Artwork\n→ travel journal\n→ coastal workspace\n→ summer planner styling\n\nFarm Artwork\n→ scrapbook desk\n→ cozy autumn journaling setup\n\nBack To School Artwork\n→ notebooks\n→ school supplies\n→ student desk styling\n\nThe background should help buyers imagine using the stickers.\n\n━━━━━━━━━━━━━━━━━━\nMOCKUP PERSONALITY\n━━━━━━━━━━━━━━━━━━\n\nThe mockup should feel:\n\n* premium\n* playful\n* creative\n* cheerful\n* stylish\n* welcoming\n* Pinterest-worthy\n* Etsy bestseller quality\n\nThink:\n\n* creative workspace\n* journaling community\n* planner community\n* sticker shop\n* digital planning lifestyle\n\nAvoid:\n\n* corporate styling\n* luxury fashion styling\n* sterile product photography\n* generic stock-photo environments\n\n━━━━━━━━━━━━━━━━━━\nSCENE COMPOSITION\n━━━━━━━━━━━━━━━━━━\n\nCreate realistic sticker presentations.\n\nPossible compositions:\n\n* sticker sheet display\n* die-cut sticker collection\n* planner spread\n* journal spread\n* laptop stickers\n* water bottle stickers\n* tablet mockup\n* iPad planner setup\n* digital journaling setup\n\nCreate depth and layering.\n\nAllow realistic overlap.\n\nThe stickers should remain highly visible.\n\nThe stickers are always the hero.\n\n━━━━━━━━━━━━━━━━━━\nDIGITAL STICKER RULES\n━━━━━━━━━━━━━━━━━━\n\nWhen creating digital sticker mockups:\n\nDisplay realistic tablet screens.\n\nShow digital planners.\n\nShow GoodNotes-style organization.\n\nUse realistic handwriting and planner layouts.\n\nKeep the artwork clearly visible.\n\nDo not create generic tablet advertisements.\n\nThe digital stickers must remain the focus.\n\n━━━━━━━━━━━━━━━━━━\nPHYSICAL STICKER RULES\n━━━━━━━━━━━━━━━━━━\n\nWhen creating physical sticker mockups:\n\nUse realistic cut lines.\n\nShow premium sticker materials.\n\nPossible finishes:\n\n* matte vinyl\n* glossy vinyl\n* waterproof laminate\n\nUse realistic paper and vinyl textures.\n\nShow professional print quality.\n\n━━━━━━━━━━━━━━━━━━\nLIGHTING\n━━━━━━━━━━━━━━━━━━\n\nNatural daylight.\n\nSoft window light.\n\nWarm highlights.\n\nGentle shadows.\n\nBright inviting atmosphere.\n\nProfessional commercial product photography.\n\nAvoid dramatic studio lighting.\n\nAvoid dark editorial lighting.\n\n━━━━━━━━━━━━━━━━━━\n10 UNIQUE VARIATIONS\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 completely different sticker mockups.\n\nEach image should feel like a different professional photoshoot.\n\nRandomly vary:\n\n* physical or digital format\n* sticker type\n* product presentation\n* background styling\n* lifestyle setup\n* props\n* camera angle\n* surface material\n* lighting direction\n\nAll 10 images must feel genuinely different.\n\n━━━━━━━━━━━━━━━━━━\nSTRICTLY AVOID\n━━━━━━━━━━━━━━━━━━\n\nUsing all artwork.\n\nClipart catalog appearance.\n\nSticker-sheet overload.\n\nTiny unreadable stickers.\n\nGeneric backgrounds.\n\nCorporate styling.\n\nLuxury fashion styling.\n\nBackgrounds that overpower the stickers.\n\nTablet advertisements.\n\nPackaging that hides the artwork.\n\n━━━━━━━━━━━━━━━━━━\nOUTPUT REQUIREMENTS\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 unique sticker mockup variations.\n\nDeliver 10 separate images.\n\nFinal image ratio: 4:3\n\nLandscape orientation.\n\nDo not create a collage.\n\nDo not create a grid.\n\nDo not create a contact sheet.\n\nDo not combine multiple mockups into one canvas.\n\nEach image must look like a real Etsy bestseller sticker listing.\n\nPhotorealistic.\n\nPinterest-worthy.\n\nPremium Etsy styling.\n\nCreative lifestyle styling.\n\nProfessional commercial product photography.\n\nRealistic sticker materials.\n\nTheme-based background storytelling.\n\nInviting and slightly playful atmosphere.","tags":["ステッカー","平置き","シンプル"],"imageUrl":{"id":"1783062294473-86eee9a6253f","dbId":"1783062294473-86eee9a6253f","category":"prompt","src":"indexeddb:1783062294473-86eee9a6253f","thumbnail":"indexeddb-thumb:1783062294473-86eee9a6253f","originalName":"2d30b507-2793-4327-9619-bc2fe2c34445.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T07:04:54.473Z"},"categoryId":"sticker","japaneseTranslation":"温かみのある白い紙の上に置いた、清潔感のあるステッカーシートの平置きモックアップ。自然光、やわらかな影、上品なハンドメイド文具の雰囲気、透過PNGアートを配置しやすい余白。","isSample":true,"createdFromSeedExport":true,"sampleId":"sample-mockup-001","coverImages":[{"id":"1783062294473-86eee9a6253f","dbId":"1783062294473-86eee9a6253f","category":"prompt","src":"indexeddb:1783062294473-86eee9a6253f","thumbnail":"indexeddb-thumb:1783062294473-86eee9a6253f","originalName":"2d30b507-2793-4327-9619-bc2fe2c34445.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T07:04:54.473Z"}]},{"id":"lib-invitation-1","title":"※作った招待状を添付すること","category":"招待状モックアップ","description":"招待状セットを上品に見せるカード、封筒、小物つき構図。","prompt":"Create a premium Etsy-style invitation mockup using ONLY the uploaded clipart artwork.\n\nThe uploaded clipart must remain completely unchanged.\n\nDo not redraw, repaint, restyle, simplify, alter colors, modify characters, add new illustrations, replace elements, or reinterpret the artwork.\n\nUse the uploaded clipart exactly as provided as design elements within the invitation.\n\n━━━━━━━━━━━━━━━━━━\nPRIMARY DESIGN PRINCIPLE\n━━━━━━━━━━━━━━━━━━\n\nThis task is NOT to showcase the clipart collection.\n\nThis task IS to create a realistic, professionally designed invitation that could be sold on Etsy.\n\nThe invitation itself is the product.\n\nThe invitation should look as though it was created by an experienced invitation designer for a real event.\n\nFocus on invitation design first.\n\nFocus on clipart display second.\n\nThe invitation should feel like something a customer would immediately purchase on Etsy.\n\n━━━━━━━━━━━━━━━━━━\nDESIGN PRIORITY ORDER\n━━━━━━━━━━━━━━━━━━\n\n1. Invitation Design Quality\n2. Readability\n3. Typography\n4. Layout\n5. Event Communication\n6. Visual Balance\n7. Subject Matter\n8. Target Audience\n9. Color Palette\n\nColor palette has the lowest priority.\n\nNever build the design primarily around artwork colors.\n\nAlways prioritize the meaning, purpose, and intended use of the artwork.\n\n━━━━━━━━━━━━━━━━━━\nEVENT INTERPRETATION RULE\n━━━━━━━━━━━━━━━━━━\n\nBefore designing the invitation, determine the most likely real-world event represented by the artwork.\n\nCreate an invitation specifically for that event.\n\nDo not create generic invitation designs.\n\nDo not create generic stationery.\n\nExamples:\n\nMahjong Artwork\n→ Mahjong Party\n→ Game Night\n→ Social Gathering\n\nHalloween Artwork\n→ Halloween Party\n\nOcean Artwork\n→ Beach Party\n\nBack To School Artwork\n→ School Event\n\nDinosaur Artwork\n→ Birthday Party\n\nFarm Artwork\n→ Fall Festival\n\nThe event should guide every design decision.\n\n━━━━━━━━━━━━━━━━━━\nBACKGROUND PRIORITY RULE\n━━━━━━━━━━━━━━━━━━\n\nThe environment must be determined by:\n\n1. Event Type\n2. Subject Matter\n3. Intended Use\n4. Target Audience\n5. Color Palette\n\nNever reverse this order.\n\nColor palette should be used only as a supporting accent.\n\nNever assume that pink artwork requires:\n\n* bows\n* flowers\n* coquette styling\n* princess themes\n* feminine party styling\n\nunless those themes are explicitly represented by the artwork.\n\nSubject matter always overrides color palette.\n\n━━━━━━━━━━━━━━━━━━\nARTWORK USAGE RULE\n━━━━━━━━━━━━━━━━━━\n\nDo not use all uploaded artwork.\n\nDo not create a clipart catalog.\n\nDo not create a sticker-sheet appearance.\n\nDo not attempt to showcase the entire collection.\n\nSelect only the artwork elements necessary to create a beautiful invitation.\n\nTypical usage:\n\nMinimal Invitation:\n2–4 artwork elements\n\nStandard Invitation:\n4–8 artwork elements\n\nDetailed Invitation:\n8–12 artwork elements\n\nUse restraint.\n\nUse whitespace.\n\nAllow typography to remain the focal point.\n\nThe invitation should feel curated and professionally designed.\n\n━━━━━━━━━━━━━━━━━━\nINVITATION PERSONALITY\n━━━━━━━━━━━━━━━━━━\n\nThe invitation should feel:\n\n* premium\n* playful\n* charming\n* welcoming\n* cheerful\n* stylish\n* modern\n* celebration-focused\n\nThe invitation should NOT feel:\n\n* corporate\n* luxury hotel branding\n* wedding-exclusive\n* overly formal\n* overly serious\n\nThink:\n\n* premium Etsy bestseller\n* Pinterest-worthy celebration\n* boutique party invitation\n* professionally designed event invitation\n\nA subtle amount of whimsy and personality is encouraged.\n\n━━━━━━━━━━━━━━━━━━\nLAYOUT STYLE\n━━━━━━━━━━━━━━━━━━\n\nPrioritize:\n\n* modern layouts\n* playful typography\n* balanced compositions\n* tasteful decorative accents\n* strong hierarchy\n* professional readability\n\nTypography should be the visual anchor.\n\nArtwork should support the typography.\n\nAvoid filling every corner with artwork.\n\nWhitespace is desirable.\n\n━━━━━━━━━━━━━━━━━━\nINVITATION FORMAT\n━━━━━━━━━━━━━━━━━━\n\nCreate a vertical invitation card.\n\nFinal image ratio: 4:3.\n\nPortrait invitation.\n\nThe invitation should occupy approximately 40–70% of the image.\n\nThe invitation must remain readable at Etsy thumbnail size.\n\nThe invitation is always the hero.\n\n━━━━━━━━━━━━━━━━━━\nBACKGROUND MOOD\n━━━━━━━━━━━━━━━━━━\n\nThe background should feel:\n\n* premium\n* playful\n* cheerful\n* welcoming\n* stylish\n* celebration-focused\n* Pinterest-worthy\n* Etsy bestseller quality\n\nThe environment should feel like a beautifully styled event or celebration.\n\nThink:\n\n* boutique party\n* modern celebration\n* event planner styling\n* Pinterest party inspiration\n* premium but fun atmosphere\n\nAvoid:\n\n* luxury hotel styling\n* luxury wedding styling\n* fashion editorial styling\n* corporate styling\n* overly formal styling\n\nThe background may include tasteful playful elements that support the event theme.\n\nThe overall feeling should be:\n\npremium first,\nfun second,\nformal never.\n\n━━━━━━━━━━━━━━━━━━\nBACKGROUND & EVENT STYLING\n━━━━━━━━━━━━━━━━━━\n\nBuild the environment around the event.\n\nDo not build the environment around matching colors.\n\nExamples:\n\nBirthday Party\n→ balloons\n→ cake\n→ celebration table\n→ party details\n\nHalloween Party\n→ themed treats\n→ seasonal decorations\n→ garlands\n→ playful celebration styling\n\nMahjong Party\n→ drinks\n→ snacks\n→ game-night atmosphere\n→ acrylic accessories\n→ social gathering details\n\nBeach Party\n→ coastal textures\n→ summer atmosphere\n→ relaxed celebration styling\n\nBack To School\n→ classroom-inspired details\n→ stationery accents\n→ school celebration atmosphere\n\nProps should support the story.\n\nProps must never compete with the invitation.\n\nThe invitation must always remain the hero.\n\n━━━━━━━━━━━━━━━━━━\nPAPER & PRINT QUALITY\n━━━━━━━━━━━━━━━━━━\n\nPremium cardstock.\n\nVisible paper fibers.\n\nSubtle paper grain.\n\nSoft matte finish.\n\nRealistic printing texture.\n\nAuthentic paper thickness.\n\nProfessional stationery quality.\n\nCrisp typography.\n\nHigh-quality print appearance.\n\n━━━━━━━━━━━━━━━━━━\nLIGHTING\n━━━━━━━━━━━━━━━━━━\n\nNatural daylight.\n\nSoft window light.\n\nGentle shadows.\n\nBright inviting atmosphere.\n\nWarm approachable feel.\n\nProfessional product photography.\n\nAvoid dramatic studio lighting.\n\nAvoid dark editorial lighting.\n\n━━━━━━━━━━━━━━━━━━\n10 UNIQUE INVITATION DESIGNS\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 completely different invitation designs.\n\nEach invitation should feel as though it was created by a different designer.\n\nChange:\n\n* typography\n* layout\n* artwork selection\n* artwork placement\n* decorative framing\n* event styling\n* camera angle\n* surface material\n* product placement\n* lighting direction\n\nAll 10 invitations must be genuinely different designs.\n\nNot merely different photographs of the same invitation.\n\n━━━━━━━━━━━━━━━━━━\nSTRICTLY AVOID\n━━━━━━━━━━━━━━━━━━\n\nUsing all artwork.\n\nClipart catalog appearance.\n\nSticker-sheet appearance.\n\nScrapbook appearance.\n\nCrowded layouts.\n\nArtwork around every edge.\n\nTiny unreadable text.\n\nExcessive decoration.\n\nGeneric color-matched backgrounds.\n\nOverly luxurious styling.\n\nBackgrounds that overpower the invitation.\n\nFormal wedding-only aesthetics.\n\n━━━━━━━━━━━━━━━━━━\nOUTPUT REQUIREMENTS\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 unique invitation mockup variations.\n\nEach variation must feature:\n\n* a unique invitation design\n* a unique layout\n* a unique artwork arrangement\n* a unique mockup presentation\n\nDeliver 10 separate images.\n\nDo not create a collage.\n\nDo not create a grid.\n\nDo not create a contact sheet.\n\nDo not combine multiple images into one canvas.\n\nEach image must look like a real Etsy bestseller invitation listing photo.\n\nPhotorealistic.\n\nPinterest-worthy.\n\nPremium Etsy styling.\n\nBoutique party styling.\n\nCelebration-focused styling.\n\nProfessional commercial product photography.\n\nRealistic paper texture.\n\nPremium print quality.\n\nInviting, approachable, and slightly playful atmosphere.","tags":["結婚式","招待状","上品"],"imageUrl":{"id":"1783062401986-fccf9cb665af7","dbId":"1783062401986-fccf9cb665af7","category":"prompt","src":"indexeddb:1783062401986-fccf9cb665af7","thumbnail":"indexeddb-thumb:1783062401986-fccf9cb665af7","originalName":"b7da7c39-8d08-43a1-9f47-0e3191c16cee.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T07:06:41.987Z"},"categoryId":"invitation","japaneseTranslation":"封筒、シルクリボン、ドライフラワーを添えた上品な結婚式招待状のモックアップ。温かみのあるニュートラル背景、洗練された雑誌風写真、やわらかな影。","isSample":true,"createdFromSeedExport":true,"sampleId":"sample-mockup-002","coverImages":[{"id":"1783062401986-fccf9cb665af7","dbId":"1783062401986-fccf9cb665af7","category":"prompt","src":"indexeddb:1783062401986-fccf9cb665af7","thumbnail":"indexeddb-thumb:1783062401986-fccf9cb665af7","originalName":"b7da7c39-8d08-43a1-9f47-0e3191c16cee.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T07:06:41.987Z"}]},{"id":"lib-postcard-1","title":"※AI崩れに注意","category":"ポストカードモックアップ","description":"ポストカード作品を旅・雑貨感のある見せ方にする構図。","prompt":"Create a premium Etsy-style Postcard mockup using ONLY the uploaded clipart artwork.\n\nThe uploaded clipart must remain completely unchanged.\n\nDo not redraw, repaint, restyle, simplify, alter colors, modify characters, add new illustrations, replace elements, or reinterpret the artwork.\n\nUse the uploaded clipart exactly as provided as professionally designed printed postcards or greeting cards.\n\n━━━━━━━━━━━━━━━━━━\nPRIMARY DESIGN PRINCIPLE\n━━━━━━━━━━━━━━━━━━\n\nThis task is NOT to showcase the clipart collection.\n\nThis task IS to create realistic Etsy-style postcard mockups that demonstrate how the artwork could be used as professionally printed postcards or greeting cards.\n\nThe postcards themselves are the product.\n\nThe final images should look like real Etsy bestseller listings.\n\n━━━━━━━━━━━━━━━━━━\nIMAGE FORMAT\n━━━━━━━━━━━━━━━━━━\n\nFinal image ratio: 4:3\n\nLandscape orientation.\n\nDisplay approximately 2–3 postcards in each mockup.\n\nThe postcards should occupy approximately 40–70% of the image.\n\nThe environment should remain visible.\n\nThe postcard designs must remain clearly visible at Etsy thumbnail size.\n\nThe image should be optimized for Etsy search results and mobile browsing.\n\n━━━━━━━━━━━━━━━━━━\nTHEME-FIRST STYLING RULE\n━━━━━━━━━━━━━━━━━━\n\nBefore designing the mockup, determine:\n\n* Theme\n* Subject Matter\n* Intended Use\n* Target Audience\n* Lifestyle Context\n\nThe entire scene must be built around the artwork theme.\n\nDo not build the scene around matching colors.\n\nThe theme always overrides the color palette.\n\n━━━━━━━━━━━━━━━━━━\nBACKGROUND PRIORITY RULE\n━━━━━━━━━━━━━━━━━━\n\nThe environment must be determined by:\n\n1. Theme\n2. Subject Matter\n3. Intended Use\n4. Target Audience\n5. Color Palette\n\nNever reverse this order.\n\nColor palette should only be used as a supporting accent.\n\n━━━━━━━━━━━━━━━━━━\nPOSTCARD DESIGN RULE\n━━━━━━━━━━━━━━━━━━\n\nThe uploaded artwork is the primary design asset, but not necessarily the only design element.\n\nThe goal is to create beautiful, professionally designed postcards that customers would actually purchase.\n\nDesign quality takes priority over displaying as many clipart elements as possible.\n\nLess is often more.\n\nUse only the most suitable artwork elements.\n\nDo not use every uploaded artwork element.\n\nThe artwork should occupy approximately 20–45% of each postcard.\n\nMaintain generous white space.\n\nAvoid overcrowded layouts.\n\nAvoid clipart catalog layouts.\n\n━━━━━━━━━━━━━━━━━━\nPOSTCARD DESIGN ENHANCEMENT RULE\n━━━━━━━━━━━━━━━━━━\n\nThe uploaded clipart must remain completely unchanged.\n\nHowever, you may freely add professionally designed graphic elements to create complete postcard designs.\n\nExamples include:\n\n* elegant typography\n* decorative borders\n* vintage frames\n* watercolor textures\n* subtle paper patterns\n* decorative lines\n* banners\n* ribbons\n* stars\n* sparkles\n* dots\n* floral accents\n* seasonal decorative elements\n* postage stamp graphics\n* postmark details\n* decorative labels\n\nYou may also add realistic postcard wording such as:\n\n* greetings\n* event titles\n* destination names\n* celebration phrases\n* holiday messages\n* travel postcard headings\n* short inspirational quotes\n\nThese additional design elements should enhance the postcard while keeping the uploaded artwork as the primary visual focus.\n\n━━━━━━━━━━━━━━━━━━\nVARIATION STYLE RULE\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 unique postcard mockups.\n\n• 5 images should feature beautifully designed postcards with decorative backgrounds, patterns, borders, or graphic layouts.\n\n• 5 images should feature cleaner, minimal postcard designs with more white space and simpler layouts.\n\nBoth styles should feel like professionally designed stationery products sold on Etsy.\n\n━━━━━━━━━━━━━━━━━━\nPOSTCARD STYLE RULE\n━━━━━━━━━━━━━━━━━━\n\nThe postcards should resemble products that could actually be sold in a boutique stationery shop.\n\nPossible styles include:\n\n* greeting cards\n* illustrated postcards\n* travel postcards\n* souvenir postcards\n* vintage-inspired postcards\n* seasonal postcards\n* holiday postcards\n* event postcards\n* collectible art postcards\n\nEach postcard should feel professionally designed rather than simply placing clipart onto paper.\n\n━━━━━━━━━━━━━━━━━━\nBACKGROUND STORY RULE\n━━━━━━━━━━━━━━━━━━\n\nThe background is extremely important.\n\nThe environment should naturally match the artwork theme.\n\nExamples:\n\nHalloween Artwork\n→ Halloween party table\n→ pumpkins\n→ candles\n→ seasonal desserts\n\nMahjong Artwork\n→ game-night table\n→ cocktails\n→ snacks\n→ stylish party setup\n\nOcean Artwork\n→ Mediterranean tabletop\n→ lemons\n→ shells\n→ coastal decor\n\nFarm Artwork\n→ rustic harvest table\n→ orchard styling\n→ autumn decor\n\nBack To School Artwork\n→ creative stationery desk\n→ notebooks\n→ pencils\n→ study setup\n\nThe environment should support the postcards without competing with them.\n\n━━━━━━━━━━━━━━━━━━\nDISPLAY STYLING\n━━━━━━━━━━━━━━━━━━\n\nDisplay approximately 2–3 postcards.\n\nPossible presentations:\n\n* arranged naturally on a tabletop\n* slightly overlapping\n* displayed with matching envelopes\n* leaning against small wooden stands\n* styled on linen fabric\n* displayed with subtle stationery accessories\n\nCreate depth and layering.\n\nAllow realistic shadows.\n\nThe postcards should remain the hero.\n\nAvoid floating postcards.\n\nAvoid exaggerated perspective.\n\n━━━━━━━━━━━━━━━━━━\nMOCKUP PERSONALITY\n━━━━━━━━━━━━━━━━━━\n\nThe mockup should feel:\n\n* premium\n* playful\n* stylish\n* welcoming\n* giftable\n* Pinterest-worthy\n* Etsy bestseller quality\n\nThink:\n\n* boutique stationery shop\n* artisan paper goods\n* premium greeting card collection\n* lifestyle stationery photography\n\nAvoid:\n\n* luxury branding\n* corporate styling\n* sterile stock photography\n\n━━━━━━━━━━━━━━━━━━\nPAPER DETAILS\n━━━━━━━━━━━━━━━━━━\n\nUse realistic premium cardstock.\n\nInclude:\n\n* matte paper texture\n* subtle paper grain\n* realistic paper thickness\n* crisp print quality\n* clean edges\n\nThe postcards should look professionally manufactured.\n\n━━━━━━━━━━━━━━━━━━\nLIGHTING\n━━━━━━━━━━━━━━━━━━\n\nNatural daylight.\n\nSoft window light.\n\nWarm highlights.\n\nGentle shadows.\n\nBright inviting atmosphere.\n\nProfessional commercial product photography.\n\n━━━━━━━━━━━━━━━━━━\nSTRICTLY NO PEOPLE\n━━━━━━━━━━━━━━━━━━\n\nDo not include:\n\n* people\n* children\n* adults\n* faces\n* hands\n* arms\n* bodies\n* reflections of people\n\nThe postcards must be displayed without any human presence.\n\n━━━━━━━━━━━━━━━━━━\n10 UNIQUE VARIATIONS\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 completely different postcard mockups.\n\nEach image should feel like a different professional stationery product photoshoot.\n\nVary:\n\n* postcard layouts\n* artwork selection\n* postcard sizes\n* arrangement\n* decorative design style\n* background styling\n* tabletop materials\n* props\n* camera angle\n* lighting direction\n\nAll 10 images must feel genuinely different.\n\n━━━━━━━━━━━━━━━━━━\nSTRICTLY AVOID\n━━━━━━━━━━━━━━━━━━\n\nUsing all artwork.\n\nClipart catalog appearance.\n\nOversized artwork.\n\nTiny unreadable artwork.\n\nFloating postcard presentations.\n\nGeneric backgrounds.\n\nCorporate styling.\n\nLuxury branding.\n\nBackgrounds that overpower the postcards.\n\n━━━━━━━━━━━━━━━━━━\nOUTPUT REQUIREMENTS\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 unique postcard mockup variations.\n\nDeliver 10 separate images.\n\nFinal image ratio: 4:3\n\nLandscape orientation.\n\nDisplay approximately 2–3 coordinated postcards in each image.\n\nUse realistic retail stationery proportions.\n\nDo not create a collage.\n\nDo not create a grid.\n\nDo not create a contact sheet.\n\nDo not combine multiple mockups into one canvas.\n\nEach image must look like a real Etsy bestseller postcard listing.\n\nPhotorealistic.\n\nPinterest-worthy.\n\nPremium Etsy styling.\n\nBoutique stationery styling.\n\nProfessional commercial product photography.\n\nRealistic paper textures.\n\nTheme-based lifestyle storytelling.\n\nInviting and slightly playful atmosphere.","tags":["ポストカード","旅","紙もの"],"imageUrl":{"id":"1783062561170-0e2274cf740448","dbId":"1783062561170-0e2274cf740448","category":"prompt","src":"indexeddb:1783062561170-0e2274cf740448","thumbnail":"indexeddb-thumb:1783062561170-0e2274cf740448","originalName":"db9f4630-4c67-434b-8daf-22bd534d26f3.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T07:09:21.170Z"},"categoryId":"postcard","japaneseTranslation":"リネン素材の机の上に置いたポストカードモックアップ。ヴィンテージ切手、鉛筆、温かい日差し、旅の文具のような心地よい雰囲気、リアルな印刷紙の質感。","isSample":true,"createdFromSeedExport":true,"sampleId":"sample-mockup-003","coverImages":[{"id":"1783062561170-0e2274cf740448","dbId":"1783062561170-0e2274cf740448","category":"prompt","src":"indexeddb:1783062561170-0e2274cf740448","thumbnail":"indexeddb-thumb:1783062561170-0e2274cf740448","originalName":"db9f4630-4c67-434b-8daf-22bd534d26f3.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T07:09:21.170Z"}]},{"id":"lib-greeting-1","title":"Tシャツ・トレーナー・ポロシャツなど","category":"グリーティングカードモックアップ","description":"グリーティングカードを立てて、印刷商品の存在感を出すモックアップ。","prompt":"Create premium Etsy-style apparel mockups using ONLY the uploaded clipart artwork.\nThe uploaded artwork must remain completely unchanged.\nDo not redraw, repaint, recolor, simplify, replace, or reinterpret the artwork.\nUse the artwork exactly as provided as professionally printed or embroidered apparel designs.\n━━━━━━━━━━━━━━━━━━ PRIMARY DESIGN ━━━━━━━━━━━━━━━━━━\nCreate realistic Etsy bestseller mockups showing how the artwork could be sold on premium apparel.\nThe apparel is the product.\n━━━━━━━━━━━━━━━━━━ IMAGE FORMAT ━━━━━━━━━━━━━━━━━━\n• Final ratio: 4:3 (landscape)\n• Generate 10 separate images.\n• Display approximately 2–3 coordinated apparel items per image.\n• Apparel should occupy about 40–70% of the frame.\n• The artwork must remain easy to recognize at Etsy thumbnail size.\n━━━━━━━━━━━━━━━━━━ THEME FIRST ━━━━━━━━━━━━━━━━━━\nBuild the entire scene around the uploaded artwork's:\n* theme\n* subject\n* season\n* target audience\n* intended lifestyle\nAlways prioritize the theme over the artwork colors.\n━━━━━━━━━━━━━━━━━━ APPAREL DESIGN ━━━━━━━━━━━━━━━━━━\nUse only the most suitable artwork elements.\nDo not use every uploaded clipart.\nThe artwork should occupy approximately 15–35% of the visible garment.\nMaintain generous negative space.\nAvoid oversized prints.\nAvoid full-front graphics covering most of the garment.\nThe artwork should feel like a professionally designed retail product.\n━━━━━━━━━━━━━━━━━━ APPAREL TYPES ━━━━━━━━━━━━━━━━━━\nGenerate:\n• 5 mockups featuring classic premium apparel.\n• 5 mockups featuring boutique-inspired apparel.\nClassic styles may include:\n* premium t-shirt\n* relaxed fit tee\n* heavyweight tee\n* oversized tee\n* crewneck sweatshirt\n* heavyweight sweatshirt\nBoutique styles may include:\n* embroidered pocket tee\n* embroidered chest icon\n* polo shirt\n* ringer tee\n* rolled sleeve tee\n* vintage washed tee\n* garment-dyed tee\n* embroidered sweatshirt\n* oversized sweatshirt\n* drop shoulder sweatshirt\n* textured sweatshirt\n* waffle knit tee\n* henley tee\nThe garments themselves may include subtle boutique details such as:\n* embroidery\n* decorative stitching\n* contrast collars\n* contrast cuffs\n* ribbed cuffs\n* ribbed waistband\n* premium fabric textures\n* garment-dyed finishes\n* vintage washes\n* woven labels\nThese details should complement the artwork without overpowering it.\nAvoid fantasy clothing, costumes, or novelty garments.\n━━━━━━━━━━━━━━━━━━ DISPLAY STYLING ━━━━━━━━━━━━━━━━━━\nDisplay the apparel using realistic retail presentation such as:\n* wooden hangers\n* clothing racks\n* folded apparel\n* flat lays\n* boutique shelves\n* tabletop displays\n* wall hooks\nCreate depth with slight overlap.\nThe apparel should always remain the hero.\n━━━━━━━━━━━━━━━━━━ BACKGROUND ━━━━━━━━━━━━━━━━━━\nCreate an environment that naturally fits the artwork theme.\nExamples:\nHalloween → cozy autumn boutique\nMahjong → stylish game-night setup\nOcean → Mediterranean coastal lifestyle\nFarm → rustic harvest styling\nBack to School → creative stationery workspace\nThe background should support the product without becoming the focal point.\n━━━━━━━━━━━━━━━━━━ LIGHTING ━━━━━━━━━━━━━━━━━━\nUse natural window light with soft shadows.\nCreate realistic commercial product photography with premium fabric texture.\n━━━━━━━━━━━━━━━━━━ NO PEOPLE ━━━━━━━━━━━━━━━━━━\nDo not include:\n* people\n* children\n* babies\n* faces\n* hands\n* body parts\n* models\n* mannequins\n* dress forms\n* silhouettes\n* reflections of people\nNever show apparel being worn.\nAlways present the garments as standalone products.\n━━━━━━━━━━━━━━━━━━ 10 VARIATIONS ━━━━━━━━━━━━━━━━━━\nGenerate 10 completely different mockups.\nVary:\n* apparel type\n* t-shirt/sweatshirt combination\n* garment colors\n* fabric textures\n* garment details\n* artwork selection\n* artwork placement\n* display styling\n* props\n* camera angle\n* background\n* lighting\n━━━━━━━━━━━━━━━━━━ OUTPUT ━━━━━━━━━━━━━━━━━━\nGenerate 10 separate apparel mockups.\nDo not create a collage, grid, or contact sheet.\nEach image should look like a real Etsy bestseller listing.\nPhotorealistic.\nPremium boutique styling.\nPinterest-worthy.\nProfessional commercial product photography.\nTheme-based lifestyle storytelling.\nSlightly playful.\nNo people.\nNo mannequins.\nRealistic, wearable apparel.","tags":["カード","インテリア","印刷"],"imageUrl":{"id":"1783062636482-b3c89941268918","dbId":"1783062636482-b3c89941268918","category":"prompt","src":"indexeddb:1783062636482-b3c89941268918","thumbnail":"indexeddb-thumb:1783062636482-b3c89941268918","originalName":"1f88edf9-e1ad-41f6-bca0-39650bad892c.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T07:10:36.482Z"},"categoryId":"greeting-card","japaneseTranslation":"シンプルな棚に立てかけたグリーティングカードのモックアップ。ニュートラルなインテリア、朝のやわらかな光、リアルな厚紙の質感、清潔感のある商品写真。","isSample":true,"createdFromSeedExport":true,"sampleId":"sample-mockup-004","coverImages":[{"id":"1783062636482-b3c89941268918","dbId":"1783062636482-b3c89941268918","category":"prompt","src":"indexeddb:1783062636482-b3c89941268918","thumbnail":"indexeddb-thumb:1783062636482-b3c89941268918","originalName":"1f88edf9-e1ad-41f6-bca0-39650bad892c.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T07:10:36.482Z"}]},{"id":"lib-etsy-1","title":"明るいEtsyサムネイル","category":"Etsyサムネイル","description":"検索結果で見やすい、明るく余白のあるサムネイル構図。","prompt":"明るいEtsy商品画像サムネイル。商品を中央に配置、清潔感のある温かい白背景、見やすい構図、控えめな小物、クリックされやすいマーケット向け写真。","tags":["Etsy","サムネイル","商品画像"],"imageUrl":"data:image/svg+xml,%0A%20%20%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22900%22%20height%3D%22650%22%20viewBox%3D%220%200%20900%20650%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20stop-color%3D%22%23f8efe6%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23eadfcf%22%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22900%22%20height%3D%22650%22%20rx%3D%2242%22%20fill%3D%22url(%23g)%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22190%22%20cy%3D%22165%22%20r%3D%2280%22%20fill%3D%22%23fff%22%20opacity%3D%22.42%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22720%22%20cy%3D%22500%22%20r%3D%22140%22%20fill%3D%22%23fff%22%20opacity%3D%22.28%22%2F%3E%0A%20%20%20%20%3Crect%20x%3D%22210%22%20y%3D%22190%22%20width%3D%22480%22%20height%3D%22270%22%20rx%3D%2228%22%20fill%3D%22%23fffaf4%22%20opacity%3D%22.92%22%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%22450%22%20y%3D%22335%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%22%20font-size%3D%2242%22%20fill%3D%22%234b4038%22%3EEtsy%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E","categoryId":"etsy-thumbnail","japaneseTranslation":"明るいEtsy商品画像サムネイル。商品を中央に配置、清潔感のある温かい白背景、見やすい構図、控えめな小物、クリックされやすいマーケット向け写真。","isSample":true,"createdFromSeedExport":true,"sampleId":"sample-mockup-005"},{"id":"lib-print-1","title":"アートプリント","category":"アートプリントモックアップ","description":"アートプリントをリビングの壁に飾った販売ページ向け写真。","prompt":"Create a premium Etsy-style Wall Art mockup using ONLY the uploaded clipart artwork.\n\nThe uploaded clipart must remain completely unchanged.\n\nDo not redraw, repaint, recolor, simplify, replace, or reinterpret the artwork.\n\nUse the uploaded clipart exactly as provided as professionally printed framed wall art.\n\n━━━━━━━━━━━━━━━━━━\nPRIMARY DESIGN\n━━━━━━━━━━━━━━━━━━\n\nCreate a realistic Etsy-style wall art mockup showing how the artwork would look displayed in a real home or lifestyle space.\n\nThe wall art is the product.\n\nThe goal is to make customers imagine displaying the artwork in their own space.\n\n━━━━━━━━━━━━━━━━━━\nIMAGE FORMAT\n━━━━━━━━━━━━━━━━━━\n\n• Final ratio: 4:3 landscape\n\n• Generate 10 separate images.\n\n• Each image should feature 1–3 framed wall art pieces.\n\n• The framed artwork should occupy about 40–70% of the image.\n\n• The artwork must remain clearly visible at Etsy thumbnail size.\n\n━━━━━━━━━━━━━━━━━━\nARTWORK SELECTION\n━━━━━━━━━━━━━━━━━━\n\nDo not use all uploaded artwork.\n\nSelect only the most suitable artwork elements.\n\nEach mockup should feature either:\n\n• 1 large framed artwork\n\n• 2 coordinated framed artworks\n\n• 3 coordinated framed artworks\n\nDistribute these naturally across the 10 images.\n\nEach framed print should clearly feature one selected artwork element or one thoughtfully designed composition.\n\nThe selection should feel curated, intentional, and commercially viable.\n\n━━━━━━━━━━━━━━━━━━\nTHEME-FIRST RULE\n━━━━━━━━━━━━━━━━━━\n\nAlways prioritize:\n\n1. Subject matter\n2. Theme\n3. Intended use\n4. Target audience\n5. Color palette\n\nNever build the room mainly around matching colors.\n\nThe artwork theme should guide the interior.\n\n━━━━━━━━━━━━━━━━━━\nLIFESTYLE INTERIOR RULE\n━━━━━━━━━━━━━━━━━━\n\nDo not create a generic stylish room.\n\nCreate a lifestyle space for someone who would genuinely love and display this artwork.\n\nThe room should feel specifically connected to the artwork's:\n\n* subject matter\n* mood\n* season\n* intended audience\n* lifestyle\n* story\n\nExamples:\n\nOcean artwork\n→ a Mediterranean coastal home for someone who loves seaside living\n\nHalloween artwork\n→ a cozy home of someone who loves seasonal Halloween decorating\n\nFarm artwork\n→ a rustic cottage or farmhouse space for someone who loves harvest and orchard style\n\nDinosaur artwork\n→ a playful children's room or playroom for a dinosaur-loving child\n\nMahjong artwork\n→ a stylish game room, entertainment corner, or social lounge for someone who loves game nights\n\nBack to School artwork\n→ a playful learning space, reading nook, or creative study corner\n\nThe interior should feel authentic and emotionally connected to the artwork.\n\n━━━━━━━━━━━━━━━━━━\nBACKGROUND & ROOM STYLING\n━━━━━━━━━━━━━━━━━━\n\nFurniture, materials, props, textures, and décor should reinforce the artwork theme.\n\nThe background should support the wall art without overpowering it.\n\nPossible display locations:\n\n* wall mounted above furniture\n* leaning on a shelf\n* picture ledge styling\n* console table styling\n* mantel display\n* bookshelf display\n* nursery wall\n* playroom wall\n* game room wall\n* seasonal shelf styling\n\nAvoid empty blank walls with no context.\n\nAvoid generic rooms that do not match the uploaded artwork.\n\n━━━━━━━━━━━━━━━━━━\nFRAME STYLING\n━━━━━━━━━━━━━━━━━━\n\nUse realistic, Etsy-friendly frames.\n\nPossible frame styles:\n\n* natural oak\n* light maple\n* white wood\n* painted wood\n* simple modern frame\n* soft pastel frame when appropriate\n\nAvoid ornate museum frames, gilded luxury frames, or overly formal gallery styling.\n\nFrames should feel approachable, modern, and suitable for home décor.\n\n━━━━━━━━━━━━━━━━━━\nMOCKUP PERSONALITY\n━━━━━━━━━━━━━━━━━━\n\nThe mockup should feel:\n\n* premium\n* warm\n* playful\n* stylish\n* welcoming\n* curated\n* Pinterest-worthy\n* Etsy bestseller quality\n\nThink boutique home décor, not luxury hotel interior.\n\n━━━━━━━━━━━━━━━━━━\nLIGHTING\n━━━━━━━━━━━━━━━━━━\n\nUse natural window light with soft shadows.\n\nCreate realistic professional home décor photography.\n\nThe wall art should remain the hero.\n\n━━━━━━━━━━━━━━━━━━\nNO PEOPLE\n━━━━━━━━━━━━━━━━━━\n\nDo not include people, children, babies, faces, hands, body parts, silhouettes, reflections of people, mannequins, or human figures.\n\nThe wall art must be displayed as a standalone home décor product.\n\n━━━━━━━━━━━━━━━━━━\n10 VARIATIONS\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 completely different wall art mockups.\n\nVary:\n\n* number of frames: 1, 2, or 3\n* frame arrangement\n* frame size\n* room type\n* lifestyle setting\n* furniture\n* wall color\n* décor objects\n* camera angle\n* lighting direction\n* shelf or wall styling\n\nAll 10 images must feel genuinely different.\n\n━━━━━━━━━━━━━━━━━━\nSTRICTLY AVOID\n━━━━━━━━━━━━━━━━━━\n\nUsing all uploaded artwork.\n\nClipart catalog appearance.\n\nTiny unreadable artwork.\n\nCrowded interiors.\n\nGeneric rooms unrelated to the artwork.\n\nLuxury hotel styling.\n\nCorporate office styling.\n\nEmpty blank walls.\n\nFrames that hide the artwork.\n\nBackgrounds that overpower the wall art.\n\n━━━━━━━━━━━━━━━━━━\nOUTPUT\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 unique wall art mockup variations.\n\nDeliver 10 separate images.\n\nFinal ratio: 4:3 landscape.\n\nDo not create a collage, grid, or contact sheet.\n\nDo not combine multiple mockups into one canvas.\n\nEach image must look like a real Etsy bestseller wall art listing.\n\nPhotorealistic.\n\nPremium Etsy styling.\n\nCurated lifestyle interior styling.\n\nTheme-based home décor storytelling.\n\nRealistic frame materials.\n\nWarm, inviting, and slightly playful atmosphere.\n\nNo people.","tags":["アートプリント","額縁","インテリア"],"imageUrl":{"id":"1783062728083-6342dd83c8cc68","dbId":"1783062728083-6342dd83c8cc68","category":"prompt","src":"indexeddb:1783062728083-6342dd83c8cc68","thumbnail":"indexeddb-thumb:1783062728083-6342dd83c8cc68","originalName":"d58281df-5558-41dd-a0b2-bd84a0e90dd5.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T07:12:08.083Z"},"categoryId":"art-print","japaneseTranslation":"落ち着いたリビングの壁に飾った額入りアートプリントのモックアップ。オーク材の額縁、ニュートラルなソファ、やわらかな日差し、北欧風インテリア、リアルなファインアート紙。","isSample":true,"createdFromSeedExport":true,"sampleId":"sample-mockup-006","coverImages":[{"id":"1783062728083-6342dd83c8cc68","dbId":"1783062728083-6342dd83c8cc68","category":"prompt","src":"indexeddb:1783062728083-6342dd83c8cc68","thumbnail":"indexeddb-thumb:1783062728083-6342dd83c8cc68","originalName":"d58281df-5558-41dd-a0b2-bd84a0e90dd5.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T07:12:08.083Z"}]},{"id":"lib-keychain-1","title":"アクリルキーホルダー","category":"アクリルキーホルダーモックアップ","description":"透明アクリルの厚みと金具が見える、かわいい商品写真風。","prompt":"Create a premium Etsy-style Acrylic Keychain mockup using ONLY the uploaded clipart artwork.\n\nThe uploaded clipart must remain completely unchanged.\n\nDo not redraw, repaint, restyle, simplify, alter colors, modify characters, add new illustrations, replace elements, or reinterpret the artwork.\n\nUse the uploaded clipart exactly as provided as professionally manufactured acrylic keychain designs.\n\n━━━━━━━━━━━━━━━━━━\nPRIMARY DESIGN PRINCIPLE\n━━━━━━━━━━━━━━━━━━\n\nThis task is NOT to showcase the clipart collection.\n\nThis task IS to create a realistic Etsy-style acrylic keychain mockup that demonstrates how the artwork could be sold as physical acrylic charms or keychains.\n\nThe acrylic keychains themselves are the product.\n\nThe final image should look like a real Etsy bestseller listing.\n\n━━━━━━━━━━━━━━━━━━\nIMAGE FORMAT\n━━━━━━━━━━━━━━━━━━\n\nFinal image ratio: 4:3\n\nLandscape orientation.\n\nThe keychains should occupy approximately 35–60% of the image.\n\nThe environment should remain visible.\n\nThe image should be optimized for Etsy search results and mobile browsing.\n\n━━━━━━━━━━━━━━━━━━\nTHEME-FIRST STYLING RULE\n━━━━━━━━━━━━━━━━━━\n\nBefore designing the mockup, determine:\n\n* Theme\n* Subject Matter\n* Intended Use\n* Target Audience\n* Lifestyle Context\n\nThe entire scene must be built around the artwork theme.\n\nDo not build the scene around matching colors.\n\nThe theme always overrides the color palette.\n\n━━━━━━━━━━━━━━━━━━\nBACKGROUND PRIORITY RULE\n━━━━━━━━━━━━━━━━━━\n\nThe environment must be determined by:\n\n1. Theme\n2. Subject Matter\n3. Intended Use\n4. Target Audience\n5. Color Palette\n\nNever reverse this order.\n\nColor palette should only be used as a supporting accent.\n\n━━━━━━━━━━━━━━━━━━\nKEYCHAIN FORMAT\n━━━━━━━━━━━━━━━━━━\n\nTransform the uploaded artwork into realistic acrylic keychains.\n\nPossible formats:\n\n* die-cut acrylic charms\n* acrylic keychains\n* clear acrylic charms\n* epoxy acrylic charms\n* double-sided acrylic charms\n* holographic acrylic charms\n\nUse approximately 4–12 keychains within the scene.\n\nSelect only the most suitable artwork elements.\n\nDo not use every uploaded artwork element.\n\nThe collection should feel curated and commercially viable.\n\nThe keychains should appear realistic in size.\n\nIndividual keychains should typically measure approximately 2–3 inches (5–8 cm).\n\nAvoid oversized keychains.\n\nAvoid hero shots of a single giant keychain.\n\nPrioritize realistic scale and collectible charm presentation.\n\n━━━━━━━━━━━━━━━━━━\nACRYLIC MATERIAL RULE\n━━━━━━━━━━━━━━━━━━\n\nThe acrylic should look realistic.\n\nInclude:\n\n* clear acrylic edges\n* acrylic thickness\n* glossy reflections\n* realistic transparency\n* polished surfaces\n* subtle edge highlights\n\nThe keychains should look professionally manufactured.\n\nAvoid flat paper-cutout appearances.\n\n━━━━━━━━━━━━━━━━━━\nBACKGROUND STORY RULE\n━━━━━━━━━━━━━━━━━━\n\nThe background is extremely important.\n\nThe scene should feel like a realistic environment where someone would naturally use, collect, gift, display, or carry these keychains.\n\nThe environment should immediately communicate the artwork theme.\n\nExamples:\n\nHalloween Artwork\n→ spooky cute accessories\n→ seasonal desk styling\n→ Halloween party favors\n\nMahjong Artwork\n→ game-night setup\n→ cocktails\n→ mahjong accessories\n→ social gathering atmosphere\n\nOcean Artwork\n→ coastal lifestyle\n→ Mediterranean-inspired styling\n→ travel accessories\n\nFarm Artwork\n→ cozy autumn decor\n→ harvest-inspired lifestyle\n\nBack To School Artwork\n→ backpack accessories\n→ notebooks\n→ school supplies\n→ student desk styling\n\nThe scene should help buyers imagine owning and using the keychains.\n\n━━━━━━━━━━━━━━━━━━\nDISPLAY STYLING\n━━━━━━━━━━━━━━━━━━\n\nPossible presentations:\n\n* keychains attached to key rings\n* keychains attached to handbags\n* keychains attached to backpacks\n* keychains displayed on acrylic stands\n* keychains arranged on a styled tabletop\n* keychains displayed with backing cards\n* collectible charm display\n\nCreate depth and layering.\n\nAllow realistic overlap.\n\nThe keychains must remain clearly visible.\n\nThe keychains should feel like small premium accessories rather than large decorative objects.\n\nThe keychains are always the hero, but should never dominate the entire frame.\n\n━━━━━━━━━━━━━━━━━━\nMOCKUP PERSONALITY\n━━━━━━━━━━━━━━━━━━\n\nThe mockup should feel:\n\n* premium\n* playful\n* stylish\n* collectible\n* giftable\n* welcoming\n* Pinterest-worthy\n* Etsy bestseller quality\n\nThink:\n\n* boutique accessory shop\n* artist alley merchandise\n* premium acrylic charm brand\n* collectible accessory display\n\nAvoid:\n\n* luxury fashion branding\n* corporate styling\n* sterile product photography\n* generic stock-photo environments\n\n━━━━━━━━━━━━━━━━━━\nPACKAGING OPTIONS\n━━━━━━━━━━━━━━━━━━\n\nSome variations may include:\n\n* backing cards\n* branded display cards\n* small gift packaging\n* organza bags\n* display trays\n\nPackaging should support the product.\n\nPackaging should never overpower the keychains.\n\n━━━━━━━━━━━━━━━━━━\nLIGHTING\n━━━━━━━━━━━━━━━━━━\n\nNatural daylight.\n\nSoft window light.\n\nWarm highlights.\n\nGentle shadows.\n\nBright inviting atmosphere.\n\nProfessional commercial product photography.\n\nAllow realistic acrylic reflections and shine.\n\nAvoid dramatic studio lighting.\n\nAvoid dark editorial lighting.\n\n━━━━━━━━━━━━━━━━━━\n10 UNIQUE VARIATIONS\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 completely different acrylic keychain mockups.\n\nEach image should feel like a different professional product photoshoot.\n\nVary:\n\n* keychain style\n* display method\n* packaging\n* lifestyle setup\n* props\n* camera angle\n* surface material\n* background styling\n* lighting direction\n\nAll 10 images must feel genuinely different.\n\n━━━━━━━━━━━━━━━━━━\nSTRICTLY AVOID\n━━━━━━━━━━━━━━━━━━\n\nUsing all artwork.\n\nClipart catalog appearance.\n\nSticker-sheet appearance.\n\nFlat paper-cutout appearance.\n\nOversized keychains.\n\nSingle giant keychain hero shots.\n\nTiny unreadable keychains.\n\nGeneric backgrounds.\n\nCorporate styling.\n\nLuxury fashion styling.\n\nBackgrounds that overpower the keychains.\n\nPackaging that hides the artwork.\n\n━━━━━━━━━━━━━━━━━━\nOUTPUT REQUIREMENTS\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 unique acrylic keychain mockup variations.\n\nDeliver 10 separate images.\n\nFinal image ratio: 4:3\n\nLandscape orientation.\n\nDo not create a collage.\n\nDo not create a grid.\n\nDo not create a contact sheet.\n\nDo not combine multiple mockups into one canvas.\n\nEach image must look like a real Etsy bestseller acrylic keychain listing.\n\nPhotorealistic.\n\nPinterest-worthy.\n\nPremium Etsy styling.\n\nCollectible accessory styling.\n\nProfessional commercial product photography.\n\nRealistic acrylic materials.\n\nTheme-based lifestyle storytelling.\n\nInviting and slightly playful atmosphere.\n\nRealistic small-scale acrylic charms.\n\nCollectible accessory scale.\n\nAvoid oversized keychains.\n\nPrioritize realistic Etsy product photography.","tags":["キーホルダー","アクリル","チャーム"],"imageUrl":{"id":"1783062847419-2e0fc304cf4b08","dbId":"1783062847419-2e0fc304cf4b08","category":"prompt","src":"indexeddb:1783062847419-2e0fc304cf4b08","thumbnail":"indexeddb-thumb:1783062847419-2e0fc304cf4b08","originalName":"4e0a6134-8cfb-4b22-a7d7-987024853405.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T07:14:07.419Z"},"categoryId":"keychain","japaneseTranslation":"透明でつやのある縁が見えるアクリルキーホルダーのモックアップ。ゴールドの金具、かわいいチャームの商品写真、淡いニュートラル背景、やわらかな反射、ハンドメイドショップ風。","isSample":true,"createdFromSeedExport":true,"sampleId":"sample-mockup-007","coverImages":[{"id":"1783062847419-2e0fc304cf4b08","dbId":"1783062847419-2e0fc304cf4b08","category":"prompt","src":"indexeddb:1783062847419-2e0fc304cf4b08","thumbnail":"indexeddb-thumb:1783062847419-2e0fc304cf4b08","originalName":"4e0a6134-8cfb-4b22-a7d7-987024853405.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T07:14:07.419Z"}],"favorite":true},{"id":"1783062951005-3cf68d9af43518","title":"文房具","category":"ステッカーモックアップ","categoryId":"1783060221248-f2021f3b0d9a9","description":"","prompt":"Create premium Etsy-style stationery mockups using ONLY the uploaded clipart artwork.\n\nThe uploaded artwork must remain completely unchanged.\n\nDo not redraw, repaint, recolor, simplify, replace, or reinterpret the artwork.\n\nUse the artwork exactly as provided as professionally printed stationery designs.\n\n━━━━━━━━━━━━━━━━━━\nPRIMARY DESIGN\n━━━━━━━━━━━━━━━━━━\n\nCreate realistic Etsy bestseller mockups showing how the artwork could be sold as a premium stationery collection.\n\nThe stationery products are the hero.\n\n━━━━━━━━━━━━━━━━━━\nIMAGE FORMAT\n━━━━━━━━━━━━━━━━━━\n\n• Final ratio: 4:3 (landscape)\n\n• Generate 10 separate images.\n\n• Display approximately 3–6 coordinated stationery products per image.\n\n• The stationery should occupy about 45–75% of the frame.\n\n• The printed designs must remain easy to recognize at Etsy thumbnail size.\n\n━━━━━━━━━━━━━━━━━━\nTHEME FIRST\n━━━━━━━━━━━━━━━━━━\n\nBuild the entire scene around the uploaded artwork's:\n\n* theme\n* subject\n* season\n* target audience\n* intended lifestyle\n\nAlways prioritize the artwork's theme over its colors.\n\n━━━━━━━━━━━━━━━━━━\nSTATIONERY DESIGN\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 unique stationery mockups.\n\nVariation Types:\n\n**5 mockups should feature Statement Designs.**\n\nEach stationery product should have its own unique design while remaining part of the same coordinated collection.\n\nUse approximately 1–5 carefully selected artwork elements for each product.\n\nThe artwork should occupy approximately 35–70% of each product.\n\nDo not simply enlarge one clipart.\n\nInstead, create a unique composition for every product.\n\nFor example:\n\n* notebook → large hero composition\n* journal → different hero composition\n* bookmark → vertical layout\n* pencil case → balanced composition\n* pen → miniature icon arrangement\n* pencil → small coordinated graphics\n* sticky notes → simple layout with generous whitespace\n\nEach product should feel individually designed.\n\nThe entire collection should feel cohesive.\n\n━━━━━━━━━━━━━━━━━━\n\n**5 mockups should feature Coordinated Pattern Designs.**\n\nCreate boutique-quality repeating patterns using the uploaded artwork.\n\nEvery stationery product should feature a different version of the pattern.\n\nExamples:\n\n* notebook → medium repeat\n* journal → large repeat\n* pencil case → diagonal repeat\n* bookmark → vertical repeat\n* pen → tiny micro pattern\n* pencil → miniature repeating icons\n* sticky notes → sparse repeat\n* memo pad → offset repeat\n\nVary naturally:\n\n* artwork selection\n* scale\n* spacing\n* rotation\n* density\n* layout\n\nAvoid applying the exact same pattern to every product.\n\nThe collection should resemble a professionally designed stationery series.\n\n━━━━━━━━━━━━━━━━━━\nSTATIONERY PRODUCTS\n━━━━━━━━━━━━━━━━━━\n\nDisplay a coordinated stationery gift collection.\n\nPossible products include:\n\n* small spiral notebook\n* hardcover journal\n* memo pad\n* sticky notes\n* bookmark\n* pencil case\n* pen\n* pencil\n* clipboard\n* desk pad\n* folder\n* planner cover\n* washi tape\n\nDisplay approximately 3–6 products in each image.\n\nCreate the impression of a premium matching stationery collection.\n\n━━━━━━━━━━━━━━━━━━\nDISPLAY STYLING\n━━━━━━━━━━━━━━━━━━\n\nArrange the stationery naturally on a tabletop or desk.\n\nPossible presentations:\n\n* creative workspace\n* boutique stationery display\n* flat lay\n* study desk\n* gift set presentation\n* neatly styled desktop\n\nCreate natural overlap and depth.\n\nThe stationery should always remain the hero.\n\n━━━━━━━━━━━━━━━━━━\nBACKGROUND\n━━━━━━━━━━━━━━━━━━\n\nCreate an environment that naturally matches the artwork theme.\n\nExamples:\n\nHalloween\n→ cozy autumn desk\n\nMahjong\n→ stylish game-night stationery\n\nOcean\n→ Mediterranean workspace\n\nFarm\n→ rustic cottage desk\n\nBack To School\n→ modern study desk\n\nBaby\n→ soft nursery workspace\n\nThe background should support the stationery without becoming the focal point.\n\n━━━━━━━━━━━━━━━━━━\nLIGHTING\n━━━━━━━━━━━━━━━━━━\n\nUse natural window light with soft shadows.\n\nHighlight the paper texture, notebook covers, pen finishes and printed details.\n\nCreate realistic commercial stationery photography.\n\n━━━━━━━━━━━━━━━━━━\nNO PEOPLE\n━━━━━━━━━━━━━━━━━━\n\nDo not include:\n\n* people\n* children\n* babies\n* hands\n* body parts\n* models\n* mannequins\n* silhouettes\n* reflections of people\n\nAlways present the stationery as standalone products.\n\n━━━━━━━━━━━━━━━━━━\n10 VARIATIONS\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 completely different mockups.\n\nWithin each stationery collection, every product should have its own unique artwork arrangement.\n\nNo two products should share the exact same composition or repeating pattern.\n\nVary:\n\n* stationery products\n* statement vs pattern designs\n* product combinations\n* artwork layouts\n* artwork scale\n* pattern density\n* tabletop materials\n* props\n* camera angle\n* lighting\n* background styling\n\n━━━━━━━━━━━━━━━━━━\nOUTPUT\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 separate stationery mockups.\n\n• 5 images should feature coordinated Statement Designs.\n\n• 5 images should feature coordinated Pattern Designs.\n\nEach product within the same image should have its own custom design while clearly belonging to the same stationery collection.\n\nDo not create a collage.\n\nDo not create a grid.\n\nDo not create a contact sheet.\n\nDo not combine multiple mockups into one canvas.\n\nEach image must look like a real Etsy bestseller stationery listing.\n\nPhotorealistic.\n\nPremium boutique stationery styling.\n\nPinterest-worthy.\n\nProfessional commercial product photography.\n\nRealistic paper and fabric textures.\n\nTheme-based lifestyle storytelling.\n\nSlightly playful.\n\nNo people.\n","memo":"","tags":[],"imageUrl":{"id":"1783062916804-398046ea5de8c8","dbId":"1783062916804-398046ea5de8c8","category":"mockup","src":"indexeddb:1783062916804-398046ea5de8c8","thumbnail":"indexeddb-thumb:1783062916804-398046ea5de8c8","originalName":"c2eea75a-33d6-436b-be08-b5784086b440.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T07:15:16.804Z"},"coverImages":[{"id":"1783062916804-398046ea5de8c8","dbId":"1783062916804-398046ea5de8c8","category":"mockup","src":"indexeddb:1783062916804-398046ea5de8c8","thumbnail":"indexeddb-thumb:1783062916804-398046ea5de8c8","originalName":"c2eea75a-33d6-436b-be08-b5784086b440.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T07:15:16.804Z"}],"japaneseTranslation":"Create premium Etsy-style stationery mockups using ONLY the uploaded clipart artwork.\n\nThe uploaded artwork must remain completely unchanged.\n\nDo not redraw, repaint, recolor, simplify, replace, or reinterpret the artwork.\n\nUse the artwork exactly as provided as professionally printed stationery designs.\n\n━━━━━━━━━━━━━━━━━━\nPRIMARY DESIGN\n━━━━━━━━━━━━━━━━━━\n\nCreate realistic Etsy bestseller mockups showing how the artwork could be sold as a premium stationery collection.\n\nThe stationery products are the hero.\n\n━━━━━━━━━━━━━━━━━━\nIMAGE FORMAT\n━━━━━━━━━━━━━━━━━━\n\n• Final ratio: 4:3 (landscape)\n\n• Generate 10 separate images.\n\n• Display approximately 3–6 coordinated stationery products per image.\n\n• The stationery should occupy about 45–75% of the frame.\n\n• The printed designs must remain easy to recognize at Etsy thumbnail size.\n\n━━━━━━━━━━━━━━━━━━\nTHEME FIRST\n━━━━━━━━━━━━━━━━━━\n\nBuild the entire scene around the uploaded artwork's:\n\n* theme\n* subject\n* season\n* target audience\n* intended lifestyle\n\nAlways prioritize the artwork's theme over its colors.\n\n━━━━━━━━━━━━━━━━━━\nSTATIONERY DESIGN\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 unique stationery mockups.\n\nVariation Types:\n\n**5 mockups should feature Statement Designs.**\n\nEach stationery product should have its own unique design while remaining part of the same coordinated collection.\n\nUse approximately 1–5 carefully selected artwork elements for each product.\n\nThe artwork should occupy approximately 35–70% of each product.\n\nDo not simply enlarge one clipart.\n\nInstead, create a unique composition for every product.\n\nFor example:\n\n* notebook → large hero composition\n* journal → different hero composition\n* bookmark → vertical layout\n* pencil case → balanced composition\n* pen → miniature icon arrangement\n* pencil → small coordinated graphics\n* sticky notes → simple layout with generous whitespace\n\nEach product should feel individually designed.\n\nThe entire collection should feel cohesive.\n\n━━━━━━━━━━━━━━━━━━\n\n**5 mockups should feature Coordinated Pattern Designs.**\n\nCreate boutique-quality repeating patterns using the uploaded artwork.\n\nEvery stationery product should feature a different version of the pattern.\n\nExamples:\n\n* notebook → medium repeat\n* journal → large repeat\n* pencil case → diagonal repeat\n* bookmark → vertical repeat\n* pen → tiny micro pattern\n* pencil → miniature repeating icons\n* sticky notes → sparse repeat\n* memo pad → offset repeat\n\nVary naturally:\n\n* artwork selection\n* scale\n* spacing\n* rotation\n* density\n* layout\n\nAvoid applying the exact same pattern to every product.\n\nThe collection should resemble a professionally designed stationery series.\n\n━━━━━━━━━━━━━━━━━━\nSTATIONERY PRODUCTS\n━━━━━━━━━━━━━━━━━━\n\nDisplay a coordinated stationery gift collection.\n\nPossible products include:\n\n* small spiral notebook\n* hardcover journal\n* memo pad\n* sticky notes\n* bookmark\n* pencil case\n* pen\n* pencil\n* clipboard\n* desk pad\n* folder\n* planner cover\n* washi tape\n\nDisplay approximately 3–6 products in each image.\n\nCreate the impression of a premium matching stationery collection.\n\n━━━━━━━━━━━━━━━━━━\nDISPLAY STYLING\n━━━━━━━━━━━━━━━━━━\n\nArrange the stationery naturally on a tabletop or desk.\n\nPossible presentations:\n\n* creative workspace\n* boutique stationery display\n* flat lay\n* study desk\n* gift set presentation\n* neatly styled desktop\n\nCreate natural overlap and depth.\n\nThe stationery should always remain the hero.\n\n━━━━━━━━━━━━━━━━━━\nBACKGROUND\n━━━━━━━━━━━━━━━━━━\n\nCreate an environment that naturally matches the artwork theme.\n\nExamples:\n\nHalloween\n→ cozy autumn desk\n\nMahjong\n→ stylish game-night stationery\n\nOcean\n→ Mediterranean workspace\n\nFarm\n→ rustic cottage desk\n\nBack To School\n→ modern study desk\n\nBaby\n→ soft nursery workspace\n\nThe background should support the stationery without becoming the focal point.\n\n━━━━━━━━━━━━━━━━━━\nLIGHTING\n━━━━━━━━━━━━━━━━━━\n\nUse natural window light with soft shadows.\n\nHighlight the paper texture, notebook covers, pen finishes and printed details.\n\nCreate realistic commercial stationery photography.\n\n━━━━━━━━━━━━━━━━━━\nNO PEOPLE\n━━━━━━━━━━━━━━━━━━\n\nDo not include:\n\n* people\n* children\n* babies\n* hands\n* body parts\n* models\n* mannequins\n* silhouettes\n* reflections of people\n\nAlways present the stationery as standalone products.\n\n━━━━━━━━━━━━━━━━━━\n10 VARIATIONS\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 completely different mockups.\n\nWithin each stationery collection, every product should have its own unique artwork arrangement.\n\nNo two products should share the exact same composition or repeating pattern.\n\nVary:\n\n* stationery products\n* statement vs pattern designs\n* product combinations\n* artwork layouts\n* artwork scale\n* pattern density\n* tabletop materials\n* props\n* camera angle\n* lighting\n* background styling\n\n━━━━━━━━━━━━━━━━━━\nOUTPUT\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 separate stationery mockups.\n\n• 5 images should feature coordinated Statement Designs.\n\n• 5 images should feature coordinated Pattern Designs.\n\nEach product within the same image should have its own custom design while clearly belonging to the same stationery collection.\n\nDo not create a collage.\n\nDo not create a grid.\n\nDo not create a contact sheet.\n\nDo not combine multiple mockups into one canvas.\n\nEach image must look like a real Etsy bestseller stationery listing.\n\nPhotorealistic.\n\nPremium boutique stationery styling.\n\nPinterest-worthy.\n\nProfessional commercial product photography.\n\nRealistic paper and fabric textures.\n\nTheme-based lifestyle storytelling.\n\nSlightly playful.\n\nNo people.\n","isTextStock":false,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-mockup-008"},{"id":"1783062993069-8de5ad58dac848","title":"コラージュ","category":"ステッカーモックアップ","categoryId":"1783060284528-ec4f9844eba338","description":"","prompt":"Create a premium Etsy-style collage mockup using ONLY the uploaded clipart artwork.\nThe uploaded clipart must remain completely unchanged.\nDo not redraw, repaint, recolor, simplify, replace, or reinterpret the artwork.\nUse the uploaded artwork exactly as provided as professionally printed collage elements.\n━━━━━━━━━━━━━━━━━━ PRIMARY DESIGN ━━━━━━━━━━━━━━━━━━\nCreate a realistic Etsy bestseller collage mockup showing how the uploaded artwork could be used in scrapbooking, junk journaling, paper crafting, or printable collage projects.\nThe collage is the product.\n━━━━━━━━━━━━━━━━━━ IMAGE FORMAT ━━━━━━━━━━━━━━━━━━\n• Final ratio: 4:3 landscape\n• Generate 10 separate images.\n• Display 1 completed collage composition per image.\n• The collage should occupy approximately 45–75% of the frame.\n• The artwork must remain clearly visible at Etsy thumbnail size.\n━━━━━━━━━━━━━━━━━━ THEME FIRST ━━━━━━━━━━━━━━━━━━\nBuild the entire collage around the uploaded artwork's:\n* theme\n* subject\n* season\n* target audience\n* intended lifestyle\nAlways prioritize the artwork theme over the artwork colors.\n━━━━━━━━━━━━━━━━━━ COLLAGE DESIGN ━━━━━━━━━━━━━━━━━━\nGenerate 10 unique collage mockups.\nVariation Types:\n5 mockups should feature Statement Collages.\nUse approximately 3–8 carefully selected artwork elements.\nArrange them into one professionally designed collage composition.\nUse layering, overlapping and varied sizing naturally.\nMaintain balanced whitespace.\nThe composition should feel curated rather than randomly assembled.\n\n5 mockups should feature Mixed Pattern Collages.\nCombine repeating artwork, paper pieces and decorative layouts into a coordinated collage.\nCreate variation through:\n* artwork scale\n* spacing\n* overlap\n* rotation\n* layering\nAvoid simply repeating the same layout.\nEvery collage should feel individually designed.\n━━━━━━━━━━━━━━━━━━ COLLAGE MATERIALS ━━━━━━━━━━━━━━━━━━\nThe collage may include realistic paper craft elements such as:\n* torn paper\n* textured cardstock\n* handmade paper\n* vintage paper\n* kraft paper\n* vellum\n* grid paper\n* notebook paper\n* textured watercolor paper\nAdditional decorative elements are allowed if they naturally fit the artwork theme, including:\n* washi tape\n* paper clips\n* binder clips\n* postage stamps\n* labels\n* stitched paper\n* tags\n* ribbons\n* twine\n* envelopes\n* tickets\n* paper frames\nThese supporting materials should enhance the collage without overpowering the uploaded artwork.\n━━━━━━━━━━━━━━━━━━ DISPLAY STYLING ━━━━━━━━━━━━━━━━━━\nDisplay the finished collage naturally on:\n* wooden table\n* craft desk\n* scrapbook workspace\n* journal page\n* cutting mat\n* clipboard\n* sketchbook\n* art board\nThe collage should appear complete.\nAvoid showing an unfinished craft project.\n━━━━━━━━━━━━━━━━━━ BACKGROUND ━━━━━━━━━━━━━━━━━━\nCreate a workspace or display area that naturally matches the artwork theme.\nExamples:\nHalloween → cozy autumn craft desk\nOcean → bright coastal crafting table\nMahjong → stylish creative workspace with playful game-night atmosphere\nFarm → rustic handmade craft table\nBaby → soft pastel craft room\nThe environment should reinforce the artwork theme without becoming the focal point.\n━━━━━━━━━━━━━━━━━━ LIGHTING ━━━━━━━━━━━━━━━━━━\nUse natural daylight with soft shadows.\nHighlight realistic paper textures, layered edges and printed materials.\nCreate professional craft product photography.\n━━━━━━━━━━━━━━━━━━ NO PEOPLE ━━━━━━━━━━━━━━━━━━\nDo not include:\n* people\n* hands\n* arms\n* body parts\n* reflections\n* silhouettes\nThe collage should be displayed as a finished product without anyone interacting with it.\n━━━━━━━━━━━━━━━━━━ 10 VARIATIONS ━━━━━━━━━━━━━━━━━━\nGenerate 10 completely different collage mockups.\nVary:\n* collage layout\n* artwork selection\n* layering\n* paper materials\n* decorative elements\n* background surface\n* camera angle\n* lighting\n* composition style\n━━━━━━━━━━━━━━━━━━ STRICTLY AVOID ━━━━━━━━━━━━━━━━━━\nUsing every uploaded artwork element.\nClipart catalog appearance.\nRandomly scattered clipart.\nCrowded compositions.\nTiny unreadable artwork.\nUnfinished crafting process.\nHands assembling the collage.\nBackgrounds that overpower the collage.\n━━━━━━━━━━━━━━━━━━ OUTPUT ━━━━━━━━━━━━━━━━━━\nGenerate 10 separate collage mockups.\n• 5 images should feature Statement Collages.\n• 5 images should feature Mixed Pattern Collages.\nDo not create a collage sheet or contact sheet.\nDo not combine multiple mockups into one canvas.\nEach image must look like a real Etsy bestseller collage or scrapbook listing.\nPhotorealistic.\nPremium boutique paper craft styling.\nPinterest-worthy.\nProfessional commercial product photography.\nRealistic paper textures.\nTheme-based lifestyle storytelling.\nWarm, inviting and slightly playful atmosphere.\nNo people.\n","memo":"","tags":[],"imageUrl":{"id":"1783062974233-7d6e4ef02fd448","dbId":"1783062974233-7d6e4ef02fd448","category":"mockup","src":"indexeddb:1783062974233-7d6e4ef02fd448","thumbnail":"indexeddb-thumb:1783062974233-7d6e4ef02fd448","originalName":"0b7a183d-e8f3-4091-8989-bbf449a7052e.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T07:16:14.233Z"},"coverImages":[{"id":"1783062974233-7d6e4ef02fd448","dbId":"1783062974233-7d6e4ef02fd448","category":"mockup","src":"indexeddb:1783062974233-7d6e4ef02fd448","thumbnail":"indexeddb-thumb:1783062974233-7d6e4ef02fd448","originalName":"0b7a183d-e8f3-4091-8989-bbf449a7052e.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T07:16:14.233Z"}],"japaneseTranslation":"Create a premium Etsy-style collage mockup using ONLY the uploaded clipart artwork.\nThe uploaded clipart must remain completely unchanged.\nDo not redraw, repaint, recolor, simplify, replace, or reinterpret the artwork.\nUse the uploaded artwork exactly as provided as professionally printed collage elements.\n━━━━━━━━━━━━━━━━━━ PRIMARY DESIGN ━━━━━━━━━━━━━━━━━━\nCreate a realistic Etsy bestseller collage mockup showing how the uploaded artwork could be used in scrapbooking, junk journaling, paper crafting, or printable collage projects.\nThe collage is the product.\n━━━━━━━━━━━━━━━━━━ IMAGE FORMAT ━━━━━━━━━━━━━━━━━━\n• Final ratio: 4:3 landscape\n• Generate 10 separate images.\n• Display 1 completed collage composition per image.\n• The collage should occupy approximately 45–75% of the frame.\n• The artwork must remain clearly visible at Etsy thumbnail size.\n━━━━━━━━━━━━━━━━━━ THEME FIRST ━━━━━━━━━━━━━━━━━━\nBuild the entire collage around the uploaded artwork's:\n* theme\n* subject\n* season\n* target audience\n* intended lifestyle\nAlways prioritize the artwork theme over the artwork colors.\n━━━━━━━━━━━━━━━━━━ COLLAGE DESIGN ━━━━━━━━━━━━━━━━━━\nGenerate 10 unique collage mockups.\nVariation Types:\n5 mockups should feature Statement Collages.\nUse approximately 3–8 carefully selected artwork elements.\nArrange them into one professionally designed collage composition.\nUse layering, overlapping and varied sizing naturally.\nMaintain balanced whitespace.\nThe composition should feel curated rather than randomly assembled.\n\n5 mockups should feature Mixed Pattern Collages.\nCombine repeating artwork, paper pieces and decorative layouts into a coordinated collage.\nCreate variation through:\n* artwork scale\n* spacing\n* overlap\n* rotation\n* layering\nAvoid simply repeating the same layout.\nEvery collage should feel individually designed.\n━━━━━━━━━━━━━━━━━━ COLLAGE MATERIALS ━━━━━━━━━━━━━━━━━━\nThe collage may include realistic paper craft elements such as:\n* torn paper\n* textured cardstock\n* handmade paper\n* vintage paper\n* kraft paper\n* vellum\n* grid paper\n* notebook paper\n* textured watercolor paper\nAdditional decorative elements are allowed if they naturally fit the artwork theme, including:\n* washi tape\n* paper clips\n* binder clips\n* postage stamps\n* labels\n* stitched paper\n* tags\n* ribbons\n* twine\n* envelopes\n* tickets\n* paper frames\nThese supporting materials should enhance the collage without overpowering the uploaded artwork.\n━━━━━━━━━━━━━━━━━━ DISPLAY STYLING ━━━━━━━━━━━━━━━━━━\nDisplay the finished collage naturally on:\n* wooden table\n* craft desk\n* scrapbook workspace\n* journal page\n* cutting mat\n* clipboard\n* sketchbook\n* art board\nThe collage should appear complete.\nAvoid showing an unfinished craft project.\n━━━━━━━━━━━━━━━━━━ BACKGROUND ━━━━━━━━━━━━━━━━━━\nCreate a workspace or display area that naturally matches the artwork theme.\nExamples:\nHalloween → cozy autumn craft desk\nOcean → bright coastal crafting table\nMahjong → stylish creative workspace with playful game-night atmosphere\nFarm → rustic handmade craft table\nBaby → soft pastel craft room\nThe environment should reinforce the artwork theme without becoming the focal point.\n━━━━━━━━━━━━━━━━━━ LIGHTING ━━━━━━━━━━━━━━━━━━\nUse natural daylight with soft shadows.\nHighlight realistic paper textures, layered edges and printed materials.\nCreate professional craft product photography.\n━━━━━━━━━━━━━━━━━━ NO PEOPLE ━━━━━━━━━━━━━━━━━━\nDo not include:\n* people\n* hands\n* arms\n* body parts\n* reflections\n* silhouettes\nThe collage should be displayed as a finished product without anyone interacting with it.\n━━━━━━━━━━━━━━━━━━ 10 VARIATIONS ━━━━━━━━━━━━━━━━━━\nGenerate 10 completely different collage mockups.\nVary:\n* collage layout\n* artwork selection\n* layering\n* paper materials\n* decorative elements\n* background surface\n* camera angle\n* lighting\n* composition style\n━━━━━━━━━━━━━━━━━━ STRICTLY AVOID ━━━━━━━━━━━━━━━━━━\nUsing every uploaded artwork element.\nClipart catalog appearance.\nRandomly scattered clipart.\nCrowded compositions.\nTiny unreadable artwork.\nUnfinished crafting process.\nHands assembling the collage.\nBackgrounds that overpower the collage.\n━━━━━━━━━━━━━━━━━━ OUTPUT ━━━━━━━━━━━━━━━━━━\nGenerate 10 separate collage mockups.\n• 5 images should feature Statement Collages.\n• 5 images should feature Mixed Pattern Collages.\nDo not create a collage sheet or contact sheet.\nDo not combine multiple mockups into one canvas.\nEach image must look like a real Etsy bestseller collage or scrapbook listing.\nPhotorealistic.\nPremium boutique paper craft styling.\nPinterest-worthy.\nProfessional commercial product photography.\nRealistic paper textures.\nTheme-based lifestyle storytelling.\nWarm, inviting and slightly playful atmosphere.\nNo people.\n","isTextStock":false,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-mockup-009"},{"id":"1783063055035-28952103d8d3c","title":"プリント式ブランケット","category":"ステッカーモックアップ","categoryId":"1783060414229-ef96655cc20d48","description":"","prompt":"Create premium Etsy-style printed blanket mockups using ONLY the uploaded clipart artwork.\nThe uploaded artwork must remain completely unchanged.\nDo not redraw, repaint, recolor, simplify, replace, or reinterpret the artwork.\nUse the artwork exactly as provided as professionally printed blanket designs.\n━━━━━━━━━━━━━━━━━━ PRIMARY DESIGN ━━━━━━━━━━━━━━━━━━\nCreate realistic Etsy bestseller mockups showing how the artwork could be sold on premium printed blankets.\nThe blanket is the product.\n━━━━━━━━━━━━━━━━━━ IMAGE FORMAT ━━━━━━━━━━━━━━━━━━\n• Final ratio: 4:3 (landscape)\n• Generate 10 separate images.\n• Display approximately 1–2 coordinated blankets per image.\n• The blankets should occupy about 45–75% of the frame.\n• The printed designs must remain easy to recognize at Etsy thumbnail size.\n━━━━━━━━━━━━━━━━━━ THEME FIRST ━━━━━━━━━━━━━━━━━━\nBuild the entire scene around the uploaded artwork's:\n* theme\n* subject\n* season\n* target audience\n* intended lifestyle\nAlways prioritize the artwork's theme over its colors.\n━━━━━━━━━━━━━━━━━━ BLANKET DESIGN ━━━━━━━━━━━━━━━━━━\nGenerate 10 unique blanket mockups.\nVariation Types:\n5 blankets should feature a Large Statement Design.\nUse approximately 1–5 carefully selected artwork elements arranged into one professionally composed blanket design.\nThe design should occupy approximately 40–70% of the visible blanket.\nMaintain generous negative space.\nAvoid simply enlarging one clipart element.\nThe composition should feel like a professionally designed premium throw blanket.\n\n5 blankets should feature an All-over Pattern Design.\nCreate a coordinated repeating textile-style pattern using the uploaded artwork.\nUse smaller artwork elements distributed naturally across the blanket.\nVary the scale, spacing and rotation slightly.\nMaintain balanced spacing and visual rhythm.\nAvoid random scattering.\nThe finished blanket should resemble a professionally printed home décor textile.\nDo not mix statement and pattern styles within the same blanket.\n━━━━━━━━━━━━━━━━━━ BLANKET TYPES ━━━━━━━━━━━━━━━━━━\nPossible blanket styles:\n* plush throw blanket\n* velveteen blanket\n* minky blanket\n* fleece blanket\n* sherpa blanket\n* premium woven throw\n* luxury velvet throw\n* decorative throw blanket\nThe blanket itself may include subtle premium details such as:\n* stitched borders\n* contrast edging\n* scalloped trim\n* fringe\n* sherpa backing\n* embossed fabric texture\n* premium woven texture\nThese details should enhance the blanket without overpowering the printed design.\nAvoid novelty blanket shapes.\n━━━━━━━━━━━━━━━━━━ DISPLAY STYLING ━━━━━━━━━━━━━━━━━━\nDisplay the blankets naturally using home décor styling such as:\n* folded on a sofa\n* draped over an armchair\n* layered on a bed\n* folded inside a woven basket\n* displayed on a wooden blanket ladder\n* folded on an ottoman\n* styled on a reading chair\nCreate realistic folds and depth.\nThe blanket should always remain the hero.\n━━━━━━━━━━━━━━━━━━ BACKGROUND ━━━━━━━━━━━━━━━━━━\nCreate an environment that naturally matches the artwork theme.\nExamples:\nHalloween → cozy autumn living room\nMahjong → stylish game room → cocktail lounge → modern entertainment space\nOcean → Mediterranean coastal home\nFarm → rustic cottage\nBaby → cozy nursery\nBack To School → reading corner → family room\nThe background should support the blanket without becoming the focal point.\n━━━━━━━━━━━━━━━━━━ LIGHTING ━━━━━━━━━━━━━━━━━━\nUse natural window light with soft shadows.\nHighlight the blanket's fabric, folds and printing quality.\nCreate realistic commercial home décor photography.\n━━━━━━━━━━━━━━━━━━ NO PEOPLE ━━━━━━━━━━━━━━━━━━\nDo not include:\n* people\n* children\n* babies\n* hands\n* feet\n* body parts\n* models\n* mannequins\n* silhouettes\n* reflections of people\nNever show anyone using or holding the blanket.\nAlways display the blanket as a standalone product.\n━━━━━━━━━━━━━━━━━━ 10 VARIATIONS ━━━━━━━━━━━━━━━━━━\nGenerate 10 completely different mockups.\nVary:\n* blanket type\n* statement vs pattern design\n* fabric texture\n* blanket folds\n* furniture\n* room styling\n* props\n* camera angle\n* lighting\n━━━━━━━━━━━━━━━━━━ OUTPUT ━━━━━━━━━━━━━━━━━━\nGenerate 10 separate blanket mockups.\n• 5 images should feature Large Statement Designs.\n• 5 images should feature All-over Pattern Designs.\nDo not create a collage.\nDo not create a grid.\nDo not create a contact sheet.\nDo not combine multiple mockups into one canvas.\nEach image must look like a real Etsy bestseller blanket listing.\nPhotorealistic.\nPremium boutique home décor styling.\nPinterest-worthy.\nProfessional commercial product photography.\nRealistic premium blanket textures.\nTheme-based lifestyle storytelling.\nSlightly playful.\nNo people.\n","memo":"","tags":[],"imageUrl":{"id":"1783063015365-681686af3edf68","dbId":"1783063015365-681686af3edf68","category":"mockup","src":"indexeddb:1783063015365-681686af3edf68","thumbnail":"indexeddb-thumb:1783063015365-681686af3edf68","originalName":"ebed76ac-83db-4de0-b775-0f425bf9f1fe.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T07:16:55.365Z"},"coverImages":[{"id":"1783063015365-681686af3edf68","dbId":"1783063015365-681686af3edf68","category":"mockup","src":"indexeddb:1783063015365-681686af3edf68","thumbnail":"indexeddb-thumb:1783063015365-681686af3edf68","originalName":"ebed76ac-83db-4de0-b775-0f425bf9f1fe.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T07:16:55.365Z"}],"japaneseTranslation":"Create premium Etsy-style printed blanket mockups using ONLY the uploaded clipart artwork.\nThe uploaded artwork must remain completely unchanged.\nDo not redraw, repaint, recolor, simplify, replace, or reinterpret the artwork.\nUse the artwork exactly as provided as professionally printed blanket designs.\n━━━━━━━━━━━━━━━━━━ PRIMARY DESIGN ━━━━━━━━━━━━━━━━━━\nCreate realistic Etsy bestseller mockups showing how the artwork could be sold on premium printed blankets.\nThe blanket is the product.\n━━━━━━━━━━━━━━━━━━ IMAGE FORMAT ━━━━━━━━━━━━━━━━━━\n• Final ratio: 4:3 (landscape)\n• Generate 10 separate images.\n• Display approximately 1–2 coordinated blankets per image.\n• The blankets should occupy about 45–75% of the frame.\n• The printed designs must remain easy to recognize at Etsy thumbnail size.\n━━━━━━━━━━━━━━━━━━ THEME FIRST ━━━━━━━━━━━━━━━━━━\nBuild the entire scene around the uploaded artwork's:\n* theme\n* subject\n* season\n* target audience\n* intended lifestyle\nAlways prioritize the artwork's theme over its colors.\n━━━━━━━━━━━━━━━━━━ BLANKET DESIGN ━━━━━━━━━━━━━━━━━━\nGenerate 10 unique blanket mockups.\nVariation Types:\n5 blankets should feature a Large Statement Design.\nUse approximately 1–5 carefully selected artwork elements arranged into one professionally composed blanket design.\nThe design should occupy approximately 40–70% of the visible blanket.\nMaintain generous negative space.\nAvoid simply enlarging one clipart element.\nThe composition should feel like a professionally designed premium throw blanket.\n\n5 blankets should feature an All-over Pattern Design.\nCreate a coordinated repeating textile-style pattern using the uploaded artwork.\nUse smaller artwork elements distributed naturally across the blanket.\nVary the scale, spacing and rotation slightly.\nMaintain balanced spacing and visual rhythm.\nAvoid random scattering.\nThe finished blanket should resemble a professionally printed home décor textile.\nDo not mix statement and pattern styles within the same blanket.\n━━━━━━━━━━━━━━━━━━ BLANKET TYPES ━━━━━━━━━━━━━━━━━━\nPossible blanket styles:\n* plush throw blanket\n* velveteen blanket\n* minky blanket\n* fleece blanket\n* sherpa blanket\n* premium woven throw\n* luxury velvet throw\n* decorative throw blanket\nThe blanket itself may include subtle premium details such as:\n* stitched borders\n* contrast edging\n* scalloped trim\n* fringe\n* sherpa backing\n* embossed fabric texture\n* premium woven texture\nThese details should enhance the blanket without overpowering the printed design.\nAvoid novelty blanket shapes.\n━━━━━━━━━━━━━━━━━━ DISPLAY STYLING ━━━━━━━━━━━━━━━━━━\nDisplay the blankets naturally using home décor styling such as:\n* folded on a sofa\n* draped over an armchair\n* layered on a bed\n* folded inside a woven basket\n* displayed on a wooden blanket ladder\n* folded on an ottoman\n* styled on a reading chair\nCreate realistic folds and depth.\nThe blanket should always remain the hero.\n━━━━━━━━━━━━━━━━━━ BACKGROUND ━━━━━━━━━━━━━━━━━━\nCreate an environment that naturally matches the artwork theme.\nExamples:\nHalloween → cozy autumn living room\nMahjong → stylish game room → cocktail lounge → modern entertainment space\nOcean → Mediterranean coastal home\nFarm → rustic cottage\nBaby → cozy nursery\nBack To School → reading corner → family room\nThe background should support the blanket without becoming the focal point.\n━━━━━━━━━━━━━━━━━━ LIGHTING ━━━━━━━━━━━━━━━━━━\nUse natural window light with soft shadows.\nHighlight the blanket's fabric, folds and printing quality.\nCreate realistic commercial home décor photography.\n━━━━━━━━━━━━━━━━━━ NO PEOPLE ━━━━━━━━━━━━━━━━━━\nDo not include:\n* people\n* children\n* babies\n* hands\n* feet\n* body parts\n* models\n* mannequins\n* silhouettes\n* reflections of people\nNever show anyone using or holding the blanket.\nAlways display the blanket as a standalone product.\n━━━━━━━━━━━━━━━━━━ 10 VARIATIONS ━━━━━━━━━━━━━━━━━━\nGenerate 10 completely different mockups.\nVary:\n* blanket type\n* statement vs pattern design\n* fabric texture\n* blanket folds\n* furniture\n* room styling\n* props\n* camera angle\n* lighting\n━━━━━━━━━━━━━━━━━━ OUTPUT ━━━━━━━━━━━━━━━━━━\nGenerate 10 separate blanket mockups.\n• 5 images should feature Large Statement Designs.\n• 5 images should feature All-over Pattern Designs.\nDo not create a collage.\nDo not create a grid.\nDo not create a contact sheet.\nDo not combine multiple mockups into one canvas.\nEach image must look like a real Etsy bestseller blanket listing.\nPhotorealistic.\nPremium boutique home décor styling.\nPinterest-worthy.\nProfessional commercial product photography.\nRealistic premium blanket textures.\nTheme-based lifestyle storytelling.\nSlightly playful.\nNo people.\n","isTextStock":false,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-mockup-010"},{"id":"1783063112689-b9f31c4c4d5cf","title":"シンプル/おしゃれ同時生成","category":"ステッカーモックアップ","categoryId":"1783060494346-17fbe47256a8c8","description":"","prompt":"Create a premium Etsy-style Mug mockup using ONLY the uploaded clipart artwork.\n\nThe uploaded clipart must remain completely unchanged.\n\nDo not redraw, repaint, restyle, simplify, alter colors, modify characters, add new illustrations, replace elements, or reinterpret the artwork.\n\nUse the uploaded clipart exactly as provided as professionally printed mug designs.\n\n━━━━━━━━━━━━━━━━━━\nPRIMARY DESIGN PRINCIPLE\n━━━━━━━━━━━━━━━━━━\n\nThis task is NOT to showcase the clipart collection.\n\nThis task IS to create a realistic Etsy-style mug mockup that demonstrates how the artwork could be used on drinkware.\n\nThe mugs themselves are the product.\n\nThe final image should look like a real Etsy bestseller listing.\n\n━━━━━━━━━━━━━━━━━━\nIMAGE FORMAT\n━━━━━━━━━━━━━━━━━━\n\nFinal image ratio: 4:3\n\nLandscape orientation.\n\nDisplay approximately 2 coordinated mugs in each mockup.\n\nThe mugs should occupy approximately 40–70% of the image.\n\nThe environment should remain visible.\n\nThe mug designs must remain clearly visible at Etsy thumbnail size.\n\nThe image should be optimized for Etsy search results and mobile browsing.\n\n━━━━━━━━━━━━━━━━━━\nTHEME-FIRST STYLING RULE\n━━━━━━━━━━━━━━━━━━\n\nBefore designing the mockup, determine:\n\n* Theme\n* Subject Matter\n* Intended Use\n* Target Audience\n* Lifestyle Context\n\nThe entire scene must be built around the artwork theme.\n\nDo not build the scene around matching colors.\n\nThe theme always overrides the color palette.\n\n━━━━━━━━━━━━━━━━━━\nBACKGROUND PRIORITY RULE\n━━━━━━━━━━━━━━━━━━\n\nThe environment must be determined by:\n\n1. Theme\n2. Subject Matter\n3. Intended Use\n4. Target Audience\n5. Color Palette\n\nNever reverse this order.\n\nColor palette should only be used as a supporting accent.\n\n━━━━━━━━━━━━━━━━━━\nMUG DESIGN RULE\n━━━━━━━━━━━━━━━━━━\n\nUse only the most suitable artwork elements.\n\nDo not use every uploaded artwork element.\n\nSelect approximately:\n\n* 1–3 hero elements\n  or\n* 3–8 coordinated elements\n\nThe artwork should occupy approximately 15–35% of the visible mug surface.\n\nMaintain generous negative space.\n\nAvoid full-wrap overcrowded designs.\n\nAvoid covering the entire mug.\n\nAvoid oversized graphics.\n\nIn addition to the printed artwork, the mug itself may incorporate subtle design accents inspired by the uploaded artwork theme.\n\nExamples include:\n\n* decorative colored rims\n* matching handle colors\n* colored interiors\n* embossed patterns\n* subtle repeating motifs\n* complementary ceramic textures\n* coordinating ceramic finishes\n* small accent motifs\n* delicate ceramic detailing\n\nThese decorative mug details should enhance the overall product while keeping the uploaded clipart as the main focal point.\n\nThe mug should feel professionally designed, cohesive, and commercially viable.\n\nThink:\n\n* Etsy bestseller mug\n* boutique ceramic collection\n* artisan pottery\n* collectible gift mug\n* premium home decor drinkware\n\n━━━━━━━━━━━━━━━━━━\nMUG FORMAT\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 unique mug mockups.\n\nVariation Types:\n\n5 mockups should feature classic premium ceramic mugs with timeless, clean silhouettes.\n\n5 mockups should feature decorative boutique mug styles inspired by artisan ceramics and trendy Etsy drinkware.\n\nPossible classic mug styles:\n\n* classic ceramic mug\n* glossy white mug\n* matte ceramic mug\n* stoneware mug\n* premium coffee mug\n* giftable themed mug\n\nPossible decorative boutique mug styles:\n\n* scalloped rim mug\n* wavy silhouette mug\n* softly fluted mug\n* rounded bubble mug\n* pedestal mug\n* embossed ceramic mug\n* beaded handle mug\n* heart-shaped handle mug\n* ribbon-inspired handle mug\n* vintage cafe mug\n* colored rim mug\n* speckled pottery mug\n* handmade ceramic mug\n\nThe mug shape should complement the artwork theme.\n\nThe decorative mug styles should remain realistic, elegant, and commercially viable.\n\nAvoid novelty mugs.\n\nAvoid unrealistic fantasy mug shapes.\n\nAvoid cartoonish mug shapes.\n\nThe mugs should feel like premium boutique drinkware sold on Etsy.\n\n━━━━━━━━━━━━━━━━━━\nCOORDINATED MUG SET RULE\n━━━━━━━━━━━━━━━━━━\n\nDisplay approximately 2 coordinated mugs in each image.\n\nThe two mugs may feature:\n\n* matching designs\n* complementary artwork\n* coordinated collection designs\n* different artwork selections from the same uploaded collection\n* similar ceramic finishes with different printed motifs\n\nThe two mugs should feel like they belong to the same product line.\n\nThey should look intentionally paired, not randomly placed together.\n\n━━━━━━━━━━━━━━━━━━\nBACKGROUND STORY RULE\n━━━━━━━━━━━━━━━━━━\n\nThe background is extremely important.\n\nThe environment should represent the lifestyle associated with the artwork.\n\nExamples:\n\nHalloween Artwork\n→ cozy autumn coffee setup\n→ seasonal treats\n→ Halloween decor\n\nMahjong Artwork\n→ game-night table\n→ cocktails\n→ snacks\n→ social gathering atmosphere\n\nOcean Artwork\n→ coastal breakfast setup\n→ Mediterranean styling\n→ seaside lifestyle\n\nFarm Artwork\n→ orchard-inspired kitchen styling\n→ cozy fall atmosphere\n\nBack To School Artwork\n→ study desk\n→ notebooks\n→ stationery styling\n\nThe environment should support the mugs without overpowering them.\n\n━━━━━━━━━━━━━━━━━━\nDISPLAY STYLING\n━━━━━━━━━━━━━━━━━━\n\nPossible presentations:\n\n* mugs on a styled table\n* coffee station setup\n* breakfast table styling\n* gift presentation\n* shelf display\n* kitchen counter styling\n* cozy tabletop scene\n* boutique gift-shop display\n\nCreate depth and layering.\n\nAllow natural overlap.\n\nThe mugs must remain highly visible.\n\nThe mugs are always the hero.\n\n━━━━━━━━━━━━━━━━━━\nMOCKUP PERSONALITY\n━━━━━━━━━━━━━━━━━━\n\nThe mockup should feel:\n\n* premium\n* playful\n* cozy\n* giftable\n* stylish\n* welcoming\n* Pinterest-worthy\n* Etsy bestseller quality\n\nThink:\n\n* boutique gift shop\n* artisan coffee corner\n* cozy home decor\n* collectible drinkware\n* curated ceramic collection\n\nAvoid:\n\n* luxury hotel styling\n* corporate office styling\n* sterile stock photography\n* generic kitchen catalog photography\n\n━━━━━━━━━━━━━━━━━━\nMATERIAL DETAILS\n━━━━━━━━━━━━━━━━━━\n\nUse realistic ceramic materials.\n\nInclude:\n\n* ceramic texture\n* realistic mug thickness\n* handle details\n* glossy reflections\n* subtle highlights\n* realistic printing quality\n* realistic glaze finish\n* natural ceramic shadows\n\nThe mugs should look professionally manufactured.\n\nFor decorative boutique mugs, show realistic ceramic shaping, not plastic or toy-like forms.\n\n━━━━━━━━━━━━━━━━━━\nLIGHTING\n━━━━━━━━━━━━━━━━━━\n\nNatural daylight.\n\nSoft window light.\n\nWarm highlights.\n\nGentle shadows.\n\nBright inviting atmosphere.\n\nProfessional commercial product photography.\n\n━━━━━━━━━━━━━━━━━━\nSTRICTLY NO PEOPLE\n━━━━━━━━━━━━━━━━━━\n\nDo not include:\n\n* people\n* children\n* adults\n* faces\n* hands\n* arms\n* bodies\n* reflections of people\n\nThe mugs must be displayed without human presence.\n\n━━━━━━━━━━━━━━━━━━\n10 UNIQUE VARIATIONS\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 completely different mug mockups.\n\n5 images should feature clean, classic ceramic mugs.\n\n5 images should feature decorative boutique mug styles with unique silhouettes or ceramic details.\n\nEach image should feel like a different professional product photoshoot.\n\nVary:\n\n* mug style\n* mug shape\n* mug color\n* rim color\n* handle design\n* ceramic finish\n* artwork selection\n* artwork placement\n* lifestyle setup\n* props\n* camera angle\n* surface material\n* lighting direction\n\nAll 10 images must feel genuinely different.\n\n━━━━━━━━━━━━━━━━━━\nSTRICTLY AVOID\n━━━━━━━━━━━━━━━━━━\n\nUsing all artwork.\n\nClipart catalog appearance.\n\nOversized mug graphics.\n\nFull-wrap overcrowded designs.\n\nTiny unreadable artwork.\n\nPeople.\n\nHands holding mugs.\n\nNovelty mugs.\n\nUnrealistic fantasy mug shapes.\n\nToy-like mug designs.\n\nCorporate branding.\n\nLuxury hotel styling.\n\nBackgrounds that overpower the mugs.\n\n━━━━━━━━━━━━━━━━━━\nOUTPUT REQUIREMENTS\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 unique mug mockup variations.\n\nDeliver 10 separate images.\n\nFinal image ratio: 4:3\n\nLandscape orientation.\n\nDisplay approximately 2 coordinated mugs in each image.\n\nUse realistic retail product proportions.\n\nPrioritize realistic mug artwork scale.\n\nMaintain realistic Etsy gift-shop styling.\n\n5 images should feature classic mug silhouettes.\n\n5 images should feature decorative boutique mug silhouettes or ceramic details.\n\nThe decorative mugs should remain realistic, elegant, and commercially viable.\n\nDo not create a collage.\n\nDo not create a grid.\n\nDo not create a contact sheet.\n\nDo not combine multiple mockups into one canvas.\n\nEach image must look like a real Etsy bestseller mug listing.\n\nPhotorealistic.\n\nPinterest-worthy.\n\nPremium Etsy styling.\n\nBoutique gift-shop styling.\n\nProfessional commercial product photography.\n\nRealistic ceramic materials.\n\nTheme-based lifestyle storytelling.\n\nInviting, cozy, and slightly playful atmosphere.","memo":"","tags":[],"imageUrl":{"id":"1783063073055-dd4f70a8a4df1","dbId":"1783063073055-dd4f70a8a4df1","category":"mockup","src":"indexeddb:1783063073055-dd4f70a8a4df1","thumbnail":"indexeddb-thumb:1783063073055-dd4f70a8a4df1","originalName":"2f51bf53-d423-424e-94d6-9cbea268b1a0.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T07:17:53.055Z"},"coverImages":[{"id":"1783063073055-dd4f70a8a4df1","dbId":"1783063073055-dd4f70a8a4df1","category":"mockup","src":"indexeddb:1783063073055-dd4f70a8a4df1","thumbnail":"indexeddb-thumb:1783063073055-dd4f70a8a4df1","originalName":"2f51bf53-d423-424e-94d6-9cbea268b1a0.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T07:17:53.055Z"}],"japaneseTranslation":"Create a premium Etsy-style Mug mockup using ONLY the uploaded clipart artwork.\n\nThe uploaded clipart must remain completely unchanged.\n\nDo not redraw, repaint, restyle, simplify, alter colors, modify characters, add new illustrations, replace elements, or reinterpret the artwork.\n\nUse the uploaded clipart exactly as provided as professionally printed mug designs.\n\n━━━━━━━━━━━━━━━━━━\nPRIMARY DESIGN PRINCIPLE\n━━━━━━━━━━━━━━━━━━\n\nThis task is NOT to showcase the clipart collection.\n\nThis task IS to create a realistic Etsy-style mug mockup that demonstrates how the artwork could be used on drinkware.\n\nThe mugs themselves are the product.\n\nThe final image should look like a real Etsy bestseller listing.\n\n━━━━━━━━━━━━━━━━━━\nIMAGE FORMAT\n━━━━━━━━━━━━━━━━━━\n\nFinal image ratio: 4:3\n\nLandscape orientation.\n\nDisplay approximately 2 coordinated mugs in each mockup.\n\nThe mugs should occupy approximately 40–70% of the image.\n\nThe environment should remain visible.\n\nThe mug designs must remain clearly visible at Etsy thumbnail size.\n\nThe image should be optimized for Etsy search results and mobile browsing.\n\n━━━━━━━━━━━━━━━━━━\nTHEME-FIRST STYLING RULE\n━━━━━━━━━━━━━━━━━━\n\nBefore designing the mockup, determine:\n\n* Theme\n* Subject Matter\n* Intended Use\n* Target Audience\n* Lifestyle Context\n\nThe entire scene must be built around the artwork theme.\n\nDo not build the scene around matching colors.\n\nThe theme always overrides the color palette.\n\n━━━━━━━━━━━━━━━━━━\nBACKGROUND PRIORITY RULE\n━━━━━━━━━━━━━━━━━━\n\nThe environment must be determined by:\n\n1. Theme\n2. Subject Matter\n3. Intended Use\n4. Target Audience\n5. Color Palette\n\nNever reverse this order.\n\nColor palette should only be used as a supporting accent.\n\n━━━━━━━━━━━━━━━━━━\nMUG DESIGN RULE\n━━━━━━━━━━━━━━━━━━\n\nUse only the most suitable artwork elements.\n\nDo not use every uploaded artwork element.\n\nSelect approximately:\n\n* 1–3 hero elements\n  or\n* 3–8 coordinated elements\n\nThe artwork should occupy approximately 15–35% of the visible mug surface.\n\nMaintain generous negative space.\n\nAvoid full-wrap overcrowded designs.\n\nAvoid covering the entire mug.\n\nAvoid oversized graphics.\n\nIn addition to the printed artwork, the mug itself may incorporate subtle design accents inspired by the uploaded artwork theme.\n\nExamples include:\n\n* decorative colored rims\n* matching handle colors\n* colored interiors\n* embossed patterns\n* subtle repeating motifs\n* complementary ceramic textures\n* coordinating ceramic finishes\n* small accent motifs\n* delicate ceramic detailing\n\nThese decorative mug details should enhance the overall product while keeping the uploaded clipart as the main focal point.\n\nThe mug should feel professionally designed, cohesive, and commercially viable.\n\nThink:\n\n* Etsy bestseller mug\n* boutique ceramic collection\n* artisan pottery\n* collectible gift mug\n* premium home decor drinkware\n\n━━━━━━━━━━━━━━━━━━\nMUG FORMAT\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 unique mug mockups.\n\nVariation Types:\n\n5 mockups should feature classic premium ceramic mugs with timeless, clean silhouettes.\n\n5 mockups should feature decorative boutique mug styles inspired by artisan ceramics and trendy Etsy drinkware.\n\nPossible classic mug styles:\n\n* classic ceramic mug\n* glossy white mug\n* matte ceramic mug\n* stoneware mug\n* premium coffee mug\n* giftable themed mug\n\nPossible decorative boutique mug styles:\n\n* scalloped rim mug\n* wavy silhouette mug\n* softly fluted mug\n* rounded bubble mug\n* pedestal mug\n* embossed ceramic mug\n* beaded handle mug\n* heart-shaped handle mug\n* ribbon-inspired handle mug\n* vintage cafe mug\n* colored rim mug\n* speckled pottery mug\n* handmade ceramic mug\n\nThe mug shape should complement the artwork theme.\n\nThe decorative mug styles should remain realistic, elegant, and commercially viable.\n\nAvoid novelty mugs.\n\nAvoid unrealistic fantasy mug shapes.\n\nAvoid cartoonish mug shapes.\n\nThe mugs should feel like premium boutique drinkware sold on Etsy.\n\n━━━━━━━━━━━━━━━━━━\nCOORDINATED MUG SET RULE\n━━━━━━━━━━━━━━━━━━\n\nDisplay approximately 2 coordinated mugs in each image.\n\nThe two mugs may feature:\n\n* matching designs\n* complementary artwork\n* coordinated collection designs\n* different artwork selections from the same uploaded collection\n* similar ceramic finishes with different printed motifs\n\nThe two mugs should feel like they belong to the same product line.\n\nThey should look intentionally paired, not randomly placed together.\n\n━━━━━━━━━━━━━━━━━━\nBACKGROUND STORY RULE\n━━━━━━━━━━━━━━━━━━\n\nThe background is extremely important.\n\nThe environment should represent the lifestyle associated with the artwork.\n\nExamples:\n\nHalloween Artwork\n→ cozy autumn coffee setup\n→ seasonal treats\n→ Halloween decor\n\nMahjong Artwork\n→ game-night table\n→ cocktails\n→ snacks\n→ social gathering atmosphere\n\nOcean Artwork\n→ coastal breakfast setup\n→ Mediterranean styling\n→ seaside lifestyle\n\nFarm Artwork\n→ orchard-inspired kitchen styling\n→ cozy fall atmosphere\n\nBack To School Artwork\n→ study desk\n→ notebooks\n→ stationery styling\n\nThe environment should support the mugs without overpowering them.\n\n━━━━━━━━━━━━━━━━━━\nDISPLAY STYLING\n━━━━━━━━━━━━━━━━━━\n\nPossible presentations:\n\n* mugs on a styled table\n* coffee station setup\n* breakfast table styling\n* gift presentation\n* shelf display\n* kitchen counter styling\n* cozy tabletop scene\n* boutique gift-shop display\n\nCreate depth and layering.\n\nAllow natural overlap.\n\nThe mugs must remain highly visible.\n\nThe mugs are always the hero.\n\n━━━━━━━━━━━━━━━━━━\nMOCKUP PERSONALITY\n━━━━━━━━━━━━━━━━━━\n\nThe mockup should feel:\n\n* premium\n* playful\n* cozy\n* giftable\n* stylish\n* welcoming\n* Pinterest-worthy\n* Etsy bestseller quality\n\nThink:\n\n* boutique gift shop\n* artisan coffee corner\n* cozy home decor\n* collectible drinkware\n* curated ceramic collection\n\nAvoid:\n\n* luxury hotel styling\n* corporate office styling\n* sterile stock photography\n* generic kitchen catalog photography\n\n━━━━━━━━━━━━━━━━━━\nMATERIAL DETAILS\n━━━━━━━━━━━━━━━━━━\n\nUse realistic ceramic materials.\n\nInclude:\n\n* ceramic texture\n* realistic mug thickness\n* handle details\n* glossy reflections\n* subtle highlights\n* realistic printing quality\n* realistic glaze finish\n* natural ceramic shadows\n\nThe mugs should look professionally manufactured.\n\nFor decorative boutique mugs, show realistic ceramic shaping, not plastic or toy-like forms.\n\n━━━━━━━━━━━━━━━━━━\nLIGHTING\n━━━━━━━━━━━━━━━━━━\n\nNatural daylight.\n\nSoft window light.\n\nWarm highlights.\n\nGentle shadows.\n\nBright inviting atmosphere.\n\nProfessional commercial product photography.\n\n━━━━━━━━━━━━━━━━━━\nSTRICTLY NO PEOPLE\n━━━━━━━━━━━━━━━━━━\n\nDo not include:\n\n* people\n* children\n* adults\n* faces\n* hands\n* arms\n* bodies\n* reflections of people\n\nThe mugs must be displayed without human presence.\n\n━━━━━━━━━━━━━━━━━━\n10 UNIQUE VARIATIONS\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 completely different mug mockups.\n\n5 images should feature clean, classic ceramic mugs.\n\n5 images should feature decorative boutique mug styles with unique silhouettes or ceramic details.\n\nEach image should feel like a different professional product photoshoot.\n\nVary:\n\n* mug style\n* mug shape\n* mug color\n* rim color\n* handle design\n* ceramic finish\n* artwork selection\n* artwork placement\n* lifestyle setup\n* props\n* camera angle\n* surface material\n* lighting direction\n\nAll 10 images must feel genuinely different.\n\n━━━━━━━━━━━━━━━━━━\nSTRICTLY AVOID\n━━━━━━━━━━━━━━━━━━\n\nUsing all artwork.\n\nClipart catalog appearance.\n\nOversized mug graphics.\n\nFull-wrap overcrowded designs.\n\nTiny unreadable artwork.\n\nPeople.\n\nHands holding mugs.\n\nNovelty mugs.\n\nUnrealistic fantasy mug shapes.\n\nToy-like mug designs.\n\nCorporate branding.\n\nLuxury hotel styling.\n\nBackgrounds that overpower the mugs.\n\n━━━━━━━━━━━━━━━━━━\nOUTPUT REQUIREMENTS\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 unique mug mockup variations.\n\nDeliver 10 separate images.\n\nFinal image ratio: 4:3\n\nLandscape orientation.\n\nDisplay approximately 2 coordinated mugs in each image.\n\nUse realistic retail product proportions.\n\nPrioritize realistic mug artwork scale.\n\nMaintain realistic Etsy gift-shop styling.\n\n5 images should feature classic mug silhouettes.\n\n5 images should feature decorative boutique mug silhouettes or ceramic details.\n\nThe decorative mugs should remain realistic, elegant, and commercially viable.\n\nDo not create a collage.\n\nDo not create a grid.\n\nDo not create a contact sheet.\n\nDo not combine multiple mockups into one canvas.\n\nEach image must look like a real Etsy bestseller mug listing.\n\nPhotorealistic.\n\nPinterest-worthy.\n\nPremium Etsy styling.\n\nBoutique gift-shop styling.\n\nProfessional commercial product photography.\n\nRealistic ceramic materials.\n\nTheme-based lifestyle storytelling.\n\nInviting, cozy, and slightly playful atmosphere.","isTextStock":false,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-mockup-011"},{"id":"1783063169286-3ce401828f9f18","title":"ガーランド","category":"ステッカーモックアップ","categoryId":"1783060555031-0469788a1b5138","description":"","prompt":"Create a premium Etsy-style Garland or Banner mockup using ONLY the uploaded clipart artwork.\n\nThe uploaded clipart must remain completely unchanged.\n\nDo not redraw, repaint, restyle, simplify, alter colors, modify characters, add new illustrations, replace elements, or reinterpret the artwork.\n\nUse the uploaded clipart exactly as provided as professionally produced garland or banner decorations.\n\n━━━━━━━━━━━━━━━━━━\nPRIMARY DESIGN PRINCIPLE\n━━━━━━━━━━━━━━━━━━\n\nThis task is NOT to showcase the clipart collection.\n\nThis task IS to create a realistic Etsy-style garland or banner mockup that demonstrates how the artwork could be used as party decorations.\n\nThe garland itself is the product.\n\nThe final image should look like a real Etsy bestseller listing.\n\n━━━━━━━━━━━━━━━━━━\nIMAGE FORMAT\n━━━━━━━━━━━━━━━━━━\n\nFinal image ratio: 4:3\n\nLandscape orientation.\n\nThe garland should occupy approximately 50–80% of the image.\n\nThe garland design must remain clearly visible at Etsy thumbnail size.\n\nThe image should be optimized for Etsy search results and mobile browsing.\n\n━━━━━━━━━━━━━━━━━━\nTHEME-FIRST STYLING RULE\n━━━━━━━━━━━━━━━━━━\n\nBefore designing the mockup, determine:\n\n* Theme\n* Subject Matter\n* Intended Event\n* Target Audience\n* Celebration Context\n\nThe entire scene must be built around the event represented by the artwork.\n\nDo not build the scene around matching colors.\n\nThe theme always overrides the color palette.\n\n━━━━━━━━━━━━━━━━━━\nBACKGROUND PRIORITY RULE\n━━━━━━━━━━━━━━━━━━\n\nThe environment must be determined by:\n\n1. Event\n2. Theme\n3. Subject Matter\n4. Target Audience\n5. Color Palette\n\nNever reverse this order.\n\nColor palette should only be used as a supporting accent.\n\n━━━━━━━━━━━━━━━━━━\nGARLAND FORMAT\n━━━━━━━━━━━━━━━━━━\n\nCreate realistic hanging garlands or banners.\n\nPossible styles:\n\n* clip garland\n* twine garland\n* ribbon garland\n* party banner\n* layered banner\n* hanging paper decoration\n\nUse approximately 8–20 artwork elements.\n\nSelect the most suitable artwork pieces.\n\nThe garland should feel professionally designed and commercially viable.\n\n━━━━━━━━━━━━━━━━━━\nARTWORK USAGE RULE\n━━━━━━━━━━━━━━━━━━\n\nDo not create a clipart catalog.\n\nDo not display every uploaded artwork element.\n\nSelect only the most visually effective elements.\n\nArrange them naturally.\n\nAllow spacing between pieces.\n\nCreate a balanced and aesthetically pleasing banner.\n\n━━━━━━━━━━━━━━━━━━\nBACKGROUND STORY RULE\n━━━━━━━━━━━━━━━━━━\n\nThe background is extremely important.\n\nThe scene should feel like a real event where this garland would naturally be displayed.\n\nThe environment should immediately communicate the theme.\n\nExamples:\n\nHalloween Artwork\n→ Halloween dessert table\n→ seasonal mantle display\n→ autumn party styling\n\nMahjong Artwork\n→ game-night party setup\n→ cocktail station\n→ social gathering space\n\nOcean Artwork\n→ Mediterranean celebration\n→ lemon-themed party\n→ coastal event styling\n\nFarm Artwork\n→ harvest festival\n→ fall celebration\n→ orchard-inspired setup\n\nCircus Artwork\n→ carnival styling\n→ whimsical party display\n\nBack To School Artwork\n→ classroom celebration\n→ school event styling\n\nThe environment should tell a story.\n\n━━━━━━━━━━━━━━━━━━\nENVIRONMENT DESIGN RULE\n━━━━━━━━━━━━━━━━━━\n\nThe garland should feel integrated into the environment.\n\nPossible placements:\n\n* dessert table backdrop\n* party table backdrop\n* shelf display\n* mantle styling\n* nursery wall\n* playroom decor\n* celebration wall\n* welcome table\n\nAvoid empty blank walls.\n\nAvoid floating garlands without context.\n\nThe setting should feel intentional and realistic.\n\n━━━━━━━━━━━━━━━━━━\nMOCKUP PERSONALITY\n━━━━━━━━━━━━━━━━━━\n\nThe mockup should feel:\n\n* premium\n* playful\n* cheerful\n* welcoming\n* stylish\n* celebration-focused\n* Pinterest-worthy\n* Etsy bestseller quality\n\nThink:\n\n* boutique party decor\n* Pinterest celebration styling\n* event planner setup\n* professionally styled party\n\nAvoid:\n\n* corporate styling\n* luxury hotel styling\n* sterile product photography\n* empty showroom environments\n\n━━━━━━━━━━━━━━━━━━\nMATERIALS & DETAILS\n━━━━━━━━━━━━━━━━━━\n\nUse realistic materials.\n\nPossible elements:\n\n* twine\n* ribbon\n* mini clothespins\n* wood beads\n* tassels\n* paper cutouts\n* layered cardstock\n\nShow realistic paper texture.\n\nShow realistic printing quality.\n\nShow dimensionality and depth.\n\n━━━━━━━━━━━━━━━━━━\nLIGHTING\n━━━━━━━━━━━━━━━━━━\n\nNatural daylight.\n\nSoft window light.\n\nWarm highlights.\n\nGentle shadows.\n\nBright inviting atmosphere.\n\nProfessional commercial product photography.\n\n━━━━━━━━━━━━━━━━━━\n10 UNIQUE VARIATIONS\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 completely different garland or banner mockups.\n\nEach image should feel like a different professional party stylist designed it.\n\nVary:\n\n* garland style\n* hanging method\n* artwork selection\n* artwork order\n* environment\n* props\n* event setup\n* camera angle\n* lighting direction\n\nAll 10 images must feel genuinely different.\n\n━━━━━━━━━━━━━━━━━━\nSTRICTLY AVOID\n━━━━━━━━━━━━━━━━━━\n\nClipart catalog appearance.\n\nSticker-sheet appearance.\n\nBlank walls with no context.\n\nTiny unreadable artwork.\n\nGeneric party rooms.\n\nCorporate styling.\n\nLuxury hotel styling.\n\nBackgrounds that overpower the garland.\n\nCrowded compositions.\n\n━━━━━━━━━━━━━━━━━━\nOUTPUT REQUIREMENTS\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 unique garland or banner mockup variations.\n\nDeliver 10 separate images.\n\nFinal image ratio: 4:3\n\nLandscape orientation.\n\nDo not create a collage.\n\nDo not create a grid.\n\nDo not create a contact sheet.\n\nDo not combine multiple mockups into one canvas.\n\nEach image must look like a real Etsy bestseller party decoration listing.\n\nPhotorealistic.\n\nPinterest-worthy.\n\nPremium Etsy styling.\n\nParty-focused storytelling.\n\nProfessional commercial product photography.\n\nRealistic materials and textures.\n\nTheme-based event environments.\n\nInviting and slightly playful atmosphere.","memo":"","tags":[],"imageUrl":{"id":"1783063131240-379eed29f8474","dbId":"1783063131240-379eed29f8474","category":"mockup","src":"indexeddb:1783063131240-379eed29f8474","thumbnail":"indexeddb-thumb:1783063131240-379eed29f8474","originalName":"1b672872-3937-497c-8ca9-70b3120c2fdf.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T07:18:51.240Z"},"coverImages":[{"id":"1783063131240-379eed29f8474","dbId":"1783063131240-379eed29f8474","category":"mockup","src":"indexeddb:1783063131240-379eed29f8474","thumbnail":"indexeddb-thumb:1783063131240-379eed29f8474","originalName":"1b672872-3937-497c-8ca9-70b3120c2fdf.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T07:18:51.240Z"}],"japaneseTranslation":"Create a premium Etsy-style Garland or Banner mockup using ONLY the uploaded clipart artwork.\n\nThe uploaded clipart must remain completely unchanged.\n\nDo not redraw, repaint, restyle, simplify, alter colors, modify characters, add new illustrations, replace elements, or reinterpret the artwork.\n\nUse the uploaded clipart exactly as provided as professionally produced garland or banner decorations.\n\n━━━━━━━━━━━━━━━━━━\nPRIMARY DESIGN PRINCIPLE\n━━━━━━━━━━━━━━━━━━\n\nThis task is NOT to showcase the clipart collection.\n\nThis task IS to create a realistic Etsy-style garland or banner mockup that demonstrates how the artwork could be used as party decorations.\n\nThe garland itself is the product.\n\nThe final image should look like a real Etsy bestseller listing.\n\n━━━━━━━━━━━━━━━━━━\nIMAGE FORMAT\n━━━━━━━━━━━━━━━━━━\n\nFinal image ratio: 4:3\n\nLandscape orientation.\n\nThe garland should occupy approximately 50–80% of the image.\n\nThe garland design must remain clearly visible at Etsy thumbnail size.\n\nThe image should be optimized for Etsy search results and mobile browsing.\n\n━━━━━━━━━━━━━━━━━━\nTHEME-FIRST STYLING RULE\n━━━━━━━━━━━━━━━━━━\n\nBefore designing the mockup, determine:\n\n* Theme\n* Subject Matter\n* Intended Event\n* Target Audience\n* Celebration Context\n\nThe entire scene must be built around the event represented by the artwork.\n\nDo not build the scene around matching colors.\n\nThe theme always overrides the color palette.\n\n━━━━━━━━━━━━━━━━━━\nBACKGROUND PRIORITY RULE\n━━━━━━━━━━━━━━━━━━\n\nThe environment must be determined by:\n\n1. Event\n2. Theme\n3. Subject Matter\n4. Target Audience\n5. Color Palette\n\nNever reverse this order.\n\nColor palette should only be used as a supporting accent.\n\n━━━━━━━━━━━━━━━━━━\nGARLAND FORMAT\n━━━━━━━━━━━━━━━━━━\n\nCreate realistic hanging garlands or banners.\n\nPossible styles:\n\n* clip garland\n* twine garland\n* ribbon garland\n* party banner\n* layered banner\n* hanging paper decoration\n\nUse approximately 8–20 artwork elements.\n\nSelect the most suitable artwork pieces.\n\nThe garland should feel professionally designed and commercially viable.\n\n━━━━━━━━━━━━━━━━━━\nARTWORK USAGE RULE\n━━━━━━━━━━━━━━━━━━\n\nDo not create a clipart catalog.\n\nDo not display every uploaded artwork element.\n\nSelect only the most visually effective elements.\n\nArrange them naturally.\n\nAllow spacing between pieces.\n\nCreate a balanced and aesthetically pleasing banner.\n\n━━━━━━━━━━━━━━━━━━\nBACKGROUND STORY RULE\n━━━━━━━━━━━━━━━━━━\n\nThe background is extremely important.\n\nThe scene should feel like a real event where this garland would naturally be displayed.\n\nThe environment should immediately communicate the theme.\n\nExamples:\n\nHalloween Artwork\n→ Halloween dessert table\n→ seasonal mantle display\n→ autumn party styling\n\nMahjong Artwork\n→ game-night party setup\n→ cocktail station\n→ social gathering space\n\nOcean Artwork\n→ Mediterranean celebration\n→ lemon-themed party\n→ coastal event styling\n\nFarm Artwork\n→ harvest festival\n→ fall celebration\n→ orchard-inspired setup\n\nCircus Artwork\n→ carnival styling\n→ whimsical party display\n\nBack To School Artwork\n→ classroom celebration\n→ school event styling\n\nThe environment should tell a story.\n\n━━━━━━━━━━━━━━━━━━\nENVIRONMENT DESIGN RULE\n━━━━━━━━━━━━━━━━━━\n\nThe garland should feel integrated into the environment.\n\nPossible placements:\n\n* dessert table backdrop\n* party table backdrop\n* shelf display\n* mantle styling\n* nursery wall\n* playroom decor\n* celebration wall\n* welcome table\n\nAvoid empty blank walls.\n\nAvoid floating garlands without context.\n\nThe setting should feel intentional and realistic.\n\n━━━━━━━━━━━━━━━━━━\nMOCKUP PERSONALITY\n━━━━━━━━━━━━━━━━━━\n\nThe mockup should feel:\n\n* premium\n* playful\n* cheerful\n* welcoming\n* stylish\n* celebration-focused\n* Pinterest-worthy\n* Etsy bestseller quality\n\nThink:\n\n* boutique party decor\n* Pinterest celebration styling\n* event planner setup\n* professionally styled party\n\nAvoid:\n\n* corporate styling\n* luxury hotel styling\n* sterile product photography\n* empty showroom environments\n\n━━━━━━━━━━━━━━━━━━\nMATERIALS & DETAILS\n━━━━━━━━━━━━━━━━━━\n\nUse realistic materials.\n\nPossible elements:\n\n* twine\n* ribbon\n* mini clothespins\n* wood beads\n* tassels\n* paper cutouts\n* layered cardstock\n\nShow realistic paper texture.\n\nShow realistic printing quality.\n\nShow dimensionality and depth.\n\n━━━━━━━━━━━━━━━━━━\nLIGHTING\n━━━━━━━━━━━━━━━━━━\n\nNatural daylight.\n\nSoft window light.\n\nWarm highlights.\n\nGentle shadows.\n\nBright inviting atmosphere.\n\nProfessional commercial product photography.\n\n━━━━━━━━━━━━━━━━━━\n10 UNIQUE VARIATIONS\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 completely different garland or banner mockups.\n\nEach image should feel like a different professional party stylist designed it.\n\nVary:\n\n* garland style\n* hanging method\n* artwork selection\n* artwork order\n* environment\n* props\n* event setup\n* camera angle\n* lighting direction\n\nAll 10 images must feel genuinely different.\n\n━━━━━━━━━━━━━━━━━━\nSTRICTLY AVOID\n━━━━━━━━━━━━━━━━━━\n\nClipart catalog appearance.\n\nSticker-sheet appearance.\n\nBlank walls with no context.\n\nTiny unreadable artwork.\n\nGeneric party rooms.\n\nCorporate styling.\n\nLuxury hotel styling.\n\nBackgrounds that overpower the garland.\n\nCrowded compositions.\n\n━━━━━━━━━━━━━━━━━━\nOUTPUT REQUIREMENTS\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 unique garland or banner mockup variations.\n\nDeliver 10 separate images.\n\nFinal image ratio: 4:3\n\nLandscape orientation.\n\nDo not create a collage.\n\nDo not create a grid.\n\nDo not create a contact sheet.\n\nDo not combine multiple mockups into one canvas.\n\nEach image must look like a real Etsy bestseller party decoration listing.\n\nPhotorealistic.\n\nPinterest-worthy.\n\nPremium Etsy styling.\n\nParty-focused storytelling.\n\nProfessional commercial product photography.\n\nRealistic materials and textures.\n\nTheme-based event environments.\n\nInviting and slightly playful atmosphere.","isTextStock":false,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-mockup-012"},{"id":"1783063225755-2e3eae21228cf","title":"包装紙・ラッピングボックス","category":"ステッカーモックアップ","categoryId":"1783060621277-27995fb06f732","description":"","prompt":"Create a premium Etsy-style Gift Wrapping mockup using ONLY the uploaded clipart artwork.\n\nThe uploaded clipart must remain completely unchanged.\n\nDo not redraw, repaint, restyle, simplify, alter colors, modify characters, add new illustrations, replace elements, or reinterpret the artwork.\n\nUse the uploaded clipart exactly as provided as professionally printed gift wrap and gift packaging designs.\n\n━━━━━━━━━━━━━━━━━━\nPRIMARY DESIGN PRINCIPLE\n━━━━━━━━━━━━━━━━━━\n\nThis task is NOT to showcase the clipart collection.\n\nThis task IS to create a realistic Etsy-style gift wrapping mockup that demonstrates how the artwork could be be used as wrapping paper and gift packaging.\n\nThe wrapping design itself is the product.\n\nThe final image should look like a real Etsy bestseller listing.\n\n━━━━━━━━━━━━━━━━━━\nIMAGE FORMAT\n━━━━━━━━━━━━━━━━━━\n\nFinal image ratio: 4:3\n\nLandscape orientation.\n\nThe gift wrapping products should occupy approximately 50–80% of the image.\n\nThe wrapping paper design must remain clearly visible at Etsy thumbnail size.\n\nThe packaging products should be immediately recognizable.\n\nThe image should be optimized for Etsy search results and mobile browsing.\n\n━━━━━━━━━━━━━━━━━━\nTHEME-FIRST STYLING RULE\n━━━━━━━━━━━━━━━━━━\n\nBefore designing the mockup, determine:\n\n* Theme\n* Subject Matter\n* Intended Occasion\n* Target Audience\n* Gift-Giving Context\n\nThe entire scene must be built around the occasion represented by the artwork.\n\nDo not build the scene around matching colors.\n\nDo not build the scene around generic gift photography.\n\nThe occasion always overrides the color palette.\n\n━━━━━━━━━━━━━━━━━━\nBACKGROUND PRIORITY RULE\n━━━━━━━━━━━━━━━━━━\n\nThe scene must be determined by:\n\n1. Occasion\n2. Theme\n3. Subject Matter\n4. Target Audience\n5. Color Palette\n\nNever reverse this order.\n\nColor palette should only be used as a supporting accent.\n\n━━━━━━━━━━━━━━━━━━\nGIFT WRAP FORMAT\n━━━━━━━━━━━━━━━━━━\n\nCreate a professionally styled gift wrapping presentation.\n\nUse the uploaded artwork to create realistic repeating surface pattern designs.\n\nPossible applications include:\n\n* wrapping paper\n* gift wrap\n* gift box\n* envelope\n* gift tag\n* sticker seal\n* tissue paper\n* folded wrapping sheets\n\nUse 2–6 coordinated packaging items.\n\nThe collection should feel cohesive and professionally designed.\n\n━━━━━━━━━━━━━━━━━━\nPATTERN DESIGN RULE\n━━━━━━━━━━━━━━━━━━\n\nCreate realistic repeating pattern designs.\n\nThe artwork should appear naturally repeated across the packaging.\n\nAllow breathing room between repeated elements.\n\nDo not overcrowd the pattern.\n\nDo not use every uploaded artwork element.\n\nSelect only the most appropriate elements.\n\nAvoid sticker-sheet layouts.\n\nAvoid clipart catalog layouts.\n\nThe pattern should feel professionally designed for retail gift wrap.\n\n━━━━━━━━━━━━━━━━━━\nBACKGROUND STORY RULE\n━━━━━━━━━━━━━━━━━━\n\nThe background is extremely important.\n\nThe background should feel like a real environment where this gift would naturally be given, received, displayed, or exchanged.\n\nThe scene must tell a story.\n\nThe environment should immediately communicate the occasion represented by the artwork.\n\nThe background should feel intentionally curated around the theme.\n\nDo not create generic wrapping paper photography.\n\nDo not create generic stationery photography.\n\nDo not create generic gift shop scenes.\n\nCreate an environment that feels connected to the artwork theme and gifting occasion.\n\nThe background should help buyers imagine using the product.\n\n━━━━━━━━━━━━━━━━━━\nENVIRONMENT DESIGN RULE\n━━━━━━━━━━━━━━━━━━\n\nThe environment should be inspired by the lifestyle, celebration, season, and atmosphere associated with the artwork.\n\nExamples:\n\nHalloween Artwork\n→ pumpkins\n→ candy\n→ trick-or-treat atmosphere\n→ seasonal desserts\n→ autumn party styling\n\nMahjong Artwork\n→ cocktails\n→ snacks\n→ game-night atmosphere\n→ acrylic accessories\n→ party favors\n→ social gathering styling\n\nOcean Artwork\n→ lemons\n→ shells\n→ Mediterranean textures\n→ coastal lifestyle styling\n\nFarm Artwork\n→ apples\n→ harvest details\n→ orchard-inspired decor\n→ autumn celebration styling\n\nBack To School Artwork\n→ pencils\n→ notebooks\n→ classroom details\n→ teacher gift styling\n\nChristmas Artwork\n→ ornaments\n→ ribbon\n→ holiday gifting atmosphere\n\nThe environment should feel authentic, immersive, and immediately understandable.\n\n━━━━━━━━━━━━━━━━━━\nMOCKUP PERSONALITY\n━━━━━━━━━━━━━━━━━━\n\nThe mockup should feel:\n\n* premium\n* playful\n* cheerful\n* stylish\n* welcoming\n* giftable\n* Pinterest-worthy\n* Etsy bestseller quality\n\nThink:\n\n* boutique gift shop\n* artisan wrapping paper brand\n* premium celebration packaging\n* thoughtfully wrapped gifts\n* Pinterest gift wrapping inspiration\n\nAvoid:\n\n* luxury fashion branding\n* corporate packaging\n* sterile product photography\n* luxury hotel styling\n* overly formal presentation\n\n━━━━━━━━━━━━━━━━━━\nSCENE COMPOSITION\n━━━━━━━━━━━━━━━━━━\n\nCreate a realistic gift wrapping presentation.\n\nPossible compositions:\n\n* wrapped gift box with ribbon\n* multiple coordinated wrapped gifts\n* stacked gifts\n* gift box with matching tag\n* gift wrap and envelope set\n* folded wrapping paper display\n* gift packaging collection\n\nCreate depth and layering.\n\nAllow natural overlap between packaging items.\n\nThe wrapping paper design must remain highly visible.\n\nThe packaging products are always the hero.\n\n━━━━━━━━━━━━━━━━━━\nSTYLING DETAILS\n━━━━━━━━━━━━━━━━━━\n\nUse realistic gift wrapping materials.\n\nPossible materials:\n\n* satin ribbon\n* velvet ribbon\n* cotton twine\n* wax seal\n* gift tag\n* envelope\n* tissue paper\n* wrapping paper sheets\n\nChoose materials that suit the artwork theme.\n\nThe styling should feel curated and intentional.\n\n━━━━━━━━━━━━━━━━━━\nLIGHTING\n━━━━━━━━━━━━━━━━━━\n\nNatural daylight.\n\nSoft window light.\n\nWarm highlights.\n\nGentle shadows.\n\nBright inviting atmosphere.\n\nProfessional commercial product photography.\n\nAvoid dramatic studio lighting.\n\nAvoid dark editorial lighting.\n\n━━━━━━━━━━━━━━━━━━\n10 UNIQUE VARIATIONS\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 completely different gift wrapping mockups.\n\nEach image should feel like a different professional product photoshoot.\n\nVary:\n\n* wrapping style\n* pattern scale\n* packaging products\n* ribbon style\n* gift arrangement\n* camera angle\n* background styling\n* occasion styling\n* lighting direction\n\nAll 10 images must feel genuinely different.\n\n━━━━━━━━━━━━━━━━━━\nSTRICTLY AVOID\n━━━━━━━━━━━━━━━━━━\n\nUsing all artwork.\n\nClipart catalog appearance.\n\nSticker-sheet appearance.\n\nOvercrowded patterns.\n\nTiny unreadable artwork.\n\nExcessive props.\n\nLuxury fashion branding.\n\nCorporate packaging.\n\nGeneric backgrounds.\n\nBackgrounds that overpower the products.\n\nPackaging that hides the pattern design.\n\n━━━━━━━━━━━━━━━━━━\nOUTPUT REQUIREMENTS\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 unique gift wrapping mockup variations.\n\nDeliver 10 separate images.\n\nFinal image ratio: 4:3\n\nLandscape orientation.\n\nDo not create a collage.\n\nDo not create a grid.\n\nDo not create a contact sheet.\n\nDo not combine multiple mockups into one canvas.\n\nEach image must look like a real Etsy bestseller gift wrap listing.\n\nPhotorealistic.\n\nPinterest-worthy.\n\nPremium Etsy styling.\n\nBoutique gift packaging styling.\n\nProfessional commercial product photography.\n\nRealistic paper textures.\n\nOccasion-specific background storytelling.\n\nInviting and slightly playful atmosphere.","memo":"","tags":[],"imageUrl":{"id":"1783063223639-7ab3d91ce27eb","dbId":"1783063223639-7ab3d91ce27eb","category":"mockup","src":"indexeddb:1783063223639-7ab3d91ce27eb","thumbnail":"indexeddb-thumb:1783063223639-7ab3d91ce27eb","originalName":"13413a85-1e4c-4dd8-9490-6f84face30fa.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T07:20:23.639Z"},"coverImages":[{"id":"1783063223639-7ab3d91ce27eb","dbId":"1783063223639-7ab3d91ce27eb","category":"mockup","src":"indexeddb:1783063223639-7ab3d91ce27eb","thumbnail":"indexeddb-thumb:1783063223639-7ab3d91ce27eb","originalName":"13413a85-1e4c-4dd8-9490-6f84face30fa.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T07:20:23.639Z"}],"japaneseTranslation":"Create a premium Etsy-style Gift Wrapping mockup using ONLY the uploaded clipart artwork.\n\nThe uploaded clipart must remain completely unchanged.\n\nDo not redraw, repaint, restyle, simplify, alter colors, modify characters, add new illustrations, replace elements, or reinterpret the artwork.\n\nUse the uploaded clipart exactly as provided as professionally printed gift wrap and gift packaging designs.\n\n━━━━━━━━━━━━━━━━━━\nPRIMARY DESIGN PRINCIPLE\n━━━━━━━━━━━━━━━━━━\n\nThis task is NOT to showcase the clipart collection.\n\nThis task IS to create a realistic Etsy-style gift wrapping mockup that demonstrates how the artwork could be be used as wrapping paper and gift packaging.\n\nThe wrapping design itself is the product.\n\nThe final image should look like a real Etsy bestseller listing.\n\n━━━━━━━━━━━━━━━━━━\nIMAGE FORMAT\n━━━━━━━━━━━━━━━━━━\n\nFinal image ratio: 4:3\n\nLandscape orientation.\n\nThe gift wrapping products should occupy approximately 50–80% of the image.\n\nThe wrapping paper design must remain clearly visible at Etsy thumbnail size.\n\nThe packaging products should be immediately recognizable.\n\nThe image should be optimized for Etsy search results and mobile browsing.\n\n━━━━━━━━━━━━━━━━━━\nTHEME-FIRST STYLING RULE\n━━━━━━━━━━━━━━━━━━\n\nBefore designing the mockup, determine:\n\n* Theme\n* Subject Matter\n* Intended Occasion\n* Target Audience\n* Gift-Giving Context\n\nThe entire scene must be built around the occasion represented by the artwork.\n\nDo not build the scene around matching colors.\n\nDo not build the scene around generic gift photography.\n\nThe occasion always overrides the color palette.\n\n━━━━━━━━━━━━━━━━━━\nBACKGROUND PRIORITY RULE\n━━━━━━━━━━━━━━━━━━\n\nThe scene must be determined by:\n\n1. Occasion\n2. Theme\n3. Subject Matter\n4. Target Audience\n5. Color Palette\n\nNever reverse this order.\n\nColor palette should only be used as a supporting accent.\n\n━━━━━━━━━━━━━━━━━━\nGIFT WRAP FORMAT\n━━━━━━━━━━━━━━━━━━\n\nCreate a professionally styled gift wrapping presentation.\n\nUse the uploaded artwork to create realistic repeating surface pattern designs.\n\nPossible applications include:\n\n* wrapping paper\n* gift wrap\n* gift box\n* envelope\n* gift tag\n* sticker seal\n* tissue paper\n* folded wrapping sheets\n\nUse 2–6 coordinated packaging items.\n\nThe collection should feel cohesive and professionally designed.\n\n━━━━━━━━━━━━━━━━━━\nPATTERN DESIGN RULE\n━━━━━━━━━━━━━━━━━━\n\nCreate realistic repeating pattern designs.\n\nThe artwork should appear naturally repeated across the packaging.\n\nAllow breathing room between repeated elements.\n\nDo not overcrowd the pattern.\n\nDo not use every uploaded artwork element.\n\nSelect only the most appropriate elements.\n\nAvoid sticker-sheet layouts.\n\nAvoid clipart catalog layouts.\n\nThe pattern should feel professionally designed for retail gift wrap.\n\n━━━━━━━━━━━━━━━━━━\nBACKGROUND STORY RULE\n━━━━━━━━━━━━━━━━━━\n\nThe background is extremely important.\n\nThe background should feel like a real environment where this gift would naturally be given, received, displayed, or exchanged.\n\nThe scene must tell a story.\n\nThe environment should immediately communicate the occasion represented by the artwork.\n\nThe background should feel intentionally curated around the theme.\n\nDo not create generic wrapping paper photography.\n\nDo not create generic stationery photography.\n\nDo not create generic gift shop scenes.\n\nCreate an environment that feels connected to the artwork theme and gifting occasion.\n\nThe background should help buyers imagine using the product.\n\n━━━━━━━━━━━━━━━━━━\nENVIRONMENT DESIGN RULE\n━━━━━━━━━━━━━━━━━━\n\nThe environment should be inspired by the lifestyle, celebration, season, and atmosphere associated with the artwork.\n\nExamples:\n\nHalloween Artwork\n→ pumpkins\n→ candy\n→ trick-or-treat atmosphere\n→ seasonal desserts\n→ autumn party styling\n\nMahjong Artwork\n→ cocktails\n→ snacks\n→ game-night atmosphere\n→ acrylic accessories\n→ party favors\n→ social gathering styling\n\nOcean Artwork\n→ lemons\n→ shells\n→ Mediterranean textures\n→ coastal lifestyle styling\n\nFarm Artwork\n→ apples\n→ harvest details\n→ orchard-inspired decor\n→ autumn celebration styling\n\nBack To School Artwork\n→ pencils\n→ notebooks\n→ classroom details\n→ teacher gift styling\n\nChristmas Artwork\n→ ornaments\n→ ribbon\n→ holiday gifting atmosphere\n\nThe environment should feel authentic, immersive, and immediately understandable.\n\n━━━━━━━━━━━━━━━━━━\nMOCKUP PERSONALITY\n━━━━━━━━━━━━━━━━━━\n\nThe mockup should feel:\n\n* premium\n* playful\n* cheerful\n* stylish\n* welcoming\n* giftable\n* Pinterest-worthy\n* Etsy bestseller quality\n\nThink:\n\n* boutique gift shop\n* artisan wrapping paper brand\n* premium celebration packaging\n* thoughtfully wrapped gifts\n* Pinterest gift wrapping inspiration\n\nAvoid:\n\n* luxury fashion branding\n* corporate packaging\n* sterile product photography\n* luxury hotel styling\n* overly formal presentation\n\n━━━━━━━━━━━━━━━━━━\nSCENE COMPOSITION\n━━━━━━━━━━━━━━━━━━\n\nCreate a realistic gift wrapping presentation.\n\nPossible compositions:\n\n* wrapped gift box with ribbon\n* multiple coordinated wrapped gifts\n* stacked gifts\n* gift box with matching tag\n* gift wrap and envelope set\n* folded wrapping paper display\n* gift packaging collection\n\nCreate depth and layering.\n\nAllow natural overlap between packaging items.\n\nThe wrapping paper design must remain highly visible.\n\nThe packaging products are always the hero.\n\n━━━━━━━━━━━━━━━━━━\nSTYLING DETAILS\n━━━━━━━━━━━━━━━━━━\n\nUse realistic gift wrapping materials.\n\nPossible materials:\n\n* satin ribbon\n* velvet ribbon\n* cotton twine\n* wax seal\n* gift tag\n* envelope\n* tissue paper\n* wrapping paper sheets\n\nChoose materials that suit the artwork theme.\n\nThe styling should feel curated and intentional.\n\n━━━━━━━━━━━━━━━━━━\nLIGHTING\n━━━━━━━━━━━━━━━━━━\n\nNatural daylight.\n\nSoft window light.\n\nWarm highlights.\n\nGentle shadows.\n\nBright inviting atmosphere.\n\nProfessional commercial product photography.\n\nAvoid dramatic studio lighting.\n\nAvoid dark editorial lighting.\n\n━━━━━━━━━━━━━━━━━━\n10 UNIQUE VARIATIONS\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 completely different gift wrapping mockups.\n\nEach image should feel like a different professional product photoshoot.\n\nVary:\n\n* wrapping style\n* pattern scale\n* packaging products\n* ribbon style\n* gift arrangement\n* camera angle\n* background styling\n* occasion styling\n* lighting direction\n\nAll 10 images must feel genuinely different.\n\n━━━━━━━━━━━━━━━━━━\nSTRICTLY AVOID\n━━━━━━━━━━━━━━━━━━\n\nUsing all artwork.\n\nClipart catalog appearance.\n\nSticker-sheet appearance.\n\nOvercrowded patterns.\n\nTiny unreadable artwork.\n\nExcessive props.\n\nLuxury fashion branding.\n\nCorporate packaging.\n\nGeneric backgrounds.\n\nBackgrounds that overpower the products.\n\nPackaging that hides the pattern design.\n\n━━━━━━━━━━━━━━━━━━\nOUTPUT REQUIREMENTS\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 unique gift wrapping mockup variations.\n\nDeliver 10 separate images.\n\nFinal image ratio: 4:3\n\nLandscape orientation.\n\nDo not create a collage.\n\nDo not create a grid.\n\nDo not create a contact sheet.\n\nDo not combine multiple mockups into one canvas.\n\nEach image must look like a real Etsy bestseller gift wrap listing.\n\nPhotorealistic.\n\nPinterest-worthy.\n\nPremium Etsy styling.\n\nBoutique gift packaging styling.\n\nProfessional commercial product photography.\n\nRealistic paper textures.\n\nOccasion-specific background storytelling.\n\nInviting and slightly playful atmosphere.","isTextStock":false,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-mockup-013"},{"id":"1783063274790-f6e0e098f1263","title":"テーブルデコレーションアイテム","category":"ステッカーモックアップ","categoryId":"1783060678179-2bc61a5a9511b","description":"","prompt":"Create a premium Etsy-style Party Paper Suite mockup using ONLY the uploaded clipart artwork.\n\nThe uploaded clipart must remain completely unchanged.\n\nDo not redraw, repaint, restyle, simplify, alter colors, modify characters, add new illustrations, replace elements, or reinterpret the artwork.\n\nUse the uploaded clipart exactly as provided as professionally printed artwork across multiple coordinated party paper products.\n\n━━━━━━━━━━━━━━━━━━\nPRIMARY DESIGN PRINCIPLE\n━━━━━━━━━━━━━━━━━━\n\nThis task is NOT to showcase the clipart collection.\n\nThis task IS to create a realistic Etsy-style party paper suite that looks professionally designed for a real event.\n\nThe paper products themselves are the product.\n\nNot the clipart collection.\n\nThe final image should look like a premium Etsy bestseller listing.\n\n━━━━━━━━━━━━━━━━━━\nPRODUCT SUITE FORMAT\n━━━━━━━━━━━━━━━━━━\n\nCreate a coordinated party paper collection using multiple paper items.\n\nPossible products include:\n\n* Invitation\n* Menu Card\n* Place Card\n* Welcome Sign\n* Favor Tag\n* Gift Tag\n* Straw Marker\n* Cup Wrap\n* Paper Cup\n* Food Label\n* Party Signage\n* Table Card\n\nUse 4–10 coordinated products within the scene.\n\nThe products should feel like a matching event collection.\n\n━━━━━━━━━━━━━━━━━━\nDESIGN PRIORITY ORDER\n━━━━━━━━━━━━━━━━━━\n\n1. Product Visibility\n2. Product Design Quality\n3. Readability\n4. Layout\n5. Event Communication\n6. Visual Balance\n7. Subject Matter\n8. Target Audience\n9. Color Palette\n\nColor palette has the lowest priority.\n\nAlways prioritize the event and subject matter.\n\n━━━━━━━━━━━━━━━━━━\nEVENT INTERPRETATION RULE\n━━━━━━━━━━━━━━━━━━\n\nDetermine the most likely event represented by the artwork.\n\nExamples:\n\nMahjong Artwork\n→ Mahjong Party\n→ Game Night\n→ Social Gathering\n\nHalloween Artwork\n→ Halloween Party\n\nOcean Artwork\n→ Coastal Party\n→ Summer Celebration\n\nBack To School Artwork\n→ School Event\n\nFarm Artwork\n→ Harvest Party\n\nDesign the entire paper suite around that event.\n\n━━━━━━━━━━━━━━━━━━\nARTWORK USAGE RULE\n━━━━━━━━━━━━━━━━━━\n\nDo not use all uploaded artwork.\n\nDo not create a clipart catalog.\n\nDo not create a sticker-sheet appearance.\n\nSelect only the most appropriate artwork pieces.\n\nEach paper product should use different artwork combinations.\n\nThe collection should feel intentionally designed.\n\nUse restraint.\n\nUse whitespace.\n\nPrioritize good design over artwork quantity.\n\n━━━━━━━━━━━━━━━━━━\nPARTY SUITE PERSONALITY\n━━━━━━━━━━━━━━━━━━\n\nThe collection should feel:\n\n* premium\n* playful\n* cheerful\n* welcoming\n* stylish\n* celebration-focused\n* professionally designed\n\nThink:\n\n* Etsy bestseller\n* Pinterest party inspiration\n* boutique event styling\n* premium but fun\n\nAvoid:\n\n* luxury hotel branding\n* wedding-only styling\n* corporate design\n* overly formal design\n\n━━━━━━━━━━━━━━━━━━\nSCENE COMPOSITION\n━━━━━━━━━━━━━━━━━━\n\nCreate a realistic party table scene.\n\nThe products should be arranged naturally.\n\nLayer items slightly.\n\nCreate depth.\n\nCreate visual hierarchy.\n\nAllow some products to overlap naturally.\n\nThe composition should feel professionally styled by an event planner.\n\nThe paper products should occupy approximately 50–80% of the image.\n\nThe products are the hero.\n\n━━━━━━━━━━━━━━━━━━\nBACKGROUND MOOD\n━━━━━━━━━━━━━━━━━━\n\nThe background should feel:\n\n* premium\n* playful\n* warm\n* inviting\n* Pinterest-worthy\n* celebration-focused\n\nThe environment should feel like a beautifully styled party.\n\nAvoid:\n\n* luxury hotel styling\n* fashion editorial styling\n* sterile product photography\n\nThink:\n\n* boutique party\n* premium celebration\n* modern gathering\n* stylish event setup\n\n━━━━━━━━━━━━━━━━━━\nEVENT STYLING\n━━━━━━━━━━━━━━━━━━\n\nBuild the environment around the event.\n\nExamples:\n\nBirthday Party\n→ cake\n→ balloons\n→ party table\n\nHalloween Party\n→ treats\n→ candles\n→ garlands\n\nMahjong Party\n→ drinks\n→ snacks\n→ game-night atmosphere\n\nBeach Party\n→ lemons\n→ shells\n→ coastal textures\n\nBack To School\n→ stationery\n→ classroom-inspired details\n\nProps should support the story.\n\nProps must never overpower the paper products.\n\n━━━━━━━━━━━━━━━━━━\nPAPER & PRINT QUALITY\n━━━━━━━━━━━━━━━━━━\n\nPremium cardstock.\n\nVisible paper fibers.\n\nSoft matte finish.\n\nSubtle paper grain.\n\nProfessional print quality.\n\nRealistic paper thickness.\n\nCrisp typography.\n\nAuthentic printing texture.\n\n━━━━━━━━━━━━━━━━━━\nLIGHTING\n━━━━━━━━━━━━━━━━━━\n\nNatural daylight.\n\nSoft window light.\n\nWarm highlights.\n\nGentle shadows.\n\nBright inviting atmosphere.\n\nProfessional product photography.\n\n━━━━━━━━━━━━━━━━━━\n10 UNIQUE VARIATIONS\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 completely different Party Paper Suite mockups.\n\nEach image should feel like a different event planner styled the table.\n\nVary:\n\n* product selection\n* product arrangement\n* table styling\n* props\n* camera angle\n* background composition\n* lighting direction\n* event setup\n\nAll 10 images must feel genuinely different.\n\n━━━━━━━━━━━━━━━━━━\nSTRICTLY AVOID\n━━━━━━━━━━━━━━━━━━\n\nUsing all artwork.\n\nClipart catalog appearance.\n\nSticker-sheet appearance.\n\nScrapbook appearance.\n\nCrowded layouts.\n\nTiny unreadable products.\n\nExcessive decoration.\n\nGeneric color-matched scenes.\n\nOverly luxurious styling.\n\nBackgrounds that overpower the products.\n\n━━━━━━━━━━━━━━━━━━\nOUTPUT REQUIREMENTS\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 unique Party Paper Suite mockup variations.\n\nDeliver 10 separate images.\n\nDo not create a collage.\n\nDo not create a grid.\n\nDo not create a contact sheet.\n\nDo not combine multiple images into one canvas.\n\nEach image must look like a real Etsy bestseller party stationery listing.\n\nPhotorealistic.\n\nPinterest-worthy.\n\nPremium Etsy styling.\n\nBoutique party styling.\n\nCelebration-focused styling.\n\nProfessional commercial product photography.\n\nRealistic paper texture.\n\nInviting and slightly playful atmosphere.","memo":"","tags":[],"imageUrl":{"id":"1783063251398-72a37782cf03e8","dbId":"1783063251398-72a37782cf03e8","category":"mockup","src":"indexeddb:1783063251398-72a37782cf03e8","thumbnail":"indexeddb-thumb:1783063251398-72a37782cf03e8","originalName":"b692a4fa-3b11-4f16-b373-e6826fb240ef.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T07:20:51.398Z"},"coverImages":[{"id":"1783063251398-72a37782cf03e8","dbId":"1783063251398-72a37782cf03e8","category":"mockup","src":"indexeddb:1783063251398-72a37782cf03e8","thumbnail":"indexeddb-thumb:1783063251398-72a37782cf03e8","originalName":"b692a4fa-3b11-4f16-b373-e6826fb240ef.png","mimeType":"image/webp","width":1200,"height":900,"createdAt":"2026-07-03T07:20:51.398Z"}],"japaneseTranslation":"Create a premium Etsy-style Party Paper Suite mockup using ONLY the uploaded clipart artwork.\n\nThe uploaded clipart must remain completely unchanged.\n\nDo not redraw, repaint, restyle, simplify, alter colors, modify characters, add new illustrations, replace elements, or reinterpret the artwork.\n\nUse the uploaded clipart exactly as provided as professionally printed artwork across multiple coordinated party paper products.\n\n━━━━━━━━━━━━━━━━━━\nPRIMARY DESIGN PRINCIPLE\n━━━━━━━━━━━━━━━━━━\n\nThis task is NOT to showcase the clipart collection.\n\nThis task IS to create a realistic Etsy-style party paper suite that looks professionally designed for a real event.\n\nThe paper products themselves are the product.\n\nNot the clipart collection.\n\nThe final image should look like a premium Etsy bestseller listing.\n\n━━━━━━━━━━━━━━━━━━\nPRODUCT SUITE FORMAT\n━━━━━━━━━━━━━━━━━━\n\nCreate a coordinated party paper collection using multiple paper items.\n\nPossible products include:\n\n* Invitation\n* Menu Card\n* Place Card\n* Welcome Sign\n* Favor Tag\n* Gift Tag\n* Straw Marker\n* Cup Wrap\n* Paper Cup\n* Food Label\n* Party Signage\n* Table Card\n\nUse 4–10 coordinated products within the scene.\n\nThe products should feel like a matching event collection.\n\n━━━━━━━━━━━━━━━━━━\nDESIGN PRIORITY ORDER\n━━━━━━━━━━━━━━━━━━\n\n1. Product Visibility\n2. Product Design Quality\n3. Readability\n4. Layout\n5. Event Communication\n6. Visual Balance\n7. Subject Matter\n8. Target Audience\n9. Color Palette\n\nColor palette has the lowest priority.\n\nAlways prioritize the event and subject matter.\n\n━━━━━━━━━━━━━━━━━━\nEVENT INTERPRETATION RULE\n━━━━━━━━━━━━━━━━━━\n\nDetermine the most likely event represented by the artwork.\n\nExamples:\n\nMahjong Artwork\n→ Mahjong Party\n→ Game Night\n→ Social Gathering\n\nHalloween Artwork\n→ Halloween Party\n\nOcean Artwork\n→ Coastal Party\n→ Summer Celebration\n\nBack To School Artwork\n→ School Event\n\nFarm Artwork\n→ Harvest Party\n\nDesign the entire paper suite around that event.\n\n━━━━━━━━━━━━━━━━━━\nARTWORK USAGE RULE\n━━━━━━━━━━━━━━━━━━\n\nDo not use all uploaded artwork.\n\nDo not create a clipart catalog.\n\nDo not create a sticker-sheet appearance.\n\nSelect only the most appropriate artwork pieces.\n\nEach paper product should use different artwork combinations.\n\nThe collection should feel intentionally designed.\n\nUse restraint.\n\nUse whitespace.\n\nPrioritize good design over artwork quantity.\n\n━━━━━━━━━━━━━━━━━━\nPARTY SUITE PERSONALITY\n━━━━━━━━━━━━━━━━━━\n\nThe collection should feel:\n\n* premium\n* playful\n* cheerful\n* welcoming\n* stylish\n* celebration-focused\n* professionally designed\n\nThink:\n\n* Etsy bestseller\n* Pinterest party inspiration\n* boutique event styling\n* premium but fun\n\nAvoid:\n\n* luxury hotel branding\n* wedding-only styling\n* corporate design\n* overly formal design\n\n━━━━━━━━━━━━━━━━━━\nSCENE COMPOSITION\n━━━━━━━━━━━━━━━━━━\n\nCreate a realistic party table scene.\n\nThe products should be arranged naturally.\n\nLayer items slightly.\n\nCreate depth.\n\nCreate visual hierarchy.\n\nAllow some products to overlap naturally.\n\nThe composition should feel professionally styled by an event planner.\n\nThe paper products should occupy approximately 50–80% of the image.\n\nThe products are the hero.\n\n━━━━━━━━━━━━━━━━━━\nBACKGROUND MOOD\n━━━━━━━━━━━━━━━━━━\n\nThe background should feel:\n\n* premium\n* playful\n* warm\n* inviting\n* Pinterest-worthy\n* celebration-focused\n\nThe environment should feel like a beautifully styled party.\n\nAvoid:\n\n* luxury hotel styling\n* fashion editorial styling\n* sterile product photography\n\nThink:\n\n* boutique party\n* premium celebration\n* modern gathering\n* stylish event setup\n\n━━━━━━━━━━━━━━━━━━\nEVENT STYLING\n━━━━━━━━━━━━━━━━━━\n\nBuild the environment around the event.\n\nExamples:\n\nBirthday Party\n→ cake\n→ balloons\n→ party table\n\nHalloween Party\n→ treats\n→ candles\n→ garlands\n\nMahjong Party\n→ drinks\n→ snacks\n→ game-night atmosphere\n\nBeach Party\n→ lemons\n→ shells\n→ coastal textures\n\nBack To School\n→ stationery\n→ classroom-inspired details\n\nProps should support the story.\n\nProps must never overpower the paper products.\n\n━━━━━━━━━━━━━━━━━━\nPAPER & PRINT QUALITY\n━━━━━━━━━━━━━━━━━━\n\nPremium cardstock.\n\nVisible paper fibers.\n\nSoft matte finish.\n\nSubtle paper grain.\n\nProfessional print quality.\n\nRealistic paper thickness.\n\nCrisp typography.\n\nAuthentic printing texture.\n\n━━━━━━━━━━━━━━━━━━\nLIGHTING\n━━━━━━━━━━━━━━━━━━\n\nNatural daylight.\n\nSoft window light.\n\nWarm highlights.\n\nGentle shadows.\n\nBright inviting atmosphere.\n\nProfessional product photography.\n\n━━━━━━━━━━━━━━━━━━\n10 UNIQUE VARIATIONS\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 completely different Party Paper Suite mockups.\n\nEach image should feel like a different event planner styled the table.\n\nVary:\n\n* product selection\n* product arrangement\n* table styling\n* props\n* camera angle\n* background composition\n* lighting direction\n* event setup\n\nAll 10 images must feel genuinely different.\n\n━━━━━━━━━━━━━━━━━━\nSTRICTLY AVOID\n━━━━━━━━━━━━━━━━━━\n\nUsing all artwork.\n\nClipart catalog appearance.\n\nSticker-sheet appearance.\n\nScrapbook appearance.\n\nCrowded layouts.\n\nTiny unreadable products.\n\nExcessive decoration.\n\nGeneric color-matched scenes.\n\nOverly luxurious styling.\n\nBackgrounds that overpower the products.\n\n━━━━━━━━━━━━━━━━━━\nOUTPUT REQUIREMENTS\n━━━━━━━━━━━━━━━━━━\n\nGenerate 10 unique Party Paper Suite mockup variations.\n\nDeliver 10 separate images.\n\nDo not create a collage.\n\nDo not create a grid.\n\nDo not create a contact sheet.\n\nDo not combine multiple images into one canvas.\n\nEach image must look like a real Etsy bestseller party stationery listing.\n\nPhotorealistic.\n\nPinterest-worthy.\n\nPremium Etsy styling.\n\nBoutique party styling.\n\nCelebration-focused styling.\n\nProfessional commercial product photography.\n\nRealistic paper texture.\n\nInviting and slightly playful atmosphere.","isTextStock":false,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-mockup-014"}],"mockupStocks":[],"promptCards":[{"id":"my-1","title":"かわいい動物ステッカー","category":"ステッカーモックアップ","description":"白背景でステッカーの質感が見えやすい、Etsy向けの定番モックアップ。","prompt":"温かみのある白い紙の上に置いた、清潔感のあるステッカーシートの平置きモックアップ。自然光、やわらかな影、上品なハンドメイド文具の雰囲気、透過PNGアートを配置しやすい余白。","tags":["かわいい","動物","ステッカー"],"imageUrl":"data:image/svg+xml,%0A%20%20%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22900%22%20height%3D%22650%22%20viewBox%3D%220%200%20900%20650%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20stop-color%3D%22%23f8ead8%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23dfe8df%22%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22900%22%20height%3D%22650%22%20rx%3D%2242%22%20fill%3D%22url(%23g)%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22190%22%20cy%3D%22165%22%20r%3D%2280%22%20fill%3D%22%23fff%22%20opacity%3D%22.42%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22720%22%20cy%3D%22500%22%20r%3D%22140%22%20fill%3D%22%23fff%22%20opacity%3D%22.28%22%2F%3E%0A%20%20%20%20%3Crect%20x%3D%22210%22%20y%3D%22190%22%20width%3D%22480%22%20height%3D%22270%22%20rx%3D%2228%22%20fill%3D%22%23fffaf4%22%20opacity%3D%22.92%22%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%22450%22%20y%3D%22335%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%22%20font-size%3D%2242%22%20fill%3D%22%234b4038%22%3E%E3%82%B9%E3%83%86%E3%83%83%E3%82%AB%E3%83%BC%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E","note":"動物クリップアートのステッカー販売ページ用。","favorite":true,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-prompt-card-001"},{"id":"my-2","title":"植物アートプリント","category":"アートプリントモックアップ","description":"アートプリントをリビングの壁に飾った販売ページ向け写真。","prompt":"落ち着いたリビングの壁に飾った額入りアートプリントのモックアップ。オーク材の額縁、ニュートラルなソファ、やわらかな日差し、北欧風インテリア、リアルなファインアート紙。","tags":["植物","壁掛けアート"],"imageUrl":"data:image/svg+xml,%0A%20%20%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22900%22%20height%3D%22650%22%20viewBox%3D%220%200%20900%20650%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20stop-color%3D%22%23e4e7df%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23f8efe2%22%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22900%22%20height%3D%22650%22%20rx%3D%2242%22%20fill%3D%22url(%23g)%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22190%22%20cy%3D%22165%22%20r%3D%2280%22%20fill%3D%22%23fff%22%20opacity%3D%22.42%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22720%22%20cy%3D%22500%22%20r%3D%22140%22%20fill%3D%22%23fff%22%20opacity%3D%22.28%22%2F%3E%0A%20%20%20%20%3Crect%20x%3D%22210%22%20y%3D%22190%22%20width%3D%22480%22%20height%3D%22270%22%20rx%3D%2228%22%20fill%3D%22%23fffaf4%22%20opacity%3D%22.92%22%2F%3E%0A%20%20%20%20%3Ctext%20x%3D%22450%22%20y%3D%22335%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%22%20font-size%3D%2242%22%20fill%3D%22%234b4038%22%3E%E3%82%A2%E3%83%BC%E3%83%88%3C%2Ftext%3E%0A%20%20%3C%2Fsvg%3E","note":"水彩植物シリーズ用。額縁は明るめ。","favorite":false,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-prompt-card-002"}],"promptStocks":[],"videoPromptCards":[{"id":"video-sample-1","title":"淡いステッカー紹介動画","url":"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4","model":"Runway","thumbnail":"","prompt":"soft pastel clipart sticker sheet reveal, gentle camera push in, cozy stationery desk, clean white background, smooth motion","memo":"Etsyのサムネイル動画やSNS用に使いやすい構成。","tags":["sticker","pastel","reveal"],"favorite":true,"createdAt":"2026-07-02T00:00:00.000Z","isSample":true,"createdFromSeedExport":true,"sampleId":"sample-video-card-001"},{"id":"video-sample-2","title":"招待状モックアップ動画","url":"","model":"Kling","thumbnail":"","prompt":"wedding invitation card mockup on linen fabric, slow top-down camera movement, elegant natural light, warm ivory tone","memo":"招待状パックの販売ページ用。","tags":["invitation","mockup","wedding"],"favorite":false,"createdAt":"2026-07-02T00:00:00.000Z","isSample":true,"createdFromSeedExport":true,"sampleId":"sample-video-card-002"}],"videoPromptStocks":[],"midjourneySettings":[{"id":"mj-1","title":"かわいいクリップアート基本設定","description":"Etsy向けのかわいい単品クリップアート生成用。","ar":"1:1","stylize":"50","chaos":"10","profile":"XXXXX","seed":"","raw":true,"extra":"かわいいクリップアート風、白背景、印刷しやすいシンプルな形","note":"背景透過にしやすい白背景で使う。","isSample":true,"createdFromSeedExport":true,"sampleId":"sample-mj-setting-001"},{"id":"mj-2","title":"ステッカーシート確認用","description":"複数ステッカーを1枚に並べるプレビュー用。","ar":"4:5","stylize":"80","chaos":"6","profile":"","seed":"1234","raw":false,"extra":"統一感のあるステッカーシート、清潔感のある白背景","note":"商品画像の1枚目候補。","isSample":true,"createdFromSeedExport":true,"sampleId":"sample-mj-setting-002"}],"projects":[{"id":"project-1","name":"ハロウィンクリップアート","description":"秋から販売するハロウィン素材セット。","promptIds":["my-1"],"mjIds":["mj-1"],"note":"9月上旬までに30点作成。","tags":["季節商品","ハロウィン"],"dueDate":"2026-09-01","remindOnHome":true,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-project-001"}],"galleryItems":[{"id":"1783238485945-26456fb486f468","dbId":"1783238485945-26456fb486f468","category":"journal","src":"indexeddb:1783238485945-26456fb486f468","thumbnail":"indexeddb-thumb:1783238485945-26456fb486f468","originalName":"10.png","mimeType":"image/webp","width":1400,"height":1400,"createdAt":"2026-07-05T08:01:25.945Z","title":"10","memo":"ジャーナルから追加","source":"journal","favorite":false,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-gallery-001"},{"id":"1783238482965-040cdae1067b2","dbId":"1783238482965-040cdae1067b2","category":"journal","src":"indexeddb:1783238482965-040cdae1067b2","thumbnail":"indexeddb-thumb:1783238482965-040cdae1067b2","originalName":"11.png","mimeType":"image/webp","width":1400,"height":1400,"createdAt":"2026-07-05T08:01:22.965Z","title":"11","memo":"ジャーナルから追加","source":"journal","favorite":false,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-gallery-002"},{"id":"1783238485589-d7be1d346ce0f","dbId":"1783238485589-d7be1d346ce0f","category":"journal","src":"indexeddb:1783238485589-d7be1d346ce0f","thumbnail":"indexeddb-thumb:1783238485589-d7be1d346ce0f","originalName":"12.png","mimeType":"image/webp","width":1400,"height":1400,"createdAt":"2026-07-05T08:01:25.589Z","title":"12","memo":"ジャーナルから追加","source":"journal","favorite":false,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-gallery-003"},{"id":"1783238484988-04380cb462172","dbId":"1783238484988-04380cb462172","category":"journal","src":"indexeddb:1783238484988-04380cb462172","thumbnail":"indexeddb-thumb:1783238484988-04380cb462172","originalName":"13.png","mimeType":"image/webp","width":1400,"height":1400,"createdAt":"2026-07-05T08:01:24.988Z","title":"13","memo":"ジャーナルから追加","source":"journal","favorite":false,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-gallery-004"},{"id":"1783238483310-bf58ffe0bed08","dbId":"1783238483310-bf58ffe0bed08","category":"journal","src":"indexeddb:1783238483310-bf58ffe0bed08","thumbnail":"indexeddb-thumb:1783238483310-bf58ffe0bed08","originalName":"14.png","mimeType":"image/webp","width":1400,"height":1400,"createdAt":"2026-07-05T08:01:23.310Z","title":"14","memo":"ジャーナルから追加","source":"journal","favorite":false,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-gallery-005"},{"id":"1783238483999-3d3dba8b5d5e9","dbId":"1783238483999-3d3dba8b5d5e9","category":"journal","src":"indexeddb:1783238483999-3d3dba8b5d5e9","thumbnail":"indexeddb-thumb:1783238483999-3d3dba8b5d5e9","originalName":"15.png","mimeType":"image/webp","width":1400,"height":1400,"createdAt":"2026-07-05T08:01:23.999Z","title":"15","memo":"ジャーナルから追加","source":"journal","favorite":false,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-gallery-006"},{"id":"1783238483664-b645dd0ceb2c","dbId":"1783238483664-b645dd0ceb2c","category":"journal","src":"indexeddb:1783238483664-b645dd0ceb2c","thumbnail":"indexeddb-thumb:1783238483664-b645dd0ceb2c","originalName":"16.png","mimeType":"image/webp","width":1400,"height":1400,"createdAt":"2026-07-05T08:01:23.664Z","title":"16","memo":"ジャーナルから追加","source":"journal","favorite":false,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-gallery-007"},{"id":"1783238484624-947d886157a1e","dbId":"1783238484624-947d886157a1e","category":"journal","src":"indexeddb:1783238484624-947d886157a1e","thumbnail":"indexeddb-thumb:1783238484624-947d886157a1e","originalName":"17.png","mimeType":"image/webp","width":1400,"height":1400,"createdAt":"2026-07-05T08:01:24.624Z","title":"17","memo":"ジャーナルから追加","source":"journal","favorite":false,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-gallery-008"},{"id":"1783238484314-e2181836bf31c","dbId":"1783238484314-e2181836bf31c","category":"journal","src":"indexeddb:1783238484314-e2181836bf31c","thumbnail":"indexeddb-thumb:1783238484314-e2181836bf31c","originalName":"18.png","mimeType":"image/webp","width":1400,"height":1400,"createdAt":"2026-07-05T08:01:24.314Z","title":"18","memo":"ジャーナルから追加","source":"journal","favorite":false,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-gallery-009"},{"id":"1783238486346-c2811457ef04f8","dbId":"1783238486346-c2811457ef04f8","category":"journal","src":"indexeddb:1783238486346-c2811457ef04f8","thumbnail":"indexeddb-thumb:1783238486346-c2811457ef04f8","originalName":"19.png","mimeType":"image/webp","width":1400,"height":1400,"createdAt":"2026-07-05T08:01:26.346Z","title":"19","memo":"ジャーナルから追加","source":"journal","favorite":false,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-gallery-010"},{"id":"1783238485324-86b4fbadec6048","dbId":"1783238485324-86b4fbadec6048","category":"journal","src":"indexeddb:1783238485324-86b4fbadec6048","thumbnail":"indexeddb-thumb:1783238485324-86b4fbadec6048","originalName":"20.png","mimeType":"image/webp","width":1400,"height":1400,"createdAt":"2026-07-05T08:01:25.324Z","title":"20","memo":"ジャーナルから追加","source":"journal","favorite":false,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-gallery-011"}],"journalItems":[{"id":"1783238486376-b8d957bac41a8","imageId":"1783238485945-26456fb486f468","src":"indexeddb:1783238485945-26456fb486f468","thumbnail":"indexeddb-thumb:1783238485945-26456fb486f468","x":631.58203125,"y":511.6953125,"width":132,"rotate":13,"stickerEffect":true,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-journal-item-001"},{"id":"1783238486376-bdef4f9175791","imageId":"1783238482965-040cdae1067b2","src":"indexeddb:1783238482965-040cdae1067b2","thumbnail":"indexeddb-thumb:1783238482965-040cdae1067b2","x":397.05859375,"y":281.42578125,"width":165,"rotate":0,"stickerEffect":false,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-journal-item-002"},{"id":"1783238486376-7d52ce0f8976e8","imageId":"1783238485589-d7be1d346ce0f","src":"indexeddb:1783238485589-d7be1d346ce0f","thumbnail":"indexeddb-thumb:1783238485589-d7be1d346ce0f","x":57.84375,"y":558.4609375,"width":115,"rotate":10,"stickerEffect":true,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-journal-item-003"},{"id":"1783238486376-b7f508112055b","imageId":"1783238484988-04380cb462172","src":"indexeddb:1783238484988-04380cb462172","thumbnail":"indexeddb-thumb:1783238484988-04380cb462172","x":802.07421875,"y":414.3984375,"width":123,"rotate":-8,"stickerEffect":true,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-journal-item-004"},{"id":"1783238486376-5f10c156e24c2","imageId":"1783238483310-bf58ffe0bed08","src":"indexeddb:1783238483310-bf58ffe0bed08","thumbnail":"indexeddb-thumb:1783238483310-bf58ffe0bed08","x":820.18359375,"y":78.37890625,"width":104,"rotate":-8,"stickerEffect":true,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-journal-item-005"},{"id":"1783238486376-b022f3dca801f8","imageId":"1783238483664-b645dd0ceb2c","src":"indexeddb:1783238483664-b645dd0ceb2c","thumbnail":"indexeddb-thumb:1783238483664-b645dd0ceb2c","x":370.30078125,"y":36.77734375,"width":225,"rotate":0,"stickerEffect":false,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-journal-item-006"},{"id":"1783238486376-f1ca2a7a233718","imageId":"1783238484624-947d886157a1e","src":"indexeddb:1783238484624-947d886157a1e","thumbnail":"indexeddb-thumb:1783238484624-947d886157a1e","x":458.421875,"y":476.90625,"width":85,"rotate":3,"stickerEffect":false,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-journal-item-007"},{"id":"1783238486376-875df76c91c15","imageId":"1783238484314-e2181836bf31c","src":"indexeddb:1783238484314-e2181836bf31c","thumbnail":"indexeddb-thumb:1783238484314-e2181836bf31c","x":414.05859375,"y":478.8671875,"width":88,"rotate":-8,"stickerEffect":false,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-journal-item-008"},{"id":"1783238486376-4485f2a61345a8","imageId":"1783238486346-c2811457ef04f8","src":"indexeddb:1783238486346-c2811457ef04f8","thumbnail":"indexeddb-thumb:1783238486346-c2811457ef04f8","x":285.62109375,"y":68.85546875,"width":98,"rotate":-8,"stickerEffect":true,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-journal-item-009"},{"id":"1783238486376-74ce4db2cabd88","imageId":"1783238485324-86b4fbadec6048","src":"indexeddb:1783238485324-86b4fbadec6048","thumbnail":"indexeddb-thumb:1783238485324-86b4fbadec6048","x":36.46875,"y":426.65625,"width":107,"rotate":-8,"stickerEffect":true,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-journal-item-010"},{"id":"1783238492970-e0e9ce6db318d8","imageId":"1783238485589-d7be1d346ce0f","src":"indexeddb:1783238485589-d7be1d346ce0f","thumbnail":"indexeddb-thumb:1783238485589-d7be1d346ce0f","x":618.2109375,"y":273.43359375,"width":117,"rotate":6,"stickerEffect":true,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-journal-item-011"},{"id":"1783238619612-8a32513c2a2f9","imageId":"1783238483999-3d3dba8b5d5e9","src":"indexeddb:1783238483999-3d3dba8b5d5e9","thumbnail":"indexeddb-thumb:1783238483999-3d3dba8b5d5e9","x":246.20703125,"y":316.2890625,"width":108,"rotate":-17,"stickerEffect":true,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-journal-item-012"}],"journalBackgrounds":[{"id":"1783238412073-54546b2f75b4","dbId":"1783238412073-54546b2f75b4","category":"background","src":"indexeddb:1783238412073-54546b2f75b4","thumbnail":"indexeddb-thumb:1783238412073-54546b2f75b4","originalName":"71961abc-98c8-4d7f-8147-e4620c8d7723.png","mimeType":"image/webp","width":1536,"height":1024,"createdAt":"2026-07-05T08:00:12.073Z","title":"71961abc-98c8-4d7f-8147-e4620c8d7723","memo":"","source":"journal-background","favorite":false,"isSample":true,"createdFromSeedExport":true,"sampleId":"sample-journal-bg-001"}],"homeSettings":{"themeId":"vivid-pink","bannerImage":"indexeddb:1783238964761-0371df5d605228","bannerImageUrl":"indexeddb:1783238964761-0371df5d605228","bannerVisible":true,"bannerSize":"medium","bannerFit":"contain","bannerPositionX":50,"bannerPositionY":50,"bannerPositions":{"small":{"x":50,"y":50},"medium":{"x":50,"y":50},"large":{"x":50,"y":50}},"workToolIconStyle":"pastel","displayDensity":"normal","pageDisplaySettings":{"gallery":{"gap":"normal","ratio":"square","showHeart":true,"columns":"auto"},"prompts":{"viewMode":"card","showTags":true,"showMemo":true,"imageSize":"normal"},"videoPrompts":{"viewMode":"card","showTags":true,"showMemo":true,"thumbnailSize":"normal"},"projects":{"sortBy":"deadline","showCompleted":true,"showAlarms":true},"mockups":{"categoryCardSize":"normal","showDescription":true,"showCount":true}},"cardStyle":{"radius":"medium","shadow":"normal","transparency":"solid","border":"soft"},"backgroundStyle":{"type":"solid","color":"#fdf0ff","gradient":"milkPink","pattern":"none","image":"","imageFit":"cover","imagePosition":"center","imageBlur":"none","imageOpacity":"normal","showDecorations":true},"fontPreset":"simple","iconSet":"label","homeCharacter":{"image":"indexeddb:1783058253744-84b8061a1760a8","position":"right-center","size":"medium","speechEnabled":true,"messageMode":"fixed","fixedMessage":"ここもカスタマイズで変更できます♡","selectedProjectId":""},"homeStatsCards":{"mockups":true,"prompts":true,"mjSettings":true,"projects":true,"achievement":false},"visible":{"library":true,"prompts":true,"videos":true,"mj":true,"projects":true,"atelier":true,"dashboard":true,"quickActions":true,"featureCards":true,"favorites":true,"search":true},"order":["dashboard","quickActions","featureCards","favorites","atelier"]},"workTools":[{"id":"tool-midjourney","name":"Midjourney","url":"https://www.midjourney.com/","iconText":"MJ","iconImage":"","memo":"画像生成","isSample":true,"createdFromSeedExport":true,"sampleId":"sample-work-tool-001"},{"id":"tool-pinterest","name":"Pinterest","url":"https://www.pinterest.com/","iconText":"P","iconImage":"","memo":"参考画像","isSample":true,"createdFromSeedExport":true,"sampleId":"sample-work-tool-002"},{"id":"tool-chatgpt","name":"ChatGPT","url":"https://chatgpt.com/","iconText":"GPT","iconImage":"","memo":"文章づくり","isSample":true,"createdFromSeedExport":true,"sampleId":"sample-work-tool-003"},{"id":"1783058352541-0d206a16267628","name":"Gemmini","url":"https://gemini.google.com/app?hl=ja","iconText":"Gemmini","iconImage":"","memo":"","isSample":true,"createdFromSeedExport":true,"sampleId":"sample-work-tool-004"}]};
const DELETED_SAMPLE_IDS_KEY = "promptAtelier_deletedSampleIds";
const LEGACY_DELETED_SAMPLE_IDS_KEY = "promptAtelierDeletedSampleIds";
const SAMPLE_EXPORT_KEYS = [
  "prompt-atelier-mockup-categories-v2",
  "prompt-atelier-library-prompts-v5",
  "prompt-atelier-prompts-ja-v2",
  "promptAtelierVideoPrompts",
  "promptAtelierVideoPromptStocks",
  "promptAtelierMidjourneySettings",
  "prompt-atelier-projects-ja-v2",
  "prompt-atelier-project-memos-v1",
  "promptAtelierJournal",
  "promptAtelierGallery",
  "promptAtelierHomeSettings",
  "promptAtelierWorkTools",
];
const SAMPLE_DATA_STORAGE_MAP: Record<string, string> = {
  libraryItems: "prompt-atelier-mockup-categories-v2",
  mockupCategories: "prompt-atelier-mockup-categories-v2",
  mockupItems: "prompt-atelier-library-prompts-v5",
  mockupStocks: "prompt-atelier-library-prompts-v5",
  promptCards: "prompt-atelier-prompts-ja-v2",
  promptStocks: "prompt-atelier-prompts-ja-v2",
  videoPromptCards: "promptAtelierVideoPrompts",
  videoPromptStocks: "promptAtelierVideoPromptStocks",
  midjourneySettings: "promptAtelierMidjourneySettings",
  projects: "prompt-atelier-projects-ja-v2",
  projectMemos: "prompt-atelier-project-memos-v1",
  galleryItems: "promptAtelierGallery",
  journalItems: "promptAtelierJournal",
  journalBackgrounds: "promptAtelierJournal",
  homeSettings: "promptAtelierHomeSettings",
  customizeSettings: "promptAtelierHomeSettings",
  workTools: "promptAtelierWorkTools",
};
const STORAGE_LIMIT_BYTES = 5 * 1024 * 1024;
const IMAGE_DB_NAME = "PromptAtelierDB";
const IMAGE_DB_VERSION = 1;
const IMAGE_STORE_NAME = "images";
const indexedDbImageCache = new Map<string, IndexedDbImageRecord>();
const indexedDbRef = (id: string) => `indexeddb:${id}`;
const indexedDbThumbRef = (id: string) => `indexeddb-thumb:${id}`;
const isIndexedDbImageRef = (value: string) => /^indexeddb(?:-thumb)?:/.test(value);
const indexedDbIdFromRef = (value: string) => value.replace(/^indexeddb(?:-thumb)?:/, "");
const isDataImageUrl = (value: unknown) => typeof value === "string" && /^data:image\/(png|jpe?g|webp);base64,/i.test(value);
const imageQualityProfiles: Record<string, { maxSide: number; quality: number; thumbnailSide: number; thumbnailQuality: number; keepOriginalMaxSide?: number }> = {
  banner: { maxSide: 3200, quality: 0.98, thumbnailSide: 1800, thumbnailQuality: 0.95, keepOriginalMaxSide: 3200 },
  gallery: { maxSide: 1400, quality: 0.92, thumbnailSide: 720, thumbnailQuality: 0.9 },
  journal: { maxSide: 1400, quality: 0.92, thumbnailSide: 720, thumbnailQuality: 0.9 },
  background: { maxSide: 1600, quality: 0.88, thumbnailSide: 760, thumbnailQuality: 0.86 },
  "video-thumbnail": { maxSide: 1200, quality: 0.92, thumbnailSide: 720, thumbnailQuality: 0.9 },
  character: { maxSide: 1200, quality: 0.92, thumbnailSide: 720, thumbnailQuality: 0.9 },
  icon: { maxSide: 900, quality: 0.9, thumbnailSide: 480, thumbnailQuality: 0.88 },
  default: { maxSide: 1200, quality: 0.92, thumbnailSide: 720, thumbnailQuality: 0.9 },
};

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

function customizeClassName(settings: HomeSettings) {
  const card = settings.cardStyle || defaultCardStyle;
  const bg = settings.backgroundStyle || defaultBackgroundStyle;
  return [
    `card-radius-${card.radius}`,
    `card-shadow-${card.shadow}`,
    `card-transparency-${card.transparency}`,
    `card-border-${card.border}`,
    `bg-type-${bg.type}`,
    `bg-pattern-${bg.pattern}`,
    bg.showDecorations === false ? "hide-bg-decorations" : "",
    `font-${settings.fontPreset || "simple"}`,
    `icon-set-${settings.iconSet || "line"}`,
  ].filter(Boolean).join(" ");
}

function customBackgroundLayers(settings: HomeSettings) {
  const bg = settings.backgroundStyle || defaultBackgroundStyle;
  const gradients: Record<BackgroundGradient, string> = {
    milkPink: "linear-gradient(135deg, #fffafc 0%, #f8dce6 48%, #fff7ed 100%)",
    peachBeige: "linear-gradient(135deg, #fff8ed 0%, #f4d3c1 48%, #efe4d4 100%)",
    blueMist: "linear-gradient(135deg, #f8fbff 0%, #dcecff 54%, #eef5f7 100%)",
    lavenderMilk: "linear-gradient(135deg, #fffafd 0%, #e8ddf4 48%, #f8f3ff 100%)",
    mintCream: "linear-gradient(135deg, #fffdf7 0%, #d8efe5 48%, #f2fbf4 100%)",
    cafeLatte: "linear-gradient(135deg, #fff8ef 0%, #ead8c3 48%, #c9ad93 100%)",
  };
  const patternLayers: Record<BackgroundPattern, string> = {
    none: "",
    dot: "radial-gradient(circle, color-mix(in srgb, var(--accent) 18%, transparent) 0 1.3px, transparent 1.8px)",
    stripe: "repeating-linear-gradient(90deg, color-mix(in srgb, var(--accent) 9%, transparent) 0 1px, transparent 1px 18px)",
    grid: "linear-gradient(color-mix(in srgb, var(--accent) 10%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--accent) 10%, transparent) 1px, transparent 1px)",
    paper: "linear-gradient(90deg, rgba(120,100,82,0.045) 50%, transparent 50%), linear-gradient(rgba(120,100,82,0.035) 50%, transparent 50%)",
  };
  const solidColor = String(bg.color || "").toLowerCase();
  const isInitialSolidBackground = ["#fffafc", "#fdf0ff"].includes(solidColor);
  if (bg.type === "solid") return isInitialSolidBackground ? "none" : `linear-gradient(${bg.color}, ${bg.color})`;
  if (bg.type === "gradient") return gradients[bg.gradient] || gradients.milkPink;
  if (bg.type === "pattern") {
    const pattern = patternLayers[bg.pattern] || "";
    return pattern ? `${pattern}, linear-gradient(var(--app-bg), var(--app-bg))` : "linear-gradient(var(--app-bg), var(--app-bg))";
  }
  if (bg.type === "image" && bg.image) {
    const src = imageDisplaySrc(bg.image);
    if (src) return `linear-gradient(color-mix(in srgb, var(--app-bg) ${bg.imageOpacity === "light" ? 76 : bg.imageOpacity === "deep" ? 36 : 58}%, transparent), color-mix(in srgb, var(--app-bg) ${bg.imageOpacity === "light" ? 76 : bg.imageOpacity === "deep" ? 36 : 58}%, transparent)), url("${src}")`;
  }
  return "none";
}

function customStyle(settings: HomeSettings) {
  const bg = settings.backgroundStyle || defaultBackgroundStyle;
  const bodyFonts: Record<FontPreset, string> = {
    simple: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    elegant: '"Hiragino Mincho ProN", "Yu Mincho", "Times New Roman", "Hiragino Sans", serif',
    cute: '"Hiragino Maru Gothic ProN", "Yu Gothic", "Avenir Next Rounded", system-ui, sans-serif',
    korean: '"Apple SD Gothic Neo", "Hiragino Sans", "Yu Gothic", "Avenir Next", system-ui, sans-serif',
    handwritten: '"Comic Sans MS", "Hiragino Maru Gothic ProN", "Yu Gothic", system-ui, sans-serif',
    cool: '"Avenir Next Condensed", "Avenir Next", "Helvetica Neue", Arial, sans-serif',
  };
  const headingFonts: Record<FontPreset, string> = {
    ...bodyFonts,
    handwritten: '"Comic Sans MS", "Hiragino Maru Gothic ProN", cursive',
  };
  const backgroundLayers = customBackgroundLayers(settings);
  const backgroundPositionMap: Record<BackgroundImagePosition, string> = {
    center: "center",
    top: "center top",
    bottom: "center bottom",
    left: "left center",
    right: "right center",
  };
  return {
    "--font-body": bodyFonts[settings.fontPreset || "simple"],
    "--font-heading": headingFonts[settings.fontPreset || "simple"],
    "--font-number": settings.fontPreset === "cool" ? '"Avenir Next", "Helvetica Neue", Arial, sans-serif' : settings.fontPreset === "elegant" ? '"Times New Roman", "Hiragino Mincho ProN", serif' : bodyFonts[settings.fontPreset || "simple"],
    "--font-weight-heading": settings.fontPreset === "elegant" || settings.fontPreset === "korean" ? "680" : settings.fontPreset === "cute" ? "900" : settings.fontPreset === "cool" ? "900" : "850",
    "--font-weight-body": settings.fontPreset === "elegant" || settings.fontPreset === "korean" ? "560" : settings.fontPreset === "cool" ? "720" : "650",
    "--letter-spacing-heading": settings.fontPreset === "elegant" ? "0.07em" : settings.fontPreset === "korean" ? "0.055em" : settings.fontPreset === "cool" ? "-0.005em" : settings.fontPreset === "handwritten" ? "0.025em" : "0",
    "--body-letter-spacing": settings.fontPreset === "elegant" || settings.fontPreset === "korean" ? "0.025em" : settings.fontPreset === "cool" ? "-0.004em" : "0",
    "--body-line-height": settings.fontPreset === "korean" ? "1.88" : settings.fontPreset === "cute" ? "1.78" : settings.fontPreset === "cool" ? "1.52" : "1.68",
    "--heading-size-scale": settings.fontPreset === "elegant" ? "1.08" : settings.fontPreset === "cute" ? "1.04" : settings.fontPreset === "cool" ? "1.02" : "1",
    "--custom-background": backgroundLayers || "none",
    "--custom-background-size": bg.type === "pattern" && bg.pattern === "grid" ? "34px 34px, auto" : bg.type === "pattern" && bg.pattern === "paper" ? "8px 8px, auto" : bg.type === "pattern" ? "54px 54px, auto" : bg.type === "image" ? `${bg.imageFit}, ${bg.imageFit}` : "auto",
    "--custom-background-position": bg.type === "image" ? backgroundPositionMap[bg.imagePosition] : "center",
    "--custom-background-blur": bg.imageBlur === "medium" ? "blur(5px)" : bg.imageBlur === "soft" ? "blur(2px)" : "none",
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

function collectAtelierImages(galleryImages: AtelierImage[]) {
  const galleryOnlyImages = galleryImages
    .filter(isGalleryOnlyImage)
    .map((item) => ({ ...item, thumbnail: item.thumbnail || item.src }));
  const seen = new Set<string>();
  return galleryOnlyImages
    .filter((item) => {
      if (seen.has(item.src)) return false;
      seen.add(item.src);
      return true;
    })
    .sort((a, b) => Number(Boolean(b.favorite)) - Number(Boolean(a.favorite)) || String(b.createdAt).localeCompare(String(a.createdAt)))
    .slice(0, 24);
}

function isGalleryOnlyImage(item: AtelierImage) {
  return Boolean(item?.src) && item.source !== "journal" && item.source !== "journal-background";
}

function resolveIndexedDbImage(value: string, preferThumbnail = false) {
  if (!isIndexedDbImageRef(value)) return value;
  const record = indexedDbImageCache.get(indexedDbIdFromRef(value));
  if (!record) return "";
  return preferThumbnail ? record.thumbnail || record.src : record.src || record.thumbnail || "";
}

function imageSrc(image: any) {
  if (!image) return "";
  const value = typeof image === "string" ? image : image.src || image.thumbnail || "";
  return resolveIndexedDbImage(value, false);
}

function imageThumbnail(image: any) {
  if (!image) return "";
  const value = typeof image === "string" ? image : image.thumbnail || image.src || "";
  return resolveIndexedDbImage(value, true);
}

function imageDisplaySrc(image: any) {
  if (!image) return "";
  const value = typeof image === "string"
    ? image
    : image.displayImage || image.bannerImage || image.coverImage || image.image || image.previewImage || image.src || image.imageUrl || image.thumbnail || "";
  return resolveIndexedDbImage(value, false) || imageThumbnail(image);
}

function homeBannerImageValue(settings: HomeSettings) {
  return (settings as any)?.bannerImage || settings?.bannerImageUrl || "";
}

function homeBannerSrc(settings: HomeSettings) {
  const value = homeBannerImageValue(settings);
  return imageSrc(value) || imageThumbnail(value);
}

function homeBannerPosition(settings: HomeSettings) {
  const size: BannerSize = bannerSizes.includes(settings?.bannerSize as BannerSize) ? settings.bannerSize as BannerSize : "medium";
  const position = settings?.bannerPositions?.[size];
  return {
    x: Number.isFinite(Number(position?.x)) ? Number(position?.x) : settings?.bannerPositionX ?? 50,
    y: Number.isFinite(Number(position?.y)) ? Number(position?.y) : settings?.bannerPositionY ?? 50,
  };
}

function bannerImageStyle(position: { x: number; y: number }) {
  const hasCustomPosition = Math.abs(position.x - 50) > 0 || Math.abs(position.y - 50) > 0;
  return {
    objectPosition: `${position.x}% ${position.y}%`,
    transformOrigin: `${position.x}% ${position.y}%`,
    transform: hasCustomPosition ? "scale(1.08)" : "scale(1)",
  };
}

function getCoverImages(item: any) {
  const existing = Array.isArray(item?.coverImages)
    ? item.coverImages.filter(Boolean)
    : [];
  if (existing.length) return existing.slice(0, 3);
  const fallback = item?.coverImage || item?.thumbnail || item?.image || item?.imageUrl || item?.previewImage;
  return fallback ? [fallback] : [];
}

function primaryCoverImage(item: any) {
  return getCoverImages(item)[0] || "";
}

function imageReference(id: string, category = "gallery", title = ""): OptimizedImageData {
  const record = indexedDbImageCache.get(id);
  return {
    id,
    dbId: id,
    category,
    src: indexedDbRef(id),
    thumbnail: indexedDbThumbRef(id),
    originalName: record?.originalName || title || "image",
    mimeType: record?.mimeType || "image/*",
    width: Number(record?.width || 0),
    height: Number(record?.height || 0),
    createdAt: record?.createdAt || new Date().toISOString(),
  };
}

function normalizeImageData(image: any): OptimizedImageData {
  if (image && typeof image === "object" && image.src) {
    const id = image.dbId || (isIndexedDbImageRef(image.src) ? indexedDbIdFromRef(image.src) : image.id || uid());
    return {
      id: image.id || id,
      dbId: image.dbId || (isIndexedDbImageRef(image.src) ? indexedDbIdFromRef(image.src) : undefined),
      category: image.category || image.source || "gallery",
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
  const dbId = isIndexedDbImageRef(src) ? indexedDbIdFromRef(src) : undefined;
  return {
    id: dbId || uid(),
    dbId,
    src,
    thumbnail: src,
    originalName: "existing-image",
    mimeType: src.startsWith("data:") ? src.slice(5, src.indexOf(";")) : "image/url",
    width: 0,
    height: 0,
    createdAt: new Date().toISOString(),
  };
}

function getPromptAtelierStorageUsage() {
  let total = 0;
  for (let index = 0; index < localStorage.length; index++) {
    const key = localStorage.key(index);
    if (!key || !key.startsWith("promptAtelier")) continue;
    const value = localStorage.getItem(key) || "";
    total += new Blob([key + value]).size;
  }
  return total;
}

function shouldShowStorageWarning() {
  const usage = getPromptAtelierStorageUsage();
  const ratio = usage / STORAGE_LIMIT_BYTES;
  return {
    usage,
    ratio,
    level: ratio >= 0.9 ? "strong" : ratio >= 0.7 ? "light" : "none",
  };
}

function formatStoragePercent(ratio: number) {
  return `${Math.round(ratio * 100)}%`;
}

function showStorageWarningIfNeeded() {
  const result = shouldShowStorageWarning();
  const shownLevel = sessionStorage.getItem(IMAGE_WARNING_KEY);
  if (result.level === "none") {
    sessionStorage.removeItem(IMAGE_WARNING_KEY);
    return;
  }
  if (result.level === "strong") {
    if (shownLevel === "strong") return;
    sessionStorage.setItem(IMAGE_WARNING_KEY, "strong");
    window.alert("保存容量が残り少なくなっています。バックアップ後、不要な画像を削除してください。");
    return;
  }
  if (shownLevel) return;
  sessionStorage.setItem(IMAGE_WARNING_KEY, "light");
  window.alert("画像データが増えています。バックアップや不要画像の整理をおすすめします。");
}

function scheduleStorageWarningCheck() {
  window.setTimeout(showStorageWarningIfNeeded, 300);
}

function isStickerEffectOn(item?: Partial<JournalItem> | null) {
  if (!item) return false;
  return item.stickerEffect ?? item.sticker ?? true;
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

function readFileAsDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error || new Error("画像を読み込めませんでした"));
    reader.readAsDataURL(file);
  });
}

function canvasDataUrl(image: HTMLImageElement, maxSide: number, quality = 0.92, preserveTransparency = true) {
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
  const dataUrl = webp.startsWith("data:image/webp") ? webp : canvas.toDataURL(preserveTransparency ? "image/png" : "image/jpeg", quality);
  return { dataUrl, width, height, mimeType: dataUrl.slice(5, dataUrl.indexOf(";")) };
}

function canvasDataUrlWithMime(image: HTMLImageElement, maxSide: number, mimeType: string, quality = 0.96) {
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
  const safeMimeType = /image\/png/i.test(mimeType)
    ? "image/png"
    : /image\/jpe?g/i.test(mimeType)
      ? "image/jpeg"
      : "image/webp";
  const dataUrl = safeMimeType === "image/png"
    ? canvas.toDataURL("image/png")
    : canvas.toDataURL(safeMimeType, quality);
  return { dataUrl, width, height, mimeType: dataUrl.slice(5, dataUrl.indexOf(";")) };
}

function videoFrameDataUrl(video: HTMLVideoElement, maxSide = 720, quality = 0.9) {
  const sourceWidth = video.videoWidth || 1280;
  const sourceHeight = video.videoHeight || 720;
  const ratio = Math.min(1, maxSide / Math.max(sourceWidth, sourceHeight));
  const width = Math.max(1, Math.round(sourceWidth * ratio));
  const height = Math.max(1, Math.round(sourceHeight * ratio));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("動画サムネイルを作成できませんでした");
  context.drawImage(video, 0, 0, width, height);
  const webp = canvas.toDataURL("image/webp", quality);
  const dataUrl = webp.startsWith("data:image/webp") ? webp : canvas.toDataURL("image/jpeg", quality);
  return { dataUrl, width, height, mimeType: dataUrl.slice(5, dataUrl.indexOf(";")) };
}

function openImageDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(IMAGE_DB_NAME, IMAGE_DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(IMAGE_STORE_NAME)) {
        const store = db.createObjectStore(IMAGE_STORE_NAME, { keyPath: "id" });
        store.createIndex("category", "category", { unique: false });
        store.createIndex("createdAt", "createdAt", { unique: false });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function putIndexedDbImage(record: IndexedDbImageRecord) {
  const db = await openImageDb();
  await new Promise<void>((resolve, reject) => {
    const transaction = db.transaction(IMAGE_STORE_NAME, "readwrite");
    transaction.objectStore(IMAGE_STORE_NAME).put(record);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
  db.close();
  indexedDbImageCache.set(record.id, record);
}

async function getAllIndexedDbImages() {
  const db = await openImageDb();
  const records = await new Promise<IndexedDbImageRecord[]>((resolve, reject) => {
    const request = db.transaction(IMAGE_STORE_NAME, "readonly").objectStore(IMAGE_STORE_NAME).getAll();
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error);
  });
  db.close();
  return records;
}

async function deleteIndexedDbImage(id: string) {
  const db = await openImageDb();
  await new Promise<void>((resolve, reject) => {
    const transaction = db.transaction(IMAGE_STORE_NAME, "readwrite");
    transaction.objectStore(IMAGE_STORE_NAME).delete(id);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
  db.close();
  indexedDbImageCache.delete(id);
}

async function refreshIndexedDbImageCache() {
  const records = await getAllIndexedDbImages();
  indexedDbImageCache.clear();
  records.forEach((record) => indexedDbImageCache.set(record.id, record));
  return records;
}

async function storeOptimizedImage(image: OptimizedImageData, category = "gallery", patch: Partial<IndexedDbImageRecord> = {}) {
  const id = image.dbId || image.id || uid();
  const now = new Date().toISOString();
  const record: IndexedDbImageRecord = {
    ...image,
    ...patch,
    id,
    dbId: id,
    category,
    src: imageSrc(image.src) || image.src,
    thumbnail: imageThumbnail(image.thumbnail) || image.thumbnail || image.src,
    createdAt: image.createdAt || now,
    updatedAt: now,
  };
  await putIndexedDbImage(record);
  return imageReference(id, category, patch.title || image.originalName || "image");
}

async function storeExistingImageValue(value: any, category = "gallery", title = "image") {
  if (!value) return value;
  if (typeof value === "string") {
    if (isIndexedDbImageRef(value) || !isDataImageUrl(value)) return value;
    const id = uid();
    const now = new Date().toISOString();
    await putIndexedDbImage({
      id,
      dbId: id,
      category,
      src: value,
      thumbnail: value,
      originalName: title,
      mimeType: value.slice(5, value.indexOf(";")) || "image/*",
      width: 0,
      height: 0,
      title,
      memo: "",
      favorite: false,
      createdAt: now,
      updatedAt: now,
    });
    return indexedDbRef(id);
  }
  if (typeof value === "object" && value.src && isDataImageUrl(value.src)) {
    const id = value.dbId || value.id || uid();
    const now = new Date().toISOString();
    await putIndexedDbImage({
      ...value,
      id,
      dbId: id,
      category: value.category || value.source || category,
      src: value.src,
      thumbnail: value.thumbnail || value.src,
      title: value.title || title,
      memo: value.memo || "",
      favorite: Boolean(value.favorite),
      createdAt: value.createdAt || now,
      updatedAt: now,
    });
    return {
      ...value,
      id,
      dbId: id,
      src: indexedDbRef(id),
      thumbnail: indexedDbThumbRef(id),
    };
  }
  return value;
}

async function optimizeImage(file: File, category = "gallery"): Promise<OptimizedImageData> {
  if (!isSupportedImageFile(file)) throw new Error("対応していない画像形式です");
  const image = await loadImageFromFile(file);
  const profile = imageQualityProfiles[category] || imageQualityProfiles.default;
  const full = canvasDataUrl(image, profile.maxSide, profile.quality, true);
  const thumbnail = canvasDataUrl(image, profile.thumbnailSide, profile.thumbnailQuality, true);
  const optimized = {
    id: uid(),
    src: full.dataUrl,
    thumbnail: thumbnail.dataUrl,
    originalName: file.name,
    mimeType: full.mimeType,
    width: full.width,
    height: full.height,
    createdAt: new Date().toISOString(),
  };
  return storeOptimizedImage(optimized, category, { title: file.name, memo: "", favorite: false });
}

async function optimizeBannerImage(file: File): Promise<OptimizedImageData> {
  if (!isSupportedImageFile(file)) throw new Error("対応していない画像形式です");
  const image = await loadImageFromFile(file);
  const profile = imageQualityProfiles.banner;
  const sourceWidth = image.naturalWidth || image.width;
  const sourceHeight = image.naturalHeight || image.height;
  const maxSide = Math.max(sourceWidth, sourceHeight);
  const keepOriginal = maxSide <= (profile.keepOriginalMaxSide || profile.maxSide);
  const full = keepOriginal
    ? {
      dataUrl: await readFileAsDataUrl(file),
      width: sourceWidth,
      height: sourceHeight,
      mimeType: file.type || "image/*",
    }
    : canvasDataUrlWithMime(image, profile.maxSide, file.type || "image/webp", profile.quality);
  const thumbnail = canvasDataUrl(image, profile.thumbnailSide, profile.thumbnailQuality, true);
  const optimized = {
    id: uid(),
    src: full.dataUrl,
    thumbnail: thumbnail.dataUrl,
    originalName: file.name,
    mimeType: full.mimeType,
    width: full.width,
    height: full.height,
    createdAt: new Date().toISOString(),
  };
  return storeOptimizedImage(optimized, "banner", { title: file.name, memo: "ホームバナー画像", favorite: false });
}

async function storeVideoFile(file: File) {
  if (!isSupportedVideoFile(file)) throw new Error("動画ファイルを選んでください");
  const id = uid();
  const now = new Date().toISOString();
  const dataUrl = await readFileAsDataUrl(file);
  await putIndexedDbImage({
    id,
    dbId: id,
    category: "video-file",
    src: dataUrl,
    thumbnail: "",
    originalName: file.name,
    mimeType: file.type || "video/*",
    width: 0,
    height: 0,
    createdAt: now,
    updatedAt: now,
    title: file.name,
    memo: "動画プロンプト本体",
    favorite: false,
  });
  scheduleStorageWarningCheck();
  return indexedDbRef(id);
}

async function createVideoThumbnail(file: File) {
  if (!file.type.startsWith("video/")) throw new Error("動画ファイルを選んでください");
  const url = URL.createObjectURL(file);
  try {
    const video = document.createElement("video");
    video.preload = "metadata";
    video.muted = true;
    video.playsInline = true;
    const loaded = new Promise<void>((resolve, reject) => {
      video.onloadedmetadata = () => resolve();
      video.onerror = () => reject(new Error("動画を読み込めませんでした"));
    });
    video.src = url;
    await loaded;
    const targetTime = Math.min(1, Math.max(0, (video.duration || 1) - 0.1));
    await new Promise<void>((resolve, reject) => {
      video.onseeked = () => resolve();
      video.onerror = () => reject(new Error("動画サムネイルを作成できませんでした"));
      video.currentTime = targetTime;
    });
    const profile = imageQualityProfiles["video-thumbnail"];
    const full = videoFrameDataUrl(video, profile.maxSide, profile.quality);
    const thumbnail = videoFrameDataUrl(video, profile.thumbnailSide, profile.thumbnailQuality);
    const image: OptimizedImageData = {
      id: uid(),
      src: full.dataUrl,
      thumbnail: thumbnail.dataUrl,
      originalName: `${file.name}-thumbnail`,
      mimeType: full.mimeType,
      width: full.width,
      height: full.height,
      createdAt: new Date().toISOString(),
    };
    return storeOptimizedImage(image, "video-thumbnail", { title: file.name, memo: "動画から自動生成", favorite: false });
  } finally {
    URL.revokeObjectURL(url);
  }
}

async function createThumbnail(file: File) {
  const image = await loadImageFromFile(file);
  return canvasDataUrl(image, imageQualityProfiles.default.thumbnailSide, imageQualityProfiles.default.thumbnailQuality, true).dataUrl;
}

function saveImageToStorage(image: OptimizedImageData) {
  scheduleStorageWarningCheck();
  return image;
}

function clipboardImageFiles(event: React.ClipboardEvent) {
  return Array.from(event.clipboardData?.items || [])
    .filter((item) => item.kind === "file")
    .map((item) => item.getAsFile())
    .filter((file): file is File => Boolean(file) && isSupportedImageFile(file));
}

function useStoredState<T>(key: string, fallback: T) {
  const hasStoredValueRef = React.useRef(false);
  const [value, setValue] = React.useState<T>(() => {
    try {
      const saved = localStorage.getItem(key);
      if (saved) {
        hasStoredValueRef.current = true;
        return JSON.parse(saved);
      }
      return fallback;
    } catch {
      return fallback;
    }
  });
  React.useEffect(() => {
    try {
      if (!hasStoredValueRef.current && JSON.stringify(value) === JSON.stringify(fallback)) return;
      localStorage.setItem(key, JSON.stringify(value));
      hasStoredValueRef.current = true;
    } catch (error) {
      console.warn("[Prompt Atelier] localStorage保存に失敗しました", key, error);
    }
  }, [key, value]);
  return [value, setValue] as const;
}

function readStoredArrayCount(key: string, fallback: number) {
  try {
    const saved = localStorage.getItem(key);
    if (!saved) return fallback;
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed.length : fallback;
  } catch {
    return fallback;
  }
}

function readMockupCategoryCount() {
  return readStoredArrayCount("prompt-atelier-mockup-categories-v2", defaultMockupCategories.length);
}

function categoryForImageField(key: string) {
  if (/character/i.test(key)) return "character";
  if (/banner/i.test(key)) return "banner";
  if (/icon/i.test(key)) return "icon";
  if (/cover|background/i.test(key)) return "background";
  if (/project/i.test(key)) return "project";
  if (/midjourney|mj/i.test(key)) return "midjourney";
  if (/gallery/i.test(key)) return "gallery";
  if (/journal/i.test(key)) return "journal";
  if (/mockup|library/i.test(key)) return "mockup";
  if (/prompt/i.test(key)) return "prompt";
  return "gallery";
}

async function migrateImageFields(value: any, storageKey: string): Promise<any> {
  if (Array.isArray(value)) {
    const next = [];
    for (const item of value) next.push(await migrateImageFields(item, storageKey));
    return next;
  }
  if (!value || typeof value !== "object") return value;
  if (value.src && isDataImageUrl(value.src)) {
    return storeExistingImageValue(value, categoryForImageField(storageKey), value.title || value.originalName || storageKey);
  }
  const next: any = { ...value };
  for (const [key, item] of Object.entries(value)) {
    const looksLikeImageField = /^(src|thumbnail|imageUrl|coverImage|bannerImageUrl|iconImage)$/i.test(key) || /image/i.test(key);
    if (looksLikeImageField && isDataImageUrl(item)) {
      next[key] = await storeExistingImageValue(item, categoryForImageField(`${storageKey}-${key}`), key);
    } else {
      next[key] = await migrateImageFields(item, `${storageKey}-${key}`);
    }
  }
  return next;
}

async function migrateLocalStorageImagesToIndexedDb() {
  if (localStorage.getItem(IMAGE_MIGRATION_KEY) === "done") return false;
  const keys = Array.from({ length: localStorage.length }, (_, index) => localStorage.key(index))
    .filter((key): key is string => Boolean(key) && (key.startsWith("promptAtelier") || key.startsWith("prompt-atelier")));
  let changed = false;
  for (const key of keys) {
    if (key === IMAGE_MIGRATION_KEY) continue;
    const raw = localStorage.getItem(key);
    if (!raw || !raw.includes("data:image/")) continue;
    try {
      const parsed = JSON.parse(raw);
      const migrated = await migrateImageFields(parsed, key);
      localStorage.setItem(key, JSON.stringify(migrated));
      changed = true;
    } catch {
      if (isDataImageUrl(raw)) {
        const migrated = await storeExistingImageValue(raw, categoryForImageField(key), key);
        localStorage.setItem(key, migrated);
        changed = true;
      }
    }
  }
  localStorage.setItem(IMAGE_MIGRATION_KEY, "done");
  return changed;
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

async function exportPromptAtelierBackup() {
  const today = new Date().toISOString().slice(0, 10);
  const payload = {
    app: "Prompt Atelier",
    version: 2,
    exportedAt: new Date().toISOString(),
    data: collectPromptAtelierStorage(),
    images: await getAllIndexedDbImages(),
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
  if (["sample-seed", "prompt-atelier-sample-seed"].includes(parsed?.type) && parsed?.data) {
    const stats = createSampleSeedStats(file.name || "manual-sample-seed");
    const deletedIds = readDeletedSampleIds();
    const seedData = parsed.data;
    const storageData = Object.keys(SAMPLE_DATA_STORAGE_MAP).some((key) => key in seedData)
      ? sampleSeedDataToStorage(seedData)
      : seedData;

    Object.entries(storageData).forEach(([key, incoming]) => {
      if (!SAMPLE_EXPORT_KEYS.includes(key)) return;
      const existing = parseStorageValueForSample(key);
      const merged = mergeSampleValue(existing, incoming, key, deletedIds, stats);
      if (JSON.stringify(existing) !== JSON.stringify(merged)) {
        localStorage.setItem(key, JSON.stringify(merged));
      }
    });

    if (Array.isArray(parsed.images)) {
      stats.images.incoming = parsed.images.length;
      for (const image of parsed.images) {
        const sampleId = sampleIdOf(image);
        if (sampleId && deletedIds.has(sampleId)) {
          stats.images.skippedDeleted += 1;
          continue;
        }
        if (image?.id && image?.src) {
          await putIndexedDbImage(image);
          stats.images.added += 1;
        }
      }
    }
    writeSampleSeedDebug(stats);
    return;
  }
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
  if (Array.isArray(parsed?.images)) {
    for (const image of parsed.images) {
      if (image?.id && image?.src) await putIndexedDbImage(image);
    }
  }
}

function padSampleIndex(index: number) {
  return String(index + 1).padStart(3, "0");
}

function cleanSampleValue(value: any): any {
  if (typeof value === "string") {
    if (value.startsWith("blob:")) return "";
    return value;
  }
  if (Array.isArray(value)) return value.map(cleanSampleValue).filter((item) => item !== undefined);
  if (!value || typeof value !== "object") return value;
  const next: any = {};
  Object.entries(value).forEach(([key, item]) => {
    if (/objectUrl|previewUrl|temporary|temp/i.test(key)) return;
    if ((key === "videoUrl" || key === "url") && typeof item === "string" && item.startsWith("blob:")) {
      next[key] = "";
      return;
    }
    next[key] = cleanSampleValue(item);
  });
  return next;
}

function parseStorageValueForSample(key: string) {
  const raw = localStorage.getItem(key);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return raw;
  }
}

function withSampleMeta(item: any, prefix: string, index: number) {
  if (!item || typeof item !== "object") return item;
  const sampleId = item.sampleId || `${prefix}-${padSampleIndex(index)}`;
  return {
    ...cleanSampleValue(item),
    id: item.id || sampleId,
    isSample: true,
    createdFromSeedExport: true,
    sampleId,
  };
}

function sampleArray(value: any, prefix: string) {
  return Array.isArray(value) ? value.map((item, index) => withSampleMeta(item, prefix, index)) : [];
}

function sampleHomeSettings(value: any) {
  if (!value || typeof value !== "object") return {};
  const cleaned = cleanSampleValue(value);
  return {
    themeId: cleaned.themeId,
    bannerImage: cleaned.bannerImage || cleaned.bannerImageUrl,
    bannerImageUrl: cleaned.bannerImageUrl,
    bannerVisible: cleaned.bannerVisible,
    bannerSize: cleaned.bannerSize,
    bannerFit: cleaned.bannerFit,
    bannerPositionX: cleaned.bannerPositionX,
    bannerPositionY: cleaned.bannerPositionY,
    bannerPositions: cleaned.bannerPositions,
    workToolIconStyle: cleaned.workToolIconStyle,
    displayDensity: cleaned.displayDensity,
    pageDisplaySettings: cleaned.pageDisplaySettings,
    cardStyle: cleaned.cardStyle,
    backgroundStyle: cleaned.backgroundStyle,
    fontPreset: cleaned.fontPreset,
    iconSet: cleaned.iconSet,
    homeCharacter: cleaned.homeCharacter,
    homeStatsCards: cleaned.homeStatsCards,
    visible: cleaned.visible,
    order: cleaned.order,
  };
}

function createSampleSeedData() {
  const mockupCategories = parseStorageValueForSample("prompt-atelier-mockup-categories-v2") || [];
  const libraryPromptsValue = parseStorageValueForSample("prompt-atelier-library-prompts-v5") || [];
  const promptBookValue = parseStorageValueForSample("prompt-atelier-prompts-ja-v2") || [];
  const videoPromptsValue = parseStorageValueForSample("promptAtelierVideoPrompts") || [];
  const videoStocksValue = parseStorageValueForSample("promptAtelierVideoPromptStocks") || [];
  const midjourneyValue = parseStorageValueForSample("promptAtelierMidjourneySettings") || [];
  const projectsValue = parseStorageValueForSample("prompt-atelier-projects-ja-v2") || [];
  const projectMemosValue = parseStorageValueForSample("prompt-atelier-project-memos-v1") || [];
  const galleryValue = parseStorageValueForSample("promptAtelierGallery") || [];
  const journalValue = parseStorageValueForSample("promptAtelierJournal") || {};
  const homeSettingsValue = parseStorageValueForSample("promptAtelierHomeSettings") || {};
  const workToolsValue = parseStorageValueForSample("promptAtelierWorkTools") || [];
  const libraryPrompts = Array.isArray(libraryPromptsValue) ? libraryPromptsValue : [];
  const promptBook = Array.isArray(promptBookValue) ? promptBookValue : [];
  return {
    libraryItems: sampleArray(mockupCategories, "sample-library"),
    mockupItems: sampleArray(libraryPrompts.filter((item: any) => !item.isTextStock), "sample-mockup"),
    mockupStocks: sampleArray(libraryPrompts.filter((item: any) => item.isTextStock), "sample-mockup-stock"),
    promptCards: sampleArray(promptBook.filter((item: any) => !item.isTextStock), "sample-prompt-card"),
    promptStocks: sampleArray(promptBook.filter((item: any) => item.isTextStock), "sample-prompt-stock"),
    videoPromptCards: sampleArray(videoPromptsValue, "sample-video-card").map((item: any) => ({
      ...item,
      url: typeof item.url === "string" && item.url.startsWith("blob:") ? "" : item.url,
      videoUrl: typeof item.videoUrl === "string" && item.videoUrl.startsWith("blob:") ? "" : item.videoUrl,
    })),
    videoPromptStocks: sampleArray(videoStocksValue, "sample-video-stock"),
    midjourneySettings: sampleArray(midjourneyValue, "sample-mj-setting"),
    projects: sampleArray(projectsValue, "sample-project"),
    projectMemos: sampleArray(projectMemosValue, "sample-project-memo"),
    galleryItems: sampleArray(galleryValue, "sample-gallery"),
    journalItems: sampleArray(journalValue?.items || [], "sample-journal-item"),
    journalBackgrounds: sampleArray(journalValue?.customBackgrounds || [], "sample-journal-bg"),
    homeSettings: sampleHomeSettings(homeSettingsValue),
    workTools: sampleArray(workToolsValue, "sample-work-tool"),
  };
}

async function exportPromptAtelierSampleSeed() {
  if (!window.confirm("現在のデータを配布用サンプルデータとして書き出します。よろしいですか？")) return;
  const data = createSampleSeedData();
  const images = (await getAllIndexedDbImages()).map((image, index) => ({
    ...cleanSampleValue(image),
    src: image.src,
    thumbnail: image.thumbnail || image.src,
    isSample: true,
    sampleId: image.sampleId || `sample-image-${padSampleIndex(index)}`,
  }));
  const payload = {
    app: "Prompt Atelier",
    type: "prompt-atelier-sample-seed",
    version: 1,
    exportedAt: new Date().toISOString(),
    data,
    images,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "prompt-atelier-sample-seed.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function sampleIdOf(item: any) {
  return item?.sampleId || "";
}

function readDeletedSampleIds() {
  const values = [DELETED_SAMPLE_IDS_KEY, LEGACY_DELETED_SAMPLE_IDS_KEY].flatMap((key) => {
    try {
      const parsed = JSON.parse(localStorage.getItem(key) || "[]");
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });
  return new Set<string>(values.filter(Boolean));
}

function writeDeletedSampleIds(ids: Set<string>) {
  localStorage.setItem(DELETED_SAMPLE_IDS_KEY, JSON.stringify([...ids]));
}

function rememberDeletedSampleIdsFromItems(items: any) {
  const list = Array.isArray(items) ? items : [items];
  const sampleIds = list.map(sampleIdOf).filter(Boolean);
  if (!sampleIds.length) return;
  const deletedIds = readDeletedSampleIds();
  sampleIds.forEach((sampleId) => deletedIds.add(sampleId));
  writeDeletedSampleIds(deletedIds);
}

type SampleSeedImportStats = {
  source: string;
  categories: Record<string, { incoming: number; added: number; skippedExisting: number; skippedDeleted: number; skippedMissingSampleId: number }>;
  images: { incoming: number; added: number; skippedExisting: number; skippedDeleted: number; failed: number };
  errors: string[];
};

function createSampleSeedStats(source = "unknown"): SampleSeedImportStats {
  return {
    source,
    categories: {},
    images: { incoming: 0, added: 0, skippedExisting: 0, skippedDeleted: 0, failed: 0 },
    errors: [],
  };
}

function sampleSeedCategoryStats(stats: SampleSeedImportStats | undefined, key: string) {
  if (!stats) return null;
  if (!stats.categories[key]) {
    stats.categories[key] = { incoming: 0, added: 0, skippedExisting: 0, skippedDeleted: 0, skippedMissingSampleId: 0 };
  }
  return stats.categories[key];
}

function writeSampleSeedDebug(stats: SampleSeedImportStats) {
  try {
    console.info("[sampleSeed] import result", stats);
    (window as any).__promptAtelierSampleSeedDebug = stats;
    sessionStorage.setItem("promptAtelierSampleSeedDebug", JSON.stringify(stats));
  } catch {
    // Debug only. Never block the app for this.
  }
}

function mergeSampleCollection(existing: any, incoming: any, deletedIds: Set<string>, stats?: SampleSeedImportStats, key = "unknown") {
  if (!Array.isArray(incoming)) return existing ?? incoming;
  const current = Array.isArray(existing) ? existing : [];
  const currentSampleIds = new Set(current.map(sampleIdOf).filter(Boolean));
  const categoryStats = sampleSeedCategoryStats(stats, key);
  const next = [...current];
  incoming.forEach((item, index) => {
    const sampleId = sampleIdOf(item) || `${key}-${padSampleIndex(index)}`;
    if (categoryStats) categoryStats.incoming += 1;
    if (!sampleId) {
      if (categoryStats) categoryStats.skippedMissingSampleId += 1;
      return;
    }
    if (deletedIds.has(sampleId)) {
      if (categoryStats) categoryStats.skippedDeleted += 1;
      return;
    }
    if (currentSampleIds.has(sampleId)) {
      if (categoryStats) categoryStats.skippedExisting += 1;
      return;
    }
    next.push({ ...cleanSampleValue(item), isSample: true, sampleId });
    currentSampleIds.add(sampleId);
    if (categoryStats) categoryStats.added += 1;
  });
  return next;
}

function mergeJournalSample(existing: any, incoming: any, deletedIds: Set<string>, stats?: SampleSeedImportStats, key = "promptAtelierJournal") {
  const current = existing && typeof existing === "object" ? existing : {};
  const next = { ...current };
  if (!next.background && incoming?.background) next.background = incoming.background;
  if (Array.isArray(incoming?.stockImages)) next.stockImages = mergeSampleCollection(current.stockImages || [], incoming.stockImages, deletedIds, stats, `${key}:stockImages`);
  if (Array.isArray(incoming?.items)) next.items = mergeSampleCollection(current.items || [], incoming.items, deletedIds, stats, `${key}:items`);
  if (Array.isArray(incoming?.customBackgrounds)) next.customBackgrounds = mergeSampleCollection(current.customBackgrounds || [], incoming.customBackgrounds, deletedIds, stats, `${key}:customBackgrounds`);
  if ((!next.background || next.background === "paper") && Array.isArray(next.customBackgrounds) && next.customBackgrounds.length) {
    next.background = `custom-${next.customBackgrounds[0].id}`;
  }
  return next;
}

function mergeSampleValue(existing: any, incoming: any, key: string, deletedIds: Set<string>, stats?: SampleSeedImportStats) {
  if (key.includes("HomeSettings")) {
    const categoryStats = sampleSeedCategoryStats(stats, key);
    if (categoryStats) {
      categoryStats.incoming = incoming ? 1 : 0;
      if (existing == null && incoming) categoryStats.added = 1;
      else if (existing != null && incoming) categoryStats.skippedExisting = 1;
    }
    return existing ?? incoming;
  }
  if (key.includes("Journal")) return mergeJournalSample(existing, incoming, deletedIds, stats, key);
  return mergeSampleCollection(existing, incoming, deletedIds, stats, key);
}

function sampleSeedDataToStorage(seedData: Record<string, any>) {
  const storageData: Record<string, any> = {};
  const append = (key: string, values: any[]) => {
    if (!values.length) return;
    storageData[key] = [...(storageData[key] || []), ...values];
  };
  append("prompt-atelier-mockup-categories-v2", Array.isArray(seedData.libraryItems) ? seedData.libraryItems : []);
  append("prompt-atelier-mockup-categories-v2", Array.isArray(seedData.mockupCategories) ? seedData.mockupCategories : []);
  append("prompt-atelier-library-prompts-v5", Array.isArray(seedData.mockupItems) ? seedData.mockupItems : []);
  append("prompt-atelier-library-prompts-v5", Array.isArray(seedData.mockupStocks) ? seedData.mockupStocks : []);
  append("prompt-atelier-prompts-ja-v2", Array.isArray(seedData.promptCards) ? seedData.promptCards : []);
  append("prompt-atelier-prompts-ja-v2", Array.isArray(seedData.promptStocks) ? seedData.promptStocks : []);
  if (Array.isArray(seedData.promptCards) && seedData.promptCards.length === 0 && Array.isArray(seedData.promptStocks) && seedData.promptStocks.length === 0) {
    storageData["prompt-atelier-prompts-ja-v2"] = [];
  }
  append("promptAtelierVideoPrompts", Array.isArray(seedData.videoPromptCards) ? seedData.videoPromptCards : []);
  append("promptAtelierVideoPromptStocks", Array.isArray(seedData.videoPromptStocks) ? seedData.videoPromptStocks : []);
  append("promptAtelierMidjourneySettings", Array.isArray(seedData.midjourneySettings) ? seedData.midjourneySettings : []);
  append("prompt-atelier-projects-ja-v2", Array.isArray(seedData.projects) ? seedData.projects : []);
  append("prompt-atelier-project-memos-v1", Array.isArray(seedData.projectMemos) ? seedData.projectMemos : []);
  append("promptAtelierGallery", Array.isArray(seedData.galleryItems) ? seedData.galleryItems : []);
  if (Array.isArray(seedData.journalItems) || Array.isArray(seedData.journalBackgrounds)) {
    const customBackgrounds = Array.isArray(seedData.journalBackgrounds) ? seedData.journalBackgrounds : [];
    storageData.promptAtelierJournal = {
      background: seedData.journalBackground || (customBackgrounds[0]?.id ? `custom-${customBackgrounds[0].id}` : "paper"),
      items: Array.isArray(seedData.journalItems) ? seedData.journalItems : [],
      customBackgrounds,
    };
  }
  if (seedData.homeSettings && typeof seedData.homeSettings === "object") storageData.promptAtelierHomeSettings = seedData.homeSettings;
  if (seedData.customizeSettings && typeof seedData.customizeSettings === "object") storageData.promptAtelierHomeSettings = seedData.customizeSettings;
  append("promptAtelierWorkTools", Array.isArray(seedData.workTools) ? seedData.workTools : []);
  return storageData;
}

async function loadSampleSeedIfNeeded() {
  let stats = createSampleSeedStats("not-loaded");
  try {
    let seed: any = null;
    let seedSource = "";
    for (const path of SAMPLE_SEED_PATHS) {
      try {
        const response = await fetch(path, { cache: "no-store" });
        if (!response.ok) continue;
        seed = await response.json();
        seedSource = path;
        break;
      } catch (error) {
        stats.errors.push(`fetch failed: ${path} ${error instanceof Error ? error.message : String(error)}`);
      }
    }
    if (!seed) {
      seed = { type: "prompt-atelier-sample-seed", data: EMBEDDED_SAMPLE_SEED_DATA };
      seedSource = "embedded-fallback";
    }
    stats = createSampleSeedStats(seedSource || "unknown");
    if (!["sample-seed", "prompt-atelier-sample-seed"].includes(seed?.type) || !seed?.data) {
      stats.errors.push(`unsupported seed shape: ${seed?.type || "missing-type"}`);
      writeSampleSeedDebug(stats);
      return false;
    }
    const deletedIds = readDeletedSampleIds();
    let changed = false;
    const storageData = Object.keys(SAMPLE_DATA_STORAGE_MAP).some((key) => key in seed.data)
      ? sampleSeedDataToStorage(seed.data)
      : seed.data;
    Object.entries(storageData).forEach(([key, incoming]) => {
      if (!SAMPLE_EXPORT_KEYS.includes(key)) return;
      const existing = parseStorageValueForSample(key);
      const merged = mergeSampleValue(existing, incoming, key, deletedIds, stats);
      if (JSON.stringify(existing) !== JSON.stringify(merged)) {
        try {
          localStorage.setItem(key, JSON.stringify(merged));
          changed = true;
        } catch (error) {
          stats.errors.push(`localStorage save failed: ${key} ${error instanceof Error ? error.message : String(error)}`);
          console.warn("[sampleSeed] localStorage save failed", key, error);
        }
      }
    });
    if (Array.isArray(seed.images)) {
      stats.images.incoming = seed.images.length;
      for (const image of seed.images) {
        const sampleId = sampleIdOf(image);
        if (sampleId && deletedIds.has(sampleId)) {
          stats.images.skippedDeleted += 1;
          continue;
        }
        if (!image?.id || !image?.src) {
          stats.images.failed += 1;
          stats.errors.push("image skipped: missing id or src");
          continue;
        }
        if (indexedDbImageCache.has(image.id)) {
          stats.images.skippedExisting += 1;
          continue;
        }
        try {
          await putIndexedDbImage({ ...cleanSampleValue(image), isSample: true });
          stats.images.added += 1;
          changed = true;
        } catch (error) {
          stats.images.failed += 1;
          stats.errors.push(`image save failed: ${image.id} ${error instanceof Error ? error.message : String(error)}`);
          console.warn("[sampleSeed] image save failed", image.id, error);
        }
      }
    }
    writeSampleSeedDebug(stats);
    return changed;
  } catch (error) {
    stats.errors.push(`sample seed import failed: ${error instanceof Error ? error.message : String(error)}`);
    console.warn("Sample seed import failed", error);
    writeSampleSeedDebug(stats);
    return false;
  }
}

function App() {
  const [screen, setScreen] = React.useState<Screen>("home");
  const [myPrompts, setMyPrompts] = useStoredState<MyPrompt[]>("prompt-atelier-prompts-ja-v2", samplePrompts);
  const [mockupPrompts, setMockupPrompts] = useStoredState<LibraryBoardPrompt[]>("prompt-atelier-library-prompts-v5", defaultLibraryBoardPrompts);
  const [mjSettings, setMjSettings] = useStoredState<MjSetting[]>("promptAtelierMidjourneySettings", sampleMj);
  const [projects, setProjects] = useStoredState<Project[]>("prompt-atelier-projects-ja-v2", sampleProjects);
  const [projectMemos, setProjectMemos] = useStoredState<ProjectMemo[]>("prompt-atelier-project-memos-v1", []);
  const [recentIds, setRecentIds] = useStoredState<string[]>("prompt-atelier-recent-ja-v2", ["my-1", "lib-sticker-1"]);
  const [rawHomeSettings, setRawHomeSettings] = useStoredState<HomeSettings>("promptAtelierHomeSettings", defaultHomeSettings);
  const [workTools, setWorkTools] = useStoredState<WorkTool[]>("promptAtelierWorkTools", defaultWorkTools);
  const [galleryImages, setGalleryImages] = useStoredState<AtelierImage[]>("promptAtelierGallery", sampleAtelierImages);
  const [journal, setJournal] = useStoredState<JournalState>("promptAtelierJournal", defaultJournal);
  const [videos, setVideos] = useStoredState<VideoItem[]>("promptAtelierVideoPrompts", initialVideoPrompts());
  const [videoStocks, setVideoStocks] = useStoredState<VideoPromptStock[]>("promptAtelierVideoPromptStocks", []);
  const [toast, setToast] = React.useState("");
  const [isImageMigrating, setIsImageMigrating] = React.useState(false);
  const [installPrompt, setInstallPrompt] = React.useState<PwaInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = React.useState(false);
  const [isStandaloneApp, setIsStandaloneApp] = React.useState(false);
  const [, setImageCacheVersion] = React.useState(0);
  const homeSettings = normalizeHomeSettings(rawHomeSettings);
  const activeTheme = homeThemes.find((theme) => theme.id === homeSettings.themeId) || homeThemes[0];
  const appStyle = { ...themeStyle(activeTheme), ...customStyle(homeSettings) };

  const allPrompts = [...myPrompts, ...mockupPrompts];
  const recentPrompts = recentIds.map((id) => allPrompts.find((p) => p.id === id)).filter(Boolean).slice(0, 4) as LibraryPrompt[];
  const favoriteProjectMemos = projectMemos.filter((memo) => memo.favorite);
  const favorites = [
    ...favoriteProjectMemos.map((memo) => ({ ...memo, favoriteType: "projectMemo" })),
    ...myPrompts,
    ...mockupPrompts.filter((prompt) => !prompt.isTextStock),
  ].filter((prompt: any) => prompt.favorite && prompt.id !== "my-1").slice(0, 4);
  const visibleGalleryImages = galleryImages.filter(isGalleryOnlyImage);
  const atelierImages = collectAtelierImages(visibleGalleryImages);

  const copyText = async (text: string, id?: string) => {
    await navigator.clipboard.writeText(text);
    if (id) setRecentIds((ids) => [id, ...ids.filter((item) => item !== id)].slice(0, 8));
    setToast("コピーしました");
    window.setTimeout(() => setToast(""), 1600);
  };

  React.useEffect(() => {
    if (extractVideoPromptItems(videos).length) return;
    const legacyVideos = loadStoredVideoPrompts();
    setVideos(legacyVideos?.length ? legacyVideos : sampleVideos);
  }, []);

  React.useEffect(() => {
    const message = sessionStorage.getItem("promptAtelierRestoreMessage");
    if (!message) return;
    sessionStorage.removeItem("promptAtelierRestoreMessage");
    setToast(message);
    window.setTimeout(() => setToast(""), 2200);
  }, []);

  React.useEffect(() => {
    let cancelled = false;
    const prepareImages = async () => {
      try {
        setIsImageMigrating(true);
        await refreshIndexedDbImageCache();
        const migrated = await migrateLocalStorageImagesToIndexedDb();
        await refreshIndexedDbImageCache();
        const sampleSeedImported = await loadSampleSeedIfNeeded();
        if (cancelled) return;
        if (migrated || sampleSeedImported) {
          sessionStorage.setItem("promptAtelierRestoreMessage", sampleSeedImported ? "サンプルデータを読み込みました" : "画像データを最適化しました");
          window.location.reload();
          return;
        }
        setImageCacheVersion((version) => version + 1);
      } catch (error) {
        console.error("[Prompt Atelier] 画像データベースの準備に失敗しました", error);
      } finally {
        if (!cancelled) setIsImageMigrating(false);
      }
    };
    prepareImages();
    return () => {
      cancelled = true;
    };
  }, []);

  React.useEffect(() => {
    const isStandalone =
      window.matchMedia?.("(display-mode: standalone)")?.matches ||
      (window.navigator as any).standalone === true;
    setIsStandaloneApp(isStandalone);
    if (isStandalone) return;

    const dismissedInSession = sessionStorage.getItem("promptAtelierPwaInstallDismissed") === "true";
    if (!dismissedInSession) setShowInstallPrompt(true);
    const existingPrompt = (window as any).__promptAtelierInstallPrompt;
    if (existingPrompt) setInstallPrompt(existingPrompt as PwaInstallPromptEvent);
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as PwaInstallPromptEvent);
    };
    const handleInstallReady = () => {
      const promptEvent = (window as any).__promptAtelierInstallPrompt;
      if (promptEvent) {
        setInstallPrompt(promptEvent as PwaInstallPromptEvent);
        if (!sessionStorage.getItem("promptAtelierPwaInstallDismissed")) setShowInstallPrompt(true);
      }
    };
    const handleInstalled = () => {
      setInstallPrompt(null);
      (window as any).__promptAtelierInstallPrompt = null;
      setShowInstallPrompt(false);
      setIsStandaloneApp(true);
      setToast("Prompt Atelierをアプリとして追加しました");
      window.setTimeout(() => setToast(""), 1800);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("promptatelierinstallready", handleInstallReady);
    window.addEventListener("appinstalled", handleInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("promptatelierinstallready", handleInstallReady);
      window.removeEventListener("appinstalled", handleInstalled);
    };
  }, []);

  const installPwa = async () => {
    const promptEvent = installPrompt || ((window as any).__promptAtelierInstallPrompt as PwaInstallPromptEvent | null);
    if (!promptEvent) {
      window.alert("Chromeでインストール条件を確認中、または条件を満たしていない可能性があります。\n\n本番公開URL（https）をChromeで開いているか確認してください。\nそれでも出ない場合は、Chrome右上の「︙」メニューを開き、「キャスト、保存、共有」から「ページをアプリとしてインストール」または「ショートカットを作成」を選んでください。");
      return;
    }
    await promptEvent.prompt();
    const choice = await promptEvent.userChoice?.catch(() => null);
    if (choice?.outcome === "accepted") {
      setInstallPrompt(null);
      (window as any).__promptAtelierInstallPrompt = null;
      setShowInstallPrompt(false);
      return;
    }
    setShowInstallPrompt(true);
  };

  const dismissInstallPrompt = () => {
    sessionStorage.setItem("promptAtelierPwaInstallDismissed", "true");
    setShowInstallPrompt(false);
  };

  return (
    <div
      className={`app-shell ${themeClassName(activeTheme.id)} density-${homeSettings.displayDensity || "normal"} ${customizeClassName(homeSettings)}`}
      data-density={homeSettings.displayDensity || "normal"}
      data-card-radius={homeSettings.cardStyle.radius}
      data-card-shadow={homeSettings.cardStyle.shadow}
      data-card-transparency={homeSettings.cardStyle.transparency}
      data-card-border={homeSettings.cardStyle.border}
      data-background-type={homeSettings.backgroundStyle.type}
      data-font-preset={homeSettings.fontPreset || "simple"}
      data-icon-set={homeSettings.iconSet || "line"}
      style={appStyle}
    >
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
            ["videos", "動画プロンプト"],
            ["customize", "カスタマイズ"],
          ].map(([id, label]) => (
            <button key={id} className={screen === id ? "active" : ""} onClick={() => setScreen(id as Screen)}>
              {label}
            </button>
          ))}
        </nav>
      </header>

      <main>
        {showInstallPrompt && !isStandaloneApp && (
          <PwaInstallCard canInstall={Boolean(installPrompt)} onInstall={installPwa} onDismiss={dismissInstallPrompt} />
        )}
        {screen === "home" && (
          <Home
            setScreen={setScreen}
            recent={recentPrompts}
            favorites={favorites}
            projects={projects}
            projectMemos={projectMemos}
            myPrompts={myPrompts}
            mjSettings={mjSettings}
            mockupPrompts={mockupPrompts}
            copyText={copyText}
            settings={homeSettings}
            setSettings={setRawHomeSettings}
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
            projects={projects}
            projectMemos={projectMemos}
            myPrompts={myPrompts}
            mjSettings={mjSettings}
            mockupPrompts={mockupPrompts}
            canInstallPwa={Boolean(installPrompt || (window as any).__promptAtelierInstallPrompt)}
            isStandaloneApp={isStandaloneApp}
            onInstallPwa={installPwa}
          />
        )}
        {screen === "library" && <Library copyText={copyText} setScreen={setScreen} homeSettings={homeSettings} boardPrompts={mockupPrompts} setBoardPrompts={setMockupPrompts} />}
        {screen === "prompts" && <PromptBook prompts={myPrompts} setPrompts={setMyPrompts} copyText={copyText} setScreen={setScreen} homeSettings={homeSettings} />}
        {screen === "mj" && <Midjourney settings={mjSettings} setSettings={setMjSettings} copyText={copyText} setScreen={setScreen} />}
        {screen === "projects" && (
          <Projects
            projects={projects}
            setProjects={setProjects}
            projectMemos={projectMemos}
            setProjectMemos={setProjectMemos}
            prompts={myPrompts}
            settings={mjSettings}
            homeSettings={homeSettings}
            copyText={copyText}
            setScreen={setScreen}
          />
        )}
        {screen === "journal" && <JournalPage journal={journal} setJournal={setJournal} setScreen={setScreen} />}
        {screen === "gallery" && <GalleryPage images={visibleGalleryImages} setImages={setGalleryImages} setJournal={setJournal} setScreen={setScreen} homeSettings={homeSettings} />}
        {screen === "videos" && <VideoLibrary videos={videos} setVideos={setVideos} videoStocks={videoStocks} setVideoStocks={setVideoStocks} setScreen={setScreen} homeSettings={homeSettings} />}
      </main>
      {isImageMigrating && (
        <div className="image-migration-overlay">
          <div>画像データを最適化しています…</div>
        </div>
      )}
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

function PwaInstallCard({ canInstall, onInstall, onDismiss }: { canInstall: boolean; onInstall: () => void; onDismiss: () => void }) {
  return (
    <section className="pwa-install-card" role="dialog" aria-label="Prompt Atelierをアプリとして追加">
      <div className="pwa-install-icon">PA</div>
      <div>
        <strong>Prompt Atelierをアプリとして追加</strong>
        <p>ChromeでDockに追加すると、アプリのように起動できます。保存済みデータはこのブラウザ内に残ります。</p>
        {!canInstall && (
          <small className="pwa-install-help">
            Chrome推奨です。ポップアップが出ない場合は、Chrome右上の「︙」メニューを開き、「キャスト、保存、共有」から「ページをアプリとしてインストール」または「ショートカットを作成」を選んでください。
          </small>
        )}
      </div>
      <div className="pwa-install-actions">
        <button className="primary" onClick={onInstall}>{canInstall ? "アプリとして追加" : "追加方法を見る"}</button>
        <button onClick={onDismiss}>あとで</button>
      </div>
    </section>
  );
}

function PwaInstallInstructionsModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal pwa-instructions-modal">
        <div className="modal-head">
          <h3>ChromeでDockに追加する方法</h3>
          <button onClick={onClose}>閉じる</button>
        </div>
        <p className="pwa-instruction-alert">この環境では自動追加画面を表示できません。Chromeのメニューから追加してください。</p>
        <ol className="pwa-instruction-steps">
          <li>ChromeでPrompt Atelierを開きます</li>
          <li>右上の「︙」メニューを開きます</li>
          <li>「キャスト、保存、共有」を選びます</li>
          <li>「ページをアプリとしてインストール」または「ショートカットを作成」を選びます</li>
          <li>「ショートカットを作成」の場合は、「ウィンドウとして開く」にチェックを入れます</li>
          <li>作成後、Dockに追加して使えます</li>
        </ol>
        <p className="pwa-instruction-note">Chromeのバージョンによっては、「キャスト、保存、共有」が「保存して共有」や「その他のツール」と表示される場合があります。</p>
        <div className="modal-actions">
          <button className="primary" onClick={onClose}>わかりました</button>
        </div>
      </div>
    </div>
  );
}

function PwaCustomizeCard({ canInstallPwa, isStandaloneApp, onInstall, onShowInstructions }: any) {
  return (
    <section className="customize-card pwa-customize-card">
      <h3>アプリとして使う</h3>
      <p>ChromeでPrompt Atelierをアプリとして追加すると、Dockからすぐに起動できます。</p>
      {isStandaloneApp ? (
        <div className="pwa-status-pill">アプリモードで起動中です</div>
      ) : (
        <>
          <div className="pwa-customize-actions">
            <button className="primary" onClick={onInstall}>アプリとして追加</button>
            <button onClick={onShowInstructions}>追加方法を見る</button>
          </div>
          <small className="pwa-install-help">
            Chrome推奨です。環境によっては確認画面が表示されない場合があります。
          </small>
          {!canInstallPwa && (
            <small className="pwa-install-help">
              自動追加画面が出ない場合も、このカードの「追加方法を見る」から手順を確認できます。
            </small>
          )}
        </>
      )}
    </section>
  );
}

function getHomeDateParts() {
  const now = new Date();
  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
  const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const weekday = weekdays[now.getDay()];
  const monthName = monthNames[now.getMonth()];
  const paddedDay = String(day).padStart(2, "0");
  const paddedMonth = String(month).padStart(2, "0");
  return { year, month, day, weekday, monthName, paddedDay, paddedMonth };
}

function HomeDateDisplay({ style = "pill", size = "medium", color = "theme", mini = false }: { style?: HomeClockStyle; size?: HomeClockSize; color?: HomeClockColor; mini?: boolean }) {
  if (style === "hidden") return null;
  const { year, month, day, weekday, monthName, paddedDay, paddedMonth } = getHomeDateParts();
  const className = `${mini ? "home-mini-date" : "home-date-display"} ${style} size-${size} color-${color}`;
  const dateTime = `${year}-${paddedMonth}-${paddedDay}`;
  if (style === "minimal") {
    return <time className={className} dateTime={dateTime}>{month}/{day}（{weekday}）</time>;
  }
  if (["digital", "retro", "neon", "doodle", "stamp"].includes(style)) {
    return (
      <time className={className} dateTime={dateTime} aria-label={`${year}年${month}月${day}日 ${weekday}曜日`}>
        {style === "stamp" && <span className="stamp-heart-outline" aria-hidden="true">♡</span>}
        <strong>{monthName}.{paddedDay}</strong>
        <small>{year} / {weekday}</small>
      </time>
    );
  }
  return (
    <time className={className} dateTime={dateTime}>
      <span>{year}</span>
      <strong>{month}月{day}日</strong>
      <small>{weekday}曜日</small>
    </time>
  );
}

function Home({ setScreen, recent, favorites, projects, projectMemos, myPrompts, mjSettings, mockupPrompts, copyText, settings, setSettings, workTools, atelierImages }: any) {
  const isVisible = (id: string) => settings.visible[id] !== false;
  const entries = [
    ["library", "モックアップライブラリ", "販売画像に使える定番プロンプト", "mockup"],
    ["prompts", "プロンプト帳", "自分だけのプロンプトを保存", "notebook"],
    ["videos", "動画プロンプト帳", "Runway・Kling・Veo・Hailuo・Pikaなどの動画生成プロンプトをまとめて管理します。", "video"],
    ["mj", "MJ設定", "Midjourneyパラメータ管理", "magic"],
    ["projects", "プロジェクト", "企画管理をする", "folder"],
  ];
  const nextReminder = (projects as Project[])
    .filter((project) => project.remindOnHome && project.dueDate)
    .sort((a, b) => {
      const aInfo = projectDueInfo(a.dueDate || "");
      const bInfo = projectDueInfo(b.dueDate || "");
      if (aInfo.expired !== bInfo.expired) return aInfo.expired ? -1 : 1;
      return Math.abs(aInfo.diff) - Math.abs(bInfo.diff);
    })[0];
  const reminderInfo = nextReminder ? projectDueInfo(nextReminder.dueDate || "") : null;
  const mockupCount = readMockupCategoryCount();
  const promptCount = (myPrompts || []).length;
  const mjCount = (mjSettings || []).length;
  const projectCount = (projects || []).length;
  const dashboardItems = [
    { id: "mockups", screen: "library", title: "モックアップ", value: `${mockupCount}件`, icon: "mockup" },
    { id: "prompts", screen: "prompts", title: "プロンプト帳", value: `${promptCount}件`, icon: "notebook" },
    { id: "mjSettings", screen: "mj", title: "MJ設定", value: `${mjCount}件`, icon: "magic" },
    { id: "projects", screen: "projects", title: "プロジェクト", value: `${projectCount}件`, icon: "folder" },
    {
      id: "achievement",
      screen: "projects",
      title: reminderInfo?.expired ? "期限超過" : "達成予定",
      value: nextReminder ? reminderInfo?.text || "" : "リマインドなし",
      icon: "alarm",
      note: nextReminder?.name || "",
    },
  ];
  const visibleDashboardItems = dashboardItems.filter((item) => (settings.homeStatsCards || defaultHomeSettings.homeStatsCards)[item.id as HomeStatsCardId] !== false);
  const normalizedTools = (workTools as WorkTool[]).filter((tool) => tool.visible !== false).slice(0, 10);
  const renderSection = (sectionId: HomeSectionId) => {
    if (!isVisible(sectionId)) return null;
    if (sectionId === "dashboard") {
      if (!visibleDashboardItems.length) return null;
      return (
        <section className="dashboard-panel home-module" key={sectionId}>
          <div className="dashboard-grid">
            {visibleDashboardItems.map((item) => (
              <button className="stat-card" key={`${item.title}-${item.icon}`} onClick={() => setScreen(item.screen as Screen)}>
                <span className="stat-icon" data-icon={item.icon}><FeatureIcon name={item.icon} /></span>
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
                <span>{tool.iconImage ? <img src={imageThumbnail(tool.iconImage)} alt="" /> : <b>{tool.iconText || tool.name.slice(0, 2)}</b>}</span>
                <strong>{tool.name}</strong>
              </a>
            ))}
          </div>
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
              <span className="feature-icon" data-icon={icon as string}><FeatureIcon name={icon as string} /></span>
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
              <HomePromptCard key={prompt.id} prompt={prompt} onCopy={copyText} />
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
            <div className="atelier-marquee" aria-label="アトリエ画像">
              <div className={`atelier-marquee-track ${atelierImages.length === 1 ? "is-single" : "is-moving"}`}>
                {atelierImages.map((image: AtelierImage, index: number) => (
                  <figure className="atelier-marquee-card" key={`${image.id}-${index}`}>
                    <img src={imageDisplaySrc(image)} alt="" />
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
  const bannerSrc = homeBannerSrc(settings);
  const bannerPosition = homeBannerPosition(settings);
  return (
    <section className="page home-page">
      <div className="home-topbar">
        <span>Prompt Atelier Home</span>
        <HomeDateDisplay style={settings.homeClockStyle || "pill"} size={settings.homeClockSize || "medium"} color={settings.homeClockColor || "theme"} />
      </div>
      {settings.bannerVisible && (
        <div className={`home-banner ${settings.bannerSize || "medium"} fit-${settings.bannerFit || "contain"}`}>
          {bannerSrc ? (
            <img
              src={bannerSrc}
              alt=""
              style={bannerImageStyle(bannerPosition)}
            />
          ) : (
            <>
              <span>✦</span>
              <i></i>
              <b></b>
            </>
          )}
        </div>
      )}
      {settings.order.map((sectionId: HomeSectionId) => renderSection(sectionId))}
      <HomeCharacter
        settings={settings.homeCharacter}
        projects={projects}
        prompts={myPrompts}
        onChange={(patch) => setSettings((current: HomeSettings) => normalizeHomeSettings({
          ...current,
          homeCharacter: {
            ...(current?.homeCharacter || defaultHomeSettings.homeCharacter),
            ...patch,
          },
        }))}
      />
    </section>
  );
}

function shortMemoText(value: string) {
  const text = (value || "").replace(/\s+/g, " ").trim();
  return text.length > 34 ? `${text.slice(0, 34)}…` : text;
}

function characterProjectMessage(projects: Project[]) {
  const active = projects.filter((project) => !projectDueInfo(project.dueDate || "").expired || !project.dueDate);
  const dueToday = projects.find((project) => project.dueDate && projectDueInfo(project.dueDate).diff === 0);
  if (dueToday) return "今日が期限のプロジェクトがあります";
  const near = projects
    .filter((project) => project.dueDate)
    .map((project) => ({ project, info: projectDueInfo(project.dueDate || "") }))
    .filter((item) => item.info.diff > 0 && item.info.diff <= 3)
    .sort((a, b) => a.info.diff - b.info.diff)[0];
  if (near) return `あと${near.info.diff}日で期限のプロジェクトがあります`;
  if (active.length) return `進行中のプロジェクトが${active.length}件あります`;
  return "";
}

function selectedProjectMessage(project?: Project) {
  if (!project) return "";
  if (!project.dueDate) return `『${project.name}』を進行中です`;
  const info = projectDueInfo(project.dueDate);
  if (info.expired) return `『${project.name}』の期限が過ぎています`;
  if (info.diff === 0) return `『${project.name}』は今日が期限です`;
  return `『${project.name}』はあと${info.diff}日で期限です`;
}

function characterMemoMessage(projects: Project[], prompts: MyPrompt[]) {
  const projectMemo = [...projects].reverse().find((project) => shortMemoText(project.note || ""));
  if (projectMemo) return `最近のメモ：${shortMemoText(projectMemo.note)}`;
  const promptMemo = [...prompts].reverse().find((prompt) => shortMemoText(prompt.memo || prompt.note || ""));
  if (promptMemo) return `メモにアイデアがあります：${shortMemoText(promptMemo.memo || promptMemo.note)}`;
  return "";
}

function characterMessage(settings: HomeCharacterSettings, projects: Project[], prompts: MyPrompt[]) {
  if (settings.messageMode === "fixed") return settings.fixedMessage || "今日も制作がんばろう";
  if (settings.messageMode === "project") {
    const selectedProject = projects.find((project) => project.id === settings.selectedProjectId);
    return selectedProjectMessage(selectedProject) || characterProjectMessage(projects) || "プロジェクトを少しずつ進めよう";
  }
  return characterProjectMessage(projects) || characterMemoMessage(projects, prompts) || "今日も制作がんばろう";
}

function CharacterSpeechBubble({ message }: { message: string }) {
  return <div className="character-speech-bubble">{message}</div>;
}

function HomeCharacter({ settings, projects, prompts, onChange }: { settings: HomeCharacterSettings; projects: Project[]; prompts: MyPrompt[]; onChange?: (patch: Partial<HomeCharacterSettings>) => void }) {
  if (!settings?.image || settings.position === "hidden") return null;
  const message = characterMessage(settings, projects, prompts);
  const size = ["small", "medium", "large"].includes(settings.size) ? settings.size : "medium";
  const [livePosition, setLivePosition] = React.useState({
    x: Math.min(100, Math.max(0, Number(settings.customX ?? 86))),
    y: Math.min(100, Math.max(0, Number(settings.customY ?? 62))),
  });
  const dragRef = React.useRef<{ offsetX: number; offsetY: number; x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = React.useState(false);

  React.useEffect(() => {
    setLivePosition({
      x: Math.min(100, Math.max(0, Number(settings.customX ?? 86))),
      y: Math.min(100, Math.max(0, Number(settings.customY ?? 62))),
    });
  }, [settings.customX, settings.customY]);

  const updateFromPointer = (event: React.PointerEvent<HTMLElement>) => {
    const drag = dragRef.current;
    if (!drag) return null;
    const next = {
      x: Math.min(96, Math.max(4, ((event.clientX - drag.offsetX) / window.innerWidth) * 100)),
      y: Math.min(94, Math.max(6, ((event.clientY - drag.offsetY) / window.innerHeight) * 100)),
    };
    drag.x = next.x;
    drag.y = next.y;
    setLivePosition(next);
    return next;
  };

  const startDrag = (event: React.PointerEvent<HTMLElement>) => {
    if (!onChange) return;
    const rect = event.currentTarget.getBoundingClientRect();
    dragRef.current = {
      offsetX: event.clientX - (rect.left + rect.width / 2),
      offsetY: event.clientY - (rect.top + rect.height / 2),
      x: livePosition.x,
      y: livePosition.y,
    };
    setIsDragging(true);
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const finishDrag = (event: React.PointerEvent<HTMLElement>) => {
    const drag = dragRef.current;
    if (!drag) return;
    updateFromPointer(event);
    dragRef.current = null;
    setIsDragging(false);
    event.currentTarget.releasePointerCapture?.(event.pointerId);
    onChange?.({ position: "custom", customX: Math.round(drag.x), customY: Math.round(drag.y) });
  };

  return (
    <aside
      className={`home-character ${isDragging || settings.position === "custom" ? "custom" : settings.position} character-size-${size} is-draggable${isDragging ? " is-dragging" : ""}`}
      aria-label="アトリエキャラクター"
      style={isDragging || settings.position === "custom" ? { ["--home-character-x" as any]: `${livePosition.x}%`, ["--home-character-y" as any]: `${livePosition.y}%` } : undefined}
      onPointerDown={startDrag}
      onPointerMove={updateFromPointer}
      onPointerUp={finishDrag}
      onPointerCancel={finishDrag}
    >
      {settings.speechEnabled && <CharacterSpeechBubble message={message} />}
      <img src={imageSrc(settings.image) || imageThumbnail(settings.image)} alt="アトリエキャラクター" draggable={false} />
    </aside>
  );
}

function HomeCharacterSettingsPanel({ settings, updateSettings, projects }: any) {
  const character: HomeCharacterSettings = settings.homeCharacter || defaultHomeSettings.homeCharacter;
  const projectChoices = sortProjectsForDisplay(projects || []);
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);
  const updateCharacter = (patch: Partial<HomeCharacterSettings>) => updateSettings({ homeCharacter: { ...character, ...patch } });
  const importFiles = async (files: FileList | File[]) => {
    const file = Array.from(files).find(isSupportedImageFile);
    if (!file) return;
    try {
      const image = saveImageToStorage(await optimizeImage(file, "character"));
      updateCharacter({ image: image.src });
    } catch (error) {
      console.error("[Prompt Atelier] キャラクター画像の追加に失敗しました", error);
      window.alert("画像を追加できませんでした。png / jpg / webp を選んでください。");
    }
  };
  return (
    <section className="customize-card character-settings-card">
      <h3>ホームキャラクター設定</h3>
      <p>透過PNGなどのキャラクター画像を、ホーム画面にアトリエ案内役として表示できます。</p>
      <div
        className="character-upload-area"
        tabIndex={0}
        onClick={() => fileInputRef.current?.click()}
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
        {character.image ? <img src={imageThumbnail(character.image)} alt="" /> : <span>＋ キャラクター画像を追加</span>}
        <small>PNG / WebP / JPG対応。透過PNG推奨です。</small>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg,image/webp"
          style={{ display: "none" }}
          onChange={(event) => {
            if (event.currentTarget.files) importFiles(event.currentTarget.files);
            event.currentTarget.value = "";
          }}
        />
      </div>
      {character.image && <button onClick={() => updateCharacter({ image: "" })}>画像を削除</button>}
      <label>表示位置
        <select value={character.position} onChange={(event) => updateCharacter({ position: event.target.value as HomeCharacterPosition })}>
          <option value="right-bottom">右下</option>
          <option value="right-center">右側中央</option>
          <option value="left-bottom">左下</option>
          <option value="hidden">非表示</option>
        </select>
      </label>
      <label>表示サイズ
        <select value={character.size || "medium"} onChange={(event) => updateCharacter({ size: event.target.value as HomeCharacterSize })}>
          <option value="small">小</option>
          <option value="medium">中</option>
          <option value="large">大</option>
        </select>
      </label>
      <label className="switch-row">
        <span>吹き出し表示</span>
        <input type="checkbox" checked={character.speechEnabled} onChange={(event) => updateCharacter({ speechEnabled: event.target.checked })} />
      </label>
      <label>吹き出しメッセージタイプ
        <select value={character.messageMode} onChange={(event) => updateCharacter({ messageMode: event.target.value as HomeCharacterMessageMode })}>
          <option value="auto">自動</option>
          <option value="fixed">固定メッセージ</option>
          <option value="project">プロジェクト優先</option>
        </select>
      </label>
      {character.messageMode === "project" && (
        <label>表示するプロジェクト
          <select value={character.selectedProjectId || ""} onChange={(event) => updateCharacter({ selectedProjectId: event.target.value })} disabled={!projectChoices.length}>
            <option value="">未選択</option>
            {projectChoices.map((project: Project) => (
              <option key={project.id} value={project.id}>
                {project.name}{project.dueDate ? ` / 期限：${project.dueDate}` : ""}
              </option>
            ))}
          </select>
          {!projectChoices.length && <small>登録済みプロジェクトがありません</small>}
        </label>
      )}
      {character.messageMode === "fixed" && (
        <textarea value={character.fixedMessage} onChange={(event) => updateCharacter({ fixedMessage: event.target.value })} placeholder="固定メッセージ（例：今日も制作がんばろう♡）" />
      )}
    </section>
  );
}

function WorkToolEditor({ tool, onClose, onSave }: any) {
  const [draft, setDraft] = React.useState({ visible: true, ...tool });
  const update = (key: keyof WorkTool, value: any) => setDraft({ ...draft, [key]: value });
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
      <input type="file" accept="image/*" onChange={(event) => readImage(event, (iconImage) => setDraft({ ...draft, iconImage }), "icon")} />
      <input value={draft.memo || ""} onChange={(event) => update("memo", event.target.value)} placeholder="メモ（任意）" />
      <label className="switch-row">
        <span>ホームに表示する</span>
        <input type="checkbox" checked={draft.visible !== false} onChange={(event) => update("visible", event.target.checked)} />
      </label>
      <div className="quick-link-editor-actions">
        <button onClick={onClose}>キャンセル</button>
        <button className="primary" onClick={() => onSave(draft)}>保存する</button>
      </div>
    </div>
  );
}

function HomeCustomize({ settings, setSettings, setScreen, workTools, setWorkTools, projects, myPrompts, mjSettings, mockupPrompts, canInstallPwa, isStandaloneApp, onInstallPwa }: any) {
  const [editingTool, setEditingTool] = React.useState<WorkTool | null>(null);
  const [showPwaInstructions, setShowPwaInstructions] = React.useState(false);
  const backupInputRef = React.useRef<HTMLInputElement | null>(null);
  const bannerDragRef = React.useRef<{ startX: number; startY: number; x: number; y: number; width: number; height: number } | null>(null);
  const settingsRef = React.useRef<HomeSettings>(settings);
  React.useEffect(() => {
    settingsRef.current = settings;
  }, [settings]);
  const persistHomeSettings = (nextSettings = settingsRef.current) => {
    const normalized = normalizeHomeSettings(nextSettings);
    settingsRef.current = normalized;
    try {
      localStorage.setItem("promptAtelierHomeSettings", JSON.stringify(normalized));
    } catch (error) {
      console.warn("[Prompt Atelier] ホーム設定の保存に失敗しました", error);
    }
    return normalized;
  };
  const updateSettings = (patch: Partial<HomeSettings>, persist = false) => {
    const next = normalizeHomeSettings({ ...settingsRef.current, ...patch });
    settingsRef.current = next;
    setSettings(next);
    if (persist) persistHomeSettings(next);
  };
  const updateBannerPosition = (x: number, y: number, persist = false) => updateSettings({
    bannerPositionX: Math.min(100, Math.max(0, Math.round(x))),
    bannerPositionY: Math.min(100, Math.max(0, Math.round(y))),
    bannerPositions: {
      ...defaultBannerPositions,
      ...(settingsRef.current.bannerPositions || {}),
      [settingsRef.current.bannerSize || "medium"]: {
        x: Math.min(100, Math.max(0, Math.round(x))),
        y: Math.min(100, Math.max(0, Math.round(y))),
      },
    },
  }, persist);
  const selectBannerSize = (size: BannerSize) => {
    const current = settingsRef.current;
    const position = current.bannerPositions?.[size] || defaultBannerPositions[size];
    updateSettings({
      bannerSize: size,
      bannerPositionX: position.x,
      bannerPositionY: position.y,
    }, true);
  };
  const updateCardStyle = (patch: Partial<CardStyleSettings>) => updateSettings({
    cardStyle: { ...defaultCardStyle, ...(settingsRef.current.cardStyle || {}), ...patch },
  });
  const updateBackgroundStyle = (patch: Partial<BackgroundStyleSettings>) => updateSettings({
    backgroundStyle: { ...defaultBackgroundStyle, ...(settingsRef.current.backgroundStyle || {}), ...patch },
  });
  const importCustomBackground = async (file?: File) => {
    if (!file) return;
    try {
      const image = saveImageToStorage(await optimizeImage(file, "background"));
      updateBackgroundStyle({ image: image.src, type: "image" });
      scheduleStorageWarningCheck();
    } catch (error) {
      console.error("[Prompt Atelier] 背景画像の追加に失敗しました", error);
      window.alert("背景画像を追加できませんでした。jpg / png / webp を選んでください。");
    }
  };
  const startBannerDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const currentSettings = settingsRef.current;
    if (!homeBannerImageValue(currentSettings)) return;
    event.preventDefault();
    const bounds = event.currentTarget.getBoundingClientRect();
    bannerDragRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      x: homeBannerPosition(currentSettings).x,
      y: homeBannerPosition(currentSettings).y,
      width: bounds.width || 1,
      height: bounds.height || 1,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const bannerImageValue = homeBannerImageValue(settings);
  const bannerSrc = homeBannerSrc(settings);
  const bannerPosition = homeBannerPosition(settings);
  const moveBannerDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = bannerDragRef.current;
    if (!drag) return;
    event.preventDefault();
    const nextX = drag.x - ((event.clientX - drag.startX) / drag.width) * 100;
    const deltaY = ((event.clientY - drag.startY) / drag.height) * 100;
    const nextY = (settingsRef.current.bannerSize || "medium") === "large"
      ? drag.y + deltaY
      : drag.y - deltaY;
    updateBannerPosition(nextX, nextY);
  };
  const endBannerDrag = () => {
    if (bannerDragRef.current) persistHomeSettings();
    bannerDragRef.current = null;
  };
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
  const pageSettings = settings.pageDisplaySettings || defaultPageDisplaySettings;
  const updatePageDisplay = (page: keyof PageDisplaySettings, patch: any) => {
    const current = settingsRef.current.pageDisplaySettings || defaultPageDisplaySettings;
    updateSettings({
      pageDisplaySettings: {
        ...defaultPageDisplaySettings,
        ...current,
        [page]: {
          ...defaultPageDisplaySettings[page],
          ...(current as any)[page],
          ...patch,
        },
      },
    });
  };
  const normalizedTools = (workTools as WorkTool[]).map((tool) => ({ visible: true, ...tool })).slice(0, 10);
  const previewDashboardItems = [
    { id: "mockups", title: "Mockup", value: String(readMockupCategoryCount()), icon: "mockup" },
    { id: "prompts", title: "Prompt", value: String((myPrompts || []).length), icon: "notebook" },
    { id: "mjSettings", title: "MJ", value: String((mjSettings || []).length), icon: "magic" },
    { id: "projects", title: "Project", value: String((projects || []).length), icon: "folder" },
  ].filter((item) => (settings.homeStatsCards || defaultHomeSettings.homeStatsCards)[item.id as HomeStatsCardId] !== false).slice(0, 4);
  const previewTools = normalizedTools.filter((tool) => tool.visible !== false).slice(0, 4);
  const previewFeatureEntries = [
    ["library", "Mockup", "mockup"],
    ["prompts", "Prompt", "notebook"],
    ["videos", "Video", "video"],
    ["mj", "MJ", "magic"],
  ].filter(([id]) => settings.visible[id] !== false).slice(0, 4);
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
      visible: tool.visible !== false,
      color: tool.color || "",
    };
    setWorkTools((items: WorkTool[]) => tool.id ? items.map((item) => item.id === tool.id ? next : item).slice(0, 10) : [...items, next].slice(0, 10));
    setEditingTool(null);
  };
  const toggleWorkToolVisible = (id: string, visible: boolean) => {
    setWorkTools((items: WorkTool[]) => items.map((item) => item.id === id ? { ...item, visible } : item));
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
      setWorkTools((items: WorkTool[]) => {
        rememberDeletedSampleIdsFromItems(items.find((item) => item.id === id));
        return items.filter((item) => item.id !== id);
      });
    }
  };
  const activeTheme = homeThemes.find((theme) => theme.id === settings.themeId) || homeThemes[0];
  const previewStyle = { ...themeStyle(activeTheme), ...customStyle(settings) };
  const previewClassName = customizeClassName(settings);
  const bannerCanDrag = Boolean(bannerImageValue);
  const handleCustomizeInstallPwa = () => {
    if (canInstallPwa) {
      onInstallPwa();
      return;
    }
    setShowPwaInstructions(true);
  };
  return (
    <section className="page customize-page">
      <PageHead
        title="ホームカスタマイズ"
        action={<PageBackButton label="ホームへ戻る" onClick={() => setScreen("home")} />}
      />
      <div className="customize-layout">
        <div className="customize-settings">
          <details className="customize-accordion">
            <summary><span>データ管理・アプリ</span><b>⌄</b></summary>
            <div className="customize-accordion-body">
              <PwaCustomizeCard
                canInstallPwa={canInstallPwa}
                isStandaloneApp={isStandaloneApp}
                onInstall={handleCustomizeInstallPwa}
                onShowInstructions={() => setShowPwaInstructions(true)}
              />
            </div>
          </details>

          <details className="customize-card customize-accordion" open>
            <summary><span>テーマ・基本デザイン</span><b>⌄</b></summary>
            <div className="customize-accordion-body">
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
            </div>
          </details>

          <details className="customize-card customize-accordion">
            <summary><span>バナー設定</span><b>⌄</b></summary>
            <div className="customize-accordion-body">
            <h3>バナー</h3>
            <p>ホーム上部に表示する横長画像を設定できます。</p>
            <div className="banner-size-guide">
              <strong>バナー画像の推奨サイズ</strong>
              <div>
                <span>
                  <b>大バナー</b>
                  <small>2400 × 1200px / 2:1</small>
                </span>
                <span>
                  <b>中バナー</b>
                  <small>2400 × 800px / 3:1</small>
                </span>
                <span>
                  <b>小バナー</b>
                  <small>2400 × 400px / 6:1</small>
                </span>
              </div>
              <p>Macの高精細画面でもくっきり見せるため、横幅2400px前後の画像がおすすめです。</p>
            </div>
            <label className="switch-row">
              <span>バナー表示</span>
              <input type="checkbox" checked={settings.bannerVisible} onChange={(event) => updateSettings({ bannerVisible: event.target.checked })} />
            </label>
            <input value={settings.bannerImageUrl} onChange={(event) => updateSettings({ bannerImageUrl: event.target.value, bannerImage: event.target.value })} placeholder="バナー画像URL" />
            <input type="file" accept="image/png,image/jpeg,image/webp" onChange={(event) => readBannerImage(event, (bannerImage) => updateSettings({ bannerImage }))} />
            <small className="banner-quality-note">高画質設定を反映するには、バナー画像を再アップロードしてください。</small>
            <div className="inline-buttons">
              {(["small", "medium", "large"] as const).map((size) => (
                <button key={size} className={settings.bannerSize === size ? "active-soft" : ""} onClick={() => selectBannerSize(size)}>
                  {size === "small" ? "小" : size === "medium" ? "中" : "大"}
                </button>
              ))}
              <button onClick={() => updateSettings({ bannerImage: "", bannerImageUrl: "" })}>画像を削除</button>
            </div>
            <div className="banner-fit-controls">
              <strong>バナー表示方法</strong>
              <div className="inline-buttons">
                <button className={(settings.bannerFit || "contain") === "contain" ? "active-soft" : ""} onClick={() => updateSettings({ bannerFit: "contain" })}>
                  全体を表示
                </button>
                <button className={settings.bannerFit === "cover" ? "active-soft" : ""} onClick={() => updateSettings({ bannerFit: "cover" })}>
                  枠いっぱいに表示
                </button>
              </div>
              <p>「全体を表示」は画像が切れにくく、「枠いっぱいに表示」は余白が出にくい表示です。</p>
            </div>
            </div>
          </details>

          <details className="customize-accordion">
            <summary><span>ホーム表示</span><b>⌄</b></summary>
            <div className="customize-accordion-body">
              <HomeCharacterSettingsPanel settings={settings} updateSettings={updateSettings} projects={projects} />
            </div>
          </details>

          <details className="customize-card customize-accordion">
            <summary><span>作業ツール</span><b>⌄</b></summary>
            <div className="customize-accordion-body">
            <section className="customize-card customize-nested-card">
            <h3>作業ツール設定</h3>
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
                  <span className="work-tool-edit-icon">{tool.iconImage ? <img src={imageThumbnail(tool.iconImage)} alt="" /> : <b>{tool.iconText || tool.name.slice(0, 2)}</b>}</span>
                  <div>
                    <strong>{tool.name}</strong>
                    <small>{tool.url}</small>
                  </div>
                  <label className="work-tool-visible-toggle">
                    <span>表示</span>
                    <input type="checkbox" checked={tool.visible !== false} onChange={(event) => toggleWorkToolVisible(tool.id, event.target.checked)} />
                  </label>
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
              <button className="add-work-tool-button" onClick={() => setEditingTool({ id: "", name: "", url: "", iconText: "", iconImage: "", memo: "", visible: true })}>
                ＋ 作業ツールを追加
              </button>
            ) : <p className="limit-message">作業ツールは最大10件まで登録できます</p>}
            {editingTool && <WorkToolEditor tool={editingTool} onClose={() => setEditingTool(null)} onSave={saveWorkTool} />}
            </section>
            </div>
          </details>

          <details className="customize-card customize-accordion">
            <summary><span>カード表示</span><b>⌄</b></summary>
            <div className="customize-accordion-body">
          <section className="customize-card customize-nested-card">
            <h3>カード密度</h3>
            <p>ホームや各一覧ページのカード間隔を調整できます。</p>
            <div className="density-choice-grid">
              {densityOptions.map((item) => (
                <button
                  key={item.id}
                  className={settings.displayDensity === item.id ? "active-soft" : ""}
                  onClick={() => updateSettings({ displayDensity: item.id })}
                >
                  {item.id !== "hidden" && (
                    <span className={`clock-option-preview ${item.id}`}>
                      {item.id === "stamp" && <span className="stamp-heart-outline" aria-hidden="true">♡</span>}
                      <b>APR.26</b>
                    </span>
                  )}
                  <strong>{item.label}</strong>
                  <small>{item.description}</small>
                </button>
              ))}
            </div>
          </section>

          <section className="customize-card customize-nested-card">
            <h3>カード質感設定</h3>
            <p>カードの角丸・影・透明感・枠線を調整できます。</p>
            <div className="style-control-grid">
              <label>角丸
                <select value={settings.cardStyle.radius} onChange={(event) => updateCardStyle({ radius: event.target.value as CardRadiusStyle })}>
                  {cardStyleOptions.radius.map(([id, label]) => <option key={id} value={id}>{label}</option>)}
                </select>
              </label>
              <label>影
                <select value={settings.cardStyle.shadow} onChange={(event) => updateCardStyle({ shadow: event.target.value as CardShadowStyle })}>
                  {cardStyleOptions.shadow.map(([id, label]) => <option key={id} value={id}>{label}</option>)}
                </select>
              </label>
              <label>透明感
                <select value={settings.cardStyle.transparency} onChange={(event) => updateCardStyle({ transparency: event.target.value as CardTransparencyStyle })}>
                  {cardStyleOptions.transparency.map(([id, label]) => <option key={id} value={id}>{label}</option>)}
                </select>
              </label>
              <label>枠線
                <select value={settings.cardStyle.border} onChange={(event) => updateCardStyle({ border: event.target.value as CardBorderStyle })}>
                  {cardStyleOptions.border.map(([id, label]) => <option key={id} value={id}>{label}</option>)}
                </select>
              </label>
            </div>
          </section>
            </div>
          </details>

          <details className="customize-card customize-accordion">
            <summary><span>背景</span><b>⌄</b></summary>
            <div className="customize-accordion-body">
            <h3>背景カスタム</h3>
            <p>ツール全体の背景の雰囲気を調整できます。</p>
            <div className="style-control-grid">
              <label>背景タイプ
                <select value={settings.backgroundStyle.type} onChange={(event) => updateBackgroundStyle({ type: event.target.value as BackgroundType })}>
                  {backgroundStyleOptions.type.map(([id, label]) => <option key={id} value={id}>{label}</option>)}
                </select>
              </label>
              <label>背景カラー
                <input type="color" value={settings.backgroundStyle.color} onChange={(event) => updateBackgroundStyle({ color: event.target.value, type: "solid" })} />
              </label>
              <label>グラデーション
                <select value={settings.backgroundStyle.gradient} onChange={(event) => updateBackgroundStyle({ gradient: event.target.value as BackgroundGradient, type: "gradient" })}>
                  {backgroundStyleOptions.gradient.map(([id, label]) => <option key={id} value={id}>{label}</option>)}
                </select>
              </label>
              <label>背景パターン
                <select value={settings.backgroundStyle.pattern} onChange={(event) => updateBackgroundStyle({ pattern: event.target.value as BackgroundPattern, type: "pattern" })}>
                  {backgroundStyleOptions.pattern.map(([id, label]) => <option key={id} value={id}>{label}</option>)}
                </select>
              </label>
            </div>
            <div className="preset-color-row">
              {backgroundColorOptions.map(([color, label]) => (
                <button key={color} type="button" onClick={() => updateBackgroundStyle({ color, type: "solid" })}>
                  <i style={{ background: color }} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
            <div className="background-image-controls">
              <input type="file" accept="image/png,image/jpeg,image/webp" onChange={(event) => { importCustomBackground(event.currentTarget.files?.[0]); event.currentTarget.value = ""; }} />
              <div className="style-control-grid">
                <label>画像表示
                  <select value={settings.backgroundStyle.imageFit} onChange={(event) => updateBackgroundStyle({ imageFit: event.target.value as BackgroundImageFit })}>
                    {backgroundStyleOptions.imageFit.map(([id, label]) => <option key={id} value={id}>{label}</option>)}
                  </select>
                </label>
                <label>画像位置
                  <select value={settings.backgroundStyle.imagePosition} onChange={(event) => updateBackgroundStyle({ imagePosition: event.target.value as BackgroundImagePosition })}>
                    {backgroundStyleOptions.imagePosition.map(([id, label]) => <option key={id} value={id}>{label}</option>)}
                  </select>
                </label>
                <label>ぼかし
                  <select value={settings.backgroundStyle.imageBlur} onChange={(event) => updateBackgroundStyle({ imageBlur: event.target.value as BackgroundImageBlur })}>
                    {backgroundStyleOptions.imageBlur.map(([id, label]) => <option key={id} value={id}>{label}</option>)}
                  </select>
                </label>
                <label>背景の濃さ
                  <select value={settings.backgroundStyle.imageOpacity} onChange={(event) => updateBackgroundStyle({ imageOpacity: event.target.value as BackgroundOpacity })}>
                    {backgroundStyleOptions.imageOpacity.map(([id, label]) => <option key={id} value={id}>{label}</option>)}
                  </select>
                </label>
              </div>
              <div className="inline-buttons">
                <button type="button" onClick={() => updateBackgroundStyle({ image: "", type: "theme" })}>背景画像を削除</button>
              </div>
            </div>
            <label className="switch-row">
              <span>背景装飾を表示</span>
              <input type="checkbox" checked={settings.backgroundStyle.showDecorations !== false} onChange={(event) => updateBackgroundStyle({ showDecorations: event.target.checked })} />
            </label>
            </div>
          </details>

          <details className="customize-card customize-accordion">
            <summary><span>フォント・アイコン</span><b>⌄</b></summary>
            <div className="customize-accordion-body">
          <section className="customize-card customize-nested-card">
            <h3>フォント雰囲気</h3>
            <p>見出しや本文の雰囲気を変更できます。</p>
            <div className="preset-card-grid">
              {fontPresetOptions.map((item) => (
                <button key={item.id} className={settings.fontPreset === item.id ? "active-soft" : ""} onClick={() => updateSettings({ fontPreset: item.id })}>
                  <strong>{item.label}</strong>
                  <small>{item.description}</small>
                </button>
              ))}
            </div>
          </section>

          <section className="customize-card customize-nested-card">
            <h3>アイコンセット</h3>
            <p>メニューやカードに使うアイコンの雰囲気を変更できます。</p>
            <div className="preset-card-grid">
              {iconSetOptions.map((item) => (
                <button key={item.id} className={settings.iconSet === item.id ? "active-soft" : ""} onClick={() => updateSettings({ iconSet: item.id })}>
                  <span className={`icon-set-sample icon-set-sample-${item.id}`}>✦</span>
                  <strong>{item.label}</strong>
                  <small>{item.description}</small>
                </button>
              ))}
            </div>
          </section>
            </div>
          </details>

          <details className="customize-card customize-accordion">
            <summary><span>ページ別表示</span><b>⌄</b></summary>
            <div className="customize-accordion-body">
          <section className="customize-card page-display-settings customize-nested-card">
            <h3>ページごとの表示設定</h3>
            <p>ギャラリー、プロンプト帳、動画プロンプト帳、プロジェクト、モックアップの見え方を調整できます。</p>
            <div className="page-display-grid">
              <div className="page-display-panel">
                <strong>ギャラリー</strong>
                <label>余白
                  <select value={pageSettings.gallery.gap} onChange={(event) => updatePageDisplay("gallery", { gap: event.target.value })}>
                    <option value="narrow">狭め</option>
                    <option value="normal">標準</option>
                    <option value="wide">広め</option>
                  </select>
                </label>
                <label>画像比率
                  <select value={pageSettings.gallery.ratio} onChange={(event) => updatePageDisplay("gallery", { ratio: event.target.value })}>
                    <option value="square">正方形</option>
                    <option value="portrait">縦長</option>
                    <option value="landscape">横長</option>
                    <option value="original">元画像に近く</option>
                  </select>
                </label>
                <label>列数
                  <select value={pageSettings.gallery.columns} onChange={(event) => updatePageDisplay("gallery", { columns: event.target.value })}>
                    <option value="auto">自動</option>
                    <option value="2">2列</option>
                    <option value="3">3列</option>
                    <option value="4">4列</option>
                    <option value="5">5列</option>
                  </select>
                </label>
                <label className="switch-row"><span>お気に入りハート</span><input type="checkbox" checked={pageSettings.gallery.showHeart} onChange={(event) => updatePageDisplay("gallery", { showHeart: event.target.checked })} /></label>
              </div>
              <div className="page-display-panel">
                <strong>プロンプト帳</strong>
                <label>表示形式
                  <select value={pageSettings.prompts.viewMode} onChange={(event) => updatePageDisplay("prompts", { viewMode: event.target.value })}>
                    <option value="card">カード</option>
                    <option value="list">リスト寄り</option>
                  </select>
                </label>
                <label>画像サイズ
                  <select value={pageSettings.prompts.imageSize} onChange={(event) => updatePageDisplay("prompts", { imageSize: event.target.value })}>
                    <option value="small">小さめ</option>
                    <option value="normal">標準</option>
                    <option value="large">大きめ</option>
                  </select>
                </label>
                <label className="switch-row"><span>タグを表示</span><input type="checkbox" checked={pageSettings.prompts.showTags} onChange={(event) => updatePageDisplay("prompts", { showTags: event.target.checked })} /></label>
                <label className="switch-row"><span>メモを表示</span><input type="checkbox" checked={pageSettings.prompts.showMemo} onChange={(event) => updatePageDisplay("prompts", { showMemo: event.target.checked })} /></label>
              </div>
              <div className="page-display-panel">
                <strong>動画プロンプト帳</strong>
                <label>表示形式
                  <select value={pageSettings.videoPrompts.viewMode} onChange={(event) => updatePageDisplay("videoPrompts", { viewMode: event.target.value })}>
                    <option value="card">カード</option>
                    <option value="list">リスト寄り</option>
                  </select>
                </label>
                <label>サムネイルサイズ
                  <select value={pageSettings.videoPrompts.thumbnailSize} onChange={(event) => updatePageDisplay("videoPrompts", { thumbnailSize: event.target.value })}>
                    <option value="small">小さめ</option>
                    <option value="normal">標準</option>
                    <option value="large">大きめ</option>
                  </select>
                </label>
                <label className="switch-row"><span>タグを表示</span><input type="checkbox" checked={pageSettings.videoPrompts.showTags} onChange={(event) => updatePageDisplay("videoPrompts", { showTags: event.target.checked })} /></label>
                <label className="switch-row"><span>メモを表示</span><input type="checkbox" checked={pageSettings.videoPrompts.showMemo} onChange={(event) => updatePageDisplay("videoPrompts", { showMemo: event.target.checked })} /></label>
              </div>
              <div className="page-display-panel">
                <strong>プロジェクト</strong>
                <label>並び順
                  <select value={pageSettings.projects.sortBy} onChange={(event) => updatePageDisplay("projects", { sortBy: event.target.value })}>
                    <option value="deadline">期限順</option>
                    <option value="created">作成順</option>
                    <option value="manual">保存順</option>
                  </select>
                </label>
                <label className="switch-row"><span>完了済みを表示</span><input type="checkbox" checked={pageSettings.projects.showCompleted} onChange={(event) => updatePageDisplay("projects", { showCompleted: event.target.checked })} /></label>
                <label className="switch-row"><span>期限アラームを表示</span><input type="checkbox" checked={pageSettings.projects.showAlarms} onChange={(event) => updatePageDisplay("projects", { showAlarms: event.target.checked })} /></label>
              </div>
              <div className="page-display-panel">
                <strong>モックアップ</strong>
                <label>カテゴリカードサイズ
                  <select value={pageSettings.mockups.categoryCardSize} onChange={(event) => updatePageDisplay("mockups", { categoryCardSize: event.target.value })}>
                    <option value="small">小さめ</option>
                    <option value="normal">標準</option>
                    <option value="large">大きめ</option>
                  </select>
                </label>
                <label className="switch-row"><span>説明文を表示</span><input type="checkbox" checked={pageSettings.mockups.showDescription} onChange={(event) => updatePageDisplay("mockups", { showDescription: event.target.checked })} /></label>
                <label className="switch-row"><span>件数を表示</span><input type="checkbox" checked={pageSettings.mockups.showCount} onChange={(event) => updatePageDisplay("mockups", { showCount: event.target.checked })} /></label>
              </div>
            </div>
          </section>
            </div>
          </details>

          <details className="customize-card customize-accordion">
            <summary><span>ホーム表示パーツ</span><b>⌄</b></summary>
            <div className="customize-accordion-body">
          <section className="customize-card customize-nested-card">
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

          <section className="customize-card customize-nested-card">
            <h3>ホーム件数カード設定</h3>
            <p>ホーム上部に表示する件数カードを選択できます。</p>
            <div className="toggle-list">
              {homeStatsCardOptions.map((item) => (
                <label className="switch-row" key={item.id}>
                  <span>{item.label}</span>
                  <input
                    type="checkbox"
                    checked={(settings.homeStatsCards || defaultHomeSettings.homeStatsCards)[item.id] !== false}
                    onChange={(event) => updateSettings({
                      homeStatsCards: {
                        ...(settings.homeStatsCards || defaultHomeSettings.homeStatsCards),
                        [item.id]: event.target.checked,
                      },
                    })}
                  />
                </label>
              ))}
            </div>
          </section>

          <section className="customize-card customize-nested-card">
            <h3>ホーム日付表示</h3>
            <p>ホーム上部に表示する年・月日・曜日の見た目を選べます。</p>
            <div className="preset-card-grid clock-style-grid">
              {homeClockStyleOptions.map((item) => (
                <button
                  key={item.id}
                  className={(settings.homeClockStyle || "pill") === item.id ? "active-soft" : ""}
                  onClick={() => updateSettings({ homeClockStyle: item.id })}
                >
                  <strong>{item.label}</strong>
                  <small>{item.description}</small>
                </button>
              ))}
            </div>
            <div className="clock-control-row">
              <div>
                <strong>サイズ</strong>
                <div className="inline-buttons">
                  {homeClockSizeOptions.map((item) => (
                    <button
                      key={item.id}
                      className={(settings.homeClockSize || "medium") === item.id ? "active-soft" : ""}
                      onClick={() => updateSettings({ homeClockSize: item.id })}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <strong>色味</strong>
                <div className="inline-buttons clock-color-buttons">
                  {homeClockColorOptions.map((item) => (
                    <button
                      key={item.id}
                      className={`clock-color-choice clock-color-${item.id} ${(settings.homeClockColor || "theme") === item.id ? "active-soft" : ""}`}
                      onClick={() => updateSettings({ homeClockColor: item.id })}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="customize-card customize-nested-card">
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
            </div>
          </details>

          <details className="customize-card customize-accordion">
            <summary><span>バックアップ・サンプル</span><b>⌄</b></summary>
            <div className="customize-accordion-body">
          <section className="customize-card backup-card customize-nested-card">
            <h3>バックアップ</h3>
            <p>大切なプロンプトや画像データを保存できます。機種変更やブラウザ変更前にバックアップしてください。</p>
            <p className="backup-storage-note">
              Prompt Atelierのデータは、このブラウザ内に保存されます。Dockのショートカットを削除しても通常は残りますが、ブラウザのサイトデータ削除や別ブラウザ利用では引き継がれない場合があります。大切なデータは定期的にバックアップを書き出してください。
            </p>
            <div className="backup-actions">
              <button className="primary" onClick={exportPromptAtelierBackup}>バックアップを書き出す</button>
              <button onClick={() => backupInputRef.current?.click()}>バックアップを読み込む</button>
            </div>
            <div className="developer-tools">
              <strong>配布用サンプルデータ</strong>
              <p>現在登録されているデータを、配布版に同梱するサンプルデータとして書き出します。</p>
              <button onClick={exportPromptAtelierSampleSeed}>現在のデータをサンプルとして書き出す</button>
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
            </div>
          </details>

          <section className="customize-card danger-zone">
            <h3>初期化</h3>
            <p>テーマ、バナー、表示項目、並び順を初期設定に戻します。</p>
            <button className="danger" onClick={reset}>初期設定に戻す</button>
          </section>
        </div>

        <aside className="customize-preview">
          <span>ホームプレビュー</span>
          <div
            className={`preview-shell home-mini-preview density-${settings.displayDensity || "normal"} ${previewClassName}`}
            data-density={settings.displayDensity || "normal"}
            data-card-radius={settings.cardStyle.radius}
            data-card-shadow={settings.cardStyle.shadow}
            data-card-transparency={settings.cardStyle.transparency}
            data-card-border={settings.cardStyle.border}
            data-background-type={settings.backgroundStyle.type}
            data-font-preset={settings.fontPreset || "simple"}
            data-icon-set={settings.iconSet || "line"}
            style={previewStyle}
          >
            <div className="home-mini-topbar">
              <strong>Prompt Atelier</strong>
              <HomeDateDisplay
                style={settings.homeClockStyle || "pill"}
                size={settings.homeClockSize || "medium"}
                color={settings.homeClockColor || "theme"}
                mini
              />
            </div>
            {settings.bannerVisible && (
              <div
                className={`preview-banner home-mini-banner ${settings.bannerSize || "medium"} fit-${settings.bannerFit || "contain"} ${bannerCanDrag ? "is-draggable" : ""}`}
                onPointerDown={startBannerDrag}
                onPointerMove={moveBannerDrag}
                onPointerUp={endBannerDrag}
                onPointerCancel={endBannerDrag}
                onLostPointerCapture={endBannerDrag}
              >
                {bannerSrc ? (
                  <>
                    <img
                      src={bannerSrc}
                      alt=""
                      draggable={false}
                      style={bannerImageStyle(bannerPosition)}
                    />
                    {bannerCanDrag && <span className="banner-drag-hint">画像をドラッグして表示位置を調整</span>}
                  </>
                ) : (
                  <div className="home-mini-banner-placeholder">
                    <span>今日の制作ボード</span>
                    <strong>Creative Board</strong>
                  </div>
                )}
              </div>
            )}
            {bannerImageValue && (
              <div className="preview-banner-actions">
                <button
                  type="button"
                  className="banner-reset-position"
                  onPointerDown={(event) => event.stopPropagation()}
                  onClick={(event) => { event.stopPropagation(); updateBannerPosition(50, 50, true); }}
                >
                  中央に戻す
                </button>
              </div>
            )}
            {settings.visible.dashboard !== false && previewDashboardItems.length > 0 && (
              <section className="home-mini-stats" aria-label="ミニ件数カード">
                {previewDashboardItems.map((item) => (
                  <article className="home-mini-stat" key={item.id}>
                    <span className="stat-icon" data-icon={item.icon}><FeatureIcon name={item.icon} /></span>
                    <small>{item.title}</small>
                    <strong>{item.value}</strong>
                  </article>
                ))}
              </section>
            )}
            {settings.visible.quickActions !== false && previewTools.length > 0 && (
              <section className={`home-mini-tools ${settings.workToolIconStyle || "pastel"}`} aria-label="ミニ作業ツール">
                {previewTools.map((tool: WorkTool) => (
                  <article className="home-mini-tool" key={tool.id}>
                    <span>{tool.iconImage ? <img src={imageThumbnail(tool.iconImage)} alt="" /> : <b>{tool.iconText || tool.name.slice(0, 2)}</b>}</span>
                    <small>{tool.name}</small>
                  </article>
                ))}
              </section>
            )}
            {settings.visible.featureCards !== false && previewFeatureEntries.length > 0 && (
              <section className="home-mini-features" aria-label="ミニメイン機能カード">
                {previewFeatureEntries.map(([id, label, icon]) => (
                  <article className="home-mini-feature" key={id}>
                    <span className="stat-icon" data-icon={icon}><FeatureIcon name={icon} /></span>
                    <strong>{label}</strong>
                  </article>
                ))}
              </section>
            )}
            {settings.visible.dashboard !== false && (projects || []).length > 0 && (
              <section className="home-mini-main-card">
                <div>
                  <span className="mini-pill">Project</span>
                  <h4>{(projects[0]?.name || "Project").slice(0, 18)}</h4>
                  <strong className="preview-number-text">{projects.length} Projects</strong>
                </div>
                <p>Today</p>
              </section>
            )}
          </div>
          <button className="primary preview-save-home" onClick={() => { setSettings(persistHomeSettings()); setScreen("home"); }}>
            保存してホームへ
          </button>
        </aside>
      </div>
      {showPwaInstructions && <PwaInstallInstructionsModal onClose={() => setShowPwaInstructions(false)} />}
      <PageBackButton className="page-bottom-back" label="ホームへ戻る" onClick={() => setScreen("home")} />
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
  if (name === "video") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="10" y="16" width="44" height="32" rx="8" />
        <path d="M27 25l13 7-13 7V25z" className="icon-fill" />
        <path d="M16 16v32M48 16v32" />
        <path d="M16 24h-5M16 32h-5M16 40h-5M58 24h-5M58 32h-5M58 40h-5" />
        <path d="M45 9l2-4 2 4 4 2-4 2-2 4-2-4-4-2 4-2z" />
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

function HomePromptCard({ prompt, onCopy }: any) {
  const isProjectMemo = prompt.favoriteType === "projectMemo";
  const copyValue = isProjectMemo ? prompt.body : prompt.prompt;
  return (
    <article className={`home-prompt-card ${isProjectMemo ? "project-memo-favorite-card" : ""}`.trim()}>
      {isProjectMemo ? (
        <div className="home-memo-cover">
          <span>MEMO</span>
        </div>
      ) : (
        <img src={imageDisplaySrc(prompt.imageUrl) || art("プロンプト", "#f5eadc", "#e7e7df")} alt="" />
      )}
      <div className="home-prompt-body">
        <span className="mini-pill">{isProjectMemo ? "プロジェクトメモ" : prompt.category}</span>
        <h3>{prompt.title}</h3>
        {isProjectMemo && <p className="home-memo-excerpt">{prompt.body}</p>}
        <div className="home-card-bottom">
          <div className="tiny-tags">
            {!isProjectMemo && (prompt.tags || []).slice(0, 2).map((tag: string) => <span key={tag}>#{tag}</span>)}
          </div>
          <button className="copy-chip" onClick={() => onCopy(copyValue, prompt.id)}>コピー</button>
        </div>
      </div>
    </article>
  );
}

function Library({ copyText, setScreen, homeSettings, boardPrompts, setBoardPrompts }: any) {
  const [query, setQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<MockupCategory | null>(null);
  const [editingCategory, setEditingCategory] = React.useState<MockupCategory | null>(null);
  const [editingPrompt, setEditingPrompt] = React.useState<LibraryBoardPrompt | null>(null);
  const [memoPrompt, setMemoPrompt] = React.useState<LibraryBoardPrompt | null>(null);
  const [inlineEdit, setInlineEdit] = React.useState<{ id: string; field: string } | null>(null);
  const [stockFrameCounts, setStockFrameCounts] = React.useState<Record<string, number>>({});
  const [draggedCategoryId, setDraggedCategoryId] = React.useState("");
  const [dragOverCategoryId, setDragOverCategoryId] = React.useState("");
  const [armedCategoryId, setArmedCategoryId] = React.useState("");
  const categoryDragMovedRef = React.useRef(false);
  const categoryMoveGuardRef = React.useRef("");
  const [boardCategories, setBoardCategories] = useStoredState<MockupCategory[]>("prompt-atelier-mockup-categories-v2", defaultMockupCategories);
  const mockupDisplay = homeSettings?.pageDisplaySettings?.mockups || defaultPageDisplaySettings.mockups;
  const orderedCategories = React.useMemo(() => normalizeMockupCategoryOrder(boardCategories), [boardCategories]);
  const currentCategory = selectedCategory ? orderedCategories.find((category) => category.id === selectedCategory.id) || selectedCategory : null;
  const isCategorySearching = false;
  const filteredCategories = orderedCategories;
  const filteredPrompts = boardPrompts.filter((item) => {
    return item.categoryId === currentCategory?.id;
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
    categoryId: currentCategory?.id || orderedCategories[0]?.id || "",
    description: "",
    prompt: "",
    memo: "",
    tags: [],
    imageUrl: "",
    coverImages: [],
    japaneseTranslation: "",
    favorite: false,
    isTextStock: textOnly,
  });
  const saveCategory = (item: MockupCategory) => {
    const coverImages = getCoverImages(item);
    const coverImage = coverImages[0] || item.coverImage || art("カテゴリ", "#f8e6e1", "#dce7d7");
    const next = { ...item, id: item.id || uid(), coverImage, coverImages: coverImages.length ? coverImages : [coverImage] };
    setBoardCategories((items: MockupCategory[]) => {
      const normalized = normalizeMockupCategoryOrder(items);
      if (item.id) {
        const existing = normalized.find((category) => category.id === item.id);
        return normalizeMockupCategoryOrder(normalized.map((category) => category.id === item.id ? { ...next, order: next.order ?? existing?.order } : category));
      }
      const maxOrder = normalized.reduce((max, category) => Math.max(max, category.order || 0), 0);
      return normalizeMockupCategoryOrder([...normalized, { ...next, order: maxOrder + 1 }]);
    });
    setEditingCategory(null);
  };
  const savePrompt = (item: LibraryBoardPrompt) => {
    const category = orderedCategories.find((category) => category.id === item.categoryId) || currentCategory || orderedCategories[0];
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
      coverImages: item.isTextStock ? [] : getCoverImages(item),
      imageUrl: item.isTextStock ? "" : primaryCoverImage(item) || item.imageUrl || "",
      japaneseTranslation: item.japaneseTranslation || item.prompt,
      memo: item.memo || "",
      tags: item.tags || [],
      isTextStock: Boolean(item.isTextStock),
    };
    setBoardPrompts((items: LibraryBoardPrompt[]) => item.id ? items.map((prompt) => prompt.id === item.id ? next : prompt) : [...items, next]);
    setEditingPrompt(null);
  };
  const duplicateCategory = (item: MockupCategory) => {
    setBoardCategories((items: MockupCategory[]) => {
      const normalized = normalizeMockupCategoryOrder(items);
      const maxOrder = normalized.reduce((max, category) => Math.max(max, category.order || 0), 0);
      return normalizeMockupCategoryOrder([...normalized, { ...item, id: uid(), title: `${item.title} コピー`, order: maxOrder + 1 }]);
    });
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
  const deleteCategory = (id: string) => {
    setBoardCategories((items: MockupCategory[]) => {
      rememberDeletedSampleIdsFromItems(items.find((item) => item.id === id));
      return normalizeMockupCategoryOrder(items.filter((item) => item.id !== id));
    });
  };
  const deleteBoardPrompt = (id: string) => {
    setBoardPrompts((items: LibraryBoardPrompt[]) => {
      rememberDeletedSampleIdsFromItems(items.find((item) => item.id === id));
      return items.filter((item) => item.id !== id);
    });
  };
  const persistCategoryOrder = (items: MockupCategory[]) => {
    const next = assignMockupCategoryOrder(items);
    setBoardCategories(next);
    try {
      localStorage.setItem("prompt-atelier-mockup-categories-v2", JSON.stringify(next));
    } catch (error) {
      console.warn("[Prompt Atelier] カテゴリ順の保存に失敗しました", error);
    }
  };
  const reorderCategories = (sourceId: string, targetId: string) => {
    if (isCategorySearching || !sourceId || !targetId || sourceId === targetId) return;
    const normalized = normalizeMockupCategoryOrder(orderedCategories);
    const fromIndex = normalized.findIndex((category) => category.id === sourceId);
    const toIndex = normalized.findIndex((category) => category.id === targetId);
    if (fromIndex < 0 || toIndex < 0) return;
    const next = [...normalized];
    const [moved] = next.splice(fromIndex, 1);
    next.splice(toIndex, 0, moved);
    persistCategoryOrder(next);
  };
  const categoryIdFromPoint = (x: number, y: number, sourceId: string) => {
    let closestId = "";
    let closestDistance = Number.POSITIVE_INFINITY;
    document.querySelectorAll<HTMLElement>("[data-category-id]").forEach((card) => {
      const categoryId = card.dataset.categoryId || "";
      if (!categoryId || categoryId === sourceId) return;
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distance = Math.hypot(centerX - x, centerY - y);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestId = categoryId;
      }
    });
    return closestId;
  };
  const reorderCategoryByDirection = (sourceId: string, direction: -1 | 1) => {
    if (!sourceId) return;
    const normalized = normalizeMockupCategoryOrder(orderedCategories);
    const fromIndex = normalized.findIndex((category) => category.id === sourceId);
    const toIndex = fromIndex + direction;
    if (fromIndex < 0 || toIndex < 0 || toIndex >= normalized.length) return;
    const next = [...normalized];
    const [moved] = next.splice(fromIndex, 1);
    next.splice(toIndex, 0, moved);
    persistCategoryOrder(next);
  };
  const triggerCategoryMove = (event: React.MouseEvent | React.PointerEvent, categoryId: string, direction: -1 | 1) => {
    event.preventDefault();
    event.stopPropagation();
    const guardKey = `${categoryId}:${direction}:${Math.floor(Date.now() / 160)}`;
    if (categoryMoveGuardRef.current === guardKey) return;
    categoryMoveGuardRef.current = guardKey;
    reorderCategoryByDirection(categoryId, direction);
  };
  const handleCategoryKeyDown = (event: React.KeyboardEvent, categoryId: string) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      event.stopPropagation();
      reorderCategoryByDirection(categoryId, -1);
    }
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      event.stopPropagation();
      reorderCategoryByDirection(categoryId, 1);
    }
  };
  const startCategoryPointerDrag = (event: React.PointerEvent, categoryId: string) => {
    if (isCategorySearching) return;
    event.preventDefault();
    event.stopPropagation();
    (event.currentTarget as HTMLElement).setPointerCapture?.(event.pointerId);
    let targetId = categoryId;
    let moved = false;
    const startX = event.clientX;
    const startY = event.clientY;
    categoryDragMovedRef.current = false;
    document.body.classList.add("is-category-reordering");
    setDraggedCategoryId(categoryId);
    setDragOverCategoryId("");
    const handleMove = (moveEvent: PointerEvent) => {
      moveEvent.preventDefault();
      const movedDistance = Math.hypot(moveEvent.clientX - startX, moveEvent.clientY - startY);
      if (movedDistance > 4) {
        moved = true;
        categoryDragMovedRef.current = true;
      }
      const nextTargetId = categoryIdFromPoint(moveEvent.clientX, moveEvent.clientY, categoryId);
      if (nextTargetId && nextTargetId !== targetId) {
        targetId = nextTargetId;
        setDragOverCategoryId(nextTargetId);
      }
    };
    const handleEnd = (endEvent: PointerEvent) => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleEnd);
      window.removeEventListener("pointercancel", handleEnd);
      document.body.classList.remove("is-category-reordering");
      const finalTargetId = categoryIdFromPoint(endEvent.clientX, endEvent.clientY, categoryId) || targetId;
      if (moved && finalTargetId && finalTargetId !== categoryId) {
        reorderCategories(categoryId, finalTargetId);
      } else if (moved) {
        const deltaX = endEvent.clientX - startX;
        const deltaY = endEvent.clientY - startY;
        const mainDelta = Math.abs(deltaX) >= Math.abs(deltaY) ? deltaX : deltaY;
        if (Math.abs(mainDelta) > 24) {
          reorderCategoryByDirection(categoryId, mainDelta > 0 ? 1 : -1);
        }
      }
      setDraggedCategoryId("");
      setDragOverCategoryId("");
    };
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleEnd);
    window.addEventListener("pointercancel", handleEnd);
  };
  const handleCategoryHandleClick = (event: React.MouseEvent, categoryId: string) => {
    event.preventDefault();
    event.stopPropagation();
    if (categoryDragMovedRef.current) {
      categoryDragMovedRef.current = false;
      setArmedCategoryId("");
      return;
    }
    if (!armedCategoryId) {
      setArmedCategoryId(categoryId);
      return;
    }
    if (armedCategoryId !== categoryId) {
      reorderCategories(armedCategoryId, categoryId);
    }
    setArmedCategoryId("");
  };
  return (
    <section className={`page library-page mockup-card-size-${mockupDisplay.categoryCardSize || "normal"} ${mockupDisplay.showDescription === false ? "mockup-hide-description" : ""} ${mockupDisplay.showCount === false ? "mockup-hide-count" : ""}`}>
      {!currentCategory ? (
        <>
          <PageHead
            title="モックアップライブラリ"
            action={<div className="actions"><PageBackButton label="ホームへ戻る" onClick={() => setScreen("home")} /><button className="primary" onClick={() => setEditingCategory({ id: "", title: "", description: "", coverImage: "" })}>＋ カテゴリを追加</button></div>}
          />
          <div className="library-intro">
            <p>販売画像づくりに使うモックアップを、Pinterestのボードのようにカテゴリで整理できます。</p>
          </div>
          <div className="library-category-grid">
            {filteredCategories.map((category) => (
              <article
                className={`library-category-card ${draggedCategoryId === category.id || armedCategoryId === category.id ? "is-dragging" : ""} ${dragOverCategoryId === category.id && draggedCategoryId !== category.id ? "is-drag-over" : ""}`}
                key={category.id}
                data-category-id={category.id}
              >
                <div className="category-reorder-controls" onClick={(event) => event.stopPropagation()}>
                  <button
                    type="button"
                    className="category-drag-handle"
                    aria-label={`${category.title}を並び替え`}
                    title="ドラッグして並び替え"
                    onClick={(event) => handleCategoryHandleClick(event, category.id)}
                    onKeyDown={(event) => handleCategoryKeyDown(event, category.id)}
                    onPointerDown={(event) => startCategoryPointerDrag(event, category.id)}
                    disabled={isCategorySearching}
                  >
                    ⋮⋮
                  </button>
                </div>
                <MenuButton
                  onEdit={() => setEditingCategory(category)}
                  onDuplicate={() => duplicateCategory(category)}
                  onImage={() => setEditingCategory(category)}
                  onDelete={() => deleteCategory(category.id)}
                />
                <button className="category-open" onClick={() => { setSelectedCategory(category); setQuery(""); }}>
                  <CoverImageCarousel item={category} className="category-cover-carousel" placeholderLabel="カテゴリ" />
                  <span>{category.title}</span>
                  {mockupDisplay.showDescription !== false && <small>{category.description}</small>}
                  {mockupDisplay.showCount !== false && <em className="category-count-label">{boardPrompts.filter((prompt) => prompt.categoryId === category.id).length}件</em>}
                </button>
              </article>
            ))}
          </div>
          <PageBackButton className="page-bottom-back" label="ホームへ戻る" onClick={() => setScreen("home")} />
        </>
      ) : (
        <>
          <PageBackButton label="ライブラリへ戻る" onClick={() => { setSelectedCategory(null); setQuery(""); }} />
          <div className="library-detail-head">
            <CoverImageCarousel item={currentCategory} className="library-detail-cover" placeholderLabel="カテゴリ" />
            <div>
              <h2>{currentCategory.title}</h2>
              <p>{currentCategory.description}</p>
            </div>
            <span className="prompt-count-pill">画像 {imagePrompts.length} / 20・ストック {textStockCount} / 100</span>
          </div>
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
                  deletePrompt={() => deleteBoardPrompt(prompt.id)}
                  copyText={copyText}
                  showMemo={() => setMemoPrompt(prompt)}
                  showTags={true}
                  showMemoButton={true}
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
          <PageBackButton className="page-bottom-back" label="ライブラリへ戻る" onClick={() => { setSelectedCategory(null); setQuery(""); }} />
        </>
      )}
      {editingCategory && <MockupCategoryModal item={editingCategory} onClose={() => setEditingCategory(null)} onSave={saveCategory} />}
      {editingPrompt && <LibraryPromptModal item={editingPrompt} categories={orderedCategories} onClose={() => setEditingPrompt(null)} onSave={savePrompt} />}
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

function CoverImageCarousel({ item, className = "", placeholderLabel = "画像" }: any) {
  const images = getCoverImages(item);
  const [isHovering, setIsHovering] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    if (!isHovering || images.length <= 1) {
      setIndex(0);
      return;
    }
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, 1800);
    return () => window.clearInterval(timer);
  }, [isHovering, images.length]);
  const currentImage = images[index] || images[0];
  return (
    <div
      className={`cover-image-carousel ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {currentImage ? (
        <img src={imageDisplaySrc(currentImage)} alt="" />
      ) : (
        <div className="image-placeholder" aria-label={`${placeholderLabel}未設定`}>
          <svg viewBox="0 0 64 64" aria-hidden="true">
            <rect x="12" y="16" width="40" height="32" rx="7" />
            <path d="M18 41l10-10 8 8 5-5 7 7" />
            <circle cx="42" cy="25" r="4" />
          </svg>
        </div>
      )}
      {images.length > 1 && (
        <div className="cover-image-dots" aria-hidden="true">
          {images.map((_: any, dotIndex: number) => <span className={dotIndex === index ? "active" : ""} key={dotIndex} />)}
        </div>
      )}
    </div>
  );
}

function CoverImageUploader({ item, onChange, category = "prompt" }: any) {
  const [message, setMessage] = React.useState("");
  const [urlDraft, setUrlDraft] = React.useState("");
  const images = getCoverImages(item);
  const applyImages = (nextImages: any[]) => {
    onChange(nextImages.filter(Boolean).slice(0, 3));
  };
  const addImages = async (files: FileList | File[]) => {
    const supported = Array.from(files).filter(isSupportedImageFile);
    if (!supported.length) return;
    const available = Math.max(0, 3 - images.length);
    if (!available) {
      setMessage("見出し画像は最大3枚までです");
      return;
    }
    if (supported.length > available) setMessage("見出し画像は最大3枚までです");
    try {
      const optimized = await Promise.all(supported.slice(0, available).map(async (file) => saveImageToStorage(await optimizeImage(file, category))));
      applyImages([...images, ...optimized]);
    } catch (error) {
      console.error("[Prompt Atelier] 見出し画像の追加に失敗しました", error);
      setMessage("画像を追加できませんでした。jpg / png / webp を選んでください。");
    }
  };
  const addUrl = () => {
    const value = urlDraft.trim();
    if (!value) return;
    if (images.length >= 3) {
      setMessage("見出し画像は最大3枚までです");
      return;
    }
    applyImages([...images, value]);
    setUrlDraft("");
    setMessage("");
  };
  return (
    <div
      className="cover-image-uploader"
      onClick={(event) => event.stopPropagation()}
      onDragOver={(event) => event.preventDefault()}
      onDrop={(event) => {
        event.preventDefault();
        event.stopPropagation();
        addImages(event.dataTransfer.files);
      }}
      onPaste={(event) => {
        const files = clipboardImageFiles(event);
        if (!files.length) return;
        event.preventDefault();
        event.stopPropagation();
        addImages(files);
      }}
    >
      <div className="cover-image-strip">
        {images.map((image: any, index: number) => (
          <div className="cover-image-thumb" key={`${imageDisplaySrc(image)}-${index}`}>
            <img src={imageDisplaySrc(image)} alt="" />
            <button type="button" onClick={() => applyImages(images.filter((_: any, imageIndex: number) => imageIndex !== index))}>削除</button>
          </div>
        ))}
        {images.length < 3 && (
          <label className="cover-image-add">
            <span>＋</span>
            <small>画像を追加</small>
            <input type="file" accept="image/png,image/jpeg,image/webp" multiple onChange={(event) => addImages(event.target.files || [])} />
          </label>
        )}
      </div>
      <p className="cover-image-help">見出し画像は最大3枚まで設定できます</p>
      <div className="cover-image-url-row">
        <input value={urlDraft} onChange={(event) => setUrlDraft(event.target.value)} placeholder="画像URLを追加" />
        <button type="button" onClick={addUrl}>追加</button>
      </div>
      {message && <p className="cover-image-message">{message}</p>}
    </div>
  );
}

function LibraryImagePromptCard({ prompt, inlineEdit, setInlineEdit, updatePrompt, duplicatePrompt, deletePrompt, copyText, showMemo, showTags = true, showMemoButton = true }: any) {
  const updateCoverImages = (coverImages: any[]) => updatePrompt(prompt.id, { coverImages, imageUrl: coverImages[0] || "" });
  return (
    <article className="library-prompt-card">
      <button
        className="prompt-favorite-button image-prompt-heart"
        aria-label={prompt.favorite ? "お気に入りを解除" : "お気に入りに追加"}
        onClick={(event) => {
          event.stopPropagation();
          updatePrompt(prompt.id, { favorite: !prompt.favorite });
        }}
      >
        {prompt.favorite ? "♥" : "♡"}
      </button>
      <PromptMenuButton
        onDuplicate={() => duplicatePrompt(prompt)}
        onClearImage={() => updatePrompt(prompt.id, { imageUrl: "", coverImages: [] })}
        onDelete={deletePrompt}
      />
      <CoverImageCarousel item={prompt} placeholderLabel="プロンプト画像" />
      <CoverImageUploader item={prompt} category="prompt" onChange={updateCoverImages} />
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
        {showTags && Array.isArray(prompt.tags) && prompt.tags.length > 0 && <TagRow tags={prompt.tags.slice(0, 4)} />}
        <div className="prompt-card-actions">
          <button className="primary" onClick={(event) => { event.stopPropagation(); copyText(prompt.prompt, prompt.id); }}>📋 プロンプトをコピー</button>
          {showMemoButton && <button onClick={(event) => { event.stopPropagation(); showMemo(); }}>メモ</button>}
        </div>
      </div>
    </article>
  );
}

function TextStockFrame({ prompt, blankPrompt, onCreate, onUpdate, onDelete, copyText, showMemo }: any) {
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
  const toggleFavorite = (event: any) => {
    event.stopPropagation();
    const nextFavorite = !prompt?.favorite;
    if (isSaved) {
      onUpdate(prompt.id, { favorite: nextFavorite });
      return;
    }
    save({ favorite: nextFavorite });
  };
  return (
    <article className="text-stock-frame">
      <button
        className="prompt-favorite-button text-stock-heart"
        aria-label={prompt?.favorite ? "お気に入りを解除" : "お気に入りに追加"}
        onClick={toggleFavorite}
        disabled={!isSaved && !title.trim() && !promptText.trim()}
      >
        {prompt?.favorite ? "♥" : "♡"}
      </button>
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
        {isSaved && onDelete && (
          <button
            className="danger text-stock-delete"
            onClick={(event) => {
              event.stopPropagation();
              onDelete(prompt.id);
            }}
          >
            削除
          </button>
        )}
      </div>
    </article>
  );
}

function PromptThumbnail({ imageUrl }: { imageUrl?: string }) {
  if (imageUrl) return <img src={imageDisplaySrc(imageUrl)} alt="" />;
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
    const image = saveImageToStorage(await optimizeImage(file, "prompt"));
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
          <input type="file" accept="image/png,image/jpeg,image/webp" onChange={(event) => readImage(event, (imageUrl) => setDraft(imageUrl), "prompt")} />
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

async function readImage(event: any, onLoad: (value: string) => void, category = "prompt") {
  event?.preventDefault?.();
  event?.stopPropagation?.();
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const image = saveImageToStorage(category === "banner" ? await optimizeBannerImage(file) : await optimizeImage(file, category));
    onLoad(image.src);
  } catch (error) {
    console.error("[Prompt Atelier] 画像の最適化に失敗しました", error);
    window.alert("画像を追加できませんでした。jpg / png / webp を選んでください。");
  }
}

async function readBannerImage(event: any, onLoad: (value: string) => void) {
  event?.preventDefault?.();
  event?.stopPropagation?.();
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const image = await optimizeBannerImage(file);
    onLoad(image.src);
  } catch (error) {
    console.error("[Prompt Atelier] バナー画像の最適化に失敗しました", error);
    window.alert("バナー画像を追加できませんでした。jpg / png / webp を選んでください。");
  }
}

function MockupCategoryModal({ item, onClose, onSave }: any) {
  const [draft, setDraft] = React.useState({ ...item });
  const setCoverImages = (coverImages: any[]) => setDraft({ ...draft, coverImages, coverImage: coverImages[0] || "" });
  return (
    <Modal title={item.id ? "カテゴリを編集" : "カテゴリを追加"} onClose={onClose}>
      <FormGrid>
        <input value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} placeholder="タイトル" />
        <textarea value={draft.description} onChange={(e) => setDraft({ ...draft, description: e.target.value })} placeholder="説明文" />
        <CoverImageUploader item={draft} category="mockup" onChange={setCoverImages} />
      </FormGrid>
      <ModalActions onClose={onClose} onSave={() => onSave(draft)} />
    </Modal>
  );
}

function LibraryPromptModal({ item, categories, onClose, onSave }: any) {
  const [draft, setDraft] = React.useState({ ...item });
  const setCoverImages = (coverImages: any[]) => setDraft({ ...draft, coverImages, imageUrl: coverImages[0] || "" });
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
        <CoverImageUploader item={draft} category="mockup" onChange={setCoverImages} />
      </FormGrid>
      <ModalActions onClose={onClose} onSave={() => onSave(draft)} />
    </Modal>
  );
}

const DEFAULT_FOLDER_NAME = "未分類";

function folderNameOf(item: any) {
  return String(item?.folder || DEFAULT_FOLDER_NAME).trim() || DEFAULT_FOLDER_NAME;
}

function readFolderList(key: string) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(parsed) ? parsed.filter(Boolean).map(String) : [];
  } catch {
    return [];
  }
}

function saveFolderList(key: string, folders: string[]) {
  try {
    localStorage.setItem(key, JSON.stringify(folders));
  } catch (error) {
    console.warn("[Prompt Atelier] ファイル一覧の保存に失敗しました", key, error);
  }
}

function groupedByFolder<T>(items: T[], folderNames: string[] = []) {
  const groups: { name: string; items: T[] }[] = [];
  const ensureGroup = (name: string) => {
    const safeName = String(name || DEFAULT_FOLDER_NAME).trim() || DEFAULT_FOLDER_NAME;
    let group = groups.find((entry) => entry.name === safeName);
    if (!group) {
      group = { name: safeName, items: [] };
      groups.push(group);
    }
    return group;
  };
  folderNames.forEach(ensureGroup);
  items.forEach((item: any) => {
    ensureGroup(folderNameOf(item)).items.push(item);
  });
  return groups;
}

function createFolderName(existing: string[], label: string) {
  const raw = window.prompt(`の新しいファイル名を入力してください`);
  const name = String(raw || "").trim();
  if (!name) return "";
  if (existing.includes(name)) {
    window.alert("同じ名前のファイルがすでにあります");
    return "";
  }
  return name;
}

function PromptBook({ prompts, setPrompts, copyText, setScreen, homeSettings }: any) {
  const [tag, setTag] = React.useState("すべて");
  const [favoritesOnly, setFavoritesOnly] = React.useState(false);
  const [editing, setEditing] = React.useState<MyPrompt | null>(null);
  const [translationPrompt, setTranslationPrompt] = React.useState<MyPrompt | null>(null);
  const [memoPrompt, setMemoPrompt] = React.useState<MyPrompt | null>(null);
  const [inlineEdit, setInlineEdit] = React.useState<{ id: string; field: string } | null>(null);
  const [stockFrameCount, setStockFrameCount] = React.useState(5);
  const [viewMode, setViewMode] = React.useState<"list" | "folders">("list");
  const [promptFolders, setPromptFolders] = React.useState<string[]>(() => readFolderList("promptAtelierPromptFolders"));
  const promptDisplay = homeSettings?.pageDisplaySettings?.prompts || defaultPageDisplaySettings.prompts;
  const tags = Array.from(new Set(prompts.flatMap((p: MyPrompt) => p.tags))).sort();
  const filtered = prompts.filter((item: MyPrompt) => {
    return (tag === "すべて" || item.tags.includes(tag)) && (!favoritesOnly || item.favorite);
  });
  const imagePrompts = filtered.filter((item: MyPrompt) => !item.isTextStock).slice(0, 20);
  const textPrompts = filtered.filter((item: MyPrompt) => item.isTextStock);
  const imagePromptCount = prompts.filter((item: MyPrompt) => !item.isTextStock).length;
  const textStockCount = prompts.filter((item: MyPrompt) => item.isTextStock).length;
  const canAddImagePrompt = imagePromptCount < 20;
  const canAddTextStock = textStockCount < 100;
  const imageSlotCount = imagePrompts.length < 20 ? Math.max(8, Math.ceil((imagePrompts.length + 1) / 4) * 4) : 20;
  const imagePromptSlots = Array.from({ length: imageSlotCount }, (_, index) => imagePrompts[index] || null);
  const promptFolderGroups = groupedByFolder(filtered, promptFolders);
  const addPromptFolder = () => {
    const name = createFolderName(promptFolders, "プロンプト帳");
    if (!name) return;
    const next = [...promptFolders, name];
    setPromptFolders(next);
    saveFolderList("promptAtelierPromptFolders", next);
    setViewMode("folders");
  };
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
      coverImages: item.isTextStock ? [] : getCoverImages(item),
      imageUrl: item.isTextStock ? "" : primaryCoverImage(item) || item.imageUrl || "",
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
  const deletePrompt = (id: string) => {
    setPrompts((items: MyPrompt[]) => {
      rememberDeletedSampleIdsFromItems(items.find((item) => item.id === id));
      return items.filter((item) => item.id !== id);
    });
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
    <section className={`page prompt-book-page prompt-view-${promptDisplay.viewMode || "card"} prompt-image-${promptDisplay.imageSize || "normal"} ${promptDisplay.showTags === false ? "prompt-hide-tags" : ""} ${promptDisplay.showMemo === false ? "prompt-hide-memo" : ""}`}>
      <PageHead title="プロンプト帳" action={<div className="actions"><span className="prompt-count-pill">画像 {imagePromptCount} / 20・ストック {textStockCount} / 100</span><PageBackButton label="ホームへ戻る" onClick={() => setScreen("home")} /></div>} />
      <div className="folder-view-toolbar">
        <div className="folder-view-tabs" role="group" aria-label="プロンプト帳の表示切り替え">
          <button className={viewMode === "list" ? "active-soft" : ""} onClick={() => setViewMode("list")}>一覧</button>
          <button className={viewMode === "folders" ? "active-soft" : ""} onClick={() => setViewMode("folders")}>ファイル別</button>
        </div>
        <button className="folder-create-button" onClick={addPromptFolder}>＋ 新しいファイル</button>
      </div>
      <Filters>
        <select value={tag} onChange={(e) => setTag(e.target.value)}>
          <option>すべて</option>
          {tags.map((item: string) => <option key={item}>{item}</option>)}
        </select>
        <label className="check"><input type="checkbox" checked={favoritesOnly} onChange={(e) => setFavoritesOnly(e.target.checked)} /> お気に入りのみ</label>
      </Filters>
      {viewMode === "folders" ? (
        <div className="folder-board">
          {promptFolderGroups.map((group) => (
            <section className="folder-panel" key={group.name}>
              <div className="folder-cover">
                <span>ファイル</span>
                <strong>{group.name}</strong>
                <small>{group.items.length}件</small>
              </div>
              {group.items.length ? (
                <div className="library-prompt-grid">
                  {group.items.map((prompt: any) => !prompt.isTextStock ? (
                    <LibraryImagePromptCard
                      key={prompt.id}
                      prompt={prompt}
                      inlineEdit={inlineEdit}
                      setInlineEdit={setInlineEdit}
                      updatePrompt={updatePrompt}
                      duplicatePrompt={duplicatePrompt}
                      deletePrompt={() => deletePrompt(prompt.id)}
                      copyText={copyText}
                      showTranslation={() => setTranslationPrompt(prompt)}
                      showMemo={() => setMemoPrompt(prompt)}
                      showTags={promptDisplay.showTags !== false}
                      showMemoButton={promptDisplay.showMemo !== false}
                    />
                  ) : (
                    <TextStockFrame
                      key={prompt.id}
                      prompt={prompt}
                      blankPrompt={blankPrompt(true)}
                      onCreate={saveTextStockFrame}
                      onUpdate={updatePrompt}
                      onDelete={deletePrompt}
                      copyText={copyText}
                      showTranslation={() => setTranslationPrompt(prompt)}
                      showMemo={() => setMemoPrompt(prompt)}
                    />
                  ))}
                </div>
              ) : <p className="folder-empty-text">このファイルにはまだ項目がありません。</p>}
            </section>
          ))}
        </div>
      ) : (
        <>
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
              deletePrompt={() => deletePrompt(prompt.id)}
              copyText={copyText}
              showTranslation={() => setTranslationPrompt(prompt)}
              showMemo={() => setMemoPrompt(prompt)}
              showTags={promptDisplay.showTags !== false}
              showMemoButton={promptDisplay.showMemo !== false}
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
              onDelete={deletePrompt}
              copyText={copyText}
              showTranslation={() => prompt && setTranslationPrompt(prompt)}
              showMemo={() => prompt && setMemoPrompt(prompt)}
            />
          ))}
        </div>
        {canAddTextStock && (
          <button className="add-stock-button" onClick={addTextStockFrame}>＋ プロンプトを追加</button>
        )}
        {!canAddTextStock && <p className="limit-message">保存上限（100件）に達しました</p>}
      </section>
      </>
      )}
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
      <PageBackButton className="page-bottom-back" label="ホームへ戻る" onClick={() => setScreen("home")} />
    </section>
  );
}

function Midjourney({ settings, setSettings, copyText, setScreen }: any) {
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
      <PageHead title="Midjourneyパラメータ制作ボード" action={<div className="actions"><PageBackButton label="ホームへ戻る" onClick={() => setScreen("home")} /><button className="primary" onClick={save} disabled={!canSave}>完成プロンプトを保存</button></div>} />
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
              <h3>保存済みMJプロンプト</h3>
              <p>保存したMJプロンプトと登録画像を一覧で確認できます。</p>
            </div>
            <div className="mj-image-search">
              <strong>画像から探す</strong>
              <div className="mj-image-search-grid">
                {imageSearchItems.length ? imageSearchItems.map((item) => (
                  <button key={`${item.cardId}-${item.index}-${imageSrc(item.image)}`} onClick={() => jumpToCard(item.cardId)}>
                    <img src={imageDisplaySrc(item.image)} alt="" />
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
                  onDelete={() => setSettings((items: MjSetting[]) => {
                    rememberDeletedSampleIdsFromItems(items.find((setting) => setting.id === item.id));
                    return items.filter((setting) => setting.id !== item.id);
                  })}
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
      <PageBackButton className="page-bottom-back" label="ホームへ戻る" onClick={() => setScreen("home")} />
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
  const image = saveImageToStorage(await optimizeImage(file, "midjourney"));
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
    const nextImages = await Promise.all(files.map((file) => optimizeImage(file, "midjourney")));
    nextImages.forEach((image, index) => console.log("[MJ画像追加] base64 prefix:", image.src.slice(0, 30), "file:", files[index]?.name, "cardId:", item.id));
    const updatedImages = [...images, ...nextImages].slice(0, 5);
    console.log("[MJ画像追加] updated images length:", updatedImages.length, "cardId:", item.id);
    setImageMessage("");
    onUpdate({ images: updatedImages, imageUrl: updatedImages[0]?.src || "" });
    scheduleStorageWarningCheck();
  };
  const removeImage = (index: number) => {
    const updatedImages = images.filter((_: any, imageIndex: number) => imageIndex !== index);
    onUpdate({ images: updatedImages, imageUrl: updatedImages[0]?.src || "" });
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
              <img src={imageDisplaySrc(images[slideIndex] || images[0])} alt="" />
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
    imageUrl: images[0]?.src || item.imageUrl || "",
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

function GalleryPage({ images, setImages, setJournal, setScreen, homeSettings }: any) {
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);
  const loadMoreRef = React.useRef<HTMLDivElement | null>(null);
  const [previewId, setPreviewId] = React.useState("");
  const [visibleCount, setVisibleCount] = React.useState(20);
  const [viewMode, setViewMode] = React.useState<"list" | "folders">("list");
  const [galleryFolders, setGalleryFolders] = React.useState<string[]>(() => readFolderList("promptAtelierGalleryFolders"));
  const preview = images.find((image: AtelierImage) => image.id === previewId) || null;
  const galleryDisplay = homeSettings?.pageDisplaySettings?.gallery || defaultPageDisplaySettings.gallery;
  const visibleImages = images.slice(0, visibleCount);
  const galleryFolderGroups = groupedByFolder(images, galleryFolders);
  const addGalleryFolder = () => {
    const name = createFolderName(galleryFolders, "ギャラリー");
    if (!name) return;
    const next = [...galleryFolders, name];
    setGalleryFolders(next);
    saveFolderList("promptAtelierGalleryFolders", next);
    setViewMode("folders");
  };
  React.useEffect(() => {
    setVisibleCount(20);
  }, [images.length]);
  React.useEffect(() => {
    if (!loadMoreRef.current || visibleCount >= images.length) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setVisibleCount((count) => Math.min(count + 20, images.length));
      }
    }, { rootMargin: "320px" });
    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [images.length, visibleCount]);
  const addFiles = async (fileList: FileList | File[]) => {
    const files = Array.from(fileList).filter(isSupportedImageFile);
    if (!files.length) return;
    const remaining = 200 - images.length;
    if (remaining <= 0) {
      window.alert("ギャラリー画像は最大200枚までです");
      return;
    }
    const optimizedImages = await Promise.all(files.slice(0, remaining).map((file) => optimizeImage(file, "gallery")));
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
    scheduleStorageWarningCheck();
  };
  const updateImage = (id: string, patch: Partial<AtelierImage>) => {
    setImages((items: AtelierImage[]) => items.map((item) => item.id === id ? { ...item, ...patch } : item));
  };
  const deleteImage = (id: string) => {
    setImages((items: AtelierImage[]) => {
      rememberDeletedSampleIdsFromItems(items.find((item) => item.id === id));
      return items.filter((item) => item.id !== id);
    });
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
      stickerEffect: true,
    };
    setJournal((current: JournalState) => ({ ...current, items: [...(current.items || []), item] }));
    setScreen("journal");
  };
  return (
    <section
      className={`page gallery-page gallery-gap-${galleryDisplay.gap || "normal"} gallery-ratio-${galleryDisplay.ratio || "square"} gallery-columns-${galleryDisplay.columns || "auto"}`}
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
        action={<div className="actions"><PageBackButton label="ホームへ戻る" onClick={() => setScreen("home")} /><button onClick={() => setScreen("journal")}>ジャーナルへ</button><button className="primary" onClick={() => fileInputRef.current?.click()}>＋ 画像を追加</button></div>}
      />
      <div className="folder-view-toolbar">
        <div className="folder-view-tabs" role="group" aria-label="ギャラリーの表示切り替え">
          <button className={viewMode === "list" ? "active-soft" : ""} onClick={() => setViewMode("list")}>一覧</button>
          <button className={viewMode === "folders" ? "active-soft" : ""} onClick={() => setViewMode("folders")}>ファイル別</button>
        </div>
        <button className="folder-create-button" onClick={addGalleryFolder}>＋ 新しいファイル</button>
      </div>
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
      {viewMode === "folders" ? (
        <div className="folder-board gallery-folder-board">
          {galleryFolderGroups.map((group) => (
            <section className="folder-panel" key={group.name}>
              <div className="folder-cover">
                <span>ファイル</span>
                <strong>{group.name}</strong>
                <small>{group.items.length}枚</small>
              </div>
              {group.items.length ? (
                <div className="gallery-grid">
                  {group.items.map((image: any) => (
                    <article className="gallery-card" key={image.id}>
                      {galleryDisplay.showHeart !== false && <button className="gallery-favorite-button" aria-label="お気に入り" onClick={() => updateImage(image.id, { favorite: !image.favorite })}>
                        {image.favorite ? "♥" : "♡"}
                      </button>}
                      <button className="gallery-image-button" onClick={() => setPreviewId(image.id)}>
                        <img src={imageDisplaySrc(image)} alt="" />
                      </button>
                    </article>
                  ))}
                </div>
              ) : <p className="folder-empty-text">このファイルにはまだ画像がありません。</p>}
            </section>
          ))}
        </div>
      ) : images.length ? (
        <div className="gallery-grid">
          {visibleImages.map((image: AtelierImage) => (
            <article className="gallery-card" key={image.id}>
              {galleryDisplay.showHeart !== false && <button className="gallery-favorite-button" aria-label="お気に入り" onClick={() => updateImage(image.id, { favorite: !image.favorite })}>
                {image.favorite ? "♥" : "♡"}
              </button>}
              <button className="gallery-image-button" onClick={() => setPreviewId(image.id)}>
                <img src={imageDisplaySrc(image)} alt="" />
              </button>
            </article>
          ))}
        </div>
      ) : <Empty text="画像を追加すると、ここにギャラリーが表示されます。" />}
      {images.length > visibleCount && <div ref={loadMoreRef} className="lazy-load-sentinel">画像を読み込んでいます…</div>}
      {preview && (
        <Modal title={preview.title || "画像詳細"} onClose={() => setPreviewId("")}>
          <div className="gallery-detail-modal">
            <img src={imageSrc(preview)} alt="" />
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
      <PageBackButton className="page-bottom-back" label="ホームへ戻る" onClick={() => setScreen("home")} />
    </section>
  );
}

function videoDisplaySrc(url: string) {
  if (!url) return "";
  return resolveIndexedDbImage(url, false) || url;
}

function isPlayableVideoUrl(url: string) {
  return /^data:video\//i.test(url) || url.startsWith("blob:") || /\.(mp4|webm|mov|m4v)(\?.*)?$/i.test(url);
}

function isSupportedVideoFile(file?: File | null) {
  if (!file) return false;
  return /^video\//i.test(file.type) || /\.(mp4|webm|mov|m4v|quicktime)$/i.test(file.name);
}

function clipboardVideoFiles(event: React.ClipboardEvent) {
  return Array.from(event.clipboardData?.items || [])
    .filter((item) => item.kind === "file")
    .map((item) => item.getAsFile())
    .filter((file): file is File => Boolean(file) && isSupportedVideoFile(file));
}

function VideoPlaceholder() {
  return (
    <div className="video-placeholder" aria-label="動画サムネイル未設定">
      <span>▶</span>
    </div>
  );
}

function VideoLibrary({ videos, setVideos, videoStocks, setVideoStocks, setScreen, homeSettings }: any) {
  const thumbnailInputRef = React.useRef<HTMLInputElement | null>(null);
  const videoInputRef = React.useRef<HTMLInputElement | null>(null);
  const uploadVideoInputRef = React.useRef<HTMLInputElement | null>(null);
  const uploadedVideoUrlRef = React.useRef("");
  const tempVideoUrlsRef = React.useRef<Record<string, string>>({});
  const [draft, setDraft] = React.useState<VideoItem>(blankVideoPrompt());
  const [tagDraft, setTagDraft] = React.useState("");
  const [isThumbnailDragging, setIsThumbnailDragging] = React.useState(false);
  const [isVideoUploadDragging, setIsVideoUploadDragging] = React.useState(false);
  const [uploadedVideoUrl, setUploadedVideoUrl] = React.useState("");
  const [tempVideoUrls, setTempVideoUrls] = React.useState<Record<string, string>>({});
  const [selectedId, setSelectedId] = React.useState("");
  const [query, setQuery] = React.useState("");
  const [modelFilter, setModelFilter] = React.useState("すべて");
  const [favoriteOnly, setFavoriteOnly] = React.useState(false);
  const [hoverVideoId, setHoverVideoId] = React.useState("");
  const [stockFrameCount, setStockFrameCount] = React.useState(5);
  const [memoStock, setMemoStock] = React.useState<VideoPromptStock | null>(null);
  const videoItems = extractVideoPromptItems(videos);
  const videoDisplay = homeSettings?.pageDisplaySettings?.videoPrompts || defaultPageDisplaySettings.videoPrompts;
  React.useEffect(() => {
    uploadedVideoUrlRef.current = uploadedVideoUrl;
  }, [uploadedVideoUrl]);
  React.useEffect(() => {
    tempVideoUrlsRef.current = tempVideoUrls;
  }, [tempVideoUrls]);
  React.useEffect(() => {
    return () => {
      if (uploadedVideoUrlRef.current) URL.revokeObjectURL(uploadedVideoUrlRef.current);
      Object.values(tempVideoUrlsRef.current).forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);
  const updateDraft = (patch: Partial<VideoItem>) => setDraft((current) => ({ ...current, ...patch }));
  const resetDraft = () => {
    setDraft(blankVideoPrompt());
    setTagDraft("");
    setSelectedId("");
    setUploadedVideoUrl((current) => {
      if (current) URL.revokeObjectURL(current);
      return "";
    });
  };
  const openNewVideo = () => {
    setDraft(blankVideoPrompt());
    setTagDraft("");
    setSelectedId("new");
    setUploadedVideoUrl((current) => {
      if (current) URL.revokeObjectURL(current);
      return "";
    });
  };
  const saveVideo = () => {
    const now = new Date().toISOString();
    const tags = splitTags(tagDraft || tagText(draft.tags || []));
    const next: VideoItem = {
      ...draft,
      id: draft.id || uid(),
      title: draft.title.trim() || "動画プロンプト",
      url: draft.url.trim(),
      model: draft.model || "その他",
      prompt: draft.prompt || "",
      memo: draft.memo || "",
      tags,
      favorite: Boolean(draft.favorite),
      createdAt: draft.createdAt || now,
      updatedAt: now,
    };
    if (!next.url && !uploadedVideoUrl) {
      window.alert("動画URLを入力するか、動画をアップロードしてください");
      return;
    }
    if (!draft.id && videoItems.length >= 20) {
      window.alert("動画プロンプトは最大20件まで保存できます");
      return;
    }
    setVideos((items: VideoItem[]) => {
      const current = extractVideoPromptItems(items);
      return draft.id ? current.map((item) => item.id === draft.id ? next : item) : [next, ...current].slice(0, 20);
    });
    if (uploadedVideoUrl) {
      setTempVideoUrls((items) => ({ ...items, [next.id]: uploadedVideoUrl }));
      setUploadedVideoUrl("");
      if (uploadVideoInputRef.current) uploadVideoInputRef.current.value = "";
    }
    setDraft(next);
    setSelectedId(next.id);
    setTagDraft(tagText(next.tags));
  };
  const editVideo = (item: VideoItem) => {
    setDraft({ ...blankVideoPrompt(), ...item });
    setTagDraft(tagText(item.tags || []));
    setSelectedId(item.id);
    setUploadedVideoUrl((current) => {
      if (current) URL.revokeObjectURL(current);
      return "";
    });
  };
  const deleteVideo = (id: string) => {
    if (!id || !window.confirm("この動画プロンプトを削除しますか？")) return;
    setTempVideoUrls((items) => {
      if (items[id]) URL.revokeObjectURL(items[id]);
      const next = { ...items };
      delete next[id];
      return next;
    });
    setVideos((items: VideoItem[]) => {
      const extracted = extractVideoPromptItems(items);
      rememberDeletedSampleIdsFromItems(extracted.find((item) => item.id === id));
      return extracted.filter((item) => item.id !== id);
    });
    resetDraft();
  };
  const importThumbnail = async (file?: File) => {
    if (!file) return;
    try {
      const image = await optimizeImage(file, "video-thumbnail");
      updateDraft({ thumbnail: image.src || image.thumbnail, thumbnailMode: "thumbnail" });
      scheduleStorageWarningCheck();
    } catch {
      window.alert("サムネイル画像を追加できませんでした。jpg / png / webp を選んでください。");
    }
  };
  const importVideoThumbnail = async (file?: File) => {
    if (!file) return;
    try {
      const image = await createVideoThumbnail(file);
      updateDraft({
        title: draft.title || file.name.replace(/\.[^.]+$/, ""),
        thumbnail: image.src || image.thumbnail,
        thumbnailMode: "thumbnail",
      });
      scheduleStorageWarningCheck();
    } catch {
      window.alert("動画からサムネイルを作成できませんでした。別の動画形式を試してください。");
    }
  };
  const importUploadedVideo = async (file?: File) => {
    if (!file) return;
    if (!isSupportedVideoFile(file)) {
      window.alert("mp4 / webm / mov などの動画ファイルを選んでください。");
      return;
    }
    try {
      const storedVideoUrl = await storeVideoFile(file);
      const previewUrl = videoDisplaySrc(storedVideoUrl);
      setUploadedVideoUrl((current) => {
        if (current && current.startsWith("blob:")) URL.revokeObjectURL(current);
        return previewUrl;
      });
      updateDraft({
        title: draft.title || file.name.replace(/\.[^.]+$/, ""),
        url: storedVideoUrl,
        thumbnailMode: draft.thumbnail ? draft.thumbnailMode || "thumbnail" : "video",
      });
    } catch {
      window.alert("動画を保存できませんでした。ファイルサイズを小さくしてもう一度試してください。");
    }
  };
  const clearUploadedVideo = () => {
    setUploadedVideoUrl((current) => {
      if (current && current.startsWith("blob:")) URL.revokeObjectURL(current);
      return "";
    });
    if (draft.url.startsWith("indexeddb:") || draft.url.startsWith("data:video/") || draft.url.startsWith("blob:")) {
      updateDraft({ url: "" });
    }
    if (uploadVideoInputRef.current) uploadVideoInputRef.current.value = "";
  };
  const openVideo = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const copyPrompt = async () => {
    if (!draft.prompt.trim()) return;
    await navigator.clipboard.writeText(draft.prompt);
    window.alert("プロンプトをコピーしました");
  };
  const copyVideoPrompt = async (item: VideoItem, event: any) => {
    event.stopPropagation();
    if (!item.prompt.trim()) return;
    await navigator.clipboard.writeText(item.prompt);
    window.alert("プロンプトをコピーしました");
  };
  const copyVideoStockText = async (text: string) => {
    if (!text.trim()) return;
    await navigator.clipboard.writeText(text);
    window.alert("プロンプトをコピーしました");
  };
  const normalizedStocks = (Array.isArray(videoStocks) ? videoStocks : []).slice(0, 100).map((item: any) => ({
    ...blankVideoPromptStock(),
    ...item,
    id: item.id || uid(),
    title: item.title || "",
    prompt: item.prompt || item.videoPrompt || "",
    memo: item.memo || item.note || "",
    createdAt: item.createdAt || new Date().toISOString(),
  }));
  const stockQuery = "";
  const filteredStocks = normalizedStocks.filter((item) => {
    if (!stockQuery) return true;
    const haystack = `${item.title} ${item.prompt} ${item.memo}`.toLowerCase();
    return haystack.includes(stockQuery);
  });
  const stockCount = normalizedStocks.length;
  const visibleStockFrameCount = Math.min(100, Math.max(5, stockFrameCount, filteredStocks.length));
  const stockSlots = stockQuery
    ? filteredStocks
    : Array.from({ length: visibleStockFrameCount }, (_, index) => normalizedStocks[index] || null);
  const canAddStock = stockCount < 100;
  const updateVideoStock = (id: string, patch: Partial<VideoPromptStock>) => {
    setVideoStocks((items: VideoPromptStock[]) => items.map((item) => item.id === id ? { ...item, ...patch, updatedAt: new Date().toISOString() } : item));
  };
  const deleteVideoStock = (id: string) => {
    if (!id || !window.confirm("このプロンプトストックを削除しますか？")) return;
    setVideoStocks((items: VideoPromptStock[]) => {
      rememberDeletedSampleIdsFromItems(items.find((item) => item.id === id));
      return items.filter((item) => item.id !== id);
    });
  };
  const saveVideoStockFrame = (item: VideoPromptStock) => {
    if (stockCount >= 100) return;
    const now = new Date().toISOString();
    const next = {
      ...blankVideoPromptStock(),
      ...item,
      id: item.id || uid(),
      title: item.title || "",
      prompt: item.prompt || "",
      memo: item.memo || "",
      createdAt: item.createdAt || now,
      updatedAt: now,
    };
    if (!next.title.trim() && !next.prompt.trim()) return;
    setVideoStocks((items: VideoPromptStock[]) => [...items, next].slice(0, 100));
  };
  const addVideoStockFrame = () => {
    if (!canAddStock) return;
    setStockFrameCount((count) => Math.min(100, count + 1));
  };
  const searchActive = Boolean(modelFilter !== "すべて" || favoriteOnly);
  const normalizedVideos = videoItems.slice(0, 20).map(normalizeVideoPrompt);
  const filteredVideos = normalizedVideos.filter((item) => {
    const haystack = `${item.title} ${item.prompt} ${item.memo} ${(item.tags || []).join(" ")} ${item.model}`.toLowerCase();
    if (modelFilter !== "すべて" && item.model !== modelFilter) return false;
    if (favoriteOnly && !item.favorite) return false;
    return true;
  });
  const videoSlotCount = searchActive ? filteredVideos.length : (normalizedVideos.length < 20 ? Math.max(8, Math.ceil((normalizedVideos.length + 1) / 4) * 4) : 20);
  const slots = searchActive
    ? filteredVideos
    : Array.from({ length: videoSlotCount }, (_, index) => normalizedVideos[index] || null);
  if (selectedId) {
    return (
      <section
        className={`page video-page video-view-${videoDisplay.viewMode || "card"} video-thumb-${videoDisplay.thumbnailSize || "normal"} ${videoDisplay.showTags === false ? "video-hide-tags" : ""} ${videoDisplay.showMemo === false ? "video-hide-memo" : ""}`}
        tabIndex={0}
        onPaste={(event) => {
          const files = clipboardImageFiles(event);
          const videoFiles = clipboardVideoFiles(event);
          if (!files.length && !videoFiles.length) return;
          event.preventDefault();
          event.stopPropagation();
          if (videoFiles.length) importUploadedVideo(videoFiles[0]);
          else importThumbnail(files[0]);
        }}
      >
        <PageHead
          title={draft.id ? "動画プロンプトを編集" : "新しい動画プロンプト"}
          action={<PageBackButton label="動画プロンプト帳へ戻る" onClick={resetDraft} />}
        />
        <div className="video-detail-editor">
          <div className="video-detail-form">
            <label>タイトル<input value={draft.title} onChange={(event) => updateDraft({ title: event.target.value })} placeholder="タイトル" /></label>
            <label>動画URL<input value={draft.url} onChange={(event) => updateDraft({ url: event.target.value })} placeholder="YouTube / Google Drive / Runway などのURL" /></label>
            <label>使用モデル<select value={draft.model} onChange={(event) => updateDraft({ model: event.target.value })}>{videoModels.map((model) => <option key={model} value={model}>{model}</option>)}</select></label>
            <label>動画プロンプト<textarea className="video-prompt-input" value={draft.prompt} onChange={(event) => updateDraft({ prompt: event.target.value })} placeholder="動画生成プロンプト" /></label>
            <label>メモ<textarea value={draft.memo} onChange={(event) => updateDraft({ memo: event.target.value })} placeholder="メモ" /></label>
            <label>タグ<input value={tagDraft} onChange={(event) => setTagDraft(event.target.value)} placeholder="cinematic, camera move, product demo" /></label>
            <label className="check"><input type="checkbox" checked={Boolean(draft.favorite)} onChange={(event) => updateDraft({ favorite: event.target.checked })} /> お気に入り</label>
          </div>
          <aside className="video-thumbnail-panel">
            <div
              className={`video-draft-preview ${isThumbnailDragging ? "dragging" : ""}`}
              onClick={() => thumbnailInputRef.current?.click()}
              onDragEnter={(event) => { event.preventDefault(); event.stopPropagation(); setIsThumbnailDragging(true); }}
              onDragOver={(event) => { event.preventDefault(); event.stopPropagation(); setIsThumbnailDragging(true); }}
              onDragLeave={(event) => { event.preventDefault(); event.stopPropagation(); setIsThumbnailDragging(false); }}
              onDrop={(event) => {
                event.preventDefault();
                event.stopPropagation();
                setIsThumbnailDragging(false);
                importThumbnail(Array.from(event.dataTransfer.files).find(isSupportedImageFile));
              }}
            >
              {draft.thumbnail ? <img src={imageDisplaySrc(draft.thumbnail)} alt="" /> : <VideoPlaceholder />}
              <small>クリック・ドロップ・貼り付けでサムネイル追加</small>
            </div>
            <div className="video-thumbnail-mode" role="group" aria-label="カード表面の表示">
              <label><input type="radio" name="thumbnailMode" checked={(draft.thumbnailMode || "thumbnail") === "thumbnail"} disabled={!draft.thumbnail} onChange={() => updateDraft({ thumbnailMode: "thumbnail" })} /> サムネを使う</label>
              <label><input type="radio" name="thumbnailMode" checked={draft.thumbnailMode === "video"} disabled={!draft.url && !uploadedVideoUrl} onChange={() => updateDraft({ thumbnailMode: "video" })} /> 動画だけ表示</label>
            </div>
            <div className="video-thumbnail-tools">
              <button type="button" onClick={() => thumbnailInputRef.current?.click()}>画像を選ぶ</button>
              <button type="button" onClick={() => videoInputRef.current?.click()}>動画からサムネイル生成</button>
              <button type="button" onClick={() => updateDraft({ thumbnail: "" })}>削除</button>
            </div>
            <div
              className={`video-upload-preview ${isVideoUploadDragging ? "dragging" : ""}`}
              onClick={() => uploadVideoInputRef.current?.click()}
              onDragEnter={(event) => { event.preventDefault(); event.stopPropagation(); setIsVideoUploadDragging(true); }}
              onDragOver={(event) => { event.preventDefault(); event.stopPropagation(); setIsVideoUploadDragging(true); }}
              onDragLeave={(event) => { event.preventDefault(); event.stopPropagation(); setIsVideoUploadDragging(false); }}
              onDrop={(event) => {
                event.preventDefault();
                event.stopPropagation();
                setIsVideoUploadDragging(false);
                importUploadedVideo(Array.from(event.dataTransfer.files).find(isSupportedVideoFile));
              }}
            >
              {uploadedVideoUrl ? (
                <video src={uploadedVideoUrl} controls playsInline />
              ) : (
                <div className="video-upload-placeholder">
                  <span>▶</span>
                  <strong>動画をアップロード</strong>
                  <small>mp4 / webm / mov に対応。保存後もカード表面で再生できます。</small>
                </div>
              )}
            </div>
            <div className="video-thumbnail-tools">
              <button type="button" onClick={() => uploadVideoInputRef.current?.click()}>動画を選ぶ</button>
              <button type="button" onClick={clearUploadedVideo} disabled={!uploadedVideoUrl}>アップロード動画を削除</button>
            </div>
            <input ref={thumbnailInputRef} type="file" accept="image/png,image/jpeg,image/webp" style={{ display: "none" }} onChange={(event) => { importThumbnail(event.currentTarget.files?.[0]); event.currentTarget.value = ""; }} />
            <input ref={videoInputRef} type="file" accept="video/mp4,video/webm,video/ogg,video/quicktime,video/*" style={{ display: "none" }} onChange={(event) => { importVideoThumbnail(event.currentTarget.files?.[0]); event.currentTarget.value = ""; }} />
            <input ref={uploadVideoInputRef} type="file" accept="video/mp4,video/webm,video/quicktime,video/*" style={{ display: "none" }} onChange={(event) => { importUploadedVideo(event.currentTarget.files?.[0]); event.currentTarget.value = ""; }} />
          </aside>
        </div>
        <div className="video-detail-actions">
          <button onClick={copyPrompt} disabled={!draft.prompt.trim()}>📋 プロンプトをコピー</button>
          <button onClick={() => openVideo(draft.url)} disabled={!draft.url.trim()}>動画URLを開く</button>
          <button className="primary" onClick={saveVideo}>保存する</button>
          {draft.id && <button className="danger" onClick={() => deleteVideo(draft.id)}>削除</button>}
          <PageBackButton label="動画プロンプト帳へ戻る" onClick={resetDraft} />
        </div>
      </section>
    );
  }
  return (
    <section className={`page video-page video-view-${videoDisplay.viewMode || "card"} video-thumb-${videoDisplay.thumbnailSize || "normal"} ${videoDisplay.showTags === false ? "video-hide-tags" : ""} ${videoDisplay.showMemo === false ? "video-hide-memo" : ""}`}>
      <PageHead
        title="動画プロンプト帳"
        action={<div className="actions"><span className="prompt-count-pill">動画 {normalizedVideos.length} / 20・ストック {stockCount} / 100</span><PageBackButton label="ホームへ戻る" onClick={() => setScreen("home")} /></div>}
      />
      <div className="video-filter-bar">
        <select value={modelFilter} onChange={(event) => setModelFilter(event.target.value)}>
          <option>すべて</option>
          {videoModels.map((model) => <option key={model}>{model}</option>)}
        </select>
        <label className="check"><input type="checkbox" checked={favoriteOnly} onChange={(event) => setFavoriteOnly(event.target.checked)} /> お気に入りのみ</label>
      </div>
      <section className="prompt-area video-prompt-area">
        <div className="prompt-area-head">
          <div>
            <h3>動画プロンプト</h3>
            <p>Runway・Kling・Veo・Hailuo・Pikaなどの動画生成プロンプトを最大20件まで保存できます。</p>
          </div>
        </div>
        <div className="library-prompt-grid video-grid">
          {slots.map((item: VideoItem | null, index: number) => {
            const previewUrl = item ? videoDisplaySrc(tempVideoUrls[item.id] || item.url) : "";
            const useThumbnail = item ? (item.thumbnailMode || "thumbnail") !== "video" && Boolean(item.thumbnail) : false;
            const showVideoPreview = Boolean(item && previewUrl && isPlayableVideoUrl(previewUrl) && (hoverVideoId === item.id || !useThumbnail));
            return item ? (
            <article className="library-prompt-card video-card video-prompt-card" key={item.id} onClick={() => editVideo(item)}>
              <button className="video-favorite-button" aria-label="お気に入り" onClick={(event) => {
                event.stopPropagation();
                setVideos((items: VideoItem[]) => extractVideoPromptItems(items).map((video) => video.id === item.id ? { ...video, favorite: !video.favorite } : video));
              }}>
                {item.favorite ? "♥" : "♡"}
              </button>
              <details className="card-menu video-card-menu" onClick={(event) => event.stopPropagation()}>
                <summary aria-label="メニュー">…</summary>
                <div>
                  <button onClick={(event) => { event.preventDefault(); editVideo(item); }}>編集</button>
                  <button onClick={(event) => { event.preventDefault(); setVideos((items: VideoItem[]) => [{ ...item, id: uid(), title: `${item.title} コピー`, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }, ...extractVideoPromptItems(items)].slice(0, 20)); }}>複製</button>
                  <button className="danger" onClick={(event) => { event.preventDefault(); deleteVideo(item.id); }}>削除</button>
                </div>
              </details>
              <button
                className="video-thumb-button"
                onClick={(event) => { event.stopPropagation(); editVideo(item); }}
                onMouseEnter={() => setHoverVideoId(item.id)}
                onMouseLeave={() => setHoverVideoId("")}
              >
                {showVideoPreview ? (
                  <video src={previewUrl} autoPlay muted loop playsInline />
                ) : useThumbnail ? (
                  <img src={imageDisplaySrc(item.thumbnail)} alt="" />
                ) : <VideoPlaceholder />}
              </button>
              <div className="prompt-card-content video-card-body">
                <h3>{item.title}</h3>
                <p>{item.prompt || item.memo || item.url}</p>
                <div className="video-meta-row">
                  <span className="mini-pill">{item.model || "その他"}</span>
                  {videoDisplay.showTags !== false && !!(item.tags || []).length && <div className="video-tags">{item.tags.slice(0, 2).map((tag) => <span key={tag}>#{tag}</span>)}</div>}
                </div>
                <div className="prompt-card-actions video-card-actions">
                  <button className="primary" onClick={(event) => copyVideoPrompt(item, event)} disabled={!item.prompt.trim()}>📋 プロンプトをコピー</button>
                  {videoDisplay.showMemo !== false && <button onClick={(event) => { event.stopPropagation(); editVideo(item); }}>メモ</button>}
                </div>
              </div>
            </article>
          ) : (
            <button className="add-prompt-card video-add-card" key={`empty-${index}`} onClick={openNewVideo} disabled={videoItems.length >= 20}>
              <span>＋</span>
              <strong>新しい動画プロンプト</strong>
            </button>
          );
          })}
        </div>
        {!searchActive && videoItems.length >= 20 && <p className="limit-message">動画プロンプトは最大20件まで保存できます</p>}
        {searchActive && !filteredVideos.length && <Empty text="条件に合う動画プロンプトがありません。" />}
      </section>
      <section className="prompt-area text-prompt-area video-stock-area">
        <div className="prompt-area-head">
          <div>
            <h3>プロンプトストック</h3>
            <p>動画を設定しないプロンプトはこちらに保存します。最大100件まで保存できます。</p>
          </div>
        </div>
        <div className="text-prompt-list">
          {stockSlots.map((stock: VideoPromptStock | null, index: number) => (
            <TextStockFrame
              key={stock?.id || `video-stock-frame-${index}`}
              prompt={stock}
              blankPrompt={blankVideoPromptStock()}
              onCreate={saveVideoStockFrame}
              onUpdate={updateVideoStock}
              onDelete={deleteVideoStock}
              copyText={copyVideoStockText}
              showMemo={() => stock && setMemoStock(stock)}
            />
          ))}
        </div>
        {canAddStock && !stockQuery && (
          <button className="add-stock-button" onClick={addVideoStockFrame}>＋ プロンプトを追加</button>
        )}
        {!canAddStock && <p className="limit-message">保存上限（100件）に達しました</p>}
        {stockQuery && !filteredStocks.length && <Empty text="条件に合うプロンプトストックがありません。" />}
      </section>
      {memoStock && (
        <MemoModal
          prompt={{ ...memoStock, id: memoStock.id, memo: memoStock.memo || "" }}
          onClose={() => setMemoStock(null)}
          onSave={(memo) => {
            updateVideoStock(memoStock.id, { memo });
            setMemoStock(null);
          }}
        />
      )}
      <PageBackButton className="page-bottom-back" label="ホームへ戻る" onClick={() => setScreen("home")} />
    </section>
  );
}

function JournalPage({ journal, setJournal, setScreen }: any) {
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);
  const backgroundInputRef = React.useRef<HTMLInputElement | null>(null);
  const [draggingId, setDraggingId] = React.useState("");
  const [selectedId, setSelectedId] = React.useState("");
  const [isBackgroundDragging, setIsBackgroundDragging] = React.useState(false);
  const boardRef = React.useRef<HTMLDivElement | null>(null);
  const selected = journal.items.find((item: JournalItem) => item.id === selectedId);
  const stockImages = journal.stockImages || [];
  const customBackgrounds = journal.customBackgrounds || [];
  const hiddenStockImageIds = journal.hiddenStockImageIds || [];
  const visibleStockImages = stockImages.filter((image: AtelierImage) => !hiddenStockImageIds.includes(image.id)).slice(0, 18);
  const selectedCustomBackground = customBackgrounds.find((item: AtelierImage) => journal.background === `custom-${item.id}`);
  const addJournalItem = (image: AtelierImage) => {
    const normalized = {
      ...image,
      src: image.src || imageSrc(image),
      thumbnail: image.thumbnail || image.src || imageThumbnail(image),
    };
    const item: JournalItem = {
      id: uid(),
      imageId: normalized.id,
      src: normalized.src,
      thumbnail: normalized.thumbnail,
      x: 80 + journal.items.length * 18,
      y: 80 + journal.items.length * 14,
      width: 170,
      rotate: (journal.items.length % 5) * 4 - 8,
      stickerEffect: true,
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
    const optimizedImages = await Promise.all(files.slice(0, remaining).map((file) => optimizeImage(file, "journal")));
    if (files.length > remaining) window.alert("ジャーナル1ページの画像は最大100枚までです");
    const nextImages = optimizedImages.map((image, index) => ({
      ...image,
      title: files[index].name.replace(/\.[^.]+$/, ""),
      memo: "ジャーナルから追加",
      source: "journal",
      favorite: false,
    }));
    setJournal((current: JournalState) => ({
      ...current,
      stockImages: [...nextImages, ...(current.stockImages || [])],
    }));
    nextImages.forEach(addJournalItem);
    scheduleStorageWarningCheck();
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
    const optimizedBackgrounds = await Promise.all(files.slice(0, remaining).map((file) => optimizeImage(file, "background")));
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
    scheduleStorageWarningCheck();
  };
  const updateBackground = (id: string, patch: Partial<AtelierImage>) => {
    setJournal((current: JournalState) => ({
      ...current,
      customBackgrounds: (current.customBackgrounds || []).map((item) => item.id === id ? { ...item, ...patch } : item),
    }));
  };
  const deleteBackground = (id: string) => {
    setJournal((current: JournalState) => {
      rememberDeletedSampleIdsFromItems((current.customBackgrounds || []).find((item) => item.id === id));
      const nextBackgrounds = (current.customBackgrounds || []).filter((item) => item.id !== id);
      return { ...current, customBackgrounds: nextBackgrounds, background: current.background === `custom-${id}` ? "paper" : current.background };
    });
  };
  const deleteStockImage = (image: AtelierImage) => {
    const inUseCount = journal.items.filter((item: JournalItem) => item.imageId === image.id).length;
    const message = inUseCount
      ? `この画像を画像ストックから削除します。ジャーナル上に配置済みの同じ画像${inUseCount}件も削除されます。よろしいですか？`
      : "この画像を画像ストックから削除します。よろしいですか？";
    if (!window.confirm(message)) return;
    rememberDeletedSampleIdsFromItems(image);
    setJournal((current: JournalState) => ({
      ...current,
      stockImages: (current.stockImages || []).filter((item: AtelierImage) => item.id !== image.id),
      hiddenStockImageIds: Array.from(new Set([...(current.hiddenStockImageIds || []), image.id])),
      items: current.items.filter((item: JournalItem) => item.imageId !== image.id),
    }));
    if (journal.items.some((item: JournalItem) => item.imageId === image.id && item.id === selectedId)) setSelectedId("");
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
        action={<div className="actions"><PageBackButton label="ホームへ戻る" onClick={() => setScreen("home")} /><button onClick={() => setScreen("gallery")}>ギャラリーへ</button><button className="primary" onClick={() => fileInputRef.current?.click()}>＋ 画像を追加</button></div>}
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
            <small>推奨アスペクト比：3:2</small>
          </div>
          {selectedCustomBackground && (
            <div className="journal-background-editor">
              <label>背景名<input value={selectedCustomBackground.title} onChange={(event) => updateBackground(selectedCustomBackground.id, { title: event.target.value })} /></label>
              <button className="danger" onClick={() => deleteBackground(selectedCustomBackground.id)}>背景を削除</button>
            </div>
          )}
          <strong>画像ストック</strong>
          <div className="journal-stock">
            {visibleStockImages.map((image: AtelierImage) => (
              <div className="journal-stock-item" key={image.id}>
                <button className="journal-stock-add" onClick={() => addJournalItem(image)} aria-label={`${image.title || "画像"}をジャーナルに追加`}>
                  <img src={imageDisplaySrc(image)} alt="" />
                </button>
                <button
                  className="journal-stock-delete"
                  aria-label={`${image.title || "画像"}を削除`}
                  onClick={(event) => {
                    event.stopPropagation();
                    deleteStockImage(image);
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          {selected && (
            <div className="journal-edit-panel">
              <label>サイズ<input type="range" min="80" max="360" value={selected.width} onChange={(event) => updateItem(selected.id, { width: Number(event.target.value) })} /></label>
              <label>回転<input type="range" min="-35" max="35" value={selected.rotate} onChange={(event) => updateItem(selected.id, { rotate: Number(event.target.value) })} /></label>
              <label className="check"><input type="checkbox" checked={isStickerEffectOn(selected)} onChange={(event) => updateItem(selected.id, { stickerEffect: event.target.checked })} /> シール風</label>
              <button className="danger" onClick={() => setJournal((current: JournalState) => {
                rememberDeletedSampleIdsFromItems(current.items.find((item) => item.id === selected.id));
                return { ...current, items: current.items.filter((item) => item.id !== selected.id) };
              })}>選択画像を削除</button>
            </div>
          )}
        </aside>
        <div className="journal-canvas">
          {!journal.items.length && <p className="journal-board-note">画像ストックから追加すると、シール帳のように並べられます。</p>}
          <div
            ref={boardRef}
            className={`journal-board ${journal.background}`}
            tabIndex={0}
            style={selectedCustomBackground ? { backgroundImage: `linear-gradient(rgba(255,255,255,0.08), rgba(255,255,255,0.08)), url(${imageSrc(selectedCustomBackground)})` } : undefined}
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
            {journal.items.map((item: JournalItem) => (
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
                <img className={isStickerEffectOn(item) ? "journal-image sticker-outline" : "journal-image"} src={imageDisplaySrc(item)} alt="" draggable={false} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <PageBackButton className="page-bottom-back" label="ホームへ戻る" onClick={() => setScreen("home")} />
    </section>
  );
}

function Projects({ projects, setProjects, projectMemos, setProjectMemos, prompts, settings, homeSettings, copyText, setScreen }: any) {
  const [editing, setEditing] = React.useState<Project | null>(null);
  const [editingMemo, setEditingMemo] = React.useState<ProjectMemo | null>(null);
  const canAddProject = projects.length < 30;
  const canAddMemo = projectMemos.length < 30;
  const projectDisplay = homeSettings?.pageDisplaySettings?.projects || defaultPageDisplaySettings.projects;
  const projectMatchesDisplay = (item: Project) => projectDisplay.showCompleted !== false || !(item as any).completed && (item as any).status !== "completed";
  const filteredBase = projects.filter((item: Project) => projectMatchesDisplay(item));
  const filtered = projectDisplay.sortBy === "manual"
    ? filteredBase
    : projectDisplay.sortBy === "created"
      ? [...filteredBase].sort((a: any, b: any) => String(b.createdAt || b.updatedAt || "").localeCompare(String(a.createdAt || a.updatedAt || "")))
      : sortProjectsForDisplay(filteredBase);
  const sortedMemos = [...projectMemos].sort((a: ProjectMemo, b: ProjectMemo) => Number(Boolean(b.favorite)) - Number(Boolean(a.favorite)) || String(b.updatedAt || b.createdAt).localeCompare(String(a.updatedAt || a.createdAt)));
  const save = (item: Project) => {
    const next = { ...item, id: item.id || uid(), updatedAt: new Date().toISOString() };
    setProjects((items: Project[]) => item.id ? items.map((p) => p.id === item.id ? next : p) : [next, ...items].slice(0, 30));
    setEditing(null);
  };
  const saveMemo = (memo: ProjectMemo) => {
    const now = new Date().toISOString();
    const next = {
      ...memo,
      id: memo.id || uid(),
      title: memo.title.trim() || "無題のメモ",
      body: memo.body || "",
      createdAt: memo.createdAt || now,
      updatedAt: now,
    };
    setProjectMemos((items: ProjectMemo[]) => memo.id ? items.map((item) => item.id === memo.id ? next : item) : [next, ...items].slice(0, 30));
    setEditingMemo(null);
  };
  const toggleMemoFavorite = (id: string) => {
    setProjectMemos((items: ProjectMemo[]) => items.map((memo) => memo.id === id ? { ...memo, favorite: !memo.favorite, updatedAt: new Date().toISOString() } : memo));
  };
  const deleteMemo = (id: string) => {
    setProjectMemos((items: ProjectMemo[]) => items.filter((memo) => memo.id !== id));
  };
  return (
    <section className={`page projects-page ${projectDisplay.showAlarms === false ? "projects-hide-alarms" : ""}`}>
      <PageHead
        title="プロジェクト管理"
        action={<div className="actions"><PageBackButton label="ホームへ戻る" onClick={() => setScreen("home")} />{canAddProject ? <button className="primary" onClick={() => setEditing(blankProject())}>追加する</button> : <span className="limit-message">プロジェクトは最大30件まで登録できます</span>}</div>}
      />
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
                  <button className="danger" onClick={() => setProjects((items: Project[]) => {
                    rememberDeletedSampleIdsFromItems(items.find((p) => p.id === project.id));
                    return items.filter((p) => p.id !== project.id);
                  })}>削除</button>
                </div>
              </div>
              <TagRow tags={project.tags} />
              {projectDisplay.showAlarms !== false && project.dueDate && <p className="project-due-line">{projectDueText(project.dueDate)}</p>}
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

      <section className="project-memo-section">
        <div className="project-memo-head">
          <div>
            <h3>メモ</h3>
            <p>タイトルと本文だけのシンプルなメモを、最大30個まで保存できます。</p>
          </div>
          {canAddMemo ? <button className="primary" onClick={() => setEditingMemo(blankProjectMemo())}>メモを追加</button> : <span className="limit-message">メモは最大30個まで登録できます</span>}
        </div>
        <div className="project-memo-grid">
          {sortedMemos.length ? sortedMemos.map((memo: ProjectMemo) => (
            <article className="project-memo-card" key={memo.id}>
              <button className="project-memo-heart" aria-label="お気に入り" onClick={() => toggleMemoFavorite(memo.id)}>{memo.favorite ? "♥" : "♡"}</button>
              <h4>{memo.title}</h4>
              <p>{memo.body}</p>
              <div className="project-memo-actions">
                <button onClick={() => setEditingMemo(memo)}>編集</button>
                <button onClick={() => copyText(memo.body, memo.id)} disabled={!memo.body.trim()}>コピー</button>
                <button className="danger" onClick={() => deleteMemo(memo.id)}>削除</button>
              </div>
            </article>
          )) : (
            <button className="project-memo-empty-card" type="button" onClick={() => canAddMemo && setEditingMemo(blankProjectMemo())}>
              メモを追加できます
            </button>
          )}
        </div>
      </section>

      {editing && <ProjectModal item={editing} prompts={prompts} settings={settings} onClose={() => setEditing(null)} onSave={save} />}
      {editingMemo && <ProjectMemoModal item={editingMemo} onClose={() => setEditingMemo(null)} onSave={saveMemo} />}
      <PageBackButton className="page-bottom-back" label="ホームへ戻る" onClick={() => setScreen("home")} />
    </section>
  );
}

function ProjectMemoModal({ item, onClose, onSave }: any) {
  const [draft, setDraft] = React.useState({ ...item });
  return (
    <Modal title={item.id ? "メモを編集" : "メモを追加"} onClose={onClose}>
      <FormGrid className="project-memo-form">
        <input value={draft.title} onChange={(event) => setDraft({ ...draft, title: event.target.value })} placeholder="タイトル" />
        <textarea className="project-memo-body-input" value={draft.body} onChange={(event) => setDraft({ ...draft, body: event.target.value })} placeholder="本文を入力できます。長文も保存できます。" />
        <label className="check project-remind-check">
          <input type="checkbox" checked={Boolean(draft.favorite)} onChange={(event) => setDraft({ ...draft, favorite: event.target.checked })} />
          お気に入りに表示する
        </label>
      </FormGrid>
      <ModalActions onClose={onClose} onSave={() => onSave(draft)} />
    </Modal>
  );
}

function PromptCard({ prompt, onCopy, extra }: any) {
  return (
    <article className="prompt-card">
      <img src={imageDisplaySrc(prompt.imageUrl) || art("プロンプト", "#f5eadc", "#e7e7df")} alt="" />
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
  const setCoverImages = (coverImages: any[]) => setDraft({ ...draft, coverImages, imageUrl: coverImages[0] || "" });
  return (
    <Modal title={item.id ? "プロンプトを編集" : "プロンプトを追加"} onClose={onClose}>
      <FormGrid>
        <input value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} placeholder="タイトル" />
        <select value={draft.category} onChange={(e) => setDraft({ ...draft, category: e.target.value })}>{categories.map((cat) => <option key={cat}>{cat}</option>)}</select>
        <textarea value={draft.description} onChange={(e) => setDraft({ ...draft, description: e.target.value })} placeholder="説明" />
        <textarea className="tall" value={draft.prompt} onChange={(e) => setDraft({ ...draft, prompt: e.target.value })} placeholder="プロンプト本文" />
        <textarea value={draft.note} onChange={(e) => setDraft({ ...draft, note: e.target.value })} placeholder="メモ" />
        <input value={draft.tagInput} onChange={(e) => setDraft({ ...draft, tagInput: e.target.value })} placeholder="タグ（カンマ区切り）" />
        <CoverImageUploader item={draft} category="prompt" onChange={setCoverImages} />
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
          description="お気に入りを優先して10件表示します。必要な場合は「もっと見る」で追加表示できます。"
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
  const [expanded, setExpanded] = React.useState(false);
  const shown = expanded ? items : items.slice(0, 10);
  return (
    <div className="select-list">
      <div className="select-list-head">
        <div>
          <strong>{title}</strong>
          {description && <small>{description}</small>}
        </div>
      </div>
      {items.length ? shown.map((item: any) => (
        <label key={item.id} className="check select-row"><input type="checkbox" checked={selected.includes(item.id)} onChange={() => onToggle(item.id)} /> {getLabel(item)}</label>
      )) : <small>先に項目を追加してください。</small>}
      {items.length > 10 && !expanded && <button className="ghost more-button" type="button" onClick={() => setExpanded(true)}>もっと見る</button>}
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

function PageBackButton({ label = "前のページに戻る", onClick, className = "" }: any) {
  return (
    <button type="button" className={`page-back-button ${className}`.trim()} onClick={onClick}>
      ← {label}
    </button>
  );
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
