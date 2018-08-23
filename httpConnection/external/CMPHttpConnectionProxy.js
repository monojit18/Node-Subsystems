/* jshint esversion: 6 */

const CMPHttpConnection = require("../internal/CMPHttpConnection");

class CMPHttpConnectionProxy
{
    
    constructor()
    {

        let _self = this;
        this.httpConnection = new CMPHttpConnection();

    }
    
    url(urlString)
    {

        this.httpConnection.url(urlString);
        return this;

    }

    query(queryDictionary)
    {

        this.httpConnection.query(queryDictionary);
        return this;

    }

    headers(headersDictionary)
    {

        this.httpConnection.headers(headersDictionary);
        return this;

    }

    jsonBody(bodyDictionary)
    {

        this.httpConnection.jsonBody(bodyDictionary);
        return this;

    }

    urlEncodedBody(bodyDictionary)
    {

        this.httpConnection.urlEncodedBody(bodyDictionary);
        return this;

    }
    
    byteArrayBody(byteArray)
    {

        this.httpConnection.byteArrayBody(byteArray);
        return this;

    }

    build()
    {

        this.httpConnection.build();
        return this;

    }
    
    getAsync(responseCallback)
    {

        this.httpConnection.getAsync(responseCallback);

    }

    postAsync(responseCallback)
    {

       this.httpConnection.postAsync(responseCallback);

    }
    
    putAsync(responseCallback)
    {

       this.httpConnection.putAsync(responseCallback);

    }
    
    patchAsync(responseCallback)
    {

        this.httpConnection.patchAsync(responseCallback);

    }
    
    deleteAsync(responseCallback)
    {

       this.httpConnection.deleteAsync(responseCallback);

    }

}

module.exports = CMPHttpConnectionProxy;