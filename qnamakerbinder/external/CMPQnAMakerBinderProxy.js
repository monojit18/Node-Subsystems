/*jshint esversion: 6 */

const CMPQnAMakerBinder = require("../internal/CMPQnAMakerBinder");

class CMPQnAMakerBinderProxy
{

    constructor(subscriptionKeyString)
    {

        const _self = this;
        this.qnaMakerBinder = new CMPQnAMakerBinder(subscriptionKeyString);
        
    }

    createKnowledgeBaseAsync(requestBody, responseCallback)
    {

        this.qnaMakerBinder.createKnowledgeBaseAsync(requestBody, responseCallback);

    }

    getKnowledgeBasesForUserAsync(responseCallback)
    {

        this.qnaMakerBinder.getKnowledgeBasesForUserAsync(responseCallback);

    }

    getKnowledgeBaseDetailsAsync(kbIdString, responseCallback)
    {

        this.qnaMakerBinder.getKnowledgeBaseDetailsAsync(kbIdString,
                                                            responseCallback);

    }

    getOperationDetailsAsync(operationIdString, responseCallback)
    {

        this.qnaMakerBinder.getOperationDetailsAsync(operationIdString,
                                                        responseCallback);

    }

    getEndpointKeysAsync(responseCallback)
    {

        this.qnaMakerBinder.getEndpointKeysAsync(responseCallback);

    }

    downloadAlterationsAsync(responseCallback)
    {
        
        this.qnaMakerBinder.downloadAlterationsAsync(responseCallback);

    }

    downloadKnowledgeBaseAsync(kbIdString, responseCallback)
    {
        
        this.qnaMakerBinder.downloadKnowledgeBaseAsync(kbIdString,
                                                        responseCallback);

    }

    publishKnowledgeBaseAsync(kbIdString, responseCallback)
    {
        
        this.qnaMakerBinder.publishKnowledgeBaseAsync(kbIdString, responseCallback);

    }

    createAndPublishKnowledgeBaseAsync(requestBody, responseCallback)
    {
        
        this.qnaMakerBinder.createAndPublishKnowledgeBaseAsync(requestBody,
                                                                responseCallback);

    }

    replaceAlterationAsync(requestBody, responseCallback)
    {
        
        this.qnaMakerBinder.replaceAlterationAsync(requestBody, responseCallback);

    }

    replaceKnowledgeBaseAsync(kbIdString, requestBody, responseCallback)
    {
        
        this.qnaMakerBinder.replaceKnowledgeBaseAsync(kbIdString, requestBody,
                                                        responseCallback);

    }

    updateKnowledgeBaseAsync(kbIdString, requestBody, responseCallback)
    {
        
        this.qnaMakerBinder.updateKnowledgeBaseAsync(kbIdString, requestBody,
                                                        responseCallback);

    }

    refreshEndpointKeysAsync(keyTypeString, requestBody, responseCallback)
    {
        
        this.qnaMakerBinder.refreshEndpointKeysAsync(keyTypeString, requestBody,
                                                        responseCallback);

    }

    deleteKnowledgeBaseAsync(keyTypeString, responseCallback)
    {
        
        this.qnaMakerBinder.deleteKnowledgeBaseAsync(keyTypeString,
                                                        responseCallback);

    }

    deleteAllKnowledgeBasesAsync(responseCallback)
    {
        
        this.qnaMakerBinder.deleteAllKnowledgeBasesAsync(responseCallback);

    }
    
}

module.exports = CMPQnAMakerBinderProxy;