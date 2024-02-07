(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{347:function(r,t,e){"use strict";e.r(t);var v=e(7),a=Object(v.a)({},(function(){var r=this,t=r._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"pwa-progressive-web-app"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pwa-progressive-web-app"}},[r._v("#")]),r._v(" PWA(Progressive Web App)")]),r._v(" "),t("Tags"),r._v(" "),t("h2",{attrs:{id:"pwa란"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pwa란"}},[r._v("#")]),r._v(" PWA란?")]),r._v(" "),t("p",[r._v("PWA란 Progressive Web App의 줄임말로 HTML, CSS, JavaScript와 같은 웹 기술로 만들어지며 '점진적으로 네이티브 앱 수준으로 근접해가는 웹'이라는 의미를 내포하고 있다. 웹과 네이티브 앱의 장점을 결합한 환경으로 "),t("strong",[r._v("앱 수준과 같은 사용자 경험을 웹에서 제공하는 것이 목적이다.")])]),r._v(" "),t("h2",{attrs:{id:"pwa-필수-구성-요소"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pwa-필수-구성-요소"}},[r._v("#")]),r._v(" PWA 필수 구성 요소")]),r._v(" "),t("p",[r._v("일반적인 웹에 아래의 구성 요소들을 포함시켜서 PWA로 만들 수 있다.")]),r._v(" "),t("ul",[t("li",[t("p",[t("strong",[r._v("보안 연결 (HTTPS)")])]),r._v(" "),t("p",[r._v("PWA는 신뢰할 수 있는 연결 상태에서만 동작하기 떄문에 HTTPS 프로토콜을 통해 제공되어야 한다. 이는 단지 보안상의 이유 뿐만 아니라 사용자들의 신뢰를 얻기 위해서도 중요한 부분이다.")])]),r._v(" "),t("li",[t("p",[t("strong",[r._v("서비스 작업자(Service Worker)")])]),r._v(" "),t("p",[r._v("Service Worker는 PWA의 KEY라 불리는 필수 요소로써, 네이티브 앱처럼 동작할 수 있게하는 중요한 요소다.")]),r._v(" "),t("p",[t("strong",[r._v("PWA의 핵심 기능인 푸시 알림, 백그라운드 동기화, 오프라인 환경 지원, 리소스 캐싱의 구현체를 담을 수 있는 스크립트 파일이다.")])]),r._v(" "),t("p",[r._v("Service Worker는 JavaScript 기반의 Web API의 한 종류로 브라우저의 백그라운드에서 독립된 스레드를 실행한다. 따라서 사용자가 해당 메인 앱을 켜놓고 있지 않아도 백그라운드에서 실행할 수 있다.")])]),r._v(" "),t("li",[t("p",[t("strong",[r._v("매니페스트 파일(manifest file, 설정 파일)")])]),r._v(" "),t("p",[r._v("manifest 파일은 JSON 형식으로 "),t("strong",[r._v("브라우저에게 PWA에 대한 메타 정보와 현재 웹 사이트가 유저의 데스크톱이나 모바일 장치에 어떻게 설치되어야 하는지에 대한 정보를 저장한 파일이다.")])]),r._v(" "),t("p",[r._v("앱 이름, 아이콘, 테마 색상 정보 등을 포함하고 있다.")])])]),r._v(" "),t("h2",{attrs:{id:"장점"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#장점"}},[r._v("#")]),r._v(" 장점")]),r._v(" "),t("ul",[t("li",[t("p",[t("strong",[r._v("앱 개발 생산성 극대화")])]),r._v(" "),t("p",[r._v("앱 마켓에 등록하기 위한 별도의 프로세스를 거치지 않아도 되며, 일반적인 웹 기술을 활용해서 개발할 수 있어 네이티브에 대한 기술이 전혀 요구되지 않는다. 또한 기존의 웹 사이트를 앱으로 만들 수 있기 때문에, 추가로 유지관리해야 하는 코드 베이스가 적어 개발과 유지 보수 측면에서 비용이 저렴하다.")])]),r._v(" "),t("li",[t("p",[t("strong",[r._v("검색 엔진을 통한 유입")])]),r._v(" "),t("p",[r._v("PWA는 본질적으로 웹이기에 검색 엔진을 통해 검색이 가능하며(SEO) 이를 통해 사용자가 유입될 수 있다.")])]),r._v(" "),t("li",[t("p",[t("strong",[r._v("다양한 디바이스 대응")])]),r._v(" "),t("p",[r._v("기본적으로 반응형이기 때문에, 다양한 화면 크기에도 잘 동작한다.")])]),r._v(" "),t("li",[t("p",[t("strong",[r._v("푸시 알림 & 오프라인 지원")])]),r._v(" "),t("p",[r._v("네이티브 앱(하이브리드, 크로스 플랫폼 포함)만이 가지고 있던 푸시 알림을 통해 사용자 재참여를 유도할 수 있고, 오프라인 지원과 같은 네이티브 앱의 특징들도 전부 제공할 수 있다.")]),r._v(" "),t("blockquote",[t("p",[r._v("현재 안드로이드만 푸시 알림 기능을 제공한다. iOS는 16.4(2023.3.27)부터 제공하고 있다.")])])]),r._v(" "),t("li",[t("p",[t("strong",[r._v("저속도 네트워크 환경, 오프라인 동작 지원")])]),r._v(" "),t("p",[r._v("Service Worker 덕분에 앱 동작에 필요한 asset 들과 일부 API call 들에 대한 캐싱이 가능해졌다. 사용자의 장치가 오프라인이거나 불안정한 저속도 환경에 있더라도 캐싱된 리소스로 안정적인 앱 사용을 지원한다.")])])]),r._v(" "),t("h2",{attrs:{id:"단점"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#단점"}},[r._v("#")]),r._v(" 단점")]),r._v(" "),t("ul",[t("li",[t("p",[t("strong",[r._v("PWA에 대한 인지도 부족")])]),r._v(" "),t("p",[r._v("앱처럼 보이면서도 앱 스토어를 통한 설치가 없다보니 사용자에게 초기 접근성이 낮을 수 있다.")]),r._v(" "),t("p",[r._v("구글과 Microsoft는 이를 고려해 PWA를 스토어에 배포할 수 있게 했지만 Apple의 경우 아직 알려진 바가 없는듯 하다.")])]),r._v(" "),t("li",[t("p",[t("strong",[r._v("Non-native UI")])]),r._v(" "),t("p",[r._v("네이티브 앱에서 느낄 수 있는 각 운영체제 고유의 UI와 사용자 경험을 제공할 수 없다.")])]),r._v(" "),t("li",[t("p",[t("strong",[r._v("게임과 같은 고사양 앱 개발 불가능")])]),r._v(" "),t("p",[r._v("운영체제의 자원을 직접적으로 사용할 수 있는 네이티브 앱이 아닌 웹을 기반으로 동작하기 때문에 높은 연산을 요구하는 작업, 그래픽 사용이 필수인 게임 앱 개발에는 한계가 존재한다.")])])]),r._v(" "),t("h2",{attrs:{id:"reference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[r._v("#")]),r._v(" Reference")]),r._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://blog.wishket.com/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%A0%88%EC%8B%9C%EB%B8%8C-%EC%9B%B9-%EC%95%B1pwa%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B4%EB%A9%B0-%EC%99%9C-%ED%95%84%EC%9A%94%ED%95%9C%EA%B0%80/",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://blog.wishket.com/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%A0%88%EC%8B%9C%EB%B8%8C-%EC%9B%B9-%EC%95%B1pwa%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B4%EB%A9%B0-%EC%99%9C-%ED%95%84%EC%9A%94%ED%95%9C%EA%B0%80/"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://www.sepoasoft.co.kr/?p=7411",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://www.sepoasoft.co.kr/?p=7411"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://yozm.wishket.com/magazine/detail/1969/",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://yozm.wishket.com/magazine/detail/1969/"),t("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);