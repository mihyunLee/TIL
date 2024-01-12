---
tags: ["Web 지식", "OAuth", "인증"]
---

# OAuth

<Tags />

## OAuth(Open Authorization)란?

구글, 페이스북, 트위터와 같은 다양한 플랫폼의 특정한 사용자 데이터에 접근하기 위해 제3자 클라이언트(타 서비스)가 **사용자의 접근 권한을 위임(Delegated Authorization)받을 수 있는 표준 프로토콜이다.**

:::tip Tip
OAuth 2.0은 1.0에서 알려진 보안 문제 등을 개선한 버전이다.
:::

## OAuth 구성 요소

- Resource Owner: **사용자**, 계정을 가지고 있는 개인, 웹 서비스를 이용하려는 유저
- Client: 자사 또는 개인이 만든 **애플리케이션 서버**, 클라이언트가 Resource server에게 필요한 자원을 요청하고 응답하는 관계여서 클라이언트라는 이름을 사용한다.
- Authorization Server: **권한을 부여**(인증에 사용할 아이템을 제공)해주는 서버, **소비자**
- Resource Server: 사용자의 개인정보를 가지고 있는 애플리 케이션 (구글, 페이스북, 카카오 등), **서비스 제공자**, Client는 Token을 이 서버로 넘겨 개인정보를 응답 받을 수 있다.
- Access Token: 자원에 대한 접근 권한을 Resource Owner가 인가하였음을 나타내는 **자격증명**
- Refresh Token: Client는 Authorization Server로 부터 access token(비교적 짧은 만료기간을 가짐) 과 refresh token(비교적 긴 만료기간을 가짐)을 함께 부여 받는다.

## 토큰 종류

### Access Token

Access Token은 만료 시간이 존재하며, 만료되면 다시 요청해야 한다.

### Refresh Token

Refresh Token은 만료되면 처음부터 다시 인증받아 진행해야 한다.

Refresh Token은 Access Token과 같은 JWT(Json Web Token)으로 긴 유효기간을 가지면서 Access Token이 만료됐을 때 새로 발급해주는 키가 된다.

::: warning 예시
Refresh Token의 유효 기간은 2주, Access Token의 유효 기간은 1시간이라 할 때, 사용자는 1시간이 지나면 가지고 있는 Access Token이 만료된다. 이 때 Refresh Token의 유효기간 전까지는 Access Token을 새롭게 발급받을 수 있다.
:::

## Refresh Token을 사용하는 이유

**Access Token을 통한 인증 방식은 제 3자에게 탈취당할 경우 보안에 취약하다는 단점이 있다.**
Refresh Token의 경우 서버에 저장되기 때문에 (stateful) Refresh Token이 해커에 의해 탈취당했다고 판단했을 꼉우 서버에서 Refresh Token을 삭제함으로써 강제 로그아웃을 시킬 수 있다.

## 인증 과정

> 소비자 <-> 서비스 제공자

1. 소비자가 서비스 제공자에게 요청 토큰을 요청한다.
2. 서비스 제공자가 소비자에게 요청 토큰을 발급해준다.
3. 소비자가 사용자를 서비스 제공자로 이동시킨다. 여기서 사용자 인증이 수행된다.
4. 서비스 제공자가 사용자를 소비자로 이동시킨다.
5. 소비자가 접근 토큰을 발급한다.
6. 발급된 접근 토큰을 이용해서 소비자에게 사용자 정보에 접근한다.

## 서버와 클라이언트 간의 통신

1. 로그인 인증에 성공한 클라이언트는 Refresh Token과 Access Token 두 개를 서버로부터 받는다.
2. 클라이언트는 Refresh Token과 Access Token을 로컬에 저장해놓는다.
3. 클라이언트는 헤더에 Access Token을 넣고 API 통신을 한다. (Authorization)
4. 일정 기간이 지나 Access Token의 유효기간이 만료되었다.
   4.1. Access Token은 이제 유효하지 않으므로 권한이 없는 사용자가 된다.
   4.2. 클라이언트로부터 유효기간이 지난 Access Token을 받은 서버는 401 (Unauthorized) 에러 코드로 응답한다.
   4.3. 401를 통해 클라이언트는 invalid_token (유효기간이 만료되었음)을 알 수 있다.
5. 헤더에 Access Token 대신 Refresh Token을 넣어 API를 재요청한다.
6. Refresh Token으로 사용자의 권한을 확인한 서버는 응답 쿼리 헤더에 새로운 Access Token을 넣어 응답한다.
7. 만약 Refresh Token도 만료되었다면 서버는 동일하게 401 error code를 보내고, 클라이언트는 재로그인해야한다.

## Reference

- [https://hudi.blog/oauth-2.0/](https://hudi.blog/oauth-2.0/)
- [https://inpa.tistory.com/entry/WEB-%F0%9F%93%9A-OAuth-20-%EA%B0%9C%EB%85%90-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC](https://inpa.tistory.com/entry/WEB-%F0%9F%93%9A-OAuth-20-%EA%B0%9C%EB%85%90-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC)
