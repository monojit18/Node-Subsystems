const Express = require('express');
const BodyParser = require('body-parser');
const Http = require("http");

const _express = Express();
const _httpServer = Http.createServer(_express);
const CMPHttpConnectionProxy = require("./HttpConnection/External/CMPHttpConnectionProxy");

_express.use(BodyParser.urlencoded
({

    extended: true

}));

_express.get('/', (req, res) =>
{
    res.send('Welcome to test HttpConnection component\n');
    
});

_express.get('/getTest', (req, res) =>
{
    
//    var proxy = (new CMPHttpConnectionProxy()).url("https://jsonplaceholder.typicode.com/todos/10")
//                                              .build();
    
    var headers = {"Ocp-Apim-Subscription-Key" : "53e8a0d56803437894ad3eccf6145a16"}
    var proxy = (new CMPHttpConnectionProxy()).url("https://api.cognitive.microsofttranslator.com/languages?api-version=3.0&scope=translation,transliteration,dictionary").headers(headers).build();
    
    proxy.getAsync((response) =>
    {
        
        console.log(response);
        res.send(response.response);    
        
    });
    
});

_express.post('/postTest', (req, res) =>
{
        
    var body = [{"Text" : "This is a Test Translation"}]
    var headers = {"Ocp-Apim-Subscription-Key" : "53e8a0d56803437894ad3eccf6145a16"}
    
    var proxy = (new CMPHttpConnectionProxy()).url("https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=hi").jsonBody(body).headers(headers).build();
    
    proxy.postAsync((response) =>
    {
        
        console.log(JSON.stringify(response.response));
        res.send(response.response);
        
    });
    
    
});

let port = (process.env.PORT || 7005);
let host = "0.0.0.0";
_httpServer.listen(port, host, function ()
{

    console.log(`HttpConnection component started the server on port ${_httpServer.address().port}\n`);

});

_httpServer.on("close", function ()
{

    console.log("We are Closing\n");    


});

process.on("SIGINT", function()
{
    _httpServer.close();

});
