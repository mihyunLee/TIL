---
tags: ["OOP", "SOLID", "DIP"]
---

# 의존성 역전 원칙 (DIP)

<Tags />

## 의존성 역전 원칙(DIP, Denepdency Inversion Principle)이란?

객체 지향 프로그래밍 및 설계의 5가지 기본 원칙(SOLID: SRP, OCP, LSP, ISP, DIP)중 하나이다.

의존성이란 특정한 모듈이 동작하기 위해 다른 모듈을 필요로 하는 것, 즉 의존하는 것을 의미한다.
의존성 역전 원칙은 "유연성이 극대화된 시스템"을 만들기 위한 원칙이다. 이것은 곧 코드 의존성이 추상에 의존하며 구체에는 의존하지 않는 것을 의미한다.

**추상**이란 구체적인 구현 방법이 포함되어 있지 않아 내부가 어떻게 구현되어 있는지 신경쓰지 않고 `내가 해줘야하는 일`과 `결과`만 신경쓸 수 있다.
반대로, **구체**의 경우 구체적인 일련의 동작과 흐름이 포함되어 있어 변경될 여지가 많다.
따라서 구체에 애플리케이션이 의존하게 된다면 구체가 변할 때 마다, 애플리케이션도 그에 맞춰서 변경해주어야 하는 번거로움이 발생한다.

## DIP 원칙 위반 예제와 수정된 코드

서비스 이용시 데이터를 가져오기 위해 fetch 함수에 토큰을 가져오는 로직을 구현하는 경우, 우리는 아래의 코드 패턴을 자주 사용한다.

```js
fetch("todos", {
  headers: {
    Authorization: localStorage.getItem("ACCESS_TOKEN"),
  },
});
```

위 코드에는 두 가지의 문제점이 존재한다.

1. `localStorage`라는 구체적인 사항에 의존하고 있어 추후에 sessionStorage나 cookieStorage 등 다른 storage로의 변경이 어렵다.
2. `localStorage`는 브라우저에서 제공하는 API로 언제나 변경될 수 있는 외부 요소이다. 외부에 변화가 생기게 되면 우리가 제어할 수 없기 때문에 직접적으로 의존하는 것은 좋지 않다.

따라서 외부 요소에 직접적으로 의존하는 코드를 최소화하고, 코드의 제어권을 애플리케이션 안으로 가져와야한다.

