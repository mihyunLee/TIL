(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{345:function(t,s,e){"use strict";e.r(s);var a=e(7),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"jwt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jwt"}},[t._v("#")]),t._v(" JWT")]),t._v(" "),s("Tags"),t._v(" "),s("h2",{attrs:{id:"jwt-json-web-token-이란"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jwt-json-web-token-이란"}},[t._v("#")]),t._v(" JWT(JSON Web Token)이란?")]),t._v(" "),s("p",[t._v("웹에서 사용되는 JSON 형식의 토큰에 대한 표준 규격\n주로 사용자의 인증(authentication) 또는 인가(authorization) 정보를 서버와 클라이언트 간에 안전하게 주고 받기 위해 사용된다.")]),t._v(" "),s("h2",{attrs:{id:"jwt-사용-이유"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jwt-사용-이유"}},[t._v("#")]),t._v(" JWT 사용 이유")]),t._v(" "),s("p",[t._v("HTTP는 기본적으로 "),s("code",[t._v("stateless")]),t._v("를 지향한다.\nHTTP의 단점을 보완하기 위한 "),s("strong",[t._v("데이터 압축")]),t._v(" 및 "),s("strong",[t._v("암호화")]),t._v("가 된 JWT를 사용한다.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("stateless란?")]),t._v(" "),s("p",[t._v("서버-클라이언트 구조에서 서버가 클라이언트의 상태를 가지고 있지 않은 것")]),t._v(" "),s("ul",[s("li",[t._v("장점: 서버의 확장성이 높으며 대량 트래픽에 대처할 수 있다.")]),t._v(" "),s("li",[t._v("단점1: stateful 방식보다 비교적 많은 양의 데이터가 반복적으로 전송되어 네트워크 성능 저하가 발생할 수 있다.")]),t._v(" "),s("li",[t._v("단점2: 데이터 노출로 인한 보안적 문제가 있다.")])])]),t._v(" "),s("h2",{attrs:{id:"jwt의-구조"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jwt의-구조"}},[t._v("#")]),t._v(" JWT의 구조")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<헤더>.<페이로드>.서명\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("하나의 JWT는 헤더(header)와 페이로드(payload), 서명(signature) 세 부분으로 이루어지며 각 구역이 "),s("code",[t._v(".")]),t._v(" 기호로 구분된다.")]),t._v(" "),s("ul",[s("li",[t._v("헤더: 토큰 타입, 암호화 알고리즘 명시")]),t._v(" "),s("li",[t._v("페이로드: JWT에 넣을 데이터, JWT 발급 / 만료일 등 명시")]),t._v(" "),s("li",[t._v("시그니처: 헤더, 페이로드가 변조 되었는지를 확인하는 역할")])]),t._v(" "),s("h2",{attrs:{id:"토큰-vs-세션"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#토큰-vs-세션"}},[t._v("#")]),t._v(" 토큰 VS 세션")]),t._v(" "),s("div",{staticStyle:{display:"flex",gap:"7px"}},[s("p",[s("img",{attrs:{src:"https://github.com/mihyunLee/TIL/assets/51310674/d620f572-eb42-4829-a969-da8d9ebda313",alt:"토큰 기반 인증 플로우"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://github.com/mihyunLee/TIL/assets/51310674/83da0101-b22a-4a20-80e5-f34d51286fe6",alt:"세션 기반 인증 플로우"}})])]),t._v(" "),s("h3",{attrs:{id:"쿠키-cookie-와-세션-session-을-이용한-사용자-인증"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#쿠키-cookie-와-세션-session-을-이용한-사용자-인증"}},[t._v("#")]),t._v(" 쿠키(cookie)와 세션(session)을 이용한 사용자 인증")]),t._v(" "),s("p",[t._v("서버 단에 로그인한 모든 사용자의 세션을 DB나 캐시(cache)에 저장해놓고 쿠키로 넘어온 세션 ID로 사용자 데이터를 매번 조회해야 한다.")]),t._v(" "),s("h3",{attrs:{id:"토큰-사용자-인증"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#토큰-사용자-인증"}},[t._v("#")]),t._v(" 토큰 사용자 인증")]),t._v(" "),s("p",[t._v("JWT는 토큰 자체에 사용자의 정보가 저장되어 있기 때문에 서버 입장에서는 토큰을 검증 해주기만 하면 된다.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("정리")]),t._v(" "),s("p",[t._v("토큰 방식은 "),s("strong",[t._v("토큰")]),t._v("이 보안, 유저 데이터를 관리한다.\n세션 방식은 "),s("strong",[t._v("서버")]),t._v("에 보안, 유저 데이터를 관리한다.")]),t._v(" "),s("p",[t._v("즉 보안성, 성능 등의 면에서는 세션이 더 좋은 방식이지만, 비용과 확장성 면에서는 JWT를 많이 사용하고 있는 추세이다.")])]),t._v(" "),s("h2",{attrs:{id:"왜-액세스-토큰-access-token-과-리프레시-토큰-refresh-token-이-분리되었을까"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#왜-액세스-토큰-access-token-과-리프레시-토큰-refresh-token-이-분리되었을까"}},[t._v("#")]),t._v(" 왜 액세스 토큰(Access Token)과 리프레시 토큰(Refresh Token)이 분리되었을까?")]),t._v(" "),s("p",[t._v("보안과 사용자 식별을 위한 토큰인데 보안성이 떨어지면 사용하는 의미가 없어진다. 그에 따라 액세스 토큰과 리프레시 토큰을 분리하여 토큰이 해커에 의해 탈취되었을 때를 대비할 수 있다.")]),t._v(" "),s("p",[t._v("직접 API를 호출하는 액세스 토큰의 유효 기간을 짧게 하고, 액세스 토큰을 재발급하는 리프레스 토큰의 유효 기간을 비교적 길게 하면 액세스 토큰이 탈취되더라도 유효 기간이 짧기 때문에 피해를 줄일 수 있기도 하고, 서버에서 리프레시 토큰을 삭제함으로써 강제 로그아웃을 시킬 수 있다.")]),t._v(" "),s("h2",{attrs:{id:"reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://puleugo.tistory.com/138",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://puleugo.tistory.com/138"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://www.daleseo.com/jwt/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.daleseo.com/jwt/"),s("OutboundLink")],1)])],1)}),[],!1,null,null,null);s.default=r.exports}}]);