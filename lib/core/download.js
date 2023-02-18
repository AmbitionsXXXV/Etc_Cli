const download = require("download-git-repo");

const config = require("../../config");

// 下载代码模版
const Download = function (address, project) {
  download("github:" + address, project, function (err) {
    console.log(err ? "Error" : "Success");
  });
};

module.exports = Download;
