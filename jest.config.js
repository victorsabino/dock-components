const esModules = ['@agm', 'ngx-bootstrap'].join('|');
const { defaults } = require('jest-config');

module.exports = {
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'vue'],
  transform: {
    "^.+\\.ts$": "ts-jest",
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.jsx?$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$": "jest-transform-stub"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  collectCoverage: false,
};