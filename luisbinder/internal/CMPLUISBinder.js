/*jshint esversion: 6 */

const CMPLUISConstants = require("./CMPLUISConstants");
const HttpConnectionRef = require("../node_modules/https_connection_binder");
// const Utils = require("../commons/Utils");
const Utils = require("../node_modules/utility_helper");

class CMPLUISBinder
{
    
    constructor(subscriptionKeyString, regionKeyString)
    {
        
        const _self = this;
        const _subscriptionKeyString = subscriptionKeyString;
        this.regionKeyString = regionKeyString;
        this.httpConnectionRef = HttpConnectionRef;
        this.httpsClientProxy = null;
        
        var prepareHeaders = (responseCallback) =>
        {
            
            let headers = {};            
            if (Utils.isNullOrEmptyString(_subscriptionKeyString) == true)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;

            }
            
            headers[CMPLUISConstants.LUISHeaders.KSubscriptionKey] =
                    _subscriptionKeyString;
            
            return headers;
            
        };

        var prepareHttpConnection = (requestBody, urlString) =>
        {

            if (Utils.isNullOrEmptyString(urlString) === true)
                return null;
            
            let headers = prepareHeaders();            
            let proxy = (new _self.httpConnectionRef()).url(urlString)
                                                        .headers(headers);

            if (Utils.isValidNonEmptyDictionary(requestBody) === true)                
                proxy = proxy.jsonBody(requestBody);

            return proxy;

        };

        this.processArgumentNullErrorResponse = (responseCallback) =>
        {
            
            let evalError = new EvalError(CMPLUISConstants.ExceptionMessages
                                            .KArgumentNullMessage);
            responseCallback(null, evalError);

        };
        
        this.prepareJSONHttpConnection = (requestBody, urlString) =>
        {
            
            let proxy = prepareHttpConnection(requestBody, urlString);
            if (Utils.isValidNonEmptyDictionary(proxy) === false)
                return null;

            proxy = proxy.build();
            return proxy;
            
        };

        this.prepareJSONQueryHttpConnection = (requestBody,
                                                queryDictionary,
                                                urlString) =>
        {
            
            let proxy = prepareHttpConnection(requestBody, urlString);
            if (Utils.isValidNonEmptyDictionary(proxy) === false)
                return null;

            if (Utils.isValidNonEmptyDictionary(queryDictionary) === true)                
                proxy = proxy.query(queryDictionary);

            proxy = proxy.build();
            return proxy;
            
        };

        this.performHttpAsync = (responseCallback, processCallback) =>
        {

            if ((responseCallback === null) || (responseCallback === undefined))
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            processCallback.call(_self.httpsClientProxy, (httpResponse) =>
            {

                if (Utils.isValidNonEmptyDictionary(httpResponse.error) === true)
                {
                
                    responseCallback(null, httpResponse.error);
                    return;

                }

                responseCallback(httpResponse, null);

            });
        };
        
        this.performGetAsync = (responseCallback) =>
        {
            
            let proxy = _self.httpsClientProxy;            
            if (Utils.isValidNonEmptyDictionary(proxy) === false)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;

            }
            
            _self.performHttpAsync(responseCallback, proxy.getAsync);
            
        };
        
        this.performPostAsync = (responseCallback) =>
        {
            
            let proxy = _self.httpsClientProxy;            
            if (Utils.isValidNonEmptyDictionary(proxy) === false)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;

            }
            
            _self.performHttpAsync(responseCallback, proxy.postAsync);
            
        };
        
        this.performPutAsync = (responseCallback) =>
        {
            
            let proxy = _self.httpsClientProxy;            
            if (Utils.isValidNonEmptyDictionary(proxy) === false)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;

            }
            
            _self.performHttpAsync(responseCallback, proxy.putAsync);
            
        };
        
        this.performDeleteAsync = (responseCallback) =>
        {
            
            let proxy = _self.httpsClientProxy;            
            if (Utils.isValidNonEmptyDictionary(proxy) === false)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;

            }
            
            _self.performHttpAsync(responseCallback, proxy.deleteAsync);
            
        };

    }
    
}

module.exports = CMPLUISBinder;