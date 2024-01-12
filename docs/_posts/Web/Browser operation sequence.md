---
tags: ["브라우저", "브라우저 동작 순서"]
---

# 브라우저의 동작 순서

<Tags />

## 브라우저의 핵심 기능

사용자가 접속하고자 하는 웹 페이지를 서버에 요청(Request)하고, 서버의 응답(Response)을 받아 브라우저에 표시하는 것이다.

## 브라우저 동작 순서

![브라우저 동작 순서 이미지](https://private-user-images.githubusercontent.com/51310674/295059675-9b3b8df1-38da-4e08-a8bb-fbac1a1138a8.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDUwMTgyMTEsIm5iZiI6MTcwNTAxNzkxMSwicGF0aCI6Ii81MTMxMDY3NC8yOTUwNTk2NzUtOWIzYjhkZjEtMzhkYS00ZTA4LWE4YmItZmJhYzFhMTEzOGE4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTEyVDAwMDUxMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPThiZDA3NWYzMzRmZGY3ZjkyM2ZmZGZhNDJlZWMwZWMxOGJmM2ZkY2Y2Y2FjNWY2NTM4ZWFmYTE2NzYwZDFmOWImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.miHm7IzwSaZgzGVXLM0Q9ejhuwILUT2cP8zI3aG3X0A)

### Construction

1. 사용자가 브라우저를 통해 웹 사이트에 접속하면 브라우저는 DNS를 통해 웹 서버의 IP 주소를 파악한다.
2. 브라우저는 파악한 IP 주소에 있는 서버와 3 Way-Handshake를 진행한다.
3. 브라우저가 서버에 서버의 데이터를 요청하는 HTTP Request 하면, 서버로부터 데이터를 받는 HTTP Response가 이뤄진다.
4. 서버로 부터 받은 데이터로 브라우저의 렌더링 엔진은 HTML 파싱(Parsing)을 하여 DOM Tree를 생성한다.
5. 중간에 스타일 태그가 있다면, DOM 생성을 멈추고 CSSOM Tree를 생성한다.
6. 중간에 스크립트 태그가 있다면, 자바스크립트 엔진에게 권한을 넘겨 HTML 파싱이 중단되며 AST이 생성 된 후, 나머지 HTML Parsing 작업을 진행한다.
7. 파싱 작업이 완료되면 DOM Tree + CSSOM Tree = Render Tree를 생성한다.

:::tip 3 Way-Handshake
TCP/IP 프로토콜을 이용해서 통신을 하는 응용 프로그램이 데이터를 전송하기 전에 정확한 전송을 보장하기 위해 상대방 컴퓨터와 사전에 세션을 수립하는 과정

- Client -> Server : TCP SYN(Synchronize sequence numbers, 시퀀스 번호 동기화)
- Server -> Client : TCP SYN ACK
- Client -> Server : TCP ACK(Acknowledgment, 승인)

양쪽 모두 데이터를 전송할 준비가 되었다는 것을 보장하고, 실제로 데이터 전달이 시작되기 전에 상대 측이 준비되었다는 것을 알 수 있도록 한다.
:::

:::tip Parsing
웹 표준화 기구인 W3C의 명세에 따라 HTML과 CSS를 해석하는 것
:::

:::tip AST(Abstract Synctax Tree, 추상 구문 트리)
우리가 작성한 소스코드에서 계층 구조로 된 정보를 추상적인 Tree로 만든 것

- 예제 코드

```js
function consolelog() {
  console.log("hi");
}
```

- AST

```json
{
  "type": "Program",
  "start": 0,
  "end": 36,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 36,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "a"
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 36,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 17,
            "end": 34,
            "expression": {
              "type": "CallExpression",
              "start": 17,
              "end": 33,
              "callee": {
                "type": "MemberExpression",
                "start": 17,
                "end": 28,
                "object": {
                  "type": "Identifier",
                  "start": 17,
                  "end": 24,
                  "name": "console"
                },
                "property": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 28,
                  "name": "log"
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 29,
                  "end": 32,
                  "value": "a",
                  "raw": "\"a\""
                }
              ],
              "optional": false
            }
          }
        ]
      }
    }
  ],
  "sourceType": "module"
}
```

:::

::: warning Info
모든 embedded script 들은 HTML 파싱을 중단시키기 때문에 **Parser-Blocking**이라고 불린다.

하지만 CSS의 경우 파싱을 직접적으로 막지는 않는다. embedded 스타일이나, inline 스타일의 경우 종종 막는 경우가 있다.
embedded 스타일의 종료를 알리는 `</style>`을 만났을 때, DOM 파싱이 멈추고 해당 구간의 embedded 스타일을 파싱하여 CSSOM Tree를 업데이트한다. 그 이후에 파싱이 재개된다.
styleSheet의 경우 embedded, inline 스타일과 다르게 백그라운드에서 완전히 다운로드 받을 수 있어 DOM 파싱을 중단시키지는 않는다.

![CSS가 Render-Blocking일 수 밖에 없는 비교 화면](https://private-user-images.githubusercontent.com/51310674/295072131-3b4239d4-3ca7-4c23-a6ad-8ceb74e47581.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDUwMTgyMTEsIm5iZiI6MTcwNTAxNzkxMSwicGF0aCI6Ii81MTMxMDY3NC8yOTUwNzIxMzEtM2I0MjM5ZDQtM2NhNy00YzIzLWE2YWQtOGNlYjc0ZTQ3NTgxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTEyVDAwMDUxMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTJhN2EzNmYyODQ2ZDA4YTYzOGRmMTE1MjIyY2MzZWM4ZjM2YjhhZGY3OWQ3NDgxZTE2YjE1MzQ1YzA1YzE3Y2YmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.1TbhzAbAoEjdLDD4GdZ3NfKB1SxCU2yfBaJpYcRiWpE)

CSS는 **Render-Blocking** 자원으로 스타일 요소가 읽히는 동안에는 Render Tree 구성이 중지된다. 이는 CSS가 없으면 사용자는 페이지를 상대적으로 사용하기 어렵기 때문에 브라우저는 DOM과 CSSOM을 모두 사용할 수 있을 때까지 렌더링을 차단한다.
:::

### Operation

#### Layout

8. 렌더링 엔진은 Render Tree에 있는 Node를 배치한다.

#### Painting

9. UI 백엔드는 Render Tree에 있는 Node를 돌면서 화면에 UI를 그린다.

#### Composition

10. Render Tree에 있는 Node를 순서대로 구성한다.

### 최종

11. 웹 사용자에게 결과 화면을 출력한다.

## 정리

브라우저는 서버로부터 HTML, CSS, JavaScript, 이미지 파일 등을 응답받는다. HTML, CSS 파일은 렌더링 엔진의 HTML 파서와 CSS 파서에 의해 파싱되어 DOM, CSSOM 트리로 변환되고 렌더 트리로 결합된다. 이렇게 생성된 렌더 트리를 기반으로 브라우저는 웹 페이지를 표시한다.

JavaScript는 렌더링 엔진이 아닌 자바스크립트 엔진이 처리한다. HTML 파서는 `<script>` 태그를 만나면 자바스크립트 코드를 실행하기 위해 DOM 생성 프로세스를 중지하고 자바스크립트 엔진으로 제어 권한을 넘긴다. 제어 권한을 넘겨 받은 자바스크립트 엔진은 script 태그 내의 자바스크립트 코드 또는 script 태그의 src 어트리뷰트에 정의된 자바스크립트 파일을 로드하고 파싱하여 실행한다. 자바스크립트의 실행이 완료되면 다시 HTML 파서로 제어 권한을 넘겨서 브라우저가 중지했던 시점부터 DOM 생성을 재개한다.

이처럼 브라우저는 동기(Synchronous)적으로 HTML, CSS, JavaScript를 처리한다. 이것은 script 태그의 위치에 따라 블로킹이 발생하여 DOM의 생성이 지연될 수 있다는 것을 의미한다. 따라서 script 태그의 위치는 중요한 의미를 갖는다.

:::tip body 요소의 가장 아래에 JavaScript를 위치시키는 게 좋은 이유

- HTML 요소들이 스크립트 로딩 지연으로 인해 렌더링에 지장 받는 일이 발생하지 않아 페이지 로딩 시간이 단축된다.
- DOM이 완성되지 않은 상태에서 자바스크립트가 DOM을 조작하여 발생하는 에러 상황을 방지할 수 있다.
  :::

## Reference

- [https://poiemaweb.com/js-browser](https://poiemaweb.com/js-browser)
- [https://sangmin802.github.io/Study/Think/browser-parser-blocking/#parser-blocking-no-render-blocking-css](https://sangmin802.github.io/Study/Think/browser-parser-blocking/#parser-blocking-no-render-blocking-css)
- [https://web.dev/articles/critical-rendering-path/render-blocking-css?hl=ko](https://web.dev/articles/critical-rendering-path/render-blocking-css?hl=ko)
- [https://www.youtube.com/watch?v=FQHNg9gCWpg](https://www.youtube.com/watch?v=FQHNg9gCWpg)
