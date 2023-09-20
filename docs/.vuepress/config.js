const getSidebarArr = require("./getSidebarArr");
const CONSTANT = require("./constants");

module.exports = {
  title: "Today Nor Learned",
  description: "오늘보다 성장할 내일을 위한 기록",
  head: [CONSTANT.LINK_STYLE.FONT_HACK, CONSTANT.LINK_STYLE.ICON_GOOGLE],
  themeConfig: {
    sidebar: getSidebarArr(),
    nav: [
      { text: "HOME", link: "/" },
      { text: "ABOUT", link: "/About" },
      { text: "TAG", link: "/TagList" },
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
      // {
      //   directories: [
      //     {
      //       id: "post",
      //       dirname: "_posts",
      //       path: "/post",
      //       itemPermalink: "/post/:slug",
      //     },
      //   ],
      // },
    ],
  ],
};
