#!/bin/sh/env node

const os = require('os');
const chalk = require('chalk');
const log = console.log;
log(
  chalk.green(
    `Hello, ${os.userInfo().username} Welcome to: ${chalk.white.italic(
      'quotelab-cli'
    )}`
  )
);
