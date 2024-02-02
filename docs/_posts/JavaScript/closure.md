---
tags: ["JavaScript", "클로저"]
---

# Closure

<Tags />

## Closure, 클로저란?

클로저는 자바스크립트 고유의 개념이 아니라 함수를 일급 객체로 취급하는 함수형 프로그래밍언어에서 사용되는 중요한 특성이다.

클로저는 자바스크립트 고유의 개념이 아니므로 ECMAScript 명세에 정의가 등장하지 않는다.

> “A closure is the combination of a function and the lexical environment within which that function was declared.” <br>
> 클로저는 함수와 그 함수가 선언됐을 때의 렉시컬 환경(Lexical environment)과의 조합이다. <br>
> 출처: MDN

MDN의 정의에서 말하는 '함수'란 반환된 내부함수(inner Function)을 의미하고 '그 함수가 선언될 때의 렉시컬 환경'이란 내부 함수가 선언됐을 때의 스코프를 의미한다.

즉, 클로저는 **반환된 내부함수가 자신이 선언됐을 때의 환경(Lexical environment)인 스코프를 기억하여 자신이 선언됐을 때의 환경(스코프) 밖에서 호출되어도 그 환경(스코프)에 접근할 수 있는 함수를 말한다.**

간단히 말하자면 클로저는 자신이 생성될 때의 환경(Lexical Environment)을 기억하는 함수다.

## Reference

- [https://poiemaweb.com/js-closure](https://poiemaweb.com/js-closure)
