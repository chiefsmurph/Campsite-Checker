var child_process = require('child_process');

//run tests every 10 minutes (1000 * 60 * 10)
setTimeout(function() {
  child_process.exec('npm test');
}, 1000);