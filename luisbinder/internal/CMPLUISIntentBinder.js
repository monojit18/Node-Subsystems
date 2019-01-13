/*jshint esversion: 6 */

const CMPLUISBinder = require("./CMPLUISBinder");
const CMPLUISConstants = require("./CMPLUISConstants");
const HttpConnectionRef = require("../node_modules/https_connection_binder");
const Utils = require("./Utils");
// const Utils = require("../node_modules/utility_helper");

class CMPLUISIntentBinder extends CMPLUISBinder
{
    
    constructor(subscriptionKeyString, regionKeyString)
    {

        super(subscriptionKeyString, regionKeyString);
        const _self = this;
        
        this.performCreateIntentAsync = (appConfigInfo, requestBody,
                                            responseCallback) =>
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

        this.performModifyIntentAsync = (appConfigInfo, intentIdString,
                                            requestBody, responseCallback,
                                            entityCallback) =>
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

        this.performGetIntentAsync = (appConfigInfo, intentIdString,
                                        responseCallback) =>
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

        this.performGetAllIntentsAsync = (appConfigInfo, skipLimitString,
                                            takeLimitString,
                                            responseCallback) =>
        {
            
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;
    
            }

            let urlString = "";
            let entityOption = appConfigInfo.entityOption;
            switch(entityOption)
            {

                case CMPLUISConstants.EntityOptions.KGetIntents:
                {

                    urlString = CMPLUISConstants.LUISURLs.KGetIntents
                                                .format(_self.regionKeyString,
                                                        appConfigInfo
                                                        .appIdString,
                                                        appConfigInfo
                                                        .versionIdString);

                    if (Utils.isNullOrEmptyString(skipLimitString) === false)
                        urlString = urlString.format(skipLimitString);

                    if (Utils.isNullOrEmptyString(takeLimitString) === false)
                        urlString = urlString.format(takeLimitString);                                                    

                }                                
                    break;

            }

            _self.httpsClientProxy = this.prepareJSONHttpConnection(null,
                                                                    urlString);
            _self.performHttpAsync(responseCallback, _self.performGetAsync);
            
        };

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

    getIntentAsync(appConfigInfo, intetIdString, responseCallback)
    {
        
        this.performGetIntentAsync(appConfigInfo, intetIdString,
                                    responseCallback);
        
    }

    getAllIntentsAsync(appConfigInfo, skipLimitString, takeLimitString,
                        responseCallback)
    {
        
        this.performGetAllIntentsAsync(appConfigInfo, skipLimitString,
                                        takeLimitString,
                                        responseCallback);
        
    }
}

module.exports = CMPLUISIntentBinder;