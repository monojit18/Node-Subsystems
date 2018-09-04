/*jshint esversion: 6 */

const CMPQnAMakerConstants = require("./CMPQnAMakerConstants");
const HttpConnectionRef = require("../node_modules/https_connection_binder");
const Utils = require("../node_modules/utility_helper");

class CMPQnAMakerBinder
{
    
    constructor(subscriptionKeyString)
    {
        
        const _self = this;
        const _subscriptionKeyString = subscriptionKeyString;        
        this.httpConnectionRef = HttpConnectionRef;
        this.httpsClientProxy = null;

        var prepareHeaders = function(responseCallback)
        {
            
            let headers = {};            
            if (Utils.isNullOrEmptyString(_subscriptionKeyString) == true)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;

            }
            
            headers[CMPQnAMakerConstants.QnAMakerHeaders.KSubscriptionKey] =
            subscriptionKeyString;

            return headers;
            
        };

        var prepareHttpConnection = function(urlString)
        {

            if (Utils.isNullOrEmptyString(urlString) === true)
                return null;
            
            let headers = prepareHeaders();            
            let proxy = (new _self.httpConnectionRef()).url(urlString)
                                                        .headers(headers);
            return proxy;

        };

        this.processArgumentNullErrorResponse = function(responseCallback)
        {
            
            let evalError = new EvalError(CMPQnAMakerConstants.ExceptionMessages
                                            .KArgumentNullMessage);
            responseCallback(null, evalError);

        };
        
        this.prepareJSONHttpConnection = function(requestBody, urlString)
        {
            
            let proxy = prepareHttpConnection(urlString);
            if (Utils.isValidNonEmptyDictionary(proxy) === false)
                return null;

            if (Utils.isValidNonEmptyDictionary(requestBody) === true)                
                proxy = proxy.jsonBody(requestBody);

            proxy = proxy.build();
            return proxy;
            
        };
        
        this.performCheckStatusAsync = function(checkStatusCallback)
        {
            
            if ((checkStatusCallback === null) || (checkStatusCallback === undefined))
            {

                _self.processArgumentNullErrorResponse(checkStatusCallback);
                return;

            }
            
            _self.performGetAsync((httpResponse) =>
            {
                                
                if (Utils.isValidNonEmptyDictionary(httpResponse.error) === true)
                {
                
                    checkStatusCallback(httpResponse);
                    return;

                }
                
                const responseBody = httpResponse.responseBody; 
                if ((responseBody.operationState === "Running") ||
                    (responseBody.operationState === "NotStarted"))
                    _self.performCheckStatusAsync(checkStatusCallback);                
                else
                    checkStatusCallback(httpResponse);
                
            });            
        };

        this.performHttpAsync = function(responseCallback, processCallback)
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
        
        this.performGetAsync = function(responseCallback)
        {
            
            let proxy = _self.httpsClientProxy;            
            if (Utils.isValidNonEmptyDictionary(proxy) === false)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;

            }
            
