'use strict';

var yaml = require('js-yaml');
var fs   = require('fs');

module.exports = function(grunt) {
  try {
    global.config = yaml.safeLoad(fs.readFileSync('./config.yaml', 'utf8'));
  } catch (e) {
    throw new Error('No config file found!');
  }

  require('load-grunt-config')(grunt);
};
