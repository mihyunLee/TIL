<template lang="html">
  <div class="tags">
    <router-link
      v-for="tag in this.$page.frontmatter.tags"
      :key="tag"
      :to="{ path: `/TagList.html#${tag}` }"
    >
      #{{ tag }}
    </router-link>
  </div>
</template>

<style scoped>
.tags {
  display: flex;
  flex-wrap: wrap;
  margin: 30px 0;
}

a {
  margin-right: 10px;
  padding: 8px 12px;
  border-radius: 60px;
  background-color: #fafbfb;
  font-weight: 400;
  transition: all 0.2s ease-in-out;
}

a:hover {
  text-decoration: none !important;
  background-color: #f3f7f7;
}
</style>
