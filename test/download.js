const download = require("download-git-repo");

download("github:AmbitionsXXXV/-", "./tmp", function (err) {
  console.log(err ? "Error" : "Success");
});
