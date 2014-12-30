'use strict';
module.exports = function () {
  return /(\W|^)<meta(.*?((name=("|\')theme-color("|\').*?(content=("|\')(.*?)("|\'))))|.*?((content=("|\')(.*?)("|\')).*?(name=("|\')theme-color("|\'))))[^>]*>(\W|$)/g;
};