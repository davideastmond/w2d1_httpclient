/* STEP 5 Printing with callbacks 
MODULE */
var httpsObject = require('https');
var connectionParams = {host:'sytantris.github.io',
  path:'/http-examples/step1.html'};

module.exports = function getHTML(params, callback, encodingParams= "utf8") {
  // Callback is a function
  var dataBuffer ="";
  httpsObject.get(params, response=> {
    response.setEncoding(encodingParams);

    response.on('data', data=> {
      dataBuffer += data;
    });

    response.on('end', ()=> {
      callback(dataBuffer);
    });
  });
};

function printHTML (html) {
  console.log(html);
}