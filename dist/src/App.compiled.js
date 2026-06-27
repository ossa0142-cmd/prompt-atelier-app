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
  copyText
}) {
  const [homeQuery, setHomeQuery] = React.useState("");
  const entries = [["library", "モックアップライブラリ", "販売画像に使える定番プロンプト", "本"], ["prompts", "プロンプト帳", "自分だけのプロンプトを保存", "帖"], ["mj", "MJ設定", "Midjourneyパラメータ管理", "MJ"], ["projects", "プロジェクト", "素材セットごとにまとめる", "箱"]];
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
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "soft-label"
  }, "今日のアトリエ"), /*#__PURE__*/React.createElement("h1", null, "こんにちは！", /*#__PURE__*/React.createElement("br", null), "今日は何を作りますか？"), /*#__PURE__*/React.createElement("p", null, "モックアッププロンプトやMJ設定を、作品づくりに合わせて整理できます。")), /*#__PURE__*/React.createElement("div", {
    className: "hero-action-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero-spark"
  }, "＋"), /*#__PURE__*/React.createElement("p", null, "思いついた言葉を、すぐ作品づくりの材料に。"), /*#__PURE__*/React.createElement("button", {
    className: "primary round-button",
    onClick: () => setScreen("prompts")
  }, "＋ プロンプトを追加"))), /*#__PURE__*/React.createElement("div", {
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
    className: "feature-icon"
  }, icon), /*#__PURE__*/React.createElement("span", {
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
  const [category, setCategory] = React.useState("すべて");
  const filtered = libraryPrompts.filter(item => {
    const categoryOk = category === "すべて" || item.category === category;
    const haystack = `${item.title} ${item.description} ${item.prompt} ${item.tags.join(" ")}`;
    return categoryOk && lowerIncludes(haystack, query);
  });
  return /*#__PURE__*/React.createElement("section", {
    className: "page"
  }, /*#__PURE__*/React.createElement(PageHead, {
    title: "モックアッププロンプトライブラリ",
    action: null
  }), /*#__PURE__*/React.createElement(Filters, null, /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "タイトル、タグ、本文で検索"
  }), /*#__PURE__*/React.createElement("select", {
    value: category,
    onChange: e => setCategory(e.target.value)
  }, /*#__PURE__*/React.createElement("option", null, "すべて"), categories.map(cat => /*#__PURE__*/React.createElement("option", {
    key: cat
  }, cat)))), /*#__PURE__*/React.createElement("div", {
    className: "card-grid"
  }, filtered.map(prompt => /*#__PURE__*/React.createElement(PromptCard, {
    key: prompt.id,
    prompt: prompt,
    onCopy: copyText
  }))));
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