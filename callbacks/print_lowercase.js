var getHTML = require('../step_5');
var connectionParams = {host:'sytantris.github.io',
  path:'/http-examples/step1.html'};

  function print_lowercase (htmlData) {
    console.log(htmlData.toLowerCase());
  }
  getHTML(connectionParams, print_lowercase);