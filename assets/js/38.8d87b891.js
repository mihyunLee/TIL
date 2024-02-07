(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{337:function(t,v,_){"use strict";_.r(v);var s=_(7),a=Object(s.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"타입스크립트-소개"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#타입스크립트-소개"}},[t._v("#")]),t._v(" 타입스크립트 소개")]),t._v(" "),v("Tags"),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("Info")]),t._v(" "),v("p",[t._v("이 글은 이정환님의 "),v("a",{attrs:{href:"https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%ED%81%AC%EA%B8%B0-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/dashboard",target:"_blank",rel:"noopener noreferrer"}},[t._v("한 입 크기로 잘라먹는 타입스크립트"),v("OutboundLink")],1),t._v("를 수강 후 정리한 글입니다.")])]),t._v(" "),v("h2",{attrs:{id:"타입스크립트란"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#타입스크립트란"}},[t._v("#")]),t._v(" 타입스크립트란?")]),t._v(" "),v("p",[t._v("타입스크립트는 자바스크립트에서 "),v("strong",[t._v("타입")]),t._v(" 관련된 여러가지 기능을 추가한 언어로, "),v("u",[t._v("자바스크립트의 확장판")]),t._v("이라고 할 수 있다.")]),t._v(" "),v("h3",{attrs:{id:"타입스크립트의-필요성"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#타입스크립트의-필요성"}},[t._v("#")]),t._v(" 타입스크립트의 필요성")]),t._v(" "),v("p",[t._v("자바스크립트는 원래 간단한 상호작용을 구현하기 위해 탄생되었다. 웹 브라우저에서만 동작하는 간결한 프로그램을 만들기 위해 개발되었기 때문에 문법도 간단하고, 자유도를 높여 제약이 크지 않았다.")]),t._v(" "),v("p",[t._v("Node.js가 등장하고 어디서든(웹, 모바일 앱, 데스크탑 앱) 자바스크립트를 구동할 수 있게 되면서 복잡한 프로그램에 자바스크립트가 사용되었다. 이 때, 자바스크립트가 엄격하지 않다는 점에서 버그 발생 가능성이 높아졌고, 안정성을 확보한 "),v("strong",[t._v("타입스크립트")]),t._v("가 등장하게 되었다.")]),t._v(" "),v("h2",{attrs:{id:"자바스크립트의-단점과-타입스크립트"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#자바스크립트의-단점과-타입스크립트"}},[t._v("#")]),t._v(" 자바스크립트의 단점과 타입스크립트")]),t._v(" "),v("h3",{attrs:{id:"자바스크립트의-한계"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#자바스크립트의-한계"}},[t._v("#")]),t._v(" 자바스크립트의 한계")]),t._v(" "),v("p",[t._v("모든 프로그래밍 언어는 타입 시스템을 가지고 있다.\n"),v("strong",[t._v("타입 시스템")]),t._v("이란 언어에서 사용되는 값들을 어떤 기준으로 타입을 정할지 결정하고, 코드의 타임 검사 시기와 어떻게 검사할지 등의 타입과 관련해서 지켜야 할 규칙들을 모아둔 체계이다.")]),t._v(" "),v("p",[t._v("자바스크립트는 "),v("strong",[t._v("동적 타입 시스템")]),t._v("으로 코드 실행 이후에 유동적으로 변수의 타입을 결정한다.\n미리 변수에 타입을 설정하지 않아도 된다는 장점이 있지만, 타입에 맞지 않은 메서드를 사용했을 때 코드 실행 이후에 에러가 발생하게 된다.\n또한 변수의 타입이 하나의 타입으로 고정되지 않고 현재 변수에 담긴 값에 따라서 변수의 타입이 동적으로 계속해서 달라진다.")]),t._v(" "),v("p",[t._v("하지만 동적 타입 시스템의 경우 실행 이후에 에러가 발생하게 되어 프로그램이 비정상적으로 종료되는 원인이 된다. 따라서 실행하기 전에 검사가 되어 오류가 있으면 실행 자체를 막는 것이 더 좋다.")]),t._v(" "),v("p",[t._v("반면에 정적 타입 시스템은 코드 실행 이전에 모든 변수의 타입을 고정적으로 결정하기 때문에 동적 타입 시스템에서 발생하는 문제는 잘 발생하지 않는다.\n다만, 변수를 선언할 때 타입을 지정해주어야 한다는 불편함이 있다.")]),t._v(" "),v("h3",{attrs:{id:"타입스크립트는-어떻게-한계점을-극복했을까"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#타입스크립트는-어떻게-한계점을-극복했을까"}},[t._v("#")]),t._v(" 타입스크립트는 어떻게 한계점을 극복했을까?")]),t._v(" "),v("p",[t._v("타입스크립트는 동적 타입 시스템과 정적 타입 시스템이 결합된 타입 시스템을 사용한다.\n정적 타입 시스템처럼 "),v("strong",[t._v("코드 실행 전에 변수의 타입을 결정하고 타입 오류 검사를 실행한다.")]),t._v("\n정적 타입 시스템처럼 안전하면서도 마치 동적 타입 시스템처럼 모든 변수에 직접 타입을 명시하지 않아도 된다.\n이와 같은 타입 시스템을 "),v("strong",[t._v("점진적 타입 시스템")]),t._v("이라 하고, 자동으로 변수의 타입을 추론한다.")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("정적 타입 시스템 / 동적 타입 시스템 / 점진적 타입 시스템")]),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("정적 타입 시스템")])]),t._v(" "),v("p",[t._v("(정의)")]),t._v(" "),v("p",[t._v("코드를 실행하기 전에 정적으로 변수의 타입을 결정")]),t._v(" "),v("p",[t._v("(단점)")]),t._v(" "),v("p",[t._v("모든 변수에 일일이 타입을 지정해주어야 함. 타이핑 양 증가, 유연하지 않음")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("동적 타입 시스템")])]),t._v(" "),v("p",[t._v("(정의)")]),t._v(" "),v("p",[t._v("코드를 실행하면서 유동적으로 변수의 타입을 결정")]),t._v(" "),v("p",[t._v("(단점)")]),t._v(" "),v("p",[t._v("코드의 타입 오류를 미리 검사할 수 없음. 예기치 못한 오류가 발생할 수 있다.")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("점진적 타입 시스템")])]),t._v(" "),v("p",[t._v("(정의)")]),t._v(" "),v("p",[t._v("실행 전 검사를 통한 타입 안정성 확보")]),t._v(" "),v("p",[t._v("자동으로 변수의 타입을 추론")])])])]),t._v(" "),v("h2",{attrs:{id:"타입스크립트의-동작-원리"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#타입스크립트의-동작-원리"}},[t._v("#")]),t._v(" 타입스크립트의 동작 원리")]),t._v(" "),v("h3",{attrs:{id:"프로그래밍-언어의-동작-컴파일-과정"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#프로그래밍-언어의-동작-컴파일-과정"}},[t._v("#")]),t._v(" 프로그래밍 언어의 동작 (컴파일 과정)")]),t._v(" "),v("ul",[v("li",[t._v("코드 → AST (추상 문법 트리) → 바이트 코드 (컴퓨터가 이해할 수 있는 형태의 코드)")])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("추상 문법 트리(AST, Abstract Syntax Tree)")]),t._v(" "),v("p",[t._v("코드의 공백이나 주석, 탭 등의 코드 실행에 관계 없는 요소들은 전부 제거하고 트리 형태의 자료구조에 코드를 쪼개서 저장 해 놓은 형태")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://user-images.githubusercontent.com/51310674/281357998-9da5d458-200b-4867-b846-2053bc1458ff.png",alt:"AST"}})])]),t._v(" "),v("h3",{attrs:{id:"타입스크립트의-컴파일-과정"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#타입스크립트의-컴파일-과정"}},[t._v("#")]),t._v(" 타입스크립트의 컴파일 과정")]),t._v(" "),v("ul",[v("li",[t._v("TS 코드 → AST → "),v("strong",[t._v("타입 검사")]),t._v(" → (검사 성공) JavaScript → AST → 바이트 코드")]),t._v(" "),v("li",[t._v("TS 코드 → AST → "),v("strong",[t._v("타입 검사")]),t._v(" → (검사 실패) 컴파일 종료")])]),t._v(" "),v("p",[t._v("타입스크립트로 컴파일 된 JavaScript 코드는 타입 안정성이 높아진 JavaScript 코드로 변환된다.\n타입과 관련된 코드들은 컴파일 성공 시 모두 사라지게 된다.")])],1)}),[],!1,null,null,null);v.default=a.exports}}]);