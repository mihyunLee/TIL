---
tags: ["React", "useEffect"]
---

# useEffect 알아보기

<Tags />

### useEffect의 호출시기

useEffect()는 컴포넌트가 렌더링 되는 중에 호출 된다.
Component도 일반 함수와 같이 호출되며, Component()가 호출될 때 `useState() 호출 -> useEffect() 호출 -> "Component" 리턴`의 순서로 코드가 실행된다.

```js
function a() {
  foo();
  bar();

  return "A";
}

function Component() {
  useState();
  useEffect(effect, deps);

  return "Copmonent";
}
```

다시 말해, 아래와 같이 정리할 수 있다.

1. **Component Mount 단계**

   - useEffect() 호출
   - storage 안에 effect callback, deps 저장
   - rendering completed
   - effect callback 호출

2. **Component re-render**

   - useEffect() 호출
   - storage -> old deps, new deps 비교
     - deps가 변경되었을 경우
       - effect callback을 storage에 저장
       - component rendering
       - effect callback 호출
     - deps가 변경되지 않았을 경우
       - component rendering

:::warning
React에서 re-render는 상태 값이 변경될 때 발생한다.
예시로 `Ref` 같은 경우 Component를 re-render 시키지 않는다.
따라서 useEffect에서 `Ref`를 사용한다고 해서 useEffect의 의존성 배열에 추가했을 때, Ref(혹은 Ref의 current)가 변경되더라도 useEffect를 호출시킬 전제가 되지 않기 때문에 의존성 배열에 넣는 의미가 없어진다.

만약 useEffect 내에서 Ref를 사용하고 있다는 의미를 표현하고 싶다면, Ref.current가 아닌 Ref 자체를 의존성 배열에 넣어주자.

추가로, Ref.current는 변경이 될 수 있지만, Ref 자체는 setState와 같이 변경되지 않는 객체이다.
:::
