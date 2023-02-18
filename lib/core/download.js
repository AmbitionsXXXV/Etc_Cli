const download = require("download-git-repo");
const ora = require("ora");
const chalk = require("chalk");

// 下载代码模版
const Download = function (address, project) {
  const spinner = ora().start();
  spinner.text = "模版下载中......";

  download("github:" + address, project, function (err) {
    if (err) spinner.fail("Error");
    else {
      spinner.succeed("模版下载成功");
      console.log(chalk.green.bold("Finish!"), chalk.bold("please run:"));
      console.log("cd: " + project);
      console.log("npm install");
      console.log("npm run dev");
    }
  });
};

module.exports = Download;
