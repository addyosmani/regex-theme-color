'use strict';
module.exports = function () {
  return /(\W|^)<meta.*?name=("|\')theme-color("|\').*?content=("|\')(.*?)("|\')[^>]*>(\W|$)/g;
};
