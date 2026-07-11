# Prompt Atelier gallery4 + video0 seed-only upload

このフォルダは、良い状態のアプリ本体を上書きしないための最小アップロード用です。

含まれるもの:
- src/data/sampleSeed.json
- public/samples/gallery/ の画像4枚

含まれないもの:
- src/App.tsx
- src/App.compiled.js
- index.html
- styles.css
- service-worker.js
- package.json

反映内容:
- ギャラリー初期サンプルを4枚にする
- 動画プロンプト帳の初期サンプルを0件にする
- 動画プロンプトストックの初期サンプルを0件にする

注意:
既存ブラウザのlocalStorageに古いデータが残っている場合、初期サンプルは再投入されません。確認はシークレットモード、または新規ユーザー状態で行ってください。
