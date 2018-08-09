const HttpsClient = require("../../node_modules/request");
const Url = require("../../node_modules/url");
const StreamBuffers = require("../../node_modules/stream-buffers");
const CMPHttpConstants = require("./CMPHttpConstants");
const CMPHttpResponse = require("./CMPHttpResponse");

class CMPHttpConnection
{
        
    constructor()
    {
        
        let _self = this;
        
        this.urlString = null;
        this.byteArray = [];
        this.queryDictionary = {};
        this.headersDictionary = {};
        this.bodyDictionary = {};
        this.contentTypeEnum = CMPHttpConstants.ContentTypeEnum.KApplicationJson;
        this.requestOptions = { "json" : false };
        
        this.isValidNonEmptyDictionary = function(dictionaryRef)
        {

            return ((dictionaryRef !== null) && (dictionaryRef !== undefined) &&
                    (Object.keys(dictionaryRef).length > 0));

        };

        this.isNullOrEmptyString = function(stringRef)
        {

            return ((stringRef === null) || (stringRef === undefined) ||
                    (stringRef.length <= 0));

        };
        
        this.prepareContentType = function()
        {

            switch (this.contentTypeEnum)
            {

                case CMPHttpConstants.ContentTypeEnum.KApplicationJson:
                {
                    return ("application/json");
                }                    
                case CMPHttpConstants.ContentTypeEnum.KXXXUrlEncoded:
                {
                    return ("application/x-www-form-urlencoding");
                }                
                case CMPHttpConstants.ContentTypeEnum.KByteArrayData:
                {
                    return ("application/octet-stream");
                }
                case CMPHttpConstants.ContentTypeEnum.KMultipartFormData:
                {
                    return ("multipart/form-data");

                }
                default:
                {

                    return ("application/json");

                }
            }

        };
        
        this.prepareContent = function()
        {

            switch (this.contentTypeEnum)
            {

                case CMPHttpConstants.ContentTypeEnum.KApplicationJson:
                {
                    
                    if (this.isValidNonEmptyDictionary(this.bodyDictionary) === false)
                        return;
                    
                    this.requestOptions.body = this.bodyDictionary;
                    this.requestOptions.json = true;                    

                }
                    break;
                
                case CMPHttpConstants.ContentTypeEnum.KXXXUrlEncoded:
                {
                    
                    if (this.isValidNonEmptyDictionary(this.bodyDictionary) === false)
                        return;
                    
                    this.requestOptions.form = this.bodyDictionary;
                    
                }
                    break;
                
                case CMPHttpConstants.ContentTypeEnum.KByteArrayData:
                {
                    
                    var byteBuffer = Buffer.from(this.byteArray);
                    this.requestOptions.body = byteBuffer;                    
                }
                    break;
                    
//                case CMPHttpConstants.ContentTypeEnum.KMultipartFormData:
//                {
//                    return ("multipart/form-data");
//
//                }                
            }

        };
        
        this.prepareResponse = function(response, responseBody)
        {

            let httpResponse = new CMPHttpResponse(responseBody,
                                                   response.statusCode,
                                                   response.statusMessage);
            return httpResponse;        

        };
    
        this.prepareError = function(error)
        {

            let httpResponse = new CMPHttpResponse(null, -1, error);
            return httpResponse; 

        };
        
        this.performAsync = function(responseCallback)
        {

            try
            {

                HttpsClient(this.requestOptions, function(error, response, responseBody)
                {

                    var httpResponse = null;

                    if (error !== null)                    
                        httpResponse = _self.prepareError(error);
                    else
                        httpResponse = _self.prepareResponse(response, responseBody);

                    responseCallback(httpResponse);

                });

            }
            catch(exception)
            {

                let error = new Error(exception.message);
                let httpResponse = _self.prepareError(error);
                responseCallback(httpResponse);

            }
                
        };    
    
    }
    
    url(urlString)
    {
        
        this.urlString = urlString.slice(0);
        return this;
        
    };
    
    query(queryDictionary)
    {
        
        if (this.isValidNonEmptyDictionary(queryDictionary) === false)
            return this;
    
        this.queryDictionary = JSON.parse(JSON.stringify(queryDictionary)); 
        return this;
        
    };
    
    headers(headersDictionary)
    {
        
         if (this.isValidNonEmptyDictionary(headersDictionary) === false)
            return this;
        
        this.headersDictionary = JSON.parse(JSON.stringify(headersDictionary)); 
        return this;
        
    };
    
    jsonBody(bodyDictionary)
    {

         if (this.isValidNonEmptyDictionary(bodyDictionary) === false)
            return this;
    
        this.bodyDictionary = JSON.parse(JSON.stringify(bodyDictionary));
        return this;
      
    };
    
    urlEncodedBody(bodyDictionary)
    {

        this.contentTypeEnum = ContentTypeEnum.KXXXUrlEncoded;        
        this.jsonBody(bodyDictionary);
        return this;

    };
    
    byteArrayBody(byteArray)
    {

        this.contentTypeEnum = ContentTypeEnum.KByteArrayData;        
        this.byteArray = byteArray.slice();        
        return this;

    };
    
    build()
    {
        
        var contentTypeString = this.prepareContentType();
        this.headersDictionary[CMPHttpConstants.ContentType] = contentTypeString;
        
        this.requestOptions.url = this.urlString;
        this.requestOptions.qs = this.queryDictionary;
        this.requestOptions.headers = this.headersDictionary;
                
    };
    
    getAsync(responseCallback)
    {

        this.requestOptions.method = CMPHttpConstants.HttpMethod.get;
        this.performAsync(responseCallback);

    };
    
    postAsync(responseCallback)
    {

        this.requestOptions.method = CMPHttpConstants.HttpMethod.post;
        this.prepareContent();
        this.performAsync(responseCallback);        

    };
    
    putAsync(responseCallback)
    {

        this.requestOptions.method = CMPHttpConstants.HttpMethod.put;
        this.prepareContent();
        this.performAsync(responseCallback);        

    };
    
    deleteAsync(responseCallback)
    {

        this.requestOptions.method = CMPHttpConstants.HttpMethod.delete;
        this.prepareContent();
        this.performAsync(responseCallback);        

    };
    
}

module.exports = CMPHttpConnection;
