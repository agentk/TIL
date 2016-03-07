// Browser-sync config file
// http://www.browsersync.io/docs/options/
module.exports = {
  "ghostMode": false,
  "ui": false,
  "files": "_site/**/*",
  "server": {
    baseDir: "_site"
  },
  "port": 4001,
  "open": false,
  "reloadOnRestart": true,
  "notify": false
};
