const esModules = ['@agm', 'ngx-bootstrap'].join('|');
module.exports = {
    transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
};