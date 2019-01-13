/*jshint esversion: 6 */

const CMPLUISBinder = require("./CMPLUISBinder");
const CMPLUISConstants = require("./CMPLUISConstants");
const HttpConnectionRef = require("../node_modules/https_connection_binder");
const Utils = require("./Utils");
// const Utils = require("../node_modules/utility_helper");

class CMPLUISPatternBinder extends CMPLUISBinder
{
    
    constructor(subscriptionKeyString, regionKeyString)
    {

        super(subscriptionKeyString, regionKeyString);
        const _self = this;
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

        let urlString = CMPLUISConstants.LUISURLs.KGetIntentPatterns
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

}

module.exports = CMPLUISPatternBinder;