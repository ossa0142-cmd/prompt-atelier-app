Prompt Atelier v45

原因:
- 前回のギャラリー/プロンプト帳ファイル別修正は、PromptAtelier_CURRENT本体ではなく一時作業フォルダ側に入っていました。
- そのため、CURRENT本体のGalleryPageには「一覧」「ファイル別」「＋新しいファイル」が存在していませんでした。
- さらに広い置換を使うと、MJ設定カード内の画像アップロード部分やモックアップ詳細へ誤挿入され、MJ設定ページが消えたように見える原因になります。

今回の修正:
- PromptAtelier_CURRENT本体を基準に修正
- プロンプト帳に「一覧」「ファイル別」「＋ 新しいファイル」を追加
- ギャラリーにも同じ「一覧」「ファイル別」「＋ 新しいファイル」を追加
- MJ設定ページの遷移とコンポーネントが残っていることを確認
- 誤挿入がMJ設定内にないことを確認
- App.compiled.jsを再生成
- index.htmlの読み込み番号を v45 に更新

アップロードするもの:
- index.html
- src/App.tsx
- src/App.compiled.js
- src/styles.css

触っていないもの:
- public/samples 画像
- sampleSeed
- ホーム設定
- カスタマイズ設定
- モックアップライブラリの中身
- MJ設定の保存キー
