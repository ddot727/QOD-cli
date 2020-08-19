#!/usr/bin/env node
const axios = require('axios');
const chalk = require('chalk');

const URL = "https://quotes.rest/qod";

axios({
  method: 'get',
  url: URL,
  headers: { 'Accept': 'application/json' }
}).then(res => {
  const quote = res.data.contents.quotes[0].quote
  const author = res.data.contents.quotes[0].author
  const log = chalk.cyan(`${quote} ~ ${author}`)
  console.log(log)
}).catch(err => {
  const errMessage = chalk.red(err)
  console.log(errMessage)
});

program.parse(process.argv)