<template>
  <div>
    <div class="titleContainer">
      <h1><span>오늘보다 성장할 내일을 위한</span> <br />노르의 틈새 기록</h1>
      <div class="infoContainer">
        <div class="infoTitle">
          <span>Nor's TIL</span> <br />
          <span>:{{ $description }}✍️</span>
        </div>
        <ul>
          <li>
            <!-- 
							FIXME: 컴포넌트가 렌더링 되지만 아이콘이 보이지 않음 
							ref: https://github.com/vuejs/vuepress/issues/2072
						-->
            <!-- <font-awesome-icon icon="user-secret" /> -->
            <span>Seoul, Republic of Korea</span>
          </li>
          <li>
            <a href="mailto:mihy621@gmail.com">mihy621@gmail.com</a>
          </li>
          <li>
            <a href="https://github.com/mihyunLee">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
h1 span {
  font-family: "Tenada";
  color: #acb1b7;
}

li a,
li span {
  font-family: "Hack", monospace;
  color: #3eaf7c;
}

.infoContainer {
  display: flex;
}
.infoTitle {
  flex: 1;
  font-family: "Nunito Sans";
  font-weight: 900;
  font-size: 2rem;
}

.infoTitle span:nth-child(3) {
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;
  font-size: 1.4rem;
}
</style>
