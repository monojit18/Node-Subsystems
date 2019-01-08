/*jshint esversion: 6 */

const CMPLUISBinder = require("./CMPLUISBinder");
const CMPLUISConstants = require("./CMPLUISConstants");
const HttpConnectionRef = require("../node_modules/https_connection_binder");
const Utils = require("../commons/Utils");
// const Utils = require("../node_modules/utility_helper");

class CMPLUISPredictionBinder extends CMPLUISBinder
{
    
    constructor(subscriptionKeyString, regionKeyString)
    {

        super(subscriptionKeyString, regionKeyString);
        const _self = this;
        
    }

    getPredictionsAsync(appConfigInfo, requestBody, responseCallback)
    {

        if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
        {

            this.processArgumentNullErrorResponse(responseCallback);
            return;

        }

        let urlString = CMPLUISConstants.LUISURLs.KGetPredictions
                                                    .format(this
                                                            .regionKeyString,
                                                            appConfigInfo
                                                            .appIdString);

        this.httpsClientProxy = this.prepareJSONQueryHttpConnection(
                                        requestBody, appConfigInfo
                                                        .queryDictionary,
                                                        urlString);
        this.performHttpAsync(responseCallback, this.performPostAsync);
        
    }
}

module.exports = CMPLUISPredictionBinder;