---
tags: ["파일 시스템"]
---

# 파일 시스템 (File System)

<Tags />

## \_\_dirname

### \_\_dirname이란?

Node.js는 모듈 관계가 있는 경우가 많아 현재 파일의 경로나 파일명을 알아야 하는 경우가 많다. Node.js는 내장 변수로 `__filename`, `__dirname` 이라는 키워드로 경로에 대한 정보를 제공한다. 그 중 `__dirname`은 directory와 name의 합성어로 현재 실행하는 파일의 절대경로이다.

```js
// file명을 포함한 절대 경로
console.log(__filename); // D:/practice/test.js

// file 명을 제외한 절대 경로
console.log(__dirname); // D:/practice
```

### ESM (ES Modules)에서 \_\_dirname 사용하기

`__dirname`은 CommonJS 모듈 시스템에서만 정의되며, ECMASCript 모듈(ESM) 시스템에서는 기본적으로 지원되지 않는다.

따라서 ESM을 사용하는 경우에는 `import.meta.url`을 사용하여 현재 모듈의 URL을 가져오고, 이를 기반으로 제공된 경로를 사용하여야 한다.

```js
// index.mjs
console.log(new URL(import.meta.url));

/*
URL {
  href: 'file:///D:/practice/test.mjs',
  origin: 'null',
  protocol: 'file:',
  username: '',
  password: '',
  host: '',
  hostname: '',
  port: '',
  pathname: '/D:/practice/test.mjs',
  search: '',
  searchParams: URLSearchParams {},
  hash: ''
} 
 */
```

:::tip Info
`import.meta` 속성은 모듈의 URL과 같은 모듈에 대한 정보를 포함한다.
:::

<br>

<code-group>
<code-block title="CommonJS">

```js
const fs = require("fs/promises");
const path = require("path");

const filePath = path.join(__dirname, "someFile.txt");
fs.readFile(filePath, "utf8").then(console.log);
```

</code-block>

<code-block title="ES Modules">

```js
import fs from "node:fs/promises";

const fileURL = new URL("./someFile.txt", import.meta.url);
fs.readFile(fileURL, "utf8").then(console.log);
```

</code-block>
</code-group>
