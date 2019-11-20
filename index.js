#!/usr/bin/env node

const os = require('os');
const chalk = require('chalk');
const yargs = require('yargs');
const fetch = require('./utils/fetch');
const transform = require('./utils/transform')
const log = console.log;
// accept user cli arguments
const options = yargs.usage('Usage: -n <name>').option('s', {
    alias: 'search',
    description: 'Search term',
    type: 'string',
    demandOption: true
}).option('l', {
    alias: 'limit',
    description: 'Limit of quote',
    type: 'string',
    demandOption: false
}).argv

// say Hello to the user
log(
    chalk.green(
        `Hello, ${os.userInfo().username} Welcome to: ${chalk.white.italic(
      'quotelab-cli'
    )}`
    )
);

const {
    search,
    limit = 5
} = options;

fetch(search)
    .then(res => {
        const {
            quotes
        } = res
        const text = transform(quotes.slice(0, limit))
        log(text)
    })
    .catch(err => log(err));