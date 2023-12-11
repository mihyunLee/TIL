---
tags: ["Nextjs", "App Router"]
---

# Next13 App Router

<Tags />

## App Router

Next13부터는 Pages Router와 App Router로 구성되어 있다.
기존에는 Pages Router만 사용되었지만 13버전에서는 App Router도 선택사항에 포함되었다.

## App Router 도입 배경

기존 Pages Router의 문제점을 해결하여 나온 것이 App Router이다. Pages Router의 구조상 변경하기 어려웠던 점이 있었기 때문에 아예 새롭게 개선되어 나오게 되었다.

## 차이점

- 공통 레이아웃 기능 추가
- 페이지별 권한 체크를 앱 라우터 미들 웨어로 가능
- React18 기능 사용 가능 -> Server Component 적극 활용

:::tip 서버 컴포넌트
next 서버에서 리액트를 미리 렌더링해서 프론트 혹은 브라우저 및 클라이언트로 데이터를 보내줄 때 완성된 HTML을 미리 보내주는 것

`장점` HTML 로딩 시간 및 JS 용량 감소 <br>
`단점` Next 서버 자체의 부담 증가 (이에 따라 '캐시'를 적극 활용하는 방안이 도입되었다.)
:::

## 시작

### Next.js 란?

React기반 **프레임워크**이다.
React는 라이브러리로 화면 단을 그리는 것이 주 목적이고, 추가 라이브러리를 통해 라우팅, 캐싱 등을 구현했다. 하지만 Next 에서는 라우팅, 캐싱, 스타일링 등을 기본 기능으로 제공해준다.

CSR인 React와는 달리, SSR(Server Side Rendering)으로 동작하고, Code splitting 기술을 통해 초기 로드시 필요한 코드만 다운로드하여 실행한다.
따라서 앱의 초기 로딩 속도를 개선함과 동시에 React보다 가볍게 동작하고, SEO 또한 개선할 수 있다.

### Next 프로젝트 설치

```bash
$ npx create-next-app@latest
```

### 폴더 구조

#### public 폴더

- Next 서버에서 누구나 접근할 수 있게 서비스된다.
- 모든 사람이 접근해도 괜찮은 사이트에서 쓰일 이미지 등을 넣는 것이 좋다.

#### src 폴더

- 소스 폴더
- 주로 루트 아래에 `src`와 `app` 폴더가 별도로 있는 것이 원칙이지만, 타입스크립트의 **targetDir**을 src로 설정하여 한번에 컴파일링 하기 위해 src 밑에서 개발하는 것도 선호된다.

#### app 폴더

- 주소를 담당하는 부분을 `app` 폴더에서 관리한다.
- 그 외 코드들은 components나 mock 등 src 하위에 다른 폴더로 관리할 수 있다.

#### next.config.js

- 넥스트 설정 파일

#### tsconfig.json

- 타입스크립트 설정 파일

::: tip path-alias
`create-next-app` 으로 프로젝트를 생성할 때, path-alias에 대한 커스터마이징 질문이 등장한다.
**path-alias**란, 경로에 대한 별칭을 사용하는 것으로 일반적으로는 `@`가 사용된다.

코드 내에서 작성하는 상대 경로가 `import ../../../components/Header.tsx` 라면
path-alias를 사용할 경우 `import @/components/Header.tsx`로 간단하게 표현할 수 있다.
:::

### Dynamic Routing

- app 폴더는 라우터와 연결된다.
- 사용자가 100명일때 100명의 사용자 프로필을 만들 순 없다.
- 이 때 폴더명을 `[username]`처럼 폴더명을 대괄호로 묶어 생성할 수 있고, 이를 동적 세그먼트라 한다.
- username에 들어오는 변수는 최후순위로, 만약 사용자의 이름이 login이고, /login 이라는 라우터를 사용하고 있다면 `/login` 라우터의 우선 순위가 더 높아 로그인 페이지가 렌더링된다.

### Route Group

- 일반적으로 `app` 폴더 하위의 폴더는 URL 경로로 매핑된다.
- app 폴더 내에서 폴더명을 괄호로 묶어 생성하면 URL 경로 구조에 영향을 주지 않는 즉, 라우팅에 관여하지 않고 경로 그룹을 생성할 수 있다.
- 폴더명울 `()`로 묶어 그룹화를 할 수 있다.
- ex) src/app/(그룹1), src/app/(그룹2)

:::tip Tip
라우트 그룹의 경우 별도의 layout을 가질 수 있다.
따라서 <u>**그룹별 레이아웃을 다르게 설정할 수 있다**</u>는 장점이 있다.
:::