            _self.performHttpAsync(responseCallback, proxy.getAsync);
            
        };
        
        this.performPostAsync = function(responseCallback)
        {
            
            let proxy = _self.httpsClientProxy;            
            if (Utils.isValidNonEmptyDictionary(proxy) === false)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;

            }
            
            _self.performHttpAsync(responseCallback, proxy.postAsync);
            
        };
        
        this.performPutAsync = function(responseCallback)
        {
            
            let proxy = _self.httpsClientProxy;            
            if (Utils.isValidNonEmptyDictionary(proxy) === false)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;

            }
            
            _self.performHttpAsync(responseCallback, proxy.putAsync);
            
        };
        
        this.performPatchAsync = function(responseCallback)
        {
            
            let proxy = _self.httpsClientProxy;            
            if (Utils.isValidNonEmptyDictionary(proxy) === false)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;

            }
            
            _self.performHttpAsync(responseCallback, proxy.patchAsync);
            
        };
        
        this.performDeleteAsync = function(responseCallback)
        {
            
            let proxy = _self.httpsClientProxy;            
            if (Utils.isValidNonEmptyDictionary(proxy) === false)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;

            }
            
            _self.performHttpAsync(responseCallback, proxy.deleteAsync);
            
        };
        
        this.performCreateAsync = function(requestBody, responseCallback)
        {
            
            if (Utils.isValidNonEmptyDictionary(requestBody) === false)
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            _self.httpsClientProxy = _self.prepareJSONHttpConnection(requestBody,
                                                                        CMPQnAMakerConstants
                                                                        .QnAMakerURLs
                                                                        .KCreateKnowledgeBase);
            _self.performPostAsync((httpResponse) =>
            {
                
                if (Utils.isValidNonEmptyDictionary(httpResponse.error) === true)
                {
                
                    responseCallback(null, httpResponse.error);
                    return;

                }
                
                let headers = httpResponse.headers;
                if (Utils.isValidNonEmptyDictionary(headers) === false)
                {
                
                    responseCallback(null, null);
                    return;

                }
                
                let location = headers[CMPQnAMakerConstants.QnAMakerHeaders.KLocation];                
                if (Utils.isNullOrEmptyString(location) === true)
                {
                
                    responseCallback(null, null);
                    return;

                }
                
                let checkStatusURLString = CMPQnAMakerConstants.QnAMakerURLs.KCheckStatusLoop +
                                            location;
                _self.httpsClientProxy = _self.prepareJSONHttpConnection(null,
                                                                            checkStatusURLString);

                _self.performCheckStatusAsync((httpResponse) =>
                {

                    if (Utils.isValidNonEmptyDictionary(httpResponse.error) === true)
                    {

                        responseCallback(null, httpResponse.error);
                        return;

                    }

                    responseCallback(httpResponse.responseBody, null);

                });
                
            });
        };
        
        this.performPublishAsync = function(kbIdString, responseCallback)
        {
            
            if (Utils.isNullOrEmptyString(kbIdString) === true)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            let urlString = CMPQnAMakerConstants.QnAMakerURLs.KPublishKnowledgeBase.
                            format(kbIdString);
            _self.httpsClientProxy = _self.prepareJSONHttpConnection(null, urlString);

            _self.performPostAsync((httpResponse) =>
            {
                                
                if (Utils.isValidNonEmptyDictionary(httpResponse.error) === true)
                {
                
                    responseCallback(null, httpResponse.error);
                    return;

                }
                
                responseCallback(httpResponse.responseBody, null);
                
            });            
        };
    }
    
    checkStatusAsync(kbIdString, responseCallback)
    {
        
        if (Utils.isNullOrEmptyString(kbIdString) === true)
        {

            responseCallback(null, null);
            return;

        }
        
        let urlString = CMPQnAMakerConstants.QnAMakerURLs.KCheckStatus.format(kbIdString);
        this.httpsClientProxy = this.prepareJSONHttpConnection(null, urlString);
        
        this.performGetAsync((httpResponse) =>
        {
                            
            if (Utils.isValidNonEmptyDictionary(httpResponse.error) === true)
            {
            
                responseCallback(null, httpResponse.error);
                return;

            }
            
            responseCallback(httpResponse.responseBody, null);
            
        });  
    }
        
    createKnowledgeBaseAsync(requestBody, responseCallback)
    {

        if (Utils.isValidNonEmptyDictionary(requestBody) === false)
        {

            this.processArgumentNullErrorResponse(responseCallback);
            return;

        }
                    
        this.performCreateAsync(requestBody, responseCallback);

    }
    
    getKnowledgeBasesForUserAsync(responseCallback)
    {
        
        this.httpsClientProxy = this.prepareJSONHttpConnection(null,
                                                                CMPQnAMakerConstants
                                                                .QnAMakerURLs
                                                                .KGetKnowledgeBasesForUser);
        this.performGetAsync((httpResponse) =>
        {
                            
            if (Utils.isValidNonEmptyDictionary(httpResponse.error) === true)
            {
            
                responseCallback(null, httpResponse.error);
                return;

            }
            
            responseCallback(httpResponse.responseBody, null);
            
        });
    }
    
    getKnowledgeBaseDetailsAsync(kbIdString, responseCallback)
    {
        
        if (Utils.isNullOrEmptyString(kbIdString) === true)
        {

            responseCallback(null, null);
            return;

        }
        
        let urlString = CMPQnAMakerConstants.QnAMakerURLs.KGetKnowledgeBaseDetails.
                        format(kbIdString);
        this.httpsClientProxy = this.prepareJSONHttpConnection(null, urlString);

        this.performGetAsync((httpResponse) =>
        {
                            
            if (Utils.isValidNonEmptyDictionary(httpResponse.error) === true)
            {
            
                responseCallback(null, httpResponse.error);
                return;

            }
            
            responseCallback(httpResponse.responseBody, null);
            
        });
    }
    
    getOperationDetailsAsync(operationIdString, responseCallback)
    {
        
        if (Utils.isNullOrEmptyString(operationIdString) === true)
        {

            responseCallback(null, null);
            return;

        }
        
        let urlString = CMPQnAMakerConstants.QnAMakerURLs.KOperationDetails.
                        format(operationIdString);
        this.httpsClientProxy = this.prepareJSONHttpConnection(null, urlString);

        this.performGetAsync((httpResponse) =>
        {
                            
            if (Utils.isValidNonEmptyDictionary(httpResponse.error) === true)
            {
            
                responseCallback(null, httpResponse.error);
                return;

            }
            
            responseCallback(httpResponse.responseBody, null);
            
        });
    }
    
    getEndpointKeysAsync(responseCallback)
    {
        
        this.httpsClientProxy = this.prepareJSONHttpConnection(null,
                                                                CMPQnAMakerConstants
                                                                .QnAMakerURLs
                                                                .KEndpointKeys);

        this.performGetAsync((httpResponse) =>
        {
                            
            if (Utils.isValidNonEmptyDictionary(httpResponse.error) === true)
            {
            
                responseCallback(null, httpResponse.error);
                return;

            }
            
            responseCallback(httpResponse.responseBody, null);
            
        });
    }
    
    downloadAlterationsAsync(responseCallback)
    {
        
        this.httpsClientProxy = this.prepareJSONHttpConnection(null,
                                                                CMPQnAMakerConstants
                                                                .QnAMakerURLs
                                                                .KDownloadAlterations);

        this.performGetAsync((httpResponse) =>
        {
                            
            if (Utils.isValidNonEmptyDictionary(httpResponse.error) === true)
            {
            
                responseCallback(null, httpResponse.error);
                return;

            }
            
            responseCallback(httpResponse.responseBody, null);
            
        });
    }
    
    downloadKnowledgeBaseAsync(kbIdString, responseCallback)
    {
        
        if (Utils.isNullOrEmptyString(kbIdString) === true)
        {

            responseCallback(null, null);
            return;

        }
        
        let environmentString = params.environment;
        if (Utils.isNullOrEmptyString(environmentString) === true)
        {

            responseCallback(null, null);
            return;

        }
        
        let urlString = CMPQnAMakerConstants.QnAMakerURLs.KDownloadKnowledgeBase.
                            format(kbIdString, environmentString);

        this.httpsClientProxy = this.prepareJSONHttpConnection(null, urlString);

        this.performGetAsync((httpResponse) =>
        {
                            
            if (Utils.isValidNonEmptyDictionary(httpResponse.error) === true)
            {
            
                responseCallback(null, httpResponse.error);
                return;

            }
            
            responseCallback(httpResponse.responseBody, null);
            
        });
    }
    
    publishKnowledgeBaseAsync(kbIdString, responseCallback)
    {
        
        if (Utils.isNullOrEmptyString(kbIdString) === true)
        {

            responseCallback(null, null);
            return;

        }
        
        this.performPublishAsync(kbIdString, responseCallback);
        
    }
    
    createAndPublishKnowledgeBaseAsync(requestBody, responseCallback)
    {
        
        if (Utils.isValidNonEmptyDictionary(requestBody) === true)
        {

            this.processArgumentNullErrorResponse(response, responseCallback);
            return;

        }

        this.performCreateAsync(requestBody, (responseBody, error) =>
        {
            
            if (Utils.isValidNonEmptyDictionary(error) === true)
            {
            
                responseCallback(null, error);
                return;

            }
            
            if (Utils.isValidNonEmptyDictionary(responseBody) === false)
            {
            
                responseCallback(null, error);
                return;

            }
            
            let resourceLocationString = responseBody.resourceLocation;
            if (Utils.isNullOrEmptyString(resourceLocationString) === true)
            {

                responseCallback(response, null,  null);
                return;

            }

            let resourceLocationLength = CMPQnAMakerConstants.KnowledgeBases.length;                
            let kbIdString = resourceLocationString.slice(resourceLocationLength);
            this.performPublishAsync(kbIdString, responseCallback);

        });
    }
    
    replaceAlterationAsync(requestBody, responseCallback)
    {
        
        if (Utils.isValidNonEmptyDictionary(requestBody) === true)
        {

            this.processArgumentNullErrorResponse(responseCallback);
            return;

        }

        this.httpsClientProxy = this.prepareJSONHttpConnection(requestBody,
                                                                CMPQnAMakerConstants
                                                                .QnAMakerURLs
                                                                .KReplaceAlterations);
        this.performPutAsync((httpResponse) =>
        {
                            
            if (Utils.isValidNonEmptyDictionary(httpResponse.error) === true)
            {
            
                responseCallback(null, httpResponse.error);
                return;

            }
            
            responseCallback(httpResponse.responseBody, null);
            
        });
    }
    
    replaceKnowledgeBaseAsync(kbIdString, requestBody, responseCallback)
    {
        
        if (Utils.isValidNonEmptyDictionary(requestBody) === true)
        {

            this.processArgumentNullErrorResponse(responseCallback);
            return;

        }

        if (Utils.isNullOrEmptyString(kbIdString) === true)
        {

            responseCallback(response, null, null);
            return;

        }
        
        let urlString = CMPQnAMakerConstants.QnAMakerURLs.KReplaceKnowledgeBase.
                        format(kbIdString);
        this.httpsClientProxy = this.prepareJSONHttpConnection(requestBody,
                                                                urlString);

        this.performPutAsync((httpResponse) =>
        {
                            
            if (Utils.isValidNonEmptyDictionary(httpResponse.error) === true)
            {
            
                responseCallback(null, httpResponse.error);
                return;

            }
            
            responseCallback(httpResponse.responseBody, null);
            
        });
    }
    
    updateKnowledgeBaseAsync(kbIdString, requestBody, responseCallback)
    {
        
        if (Utils.isValidNonEmptyDictionary(requestBody) === true)
        {

            this.processArgumentNullErrorResponse(responseCallback);
            return;

        }

        if (Utils.isNullOrEmptyString(kbIdString) === true)
        {

            responseCallback(null, null);
            return;

        }
        
        let urlString = CMPQnAMakerConstants.QnAMakerURLs.KUpdateKnowledgeBase.
                        format(kbIdString);
        this.httpsClientProxy = this.prepareJSONHttpConnection(requestBody,
                                                                urlString);

        this.performPatchAsync((httpResponse) =>
        {
                            
            if (Utils.isValidNonEmptyDictionary(httpResponse.error) === true)
            {
            
                responseCallback(null, httpResponse.error);
                return;

            }
            
            responseCallback(httpResponse.responseBody, null);
            
        });
    }
    
    refreshEndpointKeysAsync(keyTypeString, requestBody, responseCallback)
    {
        
        if (Utils.isValidNonEmptyDictionary(requestBody) === true)
        {

            this.processArgumentNullErrorResponse(responseCallback);
            return;

        }

        if (Utils.isNullOrEmptyString(keyTypeString) === true)
        {

            responseCallback(null, null);
            return;

        }
        
        let urlString = CMPQnAMakerConstants.QnAMakerURLs.KRefreshEndpointKeys.
                        format(keyTypeString);
        this.httpsClientProxy = this.prepareJSONHttpConnection(requestBody,
                                                                urlString);

        this.performPatchAsync((httpResponse) =>
        {
                            
            if (Utils.isValidNonEmptyDictionary(httpResponse.error) === true)
            {
            
                responseCallback(null, httpResponse.error);
                return;

            }
            
            responseCallback(httpResponse.responseBody, null);
            
        });
                
    }
    
    deleteKnowledgeBaseAsync(kbIdString, requestBody, responseCallback)
    {
        
        if (Utils.isValidNonEmptyDictionary(requestBody) === true)
        {

            this.processArgumentNullErrorResponse(responseCallback);
            return;

        }

        if (Utils.isNullOrEmptyString(kbIdString) === true)
        {

            responseCallback(null, null);
            return;

        }
        
        let urlString = CMPQnAMakerConstants.QnAMakerURLs.KDeleteKnowledgeBase.
                        format(kbIdString);
        this.httpsClientProxy = this.prepareJSONHttpConnection(requestBody,
                                                                urlString);

        self.performDeleteAsync((httpResponse) =>
        {
                            
            if (Utils.isValidNonEmptyDictionary(httpResponse.error) === true)
            {
            
                responseCallback(null, httpResponse.error);
                return;

            }
            
            responseCallback(httpResponse.responseBody, null);
            
        });
    }
}

module.exports = CMPQnAMakerBinder;