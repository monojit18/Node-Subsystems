# HttpConnection
A component for calling http(s) based web services or URIs/URLs wrapped around the famous request framework for nodejs.
It uses buikder pattern for configuring the component before calling the web services or URLs.
It still uses the classic callback mechanism to return data asynchronosuly to the caller. Promisify is the coming next....

## Exposed Classe(s)
CMPHttpConnectionProxy
This is the interface exposed to the outside world.

## Methods

- url(urlString)

Sets the URL of the resource to be accessed; returns the proxy instance 

- query(queryDictionary)

Sets the Query parameters for the resource to be accessed; returns the proxy instance 

- headers(headersDictionary)

Sets the Http Header parameters for the resource to be accessed; returns the proxy instance 

- jsonBody(bodyDictionary)

Sets the JSON body for the resource to be accessed; returns the proxy instance 

- urlEncodedBody(bodyDictionary)

Sets the URL-Encoded body for the resource to be accessed; returns the proxy instance 

- byteArrayBody(byteArray)

Sets the Byte array/Buffer body for the resource to be accessed; returns the proxy instance 

- build

End step of the configuration process; returns the proxy instance 

- getAsync(responseCallback)

Performs GET HTTP(S) call 

- postAsync(responseCallback)

Performs POST HTTP(S) call 

- putAsync(responseCallback)

Performs PUT HTTP(S) call 

- patchAsync(responseCallback)

Performs PATCH HTTP(S) call 

- deleteAsync(responseCallback)

Performs DELETE HTTP(S) call

## Usage

### getAsync

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


