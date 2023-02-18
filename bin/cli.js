#! /usr/bin/env node
const { program } = require("commander");

program.option("-f --framework <framework>", "choose a framework to use");
program.parse(process.argv);
