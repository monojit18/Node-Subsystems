/*jshint esversion: 6 */

const CMPLUISBinder = require("../internal/CMPLUISBinder");
const CMPLUISEntityBinder = require("../internal/CMPLUISEntityBinder");
const CMPLUISIntentBinder = require("../internal/CMPLUISIntentBinder");
const CMPLUISPatternBinder = require("../internal/CMPLUISPatternBinder");
const CMPLUISLabelsBinder = require("../internal/CMPLUISLabelsBinder");
const CMPLUISTrainBinder = require("../internal/CMPLUISTrainBinder");
const CMPLUISPredictionBinder = require("../internal/CMPLUISPredictionBinder");
const CMPLUISConstants = require("../internal/CMPLUISConstants");

class CMPLUISBinderProxy
{

    constructor(subscriptionKeyString, regionKeyString)
    {

        const _self = this;
        this.luisBinder = new CMPLUISBinder(subscriptionKeyString,
                                            regionKeyString);
        this.luisEntityBinder = new CMPLUISEntityBinder(subscriptionKeyString,
                                                        regionKeyString);

        this.luisIntentBinder = new CMPLUISIntentBinder(subscriptionKeyString,
                                                        regionKeyString);

        this.luisPatternBinder = new CMPLUISPatternBinder(subscriptionKeyString,
                                                            regionKeyString);

        this.luisLabelsBinder = new CMPLUISLabelsBinder(subscriptionKeyString,
                                                        regionKeyString);

        this.luisTrainBinder = new CMPLUISTrainBinder(subscriptionKeyString,
                                                        regionKeyString);

        this.luisPredictionBinder = new CMPLUISPredictionBinder(subscriptionKeyString,
                                                                regionKeyString);

        this.entityOptions = CMPLUISConstants.EntityOptions;
        
    }

    getPatternsAsync(appConfigInfo, skipLimitString, takeLimitString,
                        responseCallback)
    {

        this.luisPatternBinder.getPatternsAsync(appConfigInfo,
                                                skipLimitString,
                                                takeLimitString,
                                                responseCallback);

    }

    getIntentPatternsAsync(appConfigInfo, intentIdString, responseCallback)
    {

        this.luisPatternBinder.getIntentPatternsAsync(appConfigInfo,
                                                        intentIdString,
                                                        responseCallback);
                                        
    }

    getTrainStatusAsync(appConfigInfo, responseCallback)
    {

        this.luisTrainBinder.getTrainStatusAsync(appConfigInfo,
                                                    responseCallback);

    }

    reviewExamplesAsync(appConfigInfo, skipLimitString, takeLimitString,
                        responseCallback)
    {

        this.luisLabelsBinder.reviewExamplesAsync(appConfigInfo,
                                                    skipLimitString,
                                                    takeLimitString,
                                                    responseCallback);

    }

    createEntityAsync(appConfigInfo, requestBody, responseCallback)
    {

        this.luisEntityBinder.createEntityAsync(appConfigInfo, requestBody,
                                                responseCallback);

    }

    updateEntityAsync(appConfigInfo, entityIdString, requestBody, responseCallback)
    {

        this.luisEntityBinder.updateEntityAsync(appConfigInfo, entityIdString,
                                                requestBody, responseCallback);

    }

    deleteEntityAsync(appConfigInfo, entityIdString, responseCallback)
    {

        this.luisEntityBinder.deleteEntityAsync(appConfigInfo, entityIdString,
                                                responseCallback);

    }

    createChildEntityAsync(appConfigInfo, entityIdString, requestBody,
                            responseCallback)
    {

        this.luisEntityBinder.createChildEntityAsync(appConfigInfo,
                                                        entityIdString,
                                                        requestBody,
                                                        responseCallback);

    }

    updateChildEntityAsync(appConfigInfo, entityIdString,
                            childIdString, requestBody, responseCallback)
    {

        this.luisEntityBinder.updateChildEntityAsync(appConfigInfo,
                                                        entityIdString,
                                                        childIdString,
                                                        requestBody,
                                                        responseCallback);

    }

    deleteChildEntityAsync(appConfigInfo, entityIdString, childIdString,
                            responseCallback)
    {

        this.luisEntityBinder.deleteChildEntityAsync(appConfigInfo,
                                                        entityIdString,
                                                        childIdString,
                                                        responseCallback);

    }

    createEntityRoleAsync(appConfigInfo, entityIdString, requestBody,
                            responseCallback)
    {

        this.luisEntityBinder.createEntityRoleAsync(appConfigInfo,
                                                    entityIdString,
                                                    requestBody,
                                                    responseCallback);

    }
    
