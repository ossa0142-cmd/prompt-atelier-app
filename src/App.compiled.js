const categories = ["ステッカーモックアップ", "招待状モックアップ", "ポストカードモックアップ", "グリーティングカードモックアップ", "Etsyサムネイル", "アートプリントモックアップ", "アクリルキーホルダーモックアップ"];
const homeSections = [{
  id: "dashboard",
  label: "制作状況カード"
}, {
  id: "quickActions",
  label: "作業ツール"
}, {
  id: "search",
  label: "検索バー"
}, {
  id: "featureCards",
  label: "メイン機能カード"
}, {
  id: "favorites",
  label: "お気に入り"
}, {
  id: "atelier",
  label: "アトリエコーナー"
}];
const homeFeatures = [{
  id: "library",
  label: "モックアップライブラリ"
}, {
  id: "prompts",
  label: "プロンプト帳"
}, {
  id: "videos",
  label: "動画プロンプト帳"
}, {
  id: "mj",
  label: "MJ設定"
}, {
  id: "projects",
  label: "プロジェクト"
}];
const homeThemes = [{
  id: "cute",
  name: "キュート",
  colors: ["#f7e8e3", "#fffaf4", "#efe4d4"],
  vars: {
    ink: "#4a3935",
    muted: "#806f67",
    paper: "#fffaf4",
    ivory: "#fbf6ed",
    shell: "#f7e8e3",
    sage: "#dce7d7",
    sand: "#efe4d4",
    line: "#eadbd0",
    accent: "#c88f8d"
  }
}, {
  id: "cool",
  name: "クール",
  colors: ["#d9e1e8", "#ffffff", "#42464d"],
  vars: {
    ink: "#343841",
    muted: "#68717d",
    paper: "#ffffff",
    ivory: "#f4f7f8",
    shell: "#d9e1e8",
    sage: "#dce5e4",
    sand: "#e9edf0",
    line: "#d8e0e6",
    accent: "#72889a"
  }
}, {
  id: "natural",
  name: "ナチュラル",
  colors: ["#dce7d7", "#fbf6ed", "#7c624d"],
  vars: {
    ink: "#46382d",
    muted: "#766859",
    paper: "#fffaf2",
    ivory: "#f6f1e8",
    shell: "#e8eadc",
    sage: "#dce7d7",
    sand: "#e8dccb",
    line: "#ded3c1",
    accent: "#71866d"
  }
}, {
  id: "lavender",
  name: "ラベンダー",
  colors: ["#e7dff1", "#eff0ec", "#ffffff"],
  vars: {
    ink: "#40384c",
    muted: "#786f82",
    paper: "#fffdfd",
    ivory: "#f7f4fa",
    shell: "#e7dff1",
    sage: "#e4ece8",
    sand: "#ebe5ef",
    line: "#ded7e8",
    accent: "#9a85b6"
  }
}, {
  id: "cafe",
  name: "カフェ",
  colors: ["#ead8c3", "#b99b83", "#fffaf4"],
  vars: {
    ink: "#4a382e",
    muted: "#806b5b",
    paper: "#fff8ef",
    ivory: "#f6eee4",
    shell: "#ead8c3",
    sage: "#e2e5d8",
    sand: "#e6d2bc",
    line: "#dfcdb9",
    accent: "#a98270"
  }
}, {
  id: "kstationery",
  name: "韓国文具",
  colors: ["#fff4dc", "#f6d9de", "#d7eadf"],
  vars: {
    ink: "#493c39",
    muted: "#7d7167",
    paper: "#fffdf7",
    ivory: "#fff8ea",
    shell: "#f6d9de",
    sage: "#d7eadf",
    sand: "#f2e6cf",
    line: "#eadfcb",
    accent: "#d49aa5"
  }
}, {
  id: "simple",
  name: "シンプル",
  colors: ["#ffffff", "#eeeeee", "#333333"],
  vars: {
    ink: "#303030",
    muted: "#6a6a6a",
    paper: "#ffffff",
    ivory: "#f7f7f7",
    shell: "#eeeeee",
    sage: "#e9e9e9",
    sand: "#efefef",
    line: "#dddddd",
    accent: "#555555"
  }
}, {
  id: "girly",
  name: "ガーリー",
  colors: ["#e9b7c2", "#fff4dc", "#d8b9a2"],
  vars: {
    ink: "#55383e",
    muted: "#896d71",
    paper: "#fff9f2",
    ivory: "#fff4e6",
    shell: "#f3d7dc",
    sage: "#e3e8d9",
    sand: "#ead6c5",
    line: "#ead4d8",
    accent: "#c97d91"
  }
}, {
  id: "antique",
  name: "アンティーク",
  colors: ["#e5d6bd", "#8a7463", "#89906f"],
  vars: {
    ink: "#45382c",
    muted: "#766959",
    paper: "#fff8ed",
    ivory: "#f0e5d2",
    shell: "#e5d6bd",
    sage: "#d5d9c4",
    sand: "#d8c6aa",
    line: "#d4c3aa",
    accent: "#89906f"
  }
}, {
  id: "pastel",
  name: "パステル",
  colors: ["#f7d9e3", "#d8efe5", "#e8ddf4", "#fff4dc"],
  vars: {
    ink: "#463d46",
    muted: "#7b7280",
    paper: "#fffdf9",
    ivory: "#fff8ed",
    shell: "#f7d9e3",
    sage: "#d8efe5",
    sand: "#e8ddf4",
    line: "#eadfeb",
    accent: "#b995cf"
  }
}, {
  id: "dark",
  name: "ダークモード",
  colors: ["#262321", "#3a3430", "#d8c7ae"],
  vars: {
    ink: "#f3eadf",
    muted: "#c6b8aa",
    paper: "#2a2725",
    ivory: "#1f1d1c",
    shell: "#3a3430",
    sage: "#4d4941",
    sand: "#d8c7ae",
    line: "#4a433d",
    accent: "#d8b98c"
  }
}, {
  id: "night-lavender",
  name: "ナイトラベンダー",
  colors: ["#34234d", "#a98bd8", "#fff7ea"],
  vars: {
    ink: "#fff7ea",
    muted: "#d8c8ee",
    paper: "#3a2854",
    ivory: "#261936",
    shell: "#4d3670",
    sage: "#8069a8",
    sand: "#efe3ff",
    line: "#5c4678",
    accent: "#c7a6ff"
  }
}, {
  id: "vivid-pink",
  name: "ビビッドピンク",
  colors: ["#ff4fa3", "#ffffff", "#222222"],
  vars: {
    ink: "#221d21",
    muted: "#6d5964",
    paper: "#ffffff",
    ivory: "#fff3f8",
    shell: "#ffd2e6",
    sage: "#f0eef5",
    sand: "#ffe6f1",
    line: "#f5b5d2",
    accent: "#ff4fa3"
  }
}, {
  id: "pop-blue",
  name: "ポップブルー",
  colors: ["#2477ff", "#ffffff", "#e8edf5"],
  vars: {
    ink: "#1d2636",
    muted: "#59677a",
    paper: "#ffffff",
    ivory: "#f4f8ff",
    shell: "#dce9ff",
    sage: "#e8edf5",
    sand: "#edf3ff",
    line: "#c8dcff",
    accent: "#2477ff"
  }
}, {
  id: "emerald",
  name: "エメラルド",
  colors: ["#00a878", "#fffaf0", "#26312d"],
  vars: {
    ink: "#26312d",
    muted: "#5f746b",
    paper: "#fffaf0",
    ivory: "#f2fbf4",
    shell: "#d8f2e6",
    sage: "#bfe9d8",
    sand: "#fff0ce",
    line: "#bde2d2",
    accent: "#00a878"
  }
}, {
  id: "retro-orange",
  name: "レトロオレンジ",
  colors: ["#f28c28", "#fff1d6", "#704628"],
  vars: {
    ink: "#4a2f20",
    muted: "#80624b",
    paper: "#fff7ea",
    ivory: "#fff1d6",
    shell: "#ffd59d",
    sage: "#e6d8b9",
    sand: "#f4c178",
    line: "#e6b070",
    accent: "#f28c28"
  }
}];
const mjParameterOptions = ["--ar 1:1", "--ar 4:5", "--ar 3:4", "--ar 2:3", "--ar 16:9", "--stylize 50", "--stylize 80", "--stylize 100", "--chaos 5", "--chaos 10", "--chaos 20", "--raw", "--hd", "--seed", "--profile", "--v 6", "--niji 6", "--quality 1", "--weird 50"];
const mjParamKey = param => param.trim().split(/\s+/)[0];
const mjParamValue = (params, key) => {
  const found = params.find(param => mjParamKey(param) === key);
  return found ? found.replace(key, "").trim() : "";
};
const mjReplaceKeys = ["--ar", "--stylize", "--chaos", "--seed", "--profile", "--v", "--niji", "--quality", "--weird"];
const defaultWorkTools = [{
  id: "tool-midjourney",
  name: "Midjourney",
  url: "https://www.midjourney.com/",
  iconText: "MJ",
  iconImage: "",
  memo: "画像生成"
}, {
  id: "tool-pinterest",
  name: "Pinterest",
  url: "https://www.pinterest.com/",
  iconText: "P",
  iconImage: "",
  memo: "参考画像"
}, {
  id: "tool-chatgpt",
  name: "ChatGPT",
  url: "https://chatgpt.com/",
  iconText: "GPT",
  iconImage: "",
  memo: "文章づくり"
}];
const sampleAtelierImages = [];
const defaultJournal = {
  background: "paper",
  items: []
};
const sampleVideos = [{
  id: "video-sample-1",
  title: "淡いステッカー紹介動画",
  url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  model: "Runway",
  thumbnail: "",
  prompt: "soft pastel clipart sticker sheet reveal, gentle camera push in, cozy stationery desk, clean white background, smooth motion",
  memo: "Etsyのサムネイル動画やSNS用に使いやすい構成。",
  tags: ["sticker", "pastel", "reveal"],
  favorite: true,
  createdAt: "2026-07-02T00:00:00.000Z"
}, {
  id: "video-sample-2",
  title: "招待状モックアップ動画",
  url: "",
  model: "Kling",
  thumbnail: "",
  prompt: "wedding invitation card mockup on linen fabric, slow top-down camera movement, elegant natural light, warm ivory tone",
  memo: "招待状パックの販売ページ用。",
  tags: ["invitation", "mockup", "wedding"],
  favorite: false,
  createdAt: "2026-07-02T00:00:00.000Z"
}];
const videoModels = ["Runway", "Kling", "Veo", "Hailuo", "Pika", "Luma", "その他"];
const blankVideoPrompt = () => ({
  id: "",
  title: "",
  url: "",
  model: "Runway",
  thumbnail: "",
  prompt: "",
  memo: "",
  tags: [],
  favorite: false,
  createdAt: ""
});
const blankVideoPromptStock = () => ({
  id: "",
  title: "",
  prompt: "",
  memo: "",
  createdAt: ""
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
function extractVideoPromptItems(value) {
  if (Array.isArray(value)) return value;
  if (!value || typeof value !== "object") return [];
  if (Array.isArray(value.cards)) return value.cards;
  if (Array.isArray(value.prompts)) return value.prompts;
  if (Array.isArray(value.videoPrompts)) return value.videoPrompts;
  if (Array.isArray(value.items)) return value.items;
  return [];
}
function normalizeVideoPrompt(item) {
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
    prompt,
    memo: item?.memo || item?.note || "",
    tags,
    favorite: Boolean(item?.favorite),
    createdAt: item?.createdAt || new Date().toISOString(),
    updatedAt: item?.updatedAt || item?.createdAt || ""
  };
}
const defaultHomeSettings = {
  themeId: "cute",
  bannerImageUrl: "",
  bannerVisible: true,
  bannerSize: "medium",
  bannerFit: "contain",
  bannerPositionX: 50,
  bannerPositionY: 50,
  workToolIconStyle: "pastel",
  homeCharacter: {
    image: "",
    position: "right-bottom",
    speechEnabled: true,
    messageMode: "auto",
    fixedMessage: "今日も制作がんばろう♡",
    selectedProjectId: ""
  },
  visible: {
    library: true,
    prompts: true,
    videos: true,
    mj: true,
    projects: true,
    favorites: true,
    atelier: true,
    dashboard: true,
    quickActions: true,
    search: true,
    featureCards: true
  },
  order: ["dashboard", "quickActions", "search", "featureCards", "favorites", "atelier"]
};
const normalizeHomeSettings = settings => {
  const rawCharacter = {
    ...defaultHomeSettings.homeCharacter,
    ...(settings?.homeCharacter || {})
  };
  const safeMessageMode = ["auto", "fixed", "project"].includes(rawCharacter.messageMode) ? rawCharacter.messageMode : "auto";
  const safePosition = value => Math.min(100, Math.max(0, Number.isFinite(Number(value)) ? Number(value) : 50));
  return {
    ...defaultHomeSettings,
    ...settings,
    bannerPositionX: safePosition(settings?.bannerPositionX),
    bannerPositionY: safePosition(settings?.bannerPositionY),
    homeCharacter: {
      ...rawCharacter,
      messageMode: safeMessageMode
    },
    visible: {
      ...defaultHomeSettings.visible,
      ...(settings?.visible || {})
    },
    order: [...(settings?.order || defaultHomeSettings.order).filter(id => homeSections.some(section => section.id === id)), ...defaultHomeSettings.order.filter(id => !(settings?.order || []).includes(id))]
  };
};
const art = (label, a, b) => `data:image/svg+xml,${encodeURIComponent(`
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
  </svg>`)}`;
const libraryPrompts = [{
  id: "lib-sticker-1",
  title: "清潔感のあるステッカーシート",
  category: "ステッカーモックアップ",
  description: "白背景でステッカーの質感が見えやすい、Etsy向けの定番モックアップ。",
  prompt: "温かみのある白い紙の上に置いた、清潔感のあるステッカーシートの平置きモックアップ。自然光、やわらかな影、上品なハンドメイド文具の雰囲気、透過PNGアートを配置しやすい余白。",
  tags: ["ステッカー", "平置き", "シンプル"],
  imageUrl: art("ステッカー", "#f8ead8", "#dfe8df")
}, {
  id: "lib-invitation-1",
  title: "上品な結婚式招待状セット",
  category: "招待状モックアップ",
  description: "招待状セットを上品に見せるカード、封筒、小物つき構図。",
  prompt: "封筒、シルクリボン、ドライフラワーを添えた上品な結婚式招待状のモックアップ。温かみのあるニュートラル背景、洗練された雑誌風写真、やわらかな影。",
  tags: ["結婚式", "招待状", "上品"],
  imageUrl: art("招待状", "#efe1d2", "#f6f3ec")
}, {
  id: "lib-postcard-1",
  title: "旅気分のポストカード平置き",
  category: "ポストカードモックアップ",
  description: "ポストカード作品を旅・雑貨感のある見せ方にする構図。",
  prompt: "リネン素材の机の上に置いたポストカードモックアップ。ヴィンテージ切手、鉛筆、温かい日差し、旅の文具のような心地よい雰囲気、リアルな印刷紙の質感。",
  tags: ["ポストカード", "旅", "紙もの"],
  imageUrl: art("ポストカード", "#eee6d9", "#d9e4e8")
}, {
  id: "lib-greeting-1",
  title: "立てかけたグリーティングカード",
  category: "グリーティングカードモックアップ",
  description: "グリーティングカードを立てて、印刷商品の存在感を出すモックアップ。",
  prompt: "シンプルな棚に立てかけたグリーティングカードのモックアップ。ニュートラルなインテリア、朝のやわらかな光、リアルな厚紙の質感、清潔感のある商品写真。",
  tags: ["カード", "インテリア", "印刷"],
  imageUrl: art("カード", "#f7eadf", "#e5e5dd")
}, {
  id: "lib-etsy-1",
  title: "明るいEtsyサムネイル",
  category: "Etsyサムネイル",
  description: "検索結果で見やすい、明るく余白のあるサムネイル構図。",
  prompt: "明るいEtsy商品画像サムネイル。商品を中央に配置、清潔感のある温かい白背景、見やすい構図、控えめな小物、クリックされやすいマーケット向け写真。",
  tags: ["Etsy", "サムネイル", "商品画像"],
  imageUrl: art("Etsy", "#f8efe6", "#eadfcf")
}, {
  id: "lib-print-1",
  title: "壁に飾るアートプリント",
  category: "アートプリントモックアップ",
  description: "アートプリントをリビングの壁に飾った販売ページ向け写真。",
  prompt: "落ち着いたリビングの壁に飾った額入りアートプリントのモックアップ。オーク材の額縁、ニュートラルなソファ、やわらかな日差し、北欧風インテリア、リアルなファインアート紙。",
  tags: ["アートプリント", "額縁", "インテリア"],
  imageUrl: art("アート", "#e4e7df", "#f8efe2")
}, {
  id: "lib-keychain-1",
  title: "アクリルキーホルダー商品写真",
  category: "アクリルキーホルダーモックアップ",
  description: "透明アクリルの厚みと金具が見える、かわいい商品写真風。",
  prompt: "透明でつやのある縁が見えるアクリルキーホルダーのモックアップ。ゴールドの金具、かわいいチャームの商品写真、淡いニュートラル背景、やわらかな反射、ハンドメイドショップ風。",
  tags: ["キーホルダー", "アクリル", "チャーム"],
  imageUrl: art("キーホルダー", "#f6e6ec", "#e8edf5")
}];
const mockupCategoryIdByTitle = {
  "ステッカーモックアップ": "sticker",
  "招待状モックアップ": "invitation",
  "ポストカードモックアップ": "postcard",
  "グリーティングカードモックアップ": "greeting-card",
  "Etsyサムネイル": "etsy-thumbnail",
  "アートプリントモックアップ": "art-print",
  "アクリルキーホルダーモックアップ": "keychain"
};
const defaultMockupCategories = [{
  id: "sticker",
  title: "ステッカー",
  description: "シート、透明、ライフスタイルなど販売画像に使いやすいモックアップ。",
  coverImage: art("Sticker Board", "#f8e6e1", "#dce7d7")
}, {
  id: "invitation",
  title: "招待状",
  description: "結婚式やイベント招待状を上品に見せるカードと封筒の表紙。",
  coverImage: art("Invitation", "#efe1d2", "#fff6e9")
}, {
  id: "postcard",
  title: "ポストカード",
  description: "旅、紙もの、雑貨感のあるポストカード用モックアップ。",
  coverImage: art("Postcard", "#eee6d9", "#d9e4e8")
}, {
  id: "greeting-card",
  title: "グリーティングカード",
  description: "立てかけ、棚、ギフトシーンに合わせたカード用ボード。",
  coverImage: art("Card", "#f7eadf", "#e5e5dd")
}, {
  id: "etsy-thumbnail",
  title: "Etsyサムネイル",
  description: "検索結果で目に留まりやすい商品画像の見せ方。",
  coverImage: art("Etsy", "#f8efe6", "#eadfcf")
}, {
  id: "art-print",
  title: "アートプリント",
  description: "額縁、壁掛け、インテリアに合わせたアート販売用ボード。",
  coverImage: art("Art Print", "#e4e7df", "#f8efe2")
}, {
  id: "keychain",
  title: "キーホルダー",
  description: "アクリルチャームや小物商品のかわいい撮影イメージ。",
  coverImage: art("Keychain", "#f6e6ec", "#e8edf5")
}];
const defaultLibraryBoardPrompts = [...libraryPrompts.map(prompt => ({
  ...prompt,
  categoryId: mockupCategoryIdByTitle[prompt.category],
  japaneseTranslation: prompt.prompt
})), {
  id: "sticker-simple",
  title: "シンプル",
  category: "ステッカーモックアップ",
  categoryId: "sticker",
  description: "白背景でステッカーの形と色を見せる、いちばん使いやすい基本モックアップ。",
  prompt: "simple sticker mockup on a clean white background, neatly arranged sticker designs, soft natural light, subtle shadows, Etsy listing photo, generous whitespace",
  japaneseTranslation: "白い背景にステッカーをきれいに並べたシンプルな商品写真。やわらかな自然光、薄い影、Etsy販売画像向け、余白多め。",
  tags: [],
  imageUrl: ""
}, {
  id: "sticker-lifestyle",
  title: "ライフスタイル",
  category: "ステッカーモックアップ",
  categoryId: "sticker",
  description: "手帳や文具と一緒に置いた、暮らしの中で使う雰囲気のモックアップ。",
  prompt: "lifestyle sticker mockup on a cute creator desk with planner, pen, washi tape, soft pastel Korean stationery mood, natural daylight, cozy handmade shop aesthetic",
  japaneseTranslation: "手帳、ペン、マスキングテープのそばにステッカーを置いたライフスタイル写真。韓国文具風、淡いパステル、自然光、かわいい作業机。",
  tags: [],
  imageUrl: ""
}, {
  id: "sticker-clear",
  title: "透明ステッカー",
  category: "ステッカーモックアップ",
  categoryId: "sticker",
  description: "透明素材の縁やつや感が分かる、質感重視の販売画像。",
  prompt: "close-up clear sticker mockup showing glossy transparent edges, white backing card, soft reflection, clean premium product photography",
  japaneseTranslation: "透明ステッカーのつやと薄い縁が見える接写モックアップ。白い台紙、やわらかな反射、清潔感のある商品写真。",
  tags: [],
  imageUrl: ""
}, {
  id: "sticker-laptop",
  title: "ノートPC",
  category: "ステッカーモックアップ",
  categoryId: "sticker",
  description: "ノートPCに貼った使用例として見せる、クリエイター向けモックアップ。",
  prompt: "cute sticker mockup placed on a minimal laptop cover, bright desk, stationery props, natural soft shadow, realistic product preview for online shop",
  japaneseTranslation: "シンプルなノートPCの天板にかわいいステッカーを貼ったモックアップ。明るいデスク、文具、ナチュラルな影、販売用プレビュー。",
  tags: [],
  imageUrl: ""
}, {
  id: "sticker-phone",
  title: "スマホ",
  category: "ステッカーモックアップ",
  categoryId: "sticker",
  description: "スマホケースや小物に貼った雰囲気が伝わるモックアップ。",
  prompt: "cute sticker mockup on a phone case, soft pastel background, planner and small stationery props, gentle light, clean handmade product photo",
  japaneseTranslation: "スマホケースにステッカーを貼ったかわいい商品写真。淡い背景、手帳や小物を添えた構図、やわらかな光。",
  tags: [],
  imageUrl: ""
}, {
  id: "sticker-packaging",
  title: "パッケージ",
  category: "ステッカーモックアップ",
  categoryId: "sticker",
  description: "台紙や袋に入れた販売時の梱包イメージを見せるモックアップ。",
  prompt: "sticker packaging mockup with backing card and clear sleeve, small shop card, soft beige background, handmade Etsy seller product presentation",
  japaneseTranslation: "ステッカーを台紙と透明袋に入れたパッケージモックアップ。ショップカード、淡いベージュ背景、ハンドメイド販売向け。",
  tags: [],
  imageUrl: ""
}];
const samplePrompts = [{
  ...libraryPrompts[0],
  id: "my-1",
  title: "かわいい動物ステッカー",
  note: "動物クリップアートのステッカー販売ページ用。",
  tags: ["かわいい", "動物", "ステッカー"],
  favorite: true
}, {
  ...libraryPrompts[5],
  id: "my-2",
  title: "植物アートプリント",
  note: "水彩植物シリーズ用。額縁は明るめ。",
  tags: ["植物", "壁掛けアート"],
  favorite: false
}];
const sampleMj = [{
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
  note: "背景透過にしやすい白背景で使う。"
}, {
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
  note: "商品画像の1枚目候補。"
}];
const sampleProjects = [{
  id: "project-1",
  name: "ハロウィンクリップアート",
  description: "秋から販売するハロウィン素材セット。",
  promptIds: ["my-1"],
  mjIds: ["mj-1"],
  note: "9月上旬までに30点作成。",
  tags: ["季節商品", "ハロウィン"],
  dueDate: "2026-09-01",
  remindOnHome: true
}];
const blankPrompt = (textOnly = false) => ({
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
  isTextStock: textOnly
});
const blankMj = () => ({
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
  note: ""
});
const blankProject = () => ({
  id: "",
  name: "",
  description: "",
  promptIds: [],
  mjIds: [],
  note: "",
  tags: [],
  dueDate: "",
  remindOnHome: false
});
const uid = () => `${Date.now()}-${Math.random().toString(16).slice(2)}`;
const splitTags = value => value.split(",").map(tag => tag.trim()).filter(Boolean);
const tagText = tags => tags.join(", ");
const lowerIncludes = (source, query) => source.toLowerCase().includes(query.toLowerCase());
const IMAGE_WARNING_KEY = "promptAtelierImageStorageWarningLevel";
const IMAGE_MIGRATION_KEY = "promptAtelierImageMigrationIndexedDbV1";
const SAMPLE_SEED_PATH = "./src/data/sampleSeed.json";
const DELETED_SAMPLE_IDS_KEY = "promptAtelierDeletedSampleIds";
const SAMPLE_EXPORT_KEYS = ["prompt-atelier-mockup-categories-v2", "prompt-atelier-library-prompts-v5", "prompt-atelier-prompts-ja-v2", "promptAtelierVideoPrompts", "promptAtelierVideoPromptStocks", "promptAtelierMidjourneySettings", "prompt-atelier-projects-ja-v2", "promptAtelierJournal", "promptAtelierGallery", "promptAtelierHomeSettings", "promptAtelierWorkTools"];
const SAMPLE_DATA_STORAGE_MAP = {
  libraryItems: "prompt-atelier-mockup-categories-v2",
  mockupItems: "prompt-atelier-library-prompts-v5",
  mockupStocks: "prompt-atelier-library-prompts-v5",
  promptCards: "prompt-atelier-prompts-ja-v2",
  promptStocks: "prompt-atelier-prompts-ja-v2",
  videoPromptCards: "promptAtelierVideoPrompts",
  videoPromptStocks: "promptAtelierVideoPromptStocks",
  midjourneySettings: "promptAtelierMidjourneySettings",
  projects: "prompt-atelier-projects-ja-v2",
  galleryItems: "promptAtelierGallery",
  journalItems: "promptAtelierJournal",
  journalBackgrounds: "promptAtelierJournal",
  homeSettings: "promptAtelierHomeSettings",
  workTools: "promptAtelierWorkTools"
};
const STORAGE_LIMIT_BYTES = 5 * 1024 * 1024;
const IMAGE_DB_NAME = "PromptAtelierDB";
const IMAGE_DB_VERSION = 1;
const IMAGE_STORE_NAME = "images";
const indexedDbImageCache = new Map();
const indexedDbRef = id => `indexeddb:${id}`;
const indexedDbThumbRef = id => `indexeddb-thumb:${id}`;
const isIndexedDbImageRef = value => /^indexeddb(?:-thumb)?:/.test(value);
const indexedDbIdFromRef = value => value.replace(/^indexeddb(?:-thumb)?:/, "");
const isDataImageUrl = value => typeof value === "string" && /^data:image\/(png|jpe?g|webp);base64,/i.test(value);
const isDarkTheme = id => ["dark", "night-lavender"].includes(id);
const readableTextOn = hex => {
  const normalized = hex.replace("#", "");
  if (!/^[0-9a-f]{6}$/i.test(normalized)) return "#fffdf9";
  const [r, g, b] = [0, 2, 4].map(start => parseInt(normalized.slice(start, start + 2), 16) / 255);
  const [lr, lg, lb] = [r, g, b].map(value => value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  return 0.2126 * lr + 0.7152 * lg + 0.0722 * lb > 0.58 ? "#2f2924" : "#fffdf9";
};
function themeClassName(id) {
  if (["cute", "girly", "kstationery", "pastel", "lavender"].includes(id)) return "theme-cute";
  if (["cool", "simple", "pop-blue"].includes(id)) return "theme-cool";
  if (["dark", "night-lavender"].includes(id)) return "theme-dark";
  if (["vivid-pink", "emerald", "retro-orange"].includes(id)) return "theme-vivid";
  if (["natural", "cafe", "antique"].includes(id)) return "theme-natural";
  return "theme-cute";
}
function themeStyle(theme) {
  const dark = isDarkTheme(theme.id);
  const accentText = readableTextOn(theme.vars.accent);
  const buttonText = readableTextOn(dark ? theme.vars.accent : theme.vars.paper);
  const decorativeMap = {
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
    "retro-orange": "color-mix(in srgb, #f28c28 34%, transparent)"
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
    "--card-gradient": dark ? `linear-gradient(145deg, ${theme.vars.paper}, ${theme.vars.shell})` : `linear-gradient(145deg, ${theme.vars.paper} 8%, ${theme.vars.shell} 58%, ${theme.vars.sand})`,
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
    "--nav-ink": theme.vars.ink
  };
}
function projectDueInfo(value) {
  if (!value) return {
    diff: 999999,
    expired: false,
    text: ""
  };
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(`${value}T00:00:00`);
  if (Number.isNaN(due.getTime())) return {
    diff: 999999,
    expired: false,
    text: ""
  };
  const diff = Math.ceil((due.getTime() - today.getTime()) / 86400000);
  return {
    diff,
    expired: diff < 0,
    text: diff < 0 ? `${Math.abs(diff)}日過ぎています` : diff === 0 ? "今日" : `あと${diff}日`
  };
}
function projectDueText(value) {
  const info = projectDueInfo(value);
  return info.expired ? "⚠ 達成予定日を過ぎています" : `達成予定まで ${info.text}`;
}
function projectSortRank(project) {
  if (!project.dueDate) return 1;
  return projectDueInfo(project.dueDate).expired ? 2 : 0;
}
function sortProjectsForDisplay(items) {
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
function collectAtelierImages(prompts, mjSettings, galleryImages) {
  const promptImages = prompts.filter(prompt => prompt.imageUrl).map(prompt => ({
    id: `prompt-${prompt.id}`,
    src: prompt.imageUrl,
    thumbnail: prompt.imageUrl,
    title: prompt.title || "プロンプト画像",
    memo: prompt.note || prompt.description || "",
    createdAt: prompt.id,
    source: "prompt",
    favorite: Boolean(prompt.favorite)
  }));
  const mjImages = mjSettings.flatMap(setting => (setting.images || (setting.imageUrl ? [setting.imageUrl] : [])).map((src, index) => ({
    id: `mj-${setting.id}-${index}`,
    src: typeof src === "string" ? src : src.src || "",
    thumbnail: typeof src === "string" ? src : src.thumbnail || src.src || "",
    title: setting.title || "MJ画像",
    memo: setting.memo || setting.note || "",
    createdAt: setting.createdAt || setting.id,
    source: "midjourney",
    favorite: false
  })));
  const normalizedGalleryImages = galleryImages.map(item => ({
    ...item,
    src: item.src,
    thumbnail: item.thumbnail || item.src
  }));
  const merged = [...promptImages, ...mjImages, ...normalizedGalleryImages].filter(item => item.src);
  const seen = new Set();
  return merged.filter(item => {
    if (seen.has(item.src)) return false;
    seen.add(item.src);
    return true;
  }).sort((a, b) => Number(Boolean(b.favorite)) - Number(Boolean(a.favorite)) || String(b.createdAt).localeCompare(String(a.createdAt))).slice(0, 24);
}
function resolveIndexedDbImage(value, preferThumbnail = false) {
  if (!isIndexedDbImageRef(value)) return value;
  const record = indexedDbImageCache.get(indexedDbIdFromRef(value));
  if (!record) return "";
  return preferThumbnail ? record.thumbnail || record.src : record.src || record.thumbnail || "";
}
function imageSrc(image) {
  if (!image) return "";
  const value = typeof image === "string" ? image : image.src || image.thumbnail || "";
  return resolveIndexedDbImage(value, false);
}
function imageThumbnail(image) {
  if (!image) return "";
  const value = typeof image === "string" ? image : image.thumbnail || image.src || "";
  return resolveIndexedDbImage(value, true);
}
function getCoverImages(item) {
  const existing = Array.isArray(item?.coverImages) ? item.coverImages.filter(Boolean) : [];
  if (existing.length) return existing.slice(0, 3);
  const fallback = item?.coverImage || item?.thumbnail || item?.image || item?.imageUrl || item?.previewImage;
  return fallback ? [fallback] : [];
}
function primaryCoverImage(item) {
  return getCoverImages(item)[0] || "";
}
function imageReference(id, category = "gallery", title = "") {
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
    createdAt: record?.createdAt || new Date().toISOString()
  };
}
function normalizeImageData(image) {
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
      createdAt: image.createdAt || new Date().toISOString()
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
    createdAt: new Date().toISOString()
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
    level: ratio >= 0.9 ? "strong" : ratio >= 0.7 ? "light" : "none"
  };
}
function formatStoragePercent(ratio) {
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
function isStickerEffectOn(item) {
  if (!item) return false;
  return item.stickerEffect ?? item.sticker ?? true;
}
function isSupportedImageFile(file) {
  return ["image/jpeg", "image/png", "image/webp"].includes(file.type) || /\.(jpe?g|png|webp)$/i.test(file.name);
}
function loadImageFromFile(file) {
  return new Promise((resolve, reject) => {
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
function canvasDataUrl(image, maxSide, quality = 0.82) {
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
  return {
    dataUrl,
    width,
    height,
    mimeType: dataUrl.slice(5, dataUrl.indexOf(";"))
  };
}
function videoFrameDataUrl(video, maxSide = 720, quality = 0.8) {
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
  return {
    dataUrl,
    width,
    height,
    mimeType: dataUrl.slice(5, dataUrl.indexOf(";"))
  };
}
function openImageDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(IMAGE_DB_NAME, IMAGE_DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(IMAGE_STORE_NAME)) {
        const store = db.createObjectStore(IMAGE_STORE_NAME, {
          keyPath: "id"
        });
        store.createIndex("category", "category", {
          unique: false
        });
        store.createIndex("createdAt", "createdAt", {
          unique: false
        });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
async function putIndexedDbImage(record) {
  const db = await openImageDb();
  await new Promise((resolve, reject) => {
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
  const records = await new Promise((resolve, reject) => {
    const request = db.transaction(IMAGE_STORE_NAME, "readonly").objectStore(IMAGE_STORE_NAME).getAll();
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error);
  });
  db.close();
  return records;
}
async function deleteIndexedDbImage(id) {
  const db = await openImageDb();
  await new Promise((resolve, reject) => {
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
  records.forEach(record => indexedDbImageCache.set(record.id, record));
  return records;
}
async function storeOptimizedImage(image, category = "gallery", patch = {}) {
  const id = image.dbId || image.id || uid();
  const now = new Date().toISOString();
  const record = {
    ...image,
    ...patch,
    id,
    dbId: id,
    category,
    src: imageSrc(image.src) || image.src,
    thumbnail: imageThumbnail(image.thumbnail) || image.thumbnail || image.src,
    createdAt: image.createdAt || now,
    updatedAt: now
  };
  await putIndexedDbImage(record);
  return imageReference(id, category, patch.title || image.originalName || "image");
}
async function storeExistingImageValue(value, category = "gallery", title = "image") {
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
      updatedAt: now
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
      updatedAt: now
    });
    return {
      ...value,
      id,
      dbId: id,
      src: indexedDbRef(id),
      thumbnail: indexedDbThumbRef(id)
    };
  }
  return value;
}
async function optimizeImage(file, category = "gallery") {
  if (!isSupportedImageFile(file)) throw new Error("対応していない画像形式です");
  const image = await loadImageFromFile(file);
  const full = canvasDataUrl(image, 1200, 0.82);
  const thumbnail = canvasDataUrl(image, 360, 0.76);
  const optimized = {
    id: uid(),
    src: full.dataUrl,
    thumbnail: thumbnail.dataUrl,
    originalName: file.name,
    mimeType: full.mimeType,
    width: full.width,
    height: full.height,
    createdAt: new Date().toISOString()
  };
  return storeOptimizedImage(optimized, category, {
    title: file.name,
    memo: "",
    favorite: false
  });
}
async function createVideoThumbnail(file) {
  if (!file.type.startsWith("video/")) throw new Error("動画ファイルを選んでください");
  const url = URL.createObjectURL(file);
  try {
    const video = document.createElement("video");
    video.preload = "metadata";
    video.muted = true;
    video.playsInline = true;
    const loaded = new Promise((resolve, reject) => {
      video.onloadedmetadata = () => resolve();
      video.onerror = () => reject(new Error("動画を読み込めませんでした"));
    });
    video.src = url;
    await loaded;
    const targetTime = Math.min(1, Math.max(0, (video.duration || 1) - 0.1));
    await new Promise((resolve, reject) => {
      video.onseeked = () => resolve();
      video.onerror = () => reject(new Error("動画サムネイルを作成できませんでした"));
      video.currentTime = targetTime;
    });
    const full = videoFrameDataUrl(video, 1200, 0.82);
    const thumbnail = videoFrameDataUrl(video, 300, 0.78);
    const image = {
      id: uid(),
      src: full.dataUrl,
      thumbnail: thumbnail.dataUrl,
      originalName: `${file.name}-thumbnail`,
      mimeType: full.mimeType,
      width: full.width,
      height: full.height,
      createdAt: new Date().toISOString()
    };
    return storeOptimizedImage(image, "video-thumbnail", {
      title: file.name,
      memo: "動画から自動生成",
      favorite: false
    });
  } finally {
    URL.revokeObjectURL(url);
  }
}
async function createThumbnail(file) {
  const image = await loadImageFromFile(file);
  return canvasDataUrl(image, 360, 0.76).dataUrl;
}
function saveImageToStorage(image) {
  scheduleStorageWarningCheck();
  return image;
}
function clipboardImageFiles(event) {
  return Array.from(event.clipboardData?.items || []).filter(item => item.kind === "file").map(item => item.getAsFile()).filter(file => Boolean(file) && isSupportedImageFile(file));
}
function useStoredState(key, fallback) {
  const [value, setValue] = React.useState(() => {
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
  return [value, setValue];
}
function categoryForImageField(key) {
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
async function migrateImageFields(value, storageKey) {
  if (Array.isArray(value)) {
    const next = [];
    for (const item of value) next.push(await migrateImageFields(item, storageKey));
    return next;
  }
  if (!value || typeof value !== "object") return value;
  if (value.src && isDataImageUrl(value.src)) {
    return storeExistingImageValue(value, categoryForImageField(storageKey), value.title || value.originalName || storageKey);
  }
  const next = {
    ...value
  };
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
  const keys = Array.from({
    length: localStorage.length
  }, (_, index) => localStorage.key(index)).filter(key => Boolean(key) && (key.startsWith("promptAtelier") || key.startsWith("prompt-atelier")));
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
  const data = {};
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
    images: await getAllIndexedDbImages()
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: "application/json"
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `prompt-atelier-backup-${today}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
async function restorePromptAtelierBackup(file) {
  const text = await file.text();
  const parsed = JSON.parse(text);
  const data = parsed?.data && typeof parsed.data === "object" ? parsed.data : parsed;
  if (!data || typeof data !== "object") throw new Error("Invalid backup data");
  const existingKeys = Array.from({
    length: localStorage.length
  }, (_, index) => localStorage.key(index)).filter(key => Boolean(key) && (key.startsWith("promptAtelier") || key.startsWith("prompt-atelier")));
  existingKeys.forEach(key => localStorage.removeItem(key));
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
function padSampleIndex(index) {
  return String(index + 1).padStart(3, "0");
}
function cleanSampleValue(value) {
  if (typeof value === "string") {
    if (value.startsWith("blob:")) return "";
    return value;
  }
  if (Array.isArray(value)) return value.map(cleanSampleValue).filter(item => item !== undefined);
  if (!value || typeof value !== "object") return value;
  const next = {};
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
function parseStorageValueForSample(key) {
  const raw = localStorage.getItem(key);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return raw;
  }
}
function withSampleMeta(item, prefix, index) {
  if (!item || typeof item !== "object") return item;
  const sampleId = item.sampleId || `${prefix}-${padSampleIndex(index)}`;
  return {
    ...cleanSampleValue(item),
    id: item.id || sampleId,
    isSample: true,
    createdFromSeedExport: true,
    sampleId
  };
}
function sampleArray(value, prefix) {
  return Array.isArray(value) ? value.map((item, index) => withSampleMeta(item, prefix, index)) : [];
}
function sampleHomeSettings(value) {
  if (!value || typeof value !== "object") return {};
  const cleaned = cleanSampleValue(value);
  return {
    themeId: cleaned.themeId,
    bannerImageUrl: cleaned.bannerImageUrl,
    bannerVisible: cleaned.bannerVisible,
    bannerSize: cleaned.bannerSize,
    bannerFit: cleaned.bannerFit,
    bannerPositionX: cleaned.bannerPositionX,
    bannerPositionY: cleaned.bannerPositionY,
    workToolIconStyle: cleaned.workToolIconStyle,
    homeCharacter: cleaned.homeCharacter,
    visible: cleaned.visible,
    order: cleaned.order
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
  const galleryValue = parseStorageValueForSample("promptAtelierGallery") || [];
  const journalValue = parseStorageValueForSample("promptAtelierJournal") || {};
  const homeSettingsValue = parseStorageValueForSample("promptAtelierHomeSettings") || {};
  const workToolsValue = parseStorageValueForSample("promptAtelierWorkTools") || [];
  const libraryPrompts = Array.isArray(libraryPromptsValue) ? libraryPromptsValue : [];
  const promptBook = Array.isArray(promptBookValue) ? promptBookValue : [];
  return {
    libraryItems: sampleArray(mockupCategories, "sample-library"),
    mockupItems: sampleArray(libraryPrompts.filter(item => !item.isTextStock), "sample-mockup"),
    mockupStocks: sampleArray(libraryPrompts.filter(item => item.isTextStock), "sample-mockup-stock"),
    promptCards: sampleArray(promptBook.filter(item => !item.isTextStock), "sample-prompt-card"),
    promptStocks: sampleArray(promptBook.filter(item => item.isTextStock), "sample-prompt-stock"),
    videoPromptCards: sampleArray(videoPromptsValue, "sample-video-card").map(item => ({
      ...item,
      url: typeof item.url === "string" && item.url.startsWith("blob:") ? "" : item.url,
      videoUrl: typeof item.videoUrl === "string" && item.videoUrl.startsWith("blob:") ? "" : item.videoUrl
    })),
    videoPromptStocks: sampleArray(videoStocksValue, "sample-video-stock"),
    midjourneySettings: sampleArray(midjourneyValue, "sample-mj-setting"),
    projects: sampleArray(projectsValue, "sample-project"),
    galleryItems: sampleArray(galleryValue, "sample-gallery"),
    journalItems: sampleArray(journalValue?.items || [], "sample-journal-item"),
    journalBackgrounds: sampleArray(journalValue?.customBackgrounds || [], "sample-journal-bg"),
    homeSettings: sampleHomeSettings(homeSettingsValue),
    workTools: sampleArray(workToolsValue, "sample-work-tool")
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
    sampleId: image.sampleId || `sample-image-${padSampleIndex(index)}`
  }));
  const payload = {
    app: "Prompt Atelier",
    type: "prompt-atelier-sample-seed",
    version: 1,
    exportedAt: new Date().toISOString(),
    data,
    images
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: "application/json"
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "prompt-atelier-sample-seed.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
function sampleIdOf(item) {
  return item?.sampleId || "";
}
function mergeSampleCollection(existing, incoming, deletedIds) {
  if (!Array.isArray(incoming)) return existing ?? incoming;
  const current = Array.isArray(existing) ? existing : [];
  const currentSampleIds = new Set(current.map(sampleIdOf).filter(Boolean));
  const next = [...current];
  incoming.forEach(item => {
    const sampleId = sampleIdOf(item);
    if (!sampleId || deletedIds.has(sampleId) || currentSampleIds.has(sampleId)) return;
    next.push(cleanSampleValue(item));
    currentSampleIds.add(sampleId);
  });
  return next;
}
function mergeJournalSample(existing, incoming, deletedIds) {
  const current = existing && typeof existing === "object" ? existing : {};
  const next = {
    ...current
  };
  if (!next.background && incoming?.background) next.background = incoming.background;
  if (Array.isArray(incoming?.items)) next.items = mergeSampleCollection(current.items || [], incoming.items, deletedIds);
  if (Array.isArray(incoming?.customBackgrounds)) next.customBackgrounds = mergeSampleCollection(current.customBackgrounds || [], incoming.customBackgrounds, deletedIds);
  return next;
}
function mergeSampleValue(existing, incoming, key, deletedIds) {
  if (key.includes("HomeSettings")) return existing ?? incoming;
  if (key.includes("Journal")) return mergeJournalSample(existing, incoming, deletedIds);
  return mergeSampleCollection(existing, incoming, deletedIds);
}
function sampleSeedDataToStorage(seedData) {
  const storageData = {};
  const append = (key, values) => {
    if (!values.length) return;
    storageData[key] = [...(storageData[key] || []), ...values];
  };
  append("prompt-atelier-mockup-categories-v2", Array.isArray(seedData.libraryItems) ? seedData.libraryItems : []);
  append("prompt-atelier-library-prompts-v5", Array.isArray(seedData.mockupItems) ? seedData.mockupItems : []);
  append("prompt-atelier-library-prompts-v5", Array.isArray(seedData.mockupStocks) ? seedData.mockupStocks : []);
  append("prompt-atelier-prompts-ja-v2", Array.isArray(seedData.promptCards) ? seedData.promptCards : []);
  append("prompt-atelier-prompts-ja-v2", Array.isArray(seedData.promptStocks) ? seedData.promptStocks : []);
  append("promptAtelierVideoPrompts", Array.isArray(seedData.videoPromptCards) ? seedData.videoPromptCards : []);
  append("promptAtelierVideoPromptStocks", Array.isArray(seedData.videoPromptStocks) ? seedData.videoPromptStocks : []);
  append("promptAtelierMidjourneySettings", Array.isArray(seedData.midjourneySettings) ? seedData.midjourneySettings : []);
  append("prompt-atelier-projects-ja-v2", Array.isArray(seedData.projects) ? seedData.projects : []);
  append("promptAtelierGallery", Array.isArray(seedData.galleryItems) ? seedData.galleryItems : []);
  if (Array.isArray(seedData.journalItems) || Array.isArray(seedData.journalBackgrounds)) {
    storageData.promptAtelierJournal = {
      background: seedData.journalBackground || "paper",
      items: Array.isArray(seedData.journalItems) ? seedData.journalItems : [],
      customBackgrounds: Array.isArray(seedData.journalBackgrounds) ? seedData.journalBackgrounds : []
    };
  }
  if (seedData.homeSettings && typeof seedData.homeSettings === "object") storageData.promptAtelierHomeSettings = seedData.homeSettings;
  append("promptAtelierWorkTools", Array.isArray(seedData.workTools) ? seedData.workTools : []);
  return storageData;
}
async function loadSampleSeedIfNeeded() {
  try {
    const response = await fetch(SAMPLE_SEED_PATH, {
      cache: "no-store"
    });
    if (!response.ok) return false;
    const seed = await response.json();
    if (!["sample-seed", "prompt-atelier-sample-seed"].includes(seed?.type) || !seed?.data) return false;
    const deletedIds = new Set(JSON.parse(localStorage.getItem(DELETED_SAMPLE_IDS_KEY) || "[]"));
    let changed = false;
    const storageData = Object.keys(SAMPLE_DATA_STORAGE_MAP).some(key => key in seed.data) ? sampleSeedDataToStorage(seed.data) : seed.data;
    Object.entries(storageData).forEach(([key, incoming]) => {
      if (!SAMPLE_EXPORT_KEYS.includes(key)) return;
      const existing = parseStorageValueForSample(key);
      const merged = mergeSampleValue(existing, incoming, key, deletedIds);
      if (JSON.stringify(existing) !== JSON.stringify(merged)) {
        localStorage.setItem(key, JSON.stringify(merged));
        changed = true;
      }
    });
    if (Array.isArray(seed.images)) {
      for (const image of seed.images) {
        const sampleId = sampleIdOf(image);
        if (sampleId && deletedIds.has(sampleId)) continue;
        if (image?.id && image?.src && !indexedDbImageCache.has(image.id)) {
          await putIndexedDbImage(cleanSampleValue(image));
          changed = true;
        }
      }
    }
    return changed;
  } catch {
    return false;
  }
}
function App() {
  const [screen, setScreen] = React.useState("home");
  const [myPrompts, setMyPrompts] = useStoredState("prompt-atelier-prompts-ja-v2", samplePrompts);
  const [mjSettings, setMjSettings] = useStoredState("promptAtelierMidjourneySettings", sampleMj);
  const [projects, setProjects] = useStoredState("prompt-atelier-projects-ja-v2", sampleProjects);
  const [recentIds, setRecentIds] = useStoredState("prompt-atelier-recent-ja-v2", ["my-1", "lib-sticker-1"]);
  const [rawHomeSettings, setRawHomeSettings] = useStoredState("promptAtelierHomeSettings", defaultHomeSettings);
  const [workTools, setWorkTools] = useStoredState("promptAtelierWorkTools", defaultWorkTools);
  const [galleryImages, setGalleryImages] = useStoredState("promptAtelierGallery", sampleAtelierImages);
  const [journal, setJournal] = useStoredState("promptAtelierJournal", defaultJournal);
  const [videos, setVideos] = useStoredState("promptAtelierVideoPrompts", initialVideoPrompts());
  const [videoStocks, setVideoStocks] = useStoredState("promptAtelierVideoPromptStocks", []);
  const [toast, setToast] = React.useState("");
  const [isImageMigrating, setIsImageMigrating] = React.useState(false);
  const [, setImageCacheVersion] = React.useState(0);
  const homeSettings = normalizeHomeSettings(rawHomeSettings);
  const activeTheme = homeThemes.find(theme => theme.id === homeSettings.themeId) || homeThemes[0];
  const appStyle = themeStyle(activeTheme);
  const allPrompts = [...myPrompts, ...libraryPrompts];
  const recentPrompts = recentIds.map(id => allPrompts.find(p => p.id === id)).filter(Boolean).slice(0, 4);
  const favorites = myPrompts.filter(p => p.favorite).slice(0, 4);
  const atelierImages = collectAtelierImages(myPrompts, mjSettings, galleryImages);
  const copyText = async (text, id) => {
    await navigator.clipboard.writeText(text);
    if (id) setRecentIds(ids => [id, ...ids.filter(item => item !== id)].slice(0, 8));
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
        setImageCacheVersion(version => version + 1);
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
  return /*#__PURE__*/React.createElement("div", {
    className: `app-shell ${themeClassName(activeTheme.id)}`,
    style: appStyle
  }, /*#__PURE__*/React.createElement("header", {
    className: "app-header"
  }, /*#__PURE__*/React.createElement("button", {
    className: "brand",
    onClick: () => setScreen("home"),
    "aria-label": "ホームへ"
  }, /*#__PURE__*/React.createElement("span", {
    className: "brand-mark"
  }, "PA"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Prompt Atelier"), /*#__PURE__*/React.createElement("small", null, "AIイラストクリエイター向け"))), /*#__PURE__*/React.createElement("nav", null, [["home", "ホーム"], ["library", "ライブラリ"], ["prompts", "マイプロンプト"], ["mj", "ミッドジャーニー設定"], ["projects", "プロジェクト"], ["videos", "動画プロンプト"], ["customize", "カスタマイズ"]].map(([id, label]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    className: screen === id ? "active" : "",
    onClick: () => setScreen(id)
  }, label)))), /*#__PURE__*/React.createElement("main", null, screen === "home" && /*#__PURE__*/React.createElement(Home, {
    setScreen: setScreen,
    recent: recentPrompts,
    favorites: favorites,
    projects: projects,
    myPrompts: myPrompts,
    mjSettings: mjSettings,
    copyText: copyText,
    settings: homeSettings,
    workTools: workTools,
    atelierImages: atelierImages
  }), screen === "customize" && /*#__PURE__*/React.createElement(HomeCustomize, {
    settings: homeSettings,
    setSettings: setRawHomeSettings,
    setScreen: setScreen,
    workTools: workTools,
    setWorkTools: setWorkTools,
    projects: projects
  }), screen === "library" && /*#__PURE__*/React.createElement(Library, {
    copyText: copyText,
    setScreen: setScreen
  }), screen === "prompts" && /*#__PURE__*/React.createElement(PromptBook, {
    prompts: myPrompts,
    setPrompts: setMyPrompts,
    copyText: copyText,
    setScreen: setScreen
  }), screen === "mj" && /*#__PURE__*/React.createElement(Midjourney, {
    settings: mjSettings,
    setSettings: setMjSettings,
    copyText: copyText,
    setScreen: setScreen
  }), screen === "projects" && /*#__PURE__*/React.createElement(Projects, {
    projects: projects,
    setProjects: setProjects,
    prompts: myPrompts,
    settings: mjSettings,
    copyText: copyText,
    setScreen: setScreen
  }), screen === "journal" && /*#__PURE__*/React.createElement(JournalPage, {
    images: atelierImages,
    journal: journal,
    setJournal: setJournal,
    setGalleryImages: setGalleryImages,
    setScreen: setScreen
  }), screen === "gallery" && /*#__PURE__*/React.createElement(GalleryPage, {
    images: galleryImages,
    setImages: setGalleryImages,
    setJournal: setJournal,
    setScreen: setScreen
  }), screen === "videos" && /*#__PURE__*/React.createElement(VideoLibrary, {
    videos: videos,
    setVideos: setVideos,
    videoStocks: videoStocks,
    setVideoStocks: setVideoStocks,
    setScreen: setScreen
  })), isImageMigrating && /*#__PURE__*/React.createElement("div", {
    className: "image-migration-overlay"
  }, /*#__PURE__*/React.createElement("div", null, "画像データを最適化しています…")), toast && /*#__PURE__*/React.createElement("div", {
    className: "toast"
  }, toast));
}
function Home({
  setScreen,
  recent,
  favorites,
  projects,
  myPrompts,
  mjSettings,
  copyText,
  settings,
  workTools,
  atelierImages
}) {
  const [homeQuery, setHomeQuery] = React.useState("");
  const isVisible = id => settings.visible[id] !== false;
  const entries = [["library", "モックアップライブラリ", "販売画像に使える定番プロンプト", "mockup"], ["prompts", "プロンプト帳", "自分だけのプロンプトを保存", "notebook"], ["videos", "動画プロンプト帳", "Runway・Kling・Veo・Hailuo・Pikaなどの動画生成プロンプトをまとめて管理します。", "video"], ["mj", "MJ設定", "Midjourneyパラメータ管理", "magic"], ["projects", "プロジェクト", "素材セットごとにまとめる", "folder"]];
  const searchable = [...myPrompts, ...projects].filter(item => {
    const text = `${item.title || item.name} ${item.description || ""} ${item.note || ""} ${(item.tags || []).join(" ")}`;
    return homeQuery && lowerIncludes(text, homeQuery);
  }).slice(0, 3);
  const nextReminder = projects.filter(project => project.remindOnHome && project.dueDate).sort((a, b) => {
    const aInfo = projectDueInfo(a.dueDate || "");
    const bInfo = projectDueInfo(b.dueDate || "");
    if (aInfo.expired !== bInfo.expired) return aInfo.expired ? -1 : 1;
    return Math.abs(aInfo.diff) - Math.abs(bInfo.diff);
  })[0];
  const reminderInfo = nextReminder ? projectDueInfo(nextReminder.dueDate || "") : null;
  const dashboardItems = [{
    screen: "library",
    title: "モックアップ",
    value: `${Math.max(libraryPrompts.length, 128)}件`,
    icon: "mockup"
  }, {
    screen: "prompts",
    title: "プロンプト帳",
    value: `${Math.max(myPrompts.length, 42)}件`,
    icon: "notebook"
  }, {
    screen: "mj",
    title: "MJ設定",
    value: `${Math.max(mjSettings.length, 18)}件`,
    icon: "magic"
  }, {
    screen: "projects",
    title: "プロジェクト",
    value: `${Math.min(projects.length, 30)}件`,
    icon: "folder"
  }, {
    screen: "projects",
    title: reminderInfo?.expired ? "期限超過" : "達成予定",
    value: nextReminder ? reminderInfo?.text || "" : "リマインドなし",
    icon: "alarm",
    note: nextReminder?.name || ""
  }];
  const normalizedTools = workTools.slice(0, 10);
  const renderSection = sectionId => {
    if (!isVisible(sectionId)) return null;
    if (sectionId === "dashboard") {
      return /*#__PURE__*/React.createElement("section", {
        className: "dashboard-panel home-module",
        key: sectionId
      }, /*#__PURE__*/React.createElement("div", {
        className: "dashboard-grid"
      }, dashboardItems.map(item => /*#__PURE__*/React.createElement("button", {
        className: "stat-card",
        key: `${item.title}-${item.icon}`,
        onClick: () => setScreen(item.screen)
      }, /*#__PURE__*/React.createElement("span", {
        className: "stat-icon"
      }, /*#__PURE__*/React.createElement(FeatureIcon, {
        name: item.icon
      })), /*#__PURE__*/React.createElement("span", {
        className: "stat-title"
      }, item.title), /*#__PURE__*/React.createElement("strong", null, item.value), item.note && /*#__PURE__*/React.createElement("small", null, item.note)))));
    }
    if (sectionId === "quickActions") {
      return /*#__PURE__*/React.createElement("section", {
        className: `work-tools-card home-module ${settings.workToolIconStyle || "pastel"}`,
        key: sectionId
      }, /*#__PURE__*/React.createElement("h2", null, "作業ツール"), /*#__PURE__*/React.createElement("div", {
        className: "work-tools-launcher"
      }, normalizedTools.map(tool => /*#__PURE__*/React.createElement("a", {
        className: "work-tool-launcher-item",
        href: tool.url,
        target: "_blank",
        rel: "noopener noreferrer",
        key: tool.id,
        "aria-label": `${tool.name}を開く`
      }, /*#__PURE__*/React.createElement("span", null, tool.iconImage ? /*#__PURE__*/React.createElement("img", {
        src: imageThumbnail(tool.iconImage),
        alt: ""
      }) : /*#__PURE__*/React.createElement("b", null, tool.iconText || tool.name.slice(0, 2))), /*#__PURE__*/React.createElement("strong", null, tool.name)))));
    }
    if (sectionId === "search") {
      return /*#__PURE__*/React.createElement("section", {
        key: sectionId
      }, /*#__PURE__*/React.createElement("div", {
        className: "home-search"
      }, /*#__PURE__*/React.createElement("span", null, "⌕"), /*#__PURE__*/React.createElement("input", {
        value: homeQuery,
        onChange: e => setHomeQuery(e.target.value),
        placeholder: "プロンプトやプロジェクトを検索..."
      })), homeQuery && /*#__PURE__*/React.createElement("div", {
        className: "home-search-results"
      }, searchable.length ? searchable.map(item => /*#__PURE__*/React.createElement("button", {
        key: item.id,
        onClick: () => setScreen(item.name ? "projects" : "prompts")
      }, item.title || item.name)) : /*#__PURE__*/React.createElement("small", null, "一致する項目がありません。")));
    }
    if (sectionId === "featureCards") {
      const visibleEntries = entries.filter(([id]) => isVisible(id));
      if (!visibleEntries.length) return null;
      return /*#__PURE__*/React.createElement("section", {
        className: "home-feature-grid",
        key: sectionId
      }, visibleEntries.map(([id, title, body, icon]) => /*#__PURE__*/React.createElement("button", {
        className: "home-feature-card",
        key: id,
        onClick: () => setScreen(id)
      }, /*#__PURE__*/React.createElement("span", {
        className: "feature-corner-spark"
      }, "✦"), /*#__PURE__*/React.createElement("span", {
        className: "feature-washi"
      }), /*#__PURE__*/React.createElement("span", {
        className: "feature-icon"
      }, /*#__PURE__*/React.createElement(FeatureIcon, {
        name: icon
      })), /*#__PURE__*/React.createElement("span", {
        className: "feature-title"
      }, title), /*#__PURE__*/React.createElement("small", null, body))));
    }
    if (sectionId === "favorites") {
      return /*#__PURE__*/React.createElement("section", {
        className: "home-favorites-section",
        key: sectionId
      }, /*#__PURE__*/React.createElement(SectionTitle, {
        title: "お気に入り"
      }), /*#__PURE__*/React.createElement("div", {
        className: "home-prompt-row"
      }, favorites.length ? favorites.map(prompt => /*#__PURE__*/React.createElement(HomePromptCard, {
        key: prompt.id,
        prompt: prompt,
        onCopy: copyText,
        favorite: true
      })) : /*#__PURE__*/React.createElement(Empty, {
        text: "お気に入りにしたプロンプトがここに表示されます。"
      })));
    }
    if (sectionId === "atelier") {
      return /*#__PURE__*/React.createElement("section", {
        className: "atelier-corner home-module",
        key: sectionId
      }, /*#__PURE__*/React.createElement("div", {
        className: "atelier-head"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "アトリエコーナー")), /*#__PURE__*/React.createElement("div", {
        className: "atelier-actions"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: () => setScreen("journal")
      }, "ジャーナルページへ"), /*#__PURE__*/React.createElement("button", {
        className: "primary",
        onClick: () => setScreen("gallery")
      }, "ギャラリーへ"))), atelierImages.length ? /*#__PURE__*/React.createElement("div", {
        className: "atelier-tape",
        "aria-label": "アトリエ画像"
      }, /*#__PURE__*/React.createElement("div", {
        className: "atelier-track"
      }, [...atelierImages, ...atelierImages].map((image, index) => /*#__PURE__*/React.createElement("figure", {
        key: `${image.id}-${index}`
      }, /*#__PURE__*/React.createElement("img", {
        src: imageThumbnail(image),
        alt: ""
      }))))) : /*#__PURE__*/React.createElement("div", {
        className: "atelier-empty"
      }, "画像を追加すると、ここにアトリエが表示されます。"));
    }
    return null;
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "page home-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-topbar"
  }, /*#__PURE__*/React.createElement("span", null, "Prompt Atelier Home")), settings.bannerVisible && /*#__PURE__*/React.createElement("div", {
    className: `home-banner ${settings.bannerSize || "medium"} fit-${settings.bannerFit || "contain"}`
  }, settings.bannerImageUrl ? /*#__PURE__*/React.createElement("img", {
    src: imageSrc(settings.bannerImageUrl) || imageThumbnail(settings.bannerImageUrl),
    alt: "",
    style: {
      objectPosition: `${settings.bannerPositionX ?? 50}% ${settings.bannerPositionY ?? 50}%`
    }
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "✦"), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("b", null))), settings.order.map(sectionId => renderSection(sectionId)), /*#__PURE__*/React.createElement(HomeCharacter, {
    settings: settings.homeCharacter,
    projects: projects,
    prompts: myPrompts
  }));
}
function shortMemoText(value) {
  const text = (value || "").replace(/\s+/g, " ").trim();
  return text.length > 34 ? `${text.slice(0, 34)}…` : text;
}
function characterProjectMessage(projects) {
  const active = projects.filter(project => !projectDueInfo(project.dueDate || "").expired || !project.dueDate);
  const dueToday = projects.find(project => project.dueDate && projectDueInfo(project.dueDate).diff === 0);
  if (dueToday) return "今日が期限のプロジェクトがあります";
  const near = projects.filter(project => project.dueDate).map(project => ({
    project,
    info: projectDueInfo(project.dueDate || "")
  })).filter(item => item.info.diff > 0 && item.info.diff <= 3).sort((a, b) => a.info.diff - b.info.diff)[0];
  if (near) return `あと${near.info.diff}日で期限のプロジェクトがあります`;
  if (active.length) return `進行中のプロジェクトが${active.length}件あります`;
  return "";
}
function selectedProjectMessage(project) {
  if (!project) return "";
  if (!project.dueDate) return `『${project.name}』を進行中です`;
  const info = projectDueInfo(project.dueDate);
  if (info.expired) return `『${project.name}』の期限が過ぎています`;
  if (info.diff === 0) return `『${project.name}』は今日が期限です`;
  return `『${project.name}』はあと${info.diff}日で期限です`;
}
function characterMemoMessage(projects, prompts) {
  const projectMemo = [...projects].reverse().find(project => shortMemoText(project.note || ""));
  if (projectMemo) return `最近のメモ：${shortMemoText(projectMemo.note)}`;
  const promptMemo = [...prompts].reverse().find(prompt => shortMemoText(prompt.memo || prompt.note || ""));
  if (promptMemo) return `メモにアイデアがあります：${shortMemoText(promptMemo.memo || promptMemo.note)}`;
  return "";
}
function characterMessage(settings, projects, prompts) {
  if (settings.messageMode === "fixed") return settings.fixedMessage || "今日も制作がんばろう";
  if (settings.messageMode === "project") {
    const selectedProject = projects.find(project => project.id === settings.selectedProjectId);
    return selectedProjectMessage(selectedProject) || characterProjectMessage(projects) || "プロジェクトを少しずつ進めよう";
  }
  return characterProjectMessage(projects) || characterMemoMessage(projects, prompts) || "今日も制作がんばろう";
}
function CharacterSpeechBubble({
  message
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "character-speech-bubble"
  }, message);
}
function HomeCharacter({
  settings,
  projects,
  prompts
}) {
  if (!settings?.image || settings.position === "hidden") return null;
  const message = characterMessage(settings, projects, prompts);
  return /*#__PURE__*/React.createElement("aside", {
    className: `home-character ${settings.position}`,
    "aria-label": "アトリエキャラクター"
  }, settings.speechEnabled && /*#__PURE__*/React.createElement(CharacterSpeechBubble, {
    message: message
  }), /*#__PURE__*/React.createElement("img", {
    src: imageSrc(settings.image) || imageThumbnail(settings.image),
    alt: "アトリエキャラクター"
  }));
}
function HomeCharacterSettingsPanel({
  settings,
  updateSettings,
  projects
}) {
  const character = settings.homeCharacter || defaultHomeSettings.homeCharacter;
  const projectChoices = sortProjectsForDisplay(projects || []);
  const fileInputRef = React.useRef(null);
  const updateCharacter = patch => updateSettings({
    homeCharacter: {
      ...character,
      ...patch
    }
  });
  const importFiles = async files => {
    const file = Array.from(files).find(isSupportedImageFile);
    if (!file) return;
    try {
      const image = saveImageToStorage(await optimizeImage(file, "character"));
      updateCharacter({
        image: image.src
      });
    } catch (error) {
      console.error("[Prompt Atelier] キャラクター画像の追加に失敗しました", error);
      window.alert("画像を追加できませんでした。png / jpg / webp を選んでください。");
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "customize-card character-settings-card"
  }, /*#__PURE__*/React.createElement("h3", null, "ホームキャラクター設定"), /*#__PURE__*/React.createElement("p", null, "透過PNGなどのキャラクター画像を、ホーム画面にアトリエ案内役として表示できます。"), /*#__PURE__*/React.createElement("div", {
    className: "character-upload-area",
    tabIndex: 0,
    onClick: () => fileInputRef.current?.click(),
    onDragOver: event => event.preventDefault(),
    onDrop: event => {
      event.preventDefault();
      event.stopPropagation();
      importFiles(event.dataTransfer.files);
    },
    onPaste: event => {
      const files = clipboardImageFiles(event);
      if (!files.length) return;
      event.preventDefault();
      event.stopPropagation();
      importFiles(files);
    }
  }, character.image ? /*#__PURE__*/React.createElement("img", {
    src: imageThumbnail(character.image),
    alt: ""
  }) : /*#__PURE__*/React.createElement("span", null, "＋ キャラクター画像を追加"), /*#__PURE__*/React.createElement("small", null, "PNG / WebP / JPG対応。透過PNG推奨です。"), /*#__PURE__*/React.createElement("input", {
    ref: fileInputRef,
    type: "file",
    accept: "image/png,image/jpeg,image/webp",
    style: {
      display: "none"
    },
    onChange: event => {
      if (event.currentTarget.files) importFiles(event.currentTarget.files);
      event.currentTarget.value = "";
    }
  })), character.image && /*#__PURE__*/React.createElement("button", {
    onClick: () => updateCharacter({
      image: ""
    })
  }, "画像を削除"), /*#__PURE__*/React.createElement("label", null, "表示位置", /*#__PURE__*/React.createElement("select", {
    value: character.position,
    onChange: event => updateCharacter({
      position: event.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: "right-bottom"
  }, "右下"), /*#__PURE__*/React.createElement("option", {
    value: "right-center"
  }, "右側中央"), /*#__PURE__*/React.createElement("option", {
    value: "left-bottom"
  }, "左下"), /*#__PURE__*/React.createElement("option", {
    value: "hidden"
  }, "非表示"))), /*#__PURE__*/React.createElement("label", {
    className: "switch-row"
  }, /*#__PURE__*/React.createElement("span", null, "吹き出し表示"), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: character.speechEnabled,
    onChange: event => updateCharacter({
      speechEnabled: event.target.checked
    })
  })), /*#__PURE__*/React.createElement("label", null, "吹き出しメッセージタイプ", /*#__PURE__*/React.createElement("select", {
    value: character.messageMode,
    onChange: event => updateCharacter({
      messageMode: event.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: "auto"
  }, "自動"), /*#__PURE__*/React.createElement("option", {
    value: "fixed"
  }, "固定メッセージ"), /*#__PURE__*/React.createElement("option", {
    value: "project"
  }, "プロジェクト優先"))), character.messageMode === "project" && /*#__PURE__*/React.createElement("label", null, "表示するプロジェクト", /*#__PURE__*/React.createElement("select", {
    value: character.selectedProjectId || "",
    onChange: event => updateCharacter({
      selectedProjectId: event.target.value
    }),
    disabled: !projectChoices.length
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "未選択"), projectChoices.map(project => /*#__PURE__*/React.createElement("option", {
    key: project.id,
    value: project.id
  }, project.name, project.dueDate ? ` / 期限：${project.dueDate}` : ""))), !projectChoices.length && /*#__PURE__*/React.createElement("small", null, "登録済みプロジェクトがありません")), character.messageMode === "fixed" && /*#__PURE__*/React.createElement("textarea", {
    value: character.fixedMessage,
    onChange: event => updateCharacter({
      fixedMessage: event.target.value
    }),
    placeholder: "固定メッセージ（例：今日も制作がんばろう♡）"
  }));
}
function WorkToolEditor({
  tool,
  onClose,
  onSave
}) {
  const [draft, setDraft] = React.useState({
    ...tool
  });
  const update = (key, value) => setDraft({
    ...draft,
    [key]: value
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "quick-link-editor"
  }, /*#__PURE__*/React.createElement("div", {
    className: "quick-link-editor-head"
  }, /*#__PURE__*/React.createElement("strong", null, tool.id ? "作業ツールを編集" : "作業ツールを追加"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose
  }, "閉じる")), /*#__PURE__*/React.createElement("input", {
    value: draft.name,
    onChange: event => update("name", event.target.value),
    placeholder: "表示名"
  }), /*#__PURE__*/React.createElement("input", {
    value: draft.url,
    onChange: event => update("url", event.target.value),
    placeholder: "URL"
  }), /*#__PURE__*/React.createElement("input", {
    value: draft.iconText,
    onChange: event => update("iconText", event.target.value),
    placeholder: "アイコン文字（例：MJ / P / GPT）"
  }), /*#__PURE__*/React.createElement("input", {
    value: draft.iconImage,
    onChange: event => update("iconImage", event.target.value),
    placeholder: "アイコン画像URL"
  }), /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: "image/*",
    onChange: event => readImage(event, iconImage => setDraft({
      ...draft,
      iconImage
    }), "icon")
  }), /*#__PURE__*/React.createElement("input", {
    value: draft.memo || "",
    onChange: event => update("memo", event.target.value),
    placeholder: "メモ（任意）"
  }), /*#__PURE__*/React.createElement("div", {
    className: "quick-link-editor-actions"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose
  }, "キャンセル"), /*#__PURE__*/React.createElement("button", {
    className: "primary",
    onClick: () => onSave(draft)
  }, "保存する")));
}
function HomeCustomize({
  settings,
  setSettings,
  setScreen,
  workTools,
  setWorkTools,
  projects
}) {
  const [editingTool, setEditingTool] = React.useState(null);
  const backupInputRef = React.useRef(null);
  const bannerDragRef = React.useRef(null);
  const updateSettings = patch => setSettings(normalizeHomeSettings({
    ...settings,
    ...patch
  }));
  const updateBannerPosition = (x, y) => updateSettings({
    bannerPositionX: Math.min(100, Math.max(0, Math.round(x))),
    bannerPositionY: Math.min(100, Math.max(0, Math.round(y)))
  });
  const startBannerDrag = event => {
    if (!settings.bannerImageUrl || (settings.bannerFit || "contain") !== "cover") return;
    event.preventDefault();
    const bounds = event.currentTarget.getBoundingClientRect();
    bannerDragRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      x: settings.bannerPositionX ?? 50,
      y: settings.bannerPositionY ?? 50,
      width: bounds.width || 1,
      height: bounds.height || 1
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const moveBannerDrag = event => {
    const drag = bannerDragRef.current;
    if (!drag) return;
    event.preventDefault();
    const nextX = drag.x + (event.clientX - drag.startX) / drag.width * 100;
    const nextY = drag.y + (event.clientY - drag.startY) / drag.height * 100;
    updateBannerPosition(nextX, nextY);
  };
  const endBannerDrag = () => {
    bannerDragRef.current = null;
  };
  const updateVisible = (id, value) => updateSettings({
    visible: {
      ...settings.visible,
      [id]: value
    }
  });
  const moveSection = (id, direction) => {
    const index = settings.order.indexOf(id);
    const target = index + direction;
    if (index < 0 || target < 0 || target >= settings.order.length) return;
    const next = [...settings.order];
    [next[index], next[target]] = [next[target], next[index]];
    updateSettings({
      order: next
    });
  };
  const reset = () => {
    if (window.confirm("ホーム設定を初期化しますか？")) setSettings(defaultHomeSettings);
  };
  const importBackup = async file => {
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
  const normalizedTools = workTools.slice(0, 10);
  const saveWorkTool = tool => {
    const rawUrl = tool.url.trim();
    const safeUrl = rawUrl ? /^https?:\/\//i.test(rawUrl) ? rawUrl : `https://${rawUrl}` : "https://";
    const next = {
      ...tool,
      id: tool.id || uid(),
      name: tool.name || "新しい作業ツール",
      url: safeUrl,
      iconText: tool.iconText || (tool.name || "TL").slice(0, 3).toUpperCase(),
      iconImage: tool.iconImage || "",
      memo: tool.memo || ""
    };
    setWorkTools(items => tool.id ? items.map(item => item.id === tool.id ? next : item).slice(0, 10) : [...items, next].slice(0, 10));
    setEditingTool(null);
  };
  const moveWorkTool = (id, direction) => {
    setWorkTools(items => {
      const next = [...items];
      const index = next.findIndex(item => item.id === id);
      const target = index + direction;
      if (index < 0 || target < 0 || target >= next.length) return items;
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  };
  const deleteWorkTool = id => {
    if (window.confirm("この作業ツールを削除しますか？")) {
      setWorkTools(items => items.filter(item => item.id !== id));
    }
  };
  const activeTheme = homeThemes.find(theme => theme.id === settings.themeId) || homeThemes[0];
  const bannerCanDrag = Boolean(settings.bannerImageUrl) && (settings.bannerFit || "contain") === "cover";
  return /*#__PURE__*/React.createElement("section", {
    className: "page customize-page"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "ホームカスタマイズ",
    action: /*#__PURE__*/React.createElement(PageBackButton, {
      label: "ホームへ戻る",
      onClick: () => setScreen("home")
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "customize-layout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "customize-settings"
  }, /*#__PURE__*/React.createElement("section", {
    className: "customize-card"
  }, /*#__PURE__*/React.createElement("h3", null, "テーマ"), /*#__PURE__*/React.createElement("p", null, "ホーム画面の背景、カード、ボタン、見出しの色を切り替えます。"), /*#__PURE__*/React.createElement("div", {
    className: "theme-grid"
  }, homeThemes.map(theme => /*#__PURE__*/React.createElement("button", {
    key: theme.id,
    className: `theme-card ${settings.themeId === theme.id ? "selected" : ""}`,
    onClick: () => updateSettings({
      themeId: theme.id
    })
  }, /*#__PURE__*/React.createElement("span", null, theme.name), /*#__PURE__*/React.createElement("small", null, theme.colors.map(color => /*#__PURE__*/React.createElement("i", {
    key: color,
    style: {
      background: color
    }
  }))))))), /*#__PURE__*/React.createElement("section", {
    className: "customize-card"
  }, /*#__PURE__*/React.createElement("h3", null, "バナー"), /*#__PURE__*/React.createElement("p", null, "ホーム上部に表示する横長画像を設定できます。"), /*#__PURE__*/React.createElement("div", {
    className: "banner-size-guide"
  }, /*#__PURE__*/React.createElement("strong", null, "バナー画像の推奨サイズ"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "大バナー"), /*#__PURE__*/React.createElement("small", null, "1200 × 600px / 2:1")), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "中バナー"), /*#__PURE__*/React.createElement("small", null, "1200 × 400px / 3:1")), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "小バナー"), /*#__PURE__*/React.createElement("small", null, "1200 × 200px / 6:1"))), /*#__PURE__*/React.createElement("p", null, "推奨サイズに近い画像を使用すると、トリミングや表示崩れが少なくなります。")), /*#__PURE__*/React.createElement("label", {
    className: "switch-row"
  }, /*#__PURE__*/React.createElement("span", null, "バナー表示"), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: settings.bannerVisible,
    onChange: event => updateSettings({
      bannerVisible: event.target.checked
    })
  })), /*#__PURE__*/React.createElement("input", {
    value: settings.bannerImageUrl,
    onChange: event => updateSettings({
      bannerImageUrl: event.target.value
    }),
    placeholder: "バナー画像URL"
  }), /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: "image/png,image/jpeg,image/webp",
    onChange: event => readImage(event, bannerImageUrl => updateSettings({
      bannerImageUrl
    }), "banner")
  }), /*#__PURE__*/React.createElement("div", {
    className: "inline-buttons"
  }, ["small", "medium", "large"].map(size => /*#__PURE__*/React.createElement("button", {
    key: size,
    className: settings.bannerSize === size ? "active-soft" : "",
    onClick: () => updateSettings({
      bannerSize: size
    })
  }, size === "small" ? "小" : size === "medium" ? "中" : "大")), /*#__PURE__*/React.createElement("button", {
    onClick: () => updateSettings({
      bannerImageUrl: ""
    })
  }, "画像を削除")), /*#__PURE__*/React.createElement("div", {
    className: "banner-fit-controls"
  }, /*#__PURE__*/React.createElement("strong", null, "バナー表示方法"), /*#__PURE__*/React.createElement("div", {
    className: "inline-buttons"
  }, /*#__PURE__*/React.createElement("button", {
    className: (settings.bannerFit || "contain") === "contain" ? "active-soft" : "",
    onClick: () => updateSettings({
      bannerFit: "contain"
    })
  }, "全体を表示"), /*#__PURE__*/React.createElement("button", {
    className: settings.bannerFit === "cover" ? "active-soft" : "",
    onClick: () => updateSettings({
      bannerFit: "cover"
    })
  }, "枠いっぱいに表示")), /*#__PURE__*/React.createElement("p", null, "「全体を表示」は画像が切れにくく、「枠いっぱいに表示」は余白が出にくい表示です。"))), /*#__PURE__*/React.createElement(HomeCharacterSettingsPanel, {
    settings: settings,
    updateSettings: updateSettings,
    projects: projects
  }), /*#__PURE__*/React.createElement("section", {
    className: "customize-card"
  }, /*#__PURE__*/React.createElement("h3", null, "作業ツール"), /*#__PURE__*/React.createElement("p", null, "ホームに表示する外部サービスのショートカットを編集できます。最大10件まで登録できます。"), /*#__PURE__*/React.createElement("div", {
    className: "icon-style-choices"
  }, /*#__PURE__*/React.createElement("strong", null, "アイコンテイスト"), [["simple", "シンプル"], ["pastel", "パステル"], ["frame", "フレーム"], ["cool", "クール"], ["dark", "ダーク"], ["vivid", "ビビッド"], ["cute", "キュート"]].map(([id, label]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    className: settings.workToolIconStyle === id ? "active-soft" : "",
    onClick: () => updateSettings({
      workToolIconStyle: id
    })
  }, label))), /*#__PURE__*/React.createElement("div", {
    className: `work-tool-edit-list ${settings.workToolIconStyle || "pastel"}`
  }, normalizedTools.map((tool, index) => /*#__PURE__*/React.createElement("article", {
    className: "work-tool-edit-row",
    key: tool.id
  }, /*#__PURE__*/React.createElement("span", {
    className: "work-tool-edit-icon"
  }, tool.iconImage ? /*#__PURE__*/React.createElement("img", {
    src: imageThumbnail(tool.iconImage),
    alt: ""
  }) : /*#__PURE__*/React.createElement("b", null, tool.iconText || tool.name.slice(0, 2))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, tool.name), /*#__PURE__*/React.createElement("small", null, tool.url)), /*#__PURE__*/React.createElement("div", {
    className: "work-tool-edit-actions"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setEditingTool(tool)
  }, "編集"), /*#__PURE__*/React.createElement("button", {
    onClick: () => moveWorkTool(tool.id, -1),
    disabled: index === 0
  }, "左へ"), /*#__PURE__*/React.createElement("button", {
    onClick: () => moveWorkTool(tool.id, 1),
    disabled: index === normalizedTools.length - 1
  }, "右へ"), /*#__PURE__*/React.createElement("button", {
    className: "danger",
    onClick: () => deleteWorkTool(tool.id)
  }, "削除"))))), normalizedTools.length < 10 ? /*#__PURE__*/React.createElement("button", {
    className: "add-work-tool-button",
    onClick: () => setEditingTool({
      id: "",
      name: "",
      url: "",
      iconText: "",
      iconImage: "",
      memo: ""
    })
  }, "＋ 作業ツールを追加") : /*#__PURE__*/React.createElement("p", {
    className: "limit-message"
  }, "作業ツールは最大10件まで登録できます"), editingTool && /*#__PURE__*/React.createElement(WorkToolEditor, {
    tool: editingTool,
    onClose: () => setEditingTool(null),
    onSave: saveWorkTool
  })), /*#__PURE__*/React.createElement("section", {
    className: "customize-card"
  }, /*#__PURE__*/React.createElement("h3", null, "表示項目"), /*#__PURE__*/React.createElement("p", null, "ホームに表示する項目を選べます。カスタマイズへの導線は常に残ります。"), /*#__PURE__*/React.createElement("div", {
    className: "toggle-list"
  }, [...homeFeatures, ...homeSections].map(item => /*#__PURE__*/React.createElement("label", {
    className: "switch-row",
    key: item.id
  }, /*#__PURE__*/React.createElement("span", null, item.label), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: settings.visible[item.id] !== false,
    onChange: event => updateVisible(item.id, event.target.checked)
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "customize-card"
  }, /*#__PURE__*/React.createElement("h3", null, "並び順"), /*#__PURE__*/React.createElement("p", null, "ホームの表示順を「上へ」「下へ」で調整できます。"), /*#__PURE__*/React.createElement("div", {
    className: "order-list"
  }, settings.order.map(id => {
    const section = homeSections.find(item => item.id === id);
    return /*#__PURE__*/React.createElement("div", {
      className: "order-row",
      key: id
    }, /*#__PURE__*/React.createElement("span", null, section?.label), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: () => moveSection(id, -1)
    }, "上へ"), /*#__PURE__*/React.createElement("button", {
      onClick: () => moveSection(id, 1)
    }, "下へ")));
  }))), /*#__PURE__*/React.createElement("section", {
    className: "customize-card backup-card"
  }, /*#__PURE__*/React.createElement("h3", null, "バックアップ"), /*#__PURE__*/React.createElement("p", null, "大切なプロンプトや画像データを保存できます。機種変更やブラウザ変更前にバックアップしてください。"), /*#__PURE__*/React.createElement("div", {
    className: "backup-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "primary",
    onClick: exportPromptAtelierBackup
  }, "バックアップを書き出す"), /*#__PURE__*/React.createElement("button", {
    onClick: () => backupInputRef.current?.click()
  }, "バックアップを読み込む")), /*#__PURE__*/React.createElement("div", {
    className: "developer-tools"
  }, /*#__PURE__*/React.createElement("strong", null, "配布用サンプルデータ"), /*#__PURE__*/React.createElement("p", null, "現在登録されているデータを、配布版に同梱するサンプルデータとして書き出します。"), /*#__PURE__*/React.createElement("button", {
    onClick: exportPromptAtelierSampleSeed
  }, "現在のデータをサンプルとして書き出す")), /*#__PURE__*/React.createElement("input", {
    ref: backupInputRef,
    type: "file",
    accept: "application/json,.json",
    style: {
      display: "none"
    },
    onChange: event => {
      importBackup(event.currentTarget.files?.[0]);
      event.currentTarget.value = "";
    }
  })), /*#__PURE__*/React.createElement("section", {
    className: "customize-card danger-zone"
  }, /*#__PURE__*/React.createElement("h3", null, "初期化"), /*#__PURE__*/React.createElement("p", null, "テーマ、バナー、表示項目、並び順を初期設定に戻します。"), /*#__PURE__*/React.createElement("button", {
    className: "danger",
    onClick: reset
  }, "初期設定に戻す"))), /*#__PURE__*/React.createElement("aside", {
    className: "customize-preview"
  }, /*#__PURE__*/React.createElement("span", null, "プレビュー"), /*#__PURE__*/React.createElement("div", {
    className: "preview-shell",
    style: themeStyle(activeTheme)
  }, settings.bannerVisible && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `preview-banner ${settings.bannerSize || "medium"} fit-${settings.bannerFit || "contain"} ${bannerCanDrag ? "is-draggable" : ""}`,
    onPointerDown: startBannerDrag,
    onPointerMove: moveBannerDrag,
    onPointerUp: endBannerDrag,
    onPointerCancel: endBannerDrag,
    onLostPointerCapture: endBannerDrag
  }, settings.bannerImageUrl && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: imageSrc(settings.bannerImageUrl) || imageThumbnail(settings.bannerImageUrl),
    alt: "",
    draggable: false,
    style: {
      objectPosition: `${settings.bannerPositionX ?? 50}% ${settings.bannerPositionY ?? 50}%`
    }
  }), bannerCanDrag && /*#__PURE__*/React.createElement("span", {
    className: "banner-drag-hint"
  }, "画像をドラッグして表示位置を調整"))), settings.bannerImageUrl && /*#__PURE__*/React.createElement("div", {
    className: "preview-banner-actions"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "banner-reset-position",
    onPointerDown: event => event.stopPropagation(),
    onClick: event => {
      event.stopPropagation();
      updateBannerPosition(50, 50);
    }
  }, "中央に戻す"))), /*#__PURE__*/React.createElement("div", {
    className: "preview-card large"
  }), /*#__PURE__*/React.createElement("div", {
    className: "preview-grid"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null)), /*#__PURE__*/React.createElement("button", {
    className: "primary preview-save-home",
    onClick: () => {
      setSettings(normalizeHomeSettings(settings));
      setScreen("home");
    }
  }, "保存してホームへ")))), /*#__PURE__*/React.createElement(PageBackButton, {
    className: "page-bottom-back",
    label: "ホームへ戻る",
    onClick: () => setScreen("home")
  }));
}
function FeatureIcon({
  name
}) {
  if (name === "mockup") {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 64 64",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "13",
      y: "16",
      width: "38",
      height: "32",
      rx: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19 39l8-8 7 7 5-5 8 8"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "42",
      cy: "25",
      r: "3.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 13l3-5 3 5 5 3-5 3-3 5-3-5-5-3 5-3z",
      className: "icon-fill"
    }));
  }
  if (name === "notebook") {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 64 64",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 12h27a6 6 0 016 6v31a5 5 0 01-5 5H18a5 5 0 01-5-5V17a5 5 0 015-5z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22 12v42"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M29 24h13M29 32h10"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M44 12v15l-5-3-5 3V12",
      className: "icon-fill"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 22h7M10 32h7M10 42h7"
    }));
  }
  if (name === "magic") {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 64 64",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 48l28-28"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M39 17l8 8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18 18l3-6 3 6 6 3-6 3-3 6-3-6-6-3 6-3z",
      className: "icon-fill"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M47 40l2-4 2 4 4 2-4 2-2 4-2-4-4-2 4-2z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M31 47h21M34 54h13"
    }));
  }
  if (name === "video") {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 64 64",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "10",
      y: "16",
      width: "44",
      height: "32",
      rx: "8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M27 25l13 7-13 7V25z",
      className: "icon-fill"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 16v32M48 16v32"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 24h-5M16 32h-5M16 40h-5M58 24h-5M58 32h-5M58 40h-5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M45 9l2-4 2 4 4 2-4 2-2 4-2-4-4-2 4-2z"
    }));
  }
  if (name === "alarm") {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 64 64",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "32",
      cy: "34",
      r: "18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22 10l-9 8M42 10l9 8M32 22v13l9 5M24 54l-4 5M40 54l4 5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M25 5h14",
      className: "icon-fill"
    }));
  }
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 64 64",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 22h17l5-6h20v31a6 6 0 01-6 6H17a6 6 0 01-6-6V22z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 28h42"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "20",
    y: "34",
    width: "24",
    height: "12",
    rx: "4",
    className: "icon-fill"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M24 40h16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M49 14l2-4 2 4 4 2-4 2-2 4-2-4-4-2 4-2z"
  }));
}
function HomePromptCard({
  prompt,
  onCopy,
  favorite
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "home-prompt-card"
  }, /*#__PURE__*/React.createElement("button", {
    className: "heart-button",
    "aria-label": "お気に入り"
  }, favorite ? "♥" : "♡"), /*#__PURE__*/React.createElement("img", {
    src: imageThumbnail(prompt.imageUrl) || art("プロンプト", "#f5eadc", "#e7e7df"),
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "home-prompt-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mini-pill"
  }, prompt.category), /*#__PURE__*/React.createElement("h3", null, prompt.title), /*#__PURE__*/React.createElement("div", {
    className: "home-card-bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tiny-tags"
  }, (prompt.tags || []).slice(0, 2).map(tag => /*#__PURE__*/React.createElement("span", {
    key: tag
  }, "#", tag))), /*#__PURE__*/React.createElement("button", {
    className: "copy-chip",
    onClick: () => onCopy(prompt.prompt, prompt.id)
  }, "コピー"))));
}
function Library({
  copyText,
  setScreen
}) {
  const [query, setQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [editingCategory, setEditingCategory] = React.useState(null);
  const [editingPrompt, setEditingPrompt] = React.useState(null);
  const [memoPrompt, setMemoPrompt] = React.useState(null);
  const [inlineEdit, setInlineEdit] = React.useState(null);
  const [stockFrameCounts, setStockFrameCounts] = React.useState({});
  const [boardCategories, setBoardCategories] = useStoredState("prompt-atelier-mockup-categories-v2", defaultMockupCategories);
  const [boardPrompts, setBoardPrompts] = useStoredState("prompt-atelier-library-prompts-v5", defaultLibraryBoardPrompts);
  const currentCategory = selectedCategory ? boardCategories.find(category => category.id === selectedCategory.id) || selectedCategory : null;
  const filteredCategories = boardCategories.filter(item => lowerIncludes(`${item.title} ${item.description}`, query));
  const filteredPrompts = boardPrompts.filter(item => {
    const haystack = `${item.title} ${item.description} ${item.prompt}`;
    return item.categoryId === currentCategory?.id && lowerIncludes(haystack, query);
  });
  const categoryPrompts = currentCategory ? boardPrompts.filter(item => item.categoryId === currentCategory.id) : [];
  const imagePrompts = filteredPrompts.filter(item => !item.isTextStock).slice(0, 20);
  const textPrompts = filteredPrompts.filter(item => item.isTextStock);
  const textStockCount = categoryPrompts.filter(item => item.isTextStock).length;
  const canAddImagePrompt = imagePrompts.length < 20;
  const canAddTextStock = textStockCount < 100;
  const stockFrameCount = currentCategory ? Math.min(100, Math.max(5, stockFrameCounts[currentCategory.id] || 5, textPrompts.length)) : 5;
  const textStockSlots = currentCategory ? Array.from({
    length: stockFrameCount
  }, (_, index) => textPrompts[index] || null) : [];
  const imageSlotCount = imagePrompts.length < 20 ? Math.max(8, Math.ceil((imagePrompts.length + 1) / 4) * 4) : 20;
  const imagePromptSlots = currentCategory ? Array.from({
    length: imageSlotCount
  }, (_, index) => imagePrompts[index] || null) : [];
  const createBlankLibraryPrompt = (textOnly = false) => ({
    id: "",
    title: "",
    category: "ステッカーモックアップ",
    categoryId: currentCategory?.id || boardCategories[0]?.id || "",
    description: "",
    prompt: "",
    memo: "",
    tags: [],
    imageUrl: "",
    coverImages: [],
    japaneseTranslation: "",
    isTextStock: textOnly
  });
  const saveCategory = item => {
    const coverImages = getCoverImages(item);
    const coverImage = coverImages[0] || item.coverImage || art("カテゴリ", "#f8e6e1", "#dce7d7");
    const next = {
      ...item,
      id: item.id || uid(),
      coverImage,
      coverImages: coverImages.length ? coverImages : [coverImage]
    };
    setBoardCategories(items => item.id ? items.map(category => category.id === item.id ? next : category) : [next, ...items]);
    setEditingCategory(null);
  };
  const savePrompt = item => {
    const category = boardCategories.find(category => category.id === item.categoryId) || currentCategory || boardCategories[0];
    const countForKind = boardPrompts.filter(prompt => prompt.categoryId === category.id && Boolean(prompt.isTextStock) === Boolean(item.isTextStock)).length;
    const limit = item.isTextStock ? 100 : 20;
    if (!item.id && countForKind >= limit) {
      setEditingPrompt(null);
      return;
    }
    const next = {
      ...item,
      id: item.id || uid(),
      categoryId: item.categoryId || category.id,
      category: "ステッカーモックアップ",
      coverImages: item.isTextStock ? [] : getCoverImages(item),
      imageUrl: item.isTextStock ? "" : primaryCoverImage(item) || item.imageUrl || "",
      japaneseTranslation: item.japaneseTranslation || item.prompt,
      memo: item.memo || "",
      tags: item.tags || [],
      isTextStock: Boolean(item.isTextStock)
    };
    setBoardPrompts(items => item.id ? items.map(prompt => prompt.id === item.id ? next : prompt) : [...items, next]);
    setEditingPrompt(null);
  };
  const duplicateCategory = item => {
    setBoardCategories(items => [{
      ...item,
      id: uid(),
      title: `${item.title} コピー`
    }, ...items]);
  };
  const duplicatePrompt = item => {
    const countForKind = boardPrompts.filter(prompt => prompt.categoryId === item.categoryId && Boolean(prompt.isTextStock) === Boolean(item.isTextStock)).length;
    if (countForKind >= (item.isTextStock ? 100 : 20)) return;
    setBoardPrompts(items => [...items, {
      ...item,
      id: uid(),
      title: `${item.title} コピー`
    }]);
  };
  const updatePrompt = (id, patch) => {
    setBoardPrompts(items => items.map(prompt => prompt.id === id ? {
      ...prompt,
      ...patch
    } : prompt));
  };
  const saveTextStockFrame = item => {
    if (!item.title.trim() && !item.prompt.trim()) return;
    savePrompt({
      ...item,
      isTextStock: true,
      imageUrl: ""
    });
  };
  const addTextStockFrame = () => {
    if (!currentCategory || !canAddTextStock) return;
    setStockFrameCounts(counts => ({
      ...counts,
      [currentCategory.id]: Math.min(100, stockFrameCount + 1)
    }));
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "page library-page"
  }, !currentCategory ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    title: "モックアップライブラリ",
    action: /*#__PURE__*/React.createElement("div", {
      className: "actions"
    }, /*#__PURE__*/React.createElement(PageBackButton, {
      label: "ホームへ戻る",
      onClick: () => setScreen("home")
    }), /*#__PURE__*/React.createElement("button", {
      className: "primary",
      onClick: () => setEditingCategory({
        id: "",
        title: "",
        description: "",
        coverImage: ""
      })
    }, "＋ カテゴリを追加"))
  }), /*#__PURE__*/React.createElement("div", {
    className: "library-intro"
  }, /*#__PURE__*/React.createElement("p", null, "販売画像づくりに使うモックアップを、Pinterestのボードのようにカテゴリで整理できます。")), /*#__PURE__*/React.createElement(Filters, null, /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "カテゴリを検索..."
  })), /*#__PURE__*/React.createElement("div", {
    className: "library-category-grid"
  }, filteredCategories.map(category => /*#__PURE__*/React.createElement("article", {
    className: "library-category-card",
    key: category.id
  }, /*#__PURE__*/React.createElement(MenuButton, {
    onEdit: () => setEditingCategory(category),
    onDuplicate: () => duplicateCategory(category),
    onImage: () => setEditingCategory(category),
    onDelete: () => setBoardCategories(items => items.filter(item => item.id !== category.id))
  }), /*#__PURE__*/React.createElement("button", {
    className: "category-open",
    onClick: () => {
      setSelectedCategory(category);
      setQuery("");
    }
  }, /*#__PURE__*/React.createElement(CoverImageCarousel, {
    item: category,
    className: "category-cover-carousel",
    placeholderLabel: "カテゴリ"
  }), /*#__PURE__*/React.createElement("span", null, category.title), /*#__PURE__*/React.createElement("small", null, category.description))))), /*#__PURE__*/React.createElement(PageBackButton, {
    className: "page-bottom-back",
    label: "ホームへ戻る",
    onClick: () => setScreen("home")
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageBackButton, {
    label: "ライブラリへ戻る",
    onClick: () => {
      setSelectedCategory(null);
      setQuery("");
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "library-detail-head"
  }, /*#__PURE__*/React.createElement(CoverImageCarousel, {
    item: currentCategory,
    className: "library-detail-cover",
    placeholderLabel: "カテゴリ"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, currentCategory.title), /*#__PURE__*/React.createElement("p", null, currentCategory.description)), /*#__PURE__*/React.createElement("span", {
    className: "prompt-count-pill"
  }, "画像 ", imagePrompts.length, " / 20・ストック ", textStockCount, " / 100")), /*#__PURE__*/React.createElement(Filters, null, /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: `${currentCategory.title}内を検索...`
  })), /*#__PURE__*/React.createElement("section", {
    className: "prompt-area"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prompt-area-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "画像付きプロンプト"), /*#__PURE__*/React.createElement("p", null, "最大20個まで保存できます。"))), /*#__PURE__*/React.createElement("div", {
    className: "library-prompt-grid"
  }, imagePromptSlots.map((prompt, index) => prompt ? /*#__PURE__*/React.createElement(LibraryImagePromptCard, {
    key: prompt.id,
    prompt: prompt,
    inlineEdit: inlineEdit,
    setInlineEdit: setInlineEdit,
    updatePrompt: updatePrompt,
    duplicatePrompt: duplicatePrompt,
    deletePrompt: () => setBoardPrompts(items => items.filter(item => item.id !== prompt.id)),
    copyText: copyText,
    showMemo: () => setMemoPrompt(prompt)
  }) : canAddImagePrompt ? /*#__PURE__*/React.createElement("button", {
    className: "add-prompt-card",
    key: `empty-prompt-${index}`,
    onClick: () => setEditingPrompt(createBlankLibraryPrompt())
  }, /*#__PURE__*/React.createElement("span", null, "＋"), /*#__PURE__*/React.createElement("strong", null, "新しいプロンプト")) : null))), /*#__PURE__*/React.createElement("section", {
    className: "prompt-area text-prompt-area"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prompt-area-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "プロンプトストック"), /*#__PURE__*/React.createElement("p", null, "画像を設定しないプロンプトはこちらに保存します。最大100件まで保存できます。"))), /*#__PURE__*/React.createElement("div", {
    className: "text-prompt-list"
  }, textStockSlots.map((prompt, index) => /*#__PURE__*/React.createElement(TextStockFrame, {
    key: prompt?.id || `stock-frame-${index}`,
    prompt: prompt,
    blankPrompt: createBlankLibraryPrompt(true),
    onCreate: saveTextStockFrame,
    onUpdate: updatePrompt,
    copyText: copyText,
    showMemo: () => prompt && setMemoPrompt(prompt)
  }))), canAddTextStock && textStockCount >= stockFrameCount && /*#__PURE__*/React.createElement("button", {
    className: "add-stock-button",
    onClick: addTextStockFrame
  }, "＋ プロンプトを追加"), !canAddTextStock && /*#__PURE__*/React.createElement("p", {
    className: "limit-message"
  }, "保存上限（100件）に達しました")), /*#__PURE__*/React.createElement(PageBackButton, {
    className: "page-bottom-back",
    label: "ライブラリへ戻る",
    onClick: () => {
      setSelectedCategory(null);
      setQuery("");
    }
  })), editingCategory && /*#__PURE__*/React.createElement(MockupCategoryModal, {
    item: editingCategory,
    onClose: () => setEditingCategory(null),
    onSave: saveCategory
  }), editingPrompt && /*#__PURE__*/React.createElement(LibraryPromptModal, {
    item: editingPrompt,
    categories: boardCategories,
    onClose: () => setEditingPrompt(null),
    onSave: savePrompt
  }), memoPrompt && /*#__PURE__*/React.createElement(MemoModal, {
    prompt: memoPrompt,
    onClose: () => setMemoPrompt(null),
    onSave: memo => {
      updatePrompt(memoPrompt.id, {
        memo
      });
      setMemoPrompt(null);
    }
  }));
}
function CoverImageCarousel({
  item,
  className = "",
  placeholderLabel = "画像"
}) {
  const images = getCoverImages(item);
  const [isHovering, setIsHovering] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    if (!isHovering || images.length <= 1) {
      setIndex(0);
      return;
    }
    const timer = window.setInterval(() => {
      setIndex(current => (current + 1) % images.length);
    }, 1800);
    return () => window.clearInterval(timer);
  }, [isHovering, images.length]);
  const currentImage = images[index] || images[0];
  return /*#__PURE__*/React.createElement("div", {
    className: `cover-image-carousel ${className}`,
    onMouseEnter: () => setIsHovering(true),
    onMouseLeave: () => setIsHovering(false)
  }, currentImage ? /*#__PURE__*/React.createElement("img", {
    src: imageThumbnail(currentImage),
    alt: ""
  }) : /*#__PURE__*/React.createElement("div", {
    className: "image-placeholder",
    "aria-label": `${placeholderLabel}未設定`
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 64 64",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "12",
    y: "16",
    width: "40",
    height: "32",
    rx: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 41l10-10 8 8 5-5 7 7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "42",
    cy: "25",
    r: "4"
  }))), images.length > 1 && /*#__PURE__*/React.createElement("div", {
    className: "cover-image-dots",
    "aria-hidden": "true"
  }, images.map((_, dotIndex) => /*#__PURE__*/React.createElement("span", {
    className: dotIndex === index ? "active" : "",
    key: dotIndex
  }))));
}
function CoverImageUploader({
  item,
  onChange,
  category = "prompt"
}) {
  const [message, setMessage] = React.useState("");
  const [urlDraft, setUrlDraft] = React.useState("");
  const images = getCoverImages(item);
  const applyImages = nextImages => {
    onChange(nextImages.filter(Boolean).slice(0, 3));
  };
  const addImages = async files => {
    const supported = Array.from(files).filter(isSupportedImageFile);
    if (!supported.length) return;
    const available = Math.max(0, 3 - images.length);
    if (!available) {
      setMessage("見出し画像は最大3枚までです");
      return;
    }
    if (supported.length > available) setMessage("見出し画像は最大3枚までです");
    try {
      const optimized = await Promise.all(supported.slice(0, available).map(async file => saveImageToStorage(await optimizeImage(file, category))));
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
  return /*#__PURE__*/React.createElement("div", {
    className: "cover-image-uploader",
    onClick: event => event.stopPropagation(),
    onDragOver: event => event.preventDefault(),
    onDrop: event => {
      event.preventDefault();
      event.stopPropagation();
      addImages(event.dataTransfer.files);
    },
    onPaste: event => {
      const files = clipboardImageFiles(event);
      if (!files.length) return;
      event.preventDefault();
      event.stopPropagation();
      addImages(files);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cover-image-strip"
  }, images.map((image, index) => /*#__PURE__*/React.createElement("div", {
    className: "cover-image-thumb",
    key: `${imageThumbnail(image)}-${index}`
  }, /*#__PURE__*/React.createElement("img", {
    src: imageThumbnail(image),
    alt: ""
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => applyImages(images.filter((_, imageIndex) => imageIndex !== index))
  }, "削除"))), images.length < 3 && /*#__PURE__*/React.createElement("label", {
    className: "cover-image-add"
  }, /*#__PURE__*/React.createElement("span", null, "＋"), /*#__PURE__*/React.createElement("small", null, "画像を追加"), /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: "image/png,image/jpeg,image/webp",
    multiple: true,
    onChange: event => addImages(event.target.files || [])
  }))), /*#__PURE__*/React.createElement("p", {
    className: "cover-image-help"
  }, "見出し画像は最大3枚まで設定できます"), /*#__PURE__*/React.createElement("div", {
    className: "cover-image-url-row"
  }, /*#__PURE__*/React.createElement("input", {
    value: urlDraft,
    onChange: event => setUrlDraft(event.target.value),
    placeholder: "画像URLを追加"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: addUrl
  }, "追加")), message && /*#__PURE__*/React.createElement("p", {
    className: "cover-image-message"
  }, message));
}
function LibraryImagePromptCard({
  prompt,
  inlineEdit,
  setInlineEdit,
  updatePrompt,
  duplicatePrompt,
  deletePrompt,
  copyText,
  showMemo
}) {
  const updateCoverImages = coverImages => updatePrompt(prompt.id, {
    coverImages,
    imageUrl: coverImages[0] || ""
  });
  return /*#__PURE__*/React.createElement("article", {
    className: "library-prompt-card"
  }, /*#__PURE__*/React.createElement(PromptMenuButton, {
    onDuplicate: () => duplicatePrompt(prompt),
    onClearImage: () => updatePrompt(prompt.id, {
      imageUrl: "",
      coverImages: []
    }),
    onDelete: deletePrompt
  }), /*#__PURE__*/React.createElement(CoverImageCarousel, {
    item: prompt,
    placeholderLabel: "プロンプト画像"
  }), /*#__PURE__*/React.createElement(CoverImageUploader, {
    item: prompt,
    category: "prompt",
    onChange: updateCoverImages
  }), /*#__PURE__*/React.createElement("div", {
    className: "prompt-card-content"
  }, /*#__PURE__*/React.createElement(InlineEditable, {
    className: "inline-title",
    value: prompt.title,
    placeholder: "タイトル",
    isEditing: inlineEdit?.id === prompt.id && inlineEdit.field === "title",
    onEdit: () => setInlineEdit({
      id: prompt.id,
      field: "title"
    }),
    onSave: title => {
      updatePrompt(prompt.id, {
        title
      });
      setInlineEdit(null);
    }
  }), /*#__PURE__*/React.createElement(InlineEditable, {
    className: "inline-prompt",
    multiline: true,
    value: prompt.prompt,
    placeholder: "プロンプト本文",
    isEditing: inlineEdit?.id === prompt.id && inlineEdit.field === "prompt",
    onEdit: () => setInlineEdit({
      id: prompt.id,
      field: "prompt"
    }),
    onSave: promptText => {
      updatePrompt(prompt.id, {
        prompt: promptText
      });
      setInlineEdit(null);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "prompt-card-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "primary",
    onClick: event => {
      event.stopPropagation();
      copyText(prompt.prompt, prompt.id);
    }
  }, "📋 プロンプトをコピー"), /*#__PURE__*/React.createElement("button", {
    onClick: event => {
      event.stopPropagation();
      showMemo();
    }
  }, "メモ"))));
}
function TextStockFrame({
  prompt,
  blankPrompt,
  onCreate,
  onUpdate,
  copyText,
  showMemo
}) {
  const [title, setTitle] = React.useState(prompt?.title || "");
  const [promptText, setPromptText] = React.useState(prompt?.prompt || "");
  React.useEffect(() => {
    setTitle(prompt?.title || "");
    setPromptText(prompt?.prompt || "");
  }, [prompt?.id, prompt?.title, prompt?.prompt]);
  const isSaved = Boolean(prompt?.id);
  const save = patch => {
    const next = {
      ...blankPrompt,
      ...prompt,
      title,
      prompt: promptText,
      ...patch,
      isTextStock: true,
      imageUrl: ""
    };
    if (isSaved) {
      onUpdate(prompt.id, patch);
      return;
    }
    if ((next.title || "").trim() || (next.prompt || "").trim()) onCreate(next);
  };
  const copyStockPrompt = event => {
    event.stopPropagation();
    copyText(promptText, prompt?.id);
  };
  return /*#__PURE__*/React.createElement("article", {
    className: "text-stock-frame"
  }, /*#__PURE__*/React.createElement("input", {
    value: title,
    onChange: event => setTitle(event.target.value),
    onBlur: () => save({
      title
    }),
    placeholder: "タイトル"
  }), /*#__PURE__*/React.createElement("textarea", {
    value: promptText,
    onChange: event => setPromptText(event.target.value),
    onBlur: () => save({
      prompt: promptText
    }),
    placeholder: "プロンプト本文"
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-stock-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "primary",
    onClick: copyStockPrompt,
    disabled: !promptText.trim()
  }, "📋 プロンプトをコピー"), /*#__PURE__*/React.createElement("button", {
    onClick: event => {
      event.stopPropagation();
      showMemo();
    },
    disabled: !isSaved
  }, "メモ")));
}
function PromptThumbnail({
  imageUrl
}) {
  if (imageUrl) return /*#__PURE__*/React.createElement("img", {
    src: imageThumbnail(imageUrl),
    alt: ""
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "image-placeholder",
    "aria-label": "画像未設定"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 64 64",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "12",
    y: "16",
    width: "40",
    height: "32",
    rx: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 41l10-10 8 8 5-5 7 7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "42",
    cy: "25",
    r: "4"
  })));
}
function EditableThumbnail({
  prompt,
  isEditing,
  onEdit,
  onCancel,
  onSave
}) {
  const [draft, setDraft] = React.useState(prompt.imageUrl || "");
  React.useEffect(() => setDraft(prompt.imageUrl || ""), [prompt.imageUrl, isEditing]);
  const importFiles = async files => {
    const file = Array.from(files).find(isSupportedImageFile);
    if (!file) return;
    const image = saveImageToStorage(await optimizeImage(file, "prompt"));
    setDraft(image.src);
  };
  if (isEditing) {
    return /*#__PURE__*/React.createElement("div", {
      className: "thumbnail-editor",
      onClick: event => event.stopPropagation(),
      onDragOver: event => event.preventDefault(),
      onDrop: event => {
        event.preventDefault();
        event.stopPropagation();
        importFiles(event.dataTransfer.files);
      },
      onPaste: event => {
        const files = clipboardImageFiles(event);
        if (!files.length) return;
        event.preventDefault();
        event.stopPropagation();
        importFiles(files);
      }
    }, /*#__PURE__*/React.createElement("input", {
      value: draft,
      onChange: event => setDraft(event.target.value),
      placeholder: "サムネイル画像URL",
      autoFocus: true
    }), /*#__PURE__*/React.createElement("label", {
      className: "mini-upload"
    }, "画像を選ぶ", /*#__PURE__*/React.createElement("input", {
      type: "file",
      accept: "image/png,image/jpeg,image/webp",
      onChange: event => readImage(event, imageUrl => setDraft(imageUrl), "prompt")
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      className: "primary",
      onClick: () => onSave(draft)
    }, "保存"), /*#__PURE__*/React.createElement("button", {
      onClick: onCancel
    }, "閉じる")));
  }
  return /*#__PURE__*/React.createElement("button", {
    className: "thumbnail-button",
    onClick: event => {
      event.stopPropagation();
      onEdit();
    },
    "aria-label": "画像を変更"
  }, /*#__PURE__*/React.createElement(PromptThumbnail, {
    imageUrl: prompt.imageUrl
  }));
}
function InlineEditable({
  value,
  placeholder,
  isEditing,
  onEdit,
  onSave,
  multiline,
  className
}) {
  const [draft, setDraft] = React.useState(value || "");
  React.useEffect(() => setDraft(value || ""), [value, isEditing]);
  const save = () => onSave(draft.trim() || value || "");
  if (isEditing) {
    const commonProps = {
      value: draft,
      onChange: event => setDraft(event.target.value),
      onBlur: save,
      onClick: event => event.stopPropagation(),
      onKeyDown: event => {
        if (event.key === "Enter" && !multiline) save();
        if (event.key === "Escape") setDraft(value || "");
      },
      autoFocus: true,
      placeholder,
      className: `inline-input ${className || ""}`
    };
    return multiline ? /*#__PURE__*/React.createElement("textarea", commonProps) : /*#__PURE__*/React.createElement("input", commonProps);
  }
  const Tag = className === "inline-title" ? "h3" : "p";
  return /*#__PURE__*/React.createElement(Tag, {
    className: `inline-editable ${className || ""}`,
    onClick: event => {
      event.stopPropagation();
      onEdit();
    }
  }, value || placeholder);
}
function TranslationModal({
  prompt,
  onClose,
  copyText
}) {
  const translation = prompt.japaneseTranslation || "このプロンプトにはまだ和訳がありません。編集画面から和訳を追加できます。";
  return /*#__PURE__*/React.createElement(Modal, {
    title: "日本語訳",
    onClose: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "translation-box"
  }, /*#__PURE__*/React.createElement("h3", null, prompt.title, " の和訳"), /*#__PURE__*/React.createElement("p", null, translation)), /*#__PURE__*/React.createElement("div", {
    className: "modal-actions"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose
  }, "閉じる"), /*#__PURE__*/React.createElement("button", {
    className: "primary",
    onClick: () => copyText(translation)
  }, "和訳をコピー")));
}
function MemoModal({
  prompt,
  onClose,
  onSave
}) {
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
  return /*#__PURE__*/React.createElement(Modal, {
    title: "メモ",
    onClose: requestClose,
    hideClose: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "translation-box"
  }, /*#__PURE__*/React.createElement("h3", null, prompt.title, " のメモ"), /*#__PURE__*/React.createElement("textarea", {
    className: "memo-textarea",
    value: memo,
    onChange: event => setMemo(event.target.value),
    placeholder: "このプロンプトで気づいたこと、使いどころ、商品化メモなど"
  })), showConfirm && /*#__PURE__*/React.createElement("div", {
    className: "unsaved-confirm"
  }, /*#__PURE__*/React.createElement("strong", null, "保存せず閉じますか？"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowConfirm(false)
  }, "キャンセル"), /*#__PURE__*/React.createElement("button", {
    className: "danger",
    onClick: onClose
  }, "保存せず閉じる"), /*#__PURE__*/React.createElement("button", {
    className: "primary",
    onClick: () => onSave(memo)
  }, "保存して閉じる"))), /*#__PURE__*/React.createElement("div", {
    className: "memo-modal-footer"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: requestClose
  }, "閉じる"), /*#__PURE__*/React.createElement("button", {
    className: "primary",
    onClick: () => onSave(memo)
  }, "メモを保存")));
}
function MenuButton({
  onEdit,
  onDuplicate,
  onImage,
  onDelete
}) {
  const runMenuAction = (event, action) => {
    event.preventDefault();
    event.stopPropagation();
    action();
  };
  return /*#__PURE__*/React.createElement("details", {
    className: "card-menu",
    onClick: event => event.stopPropagation()
  }, /*#__PURE__*/React.createElement("summary", {
    "aria-label": "メニュー"
  }, "…"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: event => runMenuAction(event, onEdit)
  }, "編集"), /*#__PURE__*/React.createElement("button", {
    onClick: event => runMenuAction(event, onDuplicate)
  }, "複製"), /*#__PURE__*/React.createElement("button", {
    onClick: event => runMenuAction(event, onImage)
  }, "画像変更"), /*#__PURE__*/React.createElement("button", {
    className: "danger",
    onClick: event => runMenuAction(event, onDelete)
  }, "削除")));
}
function PromptMenuButton({
  onDuplicate,
  onClearImage,
  onDelete
}) {
  const runMenuAction = (event, action) => {
    event.preventDefault();
    event.stopPropagation();
    action();
  };
  return /*#__PURE__*/React.createElement("details", {
    className: "card-menu",
    onClick: event => event.stopPropagation()
  }, /*#__PURE__*/React.createElement("summary", {
    "aria-label": "メニュー"
  }, "…"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: event => runMenuAction(event, onDuplicate)
  }, "複製"), /*#__PURE__*/React.createElement("button", {
    onClick: event => runMenuAction(event, onClearImage)
  }, "画像を削除"), /*#__PURE__*/React.createElement("button", {
    className: "danger",
    onClick: event => runMenuAction(event, onDelete)
  }, "削除")));
}
async function readImage(event, onLoad, category = "prompt") {
  event?.preventDefault?.();
  event?.stopPropagation?.();
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const image = saveImageToStorage(await optimizeImage(file, category));
    onLoad(image.src);
  } catch (error) {
    console.error("[Prompt Atelier] 画像の最適化に失敗しました", error);
    window.alert("画像を追加できませんでした。jpg / png / webp を選んでください。");
  }
}
function MockupCategoryModal({
  item,
  onClose,
  onSave
}) {
  const [draft, setDraft] = React.useState({
    ...item
  });
  const setCoverImages = coverImages => setDraft({
    ...draft,
    coverImages,
    coverImage: coverImages[0] || ""
  });
  return /*#__PURE__*/React.createElement(Modal, {
    title: item.id ? "カテゴリを編集" : "カテゴリを追加",
    onClose: onClose
  }, /*#__PURE__*/React.createElement(FormGrid, null, /*#__PURE__*/React.createElement("input", {
    value: draft.title,
    onChange: e => setDraft({
      ...draft,
      title: e.target.value
    }),
    placeholder: "タイトル"
  }), /*#__PURE__*/React.createElement("textarea", {
    value: draft.description,
    onChange: e => setDraft({
      ...draft,
      description: e.target.value
    }),
    placeholder: "説明文"
  }), /*#__PURE__*/React.createElement(CoverImageUploader, {
    item: draft,
    category: "mockup",
    onChange: setCoverImages
  })), /*#__PURE__*/React.createElement(ModalActions, {
    onClose: onClose,
    onSave: () => onSave(draft)
  }));
}
function LibraryPromptModal({
  item,
  categories,
  onClose,
  onSave
}) {
  const [draft, setDraft] = React.useState({
    ...item
  });
  const setCoverImages = coverImages => setDraft({
    ...draft,
    coverImages,
    imageUrl: coverImages[0] || ""
  });
  return /*#__PURE__*/React.createElement(Modal, {
    title: item.id ? "プロンプトを編集" : "プロンプトを追加",
    onClose: onClose
  }, /*#__PURE__*/React.createElement(FormGrid, null, /*#__PURE__*/React.createElement("input", {
    value: draft.title,
    onChange: e => setDraft({
      ...draft,
      title: e.target.value
    }),
    placeholder: "タイトル"
  }), /*#__PURE__*/React.createElement("select", {
    value: draft.categoryId,
    onChange: e => setDraft({
      ...draft,
      categoryId: e.target.value
    })
  }, categories.map(category => /*#__PURE__*/React.createElement("option", {
    value: category.id,
    key: category.id
  }, category.title))), /*#__PURE__*/React.createElement("textarea", {
    value: draft.description,
    onChange: e => setDraft({
      ...draft,
      description: e.target.value
    }),
    placeholder: "説明"
  }), /*#__PURE__*/React.createElement("textarea", {
    className: "tall",
    value: draft.prompt,
    onChange: e => setDraft({
      ...draft,
      prompt: e.target.value
    }),
    placeholder: "プロンプト本文"
  }), /*#__PURE__*/React.createElement("textarea", {
    className: "tall",
    value: draft.japaneseTranslation || "",
    onChange: e => setDraft({
      ...draft,
      japaneseTranslation: e.target.value
    }),
    placeholder: "和訳本文"
  }), /*#__PURE__*/React.createElement("textarea", {
    value: draft.memo || "",
    onChange: e => setDraft({
      ...draft,
      memo: e.target.value
    }),
    placeholder: "メモ"
  }), /*#__PURE__*/React.createElement(CoverImageUploader, {
    item: draft,
    category: "mockup",
    onChange: setCoverImages
  })), /*#__PURE__*/React.createElement(ModalActions, {
    onClose: onClose,
    onSave: () => onSave(draft)
  }));
}
function PromptBook({
  prompts,
  setPrompts,
  copyText,
  setScreen
}) {
  const [query, setQuery] = React.useState("");
  const [tag, setTag] = React.useState("すべて");
  const [favoritesOnly, setFavoritesOnly] = React.useState(false);
  const [editing, setEditing] = React.useState(null);
  const [translationPrompt, setTranslationPrompt] = React.useState(null);
  const [memoPrompt, setMemoPrompt] = React.useState(null);
  const [inlineEdit, setInlineEdit] = React.useState(null);
  const [stockFrameCount, setStockFrameCount] = React.useState(5);
  const tags = Array.from(new Set(prompts.flatMap(p => p.tags))).sort();
  const filtered = prompts.filter(item => {
    const haystack = `${item.title} ${item.category} ${item.description} ${item.prompt} ${item.note} ${item.tags.join(" ")}`;
    return lowerIncludes(haystack, query) && (tag === "すべて" || item.tags.includes(tag)) && (!favoritesOnly || item.favorite);
  });
  const imagePrompts = filtered.filter(item => !item.isTextStock).slice(0, 20);
  const textPrompts = filtered.filter(item => item.isTextStock);
  const imagePromptCount = prompts.filter(item => !item.isTextStock).length;
  const textStockCount = prompts.filter(item => item.isTextStock).length;
  const canAddImagePrompt = imagePromptCount < 20;
  const canAddTextStock = textStockCount < 100;
  const imageSlotCount = imagePrompts.length < 20 ? Math.max(8, Math.ceil((imagePrompts.length + 1) / 4) * 4) : 20;
  const imagePromptSlots = Array.from({
    length: imageSlotCount
  }, (_, index) => imagePrompts[index] || null);
  const visibleStockFrameCount = Math.min(100, Math.max(5, stockFrameCount, textPrompts.length));
  const textStockSlots = Array.from({
    length: visibleStockFrameCount
  }, (_, index) => textPrompts[index] || null);
  const save = item => {
    const countForKind = prompts.filter(prompt => Boolean(prompt.isTextStock) === Boolean(item.isTextStock)).length;
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
      favorite: Boolean(item.favorite)
    };
    setPrompts(items => item.id ? items.map(p => p.id === item.id ? next : p) : [...items, next]);
    setEditing(null);
  };
  const updatePrompt = (id, patch) => {
    setPrompts(items => items.map(prompt => prompt.id === id ? {
      ...prompt,
      ...patch
    } : prompt));
  };
  const duplicatePrompt = prompt => {
    const countForKind = prompts.filter(item => Boolean(item.isTextStock) === Boolean(prompt.isTextStock)).length;
    if (countForKind >= (prompt.isTextStock ? 100 : 20)) return;
    setPrompts(items => [...items, {
      ...prompt,
      id: uid(),
      title: `${prompt.title} コピー`
    }]);
  };
  const saveTextStockFrame = item => {
    if (!item.title.trim() && !item.prompt.trim()) return;
    save({
      ...item,
      isTextStock: true,
      imageUrl: ""
    });
  };
  const addTextStockFrame = () => {
    if (!canAddTextStock) return;
    setStockFrameCount(count => Math.min(100, count + 1));
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "page prompt-book-page"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "プロンプト帳",
    action: /*#__PURE__*/React.createElement("div", {
      className: "actions"
    }, /*#__PURE__*/React.createElement("span", {
      className: "prompt-count-pill"
    }, "画像 ", imagePromptCount, " / 20・ストック ", textStockCount, " / 100"), /*#__PURE__*/React.createElement(PageBackButton, {
      label: "ホームへ戻る",
      onClick: () => setScreen("home")
    }))
  }), /*#__PURE__*/React.createElement(Filters, null, /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "検索"
  }), /*#__PURE__*/React.createElement("select", {
    value: tag,
    onChange: e => setTag(e.target.value)
  }, /*#__PURE__*/React.createElement("option", null, "すべて"), tags.map(item => /*#__PURE__*/React.createElement("option", {
    key: item
  }, item))), /*#__PURE__*/React.createElement("label", {
    className: "check"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: favoritesOnly,
    onChange: e => setFavoritesOnly(e.target.checked)
  }), " お気に入りのみ")), /*#__PURE__*/React.createElement("section", {
    className: "prompt-area"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prompt-area-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "画像付きプロンプト"), /*#__PURE__*/React.createElement("p", null, "お気に入り・よく使うプロンプトを、最大20個まで保存できます。"))), /*#__PURE__*/React.createElement("div", {
    className: "library-prompt-grid"
  }, imagePromptSlots.map((prompt, index) => prompt ? /*#__PURE__*/React.createElement(LibraryImagePromptCard, {
    key: prompt.id,
    prompt: prompt,
    inlineEdit: inlineEdit,
    setInlineEdit: setInlineEdit,
    updatePrompt: updatePrompt,
    duplicatePrompt: duplicatePrompt,
    deletePrompt: () => setPrompts(items => items.filter(item => item.id !== prompt.id)),
    copyText: copyText,
    showTranslation: () => setTranslationPrompt(prompt),
    showMemo: () => setMemoPrompt(prompt)
  }) : canAddImagePrompt ? /*#__PURE__*/React.createElement("button", {
    className: "add-prompt-card",
    key: `my-empty-prompt-${index}`,
    onClick: () => setEditing(blankPrompt())
  }, /*#__PURE__*/React.createElement("span", null, "＋"), /*#__PURE__*/React.createElement("strong", null, "新しいプロンプト")) : null))), /*#__PURE__*/React.createElement("section", {
    className: "prompt-area text-prompt-area"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prompt-area-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "プロンプトストック"), /*#__PURE__*/React.createElement("p", null, "画像を設定しないプロンプトはこちらに保存します。最大100件まで保存できます。"))), /*#__PURE__*/React.createElement("div", {
    className: "text-prompt-list"
  }, textStockSlots.map((prompt, index) => /*#__PURE__*/React.createElement(TextStockFrame, {
    key: prompt?.id || `my-stock-frame-${index}`,
    prompt: prompt,
    blankPrompt: blankPrompt(true),
    onCreate: saveTextStockFrame,
    onUpdate: updatePrompt,
    copyText: copyText,
    showTranslation: () => prompt && setTranslationPrompt(prompt),
    showMemo: () => prompt && setMemoPrompt(prompt)
  }))), canAddTextStock && textStockCount >= visibleStockFrameCount && /*#__PURE__*/React.createElement("button", {
    className: "add-stock-button",
    onClick: addTextStockFrame
  }, "＋ プロンプトを追加"), !canAddTextStock && /*#__PURE__*/React.createElement("p", {
    className: "limit-message"
  }, "保存上限（100件）に達しました")), editing && /*#__PURE__*/React.createElement(PromptModal, {
    item: editing,
    onClose: () => setEditing(null),
    onSave: save
  }), translationPrompt && /*#__PURE__*/React.createElement(TranslationModal, {
    prompt: translationPrompt,
    onClose: () => setTranslationPrompt(null),
    copyText: copyText
  }), memoPrompt && /*#__PURE__*/React.createElement(MemoModal, {
    prompt: {
      ...memoPrompt,
      memo: memoPrompt.memo || memoPrompt.note
    },
    onClose: () => setMemoPrompt(null),
    onSave: memo => {
      updatePrompt(memoPrompt.id, {
        memo,
        note: memo
      });
      setMemoPrompt(null);
    }
  }), /*#__PURE__*/React.createElement(PageBackButton, {
    className: "page-bottom-back",
    label: "ホームへ戻る",
    onClick: () => setScreen("home")
  }));
}
function Midjourney({
  settings,
  setSettings,
  copyText,
  setScreen
}) {
  const [query, setQuery] = React.useState("");
  const [basePrompt, setBasePrompt] = React.useState("");
  const [promptEn, setPromptEn] = React.useState("");
  const [promptJa, setPromptJa] = React.useState("");
  const [activeLanguage, setActiveLanguage] = React.useState("en");
  const [selectedParams, setSelectedParams] = React.useState([]);
  const [fullPrompt, setFullPrompt] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [memo, setMemo] = React.useState("");
  const [editingId, setEditingId] = React.useState("");
  const [copied, setCopied] = React.useState(false);
  const [imageModal, setImageModal] = React.useState(null);
  const [highlightedId, setHighlightedId] = React.useState("");
  const normalizedSettings = settings.map(item => normalizeMjSetting(item));
  const filtered = normalizedSettings.filter(item => lowerIncludes(`${item.memo || ""} ${item.note || ""} ${mjCommand(item)} ${(item.extractedParams || []).join(" ")}`, query));
  const saveLimitReached = settings.length >= 50 && !editingId;
  const currentParams = parseMidjourneyPrompt(fullPrompt).params;
  const displayedPrompt = activeLanguage === "en" ? promptEn : promptJa;
  const completePrompt = combinePrompt(displayedPrompt, currentParams);
  const canSave = Boolean(completePrompt.trim()) && !saveLimitReached;
  const showEmptySlots = !query.trim();
  const shelfSlotCount = showEmptySlots ? settings.length < 3 ? 3 : Math.min(50, filtered.length + (settings.length < 50 ? 1 : 0)) : filtered.length;
  const shelfSlots = Array.from({
    length: shelfSlotCount
  }, (_, index) => filtered[index] || null);
  const imageSearchItems = normalizedSettings.flatMap(item => (item.images || []).map((image, index) => ({
    image,
    cardId: item.id,
    index
  })));
  const updatePromptField = value => {
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
  const applyParamFromCard = param => {
    const key = mjParamKey(param);
    const parsed = parseMidjourneyPrompt(fullPrompt);
    const replaceSameKind = mjReplaceKeys.includes(key);
    const current = parsed.params;
    const alreadyExists = current.includes(param);
    const next = alreadyExists ? current : replaceSameKind ? [...current.filter(item => mjParamKey(item) !== key), param] : [...current.filter(item => item !== param), param];
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
      createdAt: editingId ? settings.find(item => item.id === editingId)?.createdAt : new Date().toISOString()
    });
    setSettings(items => editingId ? items.map(item => item.id === editingId ? normalized : item) : [normalized, ...items]);
    clearComposer();
  };
  const updateSavedSetting = (id, patch) => {
    setSettings(items => items.map(setting => {
      if (setting.id !== id) return setting;
      const current = normalizeMjSetting(setting);
      const merged = normalizeMjSetting({
        ...current,
        ...patch,
        id,
        createdAt: current.createdAt
      });
      return {
        ...merged,
        createdAt: current.createdAt
      };
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
      createdAt: new Date().toISOString()
    });
    setSettings(items => [created, ...items]);
  };
  const jumpToCard = cardId => {
    setQuery("");
    setHighlightedId(cardId);
    window.setTimeout(() => {
      document.getElementById(`mj-card-${cardId}`)?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 80);
    window.setTimeout(() => setHighlightedId(""), 1800);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "page mj-board-page"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "Midjourneyパラメータ制作ボード",
    action: /*#__PURE__*/React.createElement("div", {
      className: "actions"
    }, /*#__PURE__*/React.createElement(PageBackButton, {
      label: "ホームへ戻る",
      onClick: () => setScreen("home")
    }), /*#__PURE__*/React.createElement("button", {
      className: "primary",
      onClick: save,
      disabled: !canSave
    }, "完成プロンプトを保存"))
  }), /*#__PURE__*/React.createElement("div", {
    className: "mj-workspace"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "mj-builder-panel"
  }, /*#__PURE__*/React.createElement("section", {
    className: "mj-input-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mj-field-head"
  }, /*#__PURE__*/React.createElement("h3", null, "プロンプト")), /*#__PURE__*/React.createElement("textarea", {
    className: "mj-base-input",
    value: displayedPrompt,
    onChange: event => updatePromptField(event.target.value),
    placeholder: activeLanguage === "en" ? "例：cute pastel clipart, white background, no shadow" : "ここに日本語訳を入力してください"
  }), /*#__PURE__*/React.createElement("h3", null, "パラメータ"), /*#__PURE__*/React.createElement("p", {
    className: "mj-help-text"
  }, "✨ 右側の抽出済みパラメータをクリックすると、ここへ追加できます。"), /*#__PURE__*/React.createElement("textarea", {
    className: "mj-final-input",
    value: fullPrompt,
    onChange: event => setFullPrompt(event.target.value),
    placeholder: "例：--ar 1:1 --stylize 50 --chaos 10 --raw"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mj-save-grid"
  }, /*#__PURE__*/React.createElement("input", {
    value: title,
    onChange: event => setTitle(event.target.value),
    placeholder: "保存タイトル"
  }), /*#__PURE__*/React.createElement("textarea", {
    value: imageUrl,
    onChange: event => setImageUrl(event.target.value),
    placeholder: "サンプル画像URL（最大5件・改行またはカンマ区切り）"
  }), /*#__PURE__*/React.createElement("textarea", {
    value: memo,
    onChange: event => setMemo(event.target.value),
    placeholder: "メモ"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mj-composer-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "primary",
    onClick: copyFullPrompt,
    disabled: !completePrompt.trim()
  }, "📋 プロンプトをコピー"), /*#__PURE__*/React.createElement("button", {
    onClick: copyParams,
    disabled: !fullPrompt.trim()
  }, "📋 パラメータをコピー"), /*#__PURE__*/React.createElement("button", {
    onClick: save,
    disabled: !canSave
  }, "完成プロンプトを保存"), editingId && /*#__PURE__*/React.createElement("button", {
    onClick: clearComposer
  }, "新規作成に戻る"), copied && /*#__PURE__*/React.createElement("span", null, "コピーしました")), saveLimitReached && /*#__PURE__*/React.createElement("p", {
    className: "limit-message"
  }, "保存上限（50件）に達しました"))), /*#__PURE__*/React.createElement("section", {
    className: "mj-saved-shelf"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mj-shelf-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "クイック検索"), /*#__PURE__*/React.createElement("p", null, "保存したMJプロンプトを、ワードや画像から探せます。")), /*#__PURE__*/React.createElement(Filters, null, /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "プロンプトやメモを検索..."
  })), /*#__PURE__*/React.createElement("div", {
    className: "mj-image-search"
  }, /*#__PURE__*/React.createElement("strong", null, "画像から探す"), /*#__PURE__*/React.createElement("div", {
    className: "mj-image-search-grid"
  }, imageSearchItems.length ? imageSearchItems.map(item => /*#__PURE__*/React.createElement("button", {
    key: `${item.cardId}-${item.index}-${imageSrc(item.image)}`,
    onClick: () => jumpToCard(item.cardId)
  }, /*#__PURE__*/React.createElement("img", {
    src: imageThumbnail(item.image),
    alt: ""
  }))) : /*#__PURE__*/React.createElement("small", null, "画像を登録すると、ここから探せます。")))), /*#__PURE__*/React.createElement("div", {
    className: "mj-card-grid"
  }, shelfSlots.map((raw, index) => {
    if (!raw) {
      return settings.length < 50 ? /*#__PURE__*/React.createElement("button", {
        className: "mj-empty-card",
        key: `mj-empty-${index}`,
        onClick: addEmptySavedSetting
      }, /*#__PURE__*/React.createElement("span", null, "＋"), /*#__PURE__*/React.createElement("strong", null, "新しいMJプロンプト")) : null;
    }
    const item = normalizeMjSetting(raw);
    return /*#__PURE__*/React.createElement(MJEditableCard, {
      key: item.id,
      item: item,
      highlighted: highlightedId === item.id,
      onUpdate: patch => updateSavedSetting(item.id, patch),
      onDelete: () => setSettings(items => items.filter(setting => setting.id !== item.id)),
      onCopyPrompt: () => copyText(mjCommand(item), item.id),
      onCopyParams: () => copyText((item.extractedParams || []).join(" "), item.id),
      onParamClick: applyParamFromCard,
      onOpenImage: imageIndex => setImageModal({
        images: item.images || [],
        index: imageIndex
      })
    });
  }), settings.length >= 50 && /*#__PURE__*/React.createElement("p", {
    className: "limit-message"
  }, "保存上限（50件）に達しました")))), imageModal && /*#__PURE__*/React.createElement(ImagePreviewModal, {
    modal: imageModal,
    setModal: setImageModal
  }), /*#__PURE__*/React.createElement(PageBackButton, {
    className: "page-bottom-back",
    label: "ホームへ戻る",
    onClick: () => setScreen("home")
  }));
}
function parseMidjourneyPrompt(value) {
  const params = Array.from(value.matchAll(/--[a-zA-Z0-9-]+(?:\s+(?!--)[^\s]+)*/g)).map(match => match[0].trim());
  const uniqueParams = Array.from(new Set(params));
  const basePrompt = value.replace(/--[a-zA-Z0-9-]+(?:\s+(?!--)[^\s]+)*/g, " ").replace(/\s+/g, " ").trim();
  return {
    basePrompt,
    params: uniqueParams
  };
}
function splitImageUrls(value) {
  return value.split(/[\n,]/).map(item => item.trim()).filter(Boolean).slice(0, 5);
}
async function fileToDataUrl(file) {
  const image = saveImageToStorage(await optimizeImage(file, "midjourney"));
  return image.src;
}
function promptCardHeading(prompt) {
  const text = prompt.replace(/\s+/g, " ").trim();
  return text ? text.slice(0, 30) : "新しいMJプロンプト";
}
function MJEditableCard({
  item,
  highlighted,
  onUpdate,
  onDelete,
  onCopyPrompt,
  onCopyParams,
  onParamClick,
  onOpenImage
}) {
  const fileInputRef = React.useRef(null);
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
    const timer = window.setInterval(() => setSlideIndex(current => (current + 1) % images.length), 3200);
    return () => window.clearInterval(timer);
  }, [item.id, (item.images || []).length]);
  const params = item.extractedParams || [];
  const promptText = mjCommand(item);
  const images = item.images || [];
  const openFilePicker = event => {
    event?.preventDefault?.();
    event?.stopPropagation?.();
    console.log("[MJ画像追加] input exists:", Boolean(fileInputRef.current), "cardId:", item.id);
    fileInputRef.current?.click();
  };
  const addImageFiles = async fileList => {
    const files = Array.from(fileList).filter(isSupportedImageFile);
    console.log("[MJ画像追加] selected files:", files.length, files.map(file => file.name), "cardId:", item.id);
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
    const nextImages = await Promise.all(files.map(file => optimizeImage(file, "midjourney")));
    nextImages.forEach((image, index) => console.log("[MJ画像追加] base64 prefix:", image.src.slice(0, 30), "file:", files[index]?.name, "cardId:", item.id));
    const updatedImages = [...images, ...nextImages].slice(0, 5);
    console.log("[MJ画像追加] updated images length:", updatedImages.length, "cardId:", item.id);
    setImageMessage("");
    onUpdate({
      images: updatedImages,
      imageUrl: updatedImages[0]?.src || ""
    });
    scheduleStorageWarningCheck();
  };
  const removeImage = index => {
    const updatedImages = images.filter((_, imageIndex) => imageIndex !== index);
    onUpdate({
      images: updatedImages,
      imageUrl: updatedImages[0]?.src || ""
    });
  };
  const updatePrompt = value => {
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
      fullPrompt: value
    });
  };
  const saveTitle = () => {
    const nextTitle = titleDraft.trim() || promptCardHeading(promptText);
    setTitleDraft(nextTitle);
    setIsEditingTitle(false);
    onUpdate({
      title: nextTitle
    });
  };
  return /*#__PURE__*/React.createElement("article", {
    id: `mj-card-${item.id}`,
    className: `mj-card editable-mj-card ${highlighted ? "highlighted" : ""}`
  }, /*#__PURE__*/React.createElement("input", {
    ref: fileInputRef,
    style: {
      display: "none"
    },
    type: "file",
    accept: "image/png,image/jpeg,image/webp",
    multiple: true,
    onClick: event => event.stopPropagation(),
    onChange: event => {
      event.preventDefault();
      event.stopPropagation();
      if (event.currentTarget.files) addImageFiles(event.currentTarget.files);
      event.currentTarget.value = "";
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: `mj-image-edit-zone ${isDragging ? "dragging" : ""}`,
    role: "button",
    tabIndex: 0,
    onClick: event => {
      if (images.length) {
        event.preventDefault();
        event.stopPropagation();
        onOpenImage(slideIndex);
        return;
      }
      openFilePicker(event);
    },
    onKeyDown: event => {
      if (event.key !== "Enter" && event.key !== " ") return;
      if (images.length) {
        event.preventDefault();
        event.stopPropagation();
        onOpenImage(slideIndex);
        return;
      }
      openFilePicker(event);
    },
    onDragEnter: event => {
      event.preventDefault();
      event.stopPropagation();
      setIsDragging(true);
    },
    onDragOver: event => {
      event.preventDefault();
      event.stopPropagation();
      setIsDragging(true);
    },
    onDragLeave: event => {
      event.preventDefault();
      event.stopPropagation();
      setIsDragging(false);
    },
    onDrop: event => {
      event.preventDefault();
      event.stopPropagation();
      setIsDragging(false);
      addImageFiles(event.dataTransfer.files);
    },
    onPaste: event => {
      const files = clipboardImageFiles(event);
      if (!files.length) return;
      event.preventDefault();
      event.stopPropagation();
      addImageFiles(files);
    }
  }, images.length ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "mj-card-image image-only-button"
  }, /*#__PURE__*/React.createElement("img", {
    src: imageThumbnail(images[slideIndex] || images[0]),
    alt: ""
  }), images.length > 1 && /*#__PURE__*/React.createElement("span", {
    className: "image-dots"
  }, images.map((_, dotIndex) => /*#__PURE__*/React.createElement("i", {
    key: dotIndex,
    className: dotIndex === slideIndex ? "active" : ""
  }))))) : /*#__PURE__*/React.createElement(PromptThumbnail, {
    imageUrl: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "drop-hint"
  }, "ここへドロップ"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "image-edit-toggle",
    onClick: openFilePicker
  }, "画像を追加")), images.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "image-url-list image-delete-list"
  }, images.map((image, index) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: `${imageSrc(image)}-${index}`,
    onClick: () => removeImage(index)
  }, "画像", index + 1, "を削除"))), imageMessage && /*#__PURE__*/React.createElement("small", {
    className: "image-message"
  }, imageMessage), /*#__PURE__*/React.createElement("div", {
    className: "mj-card-body"
  }, isEditingTitle ? /*#__PURE__*/React.createElement("input", {
    className: "mj-title-edit-input",
    value: titleDraft,
    autoFocus: true,
    onChange: event => setTitleDraft(event.target.value),
    onBlur: saveTitle,
    onKeyDown: event => {
      if (event.key === "Enter") saveTitle();
      if (event.key === "Escape") {
        setTitleDraft(item.title || "");
        setIsEditingTitle(false);
      }
    }
  }) : /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "mj-derived-title",
    onClick: () => setIsEditingTitle(true)
  }, item.title || promptCardHeading(promptText)), /*#__PURE__*/React.createElement("small", {
    className: "mj-date"
  }, "保存日：", formatSavedAt(item.createdAt)), /*#__PURE__*/React.createElement("label", {
    className: "mj-edit-field"
  }, /*#__PURE__*/React.createElement("span", null, "プロンプト"), /*#__PURE__*/React.createElement("textarea", {
    className: "mj-card-textarea prompt",
    value: promptText,
    onChange: event => updatePrompt(event.target.value),
    placeholder: "MJプロンプトを入力すると、パラメータを自動抽出します"
  })), /*#__PURE__*/React.createElement("label", {
    className: "mj-edit-field"
  }, /*#__PURE__*/React.createElement("span", null, "メモ"), /*#__PURE__*/React.createElement("textarea", {
    className: "mj-card-textarea memo",
    value: item.memo || "",
    onChange: event => onUpdate({
      memo: event.target.value,
      note: event.target.value,
      description: event.target.value
    }),
    placeholder: "メモ"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "mj-param-label"
  }, "抽出済みパラメータ"), /*#__PURE__*/React.createElement("div", {
    className: "mj-param-pills compact"
  }, params.length ? params.map(param => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: param,
    onClick: () => onParamClick(param)
  }, param)) : /*#__PURE__*/React.createElement("small", null, "パラメータなし"))), /*#__PURE__*/React.createElement("div", {
    className: "mj-card-actions"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "primary",
    onClick: onCopyPrompt
  }, "📋 プロンプトをコピー"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onCopyParams
  }, "📋 パラメータをコピー"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "danger",
    onClick: onDelete
  }, "削除"))));
}
function ImagePreviewModal({
  modal,
  setModal
}) {
  const {
    images,
    index
  } = modal;
  const move = direction => setModal({
    images,
    index: (index + direction + images.length) % images.length
  });
  return /*#__PURE__*/React.createElement(Modal, {
    title: "画像プレビュー",
    onClose: () => setModal(null)
  }, /*#__PURE__*/React.createElement("div", {
    className: "image-preview-modal"
  }, /*#__PURE__*/React.createElement("img", {
    src: imageSrc(images[index]),
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "modal-actions"
  }, images.length > 1 && /*#__PURE__*/React.createElement("button", {
    onClick: () => move(-1)
  }, "前へ"), images.length > 1 && /*#__PURE__*/React.createElement("button", {
    onClick: () => move(1)
  }, "次へ"), /*#__PURE__*/React.createElement("button", {
    className: "primary",
    onClick: () => setModal(null)
  }, "閉じる"))));
}
function combinePrompt(basePrompt, params) {
  return [basePrompt, ...params].filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
}
function normalizeMjSetting(item) {
  const legacyPrompt = mjCommandLegacy(item);
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
    createdAt: item.createdAt || ""
  };
}
function formatSavedAt(value) {
  if (!value) return "未設定";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "未設定";
  const pad = num => String(num).padStart(2, "0");
  return `${date.getFullYear()}/${pad(date.getMonth() + 1)}/${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}
function mjCommandLegacy(item) {
  return [item.extra, item.ar && `--ar ${item.ar}`, item.stylize && `--stylize ${item.stylize}`, item.chaos && `--chaos ${item.chaos}`, item.raw && "--raw", item.profile && `--profile ${item.profile}`, item.seed && `--seed ${item.seed}`].filter(Boolean).join(" ");
}
function GalleryPage({
  images,
  setImages,
  setJournal,
  setScreen
}) {
  const fileInputRef = React.useRef(null);
  const loadMoreRef = React.useRef(null);
  const [previewId, setPreviewId] = React.useState("");
  const [visibleCount, setVisibleCount] = React.useState(20);
  const preview = images.find(image => image.id === previewId) || null;
  React.useEffect(() => {
    setVisibleCount(20);
  }, [images.length]);
  React.useEffect(() => {
    if (!loadMoreRef.current || visibleCount >= images.length) return;
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setVisibleCount(count => Math.min(count + 20, images.length));
      }
    }, {
      rootMargin: "320px"
    });
    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [images.length, visibleCount]);
  const addFiles = async fileList => {
    const files = Array.from(fileList).filter(isSupportedImageFile);
    if (!files.length) return;
    const remaining = 200 - images.length;
    if (remaining <= 0) {
      window.alert("ギャラリー画像は最大200枚までです");
      return;
    }
    const optimizedImages = await Promise.all(files.slice(0, remaining).map(file => optimizeImage(file, "gallery")));
    if (files.length > remaining) window.alert("ギャラリー画像は最大200枚までです");
    const nextImages = optimizedImages.map((image, index) => ({
      ...image,
      title: files[index].name.replace(/\.[^.]+$/, ""),
      memo: "",
      originalName: files[index].name,
      source: "gallery",
      favorite: false
    }));
    setImages(items => [...nextImages, ...items]);
    scheduleStorageWarningCheck();
  };
  const updateImage = (id, patch) => {
    setImages(items => items.map(item => item.id === id ? {
      ...item,
      ...patch
    } : item));
  };
  const deleteImage = id => {
    setImages(items => items.filter(item => item.id !== id));
    setPreviewId("");
  };
  const pasteToJournal = image => {
    const item = {
      id: uid(),
      imageId: image.id,
      src: image.src,
      thumbnail: image.thumbnail || image.src,
      x: 96,
      y: 96,
      width: 190,
      rotate: -4,
      stickerEffect: true
    };
    setJournal(current => ({
      ...current,
      items: [...(current.items || []), item]
    }));
    setScreen("journal");
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "page gallery-page",
    tabIndex: 0,
    onDragOver: event => event.preventDefault(),
    onDrop: event => {
      event.preventDefault();
      event.stopPropagation();
      addFiles(event.dataTransfer.files);
    },
    onPaste: event => {
      const files = clipboardImageFiles(event);
      if (!files.length) return;
      event.preventDefault();
      event.stopPropagation();
      addFiles(files);
    }
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "ギャラリー",
    action: /*#__PURE__*/React.createElement("div", {
      className: "actions"
    }, /*#__PURE__*/React.createElement(PageBackButton, {
      label: "ホームへ戻る",
      onClick: () => setScreen("home")
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => setScreen("journal")
    }, "ジャーナルへ"), /*#__PURE__*/React.createElement("button", {
      className: "primary",
      onClick: () => fileInputRef.current?.click()
    }, "＋ 画像を追加"))
  }), /*#__PURE__*/React.createElement("input", {
    ref: fileInputRef,
    type: "file",
    accept: "image/png,image/jpeg,image/webp",
    multiple: true,
    style: {
      display: "none"
    },
    onChange: event => {
      if (event.currentTarget.files) addFiles(event.currentTarget.files);
      event.currentTarget.value = "";
    }
  }), images.length ? /*#__PURE__*/React.createElement("div", {
    className: "gallery-grid"
  }, images.slice(0, visibleCount).map(image => /*#__PURE__*/React.createElement("article", {
    className: "gallery-card",
    key: image.id
  }, /*#__PURE__*/React.createElement("button", {
    className: "gallery-favorite-button",
    "aria-label": "お気に入り",
    onClick: () => updateImage(image.id, {
      favorite: !image.favorite
    })
  }, image.favorite ? "♥" : "♡"), /*#__PURE__*/React.createElement("button", {
    className: "gallery-image-button",
    onClick: () => setPreviewId(image.id)
  }, /*#__PURE__*/React.createElement("img", {
    src: imageThumbnail(image),
    alt: ""
  }))))) : /*#__PURE__*/React.createElement(Empty, {
    text: "画像を追加すると、ここにギャラリーが表示されます。"
  }), images.length > visibleCount && /*#__PURE__*/React.createElement("div", {
    ref: loadMoreRef,
    className: "lazy-load-sentinel"
  }, "画像を読み込んでいます…"), preview && /*#__PURE__*/React.createElement(Modal, {
    title: preview.title || "画像詳細",
    onClose: () => setPreviewId("")
  }, /*#__PURE__*/React.createElement("div", {
    className: "gallery-detail-modal"
  }, /*#__PURE__*/React.createElement("img", {
    src: imageSrc(preview),
    alt: ""
  }), /*#__PURE__*/React.createElement("label", null, "タイトル", /*#__PURE__*/React.createElement("input", {
    value: preview.title,
    onChange: event => updateImage(preview.id, {
      title: event.target.value
    }),
    placeholder: "タイトル"
  })), /*#__PURE__*/React.createElement("label", null, "メモ", /*#__PURE__*/React.createElement("textarea", {
    value: preview.memo,
    onChange: event => updateImage(preview.id, {
      memo: event.target.value
    }),
    placeholder: "メモ"
  })), /*#__PURE__*/React.createElement("small", null, "追加日：", formatSavedAt(preview.createdAt)), /*#__PURE__*/React.createElement("label", {
    className: "check"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: preview.favorite,
    onChange: event => updateImage(preview.id, {
      favorite: event.target.checked
    })
  }), " お気に入り"), /*#__PURE__*/React.createElement("div", {
    className: "modal-actions"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => pasteToJournal(preview)
  }, "ジャーナルに貼る"), /*#__PURE__*/React.createElement("button", {
    className: "danger",
    onClick: () => deleteImage(preview.id)
  }, "削除"), /*#__PURE__*/React.createElement("button", {
    className: "primary",
    onClick: () => setPreviewId("")
  }, "閉じる")))), /*#__PURE__*/React.createElement(PageBackButton, {
    className: "page-bottom-back",
    label: "ホームへ戻る",
    onClick: () => setScreen("home")
  }));
}
function isPlayableVideoUrl(url) {
  return /\.(mp4|webm)(\?.*)?$/i.test(url);
}
function isSupportedVideoFile(file) {
  if (!file) return false;
  return /^video\//i.test(file.type) || /\.(mp4|webm|mov|m4v|quicktime)$/i.test(file.name);
}
function clipboardVideoFiles(event) {
  return Array.from(event.clipboardData?.items || []).filter(item => item.kind === "file").map(item => item.getAsFile()).filter(file => Boolean(file) && isSupportedVideoFile(file));
}
function VideoPlaceholder() {
  return /*#__PURE__*/React.createElement("div", {
    className: "video-placeholder",
    "aria-label": "動画サムネイル未設定"
  }, /*#__PURE__*/React.createElement("span", null, "▶"));
}
function VideoLibrary({
  videos,
  setVideos,
  videoStocks,
  setVideoStocks,
  setScreen
}) {
  const thumbnailInputRef = React.useRef(null);
  const videoInputRef = React.useRef(null);
  const uploadVideoInputRef = React.useRef(null);
  const uploadedVideoUrlRef = React.useRef("");
  const tempVideoUrlsRef = React.useRef({});
  const [draft, setDraft] = React.useState(blankVideoPrompt());
  const [tagDraft, setTagDraft] = React.useState("");
  const [isThumbnailDragging, setIsThumbnailDragging] = React.useState(false);
  const [isVideoUploadDragging, setIsVideoUploadDragging] = React.useState(false);
  const [uploadedVideoUrl, setUploadedVideoUrl] = React.useState("");
  const [tempVideoUrls, setTempVideoUrls] = React.useState({});
  const [selectedId, setSelectedId] = React.useState("");
  const [query, setQuery] = React.useState("");
  const [modelFilter, setModelFilter] = React.useState("すべて");
  const [favoriteOnly, setFavoriteOnly] = React.useState(false);
  const [hoverVideoId, setHoverVideoId] = React.useState("");
  const [stockFrameCount, setStockFrameCount] = React.useState(5);
  const [memoStock, setMemoStock] = React.useState(null);
  const videoItems = extractVideoPromptItems(videos);
  React.useEffect(() => {
    uploadedVideoUrlRef.current = uploadedVideoUrl;
  }, [uploadedVideoUrl]);
  React.useEffect(() => {
    tempVideoUrlsRef.current = tempVideoUrls;
  }, [tempVideoUrls]);
  React.useEffect(() => {
    return () => {
      if (uploadedVideoUrlRef.current) URL.revokeObjectURL(uploadedVideoUrlRef.current);
      Object.values(tempVideoUrlsRef.current).forEach(url => URL.revokeObjectURL(url));
    };
  }, []);
  const updateDraft = patch => setDraft(current => ({
    ...current,
    ...patch
  }));
  const resetDraft = () => {
    setDraft(blankVideoPrompt());
    setTagDraft("");
    setSelectedId("");
    setUploadedVideoUrl(current => {
      if (current) URL.revokeObjectURL(current);
      return "";
    });
  };
  const openNewVideo = () => {
    setDraft(blankVideoPrompt());
    setTagDraft("");
    setSelectedId("new");
    setUploadedVideoUrl(current => {
      if (current) URL.revokeObjectURL(current);
      return "";
    });
  };
  const saveVideo = () => {
    const now = new Date().toISOString();
    const tags = splitTags(tagDraft || tagText(draft.tags || []));
    const next = {
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
      updatedAt: now
    };
    if (!next.url && !uploadedVideoUrl) {
      window.alert("動画URLを入力するか、動画をアップロードしてください");
      return;
    }
    if (!draft.id && videoItems.length >= 20) {
      window.alert("動画プロンプトは最大20件まで保存できます");
      return;
    }
    setVideos(items => {
      const current = extractVideoPromptItems(items);
      return draft.id ? current.map(item => item.id === draft.id ? next : item) : [next, ...current].slice(0, 20);
    });
    if (uploadedVideoUrl) {
      setTempVideoUrls(items => ({
        ...items,
        [next.id]: uploadedVideoUrl
      }));
      setUploadedVideoUrl("");
      if (uploadVideoInputRef.current) uploadVideoInputRef.current.value = "";
    }
    setDraft(next);
    setSelectedId(next.id);
    setTagDraft(tagText(next.tags));
  };
  const editVideo = item => {
    setDraft({
      ...blankVideoPrompt(),
      ...item
    });
    setTagDraft(tagText(item.tags || []));
    setSelectedId(item.id);
    setUploadedVideoUrl(current => {
      if (current) URL.revokeObjectURL(current);
      return "";
    });
  };
  const deleteVideo = id => {
    if (!id || !window.confirm("この動画プロンプトを削除しますか？")) return;
    setTempVideoUrls(items => {
      if (items[id]) URL.revokeObjectURL(items[id]);
      const next = {
        ...items
      };
      delete next[id];
      return next;
    });
    setVideos(items => extractVideoPromptItems(items).filter(item => item.id !== id));
    resetDraft();
  };
  const importThumbnail = async file => {
    if (!file) return;
    try {
      const image = await optimizeImage(file, "video-thumbnail");
      updateDraft({
        thumbnail: image.thumbnail || image.src
      });
      scheduleStorageWarningCheck();
    } catch {
      window.alert("サムネイル画像を追加できませんでした。jpg / png / webp を選んでください。");
    }
  };
  const importVideoThumbnail = async file => {
    if (!file) return;
    try {
      const image = await createVideoThumbnail(file);
      updateDraft({
        title: draft.title || file.name.replace(/\.[^.]+$/, ""),
        thumbnail: image.thumbnail || image.src
      });
      scheduleStorageWarningCheck();
    } catch {
      window.alert("動画からサムネイルを作成できませんでした。別の動画形式を試してください。");
    }
  };
  const importUploadedVideo = file => {
    if (!file) return;
    if (!isSupportedVideoFile(file)) {
      window.alert("mp4 / webm / mov などの動画ファイルを選んでください。");
      return;
    }
    const nextUrl = URL.createObjectURL(file);
    setUploadedVideoUrl(current => {
      if (current) URL.revokeObjectURL(current);
      return nextUrl;
    });
  };
  const clearUploadedVideo = () => {
    setUploadedVideoUrl(current => {
      if (current) URL.revokeObjectURL(current);
      return "";
    });
    if (uploadVideoInputRef.current) uploadVideoInputRef.current.value = "";
  };
  const openVideo = url => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const copyPrompt = async () => {
    if (!draft.prompt.trim()) return;
    await navigator.clipboard.writeText(draft.prompt);
    window.alert("プロンプトをコピーしました");
  };
  const copyVideoPrompt = async (item, event) => {
    event.stopPropagation();
    if (!item.prompt.trim()) return;
    await navigator.clipboard.writeText(item.prompt);
    window.alert("プロンプトをコピーしました");
  };
  const copyVideoStockText = async text => {
    if (!text.trim()) return;
    await navigator.clipboard.writeText(text);
    window.alert("プロンプトをコピーしました");
  };
  const normalizedStocks = (Array.isArray(videoStocks) ? videoStocks : []).slice(0, 100).map(item => ({
    ...blankVideoPromptStock(),
    ...item,
    id: item.id || uid(),
    title: item.title || "",
    prompt: item.prompt || item.videoPrompt || "",
    memo: item.memo || item.note || "",
    createdAt: item.createdAt || new Date().toISOString()
  }));
  const stockQuery = query.trim().toLowerCase();
  const filteredStocks = normalizedStocks.filter(item => {
    if (!stockQuery) return true;
    const haystack = `${item.title} ${item.prompt} ${item.memo}`.toLowerCase();
    return haystack.includes(stockQuery);
  });
  const stockCount = normalizedStocks.length;
  const visibleStockFrameCount = Math.min(100, Math.max(5, stockFrameCount, filteredStocks.length));
  const stockSlots = stockQuery ? filteredStocks : Array.from({
    length: visibleStockFrameCount
  }, (_, index) => normalizedStocks[index] || null);
  const canAddStock = stockCount < 100;
  const updateVideoStock = (id, patch) => {
    setVideoStocks(items => items.map(item => item.id === id ? {
      ...item,
      ...patch,
      updatedAt: new Date().toISOString()
    } : item));
  };
  const saveVideoStockFrame = item => {
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
      updatedAt: now
    };
    if (!next.title.trim() && !next.prompt.trim()) return;
    setVideoStocks(items => [...items, next].slice(0, 100));
  };
  const addVideoStockFrame = () => {
    if (!canAddStock) return;
    setStockFrameCount(count => Math.min(100, count + 1));
  };
  const searchActive = Boolean(query.trim() || modelFilter !== "すべて" || favoriteOnly);
  const normalizedVideos = videoItems.slice(0, 20).map(normalizeVideoPrompt);
  const filteredVideos = normalizedVideos.filter(item => {
    const haystack = `${item.title} ${item.prompt} ${item.memo} ${(item.tags || []).join(" ")} ${item.model}`.toLowerCase();
    if (query && !haystack.includes(query.toLowerCase())) return false;
    if (modelFilter !== "すべて" && item.model !== modelFilter) return false;
    if (favoriteOnly && !item.favorite) return false;
    return true;
  });
  const videoSlotCount = searchActive ? filteredVideos.length : normalizedVideos.length < 20 ? Math.max(8, Math.ceil((normalizedVideos.length + 1) / 4) * 4) : 20;
  const slots = searchActive ? filteredVideos : Array.from({
    length: videoSlotCount
  }, (_, index) => normalizedVideos[index] || null);
  if (selectedId) {
    return /*#__PURE__*/React.createElement("section", {
      className: "page video-page",
      tabIndex: 0,
      onPaste: event => {
        const files = clipboardImageFiles(event);
        const videoFiles = clipboardVideoFiles(event);
        if (!files.length && !videoFiles.length) return;
        event.preventDefault();
        event.stopPropagation();
        if (videoFiles.length) importUploadedVideo(videoFiles[0]);else importThumbnail(files[0]);
      }
    }, /*#__PURE__*/React.createElement(PageHead, {
      title: draft.id ? "動画プロンプトを編集" : "新しい動画プロンプト",
      action: /*#__PURE__*/React.createElement(PageBackButton, {
        label: "動画プロンプト帳へ戻る",
        onClick: resetDraft
      })
    }), /*#__PURE__*/React.createElement("div", {
      className: "video-detail-editor"
    }, /*#__PURE__*/React.createElement("div", {
      className: "video-detail-form"
    }, /*#__PURE__*/React.createElement("label", null, "タイトル", /*#__PURE__*/React.createElement("input", {
      value: draft.title,
      onChange: event => updateDraft({
        title: event.target.value
      }),
      placeholder: "タイトル"
    })), /*#__PURE__*/React.createElement("label", null, "動画URL", /*#__PURE__*/React.createElement("input", {
      value: draft.url,
      onChange: event => updateDraft({
        url: event.target.value
      }),
      placeholder: "YouTube / Google Drive / Runway などのURL"
    })), /*#__PURE__*/React.createElement("label", null, "使用モデル", /*#__PURE__*/React.createElement("select", {
      value: draft.model,
      onChange: event => updateDraft({
        model: event.target.value
      })
    }, videoModels.map(model => /*#__PURE__*/React.createElement("option", {
      key: model,
      value: model
    }, model)))), /*#__PURE__*/React.createElement("label", null, "動画プロンプト", /*#__PURE__*/React.createElement("textarea", {
      className: "video-prompt-input",
      value: draft.prompt,
      onChange: event => updateDraft({
        prompt: event.target.value
      }),
      placeholder: "動画生成プロンプト"
    })), /*#__PURE__*/React.createElement("label", null, "メモ", /*#__PURE__*/React.createElement("textarea", {
      value: draft.memo,
      onChange: event => updateDraft({
        memo: event.target.value
      }),
      placeholder: "メモ"
    })), /*#__PURE__*/React.createElement("label", null, "タグ", /*#__PURE__*/React.createElement("input", {
      value: tagDraft,
      onChange: event => setTagDraft(event.target.value),
      placeholder: "cinematic, camera move, product demo"
    })), /*#__PURE__*/React.createElement("label", {
      className: "check"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: Boolean(draft.favorite),
      onChange: event => updateDraft({
        favorite: event.target.checked
      })
    }), " お気に入り")), /*#__PURE__*/React.createElement("aside", {
      className: "video-thumbnail-panel"
    }, /*#__PURE__*/React.createElement("div", {
      className: `video-draft-preview ${isThumbnailDragging ? "dragging" : ""}`,
      onClick: () => thumbnailInputRef.current?.click(),
      onDragEnter: event => {
        event.preventDefault();
        event.stopPropagation();
        setIsThumbnailDragging(true);
      },
      onDragOver: event => {
        event.preventDefault();
        event.stopPropagation();
        setIsThumbnailDragging(true);
      },
      onDragLeave: event => {
        event.preventDefault();
        event.stopPropagation();
        setIsThumbnailDragging(false);
      },
      onDrop: event => {
        event.preventDefault();
        event.stopPropagation();
        setIsThumbnailDragging(false);
        importThumbnail(Array.from(event.dataTransfer.files).find(isSupportedImageFile));
      }
    }, draft.thumbnail ? /*#__PURE__*/React.createElement("img", {
      src: imageThumbnail(draft.thumbnail),
      alt: ""
    }) : /*#__PURE__*/React.createElement(VideoPlaceholder, null), /*#__PURE__*/React.createElement("small", null, "クリック・ドロップ・貼り付けでサムネイル追加")), /*#__PURE__*/React.createElement("div", {
      className: "video-thumbnail-tools"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => thumbnailInputRef.current?.click()
    }, "画像を選ぶ"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => videoInputRef.current?.click()
    }, "動画からサムネイル生成"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => updateDraft({
        thumbnail: ""
      })
    }, "削除")), /*#__PURE__*/React.createElement("div", {
      className: `video-upload-preview ${isVideoUploadDragging ? "dragging" : ""}`,
      onClick: () => uploadVideoInputRef.current?.click(),
      onDragEnter: event => {
        event.preventDefault();
        event.stopPropagation();
        setIsVideoUploadDragging(true);
      },
      onDragOver: event => {
        event.preventDefault();
        event.stopPropagation();
        setIsVideoUploadDragging(true);
      },
      onDragLeave: event => {
        event.preventDefault();
        event.stopPropagation();
        setIsVideoUploadDragging(false);
      },
      onDrop: event => {
        event.preventDefault();
        event.stopPropagation();
        setIsVideoUploadDragging(false);
        importUploadedVideo(Array.from(event.dataTransfer.files).find(isSupportedVideoFile));
      }
    }, uploadedVideoUrl ? /*#__PURE__*/React.createElement("video", {
      src: uploadedVideoUrl,
      controls: true,
      playsInline: true
    }) : /*#__PURE__*/React.createElement("div", {
      className: "video-upload-placeholder"
    }, /*#__PURE__*/React.createElement("span", null, "▶"), /*#__PURE__*/React.createElement("strong", null, "動画をアップロード"), /*#__PURE__*/React.createElement("small", null, "mp4 / webm / mov に対応。動画本体は保存されません。"))), /*#__PURE__*/React.createElement("div", {
      className: "video-thumbnail-tools"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => uploadVideoInputRef.current?.click()
    }, "動画を選ぶ"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: clearUploadedVideo,
      disabled: !uploadedVideoUrl
    }, "アップロード動画を削除")), /*#__PURE__*/React.createElement("input", {
      ref: thumbnailInputRef,
      type: "file",
      accept: "image/png,image/jpeg,image/webp",
      style: {
        display: "none"
      },
      onChange: event => {
        importThumbnail(event.currentTarget.files?.[0]);
        event.currentTarget.value = "";
      }
    }), /*#__PURE__*/React.createElement("input", {
      ref: videoInputRef,
      type: "file",
      accept: "video/mp4,video/webm,video/ogg,video/quicktime,video/*",
      style: {
        display: "none"
      },
      onChange: event => {
        importVideoThumbnail(event.currentTarget.files?.[0]);
        event.currentTarget.value = "";
      }
    }), /*#__PURE__*/React.createElement("input", {
      ref: uploadVideoInputRef,
      type: "file",
      accept: "video/mp4,video/webm,video/quicktime,video/*",
      style: {
        display: "none"
      },
      onChange: event => {
        importUploadedVideo(event.currentTarget.files?.[0]);
        event.currentTarget.value = "";
      }
    }))), /*#__PURE__*/React.createElement("div", {
      className: "video-detail-actions"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: copyPrompt,
      disabled: !draft.prompt.trim()
    }, "📋 プロンプトをコピー"), /*#__PURE__*/React.createElement("button", {
      onClick: () => openVideo(draft.url),
      disabled: !draft.url.trim()
    }, "動画URLを開く"), /*#__PURE__*/React.createElement("button", {
      className: "primary",
      onClick: saveVideo
    }, "保存する"), draft.id && /*#__PURE__*/React.createElement("button", {
      className: "danger",
      onClick: () => deleteVideo(draft.id)
    }, "削除"), /*#__PURE__*/React.createElement(PageBackButton, {
      label: "動画プロンプト帳へ戻る",
      onClick: resetDraft
    })));
  }
  return /*#__PURE__*/React.createElement("section", {
    className: "page video-page"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "動画プロンプト帳",
    action: /*#__PURE__*/React.createElement("div", {
      className: "actions"
    }, /*#__PURE__*/React.createElement("span", {
      className: "prompt-count-pill"
    }, "動画 ", normalizedVideos.length, " / 20・ストック ", stockCount, " / 100"), /*#__PURE__*/React.createElement(PageBackButton, {
      label: "ホームへ戻る",
      onClick: () => setScreen("home")
    }))
  }), /*#__PURE__*/React.createElement("div", {
    className: "video-filter-bar"
  }, /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: event => setQuery(event.target.value),
    placeholder: "タイトル、プロンプト、メモ、タグで検索..."
  }), /*#__PURE__*/React.createElement("select", {
    value: modelFilter,
    onChange: event => setModelFilter(event.target.value)
  }, /*#__PURE__*/React.createElement("option", null, "すべて"), videoModels.map(model => /*#__PURE__*/React.createElement("option", {
    key: model
  }, model))), /*#__PURE__*/React.createElement("label", {
    className: "check"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: favoriteOnly,
    onChange: event => setFavoriteOnly(event.target.checked)
  }), " お気に入りのみ")), /*#__PURE__*/React.createElement("section", {
    className: "prompt-area video-prompt-area"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prompt-area-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "動画プロンプト"), /*#__PURE__*/React.createElement("p", null, "Runway・Kling・Veo・Hailuo・Pikaなどの動画生成プロンプトを最大20件まで保存できます。"))), /*#__PURE__*/React.createElement("div", {
    className: "library-prompt-grid video-grid"
  }, slots.map((item, index) => {
    const previewUrl = item ? tempVideoUrls[item.id] || item.url : "";
    return item ? /*#__PURE__*/React.createElement("article", {
      className: "library-prompt-card video-card video-prompt-card",
      key: item.id,
      onClick: () => editVideo(item)
    }, /*#__PURE__*/React.createElement("button", {
      className: "video-favorite-button",
      "aria-label": "お気に入り",
      onClick: event => {
        event.stopPropagation();
        setVideos(items => extractVideoPromptItems(items).map(video => video.id === item.id ? {
          ...video,
          favorite: !video.favorite
        } : video));
      }
    }, item.favorite ? "♥" : "♡"), /*#__PURE__*/React.createElement("details", {
      className: "card-menu video-card-menu",
      onClick: event => event.stopPropagation()
    }, /*#__PURE__*/React.createElement("summary", {
      "aria-label": "メニュー"
    }, "…"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: event => {
        event.preventDefault();
        editVideo(item);
      }
    }, "編集"), /*#__PURE__*/React.createElement("button", {
      onClick: event => {
        event.preventDefault();
        setVideos(items => [{
          ...item,
          id: uid(),
          title: `${item.title} コピー`,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }, ...extractVideoPromptItems(items)].slice(0, 20));
      }
    }, "複製"), /*#__PURE__*/React.createElement("button", {
      className: "danger",
      onClick: event => {
        event.preventDefault();
        deleteVideo(item.id);
      }
    }, "削除"))), /*#__PURE__*/React.createElement("button", {
      className: "video-thumb-button",
      onClick: event => {
        event.stopPropagation();
        editVideo(item);
      },
      onMouseEnter: () => setHoverVideoId(item.id),
      onMouseLeave: () => setHoverVideoId("")
    }, hoverVideoId === item.id && (isPlayableVideoUrl(previewUrl) || previewUrl.startsWith("blob:")) ? /*#__PURE__*/React.createElement("video", {
      src: previewUrl,
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true
    }) : item.thumbnail ? /*#__PURE__*/React.createElement("img", {
      src: imageThumbnail(item.thumbnail),
      alt: ""
    }) : /*#__PURE__*/React.createElement(VideoPlaceholder, null)), /*#__PURE__*/React.createElement("div", {
      className: "prompt-card-content video-card-body"
    }, /*#__PURE__*/React.createElement("h3", null, item.title), /*#__PURE__*/React.createElement("p", null, item.prompt || item.memo || item.url), /*#__PURE__*/React.createElement("div", {
      className: "video-meta-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mini-pill"
    }, item.model || "その他"), !!(item.tags || []).length && /*#__PURE__*/React.createElement("div", {
      className: "video-tags"
    }, item.tags.slice(0, 2).map(tag => /*#__PURE__*/React.createElement("span", {
      key: tag
    }, "#", tag)))), /*#__PURE__*/React.createElement("div", {
      className: "prompt-card-actions video-card-actions"
    }, /*#__PURE__*/React.createElement("button", {
      className: "primary",
      onClick: event => copyVideoPrompt(item, event),
      disabled: !item.prompt.trim()
    }, "📋 プロンプトをコピー"), /*#__PURE__*/React.createElement("button", {
      onClick: event => {
        event.stopPropagation();
        editVideo(item);
      }
    }, "メモ")))) : /*#__PURE__*/React.createElement("button", {
      className: "add-prompt-card video-add-card",
      key: `empty-${index}`,
      onClick: openNewVideo,
      disabled: videoItems.length >= 20
    }, /*#__PURE__*/React.createElement("span", null, "＋"), /*#__PURE__*/React.createElement("strong", null, "新しい動画プロンプト"));
  })), !searchActive && videoItems.length >= 20 && /*#__PURE__*/React.createElement("p", {
    className: "limit-message"
  }, "動画プロンプトは最大20件まで保存できます"), searchActive && !filteredVideos.length && /*#__PURE__*/React.createElement(Empty, {
    text: "条件に合う動画プロンプトがありません。"
  })), /*#__PURE__*/React.createElement("section", {
    className: "prompt-area text-prompt-area video-stock-area"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prompt-area-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "プロンプトストック"), /*#__PURE__*/React.createElement("p", null, "動画を設定しないプロンプトはこちらに保存します。最大100件まで保存できます。"))), /*#__PURE__*/React.createElement("div", {
    className: "text-prompt-list"
  }, stockSlots.map((stock, index) => /*#__PURE__*/React.createElement(TextStockFrame, {
    key: stock?.id || `video-stock-frame-${index}`,
    prompt: stock,
    blankPrompt: blankVideoPromptStock(),
    onCreate: saveVideoStockFrame,
    onUpdate: updateVideoStock,
    copyText: copyVideoStockText,
    showMemo: () => stock && setMemoStock(stock)
  }))), canAddStock && !stockQuery && stockCount >= visibleStockFrameCount && /*#__PURE__*/React.createElement("button", {
    className: "add-stock-button",
    onClick: addVideoStockFrame
  }, "＋ プロンプトを追加"), !canAddStock && /*#__PURE__*/React.createElement("p", {
    className: "limit-message"
  }, "保存上限（100件）に達しました"), stockQuery && !filteredStocks.length && /*#__PURE__*/React.createElement(Empty, {
    text: "条件に合うプロンプトストックがありません。"
  })), memoStock && /*#__PURE__*/React.createElement(MemoModal, {
    prompt: {
      ...memoStock,
      id: memoStock.id,
      memo: memoStock.memo || ""
    },
    onClose: () => setMemoStock(null),
    onSave: memo => {
      updateVideoStock(memoStock.id, {
        memo
      });
      setMemoStock(null);
    }
  }), /*#__PURE__*/React.createElement(PageBackButton, {
    className: "page-bottom-back",
    label: "ホームへ戻る",
    onClick: () => setScreen("home")
  }));
}
function JournalPage({
  images,
  journal,
  setJournal,
  setGalleryImages,
  setScreen
}) {
  const fileInputRef = React.useRef(null);
  const backgroundInputRef = React.useRef(null);
  const [draggingId, setDraggingId] = React.useState("");
  const [selectedId, setSelectedId] = React.useState("");
  const [isBackgroundDragging, setIsBackgroundDragging] = React.useState(false);
  const boardRef = React.useRef(null);
  const selected = journal.items.find(item => item.id === selectedId);
  const customBackgrounds = journal.customBackgrounds || [];
  const selectedCustomBackground = customBackgrounds.find(item => journal.background === `custom-${item.id}`);
  const addJournalItem = image => {
    const normalized = {
      ...image,
      src: image.src || imageSrc(image),
      thumbnail: image.thumbnail || image.src || imageThumbnail(image)
    };
    const item = {
      id: uid(),
      imageId: normalized.id,
      src: normalized.src,
      thumbnail: normalized.thumbnail,
      x: 80 + journal.items.length * 18,
      y: 80 + journal.items.length * 14,
      width: 170,
      rotate: journal.items.length % 5 * 4 - 8,
      stickerEffect: true
    };
    setJournal(current => ({
      ...current,
      items: [...current.items, item]
    }));
    setSelectedId(item.id);
  };
  const addFiles = async fileList => {
    const files = Array.from(fileList).filter(isSupportedImageFile);
    if (!files.length) return;
    const currentCount = journal.items.length || 0;
    const remaining = 100 - currentCount;
    if (remaining <= 0) {
      window.alert("ジャーナル1ページの画像は最大100枚までです");
      return;
    }
    const optimizedImages = await Promise.all(files.slice(0, remaining).map(file => optimizeImage(file, "journal")));
    if (files.length > remaining) window.alert("ジャーナル1ページの画像は最大100枚までです");
    const nextImages = optimizedImages.map((image, index) => ({
      ...image,
      title: files[index].name.replace(/\.[^.]+$/, ""),
      memo: "ジャーナルから追加",
      source: "journal",
      favorite: false
    }));
    setGalleryImages(items => [...nextImages, ...items]);
    nextImages.forEach(addJournalItem);
    scheduleStorageWarningCheck();
  };
  const addBackgroundFiles = async fileList => {
    const files = Array.from(fileList).filter(isSupportedImageFile);
    if (!files.length) return;
    const currentBackgrounds = customBackgrounds.length;
    const remaining = 20 - currentBackgrounds;
    if (remaining <= 0) {
      window.alert("背景画像は最大20枚までです");
      return;
    }
    const optimizedBackgrounds = await Promise.all(files.slice(0, remaining).map(file => optimizeImage(file, "background")));
    if (files.length > remaining) window.alert("背景画像は最大20枚までです");
    const nextBackgrounds = optimizedBackgrounds.map((image, index) => ({
      ...image,
      title: files[index].name.replace(/\.[^.]+$/, "") || `お気に入り背景${index + 1}`,
      memo: "",
      source: "journal-background",
      favorite: false
    }));
    setJournal(current => ({
      ...current,
      customBackgrounds: [...nextBackgrounds, ...(current.customBackgrounds || [])],
      background: `custom-${nextBackgrounds[0].id}`
    }));
    scheduleStorageWarningCheck();
  };
  const updateBackground = (id, patch) => {
    setJournal(current => ({
      ...current,
      customBackgrounds: (current.customBackgrounds || []).map(item => item.id === id ? {
        ...item,
        ...patch
      } : item)
    }));
  };
  const deleteBackground = id => {
    setJournal(current => {
      const nextBackgrounds = (current.customBackgrounds || []).filter(item => item.id !== id);
      return {
        ...current,
        customBackgrounds: nextBackgrounds,
        background: current.background === `custom-${id}` ? "paper" : current.background
      };
    });
  };
  const updateItem = (id, patch) => {
    setJournal(current => ({
      ...current,
      items: current.items.map(item => item.id === id ? {
        ...item,
        ...patch
      } : item)
    }));
  };
  const moveItem = event => {
    if (!draggingId || !boardRef.current) return;
    const rect = boardRef.current.getBoundingClientRect();
    updateItem(draggingId, {
      x: event.clientX - rect.left - 60,
      y: event.clientY - rect.top - 60
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "page journal-page"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "ジャーナル",
    action: /*#__PURE__*/React.createElement("div", {
      className: "actions"
    }, /*#__PURE__*/React.createElement(PageBackButton, {
      label: "ホームへ戻る",
      onClick: () => setScreen("home")
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => setScreen("gallery")
    }, "ギャラリーへ"), /*#__PURE__*/React.createElement("button", {
      className: "primary",
      onClick: () => fileInputRef.current?.click()
    }, "＋ 画像を追加"))
  }), /*#__PURE__*/React.createElement("input", {
    ref: fileInputRef,
    type: "file",
    accept: "image/png,image/jpeg,image/webp",
    multiple: true,
    style: {
      display: "none"
    },
    onChange: event => {
      if (event.currentTarget.files) addFiles(event.currentTarget.files);
      event.currentTarget.value = "";
    }
  }), /*#__PURE__*/React.createElement("input", {
    ref: backgroundInputRef,
    type: "file",
    accept: "image/png,image/jpeg,image/webp",
    multiple: true,
    style: {
      display: "none"
    },
    onChange: event => {
      if (event.currentTarget.files) addBackgroundFiles(event.currentTarget.files);
      event.currentTarget.value = "";
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "journal-layout"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "journal-tools"
  }, /*#__PURE__*/React.createElement("label", null, "背景", /*#__PURE__*/React.createElement("select", {
    value: journal.background,
    onChange: event => setJournal(current => ({
      ...current,
      background: event.target.value
    }))
  }, /*#__PURE__*/React.createElement("option", {
    value: "paper"
  }, "無地アイボリー"), /*#__PURE__*/React.createElement("option", {
    value: "grid"
  }, "方眼紙"), /*#__PURE__*/React.createElement("option", {
    value: "dot-grid"
  }, "ドット方眼"), /*#__PURE__*/React.createElement("option", {
    value: "kraft"
  }, "クラフト紙"), /*#__PURE__*/React.createElement("option", {
    value: "old-paper"
  }, "古紙"), /*#__PURE__*/React.createElement("option", {
    value: "pink"
  }, "淡いピンク"), /*#__PURE__*/React.createElement("option", {
    value: "blue"
  }, "淡いブルー"), /*#__PURE__*/React.createElement("option", {
    value: "green"
  }, "淡いグリーン"), /*#__PURE__*/React.createElement("option", {
    value: "linen"
  }, "リネン風"), /*#__PURE__*/React.createElement("option", {
    value: "washi"
  }, "マスキングテープ風"), /*#__PURE__*/React.createElement("option", {
    value: "scrapbook"
  }, "スクラップブック風"), /*#__PURE__*/React.createElement("option", {
    value: "lined"
  }, "罫線ノート"), /*#__PURE__*/React.createElement("option", {
    value: "check"
  }, "チェック柄"), /*#__PURE__*/React.createElement("option", {
    value: "floral"
  }, "薄い花柄"), /*#__PURE__*/React.createElement("option", {
    value: "watercolor"
  }, "水彩にじみ"), /*#__PURE__*/React.createElement("option", {
    value: "dark"
  }, "ダーク紙"), customBackgrounds.map(background => /*#__PURE__*/React.createElement("option", {
    key: background.id,
    value: `custom-${background.id}`
  }, background.title || "お気に入り背景")))), /*#__PURE__*/React.createElement("div", {
    className: `journal-background-drop ${isBackgroundDragging ? "dragging" : ""}`,
    onDragOver: event => event.preventDefault(),
    onDragEnter: event => {
      event.preventDefault();
      setIsBackgroundDragging(true);
    },
    onDragLeave: () => setIsBackgroundDragging(false),
    onDrop: event => {
      event.preventDefault();
      setIsBackgroundDragging(false);
      addBackgroundFiles(event.dataTransfer.files);
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => backgroundInputRef.current?.click()
  }, "＋ 背景を追加"), /*#__PURE__*/React.createElement("small", null, "画像をドロップして背景にできます")), selectedCustomBackground && /*#__PURE__*/React.createElement("div", {
    className: "journal-background-editor"
  }, /*#__PURE__*/React.createElement("label", null, "背景名", /*#__PURE__*/React.createElement("input", {
    value: selectedCustomBackground.title,
    onChange: event => updateBackground(selectedCustomBackground.id, {
      title: event.target.value
    })
  })), /*#__PURE__*/React.createElement("button", {
    className: "danger",
    onClick: () => deleteBackground(selectedCustomBackground.id)
  }, "背景を削除")), /*#__PURE__*/React.createElement("strong", null, "画像ストック"), /*#__PURE__*/React.createElement("div", {
    className: "journal-stock"
  }, images.slice(0, 18).map(image => /*#__PURE__*/React.createElement("button", {
    key: image.id,
    onClick: () => addJournalItem(image)
  }, /*#__PURE__*/React.createElement("img", {
    src: imageThumbnail(image),
    alt: ""
  })))), selected && /*#__PURE__*/React.createElement("div", {
    className: "journal-edit-panel"
  }, /*#__PURE__*/React.createElement("label", null, "サイズ", /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "80",
    max: "360",
    value: selected.width,
    onChange: event => updateItem(selected.id, {
      width: Number(event.target.value)
    })
  })), /*#__PURE__*/React.createElement("label", null, "回転", /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "-35",
    max: "35",
    value: selected.rotate,
    onChange: event => updateItem(selected.id, {
      rotate: Number(event.target.value)
    })
  })), /*#__PURE__*/React.createElement("label", {
    className: "check"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: isStickerEffectOn(selected),
    onChange: event => updateItem(selected.id, {
      stickerEffect: event.target.checked
    })
  }), " シール風"), /*#__PURE__*/React.createElement("button", {
    className: "danger",
    onClick: () => setJournal(current => ({
      ...current,
      items: current.items.filter(item => item.id !== selected.id)
    }))
  }, "選択画像を削除"))), /*#__PURE__*/React.createElement("div", {
    ref: boardRef,
    className: `journal-board ${journal.background}`,
    tabIndex: 0,
    style: selectedCustomBackground ? {
      backgroundImage: `linear-gradient(rgba(255,255,255,0.08), rgba(255,255,255,0.08)), url(${imageSrc(selectedCustomBackground)})`
    } : undefined,
    onPointerMove: moveItem,
    onPointerUp: () => setDraggingId(""),
    onPointerLeave: () => setDraggingId(""),
    onDragOver: event => event.preventDefault(),
    onDrop: event => {
      event.preventDefault();
      event.stopPropagation();
      addFiles(event.dataTransfer.files);
    },
    onPaste: event => {
      const files = clipboardImageFiles(event);
      if (!files.length) return;
      event.preventDefault();
      event.stopPropagation();
      addFiles(files);
    }
  }, journal.items.length ? journal.items.map(item => /*#__PURE__*/React.createElement("div", {
    className: `journal-sticker ${selectedId === item.id ? "selected" : ""}`,
    key: item.id,
    style: {
      left: item.x,
      top: item.y,
      width: item.width,
      transform: `rotate(${item.rotate}deg)`
    },
    onPointerDown: event => {
      event.preventDefault();
      setSelectedId(item.id);
      setDraggingId(item.id);
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: isStickerEffectOn(item) ? "journal-image sticker-outline" : "journal-image",
    src: imageThumbnail(item),
    alt: "",
    draggable: false
  }))) : /*#__PURE__*/React.createElement("div", {
    className: "journal-empty"
  }, "画像を追加して、シール帳のように並べられます。"))), /*#__PURE__*/React.createElement(PageBackButton, {
    className: "page-bottom-back",
    label: "ホームへ戻る",
    onClick: () => setScreen("home")
  }));
}
function Projects({
  projects,
  setProjects,
  prompts,
  settings,
  copyText,
  setScreen
}) {
  const [editing, setEditing] = React.useState(null);
  const [query, setQuery] = React.useState("");
  const canAddProject = projects.length < 30;
  const filtered = sortProjectsForDisplay(projects.filter(item => lowerIncludes(`${item.name} ${item.description} ${item.note} ${item.tags.join(" ")}`, query)));
  const save = item => {
    const next = {
      ...item,
      id: item.id || uid(),
      updatedAt: new Date().toISOString()
    };
    setProjects(items => item.id ? items.map(p => p.id === item.id ? next : p) : [next, ...items].slice(0, 30));
    setEditing(null);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "page"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "プロジェクト管理",
    action: /*#__PURE__*/React.createElement("div", {
      className: "actions"
    }, /*#__PURE__*/React.createElement(PageBackButton, {
      label: "ホームへ戻る",
      onClick: () => setScreen("home")
    }), canAddProject ? /*#__PURE__*/React.createElement("button", {
      className: "primary",
      onClick: () => setEditing(blankProject())
    }, "追加する") : /*#__PURE__*/React.createElement("span", {
      className: "limit-message"
    }, "プロジェクトは最大30件まで登録できます"))
  }), /*#__PURE__*/React.createElement(Filters, null, /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "プロジェクト名、タグ、メモで検索"
  })), !canAddProject && /*#__PURE__*/React.createElement("p", {
    className: "limit-note"
  }, "プロジェクトは最大30件まで登録できます"), /*#__PURE__*/React.createElement("div", {
    className: "project-grid"
  }, filtered.map(project => {
    const linkedPrompts = prompts.filter(p => project.promptIds.includes(p.id));
    const linkedMj = settings.filter(m => project.mjIds.includes(m.id));
    return /*#__PURE__*/React.createElement("article", {
      className: "project-card",
      key: project.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "project-top"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, project.name), /*#__PURE__*/React.createElement("p", null, project.description)), /*#__PURE__*/React.createElement("div", {
      className: "actions"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setEditing(project)
    }, "編集"), /*#__PURE__*/React.createElement("button", {
      className: "danger",
      onClick: () => setProjects(items => items.filter(p => p.id !== project.id))
    }, "削除"))), /*#__PURE__*/React.createElement(TagRow, {
      tags: project.tags
    }), project.dueDate && /*#__PURE__*/React.createElement("p", {
      className: "project-due-line"
    }, projectDueText(project.dueDate)), project.note && /*#__PURE__*/React.createElement("p", {
      className: "note"
    }, project.note), /*#__PURE__*/React.createElement("h4", null, "関連プロンプト"), /*#__PURE__*/React.createElement("div", {
      className: "mini-list"
    }, linkedPrompts.length ? linkedPrompts.map(p => /*#__PURE__*/React.createElement("button", {
      key: p.id,
      onClick: () => copyText(p.prompt, p.id)
    }, p.title)) : /*#__PURE__*/React.createElement("small", null, "未設定")), /*#__PURE__*/React.createElement("h4", null, "関連ミッドジャーニー設定"), /*#__PURE__*/React.createElement("div", {
      className: "mini-list"
    }, linkedMj.length ? linkedMj.map(m => /*#__PURE__*/React.createElement("button", {
      key: m.id,
      onClick: () => copyText(mjCommand(m))
    }, m.title)) : /*#__PURE__*/React.createElement("small", null, "未設定")));
  })), editing && /*#__PURE__*/React.createElement(ProjectModal, {
    item: editing,
    prompts: prompts,
    settings: settings,
    onClose: () => setEditing(null),
    onSave: save
  }), /*#__PURE__*/React.createElement(PageBackButton, {
    className: "page-bottom-back",
    label: "ホームへ戻る",
    onClick: () => setScreen("home")
  }));
}
function PromptCard({
  prompt,
  onCopy,
  extra
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "prompt-card"
  }, /*#__PURE__*/React.createElement("img", {
    src: imageThumbnail(prompt.imageUrl) || art("プロンプト", "#f5eadc", "#e7e7df"),
    alt: ""
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "pill"
  }, prompt.category), /*#__PURE__*/React.createElement("h3", null, prompt.title), /*#__PURE__*/React.createElement("p", null, prompt.description || prompt.note), /*#__PURE__*/React.createElement(TagRow, {
    tags: prompt.tags
  }), /*#__PURE__*/React.createElement("details", null, /*#__PURE__*/React.createElement("summary", null, "プロンプト本文"), /*#__PURE__*/React.createElement("p", {
    className: "prompt-text"
  }, prompt.prompt))), /*#__PURE__*/React.createElement("div", {
    className: "actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "primary",
    onClick: () => onCopy(prompt.prompt, prompt.id)
  }, "コピー"), extra));
}
function PromptModal({
  item,
  onClose,
  onSave
}) {
  const [draft, setDraft] = React.useState({
    ...item,
    tagInput: tagText(item.tags)
  });
  const setCoverImages = coverImages => setDraft({
    ...draft,
    coverImages,
    imageUrl: coverImages[0] || ""
  });
  return /*#__PURE__*/React.createElement(Modal, {
    title: item.id ? "プロンプトを編集" : "プロンプトを追加",
    onClose: onClose
  }, /*#__PURE__*/React.createElement(FormGrid, null, /*#__PURE__*/React.createElement("input", {
    value: draft.title,
    onChange: e => setDraft({
      ...draft,
      title: e.target.value
    }),
    placeholder: "タイトル"
  }), /*#__PURE__*/React.createElement("select", {
    value: draft.category,
    onChange: e => setDraft({
      ...draft,
      category: e.target.value
    })
  }, categories.map(cat => /*#__PURE__*/React.createElement("option", {
    key: cat
  }, cat))), /*#__PURE__*/React.createElement("textarea", {
    value: draft.description,
    onChange: e => setDraft({
      ...draft,
      description: e.target.value
    }),
    placeholder: "説明"
  }), /*#__PURE__*/React.createElement("textarea", {
    className: "tall",
    value: draft.prompt,
    onChange: e => setDraft({
      ...draft,
      prompt: e.target.value
    }),
    placeholder: "プロンプト本文"
  }), /*#__PURE__*/React.createElement("textarea", {
    value: draft.note,
    onChange: e => setDraft({
      ...draft,
      note: e.target.value
    }),
    placeholder: "メモ"
  }), /*#__PURE__*/React.createElement("input", {
    value: draft.tagInput,
    onChange: e => setDraft({
      ...draft,
      tagInput: e.target.value
    }),
    placeholder: "タグ（カンマ区切り）"
  }), /*#__PURE__*/React.createElement(CoverImageUploader, {
    item: draft,
    category: "prompt",
    onChange: setCoverImages
  }), /*#__PURE__*/React.createElement("label", {
    className: "check"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: draft.favorite,
    onChange: e => setDraft({
      ...draft,
      favorite: e.target.checked
    })
  }), " お気に入り")), /*#__PURE__*/React.createElement(ModalActions, {
    onClose: onClose,
    onSave: () => onSave({
      ...draft,
      tags: splitTags(draft.tagInput)
    })
  }));
}
function MjModal({
  item,
  onClose,
  onSave
}) {
  const [draft, setDraft] = React.useState({
    ...item
  });
  const set = (key, value) => setDraft({
    ...draft,
    [key]: value
  });
  return /*#__PURE__*/React.createElement(Modal, {
    title: item.id ? "ミッドジャーニー設定を編集" : "ミッドジャーニー設定を追加",
    onClose: onClose
  }, /*#__PURE__*/React.createElement(FormGrid, null, /*#__PURE__*/React.createElement("input", {
    value: draft.title,
    onChange: e => set("title", e.target.value),
    placeholder: "タイトル"
  }), /*#__PURE__*/React.createElement("textarea", {
    value: draft.description,
    onChange: e => set("description", e.target.value),
    placeholder: "説明"
  }), /*#__PURE__*/React.createElement("div", {
    className: "inline-fields"
  }, /*#__PURE__*/React.createElement("input", {
    value: draft.ar,
    onChange: e => set("ar", e.target.value),
    placeholder: "--ar 1:1"
  }), /*#__PURE__*/React.createElement("input", {
    value: draft.stylize,
    onChange: e => set("stylize", e.target.value),
    placeholder: "--stylize"
  }), /*#__PURE__*/React.createElement("input", {
    value: draft.chaos,
    onChange: e => set("chaos", e.target.value),
    placeholder: "--chaos"
  })), /*#__PURE__*/React.createElement("div", {
    className: "inline-fields"
  }, /*#__PURE__*/React.createElement("input", {
    value: draft.profile,
    onChange: e => set("profile", e.target.value),
    placeholder: "--profile"
  }), /*#__PURE__*/React.createElement("input", {
    value: draft.seed,
    onChange: e => set("seed", e.target.value),
    placeholder: "--seed"
  }), /*#__PURE__*/React.createElement("label", {
    className: "check"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: draft.raw,
    onChange: e => set("raw", e.target.checked)
  }), " --raw")), /*#__PURE__*/React.createElement("input", {
    value: draft.extra,
    onChange: e => set("extra", e.target.value),
    placeholder: "その他自由入力、ベース文など"
  }), /*#__PURE__*/React.createElement("textarea", {
    value: draft.note,
    onChange: e => set("note", e.target.value),
    placeholder: "メモ"
  }), /*#__PURE__*/React.createElement("code", null, mjCommand(draft))), /*#__PURE__*/React.createElement(ModalActions, {
    onClose: onClose,
    onSave: () => onSave(draft)
  }));
}
function ProjectModal({
  item,
  prompts,
  settings,
  onClose,
  onSave
}) {
  const [draft, setDraft] = React.useState({
    ...item,
    tagInput: tagText(item.tags)
  });
  const promptChoices = [...prompts].sort((a, b) => Number(Boolean(b.favorite)) - Number(Boolean(a.favorite)));
  const mjChoices = [...settings].sort((a, b) => String(b.createdAt || "").localeCompare(String(a.createdAt || "")));
  const toggle = (key, id) => {
    const exists = draft[key].includes(id);
    setDraft({
      ...draft,
      [key]: exists ? draft[key].filter(item => item !== id) : [...draft[key], id]
    });
  };
  return /*#__PURE__*/React.createElement(Modal, {
    title: item.id ? "プロジェクトを編集" : "プロジェクトを追加",
    onClose: onClose
  }, /*#__PURE__*/React.createElement(FormGrid, {
    className: "project-edit-form"
  }, /*#__PURE__*/React.createElement(ProjectField, {
    label: "プロジェクト名"
  }, /*#__PURE__*/React.createElement("input", {
    value: draft.name,
    onChange: e => setDraft({
      ...draft,
      name: e.target.value
    }),
    placeholder: "例：Christmas Sticker Set"
  })), /*#__PURE__*/React.createElement(ProjectField, {
    label: "概要"
  }, /*#__PURE__*/React.createElement("textarea", {
    value: draft.description,
    onChange: e => setDraft({
      ...draft,
      description: e.target.value
    }),
    placeholder: "制作する素材セットの内容を書きます"
  })), /*#__PURE__*/React.createElement(ProjectField, {
    label: "目標・ゴール"
  }, /*#__PURE__*/React.createElement("textarea", {
    value: draft.note,
    onChange: e => setDraft({
      ...draft,
      note: e.target.value
    }),
    placeholder: "点数、販売開始日、やることなど"
  })), /*#__PURE__*/React.createElement(ProjectField, {
    label: "タグ"
  }, /*#__PURE__*/React.createElement("input", {
    value: draft.tagInput,
    onChange: e => setDraft({
      ...draft,
      tagInput: e.target.value
    }),
    placeholder: "季節商品, ステッカー, Etsy"
  })), /*#__PURE__*/React.createElement(ProjectField, {
    label: "達成予定日"
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: draft.dueDate || "",
    onChange: e => setDraft({
      ...draft,
      dueDate: e.target.value
    })
  })), /*#__PURE__*/React.createElement("label", {
    className: "check project-remind-check"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: Boolean(draft.remindOnHome),
    onChange: e => setDraft({
      ...draft,
      remindOnHome: e.target.checked
    })
  }), "ホーム画面でリマインドする"), /*#__PURE__*/React.createElement(SelectList, {
    title: "関連プロンプト",
    description: "お気に入りを優先して10件表示します。もっと探すときは検索できます。",
    items: promptChoices,
    selected: draft.promptIds,
    getLabel: choice => choice.title || "無題のプロンプト",
    getText: choice => `${choice.title} ${choice.description} ${choice.prompt} ${choice.note} ${(choice.tags || []).join(" ")}`,
    onToggle: id => toggle("promptIds", id)
  }), /*#__PURE__*/React.createElement(SelectList, {
    title: "関連Midjourney設定",
    description: "保存日の新しいものを優先して10件表示します。",
    items: mjChoices,
    selected: draft.mjIds,
    getLabel: choice => choice.title || promptTitleFromText(choice.prompt || choice.fullPrompt || choice.basePrompt || choice.extra || ""),
    getText: choice => `${choice.title || ""} ${choice.prompt || choice.fullPrompt || choice.basePrompt || ""} ${choice.parameters || choice.extra || ""} ${choice.memo || choice.note || ""}`,
    onToggle: id => toggle("mjIds", id)
  })), /*#__PURE__*/React.createElement(ModalActions, {
    onClose: onClose,
    onSave: () => onSave({
      ...draft,
      tags: splitTags(draft.tagInput)
    })
  }));
}
function ProjectField({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "project-field"
  }, /*#__PURE__*/React.createElement("span", null, label), children);
}
function SelectList({
  title,
  description,
  items,
  selected,
  getLabel,
  getText,
  onToggle
}) {
  const [query, setQuery] = React.useState("");
  const [expanded, setExpanded] = React.useState(false);
  const filtered = items.filter(item => lowerIncludes(getText(item), query));
  const shown = expanded || query ? filtered : filtered.slice(0, 10);
  return /*#__PURE__*/React.createElement("div", {
    className: "select-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "select-list-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, title), description && /*#__PURE__*/React.createElement("small", null, description))), /*#__PURE__*/React.createElement("input", {
    className: "select-search",
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: `${title}を検索...`
  }), items.length ? shown.map(item => /*#__PURE__*/React.createElement("label", {
    key: item.id,
    className: "check select-row"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: selected.includes(item.id),
    onChange: () => onToggle(item.id)
  }), " ", getLabel(item))) : /*#__PURE__*/React.createElement("small", null, "先に項目を追加してください。"), items.length > 10 && !expanded && !query && /*#__PURE__*/React.createElement("button", {
    className: "ghost more-button",
    type: "button",
    onClick: () => setExpanded(true)
  }, "もっと見る"), items.length > 0 && !shown.length && /*#__PURE__*/React.createElement("small", null, "一致する項目がありません。"));
}
function mjCommand(item) {
  if (item.prompt) return item.prompt;
  if (item.fullPrompt) return item.fullPrompt;
  const parsed = parseMidjourneyPrompt(mjCommandLegacy(item));
  return combinePrompt(item.basePrompt || parsed.basePrompt || item.extra || "", item.extractedParams?.length ? item.extractedParams : parsed.params);
}
function PageHead({
  title,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("h2", null, title), action);
}
function PageBackButton({
  label = "前のページに戻る",
  onClick,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: `page-back-button ${className}`.trim(),
    onClick: onClick
  }, "← ", label);
}
function SectionTitle({
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "section-title"
  }, /*#__PURE__*/React.createElement("h2", null, title));
}
function Filters({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "filters"
  }, children);
}
function TagRow({
  tags
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tags"
  }, tags.map(tag => /*#__PURE__*/React.createElement("span", {
    key: tag
  }, "#", tag)));
}
function Empty({
  text
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, text);
}
function FormGrid({
  children,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `form-grid ${className}`.trim()
  }, children);
}
function Modal({
  title,
  children,
  onClose,
  hideClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop",
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-head"
  }, /*#__PURE__*/React.createElement("h2", null, title), !hideClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose
  }, "閉じる")), children));
}
function ModalActions({
  onClose,
  onSave
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-actions"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose
  }, "キャンセル"), /*#__PURE__*/React.createElement("button", {
    className: "primary",
    onClick: onSave
  }, "保存する"));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));