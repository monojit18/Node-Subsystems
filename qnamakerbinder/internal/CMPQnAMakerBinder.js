/*jshint esversion: 6 */

const CMPQnAMakerConstants = require("./CMPQnAMakerConstants");
const Semaphore = require("../node_modules/semaphore");
const HttpConnection = require("../node_modules/https_connection_binder");
const Utils = require("./Utils");
// const Utils = require("../node_modules/utility_helper");

class CMPQnAMakerBinder
{
    
    constructor(subscriptionKeyString, authKeyString)
    {
        
        const KRunningStateString = "Running";
        const KNotStartedStateString = "NotStarted";
        const _self = this;
        const _subscriptionKeyString = subscriptionKeyString;
        const _authKeyString = authKeyString;
        this.Semaphore = Semaphore(5);
        this.HttpConnection = HttpConnection;
        this.httpsClientProxy = null;

        var prepareHeaders = () =>
        {
            
            let headers = {};
            let noSubscription = (Utils.isNullOrEmptyString(_subscriptionKeyString) ==
                                    true);
            let noAuthorization = (Utils.isNullOrEmptyString(_authKeyString) ==
                                    true);

            if ((noSubscription && noAuthorization) == true)            
                return null;
            
            headers[CMPQnAMakerConstants.QnAMakerHeaders
                    .KSubscriptionKey] = subscriptionKeyString;

            return headers;
            
        };

        var prepareHttpConnection = (urlString) =>
        {

            if (Utils.isNullOrEmptyString(urlString) === true)
                return null;
            
            let headers = prepareHeaders();
            if (headers === null)
                return null;
                
            let proxy = (new _self.HttpConnection())
                                    .url(urlString)
                                    .headers(headers);
            return proxy;

        };

        this.prepareAuthorizationHeader = () =>
        {
            
            let headers = {};            
            let authorizationString = CMPQnAMakerConstants
                                        .QnAMakerHeaders
                                        .KEndpointToken + _authKeyString;
            headers[CMPQnAMakerConstants.QnAMakerHeaders.KAuthorization] =
                    authorizationString;
            return headers;
            
        };

        this.processArgumentNullErrorResponse = (responseCallback) =>
        {
            
            let evalError = new EvalError(CMPQnAMakerConstants.ExceptionMessages
                                                                .KArgumentNullMessage);
            responseCallback(null, evalError);

        };
        
        this.prepareJSONHttpConnection = (requestBody, urlString) =>
        {
            
            let proxy = prepareHttpConnection(urlString);
            if (Utils.isValidNonEmptyDictionary(proxy) === false)
                return null;

            if (Utils.isValidNonEmptyDictionary(requestBody) === true)                
                proxy = proxy.jsonBody(requestBody);

            proxy = proxy.build();
            return proxy;
            
        };

        this.prepareJSONHttpConnectionForAnswer = (requestBody, urlString) =>
        {
            
            let proxy = prepareHttpConnection(urlString);
            if (Utils.isValidNonEmptyDictionary(proxy) === false)
                return null;

            var headers = this.prepareAuthorizationHeader();
            proxy = proxy.headers(headers);

            if (Utils.isValidNonEmptyDictionary(requestBody) === true)                
                proxy = proxy.jsonBody(requestBody);

            proxy = proxy.build();
            return proxy;
            
        };
        
        this.performCheckStatusAsync = (checkStatusCallback) =>
        {
            
            if ((checkStatusCallback === null) ||
                (checkStatusCallback === undefined))
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
                if ((responseBody.operationState === KRunningStateString) ||
                    (responseBody.operationState === KNotStartedStateString))
                    _self.performCheckStatusAsync(checkStatusCallback);                
                else
                    checkStatusCallback(httpResponse);
                
            });            
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
        
        this.performPatchAsync = (responseCallback) =>
        {
            
            let proxy = _self.httpsClientProxy;            
            if (Utils.isValidNonEmptyDictionary(proxy) === false)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;

            }
            
            _self.performHttpAsync(responseCallback, proxy.patchAsync);
            
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
        
        this.performCreateAsync = (requestBody, responseCallback) =>
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
                
                let checkStatusURLString = CMPQnAMakerConstants.QnAMakerURLs
                                                                .KCheckStatusLoop +
                                                                location;
                _self.httpsClientProxy = _self.prepareJSONHttpConnection(
                                            null, checkStatusURLString);

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

