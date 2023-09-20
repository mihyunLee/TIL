/** 카테고리 자동 추가 */
function getSidebarArr() {
  const fs = require("fs");
  const docsPath = __dirname + "/../_posts/";
  const sidebarArr = [];
  const EtcFilelist = [];
  const filelist = fs.readdirSync(docsPath);

  filelist.forEach(function (file) {
    const stat = fs.lstatSync(docsPath + "/" + file);
    if (stat.isDirectory()) {
      // directory
      // title is file, children is readdirSync
      const docsFolderPath = docsPath + "/" + file;
      const list = fs.readdirSync(docsFolderPath);
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
  const path = folder ? "/_posts/" + folder + "/" : "/_posts/";
  const tmpMdfileList = [];

  mdfileList = aheadOfReadme(mdfileList);
  // remove .md, add Path
  mdfileList.forEach(function (mdfile) {
    if (mdfile.substr(-3) === ".md") {
      mdfile = mdfile.slice(0, -3) === "README" ? "" : mdfile.slice(0, -3);
      tmpMdfileList.push(path + mdfile);
    }
  });
  mdfileList = tmpMdfileList;

  // remove folder prefix number
  let title = "";
  if (folder) {
    const dotIdx = folder.indexOf(".");
    title = Number(folder.substr(0, dotIdx))
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
  const readmeIdx = arr.indexOf("README.md");
  if (readmeIdx > 0) {
    arr.unshift(arr.splice(readmeIdx, 1)[0]);
  }
  return arr;
}

module.exports = getSidebarArr;
