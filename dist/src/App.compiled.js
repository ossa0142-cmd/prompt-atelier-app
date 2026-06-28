const categories = ["ステッカーモックアップ", "招待状モックアップ", "ポストカードモックアップ", "グリーティングカードモックアップ", "Etsyサムネイル", "アートプリントモックアップ", "アクリルキーホルダーモックアップ"];
const homeSections = [{
  id: "dashboard",
  label: "制作ダッシュボード"
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
  id: "continue",
  label: "続きから作業"
}, {
  id: "favorites",
  label: "お気に入り"
}, {
  id: "recent",
  label: "最近使ったプロンプト"
}];
const homeFeatures = [{
  id: "library",
  label: "モックアップライブラリ"
}, {
  id: "prompts",
  label: "プロンプト帳"
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
const defaultHomeSettings = {
  themeId: "cute",
  bannerImageUrl: "",
  bannerVisible: true,
  bannerSize: "medium",
  visible: {
    library: true,
    prompts: true,
    mj: true,
    projects: true,
    favorites: true,
    recent: true,
    continue: true,
    dashboard: true,
    quickActions: true,
    search: true,
    featureCards: true
  },
  order: ["dashboard", "quickActions", "search", "featureCards", "continue", "favorites", "recent"]
};
const normalizeHomeSettings = settings => ({
  ...defaultHomeSettings,
  ...settings,
  visible: {
    ...defaultHomeSettings.visible,
    ...(settings?.visible || {})
  },
  order: [...(settings?.order || defaultHomeSettings.order).filter(id => homeSections.some(section => section.id === id)), ...defaultHomeSettings.order.filter(id => !(settings?.order || []).includes(id))]
});
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
  tags: ["季節商品", "ハロウィン"]
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
  tags: []
});
const uid = () => `${Date.now()}-${Math.random().toString(16).slice(2)}`;
const splitTags = value => value.split(",").map(tag => tag.trim()).filter(Boolean);
const tagText = tags => tags.join(", ");
const lowerIncludes = (source, query) => source.toLowerCase().includes(query.toLowerCase());
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
function App() {
  const [screen, setScreen] = React.useState("home");
  const [myPrompts, setMyPrompts] = useStoredState("prompt-atelier-prompts-ja-v2", samplePrompts);
  const [mjSettings, setMjSettings] = useStoredState("promptAtelierMidjourneySettings", sampleMj);
  const [projects, setProjects] = useStoredState("prompt-atelier-projects-ja-v2", sampleProjects);
  const [recentIds, setRecentIds] = useStoredState("prompt-atelier-recent-ja-v2", ["my-1", "lib-sticker-1"]);
  const [rawHomeSettings, setRawHomeSettings] = useStoredState("promptAtelierHomeSettings", defaultHomeSettings);
  const [workTools, setWorkTools] = useStoredState("promptAtelierWorkTools", defaultWorkTools);
  const [toast, setToast] = React.useState("");
  const homeSettings = normalizeHomeSettings(rawHomeSettings);
  const activeTheme = homeThemes.find(theme => theme.id === homeSettings.themeId) || homeThemes[0];
  const appStyle = {
    "--ink": activeTheme.vars.ink,
    "--muted": activeTheme.vars.muted,
    "--paper": activeTheme.vars.paper,
    "--ivory": activeTheme.vars.ivory,
    "--shell": activeTheme.vars.shell,
    "--sage": activeTheme.vars.sage,
    "--sand": activeTheme.vars.sand,
    "--line": activeTheme.vars.line,
    "--accent": activeTheme.vars.accent,
    "--sage-deep": activeTheme.vars.accent
  };
  const allPrompts = [...myPrompts, ...libraryPrompts];
  const recentPrompts = recentIds.map(id => allPrompts.find(p => p.id === id)).filter(Boolean).slice(0, 4);
  const favorites = myPrompts.filter(p => p.favorite).slice(0, 4);
  const copyText = async (text, id) => {
    await navigator.clipboard.writeText(text);
    if (id) setRecentIds(ids => [id, ...ids.filter(item => item !== id)].slice(0, 8));
    setToast("コピーしました");
    window.setTimeout(() => setToast(""), 1600);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "app-shell",
    style: appStyle
  }, /*#__PURE__*/React.createElement("header", {
    className: "app-header"
  }, /*#__PURE__*/React.createElement("button", {
    className: "brand",
    onClick: () => setScreen("home"),
    "aria-label": "ホームへ"
  }, /*#__PURE__*/React.createElement("span", {
    className: "brand-mark"
  }, "PA"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Prompt Atelier"), /*#__PURE__*/React.createElement("small", null, "デジタル素材クリエイター向け"))), /*#__PURE__*/React.createElement("nav", null, [["home", "ホーム"], ["library", "ライブラリ"], ["prompts", "マイプロンプト"], ["mj", "ミッドジャーニー設定"], ["projects", "プロジェクト"], ["customize", "カスタマイズ"]].map(([id, label]) => /*#__PURE__*/React.createElement("button", {
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
    workTools: workTools
  }), screen === "customize" && /*#__PURE__*/React.createElement(HomeCustomize, {
    settings: homeSettings,
    setSettings: setRawHomeSettings,
    setScreen: setScreen,
    workTools: workTools,
    setWorkTools: setWorkTools
  }), screen === "library" && /*#__PURE__*/React.createElement(Library, {
    copyText: copyText
  }), screen === "prompts" && /*#__PURE__*/React.createElement(PromptBook, {
    prompts: myPrompts,
    setPrompts: setMyPrompts,
    copyText: copyText
  }), screen === "mj" && /*#__PURE__*/React.createElement(Midjourney, {
    settings: mjSettings,
    setSettings: setMjSettings,
    copyText: copyText
  }), screen === "projects" && /*#__PURE__*/React.createElement(Projects, {
    projects: projects,
    setProjects: setProjects,
    prompts: myPrompts,
    settings: mjSettings,
    copyText: copyText
  })), toast && /*#__PURE__*/React.createElement("div", {
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
  workTools
}) {
  const [homeQuery, setHomeQuery] = React.useState("");
  const isVisible = id => settings.visible[id] !== false;
  const entries = [["library", "モックアップライブラリ", "販売画像に使える定番プロンプト", "mockup"], ["prompts", "プロンプト帳", "自分だけのプロンプトを保存", "notebook"], ["mj", "MJ設定", "Midjourneyパラメータ管理", "magic"], ["projects", "プロジェクト", "素材セットごとにまとめる", "folder"]];
  const dashboardItems = [{
    screen: "library",
    title: "モックアップライブラリ",
    count: Math.max(libraryPrompts.length, 128),
    icon: "mockup"
  }, {
    screen: "prompts",
    title: "プロンプト帳",
    count: Math.max(myPrompts.length, 42),
    icon: "notebook"
  }, {
    screen: "mj",
    title: "MJ設定",
    count: Math.max(mjSettings.length, 18),
    icon: "magic"
  }, {
    screen: "projects",
    title: "プロジェクト",
    count: Math.max(projects.length, 7),
    icon: "folder"
  }];
  const searchable = [...myPrompts, ...projects].filter(item => {
    const text = `${item.title || item.name} ${item.description || ""} ${item.note || ""} ${(item.tags || []).join(" ")}`;
    return homeQuery && lowerIncludes(text, homeQuery);
  }).slice(0, 3);
  const continueItems = [...projects.slice(0, 2).map(project => ({
    type: "プロジェクト",
    title: project.name,
    note: project.description,
    tags: project.tags,
    screen: "projects"
  })), ...myPrompts.slice(0, 2).map(prompt => ({
    type: "プロンプト",
    title: prompt.title,
    note: prompt.note || prompt.description,
    tags: prompt.tags,
    screen: "prompts"
  }))].slice(0, 3);
  const normalizedTools = workTools.slice(0, 5);
  const renderSection = sectionId => {
    if (!isVisible(sectionId)) return null;
    if (sectionId === "dashboard") {
      return /*#__PURE__*/React.createElement("section", {
        className: "dashboard-panel home-module",
        key: sectionId
      }, /*#__PURE__*/React.createElement("span", {
        className: "soft-label"
      }, "今日の制作状況"), /*#__PURE__*/React.createElement("div", {
        className: "dashboard-head"
      }, /*#__PURE__*/React.createElement("h1", null, "制作ダッシュボード"), /*#__PURE__*/React.createElement("p", null, "作品づくりに必要な素材と設定を、ひと目で確認できます。")), /*#__PURE__*/React.createElement("div", {
        className: "dashboard-grid"
      }, dashboardItems.map(item => /*#__PURE__*/React.createElement("button", {
        className: "stat-card",
        key: item.screen,
        onClick: () => setScreen(item.screen)
      }, /*#__PURE__*/React.createElement("span", {
        className: "stat-icon"
      }, /*#__PURE__*/React.createElement(FeatureIcon, {
        name: item.icon
      })), /*#__PURE__*/React.createElement("span", {
        className: "stat-title"
      }, item.title), /*#__PURE__*/React.createElement("strong", null, item.count, /*#__PURE__*/React.createElement("small", null, "件"))))));
    }
    if (sectionId === "quickActions") {
      return /*#__PURE__*/React.createElement("section", {
        className: "work-tools-card home-module",
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
        src: tool.iconImage,
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
    if (sectionId === "continue") {
      return /*#__PURE__*/React.createElement("section", {
        key: sectionId
      }, /*#__PURE__*/React.createElement(SectionTitle, {
        title: "続きから作業"
      }), /*#__PURE__*/React.createElement("div", {
        className: "continue-grid"
      }, continueItems.length ? continueItems.map(item => /*#__PURE__*/React.createElement("button", {
        className: "continue-card",
        key: `${item.type}-${item.title}`,
        onClick: () => setScreen(item.screen)
      }, /*#__PURE__*/React.createElement("span", null, item.type), /*#__PURE__*/React.createElement("strong", null, item.title), /*#__PURE__*/React.createElement("small", null, item.note || "次の作品づくりをここから再開できます。"))) : /*#__PURE__*/React.createElement("button", {
        className: "continue-card",
        onClick: () => setScreen("projects")
      }, /*#__PURE__*/React.createElement("span", null, "サンプル"), /*#__PURE__*/React.createElement("strong", null, "季節の素材セット"), /*#__PURE__*/React.createElement("small", null, "プロジェクトを作ると、ここからすぐ再開できます。"))));
    }
    if (sectionId === "favorites") {
      return /*#__PURE__*/React.createElement("section", {
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
    return /*#__PURE__*/React.createElement("section", {
      key: sectionId
    }, /*#__PURE__*/React.createElement(SectionTitle, {
      title: "最近使ったプロンプト"
    }), /*#__PURE__*/React.createElement("div", {
      className: "home-prompt-row recent-row"
    }, recent.length ? recent.map(prompt => /*#__PURE__*/React.createElement(HomePromptCard, {
      key: prompt.id,
      prompt: prompt,
      onCopy: copyText
    })) : /*#__PURE__*/React.createElement(Empty, {
      text: "まだコピー履歴がありません。"
    })));
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "page home-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-topbar"
  }, /*#__PURE__*/React.createElement("span", null, "Prompt Atelier Home"), /*#__PURE__*/React.createElement("button", {
    className: "primary",
    onClick: () => setScreen("customize")
  }, "ホームをカスタマイズ")), settings.bannerVisible && /*#__PURE__*/React.createElement("div", {
    className: `home-banner ${settings.bannerSize}`,
    style: settings.bannerImageUrl ? {
      backgroundImage: `url(${settings.bannerImageUrl})`
    } : undefined
  }, !settings.bannerImageUrl && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "✦"), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("b", null))), settings.order.map(sectionId => renderSection(sectionId)));
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
    }))
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
  setWorkTools
}) {
  const [editingTool, setEditingTool] = React.useState(null);
  const updateSettings = patch => setSettings(normalizeHomeSettings({
    ...settings,
    ...patch
  }));
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
  const normalizedTools = workTools.slice(0, 5);
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
    setWorkTools(items => tool.id ? items.map(item => item.id === tool.id ? next : item).slice(0, 5) : [...items, next].slice(0, 5));
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
  return /*#__PURE__*/React.createElement("section", {
    className: "page customize-page"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "ホームカスタマイズ",
    action: /*#__PURE__*/React.createElement("button", {
      className: "primary",
      onClick: () => setScreen("home")
    }, "ホームへ戻る")
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
  }, /*#__PURE__*/React.createElement("h3", null, "バナー"), /*#__PURE__*/React.createElement("p", null, "ホーム上部に表示する横長画像を設定できます。"), /*#__PURE__*/React.createElement("label", {
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
  }, "画像を削除"))), /*#__PURE__*/React.createElement("section", {
    className: "customize-card"
  }, /*#__PURE__*/React.createElement("h3", null, "作業ツール"), /*#__PURE__*/React.createElement("p", null, "ホームに表示する外部サービスのショートカットを編集できます。最大5件まで登録できます。"), /*#__PURE__*/React.createElement("div", {
    className: "work-tool-edit-list"
  }, normalizedTools.map((tool, index) => /*#__PURE__*/React.createElement("article", {
    className: "work-tool-edit-row",
    key: tool.id
  }, /*#__PURE__*/React.createElement("span", {
    className: "work-tool-edit-icon"
  }, tool.iconImage ? /*#__PURE__*/React.createElement("img", {
    src: tool.iconImage,
    alt: ""
  }) : /*#__PURE__*/React.createElement("b", null, tool.iconText || tool.name.slice(0, 2))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, tool.name), /*#__PURE__*/React.createElement("small", null, tool.url)), /*#__PURE__*/React.createElement("div", {
    className: "work-tool-edit-actions"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setEditingTool(tool)
  }, "編集"), /*#__PURE__*/React.createElement("button", {
    onClick: () => moveWorkTool(tool.id, -1),
    disabled: index === 0
  }, "上へ"), /*#__PURE__*/React.createElement("button", {
    onClick: () => moveWorkTool(tool.id, 1),
    disabled: index === normalizedTools.length - 1
  }, "下へ"), /*#__PURE__*/React.createElement("button", {
    className: "danger",
    onClick: () => deleteWorkTool(tool.id)
  }, "削除"))))), normalizedTools.length < 5 && /*#__PURE__*/React.createElement("button", {
    className: "add-work-tool-button",
    onClick: () => setEditingTool({
      id: "",
      name: "",
      url: "",
      iconText: "",
      iconImage: "",
      memo: ""
    })
  }, "＋ 作業ツールを追加"), editingTool && /*#__PURE__*/React.createElement(WorkToolEditor, {
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
    className: "customize-card danger-zone"
  }, /*#__PURE__*/React.createElement("h3", null, "初期化"), /*#__PURE__*/React.createElement("p", null, "テーマ、バナー、表示項目、並び順を初期設定に戻します。"), /*#__PURE__*/React.createElement("button", {
    className: "danger",
    onClick: reset
  }, "初期設定に戻す"))), /*#__PURE__*/React.createElement("aside", {
    className: "customize-preview"
  }, /*#__PURE__*/React.createElement("span", null, "プレビュー"), /*#__PURE__*/React.createElement("div", {
    className: "preview-shell",
    style: {
      "--ink": activeTheme.vars.ink,
      "--paper": activeTheme.vars.paper,
      "--ivory": activeTheme.vars.ivory,
      "--shell": activeTheme.vars.shell,
      "--sage": activeTheme.vars.sage,
      "--line": activeTheme.vars.line,
      "--accent": activeTheme.vars.accent
    }
  }, settings.bannerVisible && /*#__PURE__*/React.createElement("div", {
    className: `preview-banner ${settings.bannerSize}`,
    style: settings.bannerImageUrl ? {
      backgroundImage: `url(${settings.bannerImageUrl})`
    } : undefined
  }), /*#__PURE__*/React.createElement("div", {
    className: "preview-card large"
  }), /*#__PURE__*/React.createElement("div", {
    className: "preview-grid"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null))))));
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
    src: prompt.imageUrl || art("プロンプト", "#f5eadc", "#e7e7df"),
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
  copyText
}) {
  const [query, setQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [editingCategory, setEditingCategory] = React.useState(null);
  const [editingPrompt, setEditingPrompt] = React.useState(null);
  const [translationPrompt, setTranslationPrompt] = React.useState(null);
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
    japaneseTranslation: "",
    isTextStock: textOnly
  });
  const saveCategory = item => {
    const next = {
      ...item,
      id: item.id || uid(),
      coverImage: item.coverImage || art("カテゴリ", "#f8e6e1", "#dce7d7")
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
      imageUrl: item.imageUrl || "",
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
    action: /*#__PURE__*/React.createElement("button", {
      className: "primary",
      onClick: () => setEditingCategory({
        id: "",
        title: "",
        description: "",
        coverImage: ""
      })
    }, "＋ カテゴリを追加")
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
  }, /*#__PURE__*/React.createElement("img", {
    src: category.coverImage,
    alt: ""
  }), /*#__PURE__*/React.createElement("span", null, category.title), /*#__PURE__*/React.createElement("small", null, category.description)))))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "library-detail-head"
  }, /*#__PURE__*/React.createElement("img", {
    className: "library-detail-cover",
    src: currentCategory.coverImage,
    alt: ""
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
    showTranslation: () => setTranslationPrompt(prompt),
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
    showTranslation: () => prompt && setTranslationPrompt(prompt),
    showMemo: () => prompt && setMemoPrompt(prompt)
  }))), canAddTextStock && textStockCount >= stockFrameCount && /*#__PURE__*/React.createElement("button", {
    className: "add-stock-button",
    onClick: addTextStockFrame
  }, "＋ プロンプトを追加"), !canAddTextStock && /*#__PURE__*/React.createElement("p", {
    className: "limit-message"
  }, "保存上限（100件）に達しました")), /*#__PURE__*/React.createElement("button", {
    className: "back-to-library",
    onClick: () => {
      setSelectedCategory(null);
      setQuery("");
    }
  }, "← ライブラリへ戻る")), editingCategory && /*#__PURE__*/React.createElement(MockupCategoryModal, {
    item: editingCategory,
    onClose: () => setEditingCategory(null),
    onSave: saveCategory
  }), editingPrompt && /*#__PURE__*/React.createElement(LibraryPromptModal, {
    item: editingPrompt,
    categories: boardCategories,
    onClose: () => setEditingPrompt(null),
    onSave: savePrompt
  }), translationPrompt && /*#__PURE__*/React.createElement(TranslationModal, {
    prompt: translationPrompt,
    onClose: () => setTranslationPrompt(null),
    copyText: copyText
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
function LibraryImagePromptCard({
  prompt,
  inlineEdit,
  setInlineEdit,
  updatePrompt,
  duplicatePrompt,
  deletePrompt,
  copyText,
  showTranslation,
  showMemo
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "library-prompt-card"
  }, /*#__PURE__*/React.createElement(PromptMenuButton, {
    onDuplicate: () => duplicatePrompt(prompt),
    onClearImage: () => updatePrompt(prompt.id, {
      imageUrl: ""
    }),
    onDelete: deletePrompt
  }), /*#__PURE__*/React.createElement(EditableThumbnail, {
    prompt: prompt,
    isEditing: inlineEdit?.id === prompt.id && inlineEdit.field === "imageUrl",
    onEdit: () => setInlineEdit({
      id: prompt.id,
      field: "imageUrl"
    }),
    onCancel: () => setInlineEdit(null),
    onSave: imageUrl => {
      updatePrompt(prompt.id, {
        imageUrl
      });
      setInlineEdit(null);
    }
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
      showTranslation();
    }
  }, "和訳"), /*#__PURE__*/React.createElement("button", {
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
  showTranslation,
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
      showTranslation();
    },
    disabled: !isSaved
  }, "和訳"), /*#__PURE__*/React.createElement("button", {
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
    src: imageUrl,
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
  if (isEditing) {
    return /*#__PURE__*/React.createElement("div", {
      className: "thumbnail-editor",
      onClick: event => event.stopPropagation()
    }, /*#__PURE__*/React.createElement("input", {
      value: draft,
      onChange: event => setDraft(event.target.value),
      placeholder: "サムネイル画像URL",
      autoFocus: true
    }), /*#__PURE__*/React.createElement("label", {
      className: "mini-upload"
    }, "画像を選ぶ", /*#__PURE__*/React.createElement("input", {
      type: "file",
      accept: "image/*",
      onChange: event => readImage(event, imageUrl => setDraft(imageUrl))
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
function readImage(event, onLoad) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => onLoad(String(reader.result || ""));
  reader.readAsDataURL(file);
}
function MockupCategoryModal({
  item,
  onClose,
  onSave
}) {
  const [draft, setDraft] = React.useState({
    ...item
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
  }), /*#__PURE__*/React.createElement("input", {
    value: draft.coverImage,
    onChange: e => setDraft({
      ...draft,
      coverImage: e.target.value
    }),
    placeholder: "カバー画像URL"
  }), /*#__PURE__*/React.createElement("label", {
    className: "upload-box"
  }, /*#__PURE__*/React.createElement("span", null, "画像をアップロード"), /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: "image/*",
    onChange: e => readImage(e, coverImage => setDraft({
      ...draft,
      coverImage
    }))
  })), draft.coverImage && /*#__PURE__*/React.createElement("img", {
    className: "modal-preview-image",
    src: draft.coverImage,
    alt: ""
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
  }), /*#__PURE__*/React.createElement("input", {
    value: draft.imageUrl,
    onChange: e => setDraft({
      ...draft,
      imageUrl: e.target.value
    }),
    placeholder: "サムネイル画像URL"
  }), /*#__PURE__*/React.createElement("label", {
    className: "upload-box"
  }, /*#__PURE__*/React.createElement("span", null, "画像をアップロード"), /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: "image/*",
    onChange: e => readImage(e, imageUrl => setDraft({
      ...draft,
      imageUrl
    }))
  })), draft.imageUrl && /*#__PURE__*/React.createElement("img", {
    className: "modal-preview-image",
    src: draft.imageUrl,
    alt: ""
  })), /*#__PURE__*/React.createElement(ModalActions, {
    onClose: onClose,
    onSave: () => onSave(draft)
  }));
}
function PromptBook({
  prompts,
  setPrompts,
  copyText
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
      imageUrl: item.isTextStock ? "" : item.imageUrl || "",
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
    action: /*#__PURE__*/React.createElement("span", {
      className: "prompt-count-pill"
    }, "画像 ", imagePromptCount, " / 20・ストック ", textStockCount, " / 100")
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
  }));
}
function Midjourney({
  settings,
  setSettings,
  copyText
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
    action: /*#__PURE__*/React.createElement("button", {
      className: "primary",
      onClick: save,
      disabled: !canSave
    }, "完成プロンプトを保存")
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
    key: `${item.cardId}-${item.index}-${item.image}`,
    onClick: () => jumpToCard(item.cardId)
  }, /*#__PURE__*/React.createElement("img", {
    src: item.image,
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
function isSupportedImageFile(file) {
  return ["image/jpeg", "image/png", "image/webp"].includes(file.type) || /\.(jpe?g|png|webp)$/i.test(file.name);
}
function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
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
    const nextImages = await Promise.all(files.map(fileToDataUrl));
    nextImages.forEach((image, index) => console.log("[MJ画像追加] base64 prefix:", image.slice(0, 30), "file:", files[index]?.name, "cardId:", item.id));
    const updatedImages = [...images, ...nextImages].slice(0, 5);
    console.log("[MJ画像追加] updated images length:", updatedImages.length, "cardId:", item.id);
    setImageMessage("");
    onUpdate({
      images: updatedImages,
      imageUrl: updatedImages[0] || ""
    });
  };
  const removeImage = index => {
    const updatedImages = images.filter((_, imageIndex) => imageIndex !== index);
    onUpdate({
      images: updatedImages,
      imageUrl: updatedImages[0] || ""
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
    }
  }, images.length ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "mj-card-image image-only-button"
  }, /*#__PURE__*/React.createElement("img", {
    src: images[slideIndex] || images[0],
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
    key: `${image}-${index}`,
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
    src: images[index],
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
  const images = Array.isArray(item.images) ? item.images.slice(0, 5) : item.imageUrl ? [item.imageUrl] : [];
  return {
    id: item.id || uid(),
    title: item.title || "無題のMJ設定",
    description: item.description || item.memo || item.note || "",
    images,
    imageUrl: images[0] || item.imageUrl || "",
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
function Projects({
  projects,
  setProjects,
  prompts,
  settings,
  copyText
}) {
  const [editing, setEditing] = React.useState(null);
  const [query, setQuery] = React.useState("");
  const filtered = projects.filter(item => lowerIncludes(`${item.name} ${item.description} ${item.note} ${item.tags.join(" ")}`, query));
  const save = item => {
    const next = {
      ...item,
      id: item.id || uid()
    };
    setProjects(items => item.id ? items.map(p => p.id === item.id ? next : p) : [next, ...items]);
    setEditing(null);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "page"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "プロジェクト管理",
    action: /*#__PURE__*/React.createElement("button", {
      className: "primary",
      onClick: () => setEditing(blankProject())
    }, "追加する")
  }), /*#__PURE__*/React.createElement(Filters, null, /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "プロジェクト名、タグ、メモで検索"
  })), /*#__PURE__*/React.createElement("div", {
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
    }), project.note && /*#__PURE__*/React.createElement("p", {
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
    src: prompt.imageUrl || art("プロンプト", "#f5eadc", "#e7e7df"),
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
  }), /*#__PURE__*/React.createElement("input", {
    value: draft.imageUrl,
    onChange: e => setDraft({
      ...draft,
      imageUrl: e.target.value
    }),
    placeholder: "サンプル画像URL"
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
  }, /*#__PURE__*/React.createElement(FormGrid, null, /*#__PURE__*/React.createElement("input", {
    value: draft.name,
    onChange: e => setDraft({
      ...draft,
      name: e.target.value
    }),
    placeholder: "プロジェクト名"
  }), /*#__PURE__*/React.createElement("textarea", {
    value: draft.description,
    onChange: e => setDraft({
      ...draft,
      description: e.target.value
    }),
    placeholder: "説明"
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
  }), /*#__PURE__*/React.createElement(SelectList, {
    title: "関連プロンプト",
    items: prompts,
    selected: draft.promptIds,
    labelKey: "title",
    onToggle: id => toggle("promptIds", id)
  }), /*#__PURE__*/React.createElement(SelectList, {
    title: "関連ミッドジャーニー設定",
    items: settings,
    selected: draft.mjIds,
    labelKey: "title",
    onToggle: id => toggle("mjIds", id)
  })), /*#__PURE__*/React.createElement(ModalActions, {
    onClose: onClose,
    onSave: () => onSave({
      ...draft,
      tags: splitTags(draft.tagInput)
    })
  }));
}
function SelectList({
  title,
  items,
  selected,
  labelKey,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "select-list"
  }, /*#__PURE__*/React.createElement("strong", null, title), items.length ? items.map(item => /*#__PURE__*/React.createElement("label", {
    key: item.id,
    className: "check"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: selected.includes(item.id),
    onChange: () => onToggle(item.id)
  }), " ", item[labelKey])) : /*#__PURE__*/React.createElement("small", null, "先に項目を追加してください。"));
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
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
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