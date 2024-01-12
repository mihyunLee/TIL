---
tags: ["Web 지식", "JWT", "인증"]
---

# JWT

<Tags />

## JWT(JSON Web Token)이란?

웹에서 사용되는 JSON 형식의 토큰에 대한 표준 규격
주로 사용자의 인증(authentication) 또는 인가(authorization) 정보를 서버와 클라이언트 간에 안전하게 주고 받기 위해 사용된다.

## JWT 사용 이유

HTTP는 기본적으로 `stateless`를 지향한다.
HTTP의 단점을 보완하기 위한 **데이터 압축** 및 **암호화**가 된 JWT를 사용한다.

::: warning stateless란?
서버-클라이언트 구조에서 서버가 클라이언트의 상태를 가지고 있지 않은 것

- 장점: 서버의 확장성이 높으며 대량 트래픽에 대처할 수 있다.
- 단점1: stateful 방식보다 비교적 많은 양의 데이터가 반복적으로 전송되어 네트워크 성능 저하가 발생할 수 있다.
- 단점2: 데이터 노출로 인한 보안적 문제가 있다.
  :::

## JWT의 구조

```
<헤더>.<페이로드>.서명
```

하나의 JWT는 헤더(header)와 페이로드(payload), 서명(signature) 세 부분으로 이루어지며 각 구역이 `.` 기호로 구분된다.

- 헤더: 토큰 타입, 암호화 알고리즘 명시
- 페이로드: JWT에 넣을 데이터, JWT 발급 / 만료일 등 명시
- 시그니처: 헤더, 페이로드가 변조 되었는지를 확인하는 역할

## 토큰 VS 세션

<div style='display: flex; gap: 7px'>

![토큰 기반 인증 플로우](https://private-user-images.githubusercontent.com/51310674/296101380-fd8e92fb-9155-4b63-97fc-b3b1e53f1392.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDUwMjQyMTksIm5iZiI6MTcwNTAyMzkxOSwicGF0aCI6Ii81MTMxMDY3NC8yOTYxMDEzODAtZmQ4ZTkyZmItOTE1NS00YjYzLTk3ZmMtYjNiMWU1M2YxMzkyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTEyVDAxNDUxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTNkMjRiNTE4NDM0NWEwNzJkMzcwMzM4YmRlOTZiYTYxOGEzZjIwYjNlMjBmZDhkMDFhNTFiZDc0YjI4MTZmYTMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.bEoA_psHNOigrp6-BHPJzQ7651BUfo3MbRlt3Nygdj4)

![세션 기반 인증 플로우](https://private-user-images.githubusercontent.com/51310674/296101425-972f4d3f-d9b1-4f47-bd2e-454057aba2eb.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDUwMjQyMTksIm5iZiI6MTcwNTAyMzkxOSwicGF0aCI6Ii81MTMxMDY3NC8yOTYxMDE0MjUtOTcyZjRkM2YtZDliMS00ZjQ3LWJkMmUtNDU0MDU3YWJhMmViLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTEyVDAxNDUxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWZlYWNiN2ZiMTZlYzM3ZmUxMzgzNWM4MjQzNzg3ODBkNmNjMGM1YWMzODUwYjAyMWMzYmUxMmJjMzJiNzllZTQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.JeVH5uKv13H-kEvlbLrOjOkM4NEHS4wzI7KJHDKmDcI)

</div>

### 쿠키(cookie)와 세션(session)을 이용한 사용자 인증

서버 단에 로그인한 모든 사용자의 세션을 DB나 캐시(cache)에 저장해놓고 쿠키로 넘어온 세션 ID로 사용자 데이터를 매번 조회해야 한다.

### 토큰 사용자 인증

JWT는 토큰 자체에 사용자의 정보가 저장되어 있기 때문에 서버 입장에서는 토큰을 검증 해주기만 하면 된다.

::::tip 정리
토큰 방식은 **토큰**이 보안, 유저 데이터를 관리한다.
세션 방식은 **서버**에 보안, 유저 데이터를 관리한다.

즉 보안성, 성능 등의 면에서는 세션이 더 좋은 방식이지만, 비용과 확장성 면에서는 JWT를 많이 사용하고 있는 추세이다.
::::

## 왜 액세스 토큰(Access Token)과 리프레시 토큰(Refresh Token)이 분리되었을까?

보안과 사용자 식별을 위한 토큰인데 보안성이 떨어지면 사용하는 의미가 없어진다. 그에 따라 액세스 토큰과 리프레시 토큰을 분리하여 토큰이 해커에 의해 탈취되었을 때를 대비할 수 있다.

직접 API를 호출하는 액세스 토큰의 유효 기간을 짧게 하고, 액세스 토큰을 재발급하는 리프레스 토큰의 유효 기간을 비교적 길게 하면 액세스 토큰이 탈취되더라도 유효 기간이 짧기 때문에 피해를 줄일 수 있기도 하고, 서버에서 리프레시 토큰을 삭제함으로써 강제 로그아웃을 시킬 수 있다.

## Reference

[https://puleugo.tistory.com/138](https://puleugo.tistory.com/138)
[https://www.daleseo.com/jwt/](https://www.daleseo.com/jwt/)
