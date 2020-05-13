# template-element
テンプレート機能

<template> タグ内に書かれたHTMLコードは、一切評価されない


出力されたHTML
```html

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="./index.js"></script>
  <title>template-element</title>
</head>

<body>
  <main>
    <div id="contents">
      HTMLの初期文書が完全に読み込まれ解釈された時点でjsが動き、挿入されます


    </div>
    <template id="textTemplate">
      <h1>テキストテスト</h1>
    </template>
  </main>
</body>

</html>
```

JavaScriptでDOM読み込み後に挿入しているため、HTMLとして出力されない