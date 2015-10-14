'use strict';

yaml = require('js-yaml');
fs   = require('fs');

// Get document, or throw exception on error

module.exports = function(grunt) {
  try {
    global.config = yaml.safeLoad(fs.readFileSync('./config.yaml', 'utf8'));
  } catch (e) {
    throw new Error('No config file found!');
  }

  require('load-grunt-config')(grunt);
};
