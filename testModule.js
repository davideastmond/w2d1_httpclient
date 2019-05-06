// Imports the module and uses it
var getHTML = require('./step_5');
var connectionParams = {host:'sytantris.github.io',
  path:'/http-examples/step1.html'};

function printHTML(data) {
  console.log(data);
}

getHTML(connectionParams, printHTML);
