/*jshint esversion: 6 */

const KAccountKey = "Account-Key";
const KRegionName = "Region";
const KRegionKey = "REGION_KEY";
const KBase64Key = "base64";
const KUploadLimit = "1000mb";
const KKnowledgeBases = "/knowledgebases/";


const ExceptionMessages =
{

    KArgumentNullMessage : "Invalid OR Null Argument",
    KRangeErrorMessage : "Out of Range or Bound",
    KReferenceErrorMessage : "Invalid Reference",
    KSyntaxErrorMessage : "Error in Parsing",
    KTypeErrorMessage : "Invalid Type",
    KURIErrorMessage : "Invalid URI Parameters",
    
};

const DefaultResponseMessages =
{

    KWelcomeMessage : "Welcome to Cognitive Binder API set for Azure!\n"  
    
};

const QnAMakerURLs =
{

    KCreateKnowledgeBase : "https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/knowledgebases/create",
    KCheckStatusLoop : "https://westus.api.cognitive.microsoft.com/qnamaker/v4.0",
    KGetKnowledgeBaseDetails : "https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/knowledgebases/{0}",
    KGetKnowledgeBasesForUser : "https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/knowledgebases", 
    KGetEndpointKeys : "https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/endpointkeys",
    KGetOperationDetails : "https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/operations/{0}",
    KDownloadAlterations : "https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/alterations",
    KDownloadKnowledgeBase : "https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/knowledgebases/{0}/{1}/qna",
    KPublishKnowledgeBase : "https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/knowledgebases/{0}",
    KRefreshEndpointKeys : "https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/endpointkeys/{0}",
    KReplaceAlterations : "https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/alterations",
    KReplaceKnowledgeBase : "https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/knowledgebases/{0}",
    KUpdateKnowledgeBase : "https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/knowledgebases/{0}",
    KDeleteKnowledgeBase : "https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/knowledgebases/{0}"  
    
};

const QnAMakerHeaders =
{

    KSubscriptionKey : "Ocp-Apim-Subscription-Key",
    KLocation : "location",
    
};

const QnAMakerStatus =
{

    KSucceeded : "Succeeded",
    KNotStarted : "NotStarted",
    KRunning : "Running"
    
};

const HttpStatusCodes =
{

    KBadRequest : 400,
    KUnAuthorized : 401,
    KForbidden : 402,
    KInternalServerError : 500,
    KServiceUnavailable : 503,
    KNoInternet : 1000,
    KSuccess : 200

};

class CMPQnAMakerConstants
{
        
    static get AccountKey()                 { return KAccountKey; }
    static get RegionName()                 { return KRegionName; }
    static get RegionKey()                  { return KRegionKey; }
    static get ContentModeratorApiKey()     { return KContentModeratorApiKey; }
    static get Base64Key()                  { return KBase64Key; }
    static get HttpStatusCodes()            { return HttpStatusCodes; }
    static get ExceptionMessages()          { return ExceptionMessages; }
    static get UploadLimit()                { return KUploadLimit; }
    static get DefaultResponseMessages()    { return DefaultResponseMessages; }
    static get QnAMakerURLs()               { return QnAMakerURLs; }
    static get QnAMakerHeaders()            { return QnAMakerHeaders; }
    static get QnAMakerStatus()             { return QnAMakerStatus; }
    static get KnowledgeBases()             { return KKnowledgeBases; }

}

module.exports = CMPQnAMakerConstants;