/*jshint esversion: 6 */

const CMPLUISBinder = require("./CMPLUISBinder");
const CMPLUISConstants = require("./CMPLUISConstants");
const HttpConnectionRef = require("../node_modules/https_connection_binder");
// const Utils = require("../commons/Utils");
const Utils = require("../node_modules/utility_helper");

class CMPLUISTrainBinder extends CMPLUISBinder
{
    
    constructor(subscriptionKeyString, regionKeyString)
    {

        super(subscriptionKeyString, regionKeyString);
        const _self = this;
        
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

module.exports = CMPLUISTrainBinder;