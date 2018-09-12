/*jshint esversion: 6 */

const KBase64Key = "base64";
const KUploadLimit = "1000mb";

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

    KWelcomeMessage : "Welcome to LUIS Binder API set for Azure!\n"  
    
};

const DefaultApiConfigs  =
{

    KRegion : "",
    KAppId : "",
    KVewrionId : "",
    KSkipLimit : 0,
    KTakeLimit : 500

};

const LUISURLs =
{
    
    KAddLabels : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/examples",
    KDeleteLabel : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/examples/{3}",    
    KReviewLabel : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/examples/{3}?skip={4}&take={5}",
    KTrainApplication : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/train",

    KEntities : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/entities",
    KCompositeEntities : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/compositeentities",
    KListEntities : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/closedlists",
    KHierarchialEntities : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/hierarchicalentities",
    KRegExEntities : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/regexentities",
    KCompositeChildEntities : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/compositeentities/{3}/children",
    KHierarchialChildEntities : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/hierarchicalentities/{3}/children",
    KSubListEntities : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/closedlists/{3}/sublists",
    KEntity : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/entities/{3}",
    KCompositeEntity : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/compositeentities/{3}",
    KListEntity : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/closedlists/{3}",
    KHierarchialEntity : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/hierarchicalentities/{3}",
    KRegExEntity : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/regexentities/{3}",
    KCompositeChildEntity : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/compositeentities/{3}/children/{4}",
    KHierarchialChildEntity : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/hierarchicalentities/{3}/children/{4}",
    KSubListEntity : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/closedlists/{3}/sublists/{4}",        

    KEntityRoles : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/entities/{3}/roles",
    KCompositeEntityRoles : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/compositeentities/{3}/roles",    
    KListEntityRoles : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/closedlists/{3}/roles",    
    KHierarchialEntityRoles : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/hierarchicalentities/{3}/roles",
    KRegExEntityRoles : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/regexentities/{3}/roles",    
    KEntityRole : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/entities/{3}/roles/{4}",
    KCompositeEntityRole : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/compositeentities/{3}/roles/{4}",
    KListEntityRole : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/closedlists/{3}/roles/{4}",
    KHierarchialEntityRole : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/hierarchicalentities/{3}/roles/{4}",
    KRegExEntityRole : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/regexentities/{3}/roles/{4}",    

    KIntents : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/intents",
    KPrebuiltIntents : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/customprebuiltintents",
    KIntent : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/intents/{3}",
    
    KGetPatterns : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/patternrules?skip={3}&take={4}",
    KGetIntentPatterns : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/intents/{3}/patternrules",    
    KModifyPatterns : "https://{0}.api.cognitive.microsoft.com/luis/api/v2.0/apps/{1}/versions/{2}/patternrules",


    
};

const LUISHeaders =
{

    KSubscriptionKey : "Ocp-Apim-Subscription-Key",
    KRegionKey : "REGION_KEY",
    
};

const EntityOptions =
{

    KEntities : "entities",
    KCompositeEntities : "compositeentities",
    KListEntities : "listentities",
    KHierarchialEntities : "hierarchialentities",
    KRegExEntities : "regexentities",
    KCompositeChildEntities : "compositechildentities",
    KHierarchialChildEntities : "hierarchialchildentities",    
    KSubListEntities : "sublistentities",    
    KEntity : "entity",
    KCompositeEntity : "compositeentity",
    KListEntity : "listentity",
    KHierarchialEntity : "hierarchialentity",
    KRegExEntity : "regexentity",
    KCompositeChildEntity : "compositechildentity",
    KHierarchialChildEntity : "hierarchialchildentity",
    KSubListEntity : "sublistentity",        
    
    KEntityRoles : "entityroles",
    KCompositeEntityRoles : "compositeentityroles",
    KListEntityRoles : "listentityroles",
    KHierarchialEntityRoles : "hierarchialentityroles",
    KRegExEntityRoles : "regexentityroles",    
    KEntityRole : "entityrole",
    KCompositeEntityRole : "compositeentityrole",
    KListEntityRole : "listentityrole",
    KHierarchialEntityRole : "hierarchialentityrole",
    KRegExEntityRole : "regexentityrole",    

    KIntents : "intent",
    KPrebuiltIntents : "prebuiltintent",
    KIntent : "modifyintent",
    KGetIntent : "getintent",
    KGetAllPrebuiltIntents : "getallprebuiltintents",


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

class CMPLUISConstants
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
    static get DefaultApiConfigs()          { return DefaultApiConfigs; }
    static get LUISURLs()                   { return LUISURLs; }
    static get LUISHeaders()                { return LUISHeaders; }
    static get QnAMakerStatus()             { return QnAMakerStatus; }
    static get EntityOptions()        { return EntityOptions; }

}

module.exports = CMPLUISConstants;