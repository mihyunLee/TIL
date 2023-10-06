---
tags: ["JavaScript", "반복문"]
---

# 반복문

<Tags />

## for...in

### 문법

<br />

<code-group>
<code-block title="문법">

```js
for (변수 in 객체) {
  실행문;
}
```

</code-block>

<code-block title="예시">

```js
const array1 = ["a", "b", "c"];

for (const element in array1) {
  console.log(element);
}

// Expected output: "0"
// Expected output: "1"
// Expected output: "2"
```

</code-block>
</code-group>

### 설명

`for...in` 문은 열거 가능한 속성들을 포함하여 객체에서 문자열로 키가 지정된 모든 열거 가능한 프로퍼티(enumerable properties)를 순회하는 반복문이다.
루프마다 객체의 열거할 수 있는 프로퍼티의 이름을 지정된 변수에 대입하며, 이를 통해 루프 안에서 객체의 프로퍼티에 순차적으로 접근할 수 있다.

## for...of

### 문법

<br />

<code-group>
<code-block title="문법">

```js
for (변수 of 객체) {
  실행문;
}
```

</code-block>

<code-block title="예시">

```js
const array1 = ["a", "b", "c"];

for (const element of array1) {
  console.log(element);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
```

</code-block>
</code-group>

### 설명

`for...of` 문은 반복할 수 있는 객체(iterable objects)르 순회할 수 있도록 해주는 반복문이다.
자바스크립트에서 반복할 수 있는 객체에는 Array, Map, Set, String, TypedArray, arguments 객체 등이 있다.

:::tip Info
**TypedArray**란 ES2015에서 추가된 타입이 있는 배열로 기존 배열과는 다르게 값이 항상 8비트 정수 혹은 32비트 부동 소수점 등 primitive 숫자 값을 사용한다. 배열 내부의 모든 원소는 동일한 타입이며 배열 생성 후 길이를 변경할 수 없다.
:::

## forEach

### 문법

<br />

<code-group>
<code-block title="문법">

```js
배열.forEach(배열의 각 요소에 대해 실행할 콜백 함수);
```

</code-block>

<code-block title="예시">

```js
const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
```

</code-block>
</code-group>

### 설명

`forEach()` 메서드는 각 배열 요소에 대해 제공된 함수를 한 번씩 실행한다.
`map()`과 달리 `forEach()`는 항상 undefined를 반환하므로 메서드 체이닝을 할 수 없다.
`forEach()` 를 중단시키기 위해서는 예외를 발생시키는 방법 밖에 없다. 루프를 중지하는 동작이 필요하다면 `for` `for...of` `for...in` 과 같은 반복문을 사용하여 조기 종료 시키거나 `every()` `some()` `find()` `findIndex()`와 같은 배열 메서드로 순회를 즉시 중단할 수 있다.

::: warning Warning
`forEach()`는 동기 함수만을 콜백 함수로 사용할 수 있다. forEach 함수는 async 함수 내에서 사용되더라도 await를 처리하지 않기 때문에 주의해야한다.
:::
