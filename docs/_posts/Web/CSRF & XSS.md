---
tags: ["Web 지식", "CSRF", "XSS"]
---

# CSRF와 XSS

<Tags />

## CSRF(Cross Site Request Forgery Attack)

### CSRF란?

CSRF(Cross Site Request Forgery Attack)는 크로스 사이트 요청 위조 공격으로 **사용자가 자신의 의지와는 상관 없이 공격자가 의도한 행위(modify, delete, register 등)를 특정 웹 사이트에 요청(request)하도록 만드는 공격**을 말한다.

CSRF는 사용자의 정보 탈취보다는 특정 작업을 무단으로 진행하기 위한 목적으로 이루어지는 경우가 많다.

### CSRF 공격 예시

1. 공격자(해커)가 은행 계좌에서 공격자의 계좌로 천만 원을 송금하라는 요청을 위조한다.
2. 위조한 요청은 하이퍼링크에 삽입되어 이메일로 전송되거나 웹 사이트 자체에 삽입한다.
3. 사용자가 공격자가 생성한 이메일 하이퍼링크나 웹 사이트 링크를 클릭하면 은행에 천 만원을 송금하는 요청이 전송된다.
4. 요청을 받은 은행 서버는 사용자의 요청대로 송금을 진행한다.

### CSRF 대응 기법

- **리퍼러(Refferer) 검증**

  백엔드(Backend) 단에서 요청의 refferer 검증을 통해 승인된 도메인(e.g. \*.instagram.com)이 일치하는 지 검증 후 요청을 처리한다.

- **Security Token 사용 (A.K.A CSRF Token)**

  사용자의 Session에 임의의 난수 값을 저장하고, 사용자의 요청마다 해당 값을 포함하여 전송시킨다. 백엔드 단에서는 요청에 담긴 세션에 저장된 토큰 값과 요청 파라미터로 전달받는 토큰 값이 일치하는지 검증하는 방법이다.

  > 하지만, XSS에 취약점이 있다면 공격을 받을 수도 있다.

## XSS(Cross Site Scription)

### XSS란?

XSS(Cross Site Scription)은 CSRF와 같이 웹 어플리케이션 취약점 중 하나로, **웹 사이트에 악성 스크립트를 주입하는 행위를 의미한다.** 공격자는 사람들에게 안전하다고 생각하는 웹 사이트에 악성 스크립트를 주입하고, 이를 포함한 게시글을 열람한 사용자의 쿠키가 공격자에게 전송된다.
이를 통해 공격자는 스크립트를 실행해 사용자의 세션을 가로채거나, 웹 사이트를 변조하는 등 피싱 공격 등을 시도할 수 있게 된다.

XSS 공격은 공격자가 C&C 서버로 리디렉션하기 위한 리디렉션 스크립트를 주입해 중간 경유지로 활용되기도 하며, 사용자의 쿠키를 탈취해 세션 하이재킹(Session Hijacking) 공격을 수행하는 역할을 하기도 한다.

> **C&C(Command & Control) 서버** <br>
> 일반적으로 감염된 좀비 PC가 공격자가 원하는 공격을 수행하도록 원격지에서 명령을 내리거나 악성코드를 제어하는 서버

:::tip 세션 하이재킹
사용자의 아이디와 패스워드를 모르더라도 사용자의 세션이 연결되어 있는 상태를 가로채 시스템에 접근하여 자원이나 데이터를 사용할 수 있는 공격을 의미한다.
:::

### XSS 공격 유형

XSS 공격 유형으로는 반사형 XSS, 지속성(저장형) XSS, DOM 기반 XSS 세 가지가 있다.

- **반사형 XSS**

  가장 일반적인 유형의 XSS 공격으로 사용자에게 입력 받은 값을 서버에서 되돌려 주는 곳에서 발생한다. 사용자가 입력 받은 검색어를 그대로 표시하는 곳이나 사용자가 입력한 값을 오류 메시지와 함꼐 보여주는 곳에 악성 스크립트를 삽입하며, 스크립트는 서버가 사용자의 입력 값을 포함해 응답을 전송할 때 실행된다.

- **지속성 XSS**

  지속성 XSS는 영구적 혹은 저장형 XSS 공격이라고도 하며, XSS 취약점이 있는 서버에 악성 스크립트를 저장시킨 후, 열람한 사용자의 쿠키를 탈취하거나 리다이렉션 시키는 공격이다. 이때 삽입된 스크립트를 데이터베이스에 저장시켜 지속적으로 공격한다.

- **DOM 기반 XSS**

  웹 페이지를 여는 즉시 생성되는 DOM의 특성을 이용한 공격이다. 악성 스크립트가 포함된 URL을 사용자가 요청하게 되면서 브라우저를 해석하는 단계에서 발생한다. 응답 페이지 HTML에서 악성 코드가 분명하게 나타나는 반사형 및 지속성 XSS와는 다르게 DOM 기반 XSS는 웹 사이트의 코드를 조사하지 않고는 취약점을 발견할 수 없다.

### XSS 대응 기법

- **입출력 값 검증**

  [XSS Cheat Sheet](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet)에 대한 필터 목록을 만들어 XSS 필터링을 적용한다.

- **XSS 방어 라이브러리, 확장 앱**

  XSS 방어 라이브러리는 백엔드(서버) 단에서 추가할 수 있으며, 사용자들은 각 브라우저에서 악성 스크립트가 실행되지 않도록 확장 앱을 설치할 수 있다.

- **웹 방화벽**

  웹 공격에 특화된 것으로, 다양한 Injection을 한꺼번에 방어할 수 있다.

- **CORS, SOP 설정**

  CORS(Cross-Origin Resource Sharing), SOP(Same-Origin-Policy)를 통해 리소스의 소스를 제한한다. CORS, SOP를 활용하여 사전에 지정된 도메인이나 범위가 아니라면 리소스를 가져올 수 없게 제한함으로써 공격자의 서버에 위치한 스크립트를 불러올 수 없게한다.

- **스크립트 문자 필터링**

  DOM 상의 텍스트를 읽을 때 `innerHTML` 사용을 지양하고, `textContent` 등의 메소드로 대체한다.

## Reference

- [https://velog.io/@minjae-mj/%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%B3%B4%EC%95%88-%EA%B3%B5%EA%B2%A9-XSS-CSRF](https://velog.io/@minjae-mj/%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%B3%B4%EC%95%88-%EA%B3%B5%EA%B2%A9-XSS-CSRF)
- [https://nordvpn.com/ko/blog/csrf/](https://nordvpn.com/ko/blog/csrf/)
- [https://nordvpn.com/ko/blog/xss-attack/](https://nordvpn.com/ko/blog/xss-attack/)
