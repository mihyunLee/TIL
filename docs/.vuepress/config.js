const getSidebarArr = require("./getSidebarArr");

module.exports = {
  title: "Today Nor Learned",
  description: "오늘보다 성장할 내일을 위한 기록",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/hack-font@3/build/web/hack.css",
      },
    ],
  ],
  themeConfig: {
    sidebar: getSidebarArr(),
    nav: [
      { text: "HOME", link: "/" },
      { text: "ABOUT", link: "/About" },
      { text: "BLOG", link: "https://codingmyoni.tistory.com/" },
      { text: "GITHUB", link: "https://github.com/mihyunLee" },
    ],
  },
  //레파지토리 이름 넣기
  base: "/TIL/",
  markdown: {
    lineNumbers: true,
    extendMarkdown: (md) => {
      md.use(require("markdown-it-task-lists"));
    },
  },
  plugins: [
    [
      "vuepress-plugin-code-copy",
      {
        color: "#acb1b7",
      },
    ],
    [
      "@vuepress/blog",
      {
        directories: [
          {
            id: "post",
            dirname: "_posts",
            path: "/post",
            itemPermalink: "/post/:year/:month/:day/:slug",
          },
        ],
      },
    ],
  ],
};
