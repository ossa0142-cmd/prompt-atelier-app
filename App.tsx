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

function Home({ setScreen, recent, favorites, projects, myPrompts, copyText }: any) {
  const [homeQuery, setHomeQuery] = React.useState("");
  const entries = [
    ["library", "モックアップライブラリ", "販売画像に使える定番プロンプト", "本"],
    ["prompts", "プロンプト帳", "自分だけのプロンプトを保存", "帖"],
    ["mj", "MJ設定", "Midjourneyパラメータ管理", "MJ"],
    ["projects", "プロジェクト", "素材セットごとにまとめる", "箱"],
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
        <div className="hero-copy">
          <span className="soft-label">今日のアトリエ</span>
          <h1>こんにちは！<br />今日は何を作りますか？</h1>
          <p>モックアッププロンプトやMJ設定を、作品づくりに合わせて整理できます。</p>
        </div>
        <div className="hero-action-card">
          <span className="hero-spark">＋</span>
          <p>思いついた言葉を、すぐ作品づくりの材料に。</p>
          <button className="primary round-button" onClick={() => setScreen("prompts")}>＋ プロンプトを追加</button>
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
            <span className="feature-icon">{icon}</span>
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
  const [category, setCategory] = React.useState("すべて");
  const filtered = libraryPrompts.filter((item) => {
    const categoryOk = category === "すべて" || item.category === category;
    const haystack = `${item.title} ${item.description} ${item.prompt} ${item.tags.join(" ")}`;
    return categoryOk && lowerIncludes(haystack, query);
  });
  return (
    <section className="page">
      <PageHead title="モックアッププロンプトライブラリ" action={null} />
      <Filters>
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="タイトル、タグ、本文で検索" />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>すべて</option>
          {categories.map((cat) => <option key={cat}>{cat}</option>)}
        </select>
      </Filters>
      <div className="card-grid">
        {filtered.map((prompt) => <PromptCard key={prompt.id} prompt={prompt} onCopy={copyText} />)}
      </div>
    </section>
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

function Modal({ title, children, onClose }: any) {
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal">
        <div className="modal-head">
          <h2>{title}</h2>
          <button onClick={onClose}>閉じる</button>
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
