var getHTML = require('../step_5');
var connectionParams = {host:'sytantris.github.io',
  path:'/http-examples/step1.html'};

function print_upperCase(htmldata) {
  // transforms the HTML string into ALL CAPS and prints to console.
  console.log(htmldata.toUpperCase());
}

getHTML(connectionParams, print_upperCase);