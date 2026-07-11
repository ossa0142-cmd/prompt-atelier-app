Prompt Atelier 安全アップロード用

絶対にフォルダごと上書きしないでください。

1) GitHubで src/data/ を開く
   - 01_sampleSeed_json_only/sampleSeed.json だけをアップロード

2) GitHubで public/samples/gallery/ を開く
   - 02_gallery_images_only/ の画像4枚だけをアップロード

この中に入れていないもの:
- App.tsx
- App.compiled.js
- styles.css
- index.html
- package.json
- service-worker.js

変更されたデータキー:
- galleryItems
- videoPromptCards
- videoPromptStocks

変更前: {"galleryItems":11,"videoPromptCards":1,"videoPromptStocks":0}
変更後: {"galleryItems":15,"videoPromptCards":0,"videoPromptStocks":0}
追加した画像: 4件
