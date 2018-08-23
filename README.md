# Reusable Components for NodeJS

Following are components written with NodeJS and ExpressJS frameworks primarily and can be plugged into any other nodejs based
project(s).

## HttpConnection
A component for calling http(s) based web services or URIs/URLs wrapped around the famous **request** framework for nodejs.
It uses buikder pattern for configuring the component before calling the web services or URLs.
It still uses the classic callback mechanism to return data asynchronosuly to the caller.
Promisify is the coming next....

### Exposed Classe(s)
**CMPHttpConnectionProxy**

  This is the interface exposed to the outside world.<br>
  **Methods**<br>

  **<li>url(urlString)</li>**
  Sets the URL of the resource to be accessed; returns the proxy instance
  <br>
  <br>
  **<li>query(queryDictionary)</li>**
  Sets the Query parameters for the resource to be accessed; returns the proxy instance
  <br>
  <br>
  **<li>headers(headersDictionary)</li>**
  Sets the Http Header parameters for the resource to be accessed; returns the proxy instance
  <br>
  <br>
  **<li>jsonBody(bodyDictionary)</li>**
  Sets the JSON body for the resource to be accessed; returns the proxy instance
  <br>
  <br>
  **<li>urlEncodedBody(bodyDictionary)</li>**
  Sets the URL-Encoded body for the resource to be accessed; returns the proxy instance
  <br>
  <br>
  **<li>byteArrayBody(byteArray)</li>**
  Sets the Byte array/Buffer body for the resource to be accessed; returns the proxy instance
  <br>
  <br>
  **<li>build</li>**
  End step of the configuration process; returns the proxy instance
  <br>
  <br>
  **<li>getAsync(responseCallback)</li>**
  Performs GET HTTP(S) call
  <br>
  <br>
  **<li>postAsync(responseCallback)</li>**
  Performs POST HTTP(S) call
  <br>
  <br>
  **<li>putAsync(responseCallback)</li>**
  Performs PUT HTTP(S) call
  <br>
  <br>
  **<li>patchAsync(responseCallback)</li>**
  Performs PATCH HTTP(S) call
  <br>
  <br>
  **<li>deleteAsync(responseCallback)</li>**
  Performs DELETE HTTP(S) call

### Usage
#### getAsync
    const _express = Express();
    const CMPHttpConnectionProxy = require("httpconnection");
    ....
    _express.get('/getTest', (req, res) =>
    {

        let proxy = (new CMPHttpConnectionProxy())
                                                .url("https://jsonplaceholder.typicode.com/todos/1")
                                                .build();
        proxy.getAsync((response) =>
        {

            console.log(response);
            res.send(response.responseBody);    

        });

    });
    
    _express.post('/postTest', (req, res) =>
    {

        let body = { "title" : "This is a test" };

        let proxy = (new CMPHttpConnectionProxy())
                                                .url("https://jsonplaceholder.typicode.com/posts")
                                                .jsonBody(body)
                                                .build();
        proxy.postAsync((response) =>
        {

            console.log(response);
            res.send(response.responseBody);    

        });
    });
    