        this.performGenerateAnswerAsync = (kbIdString, requestBody,
                                            responseCallback) =>
        {
            
            let urlString = CMPQnAMakerConstants.QnAMakerURLs.KGenerateAnswer
                                                                .format(kbIdString);
            _self.httpsClientProxy = _self.prepareJSONHttpConnectionForAnswer(
                                            requestBody, urlString);
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
        
        this.performPublishAsync = (kbIdString, responseCallback) =>
        {
            
            if (Utils.isNullOrEmptyString(kbIdString) === true)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            let urlString = CMPQnAMakerConstants.QnAMakerURLs.KPublishKnowledgeBase
                                                                .format(kbIdString);
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

        this.performDeleteKnowledgeBaseAsync = (item, responsesArray,
                                                    errorsArray,
                                                    responseCallback) =>
        {
            
            if (Utils.isValidNonEmptyDictionary(item) === false)            
                return;

            const self = this;
            self.Semaphore.take(()=>
            {

                let kbIdString = item.id;
                self.deleteKnowledgeBaseAsync(kbIdString,
                                                (responseBody, error) =>
                {

                    if (Utils.isValidNonEmptyDictionary(error) === true)
                    {
                                            
                        errorsArray.push(error);
                        self.Semaphore.leave();                        
                        return;

                    }

                    responsesArray.push(responseBody);                    
                    self.Semaphore.leave();

                    if (self.Semaphore.current === 0)            
                        responseCallback(responsesArray, errorsArray);

                });

            });
            
            
        };
        
        this.performPublishAsync = (kbIdString, responseCallback) =>
        {
            
            if (Utils.isNullOrEmptyString(kbIdString) === true)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            let urlString = CMPQnAMakerConstants.QnAMakerURLs.KPublishKnowledgeBase
                                                                .format(kbIdString);
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
        
        let urlString = CMPQnAMakerConstants.QnAMakerURLs.KGetKnowledgeBaseDetails
                                                            .format(kbIdString);
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
        
        let urlString = CMPQnAMakerConstants.QnAMakerURLs.KGetOperationDetails
                                                            .format(operationIdString);
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
        
        let urlString = CMPQnAMakerConstants.QnAMakerURLs.KDownloadKnowledgeBase
                                                            .format(kbIdString,
                                                                    environmentString);

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

    generateAnswerAsync(kbIdString, requestBody, responseCallback)
    {

        if (Utils.isValidNonEmptyDictionary(requestBody) === false)
        {

            this.processArgumentNullErrorResponse(responseCallback);
            return;

        }

        this.performGenerateAnswerAsync(kbIdString, requestBody, responseCallback);

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

            this.processArgumentNullErrorResponse(responseCallback);
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
        
        let urlString = CMPQnAMakerConstants.QnAMakerURLs.KReplaceKnowledgeBase
                                                            .format(kbIdString);
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
        
        let urlString = CMPQnAMakerConstants.QnAMakerURLs.KUpdateKnowledgeBase
                                                            .format(kbIdString);
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
        
        let urlString = CMPQnAMakerConstants.QnAMakerURLs.KRefreshEndpointKeys
                                                            .format(keyTypeString);
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
    
    deleteKnowledgeBaseAsync(kbIdString, responseCallback)
    {
        
        if (Utils.isNullOrEmptyString(kbIdString) === true)
        {

            responseCallback(null, null);
            return;

        }
        
        const self = this;
        let urlString = CMPQnAMakerConstants.QnAMakerURLs.KDeleteKnowledgeBase
                                                            .format(kbIdString);
        this.httpsClientProxy = this.prepareJSONHttpConnection(null,
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

    deleteAllKnowledgeBasesAsync(responseCallback)
    {
       
        const self = this;
        this.getKnowledgeBasesForUserAsync((responseBody, error) =>
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

            let knowldeBasesArray = responseBody.knowledgebases;
            if (Utils.isValidNonEmptyArray(knowldeBasesArray) === false)
            {
            
                responseCallback(null, error);
                return;

            }

            let knowledgeBasesCount = knowldeBasesArray.length;            
            self.Semaphore = (knowledgeBasesCount >= 5) ?
                                Semaphore(5) :
                                Semaphore(knowledgeBasesCount);

            knowldeBasesArray.forEach((item, index) =>
            {

                self.performDeleteKnowledgeBaseAsync(item, [], [],
                                                        responseCallback);
                                                        
            });

        });

    }
}

module.exports = CMPQnAMakerBinder;