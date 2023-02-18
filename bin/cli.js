#! /usr/bin/env node
const { program } = require("commander");
const etcFramework = require("../lib/core/etcFramework");
const etcCommander = require("../lib/core/etcCommander");

etcFramework(program);
etcCommander(program);

program.parse(process.argv);