    updateEntityRoleAsync(appConfigInfo, entityIdString, roleIdString,
                            requestBody, responseCallback)
    {
        
        this.luisEntityBinder.updateEntityRoleAsync(appConfigInfo,
                                                    entityIdString,
                                                    roleIdString,
                                                    requestBody,
                                                    responseCallback);
    }

    deleteEntityRoleAsync(appConfigInfo, entityIdString, roleIdString,
                            requestBody, responseCallback)
    {
        
        this.luisEntityBinder.deleteEntityRoleAsync(appConfigInfo,
                                                    entityIdString,
                                                    roleIdString,
                                                    requestBody,
                                                    responseCallback);
    }

    createIntentAsync(appConfigInfo, requestBody, responseCallback)
    {

        this.luisIntentBinder.createIntentAsync(appConfigInfo,
                                                requestBody,
                                                responseCallback);

    }

    updateIntentAsync(appConfigInfo, intentIdString, requestBody,
                        responseCallback)
    {

        this.luisIntentBinder.updateIntentAsync(appConfigInfo,
                                                intentIdString,
                                                requestBody,
                                                responseCallback);

    }

    deleteIntentAsync(appConfigInfo, intentIdString, responseCallback)
    {

        this.luisIntentBinder.deleteIntentAsync(appConfigInfo,
                                                intentIdString,
                                                responseCallback);

    }

    getEntityAsync(appConfigInfo, entityIdString, responseCallback)
    {

        this.luisEntityBinder.getEntityAsync(appConfigInfo,
                                                entityIdString,
                                                responseCallback);

    }

    getAllEntitiesAsync(appConfigInfo, skipLimitString, takeLimitString,
                        responseCallback)
    {

        this.luisEntityBinder.getAllEntitiesAsync(appConfigInfo,
                                                    skipLimitString,
                                                    takeLimitString,
                                                    responseCallback);

    }

    getHierarchialEntityAsync(appConfigInfo, entityIdString,
                                responseCallback)
    {
        
        this.luisEntityBinder.getHierarchialEntityAsync(appConfigInfo,
                                                        entityIdString,
                                                        responseCallback);
                
    }

    getAllHierarchialEntitiesAsync(appConfigInfo, skipLimitString,
                                    takeLimitString,
                                    responseCallback)
    {

        this.luisEntityBinder.getAllHierarchialEntitiesAsync(appConfigInfo,
                                                                skipLimitString,
                                                                takeLimitString,
                                                                responseCallback);
        
    }

    getEntityRoleAsync(appConfigInfo, entityIdString, roleIdString,
                        responseCallback)
    {

        this.luisEntityBinder.getEntityRoleAsync(appConfigInfo,
                                                    entityIdString,
                                                    roleIdString,
                                                    responseCallback);

    }

    getIntentAsync(appConfigInfo, intetIdString, responseCallback)
    {

        this.luisIntentBinder.getIntentAsync(appConfigInfo,
                                                intetIdString,
                                                responseCallback);

    }

    getAllIntentsAsync(appConfigInfo, skipLimitString, takeLimitString,
                        responseCallback)
    {
        this.luisIntentBinder.getAllIntentsAsync(appConfigInfo,
                                                    skipLimitString,
                                                    takeLimitString,
                                                    responseCallback);

    }

    addLabelsAsync(appConfigInfo, requestBody, responseCallback)
    {

        this.luisLabelsBinder.addLabelsAsync(appConfigInfo, requestBody,
                                                responseCallback);

    }

    deleteLabelAsync(appConfigInfo, exampleIdString, responseCallback)
    {

        this.luisLabelsBinder.deleteLabelAsync(appConfigInfo,
                                                exampleIdString,
                                                responseCallback);

    }

    updatePatternsAsync(appConfigInfo, requestBody, responseCallback)
    {

        this.luisPatternBinder.updatePatternsAsync(appConfigInfo,
                                                    requestBody,
                                                    responseCallback);

    }

    addPatternsAsync(appConfigInfo, requestBody, responseCallback)
    {

        this.luisPatternBinder.addPatternsAsync(appConfigInfo,
                                                requestBody,
                                                responseCallback);

    }

    deletePatternsAsync(appConfigInfo, requestBody, responseCallback)
    {

        this.luisPatternBinder.deletePatternsAsync(appConfigInfo,
                                                    requestBody,
                                                    responseCallback);

    }

    trainApplicationAsync(appConfigInfo, responseCallback)
    {

        this.luisTrainBinder.trainApplicationAsync(appConfigInfo,
                                                    responseCallback);

    }

    getPredictionsAsync(appConfigInfo, requestBody, responseCallback)
    {

        this.luisPredictionBinder.getPredictionsAsync(appConfigInfo,
                                                        requestBody,
                                                        responseCallback);

    }
    
}

module.exports = CMPLUISBinderProxy;