---
tags: ["Web 지식", "로깅 레벨"]
---

# 로깅 레벨

<Tags />

## 로깅 레벨(Logging Level)이란?

로깅 레벨(혹은 로그 레벨)은 로그 메시지의 중요도를 나타내는 수준을 의미한다.
로깅 레벨은 로깅 시스템에서 사용되며, 로그 메시지의 중요도에 따라 메시지를 기록할지 결정하는 데 사용된다.

보통 **log4j** 라이브러리를 활용하며, 크게 `DEBUG` `INFO` `WARN` `ERROR` `FATAL` 로 로그 레벨을 나누어 작성한다.

:::tip Tip
TRACE > DEBUG > INFO > WARN > ERROR > FATAL

WARN을 로그 레벨로 지정하게 되면 하위 레벨인 ERROR, FATAL까지 로그가 찍히게 된다.
:::

## 로깅 레벨 종류

### DEBUG

- 디버깅 목적으로 사용되며, 개발 단계에서 상세한 정보를 기록한다.
- 애플리케이션의 내부 동작을 이해하고 문제를 분석하는 데 도움을 준다.

### INFO

- 정보성 메시지를 기록한다.
- 애플리케이션의 주요 이벤트나 실행 상태에 대한 정보를 전달한다.

### WARN

- 경고성 메시지를 기록한다.
- 애플리케이션이 정상적으로 동작하지만 주의가 필요한 상황을 알려준다.

### ERROR

- 오류 메시지를 기록한다.
- 심각한 문제 또는 예외 상황을 나타내며, 애플리케이션의 정상적인 동작에 영향을 미칠 수 있는 문제를 알린다.

### FATAL

- 가장 심각한 오류 메시지를 기록한다.
- 애플리케이션의 동작을 중단시킬 수 있는 치명적인 오류를 나타내며 일반적으로 이러한 오류는 복구가 불가능하거나 매우 어려운 상황을 의미한다.