![제어권 변경](https://private-user-images.githubusercontent.com/51310674/269663161-e6b0850d-2726-4bcb-8fd6-52484e177ad0.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTUzMDkxNTEsIm5iZiI6MTY5NTMwODg1MSwicGF0aCI6Ii81MTMxMDY3NC8yNjk2NjMxNjEtZTZiMDg1MGQtMjcyNi00YmNiLThmZDYtNTI0ODRlMTc3YWQwLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzA5MjElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMwOTIxVDE1MDczMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQwY2Q3NTUxN2Y3OWUwZmM4MTdiOWE0ZWJlNDI1MTAwNGJhZjZhNDRkNDQ1N2RhN2YzOTIyMDZiYjdiOTQ5ZjEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.iDL_K8IpYZwSOOXwmdWNOR4DZBTU_iiZTYvg-tveRvk)

### Interface를 이용하여 추상적으로 정의하기

storage는 token을 관리하기 위해 사용된다.

1. 토큰 저장
2. 토큰 삭제
3. 저장된 토큰 가져오기

```js
// TokenStorage Interface

/*
	save(token:string):void
	get():string
	remove():void
*/
```

**Interface**란, 2개 이상의 장치나 소프트웨어 사이에 정보나 신호를 주고 받는 접점 혹은 경계면의 의미를 가지고 있다. 즉, 자세히 구현되어 있는 것은 없는 설계도와도 같다.

우리가 알고 있는 **API**도 Application Programming Interface로 서로 다른 Application이 통신하는 방법, Interface를 정해놓은 것이다.

### 기능 구현하기

위에서 정의한 TokenStorage Interface를 기반으로 토큰을 관리하는 기능을 구현해보자.

```js
// TokenStorage Interface

/*
	save(token:string):void
	get():string
	remove():void
*/

class LocalTokenStorage {
  #TOKEN_KEY = "ACCESS_TOKEN";

  save(token) {
    localStorage.setItem(this.#TOKEN_KEY, token);
  }

  get() {
    return localStorage.getItem(this.#TOKEN_KEY);
  }

  remove() {
    localStorage.removeItem(this.#TOKEN_KEY);
  }
}

const tokenStorage = new LocalTokenStorage();

// 코드에 적용
fetch("todos", {
  headers: {
    Authorization: tokenStorage.get(),
  },
});
```

이전 코드와는 다르게 현재 애플리케이션의 코드는 외부 요소인 localStorage를 LocalTokenStorage Class에서 관리할 수 있게 된다. 또한 LocalTokenStorage Class는 TokenStorage Interface를 기반으로 정의되었기 때문에 의존 관계가 형성되었다고 볼 수 있다.

만약, 외부 요소인 localStorage에 변경 사항이 생기더라도 내부에서 TokenStorage Interface에 맞춰 LocalTokenStorage Class만 변경해주면 되고, save, get, remove 3가지 메소드는 그대로 사용할 수 있게 되는 것이다.

## 의존성 방향 생각해보기

### 기존 코드

```js
fetch("todos", {
  headers: {
    Authorization: localStorage.getItem("ACCESS_TOKEN"),
  },
});
```

- 실행 흐름: fetch -> localStorage
- 의존성 방향: fetch -> localStorage

fetch는 localStorage에 의존하고 있기 때문에 만약 localStorage의 메서드가 `getItem` 에서 `bringItem`으로 변경되었다면 localStorage를 사용하고 있는 fetch 코드가 모두 수정되어야 한다.

```js
fetch("todos", {
  headers: {
    Authorization: localStorage.bringItem("ACCESS_TOKEN"),
  },
});

fetch("followers", {
  headers: {
    Authorization: localStorage.bringItem("ACCESS_TOKEN"),
  },
});

fetch("followings", {
  headers: {
    Authorization: localStorage.bringItem("ACCESS_TOKEN"),
  },
});
```

반면에 Interface를 이용한 코드의 의존성 방향과 실행 흐름은 아래와 같다.

### 변경된 코드

```js
// TokenStorage Interface

/*
	save(token:string):void
	get():string
	remove():void
*/

class LocalTokenStorage {
  #TOKEN_KEY = "ACCESS_TOKEN";

  save(token) {
    localStorage.setItem(this.#TOKEN_KEY, token);
  }

  get() {
    return localStorage.getItem(this.#TOKEN_KEY);
  }

  remove() {
    localStorage.removeItem(this.#TOKEN_KEY);
  }
}

const tokenStorage = new LocalTokenStorage();

// 코드에 적용
fetch("todos", {
  headers: {
    Authorization: tokenStorage.get(),
  },
});
```

- 실행 흐름: fetch -> TokenStorage Interface(추상) -> TokenStorage Class(구체)
- 의존성 방향: fetch -> TokenStorage Interface(추상) <- TokenStorage Class(구체)

이와 같이 구체가 아닌 추상에 대한 의존성을 중간에 추가하게 되면 특정 시점에서 코드의 실행 흐름(제어 흐름)과 의존성 방향이 반대로 뒤집히기 때문에 이를 **의존성 역전 원칙(DIP)** 이라고 부르며 **IoC(Inversion of Control)** 이라고도 표현한다.

DIP 원칙을 지키면 상대적으로 변경될 여지가 적은 추상적 요소에 의존하도록 설계할 수 있으며, 이는 OCP 원칙을 구현하는 것으로 이어진다.

:::tip Tip
OCP(Open Closed Principle)란, DIP와 같이 SOLID 원칙 중 하나로 기존의 코드를 변경하지 않으면서, 기능을 추가할 수 있도록 설계가 되어야 한다는 원칙이다.

보통 확장에 대해서는 개방적(open)이고, 수정에 대해서는 폐쇠적(closed)이어야 한다는 의미로 정의된다.

즉, 기능이 변경되어서 수정이 필요할 때 클래스 **확장을 통해 손쉽게 구현**하되 **확장에 따른 클래스 수정은 최소화** 하도록 프로그램을 설계하는 기법이다.
:::

## 의존성 주입 (DI, Dependency Injection)

의존성 주입이란 클래스 간 의존성을 클래스 내부가 아닌 외부에서 주입하는 것을 의미한다.

### 의존성 주입이 필요한 경우

```js
const log = (data) => console.log(data);
log("Hello, World");
```

만약 위의 코드처럼 콘솔에 data를 출력해주는 `log()` 함수를 만들었을 때 error, info, warn 등 다양한 방법으로 콘솔에 출력하고 싶다면 어떻게 해야할까?

```js
const consoleLog = (data) => console.log(data);
const consoleError = (data) => console.error(data);
const consoleInfo = (data) => console.info(data);
const consoleWarn = (data) => console.Warn(data);

consoleLog("Hello, World");
consoleError("Hello, World");
consoleInfo("Hello, World");
consoleWarn("Hello, World");
```

코드만 봐도 숨이 막히는 느낌이 들 것이다.
이를 의존성 주입을 통해 쉽게 해결할 수 있다.

```js
const log = (logger, data) => logger(data);

log(console.log, "Hello, World");
log(console.error, "Hello, World");
log(console.info, "Hello, World");
log(console.warn, "Hello, World");
log(customLogger, "Hello, World");
```

함수 내부에서 값을 지정하는 것이 아닌 함수 외부에서 매개변수로 전달받은 값을 사용하여 의존성 주입을 적용할 수 있다.
의존성 주입은 곧 프로그램의 유연성, 재사용성을 높여 코드의 유지보수를 쉽게 만든다.

### 의존성 주입 예제

아까의 토큰을 관리하는 예제로 돌아가 해당 코드의 의존성을 주입하면 아래의 코드가 된다.

```js
class LocalTokenStorage {
  #TOKEN_KEY = "ACCESS_TOKEN";

  save(token) {
    localStorage.setItem(this.#TOKEN_KEY, token);
  }

  get() {
    return localStorage.getItem(this.#TOKEN_KEY);
  }

  remove() {
    localStorage.removeItem(this.#TOKEN_KEY);
  }
}

class SessionTokenStorage {
  #TOKEN_KEY = "ACCESS_TOKEN";

  save(token) {
    sessionStorage.setItem(this.#TOKEN_KEY, token);
  }

  get() {
    return sessionStorage.getItem(this.#TOKEN_KEY);
  }

  remove() {
    sessionStorage.removeItem(this.#TOKEN_KEY);
  }
}

class HttpClient {
  constructor(baseURL, tokenStorage) {
    this.baseURL = baseURL;
    this.tokenStorage = tokenStorage;
  }

  fetch(url, options = {}) {
    return window.fetch(`${this.baseURL}${url}`, {
      ...options,
      headers: {
        Authorization: this.tokenStorage.get(),
        ...options.headers,
      },
    });
  }
}

// localStorage
const localTokenRepository = new LocalTokenStorage();
const httpClient = new HttpClient(process.env.BASE_URL, localTokenStorage);

// sessionStorage
const sessionTokenStorage = new SessionTokenStorage();
const httpClient = new HttpClient(process.env.BASE_URL, sessionTokenStorage);
```

의존성 주입을 적용하면 해당 모듈에서 직접적으로 의존성을 가지고 있지 않기 때문에 모듈 내부의 코드는 건들지 않고 모듈 외부의 일부 코드만 수정해서 동작을 변경할 수 있다.

## 의존성 주입의 장단점

### 의존성 주입의 장점

- 코드의 확장성, 유연성, 재사용성이 높아진다.
- 모듈 간 결합도가 낮기 때문에 변경 사항이 있을 때 수정의 범위가 적다.
- 유지보수가 쉬우며 테스트가 용이해진다.

### 의존성 주입의 단점

- 의존성 주입을 위해 정의해야할 클래스의 수가 늘어나면서 복잡성이 증가한다.
- 주입된 객체에 관한 코드 추적이 어렵다.
- 초기 개발 노력이 필요하다.

## 셀프 코멘트

원티드 프리온보딩을 복습하며 내용을 다시 보았는데 의존성 역전, 의존성 주입, ... 단어만 들었을 때는 이해가 되지 않았다.
코드를 다시 보니 개발할 때 많이 접했던 상황이었고, 변경사항이 있을 때마다 이리저리 코드를 보며 수정해왔던 나를 반성하게 되었다.

물론, 간단한 프로그램의 경우 의존성 주입의 적용은 설계에 대한 시간 소모가 커서 불필요하다고 생각한다. 하지만 어느 정도 규모가 있는 프로젝트라면 오히려 개발 속도와 유지보수에 많은 장점을 가져다 줄 수 있다고 생각한다.

미니 프로젝트를 여러개 해보면서 내가 왜 이렇게 설계했을까 후회했던 적이 많았는데 이번 개념을 알게 되면서 조금 더 나은 설계를 할 수 있길 기대한다 :D
