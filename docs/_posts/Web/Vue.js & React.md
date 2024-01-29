---
tags: ["Web 지식", "Vue", "React"]
---

# Vue.js와 React.js의 차이

<Tags />

## CLI(Command Line Interface)

### Vue.js

- vue-cli
  - 페이지, 컴포넌트, 라우팅 등 코드 프리셋이 주어지며 HTML, CSS, JS 영역이 분리되어 있다.

### React.js

- create-react-app
  - 리액트 프로젝트를 빠르게 만들어 주지만 그 안의 세부적인 개념에 대한 별도 공부가 필요하다.

:::tip CLI
CLI란 Command Line Interface 또는 Charater User Interface의 줄임말로 **글자를 입력하여 컴퓨터에 명령을 내리는 방식**이다.

ex) DOS, 명령 프롬프트, bash로 대표되는 Unix 셀 환경 등
:::

## 러닝 커브

### Vue.js

- **낮은 학습 곡선**을 가지고 있기 때문에 빠르게 학습하여 구축이 가능하다.
- HTML, JS, CSS 코드 영역을 분리해서 작성한다.

  `<template>`에는 HTML, `<script>` 안에는 JavaScript, `<style>` 안에는 CSS를 작성한다.

### React.js

- **가파른 학습 곡선**을 가지고 있다.

  cra(creat-react-app)으로 프로젝트를 쉽게 세팅할 수 있지만 코드의 자유도가 높기 때문에 그 외에 상태 관리, 라우팅, 빌드 시스템 등에 대한 지식이 필요하다.

- jsx(JavaScript XML) 형태로 코드를 작성하여 개발자가 익숙해지기까지 시간이 걸릴 수 있다.

## 데이터 바인딩

> **데이터 바인딩**이란 두 데이터 혹은 정보의 소스를 일치시키는 기법으로, 화면에 보이는 데이터와 브라우저 메모리에 있는 데이터를 일치시키는 것을 말한다.

### Vue.js

- **양방향 데이터 바인딩 (Two-way binding)**

  입력 요소의 이벤트를 수신하는 동시에 값을 보내는 방식이다.
  JavaScript(Model)와 HTML(View) 사이에 ViewModel이 존재하여 하나로 묶여서(Binding) **둘 중 하나만 변경되어도 함꼐 변경되는 것을 의미한다.** [HTML(View) <-> ViewModel <-> Javascript(Model)]

  애플리케이션 전체에서 데이터 및 상태를 보다 쉽게 관리할 수 있다.

  Vue에서는 `v-bind` 와 `v-on`을 통해 양방향 데이터 바인딩을 하는데 `v-bind`가 DOM 연관된 내용을 잡아내고, vue가 바라보는 대상의 속성과 연결되며 `v-on`은 이벤트를 잡아내는 데 사용한다. 이 두 개를 결합하여 `v-model`로 간단하게 구현할 수 있다. (단, v-model 사용 시 IME 입력(한국어, 일본어, 중국어)의 경우 한 글자에 대한 입력이 끝나야 데이터가 동기화된다.)

  ```js
  // v-bind & v-on
  Vue.component("App", {
    data() {
      return {
        name: "",
      };
    },
    template: `
    <div>
    <input type="text" v-bind:value="name" v-on:input="setInput"/>
    <p>이름: {{ name }}</p>
    </div>`,
    methods: {
      setInput(event) {
        this.name = event.target.value;
      },
    },
  });
  ```

  ```js
  // v-model
  Vue.component("App", {
    data() {
      return {
        name: "",
      };
    },
    template: `
    <div>
    <input type="text" v-model="name" placeHolder="이름을 입력하세요"/>
    <p>이름: {{ name }}</p>
    </div>`,
  });
  ```

### React.js

- **단방향 데이터 바인딩 (One-way binding)**

  JavaScript(Model)에서 HTML(View)로 **한 방향으로만 데이터를 동기화하는 것을 의미한다.** [JS(Model) -> HTML(View)]

  단방향 데이터 바인딩이기에 역으로 HTML(View)에서 JS(Model)로의 직접적인 데이터 갱신은 불가능 하다.

  컴포넌트 간에서 단방향 데이터 바인딩은 **부모 컴포넌트에서 자식 컴포넌트로만 데이터가 전달되는 구조**이다.

  **데이터 흐름이 단방향이기 때문에 코드를 이해하기 쉽고, 데이터 추적과 디버깅이 쉽다는 장점이 있는 반면, 변화를 감지하고 화면을 업데이트하는 코드를 매번 작성해야 한다는 단점이 있다.**
