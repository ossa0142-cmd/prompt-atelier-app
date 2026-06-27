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
};

type MyPrompt = LibraryPrompt & {
  note: string;
  favorite: boolean;
};

type MjSetting = {
  id: string;
  title: string;
  description: string;
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
};

type Screen = "home" | "library" | "prompts" | "mj" | "projects";

const categories: Category[] = [
  "ステッカーモックアップ",
  "招待状モックアップ",
  "ポストカードモックアップ",
  "グリーティングカードモックアップ",
  "Etsyサムネイル",
  "アートプリントモックアップ",
  "アクリルキーホルダーモックアップ",
];

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
  },
];

const blankPrompt = (): MyPrompt => ({
  id: "",
  title: "",
  category: "ステッカーモックアップ",
  description: "",
  prompt: "",
  note: "",
  tags: [],
  imageUrl: "",
  favorite: false,
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
});

const uid = () => `${Date.now()}-${Math.random().toString(16).slice(2)}`;
const splitTags = (value: string) => value.split(",").map((tag) => tag.trim()).filter(Boolean);
const tagText = (tags: string[]) => tags.join(", ");
const lowerIncludes = (source: string, query: string) => source.toLowerCase().includes(query.toLowerCase());

function useStoredState<T>(key: string, fallback: T) {
  const [value, setValue] = React.useState<T>(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : fallback;
    } catch {
      return fallback;
    }
  });
  React.useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [key, value]);
  return [value, setValue] as const;
}

