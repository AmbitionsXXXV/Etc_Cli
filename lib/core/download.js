const download = require("download-git-repo");
const ora = require("ora");

// 下载代码模版
const Download = function (address, project) {
  const spinner = ora().start();
  spinner.text = "模版下载中......";

  download("github:" + address, project, function (err) {
    console.log(err ? spinner.fail("Error") : spinner.succeed("模版下载成功"));
  });
};

module.exports = Download;
