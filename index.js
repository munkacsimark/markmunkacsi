#!/usr/bin/env node
'use strict';

const isDebug = require('./lib/is-debug-mode');
const readResumeFromFile = require('./lib/read-resume-from-file');
const showResume = require('./lib/show-resume');

const main = async () => {
  console.clear();
  console.log('Starting...');
  try {
    const resume = await readResumeFromFile('./resume.json');
    showResume(resume);
  } catch (error) {
    console.clear();
    console.log('Ooops. Some error happened.🐛');
    console.log('Please try https://codermark.dev instead.');
    if (isDebug) console.log(`\n${error}`);
  }
};

main();