function App() {
  const [screen, setScreen] = React.useState<Screen>("home");
  const [myPrompts, setMyPrompts] = useStoredState<MyPrompt[]>("prompt-atelier-prompts-ja-v2", samplePrompts);
  const [mjSettings, setMjSettings] = useStoredState<MjSetting[]>("prompt-atelier-mj-ja-v2", sampleMj);
  const [projects, setProjects] = useStoredState<Project[]>("prompt-atelier-projects-ja-v2", sampleProjects);
  const [recentIds, setRecentIds] = useStoredState<string[]>("prompt-atelier-recent-ja-v2", ["my-1", "lib-sticker-1"]);
  const [toast, setToast] = React.useState("");

  const allPrompts = [...myPrompts, ...libraryPrompts];
  const recentPrompts = recentIds.map((id) => allPrompts.find((p) => p.id === id)).filter(Boolean).slice(0, 4) as LibraryPrompt[];
  const favorites = myPrompts.filter((p) => p.favorite).slice(0, 4);

  const copyText = async (text: string, id?: string) => {
    await navigator.clipboard.writeText(text);
    if (id) setRecentIds((ids) => [id, ...ids.filter((item) => item !== id)].slice(0, 8));
    setToast("コピーしました");
    window.setTimeout(() => setToast(""), 1600);
  };

  return (
    <div>
      <header className="app-header">
        <button className="brand" onClick={() => setScreen("home")} aria-label="ホームへ">
          <span className="brand-mark">PA</span>
          <span>
            <strong>Prompt Atelier</strong>
            <small>デジタル素材クリエイター向け</small>
          </span>
        </button>
        <nav>
          {[
            ["home", "ホーム"],
            ["library", "ライブラリ"],
            ["prompts", "マイプロンプト"],
            ["mj", "ミッドジャーニー設定"],
            ["projects", "プロジェクト"],
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
      </main>
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

function Home({ setScreen, recent, favorites, projects, myPrompts, mjSettings, copyText }: any) {
  const [homeQuery, setHomeQuery] = React.useState("");
  const entries = [
    ["library", "モックアップライブラリ", "販売画像に使える定番プロンプト", "mockup"],
    ["prompts", "プロンプト帳", "自分だけのプロンプトを保存", "notebook"],
    ["mj", "MJ設定", "Midjourneyパラメータ管理", "magic"],
    ["projects", "プロジェクト", "素材セットごとにまとめる", "folder"],
  ];
  const dashboardItems = [
    { screen: "library", title: "モックアップライブラリ", count: Math.max(libraryPrompts.length, 128), icon: "mockup" },
    { screen: "prompts", title: "プロンプト帳", count: Math.max(myPrompts.length, 42), icon: "notebook" },
    { screen: "mj", title: "MJ設定", count: Math.max(mjSettings.length, 18), icon: "magic" },
    { screen: "projects", title: "プロジェクト", count: Math.max(projects.length, 7), icon: "folder" },
  ];
  const searchable = [...myPrompts, ...projects].filter((item: any) => {
    const text = `${item.title || item.name} ${item.description || ""} ${item.note || ""} ${(item.tags || []).join(" ")}`;
    return homeQuery && lowerIncludes(text, homeQuery);
  }).slice(0, 3);
  const continueItems = [
    ...projects.slice(0, 2).map((project: Project) => ({ type: "プロジェクト", title: project.name, note: project.description, tags: project.tags, screen: "projects" })),
    ...myPrompts.slice(0, 2).map((prompt: MyPrompt) => ({ type: "プロンプト", title: prompt.title, note: prompt.note || prompt.description, tags: prompt.tags, screen: "prompts" })),
  ].slice(0, 3);
  return (
    <section className="page home-page">
      <div className="home-hero">
        <span className="hero-decoration hero-star-one">✦</span>
        <span className="hero-decoration hero-star-two">✧</span>
        <span className="hero-decoration hero-dot-one"></span>
        <span className="hero-decoration hero-paper-one"></span>
        <div className="dashboard-panel">
          <span className="soft-label">今日の制作状況</span>
          <div className="dashboard-head">
            <h1>制作ダッシュボード</h1>
            <p>作品づくりに必要な素材と設定を、ひと目で確認できます。</p>
          </div>
          <div className="dashboard-grid">
            {dashboardItems.map((item) => (
              <button className="stat-card" key={item.screen} onClick={() => setScreen(item.screen as Screen)}>
                <span className="stat-icon"><FeatureIcon name={item.icon} /></span>
                <span className="stat-title">{item.title}</span>
                <strong>{item.count}<small>件</small></strong>
              </button>
            ))}
          </div>
        </div>
        <div className="quick-action-card">
          <span className="quick-label">すぐ作る</span>
          <h2>クイックアクション</h2>
          <p>思いついたアイデアを、すぐアトリエに保存できます。</p>
          <div className="quick-actions">
            <button className="primary round-button" onClick={() => setScreen("prompts")}>＋ 新しいプロンプト</button>
            <button className="round-button pale-button" onClick={() => setScreen("projects")}>＋ 新しいプロジェクト</button>
            <button className="round-button pale-button" onClick={() => setScreen("mj")}>＋ MJ設定を追加</button>
          </div>
        </div>
      </div>

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

      <div className="home-feature-grid">
        {entries.map(([id, title, body, icon]) => (
          <button className="home-feature-card" key={id} onClick={() => setScreen(id)}>
            <span className="feature-corner-spark">✦</span>
            <span className="feature-washi"></span>
            <span className="feature-icon"><FeatureIcon name={icon as string} /></span>
            <span className="feature-title">{title}</span>
            <small>{body}</small>
          </button>
        ))}
      </div>

      <SectionTitle title="続きから作業" />
      <div className="continue-grid">
        {continueItems.length ? continueItems.map((item: any) => (
          <button className="continue-card" key={`${item.type}-${item.title}`} onClick={() => setScreen(item.screen)}>
            <span>{item.type}</span>
            <strong>{item.title}</strong>
            <small>{item.note || "次の作品づくりをここから再開できます。"}</small>
          </button>
        )) : (
          <button className="continue-card" onClick={() => setScreen("projects")}>
            <span>サンプル</span>
            <strong>季節の素材セット</strong>
            <small>プロジェクトを作ると、ここからすぐ再開できます。</small>
          </button>
        )}
      </div>

      <SectionTitle title="お気に入り" />
      <div className="home-prompt-row">
        {favorites.length ? favorites.map((prompt: MyPrompt) => (
          <HomePromptCard key={prompt.id} prompt={prompt} onCopy={copyText} favorite />
        )) : <Empty text="お気に入りにしたプロンプトがここに表示されます。" />}
      </div>

      <SectionTitle title="最近使ったプロンプト" />
      <div className="home-prompt-row recent-row">
        {recent.length ? recent.map((prompt: LibraryPrompt) => (
          <HomePromptCard key={prompt.id} prompt={prompt} onCopy={copyText} />
        )) : <Empty text="まだコピー履歴がありません。" />}
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
  const [translationPrompt, setTranslationPrompt] = React.useState<LibraryBoardPrompt | null>(null);
  const [memoPrompt, setMemoPrompt] = React.useState<LibraryBoardPrompt | null>(null);
  const [inlineEdit, setInlineEdit] = React.useState<{ id: string; field: string } | null>(null);
  const [boardCategories, setBoardCategories] = useStoredState<MockupCategory[]>("prompt-atelier-mockup-categories-v2", defaultMockupCategories);
  const [boardPrompts, setBoardPrompts] = useStoredState<LibraryBoardPrompt[]>("prompt-atelier-library-prompts-v5", defaultLibraryBoardPrompts);
  const currentCategory = selectedCategory ? boardCategories.find((category) => category.id === selectedCategory.id) || selectedCategory : null;
  const filteredCategories = boardCategories.filter((item) => lowerIncludes(`${item.title} ${item.description}`, query));
  const filteredPrompts = boardPrompts.filter((item) => {
    const haystack = `${item.title} ${item.description} ${item.prompt}`;
    return item.categoryId === currentCategory?.id && lowerIncludes(haystack, query);
  });
  const saveCategory = (item: MockupCategory) => {
    const next = { ...item, id: item.id || uid(), coverImage: item.coverImage || art("カテゴリ", "#f8e6e1", "#dce7d7") };
    setBoardCategories((items: MockupCategory[]) => item.id ? items.map((category) => category.id === item.id ? next : category) : [next, ...items]);
    setEditingCategory(null);
  };
  const savePrompt = (item: LibraryBoardPrompt) => {
    const category = boardCategories.find((category) => category.id === item.categoryId) || currentCategory || boardCategories[0];
    const next = {
      ...item,
      id: item.id || uid(),
      categoryId: item.categoryId || category.id,
      category: "ステッカーモックアップ" as Category,
      imageUrl: item.imageUrl || "",
      japaneseTranslation: item.japaneseTranslation || item.prompt,
      memo: item.memo || "",
      tags: item.tags || [],
    };
    setBoardPrompts((items: LibraryBoardPrompt[]) => item.id ? items.map((prompt) => prompt.id === item.id ? next : prompt) : [next, ...items]);
    setEditingPrompt(null);
  };
  const duplicateCategory = (item: MockupCategory) => {
    setBoardCategories((items: MockupCategory[]) => [{ ...item, id: uid(), title: `${item.title} コピー` }, ...items]);
  };
  const duplicatePrompt = (item: LibraryBoardPrompt) => {
    setBoardPrompts((items: LibraryBoardPrompt[]) => [{ ...item, id: uid(), title: `${item.title} コピー` }, ...items]);
  };
  const updatePrompt = (id: string, patch: Partial<LibraryBoardPrompt>) => {
    setBoardPrompts((items: LibraryBoardPrompt[]) => items.map((prompt) => prompt.id === id ? { ...prompt, ...patch } : prompt));
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
            <button onClick={() => { setSelectedCategory(null); setQuery(""); }}>← ライブラリへ戻る</button>
            <img className="library-detail-cover" src={currentCategory.coverImage} alt="" />
            <div>
              <h2>{currentCategory.title}</h2>
              <p>{currentCategory.description}</p>
            </div>
            <button className="primary" onClick={() => setEditingPrompt({
              id: "",
              title: "",
              category: "ステッカーモックアップ",
              categoryId: currentCategory.id,
              description: "",
              prompt: "",
              memo: "",
              tags: [],
              imageUrl: "",
            })}>＋ このカテゴリにプロンプトを追加</button>
          </div>
          <Filters>
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={`${currentCategory.title}内を検索...`} />
          </Filters>
          <div className="library-prompt-grid">
            {filteredPrompts.map((prompt) => (
              <article className="library-prompt-card" key={prompt.id}>
                <PromptMenuButton
                  onDuplicate={() => duplicatePrompt(prompt)}
                  onClearImage={() => updatePrompt(prompt.id, { imageUrl: "" })}
                  onDelete={() => setBoardPrompts((items: LibraryBoardPrompt[]) => items.filter((item) => item.id !== prompt.id))}
                />
                <EditableThumbnail
                  prompt={prompt}
                  isEditing={inlineEdit?.id === prompt.id && inlineEdit.field === "imageUrl"}
                  onEdit={() => setInlineEdit({ id: prompt.id, field: "imageUrl" })}
                  onCancel={() => setInlineEdit(null)}
                  onSave={(imageUrl) => { updatePrompt(prompt.id, { imageUrl }); setInlineEdit(null); }}
                />
                <div className="prompt-card-content">
                  <InlineEditable
                    className="inline-title"
                    value={prompt.title}
                    placeholder="タイトル"
                    isEditing={inlineEdit?.id === prompt.id && inlineEdit.field === "title"}
                    onEdit={() => setInlineEdit({ id: prompt.id, field: "title" })}
                    onSave={(title) => { updatePrompt(prompt.id, { title }); setInlineEdit(null); }}
                  />
                  <InlineEditable
                    className="inline-prompt"
                    multiline
                    value={prompt.prompt}
                    placeholder="プロンプト本文"
                    isEditing={inlineEdit?.id === prompt.id && inlineEdit.field === "prompt"}
                    onEdit={() => setInlineEdit({ id: prompt.id, field: "prompt" })}
                    onSave={(promptText) => { updatePrompt(prompt.id, { prompt: promptText }); setInlineEdit(null); }}
                  />
                  <div className="prompt-card-actions">
                    <button className="primary" onClick={(event) => { event.stopPropagation(); copyText(prompt.prompt, prompt.id); }}>📋 プロンプトをコピー</button>
                    <button onClick={(event) => { event.stopPropagation(); setTranslationPrompt(prompt); }}>和訳</button>
                    <button onClick={(event) => { event.stopPropagation(); setMemoPrompt(prompt); }}>メモ</button>
                  </div>
                </div>
              </article>
            ))}
            {!filteredPrompts.length && <Empty text="このカテゴリにはまだプロンプトがありません。" />}
          </div>
        </>
      )}
      {editingCategory && <MockupCategoryModal item={editingCategory} onClose={() => setEditingCategory(null)} onSave={saveCategory} />}
      {editingPrompt && <LibraryPromptModal item={editingPrompt} categories={boardCategories} onClose={() => setEditingPrompt(null)} onSave={savePrompt} />}
      {translationPrompt && <TranslationModal prompt={translationPrompt} onClose={() => setTranslationPrompt(null)} copyText={copyText} />}
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
  if (isEditing) {
    return (
      <div className="thumbnail-editor" onClick={(event) => event.stopPropagation()}>
        <input value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="サムネイル画像URL" autoFocus />
        <label className="mini-upload">
          画像を選ぶ
          <input type="file" accept="image/*" onChange={(event) => readImage(event, (imageUrl) => setDraft(imageUrl))} />
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

function readImage(event: any, onLoad: (value: string) => void) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => onLoad(String(reader.result || ""));
  reader.readAsDataURL(file);
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
  const tags = Array.from(new Set(prompts.flatMap((p: MyPrompt) => p.tags))).sort();
  const filtered = prompts.filter((item: MyPrompt) => {
    const haystack = `${item.title} ${item.category} ${item.description} ${item.prompt} ${item.note} ${item.tags.join(" ")}`;
    return lowerIncludes(haystack, query) && (tag === "すべて" || item.tags.includes(tag)) && (!favoritesOnly || item.favorite);
  });
  const save = (item: MyPrompt) => {
    const next = { ...item, id: item.id || uid(), imageUrl: item.imageUrl || art("プロンプト", "#f5eadc", "#e7e7df") };
    setPrompts((items: MyPrompt[]) => item.id ? items.map((p) => p.id === item.id ? next : p) : [next, ...items]);
    setEditing(null);
  };
  return (
    <section className="page">
      <PageHead title="マイプロンプト帳" action={<button className="primary" onClick={() => setEditing(blankPrompt())}>追加する</button>} />
      <Filters>
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="検索" />
        <select value={tag} onChange={(e) => setTag(e.target.value)}>
          <option>すべて</option>
          {tags.map((item: string) => <option key={item}>{item}</option>)}
        </select>
        <label className="check"><input type="checkbox" checked={favoritesOnly} onChange={(e) => setFavoritesOnly(e.target.checked)} /> お気に入りのみ</label>
      </Filters>
      <div className="card-grid">
        {filtered.map((prompt: MyPrompt) => (
          <PromptCard
            key={prompt.id}
            prompt={prompt}
            onCopy={copyText}
            extra={
              <>
                <button onClick={() => setPrompts((items: MyPrompt[]) => items.map((p) => p.id === prompt.id ? { ...p, favorite: !p.favorite } : p))}>
                  {prompt.favorite ? "お気に入り済み" : "お気に入り"}
                </button>
                <button onClick={() => setEditing(prompt)}>編集</button>
                <button className="danger" onClick={() => setPrompts((items: MyPrompt[]) => items.filter((p) => p.id !== prompt.id))}>削除</button>
              </>
            }
          />
        ))}
      </div>
      {editing && <PromptModal item={editing} onClose={() => setEditing(null)} onSave={save} />}
    </section>
  );
}

function Midjourney({ settings, setSettings, copyText }: any) {
  const [editing, setEditing] = React.useState<MjSetting | null>(null);
  const [query, setQuery] = React.useState("");
  const filtered = settings.filter((item: MjSetting) => lowerIncludes(`${item.title} ${item.description} ${item.note} ${mjCommand(item)}`, query));
  const save = (item: MjSetting) => {
    const next = { ...item, id: item.id || uid() };
    setSettings((items: MjSetting[]) => item.id ? items.map((p) => p.id === item.id ? next : p) : [next, ...items]);
    setEditing(null);
  };
  return (
    <section className="page">
      <PageHead title="ミッドジャーニー設定管理" action={<button className="primary" onClick={() => setEditing(blankMj())}>追加する</button>} />
      <Filters><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="設定名やパラメータで検索" /></Filters>
      <div className="list">
        {filtered.map((item: MjSetting) => (
          <article className="panel" key={item.id}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <code>{mjCommand(item)}</code>
              {item.note && <p className="note">{item.note}</p>}
            </div>
            <div className="actions">
              <button className="primary" onClick={() => copyText(mjCommand(item))}>コピー</button>
              <button onClick={() => setEditing(item)}>編集</button>
              <button className="danger" onClick={() => setSettings((items: MjSetting[]) => items.filter((p) => p.id !== item.id))}>削除</button>
            </div>
          </article>
        ))}
      </div>
      {editing && <MjModal item={editing} onClose={() => setEditing(null)} onSave={save} />}
    </section>
  );
}

function Projects({ projects, setProjects, prompts, settings, copyText }: any) {
  const [editing, setEditing] = React.useState<Project | null>(null);
  const [query, setQuery] = React.useState("");
  const filtered = projects.filter((item: Project) => lowerIncludes(`${item.name} ${item.description} ${item.note} ${item.tags.join(" ")}`, query));
  const save = (item: Project) => {
    const next = { ...item, id: item.id || uid() };
    setProjects((items: Project[]) => item.id ? items.map((p) => p.id === item.id ? next : p) : [next, ...items]);
    setEditing(null);
  };
  return (
    <section className="page">
      <PageHead title="プロジェクト管理" action={<button className="primary" onClick={() => setEditing(blankProject())}>追加する</button>} />
      <Filters><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="プロジェクト名、タグ、メモで検索" /></Filters>
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
  const toggle = (key: "promptIds" | "mjIds", id: string) => {
    const exists = draft[key].includes(id);
    setDraft({ ...draft, [key]: exists ? draft[key].filter((item: string) => item !== id) : [...draft[key], id] });
  };
  return (
    <Modal title={item.id ? "プロジェクトを編集" : "プロジェクトを追加"} onClose={onClose}>
      <FormGrid>
        <input value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} placeholder="プロジェクト名" />
        <textarea value={draft.description} onChange={(e) => setDraft({ ...draft, description: e.target.value })} placeholder="説明" />
        <textarea value={draft.note} onChange={(e) => setDraft({ ...draft, note: e.target.value })} placeholder="メモ" />
        <input value={draft.tagInput} onChange={(e) => setDraft({ ...draft, tagInput: e.target.value })} placeholder="タグ（カンマ区切り）" />
        <SelectList title="関連プロンプト" items={prompts} selected={draft.promptIds} labelKey="title" onToggle={(id: string) => toggle("promptIds", id)} />
        <SelectList title="関連ミッドジャーニー設定" items={settings} selected={draft.mjIds} labelKey="title" onToggle={(id: string) => toggle("mjIds", id)} />
      </FormGrid>
      <ModalActions onClose={onClose} onSave={() => onSave({ ...draft, tags: splitTags(draft.tagInput) })} />
    </Modal>
  );
}

function SelectList({ title, items, selected, labelKey, onToggle }: any) {
  return (
    <div className="select-list">
      <strong>{title}</strong>
      {items.length ? items.map((item: any) => (
        <label key={item.id} className="check"><input type="checkbox" checked={selected.includes(item.id)} onChange={() => onToggle(item.id)} /> {item[labelKey]}</label>
      )) : <small>先に項目を追加してください。</small>}
    </div>
  );
}

function mjCommand(item: MjSetting) {
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

function FormGrid({ children }: any) {
  return <div className="form-grid">{children}</div>;
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
