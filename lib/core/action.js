const inquirer = require("inquirer");
const download = require("download-git-repo");

const config = require("../../config");

const etcAction = async function (project, args) {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "framework",
      choices: config.framework,
      message: "which framework you want to use"
    }
  ]);
  // 下载代码模版
  download(
    "github:" + config.frameworkAddress[answer.framework],
    project,
    function (err) {
      console.log(err ? "Error" : "Success");
    }
  );
};

module.exports = etcAction;
