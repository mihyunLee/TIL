---
tags: ["Git", "cherry-pick"]
---

# 체리픽 (cherry-pick)

<Tags />

## cherry-pick은 언제 사용할까?

cherry-pick은 다른 branch에 있는 commit 중에서 원하는 commit을 현재의 branch로 가져오고 싶을 때 사용한다.

commit이 실제로 branch 간에 이동되는 것이 아니라, commit을 복사하여 다른 branch에 붙여넣는 개념이다.

:::tip
cherry pick은 '케이크 위에 얹어져 있는 체리만 집어 먹는 행위'라는 뜻에서 비유한 것으로 자신이 정확하게 원하는 부분만 취하는 행위를 두루 일컫는 말이라고 한다. ([namu wiki](https://namu.wiki/w/%EC%B2%B4%EB%A6%AC%ED%94%BC%ED%82%B9))
:::

## cherry-pick을 사용할 때 주의사항

어떻게 보면 필요한 것만 가져올 수 있으니 유용하다고 생각할 수 있지만, 같은 commit이 중복되는 일이 발생할 수 있어 보통은 일반적인 merge를 사용하는 것이 권장된다.

:::tip _cherry-pick이 유용한 상황_

1. 팀으로 협업할 때

   협업 중에 다른 동료가 만들고 있는 기능이 필요할 때 사용한다.
   해당 기능을 이미 만들어 동료의 branch에 push되어 있지만, merge 할 때까지 시간이 걸린다면 필요한 commit만 골라서 가져올 때 사용한다.

2. 버그를 수정할 때

   새로운 기능을 개발하는 동안 개발해두었던 기존 기능에서 버그가 발견되었을 때, 해당 버그를 패치하기 위해 명시적 커밋을 만들고 해당 커밋만 골라서 branch에 배포한다.
   이로써 버그를 빠르게 패치하여 배포 사이트에 바로 반영할 수 있다.

3. 반영되지 않은 손실된 커밋 복원 (pull request)

   실수로 pull request를 merge 하기 전에 닫아버렸을 때, cherry-pick을 사용해 해당 commit을 가져와 살릴 수 있다.

:::

## 사용 방법

1. 커밋 hash 확인하기

우선, 현재 가져올 커밋의 hash를 확인해야한다.
복사할 커밋이 있는 branch에서 아래의 명령어를 실행한다.

```bash
$ git log --oneline
```

![log](https://user-images.githubusercontent.com/51310674/269364422-c174e99c-226f-4953-ab04-750a847a3d36.png)

`git log` 명령어를 통해 커밋을 확인하고, 좌측에 있는 커밋 hash(6자리)를 확인한다.
만약 두 번째에 위치한 'blog 플러그인 디렉토리 설정 변경' 커밋을 가져오고 싶다면 커밋 hash는 `32cd990`이다.

2. 붙여넣기할 branch로 이동 후 cherry-pick 진행

```bash
# branch 이동
$ git switch <commit을 붙여넣을 branch>

# cherry-pick 사용
# ex) git cherry-pick 32cd990
$ git cherry-pick <commit hash>
```

여러개의 commit을 가져오고 싶다면 아래와 같이 진행하면 된다.

```bash
# 나눠서 진행
$ git cherry-pick d86551f
$ git cherry-pick 32cd990


# 한번에 진행
$ git cherry-pick d86551f 32cd990

```

## cherry-pick시 충돌이 날 경우

cherry-pick하려는 commit과 내 branch 사이에 충돌이 발생할 경우 두 가지 옵션으로 해결할 수 있다.

### 충돌 해결 후, cherry-pick 진행

1. 충돌이 발생한 코드를 수정한다.
2. `git add <충돌 파일 경로>`로 충돌을 해결한 코드 추가
3. `git cherry-pick --continue`로 cherry-pick을 계속 진행

### cherry-pick 중단

1. `git cherry-pick -abort` 명령어를 통해 cherry-pick이 중단되며, cherry-pick 이전의 상태로 돌아간다.

## merge commit에 대해 cherry-pick을 할 경우

```bash
$ git cherry-pick -m 1 <merge commit hash>
```
