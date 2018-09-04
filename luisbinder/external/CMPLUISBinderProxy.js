/*jshint esversion: 6 */

const CMPLUISBinder = require("../internal/CMPLUISBinder");
const CMPLUISConstants = require("../internal/CMPLUISConstants");

class CMPLUISBinderProxy
{

    constructor(subscriptionKeyString, regionKeyString)
    {

        const _self = this;
        this.luisBinder = new CMPLUISBinder(subscriptionKeyString, regionKeyString);
        this.entityOptions = CMPLUISConstants.EntityOptions;
        
    }

    getPatternsAsync(appConfigInfo, skipLimitString, takeLimitString,
                        responseCallback)
    {

        this.luisBinder.getPatternsAsync(appConfigInfo, skipLimitString, takeLimitString,
                                        responseCallback);

    }

    getIntentPatternsAsync(appConfigInfo, intentIdString, responseCallback)
    {

        this.luisBinder.getIntentPatternsAsync(appConfigInfo, intentIdString,
                                                responseCallback);
                                        
    }

    getTrainStatusAsync(appConfigInfo, responseCallback)
    {

        this.luisBinder.getTrainStatusAsync(appConfigInfo, responseCallback);

    }

    reviewExamplesAsync(appConfigInfo, skipLimitString, takeLimitString,
                        responseCallback)
    {

        this.luisBinder.reviewExamplesAsync(appConfigInfo, skipLimitString,
                                            takeLimitString, responseCallback);

    }

    createEntityAsync(appConfigInfo, requestBody, responseCallback)
    {

        this.luisBinder.createEntityAsync(appConfigInfo, requestBody,
                                            responseCallback);

    }

    updateEntityAsync(appConfigInfo, entityIdString, requestBody, responseCallback)
    {

        this.luisBinder.updateEntityAsync(appConfigInfo, entityIdString, requestBody,
                                            responseCallback);

    }

    deleteEntityAsync(appConfigInfo, entityIdString, responseCallback)
    {

        this.luisBinder.deleteEntityAsync(appConfigInfo, entityIdString,
                                            responseCallback);

    }

    createChildEntityAsync(appConfigInfo, entityIdString, requestBody,
                            responseCallback)
    {

        this.luisBinder.createChildEntityAsync(appConfigInfo, entityIdString,
                                                requestBody, responseCallback);

    }

    updateChildEntityAsync(appConfigInfo, entityIdString,
                            childIdString, requestBody, responseCallback)
    {

        this.luisBinder.updateChildEntityAsync(appConfigInfo, entityIdString,
                                                childIdString, requestBody,
                                                responseCallback);

    }

    deleteChildEntityAsync(appConfigInfo, entityIdString, childIdString,
                            responseCallback)
    {

        this.luisBinder.deleteChildEntityAsync(appConfigInfo, entityIdString,
                                                childIdString, responseCallback);

    }

    createEntityRoleAsync(appConfigInfo, entityIdString, requestBody,
                            responseCallback)
    {

        this.luisBinder.createEntityRoleAsync(appConfigInfo, entityIdString,
                                                requestBody, responseCallback);

    }
    
    updateEntityRoleAsync(appConfigInfo, entityIdString, roleIdString,
                            requestBody, responseCallback)
    {
        
        this.luisBinder.updateEntityRoleAsync(appConfigInfo, entityIdString,
                                                roleIdString, requestBody,
                                                responseCallback);
    }

    deleteEntityRoleAsync(appConfigInfo, entityIdString, roleIdString,
                            requestBody, responseCallback)
    {
        
        this.luisBinder.deleteEntityRoleAsync(appConfigInfo, entityIdString,
                                                roleIdString, requestBody,
                                                responseCallback);
    }

    createIntentAsync(appConfigInfo, requestBody, responseCallback)
    {

        this.luisBinder.createIntentAsync(appConfigInfo, requestBody,
                                            responseCallback);

    }

    updateIntentAsync(appConfigInfo, intentIdString, requestBody,
                        responseCallback)
    {

        this.luisBinder.updateIntentAsync(appConfigInfo, intentIdString,
                                            requestBody, responseCallback);

    }

    deleteIntentAsync(appConfigInfo, intentIdString, responseCallback)
    {

        this.luisBinder.deleteIntentAsync(appConfigInfo, intentIdString,
                                            responseCallback);

    }

    getEntityAsync(appConfigInfo, entityIdString, responseCallback)
    {

        this.luisBinder.getEntityAsync(appConfigInfo, entityIdString,
                                        responseCallback);

    }

    getEntityRoleAsync(appConfigInfo, entityIdString, roleIdString,
                        responseCallback)
    {

        this.luisBinder.getEntityRoleAsync(appConfigInfo, entityIdString,
                                            roleIdString, responseCallback);

    }

    getIntentAsync(appConfigInfo, intetIdString, responseCallback)
    {

        this.luisBinder.getIntentAsync(appConfigInfo, intetIdString,
                                        responseCallback);

    }

    addLabelsAsync(appConfigInfo, requestBody, responseCallback)
    {

        this.luisBinder.addLabelsAsync(appConfigInfo, requestBody, responseCallback);

    }

    deleteLabelAsync(appConfigInfo, exampleIdString, responseCallback)
    {

        this.luisBinder.deleteLabelAsync(appConfigInfo, exampleIdString,
                                            responseCallback);

    }

    updatePatternsAsync(appConfigInfo, requestBody, responseCallback)
    {

        this.luisBinder.updatePatternsAsync(appConfigInfo, requestBody,
                                            responseCallback);

    }

    deletePatternsAsync(appConfigInfo, requestBody, responseCallback)
    {

        this.luisBinder.deletePatternsAsync(appConfigInfo, requestBody,
                                            responseCallback);

    }

    trainApplicationAsync(appConfigInfo, responseCallback)
    {

        this.luisBinder.trainApplicationAsync(appConfigInfo, responseCallback);

    }
    
}

module.exports = CMPLUISBinderProxy;