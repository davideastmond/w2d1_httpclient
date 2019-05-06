/* STEP 1 printing in chunks */
var httpsObject = require("https");
var requestOptions = {
  host: 'sytantris.github.io', 
  path: '/http-examples/step1.html'
};

function getAndPrintHTMLChunks(params) {
  httpsObject.get(params, (response)=> {

    response.setEncoding("utf8");
    response.on('data', data=> {
       console.log(data);
    });

    response.on('end', ()=> {
      console.log("completed.")
    });
  });
}
getAndPrintHTMLChunks(requestOptions);