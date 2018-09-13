/*jshint esversion: 6 */

const CMPLUISConstants = require("./CMPLUISConstants");
const HttpConnectionRef = require("../node_modules/https_connection_binder");
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
        
        var prepareHeaders = function(responseCallback)
        {
            
            let headers = {};            
            if (Utils.isNullOrEmptyString(_subscriptionKeyString) == true)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;

            }
            
            headers[CMPLUISConstants.LUISHeaders.KSubscriptionKey] =
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
            
            let evalError = new EvalError(CMPLUISConstants.ExceptionMessages
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

        this.performCreateEntityAsync = function(appConfigInfo, requestBody,
                                                    responseCallback)
        {
            
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;
    
            }

            if (Utils.isValidNonEmptyDictionary(requestBody) === false)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            let urlString = "";
            let entityOption = appConfigInfo.entityOption;
            switch(entityOption)
            {

                case CMPLUISConstants.EntityOptions.KEntities:
                {

                    urlString = CMPLUISConstants.LUISURLs.KEntities
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString);

                }                                
                    break;

                case CMPLUISConstants.EntityOptions.KCompositeEntities:
                {
    
                    urlString = CMPLUISConstants.LUISURLs.KCompositeEntities
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KListEntities:
                {
    
                    urlString = CMPLUISConstants.LUISURLs.KListEntities
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KHierarchialEntities:
                {
    
                    urlString = CMPLUISConstants.LUISURLs.KHierarchialEntities
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString);
    
                }
                    break;
                
                case CMPLUISConstants.EntityOptions.KRegExEntities:
                {
    
                    urlString = CMPLUISConstants.LUISURLs.KRegExEntities
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KPreBuiltEntitiesList:
                {
    
                    urlString = CMPLUISConstants.LUISURLs.KPreBuiltEntitiesList
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString);
    
                }
                    break;
                
                case CMPLUISConstants.EntityOptions.KPreBuiltDomain:
                {
    
                    urlString = CMPLUISConstants.LUISURLs.KPreBuiltDomain
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString);
    
                }
                    break;

            }

            _self.httpsClientProxy = this.prepareJSONHttpConnection(requestBody,
                                                                    urlString);
            _self.performHttpAsync(responseCallback, _self.performPostAsync);
            
        };

        this.performCreateChildEntityAsync = function(appConfigInfo, entityIdString,
                                                        requestBody, responseCallback)
        {
            
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;
    
            }

            if (Utils.isValidNonEmptyDictionary(requestBody) === false)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            if (Utils.isNullOrEmptyString(entityIdString) === true)
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }
            
            let urlString = "";
            let entityOption = appConfigInfo.entityOption;
            switch(entityOption)
            {

                case CMPLUISConstants.EntityOptions.KCompositeChildEntities:
                {

                    urlString = CMPLUISConstants.LUISURLs.KCompositeChildEntities
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);

                }
                    break;

                case CMPLUISConstants.EntityOptions.KHierarchialChildEntities:
                {

                    urlString = CMPLUISConstants.LUISURLs.KHierarchialChildEntities
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);

                }
                    break;

                case CMPLUISConstants.EntityOptions.KSubListEntities:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KSubListEntities
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);
    
                }
                    break;

            }

            _self.httpsClientProxy = this.prepareJSONHttpConnection(requestBody,
                                                                    urlString);
            _self.performHttpAsync(responseCallback, _self.performPostAsync);
            
        };

        this.performCreateEntityRoleAsync = function(appConfigInfo, entityIdString,
                                                        requestBody, responseCallback)
        {
            
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;
    
            }

            if (Utils.isValidNonEmptyDictionary(requestBody) === false)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            if (Utils.isNullOrEmptyString(entityIdString) === true)
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            let urlString = "";
            let entityOption = appConfigInfo.entityOption;
            switch(entityOption)
            {

                case CMPLUISConstants.EntityOptions.KEntityRoles:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KEntityRoles
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KCompositeEntityRoles:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KCompositeEntityRoles
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KListEntityRoles:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KListEntityRoles
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);
    
                }
                    break;
                
                case CMPLUISConstants.EntityOptions.KHierarchialEntityRoles:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KHierarchialEntityRoles
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KRegExEntityRoles:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KRegExEntityRoles
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);
    
                }
                    break;

            }

            _self.httpsClientProxy = this.prepareJSONHttpConnection(requestBody,
                                                                    urlString);
            _self.performHttpAsync(responseCallback, _self.performPostAsync);
            
        };

        this.performModifyEntityAsync = function(appConfigInfo, entityIdString,
                                                    requestBody, responseCallback,
                                                    entityCallback)
        {
            
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            if (Utils.isNullOrEmptyString(entityIdString) === true)
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            if ((entityCallback === null) || (entityCallback === undefined))
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            let urlString = "";
            let entityOption = appConfigInfo.entityOption;
            switch(entityOption)
            {

                case CMPLUISConstants.EntityOptions.KEntity:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KEntity
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KCompositeEntity:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KCompositeEntity
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KListEntity:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KListEntity
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KHierarchialEntity:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KHierarchialEntity
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);
    
                }
                    break;

            }

            this.httpsClientProxy = this.prepareJSONHttpConnection(requestBody, urlString);
            this.performHttpAsync(responseCallback, entityCallback);
            
        };

        this.performModifyChildEntityAsync = function(appConfigInfo, entityIdString,
                                                        childIdString, requestBody,
                                                        responseCallback,
                                                        entityCallback)
        {
            
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            if (Utils.isNullOrEmptyString(entityIdString) === true)
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            if (Utils.isNullOrEmptyString(childIdString) === true)
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            if ((entityCallback === null) || (entityCallback === undefined))
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            let urlString = "";
            let entityOption = appConfigInfo.entityOption;
            switch(entityOption)
            {

                case CMPLUISConstants.EntityOptions.KCompositeChildEntity:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KCompositeChildEntity
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString,
                                                                    childIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KHierarchialChildEntity:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KHierarchialChildEntity
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString,
                                                                    childIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KSubListEntity:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KSubListEntity
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString,
                                                                    childIdString);
    
                }
                    break;

            }

            this.httpsClientProxy = this.prepareJSONHttpConnection(requestBody,
                                                                    urlString);
            this.performHttpAsync(responseCallback, entityCallback);
            
        };

        this.performModifyEntityRoleAsync = function(appConfigInfo, entityIdString,
                                                        roleIdString, requestBody,
                                                        responseCallback, entityCallback)
        {
            
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            if (Utils.isNullOrEmptyString(entityIdString) === true)
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            if (Utils.isNullOrEmptyString(roleIdString) === true)
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            if ((entityCallback === null) || (entityCallback === undefined))
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            let urlString = "";
            let entityOption = appConfigInfo.entityOption;
            switch(entityOption)
            {

                case CMPLUISConstants.EntityOptions.KEntityRole:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KEntityRole
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString,
                                                                    roleIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KCompositeEntityRole:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KCompositeEntityRole
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString,
                                                                    roleIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KListEntityRole:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KListEntityRole
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString,
                                                                    roleIdString);
    
                }
                    break;
                
                case CMPLUISConstants.EntityOptions.KHierarchialEntityRole:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KHierarchialEntityRole
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString,
                                                                    roleIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KRegExEntityRole:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KRegExEntityRole
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString,
                                                                    roleIdString);
    
                }
                        break;

            }

            this.httpsClientProxy = this.prepareJSONHttpConnection(requestBody,
                                                                    urlString);
            this.performHttpAsync(responseCallback, entityCallback);
            
        };

        this.performCreateIntentAsync = function(appConfigInfo, requestBody,
                                                    responseCallback)
        {
            
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;
    
            }

            if (Utils.isValidNonEmptyDictionary(requestBody) === false)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            let urlString = "";
            let entityOption = appConfigInfo.entityOption;
            switch(entityOption)
            {

                case CMPLUISConstants.EntityOptions.KIntents:
                {

                    urlString = CMPLUISConstants.LUISURLs.KIntents
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString);

                }                                
                    break;

                case CMPLUISConstants.EntityOptions.KPrebuiltIntents:
                {

                    urlString = CMPLUISConstants.LUISURLs.KPrebuiltIntents
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString);

                }                                
                    break;

            }

            _self.httpsClientProxy = this.prepareJSONHttpConnection(requestBody,
                                                                    urlString);
            _self.performHttpAsync(responseCallback, _self.performPostAsync);
            
        };

        this.performModifyIntentAsync = function(appConfigInfo, intentIdString,
                                                    requestBody, responseCallback,
                                                    entityCallback)
        {
            
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;
    
            }

            if (Utils.isNullOrEmptyString(intentIdString) === true)
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            if ((entityCallback === null) || (entityCallback === undefined))
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            let urlString = "";
            let entityOption = appConfigInfo.entityOption;
            switch(entityOption)
            {

                case CMPLUISConstants.EntityOptions.KIntent:
                {

                    urlString = CMPLUISConstants.LUISURLs.KIntent
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    intentIdString);

                }                                
                    break;

            }

            _self.httpsClientProxy = this.prepareJSONHttpConnection(requestBody,
                                                                    urlString);
            _self.performHttpAsync(responseCallback, entityCallback);
            
        };

        this.performGetEntityAsync = function(appConfigInfo, entityIdString,
                                                responseCallback)
        {
            
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;
    
            }

            if (Utils.isNullOrEmptyString(entityIdString) === true)
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            let urlString = "";
            let entityOption = appConfigInfo.entityOption;
            switch(entityOption)
            {

                case CMPLUISConstants.EntityOptions.KEntity:
                {

                    urlString = CMPLUISConstants.LUISURLs.KEntity
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);

                }                                
                    break;

                case CMPLUISConstants.EntityOptions.KCompositeEntity:
                    {
        
                        urlString = CMPLUISConstants.LUISURLs.KCompositeEntity
                                                                .format(_self
                                                                        .regionKeyString,
                                                                        appConfigInfo
                                                                        .appIdString,
                                                                        appConfigInfo
                                                                        .versionIdString,
                                                                        entityIdString);
        
                    }
                    break;

                case CMPLUISConstants.EntityOptions.KListEntity:
                    {
        
                        urlString = CMPLUISConstants.LUISURLs.KListEntity
                                                                .format(_self
                                                                        .regionKeyString,
                                                                        appConfigInfo
                                                                        .appIdString,
                                                                        appConfigInfo
                                                                        .versionIdString,
                                                                        entityIdString);
        
                    }
                    break;

                case CMPLUISConstants.EntityOptions.KHierarchialEntity:
                    {
        
                        urlString = CMPLUISConstants.LUISURLs.KHierarchialEntity
                                                                .format(_self
                                                                        .regionKeyString,
                                                                        appConfigInfo
                                                                        .appIdString,
                                                                        appConfigInfo
                                                                        .versionIdString,
                                                                        entityIdString);
        
                    }
                    break;

                case CMPLUISConstants.EntityOptions.KRegExEntity:
                {
    
                    urlString = CMPLUISConstants.LUISURLs.KRegExEntity
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KEntityRoles:
                {
    
                    urlString = CMPLUISConstants.LUISURLs.KEntityRoles
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);
    
                }
                    break;
                
                case CMPLUISConstants.EntityOptions.KCompositeEntityRoles:
                {
    
                    urlString = CMPLUISConstants.LUISURLs.KCompositeEntityRoles
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KListEntityRoles:
                {
    
                    urlString = CMPLUISConstants.LUISURLs.KListEntityRoles
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KHierarchialEntityRoles:
                {
    
                    urlString = CMPLUISConstants.LUISURLs.KHierarchialEntityRoles
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KRegExEntityRoles:
                {
    
                    urlString = CMPLUISConstants.LUISURLs.KRegExEntityRoles
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);
    
                }
                    break;
                    
            }

            _self.httpsClientProxy = this.prepareJSONHttpConnection(null,
                                                                    urlString);
            _self.performHttpAsync(responseCallback, _self.performGetAsync);
            
        };

        this.performGetEntityRoleAsync = function(appConfigInfo, entityIdString,
                                                    roleIdString, responseCallback)
        {
            
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;
    
            }

            if (Utils.isNullOrEmptyString(entityIdString) === true)
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            if (Utils.isNullOrEmptyString(roleIdString) === true)
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            let urlString = "";
            let entityOption = appConfigInfo.entityOption;
            switch(entityOption)
            {

                case CMPLUISConstants.EntityOptions.KEntityRole:
                {

                    urlString = CMPLUISConstants.LUISURLs.KEntityRole
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString,
                                                                    roleIdString);

                }                                
                    break;

                case CMPLUISConstants.EntityOptions.KCompositeEntityRole:
                    {
        
                        urlString = CMPLUISConstants.LUISURLs.KCompositeEntityRole
                                                                        .format(_self
                                                                        .regionKeyString,
                                                                        appConfigInfo
                                                                        .appIdString,
                                                                        appConfigInfo
                                                                        .versionIdString,
                                                                        entityIdString,
                                                                        roleIdString);
        
                    }
                    break;

                case CMPLUISConstants.EntityOptions.KListEntityRole:
                    {
        
                        urlString = CMPLUISConstants.LUISURLs.KListEntityRole
                                                                .format(_self
                                                                        .regionKeyString,
                                                                        appConfigInfo
                                                                        .appIdString,
                                                                        appConfigInfo
                                                                        .versionIdString,
                                                                        entityIdString,
                                                                        roleIdString);
        
                    }
                    break;

                case CMPLUISConstants.EntityOptions.KHierarchialEntityRole:
                    {
        
                        urlString = CMPLUISConstants.LUISURLs.KHierarchialEntityRole
                                                                .format(_self
                                                                        .regionKeyString,
                                                                        appConfigInfo
                                                                        .appIdString,
                                                                        appConfigInfo
                                                                        .versionIdString,
                                                                        entityIdString,
                                                                        roleIdString);
        
                    }
                    break;

                case CMPLUISConstants.EntityOptions.KRegExEntityRole:
                {
    
                    urlString = CMPLUISConstants.LUISURLs.KRegExEntityRole
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString,
                                                                    roleIdString);
    
                }
                    break;

            }

            _self.httpsClientProxy = this.prepareJSONHttpConnection(null,
                                                                    urlString);
            _self.performHttpAsync(responseCallback, _self.performGetAsync);
            
        };

        this.performGetIntentAsync = function(appConfigInfo, intentIdString,
                                                responseCallback)
        {
            
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;
    
            }

            if (Utils.isNullOrEmptyString(intentIdString) === true)
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            let urlString = "";
            let entityOption = appConfigInfo.entityOption;
            switch(entityOption)
            {

                case CMPLUISConstants.EntityOptions.KIntent:
                {

                    urlString = CMPLUISConstants.LUISURLs.KIntent
                                                .format(_self.regionKeyString,
                                                        appConfigInfo
                                                        .appIdString,
                                                        appConfigInfo
                                                        .versionIdString,
                                                        intentIdString);

                }                                
                    break;

            }

            _self.httpsClientProxy = this.prepareJSONHttpConnection(null,
                                                                    urlString);
            _self.performHttpAsync(responseCallback, _self.performGetAsync);
            
        };

    }

    getPatternsAsync(appConfigInfo, skipLimitString, takeLimitString,
                        responseCallback)
    {

        if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
        {

            this.processArgumentNullErrorResponse(responseCallback);
            return;

        }

        let urlString = CMPLUISConstants.LUISURLs.KGetPatterns
                                                    .format(this
                                                            .regionKeyString,
                                                            appConfigInfo
                                                            .appIdString,
                                                            appConfigInfo
                                                            .versionIdString);

        if (Utils.isNullOrEmptyString(skipLimitString) === false)
            urlString = urlString.format(skipLimitString);

        if (Utils.isNullOrEmptyString(takeLimitString) === false)
            urlString = urlString.format(takeLimitString);

        this.httpsClientProxy = this.prepareJSONHttpConnection(null, urlString);
        this.performHttpAsync(responseCallback, this.performGetAsync);
        
    }

    getIntentPatternsAsync(appConfigInfo, intentIdString, responseCallback)
    {

        if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
        {

            this.processArgumentNullErrorResponse(responseCallback);
            return;

        }

        if (Utils.isNullOrEmptyString(intentIdString) === true)
        {

            this.processArgumentNullErrorResponse(responseCallback);
            return;

        }

        let urlString = CMPLUISConstants.LUISURLs.KGetPatterns
                                                    .format(this
                                                            .regionKeyString,
                                                            appConfigInfo
                                                            .appIdString,
                                                            appConfigInfo
                                                            .versionIdString,
                                                            intentIdString);

        this.httpsClientProxy = this.prepareJSONHttpConnection(null,
                                                                urlString);
        this.performHttpAsync(responseCallback, this.performGetAsync);
        
    }

    getTrainStatusAsync(appConfigInfo, responseCallback)
    {

        if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
        {

            this.processArgumentNullErrorResponse(responseCallback);
            return;

        }

        let urlString = CMPLUISConstants.LUISURLs.KTrainApplication
                                                    .format(this
                                                            .regionKeyString,
                                                            appConfigInfo
                                                            .appIdString,
                                                            appConfigInfo
                                                            .versionIdString);

        this.httpsClientProxy = this.prepareJSONHttpConnection(null,
                                                                urlString);
        this.performHttpAsync(responseCallback, this.performGetAsync);
        
    }

    reviewExamplesAsync(appConfigInfo, skipLimitString, takeLimitString,
                        responseCallback)
    {

        if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
        {

            this.processArgumentNullErrorResponse(responseCallback);
            return;

        }

        let urlString = CMPLUISConstants.LUISURLs.KModifyPatterns
                                                    .format(this
                                                            .regionKeyString,
                                                            appConfigInfo
                                                            .appIdString,
                                                            appConfigInfo
                                                            .versionIdString);

        if (Utils.isNullOrEmptyString(skipLimitString) === false)
            urlString = urlString.format(skipLimitString);

        if (Utils.isNullOrEmptyString(takeLimitString) === false)
            urlString = urlString.format(takeLimitString);

        this.httpsClientProxy = this.prepareJSONHttpConnection(requestBody,
                                                                urlString);
        this.performHttpAsync(responseCallback, this.performGetAsync);
        
    }

    createEntityAsync(appConfigInfo, requestBody, responseCallback)
    {
        
        this.performCreateEntityAsync(appConfigInfo, requestBody, responseCallback);
        
    }

    updateEntityAsync(appConfigInfo, entityIdString, requestBody,
                        responseCallback)
    {
        
        this.performModifyEntityAsync(appConfigInfo, entityIdString,
                                        requestBody, responseCallback,
                                        this.performPutAsync);
        
    }

    deleteEntityAsync(appConfigInfo, entityIdString, responseCallback)
    {
        
        this.performModifyEntityAsync(appConfigInfo, entityIdString,
                                        null, responseCallback,
                                        this.performDeleteAsync);
        
    }

    createChildEntityAsync(appConfigInfo, entityIdString, requestBody,
                            responseCallback)
    {
        
        this.performCreateChildEntityAsync(appConfigInfo, entityIdString,
                                            requestBody, responseCallback);
        
    }

    updateChildEntityAsync(appConfigInfo, entityIdString,
                            childIdString, requestBody, responseCallback)
    {
        
        this.performModifyChildEntityAsync(appConfigInfo, entityIdString,
                                            childIdString, requestBody,
                                            responseCallback, this.performPutAsync);
        
    }

    deleteChildEntityAsync(appConfigInfo, entityIdString, childIdString,
                            responseCallback)
    {
        
        this.performModifyChildEntityAsync(appConfigInfo, entityIdString,
                                            childIdString, null, responseCallback,
                                            this.performDeleteAsync);

    }

    createEntityRoleAsync(appConfigInfo, entityIdString, requestBody,
                            responseCallback)
    {
        
        this.performCreateEntityRoleAsync(appConfigInfo, entityIdString,
                                            requestBody, responseCallback);
    }

    updateEntityRoleAsync(appConfigInfo, entityIdString, roleIdString,
                            requestBody, responseCallback)
    {
        
        this.performModifyEntityRoleAsync(appConfigInfo, entityIdString,
                                            roleIdString, requestBody,
                                            responseCallback,
                                            this.performPutAsync);
        
    }

    deleteEntityRoleAsync(appConfigInfo, entityIdString, roleIdString,
                            responseCallback)
    {
        
        this.performModifyEntityRoleAsync(appConfigInfo, entityIdString,
                                            roleIdString, responseCallback,
                                            this.performDeleteAsync);
        
    }

    createIntentAsync(appConfigInfo, requestBody, responseCallback)
    {
        
        this.performCreateIntentAsync(appConfigInfo, requestBody, responseCallback);
        
    }

    updateIntentAsync(appConfigInfo, intentIdString, requestBody,
                        responseCallback)
    {
        
        this.performModifyIntentAsync(appConfigInfo, intentIdString, requestBody,
                                        responseCallback, this.performPutAsync);
        
    }

    deleteIntentAsync(appConfigInfo, intentIdString, responseCallback)
    {
        
        this.performModifyIntentAsync(appConfigInfo, intentIdString, null,
                                        responseCallback, this.performDeleteAsync);
        
    }

    getEntityAsync(appConfigInfo, entityIdString, requestBody, responseCallback)
    {
        
        this.performGetEntityAsync(appConfigInfo, entityIdString,
                                    requestBody, responseCallback);
        
    }

    getEntityRoleAsync(appConfigInfo, entityIdString, roleIdString,
                        requestBody, responseCallback)
    {
        
        this.performGetEntityRoleAsync(appConfigInfo, entityIdString, roleIdString,
                                        requestBody, responseCallback);
        
    }

    getIntentAsync(appConfigInfo, intetIdString, requestBody, responseCallback)
    {
        
        this.performGetIntentAsync(appConfigInfo, intetIdString, requestBody,
                                    responseCallback);
        
    }
    
    addLabelsAsync(appConfigInfo, requestBody, responseCallback)
    {
        
        if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
        {

            this.processArgumentNullErrorResponse(responseCallback);
            return;

        }

        if (Utils.isValidNonEmptyDictionary(requestBody) === false)
        {

            this.processArgumentNullErrorResponse(responseCallback);
            return;

        }
        
        let urlString = CMPLUISConstants.LUISURLs.KAddLabels.format(this
                                                                    .regionKeyString, 
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString);
        this.httpsClientProxy = this.prepareJSONHttpConnection(requestBody, urlString);
        this.performHttpAsync(responseCallback, this.performPostAsync);
        
    }
        
    deleteLabelAsync(appConfigInfo, exampleIdString, responseCallback)
    {
        
        if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
        {

            this.processArgumentNullErrorResponse(responseCallback);
            return;

        }

        if (Utils.isNullOrEmptyString(exampleIdString) === true)
        {

            this.processArgumentNullErrorResponse(responseCallback);
            return;

        }
        
        let urlString = CMPLUISConstants.LUISURLs.KDeleteLabel
                                                    .format(this
                                                            .regionKeyString,
                                                            appConfigInfo
                                                            .appIdString,
                                                            appConfigInfo
                                                            .versionIdString,
                                                            exampleIdString);

        this.httpsClientProxy = this.prepareJSONHttpConnection(null, urlString);
        this.performHttpAsync(responseCallback, this.performDeleteAsync);

    }

    addPatternsAsync(appConfigInfo, requestBody, responseCallback)
    {
        
        if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
        {

            this.processArgumentNullErrorResponse(responseCallback);
            return;

        }

        if (Utils.isValidNonEmptyDictionary(requestBody) === false)
        {

            this.processArgumentNullErrorResponse(responseCallback);
            return;

        }
        
        let urlString = CMPLUISConstants.LUISURLs.KModifyPatterns
                                                    .format(this
                                                            .regionKeyString,
                                                            appConfigInfo
                                                            .appIdString,
                                                            appConfigInfo
                                                            .versionIdString);

        this.httpsClientProxy = this.prepareJSONHttpConnection(requestBody,
                                                                urlString);
        this.performHttpAsync(responseCallback, this.performPostAsync);

    }

    updatePatternsAsync(appConfigInfo, requestBody, responseCallback)
    {
        
        if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
        {

            this.processArgumentNullErrorResponse(responseCallback);
            return;

        }

        if (Utils.isValidNonEmptyDictionary(requestBody) === false)
        {

            this.processArgumentNullErrorResponse(responseCallback);
            return;

        }
        
        let urlString = CMPLUISConstants.LUISURLs.KModifyPatterns
                                                    .format(this
                                                            .regionKeyString,
                                                            appConfigInfo
                                                            .appIdString,
                                                            appConfigInfo
                                                            .versionIdString);

        this.httpsClientProxy = this.prepareJSONHttpConnection(requestBody,
                                                                urlString);
        this.performHttpAsync(responseCallback, this.performPutAsync);

    }

    deletePatternsAsync(appConfigInfo, requestBody, responseCallback)
    {
        
        if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
        {

            this.processArgumentNullErrorResponse(responseCallback);
            return;

        }

        if (Utils.isValidNonEmptyDictionary(requestBody) === false)
        {

            this.processArgumentNullErrorResponse(responseCallback);
            return;

        }
        
        let urlString = CMPLUISConstants.LUISURLs.KModifyPatterns
                                                    .format(this
                                                            .regionKeyString,
                                                            appConfigInfo
                                                            .appIdString,
                                                            appConfigInfo
                                                            .versionIdString);

        this.httpsClientProxy = this.prepareJSONHttpConnection(requestBody,
                                                                urlString);
        this.performHttpAsync(responseCallback, this.performDeleteAsync);

    }

    trainApplicationAsync(appConfigInfo, responseCallback)
    {

        if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
        {

            this.processArgumentNullErrorResponse(responseCallback);
            return;

        }

        let urlString = CMPLUISConstants.LUISURLs.KTrainApplication
                                                    .format(this
                                                            .regionKeyString,
                                                            appConfigInfo
                                                            .appIdString,
                                                            appConfigInfo
                                                            .versionIdString);

        this.httpsClientProxy = this.prepareJSONHttpConnection(null,
                                                                urlString);
        this.performHttpAsync(responseCallback, this.performPostAsync);
        
    }
    
}

module.exports = CMPLUISBinder;