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

/** 카테고리 자동 추가 */
function getSidebarArr() {
  var fs = require("fs");
  var docsPath = __dirname + "/../_posts";
  var sidebarArr = [];
  var EtcFilelist = [];
  var filelist = fs.readdirSync(docsPath);
  filelist.forEach(function (file) {
    var stat = fs.lstatSync(docsPath + "/" + file);
    if (stat.isDirectory()) {
      // directory
      // title is file, children is readdirSync
      var docsFolderPath = docsPath + "/" + file;
      var list = fs.readdirSync(docsFolderPath);
      sidebarArr.push(makeSidebarObject(file, list));
    } else {
      // NOT directory
      // title is '/' children is file
      EtcFilelist.push(file);
    }
  });
  sidebarArr.push(makeSidebarObject("", EtcFilelist));
  return sidebarArr;
}

function makeSidebarObject(folder, mdfileList) {
  var path = folder ? "/_posts/" + folder + "/" : "/_posts/";

  mdfileList = aheadOfReadme(mdfileList);
  var tmpMdfileList = [];
  // remove .md, add Path
  mdfileList.forEach(function (mdfile) {
    if (mdfile.substr(-3) === ".md") {
      mdfile = mdfile.slice(0, -3) === "README" ? "" : mdfile.slice(0, -3);
      tmpMdfileList.push(path + mdfile);
    }
  });
  mdfileList = tmpMdfileList;

  // remove folder prefix number
  if (folder) {
    var dotIdx = folder.indexOf(".");
    var title = Number(folder.substr(0, dotIdx))
      ? folder.substr(dotIdx + 1)
      : folder;
  } else {
    title = "ETC";
  }

  return {
    title: title,
    children: mdfileList,
  };
}

function aheadOfReadme(arr) {
  // ['1.test.md','README.md'] => ['README.md','1.test.md']
  var readmeIdx = arr.indexOf("README.md");
  if (readmeIdx > 0) {
    arr.unshift(arr.splice(readmeIdx, 1)[0]);
  }
  return arr;
}
