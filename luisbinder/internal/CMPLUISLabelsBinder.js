/*jshint esversion: 6 */

const CMPLUISBinder = require("./CMPLUISBinder");
const CMPLUISConstants = require("./CMPLUISConstants");
const HttpConnectionRef = require("../node_modules/https_connection_binder");
const Utils = require("../commons/Utils");
// const Utils = require("../node_modules/utility_helper");

class CMPLUISLabelsBinder extends CMPLUISBinder
{
    
    constructor(subscriptionKeyString, regionKeyString)
    {

        super(subscriptionKeyString, regionKeyString);
        const _self = this;
        
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

    reviewExamplesAsync(appConfigInfo, skipLimitString, takeLimitString,
                        responseCallback)
    {

        if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
        {

            this.processArgumentNullErrorResponse(responseCallback);
            return;

        }

        let urlString = CMPLUISConstants.LUISURLs.KReviewLabel
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
}

module.exports = CMPLUISLabelsBinder;