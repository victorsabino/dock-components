const esModules = ['@agm', 'ngx-bootstrap'].join('|');
const {defaults} = require('jest-config');

module.exports = {
    transformIgnorePatterns: [`/node_modules/(?!${esModules})`, '/assets/*'],
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'vue'],
    transform: {
        "^.+\\.ts$": "ts-jest",
        ".*\\.(vue)$": "vue-jest",
        "^.+\\.jsx?$": "babel-jest"
      },
    moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
    }
};