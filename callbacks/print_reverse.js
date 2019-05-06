var getHTML = require('../step_5');
var connectionParams = {host:'sytantris.github.io',
  path:'/http-examples/step1.html'};

  function print_reverse (htmData) {
    // Prints the HTML document in revese

    console.log(htmData.split("").reverse().join(""));
  }
  getHTML(connectionParams, print_reverse);