<template lang="html">
  <div>
    <span v-for="tag in Object.keys(tags)">
      <h2 :id="tag">
        <router-link
          :to="{ path: `/TagList.html#${tag}` }"
          class="header-anchor"
          aria-hidden="true"
          >#</router-link
        >
        <span class="material-symbols-outlined"> sell </span>
        &nbsp;{{ tag }}
      </h2>
      <ul>
        <li v-for="page in tags[tag]">
          <router-link :to="{ path: page.path }">{{ page.title }}</router-link>
        </li>
      </ul>
    </span>
  </div>
</template>

<script>
export default {
  computed: {
    tags() {
      let tags = {};
      // 전체 게시글에서 태그들 가져오기
      for (let page of this.$site.pages) {
        for (let index in page.frontmatter.tags) {
          const tag = page.frontmatter.tags[index];
          if (tag in tags) {
            tags[tag].push(page);
          } else {
            tags[tag] = [page];
          }
        }
      }
      return tags;
    },
  },
};
</script>

<style>
.material-symbols-outlined {
  color: #acb1b7;
}
</style>
