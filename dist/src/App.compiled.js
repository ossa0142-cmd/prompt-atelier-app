const categories = ["ステッカーモックアップ", "招待状モックアップ", "ポストカードモックアップ", "グリーティングカードモックアップ", "Etsyサムネイル", "アートプリントモックアップ", "アクリルキーホルダーモックアップ"];
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
const blankPrompt = () => ({
  id: "",
  title: "",
  category: "ステッカーモックアップ",
  description: "",
  prompt: "",
  note: "",
  tags: [],
  imageUrl: "",
  favorite: false
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
  React.useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [key, value]);
  return [value, setValue];
}
function App() {
  const [screen, setScreen] = React.useState("home");
  const [myPrompts, setMyPrompts] = useStoredState("prompt-atelier-prompts-ja-v2", samplePrompts);
  const [mjSettings, setMjSettings] = useStoredState("prompt-atelier-mj-ja-v2", sampleMj);
  const [projects, setProjects] = useStoredState("prompt-atelier-projects-ja-v2", sampleProjects);
  const [recentIds, setRecentIds] = useStoredState("prompt-atelier-recent-ja-v2", ["my-1", "lib-sticker-1"]);
  const [toast, setToast] = React.useState("");
  const allPrompts = [...myPrompts, ...libraryPrompts];
  const recentPrompts = recentIds.map(id => allPrompts.find(p => p.id === id)).filter(Boolean).slice(0, 4);
  const favorites = myPrompts.filter(p => p.favorite).slice(0, 4);
  const copyText = async (text, id) => {
    await navigator.clipboard.writeText(text);
    if (id) setRecentIds(ids => [id, ...ids.filter(item => item !== id)].slice(0, 8));
    setToast("コピーしました");
    window.setTimeout(() => setToast(""), 1600);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", {
    className: "app-header"
  }, /*#__PURE__*/React.createElement("button", {
    className: "brand",
    onClick: () => setScreen("home"),
    "aria-label": "ホームへ"
  }, /*#__PURE__*/React.createElement("span", {
    className: "brand-mark"
  }, "PA"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Prompt Atelier"), /*#__PURE__*/React.createElement("small", null, "デジタル素材クリエイター向け"))), /*#__PURE__*/React.createElement("nav", null, [["home", "ホーム"], ["library", "ライブラリ"], ["prompts", "マイプロンプト"], ["mj", "ミッドジャーニー設定"], ["projects", "プロジェクト"]].map(([id, label]) => /*#__PURE__*/React.createElement("button", {
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
    copyText: copyText
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
  copyText
}) {
  const [homeQuery, setHomeQuery] = React.useState("");
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
  return /*#__PURE__*/React.createElement("section", {
    className: "page home-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-hero"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero-decoration hero-star-one"
  }, "✦"), /*#__PURE__*/React.createElement("span", {
    className: "hero-decoration hero-star-two"
  }, "✧"), /*#__PURE__*/React.createElement("span", {
    className: "hero-decoration hero-dot-one"
  }), /*#__PURE__*/React.createElement("span", {
    className: "hero-decoration hero-paper-one"
  }), /*#__PURE__*/React.createElement("div", {
    className: "dashboard-panel"
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
  }, item.title), /*#__PURE__*/React.createElement("strong", null, item.count, /*#__PURE__*/React.createElement("small", null, "件")))))), /*#__PURE__*/React.createElement("div", {
    className: "quick-action-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "quick-label"
  }, "すぐ作る"), /*#__PURE__*/React.createElement("h2", null, "クイックアクション"), /*#__PURE__*/React.createElement("p", null, "思いついたアイデアを、すぐアトリエに保存できます。"), /*#__PURE__*/React.createElement("div", {
    className: "quick-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "primary round-button",
    onClick: () => setScreen("prompts")
  }, "＋ 新しいプロンプト"), /*#__PURE__*/React.createElement("button", {
    className: "round-button pale-button",
    onClick: () => setScreen("projects")
  }, "＋ 新しいプロジェクト"), /*#__PURE__*/React.createElement("button", {
    className: "round-button pale-button",
    onClick: () => setScreen("mj")
  }, "＋ MJ設定を追加")))), /*#__PURE__*/React.createElement("div", {
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
  }, item.title || item.name)) : /*#__PURE__*/React.createElement("small", null, "一致する項目がありません。")), /*#__PURE__*/React.createElement("div", {
    className: "home-feature-grid"
  }, entries.map(([id, title, body, icon]) => /*#__PURE__*/React.createElement("button", {
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
  }, title), /*#__PURE__*/React.createElement("small", null, body)))), /*#__PURE__*/React.createElement(SectionTitle, {
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
  }, /*#__PURE__*/React.createElement("span", null, "サンプル"), /*#__PURE__*/React.createElement("strong", null, "季節の素材セット"), /*#__PURE__*/React.createElement("small", null, "プロジェクトを作ると、ここからすぐ再開できます。"))), /*#__PURE__*/React.createElement(SectionTitle, {
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
  })), /*#__PURE__*/React.createElement(SectionTitle, {
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
  const [boardCategories, setBoardCategories] = useStoredState("prompt-atelier-mockup-categories-v2", defaultMockupCategories);
  const [boardPrompts, setBoardPrompts] = useStoredState("prompt-atelier-library-prompts-v4", defaultLibraryBoardPrompts);
  const currentCategory = selectedCategory ? boardCategories.find(category => category.id === selectedCategory.id) || selectedCategory : null;
  const filteredCategories = boardCategories.filter(item => lowerIncludes(`${item.title} ${item.description}`, query));
  const filteredPrompts = boardPrompts.filter(item => {
    const haystack = `${item.title} ${item.description} ${item.prompt}`;
    return item.categoryId === currentCategory?.id && lowerIncludes(haystack, query);
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
    const next = {
      ...item,
      id: item.id || uid(),
      categoryId: item.categoryId || category.id,
      category: "ステッカーモックアップ",
      imageUrl: item.imageUrl || "",
      japaneseTranslation: item.japaneseTranslation || item.prompt,
      tags: item.tags || []
    };
    setBoardPrompts(items => item.id ? items.map(prompt => prompt.id === item.id ? next : prompt) : [next, ...items]);
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
    setBoardPrompts(items => [{
      ...item,
      id: uid(),
      title: `${item.title} コピー`
    }, ...items]);
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
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setSelectedCategory(null);
      setQuery("");
    }
  }, "← ライブラリへ戻る"), /*#__PURE__*/React.createElement("img", {
    className: "library-detail-cover",
    src: currentCategory.coverImage,
    alt: ""
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, currentCategory.title), /*#__PURE__*/React.createElement("p", null, currentCategory.description)), /*#__PURE__*/React.createElement("button", {
    className: "primary",
    onClick: () => setEditingPrompt({
      id: "",
      title: "",
      category: "ステッカーモックアップ",
      categoryId: currentCategory.id,
      description: "",
      prompt: "",
      tags: [],
      imageUrl: ""
    })
  }, "＋ このカテゴリにプロンプトを追加")), /*#__PURE__*/React.createElement(Filters, null, /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: `${currentCategory.title}内を検索...`
  })), /*#__PURE__*/React.createElement("div", {
    className: "library-prompt-grid"
  }, filteredPrompts.map(prompt => /*#__PURE__*/React.createElement("article", {
    className: "library-prompt-card",
    key: prompt.id
  }, /*#__PURE__*/React.createElement(MenuButton, {
    onEdit: () => setEditingPrompt(prompt),
    onDuplicate: () => duplicatePrompt(prompt),
    onImage: () => setEditingPrompt(prompt),
    onDelete: () => setBoardPrompts(items => items.filter(item => item.id !== prompt.id))
  }), /*#__PURE__*/React.createElement(PromptThumbnail, {
    imageUrl: prompt.imageUrl
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, prompt.title), /*#__PURE__*/React.createElement("p", null, prompt.description), /*#__PURE__*/React.createElement("div", {
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
      setTranslationPrompt(prompt);
    }
  }, "和訳"))))), !filteredPrompts.length && /*#__PURE__*/React.createElement(Empty, {
    text: "このカテゴリにはまだプロンプトがありません。"
  }))), editingCategory && /*#__PURE__*/React.createElement(MockupCategoryModal, {
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
  }));
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
  const tags = Array.from(new Set(prompts.flatMap(p => p.tags))).sort();
  const filtered = prompts.filter(item => {
    const haystack = `${item.title} ${item.category} ${item.description} ${item.prompt} ${item.note} ${item.tags.join(" ")}`;
    return lowerIncludes(haystack, query) && (tag === "すべて" || item.tags.includes(tag)) && (!favoritesOnly || item.favorite);
  });
  const save = item => {
    const next = {
      ...item,
      id: item.id || uid(),
      imageUrl: item.imageUrl || art("プロンプト", "#f5eadc", "#e7e7df")
    };
    setPrompts(items => item.id ? items.map(p => p.id === item.id ? next : p) : [next, ...items]);
    setEditing(null);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "page"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "マイプロンプト帳",
    action: /*#__PURE__*/React.createElement("button", {
      className: "primary",
      onClick: () => setEditing(blankPrompt())
    }, "追加する")
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
  }), " お気に入りのみ")), /*#__PURE__*/React.createElement("div", {
    className: "card-grid"
  }, filtered.map(prompt => /*#__PURE__*/React.createElement(PromptCard, {
    key: prompt.id,
    prompt: prompt,
    onCopy: copyText,
    extra: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      onClick: () => setPrompts(items => items.map(p => p.id === prompt.id ? {
        ...p,
        favorite: !p.favorite
      } : p))
    }, prompt.favorite ? "お気に入り済み" : "お気に入り"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setEditing(prompt)
    }, "編集"), /*#__PURE__*/React.createElement("button", {
      className: "danger",
      onClick: () => setPrompts(items => items.filter(p => p.id !== prompt.id))
    }, "削除"))
  }))), editing && /*#__PURE__*/React.createElement(PromptModal, {
    item: editing,
    onClose: () => setEditing(null),
    onSave: save
  }));
}
function Midjourney({
  settings,
  setSettings,
  copyText
}) {
  const [editing, setEditing] = React.useState(null);
  const [query, setQuery] = React.useState("");
  const filtered = settings.filter(item => lowerIncludes(`${item.title} ${item.description} ${item.note} ${mjCommand(item)}`, query));
  const save = item => {
    const next = {
      ...item,
      id: item.id || uid()
    };
    setSettings(items => item.id ? items.map(p => p.id === item.id ? next : p) : [next, ...items]);
    setEditing(null);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "page"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "ミッドジャーニー設定管理",
    action: /*#__PURE__*/React.createElement("button", {
      className: "primary",
      onClick: () => setEditing(blankMj())
    }, "追加する")
  }), /*#__PURE__*/React.createElement(Filters, null, /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "設定名やパラメータで検索"
  })), /*#__PURE__*/React.createElement("div", {
    className: "list"
  }, filtered.map(item => /*#__PURE__*/React.createElement("article", {
    className: "panel",
    key: item.id
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, item.title), /*#__PURE__*/React.createElement("p", null, item.description), /*#__PURE__*/React.createElement("code", null, mjCommand(item)), item.note && /*#__PURE__*/React.createElement("p", {
    className: "note"
  }, item.note)), /*#__PURE__*/React.createElement("div", {
    className: "actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "primary",
    onClick: () => copyText(mjCommand(item))
  }, "コピー"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setEditing(item)
  }, "編集"), /*#__PURE__*/React.createElement("button", {
    className: "danger",
    onClick: () => setSettings(items => items.filter(p => p.id !== item.id))
  }, "削除"))))), editing && /*#__PURE__*/React.createElement(MjModal, {
    item: editing,
    onClose: () => setEditing(null),
    onSave: save
  }));
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
  return [item.extra, item.ar && `--ar ${item.ar}`, item.stylize && `--stylize ${item.stylize}`, item.chaos && `--chaos ${item.chaos}`, item.raw && "--raw", item.profile && `--profile ${item.profile}`, item.seed && `--seed ${item.seed}`].filter(Boolean).join(" ");
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
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop",
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-head"
  }, /*#__PURE__*/React.createElement("h2", null, title), /*#__PURE__*/React.createElement("button", {
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