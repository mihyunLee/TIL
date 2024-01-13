---
tags: ["Web 지식", "CSR과 SSR"]
---

# CSR과 SSR

<Tags />

## SPA와 MPA

**SPA(Single Page Application)**는 웹 애플리케이션에 필요한 정적 리소스를 한꺼번에 모두 다운로드 하고, 이후 새로운 페이지 요청이 왔을 때 필요한 데이터만 전달받아서 클라이언트에서 필요한 페이지를 갱신하기 때문에 CSR로 렌더링한다.

**MPA(Multi Page Application)**은 새로운 요청이 있을 때마다 서버에서 이미 렌더링 된 정적 리소스를 받아와 SSR로 렌더링한다.

SPA === CSR, MPA === SSR 이라는 오해가 생기긴 하나, 페이지의 개수와 렌더링을 어디서 하는지 등에 따라 다른 개념임을 잊지 말자.

## CSR(Client Side Rendering)

클라이언트쪽에서 렌더링이 발생한다.
즉, 서버는 클라이언트에서 요청을 받으면 HTML과 JS를 보내주고, 클라이언트는 그것을 받아 렌더링을 시작한다.

### CSR의 동작 과정

![CSR 동작 과정](https://paullabworkspace.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff456c72a-9945-430f-8a7b-5478cb950551%2FUntitled.png?table=block&id=a78c0b0d-d1b8-48bf-93e7-b4b59ae5a6f3&spaceId=579fe283-28aa-489d-ae65-d683304becfc&width=1550&userId=&cache=v2)

1. 사용자가 웹 사이트를 방문하면, 브라우저가 서버에 리소스를 요청한다.
2. 서버는 빈 뼈대만 있는 HTML과 JavaScript 파일을 전달한다.
3. 브라우저는 연결된 JavaScript 링크를 통해 서버로부터 다시 JavaScript 파일을 다운로드 한다. 이때 빈 HTML만 전달된 것이기 때문에 사용자는 아직 렌더링 된 페이지를 볼 수 없다.
4. JavaScript를 통해 페이지를 동적으로 만들어 사용자는 화면을 볼 수 있고, 상호작용이 가능해진다.

### CSR의 장단점

#### 장점

- **서버 부하 감소**

  서버는 빈 HTML만 넘겨주는 역할만 수행하기 때문에 서버 측의 부하가 적고, 클라이언트 측에서 연산, 라우팅을 모두 직접처리하게 되어 반응속도가 빠르다.

- **사용자 경험**

  새로고침이 발생하지 않아 네이티브 앱과 같은 경험을 할 수 있다.

#### 단점

- **검색 엔진**

  브라우저의 웹 크롤러는 HTML을 읽어 검색 가능한 색인을 만들어 내는데, 웹 크롤러 입장에서는 HTML이 비어있는 것처럼 보여서 SEO(Search Engine Optimization)에 불리하다.

- **느린 초기 렌더링 속도**

  빈 HTML을 전달받아 JavaScript 파일이 다운로드 될 때까지 사용자는 빈 화면만을 보게 된다. 자바스크립트 파일의 크기가 크다면 렌더링까지 시간이 더 많이 소요될 수 있다.

## SSR(Server Side Rendering)

서버측에서 렌더링이 발생한다.
서버에서 사전에 준비한 HTML을 응답받아 바로 사용자 화면에 보여준다.

### SSR의 동작 과정

![SSR 동작과정](https://paullabworkspace.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff7d94a02-1c8a-4f6e-96f3-892f225ba087%2FUntitled.png?table=block&id=29d1c3a1-6813-44fd-b40d-144c275c00e3&spaceId=579fe283-28aa-489d-ae65-d683304becfc&width=1340&userId=&cache=v2)

1. 사용자가 웹 사이트를 방문하면 브라우저는 웹 서버로 페이지를 요청한다.
2. 서버에서 데이터를 모아 즉시 렌더링 할 수 있는 HTML 파일과 JavaScript 코드를 전달한다.
3. HTML 파일은 브라우저에 즉시 렌더되어 사용자는 페이지를 볼 수 있지만, 상호작용은 불가능하다.
4. 클라이언트는 JavaScript 파일을 다운로드 받고 HTML과 연결해 상호작용을 가능하게 한다.

### SSR의 장단점

#### 장점

- **검색 엔진**

모든 데이터가 이미 HTML에 담긴 채로 브라우저에 전달되기 떄문에 크럴러 봇이 HTML을 읽을 수 있어 SEO에 유리하다.

- **초기 로딩 속도 개선**

이미 HTML이 렌더링 되어 JavaScript 다운로드를 기다리지 않아도 화면을 볼 수 있기 때문에 초기 로딩 속도가 빠르다.

#### 단점

- **화면 깜빡임**

새로고침이나 페이지 이동 등 페이지 변경 사항이 있을 때마다 매번 서버에 요청을 보내어 응답을 받기 때문에 화면 깜빡임 현상이 발생한다.

- **TTI와 TTV의 간극**

사용자가 콘텐츠를 볼 수 있는 시점과 사용자와 상호작용이 가능한 시점에 차이가 생겨 사용자에게 혼란을 야기할 수 있다.

- **서버 부하**
