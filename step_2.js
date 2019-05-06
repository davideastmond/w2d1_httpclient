/* STEP 2 - Printing with buffered strings 
Use buffering technique to append each chunk of data to a variable as
it is received, then console log once all data is receieved.*/

var httpsObject = require("https");
var connectionSettings = {host:'sytantris.github.io',
  path:'/http-examples/step1.html'}

function getAndPrintHTML(connectionParams, encodingParams="utf8") {
  var dataBuffer ="";
  httpsObject.get(connectionParams, response=> {
    response.setEncoding(encodingParams);

    response.on('data', data=> {
      dataBuffer += data;
    });

    response.on('end', ()=> {
      // Print the entire buffer
      console.log(dataBuffer);
    })
  })
}
getAndPrintHTML(connectionSettings);